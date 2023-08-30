import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Image from "next/image";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import DonateButton from "@/components/Payment/DonateButton";

const images = [
	"/event1.jpeg",
	"/event2.jpeg",
	"/fundraising.jpg",
	"/charity-better.jpg",
	"/community-fair.jpg",
];

export default function Donate() {
	return (
		<>
			<div>
				<Head>
					<title>Donate</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content="Donation page" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
			<Header />
			{/* <section>
				<div className="bg-gray-50">
					<div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
						<section>
							<div className="text-center">
								<p className="mt-1 text-4xl font-sans font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
									Donate
								</p>
								<p className="mx-auto font-sans mt-5 max-w-xl text-xl text-gray-500">
									Put a smile on our communities
								</p>
							</div>
						</section>
						<section className="mt-16">
							<DonateButton />
						</section>
					</div>
				</div>
			</section> */}

			<section>
				<div className="relative overflow-hidden bg-white">
					<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
						<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
								<h1 className="text-xl font-sans font-bold tracking-tight text-gray-900 sm:text-5xl">
									Support Our Cause
								</h1>
								<p className="mt-6 text-lg font-sans leading-8 text-gray-600">
									In a world abundant with resources, countless individuals in Nigeria and the
									United States still grapple with the pangs of hunger, the chill of inadequate
									clothing, and the despair of homelessness. Your donation doesn&apos;t just provide
									immediate relief; it sows seeds of hope, empowerment, and lasting change.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<DonateButton />
								</div>
							</div>
						</div>
						<div className="sm:hidden lg:block pr-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[43n%] 2xl:w-[65%]">
							<ImageCarousel images={images} interval={3000} />
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}

			<section className="mt-32">
				<div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
					<div className="py-12 px-6 md:flex md:flex-col md:border-r md:border-cyan-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
						<blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
							<div className="relative text-lg font-sans font-medium md:flex-grow">
								<p className="relative">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
									culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
								</p>
							</div>
							<footer className="mt-8">
								<div className="flex items-start">
									<div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
										<Image
											className="h-12 w-12 rounded-full"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
											width={500}
											height={500}
										/>
									</div>
									<div className="ml-4">
										<div className="text-base font-sans font-medium">Judith Black</div>
										<div className="text-base font-sans font-medium text-cyan-600">CEO, Tuple</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
					<div className="border-t-2 border-cyan-900 py-12 px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
						<blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
							<div className="relative text-lg font-sans font-medium md:flex-grow">
								<p className="relative">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
									culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
									Nemo expedita voluptas culpa sapiente alias molestiae.
								</p>
							</div>
							<footer className="mt-8">
								<div className="flex items-start">
									<div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
										<Image
											className="h-12 w-12 rounded-full"
											src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
											width={500}
											height={500}
										/>
									</div>
									<div className="ml-4">
										<div className="text-base font-sans font-medium">Joseph Rodriguez</div>
										<div className="text-base font-sans font-medium text-cyan-600">
											CEO, Workcation
										</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
