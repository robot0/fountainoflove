import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image className="h-24 w-auto" src="/fol_logo.png" width={500} height={500} alt="" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<Popover.Group className="hidden lg:flex lg:gap-x-12">
					<Link href="/events" className="text-sm font-sans font-semibold leading-6 text-gray-900">
						Events
					</Link>
					<Link href="/about" className="text-sm font-sans font-semibold leading-6 text-gray-900">
						About Us
					</Link>
					<Link href="/contact" className="text-sm font-sans font-semibold leading-6 text-gray-900">
						Contact
					</Link>
				</Popover.Group>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href="/donate"
						className="rounded-m font-sans bg-cyan-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
						Donate <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Fountain Of Love</span>
							<Image className="h-24 w-auto" src="/fol_logo.png" width={500} height={500} alt="" />
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Link
									href="/about"
									className="-mx-3 text-center block font-sans rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									About Us
								</Link>
								<Link
									href="/events"
									className="-mx-3 block text-center font-sans rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Events
								</Link>
								<Link
									href="/contact"
									className="-mx-3 block text-center font-sans rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Contact
								</Link>
							</div>
							<div className="py-6">
								<Link
									href="/donate"
									className="-mx-3 block font-sans text-center rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Donate
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
