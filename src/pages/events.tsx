import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(" ");
// }

export default function OurTeam() {
	const [months, setMonths] = useState([]);

	useEffect(() => {
		fetch("/api/calendar")
			.then((response) => response.json())
			.then((data) => setMonths(data.months));
	}, []);

	return (
		<>
			<Header />
			<>
				<div className="bg-white"></div>
			</>
			<Footer />
		</>
	);
}
