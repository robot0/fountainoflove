import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TextCarousel from "@/components/Carousel/TextCarousel";
import Team from "@/components/Sections/Team";
import FAQ from "../components/Sections/FAQ";
import Testimonials from "@/components/Sections/Testimonials";

const stats = [
	{ label: "Founded", value: "2021" },
	{ label: "Employees", value: "5" },
	{ label: "Beta Users", value: "521" },
	{ label: "Raised", value: "$25M" },
];

const incentives = [
	{
		name: "Free shipping",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
		description:
			"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
	},
	{
		name: "10-year warranty",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
		description:
			"If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
	},
	{
		name: "Exchanges",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
		description:
			"If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
	},
];

const people = [
	{
		name: "Gladys Babatope",
		role: "Co-Founder / CEO",
		imageUrl: "/gladys_professional.png",
		bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Sanmi",
		role: "Director",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
		bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Noel",
		role: "Director",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
		bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	// More people...
];

const About = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<section>
				<TextCarousel />
			</section>
			<main className="flex-grow p-4">
				<section className="relative bg-white py-0 sm:py-24">
					<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
						<div className="relative sm:py-16 lg:py-0">
							<div
								aria-hidden="true"
								className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
								<div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
							</div>
							<div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
								{/* Testimonial card*/}
								<div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
									<Image
										className="absolute inset-0 h-full w-full object-cover"
										src="/slider3.jpeg"
										width={1000}
										height={1000}
										alt=""
									/>
									{/* <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
									<div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" /> */}
									<div className="relative px-8">
										<blockquote className="mt-8">
											<footer className="mt-4">
												<p className="text-base font-semibold text-indigo-200">
													Gladys Babatope, CEO at Workcation
												</p>
											</footer>
										</blockquote>
									</div>
								</div>
							</div>
						</div>

						<div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
							{/* Content area */}
							<div className="pt-12 sm:pt-16 lg:pt-20">
								<h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Our Mission
								</h2>
								<div className="mt-6 space-y-6 text-gray-500">
									<p className="text-lg">
										At Fountain of Love, our mission is to cultivate an ever-flowing stream of
										compassion and support for the less privileged members of our community.
									</p>
									<p className="text-lg leading-7">
										We are dedicated to providing essential services, care, and resources to those
										in need, with a focus on nourishing not just their physical well-being but also
										their emotional and social growth.
									</p>
								</div>
							</div>

							{/* Stats section */}
							<div className="mt-10">
								<dl className="grid grid-cols-2 gap-x-4 gap-y-8">
									{stats.map((stat) => (
										<div key={stat.label} className="border-t-2 border-gray-100 pt-6">
											<dt className="text-base font-medium text-gray-500">{stat.label}</dt>
											<dd className="text-3xl font-bold tracking-tight text-gray-900">
												{stat.value}
											</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</section>

				<section>
					<Team />
				</section>

				<section className="mt-24">
					<Testimonials />
				</section>

				<section className="-mt-20">
					<FAQ />
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default About;
