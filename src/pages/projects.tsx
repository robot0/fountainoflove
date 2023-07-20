import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type Project = {
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

const projects: Project[] = [
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
	// {
	// 	title: "Community Event in Orlando, Florida",
	// 	href: "#",
	// 	category: { name: "Case Study", href: "#", color: "bg-green-100 text-green-800" },
	// 	description:
	// 		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
	// 	date: "Feb 12, 2020",
	// 	datetime: "2020-02-12",
	// 	imageUrl: "/community-fair.jpg",
	// },
];

export default function Projects() {
	return (
		<>
			<Header />
			<div className="bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
				<div className="relative mx-auto max-w-lg  lg:max-w-7xl">
					<div>
						<h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
							Recent events
						</h2>
						<p className="mt-3 text-xl text-gray-500 sm:mt-4">
							Our efforts stretch from Nigeria to the United States, embodying our commitment to
							alleviating suffering and empowering individuals in need.
						</p>
					</div>
					<div className="mx-auto mt-12 grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-2">
						{projects.map((project) => (
							<div
								key={project.title}
								className="flex flex-col overflow-hidden rounded-lg shadow-lg">
								<div className="flex-shrink-0">
									<Image
										className="h-96 w-full block object-cover"
										src={project.imageUrl}
										alt=""
										width={500}
										height={500}
									/>
								</div>
								<div className="flex flex-1 flex-col justify-between bg-white p-6">
									<div className="flex-1">
										<a href={project.href} className="mt-2 block">
											<p className="text-xl font-semibold text-gray-900">{project.title}</p>
											<p className="mt-3 text-base text-gray-500">{project.description}</p>
										</a>
									</div>
									<div className="mt-6 flex items-center">
										{/* <div className="flex-shrink-0">
											<a href={post.author.href}>
												<span className="sr-only">{post.author.name}</span>
												<Image
													className="h-10 w-10 rounded-full"
													src={post.author.imageUrl}
													alt=""
													width={500}
													height={500}
												/>
											</a>
										</div> */}
										{/* <div className="ml-3">
											<p className="text-sm font-medium text-gray-900">
												<a href={post.author.href} className="hover:underline">
													{post.author.name}
												</a>
											</p>
											<div className="flex space-x-1 text-sm text-gray-500">
												<time dateTime={post.datetime}>{post.date}</time>
												<span aria-hidden="true">&middot;</span>
												<span>{post.readingTime} read</span>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
