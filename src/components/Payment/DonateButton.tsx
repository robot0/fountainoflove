import Link from "next/link";

const DonateButton = () => {
	const handleSubmit = () => {
		window.open("https://donate.stripe.com/test_aEU4jy2f84hH5BCeUU", "_blank");
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
				<Link href={"https://donate.stripe.com/test_aEU4jy2f84hH5BCeUU"}>Donate</Link>
			</button>
		</form>
	);
};

export default DonateButton;
