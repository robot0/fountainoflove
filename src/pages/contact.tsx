import Header from "../components/Header/Header";
import Head from "next/head";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer/Footer";

export default function Contact() {
	return (
		<>
			<div>
				<Head>
					<title>Contact us</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content="Donation page" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
			<Header />
			<>
				<div className="relative bg-white">
					<div className="absolute inset-0">
						<div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
					</div>
					<div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
						<div className="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
							<div className="mx-auto max-w-lg">
								<h2 className="text-2xl font-sans font-bold tracking-tight text-gray-900 sm:text-3xl">
									Get in touch with us
								</h2>
								<p className="mt-3 font-sans text-lg leading-6 text-gray-500">
									We&apos;re thrilled to hear from you and welcome your feedback, questions, or
									suggestions!
								</p>
								<dl className="mt-8 font-sans text-base text-gray-500">
									<div>
										<dt className="sr-only">Mailing address</dt>
										<dd>
											<p>17063 Orchard Ave</p>
											<p>Omaha, NE 68135</p>
										</dd>
									</div>
									<div className="mt-6">
										<dt className="sr-only">Phone number</dt>
										<dd className="flex">
											<PhoneIcon
												className="h-6 w-6 flex-shrink-0 text-gray-400"
												aria-hidden="true"
											/>
											<span className="ml-3">+1 (407) 308-6923</span>
										</dd>
									</div>
									<div className="mt-3">
										<dt className="sr-only">Email</dt>
										<dd className="flex">
											<EnvelopeIcon
												className="h-6 w-6 flex-shrink-0 text-gray-400"
												aria-hidden="true"
											/>
											<span className="ml-3">contact@fountainoflove.org</span>
										</dd>
									</div>
								</dl>
								<p className="mt-6 font-sans text-base text-gray-500">
									If you&apos;re looking to volunteer, want to make a donation, or need additional
									information about our services, please fill out the form.
								</p>
							</div>
						</div>
						<div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
							<div className="mx-auto max-w-lg lg:max-w-none">
								<form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
									<div>
										<label htmlFor="full-name" className="sr-only">
											Full name
										</label>
										<input
											type="text"
											name="full-name"
											id="full-name"
											autoComplete="name"
											className="block font-sans w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
											placeholder="Full name"
										/>
									</div>
									<div>
										<label htmlFor="email" className="sr-only">
											Email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full font-sans rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
											placeholder="Email"
										/>
									</div>
									<div>
										<label htmlFor="phone" className="sr-only">
											Phone
										</label>
										<input
											type="text"
											name="phone"
											id="phone"
											autoComplete="tel"
											className="block w-full font-sans rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
											placeholder="Phone"
										/>
									</div>
									<div>
										<label htmlFor="message" className="sr-only">
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											className="block w-full font-sans rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
											placeholder="Message"
											defaultValue={""}
										/>
									</div>
									<div>
										<button
											type="submit"
											className="inline-flex font-sans justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
			<Footer />
		</>
	);
}
