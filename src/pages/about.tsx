import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TextCarousel from "@/components/Carousel/TextCarousel";
import Head from "next/head";
import FAQ from "@/components/Sections/FAQ";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import { HeartIcon } from "@heroicons/react/20/solid";

const people = [
	{
		name: "Gladys Babatope",
		role: "Founder",
		imageUrl: "/gladys_professional.png",
		bio: "With a rich background in social work, Gladys founded Fountain of Love to transform hope into tangible support for the community. A visionary leader, she's committed to empowering individuals and fostering community growth.",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
];

const values = [
	{
		name: "Compassion:",
		description:
			"At the heart of our foundation is an unwavering compassion for those in need. We empathize with their struggles and are dedicated to alleviating their burdens.",
		icon: HeartIcon,
	},
	{
		name: "Integrity:",
		description:
			"We maintain the highest standards of honesty and transparency in all our operations and endeavors, ensuring that every contribution makes a direct impact.",
		icon: HeartIcon,
	},
	{
		name: "Empowerment:",
		description:
			"Our mission goes beyond immediate relief; we believe in empowering individuals to break the cycle of poverty and build a sustainable future for themselves and their communities.",
		icon: HeartIcon,
	},

	{
		name: "Respect & Dignity:",
		description:
			"We are committed to treating every individual we serve with respect and dignity, acknowledging their worth and humanity.",
		icon: HeartIcon,
	},
];
const About = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div>
				<Head>
					<title>About us</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content="About us page" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
			<Header />
			<section>
				<TextCarousel />
			</section>
			<main className="flex-grow p-4">
				<div className="flex flex-col">
					<section className="relative bg-white px-32 pt-24 pb-12 ">
						<h1 className="text-4xl font-sans font-medium tracking-tighter text-left text-gray-900 sm:text-5xl mr-48">
							At Fountain of Love, we are dedicated to translating hope into tangible support by
							compassionately providing essential resources that elevate the quality of life for the
							community.
						</h1>
					</section>
					{/* 
					<section className="px-24 h-[75%] self-end">
						<ImageCarousel images={images} interval={5000} />
					</section> */}

					{/* <section className="px-32 py-24">
						<div className="grid grid-flow-row grid-cols-2 gap-4">
							<div>
								<h2 className="text-4xl font-sans font-medium tracking-tighter text-left text-gray-900 sm:text-5xl">
									Our Founder
								</h2>
							</div>
							<div>
								<ul
									role="list"
									className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0">
									{people.map((person) => (
										<li key={person.name} className="sm:py-8">
											<div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
												<div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
													<img className="rounded-lg object-cover" src={person.imageUrl} alt="" />
												</div>
												<div className="sm:col-span-2">
													<div className="space-y-4">
														<div className="space-y-1 font-sans text-lg font-medium leading-6">
															<h3 className="text-3xl">{person.name}</h3>
															<p className="text-cyan-600">{person.role}</p>
														</div>
														<div className="font-sans text-base tracking-tight">
															<p className="text-black">{person.bio}</p>
														</div>
														<ul role="list" className="flex space-x-5">
															<li>
																<a
																	href={person.twitterUrl}
																	className="text-gray-400 hover:text-gray-500">
																	<span className="sr-only">Twitter</span>
																	<svg
																		className="h-5 w-5"
																		aria-hidden="true"
																		fill="currentColor"
																		viewBox="0 0 20 20">
																		<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
																	</svg>
																</a>
															</li>
															<li>
																<a
																	href={person.linkedinUrl}
																	className="text-gray-400 hover:text-gray-500">
																	<span className="sr-only">LinkedIn</span>
																	<svg
																		className="h-5 w-5"
																		aria-hidden="true"
																		fill="currentColor"
																		viewBox="0 0 20 20">
																		<path
																			fillRule="evenodd"
																			d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
																			clipRule="evenodd"
																		/>
																	</svg>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</section> */}

					<section className="px-32 py-24">
						<div className="grid grid-flow-row grid-cols-2 gap-4">
							<h2 className="text-2xl font-sans font-medium tracking-tighter text-left text-gray-900 sm:text-5xl">
								Our Mission
							</h2>
							<p className="text-2xl font-sans font-medium tracking-tighter text-left text-gray-900 sm:text-3xl">
								We are dedicated to providing essential services, care, and resources to those in
								need, with a focus on nourishing not just their physical well-being but also their
								emotional and social growth.
							</p>
						</div>
					</section>

					<section className="px-32 py-24">
						<div className="grid grid-flow-row grid-cols-2 gap-4">
							<h2 className="text-4xl font-sans font-medium tracking-tighter text-left text-gray-900 sm:text-5xl">
								Our Values
							</h2>
							<dl className="max-w-xl space-y-8 text-xl lg:max-w-none">
								{values.map((value) => (
									<div key={value.name} className="relative pl-9">
										<dt className="inline font-sans font-semibold text-gray-900">
											<value.icon className="absolute top-1 left-1 h-5 w-5 " aria-hidden="true" />
											{value.name}
										</dt>{" "}
										<dd className="inline font-sans">{value.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</section>

					<section>
						<FAQ />
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default About;
