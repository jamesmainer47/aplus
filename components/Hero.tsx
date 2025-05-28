"use client"
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";


const Hero = () => {
	//Array of Images
	const images = [
		"/bg.jpg",
		"/bg2.jpg",
		"/bg3.jpg",
		"/bg4.jpg",
		"/bg5.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.5,
		duration: 2500,
		transitionDuration: 1000,
		infinite: true,
	};
    
	return (
		<div className="h-200">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full">
						<Image width={1920} height={1080} alt=""
							className="w-full object-cover shadow-xl"
							src={each}
						/>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Hero;