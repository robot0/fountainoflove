/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useState } from "react";
import Header from "../Header/Header";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

interface SectionProps {
	content: string;
}

const Section: React.FC<SectionProps> = ({ content }) => (
	<div className="section">
		<h1 className="text-4xl flex items-center justify-center h-screen">{content}</h1>
	</div>
);

interface FullPageWrapperProps {
	anchors: string[];
	sections: string[];
	sectionsColor: string[];
}

const FullpageWrapper: React.FC<FullPageWrapperProps> = ({ anchors, sections, sectionsColor }) => {
	const [showHeader, setShowHeader] = useState(true);
	let scrollPosition = useRef(0).current;

	const handleScroll = (origin: any, destination: { index: number }, direction: string) => {
		if (direction === "up") {
			setShowHeader(true);
		} else if (direction === "down") {
			setShowHeader(false);
		}
		scrollPosition = destination.index;
	};

	return (
		<ReactFullpage
			anchors={anchors}
			navigation
			navigationTooltips={anchors}
			scrollOverflow
			sectionsColor={sectionsColor}
			credits={{ enabled: true, label: "Made with ❤️", position: "right" }}
			onLeave={handleScroll}
			render={({ state, fullpageApi }) => {
				console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
				return (
					<div>
						{showHeader && <Header />}
						<ReactFullpage.Wrapper>
							{sections.map((content, index) => (
								<Section key={index} content={content} />
							))}
						</ReactFullpage.Wrapper>
					</div>
				);
			}}
		/>
	);
};

export default FullpageWrapper;
