import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import DonateButton from "@/components/Payment/DonateButton";

export default function Donate() {
	return (
		<>
			<Header />
			<section>
				<div className="bg-gray-50">
					<div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
						<section>
							<div className="text-center">
								{/* <h2 className="text-lg font-semibold text-indigo-600">Pricing</h2> */}
								<p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
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
			</section>
			{/* <section>
				<div className="relative bg-gray-900"> */}
			{/* Decorative image and overlay */}
			{/* <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
						<Image
							src="/community-fair.jpg"
							alt=""
							className="h-full w-full object-cover object-center"
							width={500}
							height={500}
						/>
					</div>
					<div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

					<div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
						<h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Donate</h1>
						<p className="mt-4 text-xl text-white">Put a smile on our communities.</p>
						<a
							href="#"
							className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
							Shop New Arrivals
						</a>
					</div>
				</div>
			</section> */}

			<Footer />
		</>
	);
}
