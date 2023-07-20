import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TextCarousel from "@/components/Carousel/TextCarousel";
import Team from "@/components/Sections/Team";
import FAQ from "@/components/Sections/FAQ";


const stats = [
	{ label: "Founded", value: "2021" },
	{ label: "Employees", value: "5" },
	{ label: "Beta Users", value: "521" },
	{ label: "Raised", value: "25M" },
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
							<div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
								{/* Testimonial card*/}
								<div className=" overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
									<Image
										className="absolute inset-0 h-full w-full object-cover"
										src="/slider3.jpeg"
										width={1000}
										height={1000}
										alt=""
									/>
								</div>
							</div>
						</div>

						<div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
							{/* Content area */}
							<div className="">
								<h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Our Mission
								</h2>
								<div className="mt-6 space-y-6 text-gray-500">
									<p className="text-lg">
										At Fountain of Love, we are dedicated to translating hope into tangible support
										by compassionately providing nourishment, clothing, and essential resources that
										elevate the quality of life for the homeless, widows, and orphans across the
										United States and Nigeria.
									</p>
									<p className="text-lg">
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

				<section className="-mt-16">
					<Team />
				</section>

				<section className="mt-24">
					<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
						<div className="relative sm:py-16 lg:py-0">
							<div className="relative mt-12 mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
								{/* Testimonial card*/}
								<div className="overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
									<Image
										className="absolute inset-0 h-full w-full object-cover"
										src="/elderly.jpg"
										alt=""
										width={500}
										height={500}
									/>
								</div>
							</div>
						</div>

						<div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
							{/* Content area */}
							<div className="pt-12 sm:pt-16 lg:pt-20">
								<h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Company Values
								</h2>
								<div className="mt-6 space-y-6 text-gray-500">
									<ul className="list-disc">
										<li>
											<strong>Compassion:</strong> At the heart of our foundation is an unwavering
											compassion for those in need. We empathize with their struggles and are
											dedicated to alleviating their burdens.
										</li>

										<li>
											<strong>Integrity:</strong> We maintain the highest standards of honesty and
											transparency in all our operations and endeavors, ensuring that every
											contribution makes a direct impact.
										</li>

										<li>
											<strong>Empowerment:</strong> Our mission goes beyond immediate relief; we
											believe in empowering individuals to break the cycle of poverty and build a
											sustainable future for themselves and their communities.
										</li>

										<li>
											<strong>Collaboration:</strong> We believe in the strength of unity. By
											forging partnerships and building a community of supporters, we amplify our
											reach and impact.
										</li>

										<li>
											<strong>Respect and Dignity:</strong> We are committed to treating every
											individual we serve with respect and dignity, acknowledging their worth and
											humanity.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <Testimonials /> */}
				</section>

				<section className="mt-20">
					<FAQ />
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default About;
