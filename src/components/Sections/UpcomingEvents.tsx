import { FC } from "react";
import Image from "next/image";
import {
	CalendarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	MapPinIcon,
} from "@heroicons/react/20/solid";

interface Event {
	id: number;
	date: string;
	time: string;
	datetime: string;
	name: string;
	imageUrl: string;
	location: string;
}

interface Day {
	date: string;
	isCurrentMonth?: boolean;
	isToday?: boolean;
	isSelected?: boolean;
}

const events: Event[] = [
	{
		id: 1,
		date: "August 15th, 2023",
		time: "3:00 PM",
		datetime: "2023-08-10T17:00",
		name: "Food Service Program",
		imageUrl: "/event7.jpeg",
		location: "Alara Palace, Ilara, Epe, Lagos",
	},
	// More events...
];
const days: Day[] = [
	{ date: "2023-7-27" },
	{ date: "2023-7-28" },
	{ date: "2023-7-29" },
	{ date: "2023-7-30" },
	{ date: "2023-7-31" },
	{ date: "2023-08-01", isCurrentMonth: true },
	{ date: "2023-08-02", isCurrentMonth: true },
	{ date: "2023-08-03", isCurrentMonth: true },
	{ date: "2023-08-04", isCurrentMonth: true },
	{ date: "2023-08-05", isCurrentMonth: true },
	{ date: "2023-08-06", isCurrentMonth: true },
	{ date: "2023-08-07", isCurrentMonth: true },
	{ date: "2023-08-08", isCurrentMonth: true },
	{ date: "2023-08-09", isCurrentMonth: true },
	{ date: "2023-08-10", isCurrentMonth: true },
	{ date: "2023-08-11", isCurrentMonth: true },
	{ date: "2023-08-7", isCurrentMonth: true, isToday: true },
	{ date: "2023-08-13", isCurrentMonth: true },
	{ date: "2023-08-14", isCurrentMonth: true },
	{ date: "2023-08-15", isCurrentMonth: true, isSelected: true },
	{ date: "2023-08-16", isCurrentMonth: true },
	{ date: "2023-08-17", isCurrentMonth: true },
	{ date: "2023-08-18", isCurrentMonth: true },
	{ date: "2023-08-19", isCurrentMonth: true },
	{ date: "2023-08-20", isCurrentMonth: true },
	{ date: "2023-08-21", isCurrentMonth: true },
	{ date: "2023-08-22", isCurrentMonth: true },
	{ date: "2023-08-23", isCurrentMonth: true },
	{ date: "2023-08-24", isCurrentMonth: true },
	{ date: "2023-08-25", isCurrentMonth: true },
	{ date: "2023-08-26", isCurrentMonth: true },
	{ date: "2023-08-27", isCurrentMonth: true },
	{ date: "2023-08-28", isCurrentMonth: true },
	{ date: "2023-08-29", isCurrentMonth: true },
	{ date: "2023-08-30", isCurrentMonth: true },
	{ date: "2023-08-31", isCurrentMonth: true },
	{ date: "2023-02-08" },
	{ date: "2023-02-02" },
	{ date: "2023-02-03" },
	{ date: "2023-02-04" },
	{ date: "2023-02-05" },
	{ date: "2023-02-06" },
];

function classNames(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(" ");
}

const UpcomingEvents: FC = () => {
	return (
		<div>
			<div>
				<h2 className="text-3xl font-sans text-center font-bold text-gray-900 tracking-tight">
					Upcoming events
				</h2>
				<p className="mt-3 font-sans text-xl text-center text-gray-500 sm:mt-4">
					Stay up to date with our programs.
				</p>
			</div>

			<div className="mt-4 lg:grid lg:gap-x-16">
				<div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
					<div className="flex items-center text-gray-900">
						<button
							type="button"
							className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
							<span className="sr-only">Previous month</span>
							<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
						</button>
						<div className="flex-auto font-sans font-semibold">August</div>
						<button
							type="button"
							className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
							<span className="sr-only">Next month</span>
							<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
						<div>M</div>
						<div>T</div>
						<div>W</div>
						<div>T</div>
						<div>F</div>
						<div>S</div>
						<div>S</div>
					</div>
					<div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
						{days.map((day, dayIdx) => (
							<button
								key={day.date}
								type="button"
								className={classNames(
									"py-1.5 hover:bg-gray-100 focus:z-10",
									day.isCurrentMonth ? "bg-white" : "bg-gray-50",
									(day.isSelected || day.isToday) && "font-semibold",
									day.isSelected && "text-white",
									!day.isSelected && day.isCurrentMonth && !day.isToday && "text-gray-900",
									!day.isSelected && !day.isCurrentMonth && !day.isToday && "text-gray-400",
									day.isToday && !day.isSelected && "text-indigo-600",
									dayIdx === 0 && "rounded-tl-lg",
									dayIdx === 6 && "rounded-tr-lg",
									dayIdx === days.length - 7 && "rounded-bl-lg",
									dayIdx === days.length - 1 && "rounded-br-lg",
								)}>
								<time
									dateTime={day.date}
									className={classNames(
										"mx-auto flex h-7 w-7 items-center justify-center rounded-full",
										day.isSelected && day.isToday && "bg-indigo-600",
										day.isSelected && !day.isToday && "bg-gray-900",
									)}>
									{day.date.split("-").pop()?.replace(/^0/, "") || ""}
								</time>
							</button>
						))}
					</div>
				</div>
				<ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
					{events.map((event) => (
						<li key={event.id} className="relative flex space-x-6 py-6 xl:static">
							<Image
								width={500}
								height={500}
								src={event.imageUrl}
								alt=""
								className="h-14 w-14 flex-none rounded-full"
							/>
							<div className="flex-auto">
								<h3 className="pr-10 font-sans font-semibold text-gray-900 xl:pr-0">
									{event.name}
								</h3>
								<dl className="mt-2 flex flex-col font-sans text-gray-500 xl:flex-row">
									<div className="flex items-start space-x-3">
										<dt className="mt-0.5">
											<span className="sr-only">Date</span>
											<CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
										</dt>
										<dd>
											<time dateTime={event.datetime}>
												{event.date} at {event.time}
											</time>
										</dd>
									</div>
									<div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
										<dt className="mt-0.5">
											<span className="sr-only">Location</span>
											<MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
										</dt>
										<dd>{event.location}</dd>
									</div>
								</dl>
							</div>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default UpcomingEvents;
