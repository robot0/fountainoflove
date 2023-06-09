export default function Testimonials() {
	return (
		<>
			<div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
				<div className="py-12 px-6 md:flex md:flex-col md:border-r md:border-black md:py-16 md:pl-0 md:pr-10 lg:pr-16">
					<blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
						<div className="relative text-lg font-medium  md:flex-grow">
							<p className="relative">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
								culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
							</p>
						</div>
						<footer className="mt-8">
							<div className="flex items-start">
								<div className="ml-4">
									<div className="text-base font-medium ">Judith Black</div>
									<div className="text-base font-medium text-indigo-200">CEO, Tuple</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
				<div className="border-t-2 border-black py-12 px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
					<blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
						<div className="relative text-lg font-medium  md:flex-grow">
							<p className="relative">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
								culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
								Nemo expedita voluptas culpa sapiente alias molestiae.
							</p>
						</div>
						<footer className="mt-8">
							<div className="flex items-start">
								<div className="ml-4">
									<div className="text-base font-medium ">Joseph Rodriguez</div>
									<div className="text-base font-medium text-indigo-200">CEO, Workcation</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</>
	);
}
