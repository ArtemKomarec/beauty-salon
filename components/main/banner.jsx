import styled from "styled-components";
import { Sticky } from "../../assets/icons/sticky";
import banner from "../../assets/main-banner.jpg";

export const Banner = () => {
	return (
		<StyledBannerWrapper>
			<StyledBannerContent>
				<StyledContentTitle>
					Продать волосы
					<br />в <span style={{ color: "rgb(240, 40, 70)" }}>Гродно</span>
				</StyledContentTitle>
				<HighPrice>
					Дорого <br />
					<span style={{ color: "rgb(240, 40, 70)" }}>покупаем волосы</span>
				</HighPrice>
				<StyledHairLength>длиной от 35 см</StyledHairLength>
				<StyledLinksContainer>
					<StyledLinks href="/">Записаться на продажу волос</StyledLinks>
					<StyledLinks href="/">Оценка стоимости волос</StyledLinks>
				</StyledLinksContainer>
				<StyledDescription>
					<DescriptionItem>
						<DescriptionHeaderItem>
							<Sticky />
							<HeaderItemText>Работаем ежедневно</HeaderItemText>
						</DescriptionHeaderItem>
						<DescriptionText>Принимаем волосы в Гродно</DescriptionText>
					</DescriptionItem>
					<DescriptionItem>
						<DescriptionHeaderItem>
							<Sticky />
							<HeaderItemText>Деньги за волосы</HeaderItemText>
						</DescriptionHeaderItem>
						<DescriptionText>Срезали-взвесили-оплатили</DescriptionText>
					</DescriptionItem>
					<DescriptionItem>
						<DescriptionHeaderItem>
							<Sticky />
							<HeaderItemText>Качественный материал</HeaderItemText>
						</DescriptionHeaderItem>
						<DescriptionText>Работают профессионалы</DescriptionText>
					</DescriptionItem>
					<DescriptionItem>
						<DescriptionHeaderItem>
							<Sticky />
							<HeaderItemText>в Гродно</HeaderItemText>
						</DescriptionHeaderItem>
						<DescriptionText>Сдать волосы дорого</DescriptionText>
					</DescriptionItem>
				</StyledDescription>
			</StyledBannerContent>
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
	background-position: 80% 20%;
	@media (max-width: 768px) {
		background-position: 1% 20%;
	}
`;

const StyledBannerContent = styled.div`
	padding-top: 6%;
	margin-left: 10%;
	color: black;

	@media (max-width: 576px) {
		padding-top: 20%;
	}
`;

const StyledContentTitle = styled.h1`
	color: floralwhite;
	font-size: 65px;
	font-family: "Open Sans", Arial, sans-serif;
	line-height: 1.2;
	font-weight: 700;
	background-position: center center;
	border-color: transparent;
	border-style: solid;

	@media (max-width: 1340px) {
		font-size: 38px;
		line-height: 1.1;
	}

	@media (max-width: 576px) {
		font-size: 27px;
	}
`;

const HighPrice = styled.h2`
	margin-top: 14px;
	color: floralwhite;
	font-size: 38px;
	font-family: "Open Sans", Arial, sans-serif;
	line-height: 1.4;
	font-weight: 700;
	background-position: center center;
	border-color: transparent;
	border-style: solid;
	text-transform: uppercase;

	@media (max-width: 1340px) {
		font-size: 25px;
		line-height: 1.1;
	}

	@media (max-width: 576px) {
		font-size: 18px;
	}
`;

const StyledHairLength = styled.p`
	color: floralwhite;
	font-size: 40px;
	font-family: "Open Sans", Arial, sans-serif;
	line-height: 1.55;
	font-weight: 700;
	background-position: center center;
	border-color: transparent;
	border-style: solid;

	@media (max-width: 1340px) {
		font-size: 27px;
	}

	@media (max-width: 576px) {
		font-size: 18px;
	}
`;

const StyledLinksContainer = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: row;
	gap: 14px;
	color: #ffffff;
	text-align: center;
	z-index: 4;

	@media (max-width: 1340px) {
		max-width: 246px;
		width: 100%;
		flex-direction: column;
	}
`;

const StyledLinks = styled.a`
	padding: 10px;
	color: floralwhite;
	font-size: 16px;
	font-family: "Open Sans", Arial, sans-serif;
	line-height: 1.55;
	background-color: #f02846;
	background-position: center center;
	border-color: transparent;
	border-style: solid;
	@media (max-width: 1340px) {
		margin-top: 0px;
	}
`;

const StyledDescription = styled.div`
	margin-top: 26px;
	display: grid;
	grid-template-columns: 300px 1fr;

	@media (max-width: 576px) {
		grid-template-columns: 210px;
	}
`;

const DescriptionItem = styled.div`
	margin-top: 26px;
`;

const DescriptionHeaderItem = styled.div`
	display: flex;
	flex-direction: row;
`;

const HeaderItemText = styled.p`
	margin-left: 6px;
	color: #f02846;
	font-size: 14px;
	font-family: "Open Sans", Arial, sans-serif;
	line-height: 1.55;
	font-weight: 700;
	text-transform: uppercase;
	background-position: center center;
	border-color: transparent;
	border-style: solid;
`;

const DescriptionText = styled.p`
	color: floralwhite;
	font-size: 14px;
	font-family: "Open Sans", Arial, sans-serif;
	line-height: 1.55;
	font-weight: 700;
	background-position: center center;
	border-color: transparent;
	border-style: solid;
`;
