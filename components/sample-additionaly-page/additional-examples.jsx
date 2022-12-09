import styled from "styled-components";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

export const Examples = ({ imagesList, width, height }) => {
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

	const imagesLink = imagesList.map((imageLink) => {
		return imageLink.src;
	});

	return (
		<StyledExamplesWrapper>
			<div>
				<h1 className="examples-title">Примеры работ</h1>
				<div className="examples-list">
					{imagesList.map((exampleImg, index) => (
						<div
							className="image-wrapper"
							key={exampleImg + index}
							onClick={() => {
								openLightboxOnSource(numberOfWatches + index);
							}}
						>
							<Image
								src={exampleImg.image}
								alt="example"
								width={width}
								height={height}
							/>
						</div>
					))}
				</div>
			</div>
			<FsLightbox
				toggler={lightboxController.toggler}
				sourceIndex={lightboxController.sourceIndex}
				sources={imagesLink}
				type={"image"}
			/>
		</StyledExamplesWrapper>
	);
};

const StyledExamplesWrapper = styled.div`
	background-color: #f6f6f6;
	padding: 40px 20px;

	.examples-title {
		text-align: center;
		color: #000;
	}

	.examples-list {
		width: 100%;
		margin: 40px auto 0;
		display: grid;
		grid-template-columns: 300px 300px 300px;
		gap: 40px;
		justify-content: center;

		@media (max-width: 1024px) {
			grid-template-columns: 300px 300px;
		}

		@media (max-width: 670px) {
			grid-template-columns: 300px;
		}
	}

	.image-wrapper {
		position: relative;

		img {
			cursor: pointer;
		}
	}

	.image-wrapper:last-child:nth-child(3n - 2) {
		grid-column-end: 1;
	}
`;
