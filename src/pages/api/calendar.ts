import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	months: {
		name: string;
		days: { date: string; isCurrentMonth?: boolean; isToday?: boolean }[];
	}[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// Get current date
	const currentDate = new Date();

	// Get current year
	const currentYear = currentDate.getFullYear();

	// Define months
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const data = {
		months: months.map((month, index) => {
			// Add 1 to index because months are 0 indexed
			let isCurrentMonth = currentDate.getMonth() === index;

			return {
				name: month,
				days: generateDaysForMonth(
					`${currentYear}-${String(index + 1).padStart(2, "0")}`,
					isCurrentMonth,
					currentDate.toISOString().slice(0, 10),
				),
			};
		}),
	};

	res.status(200).json(data);
}

function generateDaysForMonth(month: string, isCurrentMonth: boolean, today: string) {
	const numberOfDays = new Date(
		Number(month.split("-")[0]),
		Number(month.split("-")[1]),
		0,
	).getDate();
	let days = [];

	for (let i = 1; i <= numberOfDays; i++) {
		days.push({
			date: `${month}-${String(i).padStart(2, "0")}`,
			isCurrentMonth,
			isToday: `${month}-${String(i).padStart(2, "0")}` === today,
		});
	}

	return days;
}
