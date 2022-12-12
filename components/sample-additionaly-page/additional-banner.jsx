import styled from "styled-components";

export const Banner = ({ data }) => {
	const StyledBannerWrapper = styled.div`
		min-height: 800px;
		height: 100vh;
		background-image: url(${data.banner.src});
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
		background-position: 1% 0%;
		background-repeat: no-repeat;
		background-size: cover;

		.banner-content {
			max-width: 500px;
			width: 100%;
			margin-left: 10%;
			padding-top: 6%;
			color: floralwhite;

			@media (max-width: 1200px) {
				max-width: 360px;
			}

			@media (max-width: 992px) {
				padding-top: 14%;
			}

			@media (max-width: 768px) {
				padding-top: 20%;
				margin-left: 4%;
			}

			@media (max-width: 576px) {
				max-width: 300px;
				padding-top: 25%;
			}
		}

		.banner-title {
			font-size: 58px;
			font-family: "Open Sans", Arial, sans-serif;
			line-height: 1.2;
			font-weight: 700;
			background-position: center center;
			border-color: transparent;
			border-style: solid;
			@media (max-width: 1200px) {
				font-size: 38px;
				line-height: 1.1;
			}

			@media (max-width: 576px) {
				font-size: 28px;
			}
		}

		.banner-description-text {
			margin-bottom: 30px;
			font-size: 24px;
			line-height: 1.2;
			@media (max-width: 1200px) {
				font-size: 20px;
			}

			@media (max-width: 576px) {
				font-size: 16px;
			}
		}

		.text-divider {
			margin: 14px 0px;
			width: 80px;
			height: 2px;
			display: block;
			background-color: #f02846;
		}

		.link-btn {
			padding: 12px 18px;
			color: floralwhite;
			font-size: 16px;
			font-family: "Open Sans", Arial, sans-serif;
			line-height: 1.55;
			background-color: #f02846;
			background-position: center center;
			border-color: transparent;
			border-style: solid;
		}
	`;

	return (
		<StyledBannerWrapper>
			<div className="banner-content">
				<h1 className="banner-title">
					{data.titleFirst} <br /> {data.titleSecond} <br /> в{" "}
					<span style={{ color: "rgb(240, 40, 70)" }}>Гродно</span>
				</h1>
				<div className="banner-description-text">
					<p>{data.descBeforeDivider}</p>
					<span className="text-divider"></span>
					<p>{data.descAfterDivider}</p>
				</div>
				<a className="link-btn" href="tel:+375336564294" aria-label="enroll">
					Записаться
				</a>
			</div>
		</StyledBannerWrapper>
	);
};
