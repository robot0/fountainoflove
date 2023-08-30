import Image from "next/image";
import React, { useState, useEffect, FC } from "react";

interface ImageCarouselProps {
	images: string[];
	interval: number;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ images, interval }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
		}, interval);

		return () => clearInterval(timer);
	}, [images, interval]);

	return (
		<div className="relative w-full h-[250px] sm:h-[450px] lg:h-[600px]">
			<Image
				src={images[currentImageIndex]}
				alt="carousel"
				width={500}
				height={500}
				style={{ maxWidth: "100%", objectFit: "contain" }}
			/>
		</div>
	);
};

export default ImageCarousel;
