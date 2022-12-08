import styled from "styled-components";
import check from "../../assets/advantages.png";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import check2 from "../../assets/MockLogo.png";
const watches = [
	{
		url: check,
		alt: "First",
	},
	{
		url: check2,
		alt: "sec",
	},
];
let watchUrls = [check, check2];

export const Examples = () => {
	const [numberOfWatches, setNumberOfWatches] = useState(0);
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		sourceIndex: 0,
	});

	const openLightboxOnSource = (sourceIndex) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			sourceIndex: sourceIndex,
		});
	};

	return (
		<StyledExamplesWrapper>
			<div>
				<h1 className="examples-title">Примеры работ</h1>
				<div className="images-container">
					<div className="images-container">
						{watches.map((watchImg, j) => (
							<div
								key={watchImg + j}
								onClick={() => {
									openLightboxOnSource(numberOfWatches + j);
								}}
							>
								<Image
									src={watchImg.url}
									alt="First"
									width={300}
									height={300}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<FsLightbox
				toggler={lightboxController.toggler}
				sourceIndex={lightboxController.sourceIndex}
				sources={watchUrls}
			/>
		</StyledExamplesWrapper>
	);
};

const StyledExamplesWrapper = styled.div`
	background-color: #f6f6f6;
	padding: 40px 20px;

	.examples-title {
		text-align: center;
	}

	.images-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
		justify-content: center;
	}
`;
