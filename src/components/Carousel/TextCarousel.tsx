import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextCarousel: React.FC = () => {
	const carouselContent = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (carouselContent.current) {
			gsap.fromTo(
				carouselContent.current,
				{
					x: window.innerWidth,
				},
				{
					x: -carouselContent.current.offsetWidth,
					ease: "none",
					repeat: -1, // Infinite loop
					duration: 200, // Duration of a single animation
				},
			);
		}
	}, []);

	// Repeat the text multiple times
	const repeatedText = "FOUNTAIN OF LOVE ❤️  ".repeat(50);

	return (
		<div className="overflow-hidden whitespace-nowrap">
			<span className="inline-block pl-full font-sans text-6xl font-bold" ref={carouselContent}>
				{repeatedText}
			</span>
		</div>
	);
};

export default TextCarousel;
