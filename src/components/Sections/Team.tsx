import Image from "next/image";

const people = [
	{
		name: "Gladys Babatope",
		role: "Co-Founder / CEO",
		imageUrl: "/gladys_professional.png",
	},
	{
		name: "Leslie Alexander",
		role: "Co-Founder / CEO",
		imageUrl: "/volunteer.jpg",
	},
	{
		name: "Leslie Alexander",
		role: "Co-Founder / CEO",
		imageUrl: "/volunteer.jpg",
	},
	// More people...
];

export default function Team() {
	return (
		<>
			<div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-12">
				<div className="space-y-12">
					<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
						<h2 className="text-3xl font-bold tracking-tight sm:text-6xl">Meet our team</h2>
						<p className="text-xl text-gray-500">
							Meet the passionate hearts behind Fountain of Love.
						</p>
					</div>
					<ul
						role="list"
						className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3">
						{people.map((person) => (
							<li key={person.name}>
								<div className="space-y-6">
									<Image
										className="mx-auto h-40 w-40 rounded-full xl:h-64 xl:w-auto"
										src={person.imageUrl}
										alt=""
										width={500}
										height={500}
									/>
									<div className="space-y-2">
										<div className="space-y-1 text-lg font-medium leading-6">
											<h3>{person.name}</h3>
											<p className="text-indigo-600">{person.role}</p>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
