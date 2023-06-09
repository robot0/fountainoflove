import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DonateButton from "@/components/Payment/DonateButton";

export default function Donate() {
	return (
		<>
			<Header />
			<div className="bg-gray-50">
				<div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
					<section>
						<div className="text-center">
							<h2 className="text-lg font-semibold text-indigo-600">Pricing</h2>
							<p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
								Donate
							</p>
							<p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
								Put a smile on our communities
							</p>
						</div>
					</section>
					<section className="mt-16">
						<DonateButton />
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
}
