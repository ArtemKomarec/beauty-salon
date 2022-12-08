import Image from "next/image";
import styled from "styled-components";

export const Description = ({ data, image }) => {
	return (
		<StyledDescriptionWrapper>
			<div className="content-wrapper">
				<div className="description-content-container">
					<h1 className="description-text-title">{data.title}</h1>
					<p className="description-text">
						{data.descBeforeDivider}
						<span className="text-divider"></span>
						{data.descAfterDivider}
					</p>
				</div>
				<div className="image-container">
					<Image src={image} fill alt="description image" />
				</div>
			</div>
		</StyledDescriptionWrapper>
	);
};

const StyledDescriptionWrapper = styled.div`
	padding: 0 20px 60px;

	.content-wrapper {
		max-width: 1200px;
		width: 100%;
		margin: 40px auto 0px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		gap: 20px;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	.description-content-container {
		max-width: 600px;
		width: 100%;
		color: #000000;

		@media (max-width: 1024px) {
			max-width: 400px;
		}
		@media (max-width: 1024px) {
			max-width: 700px;
			padding: 0px 20px;
		}
	}
	.description-text-title {
		font-size: 28px;
		font-family: "Open Sans", Arial, sans-serif;
		line-height: 1.2;
		font-weight: 700;

		@media (max-width: 576px) {
			font-size: 24px;
		}
	}

	.text-divider {
		margin: 14px 0px;
		width: 60px;
		height: 2px;
		display: block;
		background-color: #f02846;
	}

	.description-text {
		margin-top: 22px;
		font-size: 18px;
		font-family: "Open Sans", Arial, sans-serif;
		line-height: 1.2;
		color: #666565;

		@media (max-width: 576px) {
			font-size: 15px;
		}
	}

	.image-container {
		position: relative;
		width: 400px;
		height: 400px;
		padding: 0px 20px;

		@media (max-width: 576px) {
			width: 300px;
			height: 300px;
		}
	}
`;
