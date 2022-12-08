import styled from "styled-components";
import banner from "../../assets/banners/education-banner.jpg";

export const Banner = () => {
	return (
		<StyledBannerWrapper>
			<div className="banner-content">
				<h1 className="banner-title">
					Обучение наращиванию <br /> в{" "}
					<span style={{ color: "rgb(240, 40, 70)" }}>Гродно</span>
				</h1>
				<div className="banner-description-text">
					<p>Хотите сделать вклад в свое профессиональное будущее?</p>
					<span className="text-divider"></span>
					<p>Обучение наращиванию волос - быстро , доступно, взаимовыгодно!</p>
				</div>
				<a className="link-btn" href="tel:+375336564294">
					Записаться
				</a>
			</div>
		</StyledBannerWrapper>
	);
};

const StyledBannerWrapper = styled.div`
	min-height: 800px;
	height: 100vh;
	background-image: url(${banner.src});
	box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
	background-repeat: no-repeat;
	background-size: cover;

	.banner-content {
		max-width: 500px;
		width: 100%;
		margin-left: 10%;
		padding-top: 6%;
		color: floralwhite;
	}

	.banner-title {
		font-size: 58px;
		font-family: "Open Sans", Arial, sans-serif;
		line-height: 1.2;
		font-weight: 700;
		background-position: center center;
		border-color: transparent;
		border-style: solid;
	}

	.banner-description-text {
		margin-bottom: 30px;
		font-size: 24px;
		line-height: 1.2;
	}

	.text-divider {
		margin: 14px 0px;
		width: 80px;
		height: 4px;
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
