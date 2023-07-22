import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import UpcomingEvents from "@/components/Sections/UpcomingEvents";

type Event = {
	title: string;
	href: string;
	category: {
		name: string;
		href: string;
		color: string;
	};
	description: string;
	date: string;
	datetime: string;
	imageUrl: string;
};

const events: Event[] = [
	{
		title: "Community Event in Lagos, Nigeria",
		href: "#",
		category: { name: "Article", href: "#", color: "bg-indigo-100 text-indigo-800" },
		description:
			"In Lagos, the Fountain of Love's event radiated unity and giving, drawing over 300 locals for a community day filled with shared necessities and strengthened bonds.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		imageUrl: "/slider2.jpeg",
	},
	{
		title: "Community Event in Omaha, Nebraska",
		href: "#",
		category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
		description:
			"In Omaha, Fountain of Love celebrated unity and generosity at Benson Park, with a hundred locals gathering for a day of sharing essential goods and fostering community spirit.",
		date: "Mar 10, 2020",
		datetime: "2020-03-10",
		imageUrl: "/event9.jpeg",
	},
];

export default function Events() {
	return (
		<>
			<Header />
			<div className="bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
				<div className="relative mx-auto max-w-lg  lg:max-w-7xl">
					<UpcomingEvents />
					<section className="mt-24">
						<div>
							<h2 className="text-3xl font-sans font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
								Past events
							</h2>
							<p className="mt-3 text-xl font-sans text-center text-gray-500 sm:mt-4">
								Our efforts stretch from Nigeria to the United States, embodying our commitment to
								alleviating suffering and empowering individuals in need.
							</p>
						</div>
						<div className="mx-auto mt-12 grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-2">
							{events.map((event) => (
								<div
									key={event.title}
									className="flex flex-col overflow-hidden rounded-lg shadow-lg">
									<div className="flex-shrink-0">
										<Image
											className="h-96 w-full block object-cover"
											src={event.imageUrl}
											alt=""
											width={500}
											height={500}
										/>
									</div>
									<div className="flex flex-1 flex-col justify-between bg-white p-6">
										<div className="flex-1">
											<a href={event.href} className="mt-2 block">
												<p className="text-xl font-sans font-semibold text-gray-900">
													{event.title}
												</p>
												<p className="mt-3 font-sans text-base text-gray-500">
													{event.description}
												</p>
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
}
