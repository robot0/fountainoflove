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
		<div>
			<Image
				src={images[currentImageIndex]}
				alt="carousel"
				fill
				style={{ maxWidth: "100%", objectFit: "contain" }}
			/>
		</div>
	);
};

export default ImageCarousel;
