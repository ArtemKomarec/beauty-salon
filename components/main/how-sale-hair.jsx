import styled from "styled-components";
import { ArrowRight } from "../../assets/icons/arrow-right";
import { Banknot } from "../../assets/icons/banknot";
import { List } from "../../assets/icons/list";
import { WomanHair } from "../../assets/icons/woman-hair";

export const HowSaleHair = () => {
	return (
		<StyledHowSaleHair>
			<StyledSaleHairTitle>Как продать волосы?</StyledSaleHairTitle>
			<StyledStepsWrapper>
				<StyledStep>
					<StyledImageWrapper>
						<WomanHair />
					</StyledImageWrapper>
					<StepDescriptionTitle>Отправляете фото</StepDescriptionTitle>
					<StepDescriptionText>
						распущенных волос со спины или фото среза волос рядом с рулеткой
					</StepDescriptionText>
				</StyledStep>
				<StyledArrow>
					<ArrowRight />
				</StyledArrow>
				<StyledStep>
					<StyledImageWrapper>
						<List />
					</StyledImageWrapper>
					<StepDescriptionTitle>Оцениваем стоимость</StepDescriptionTitle>
					<StepDescriptionText>
						и договариваемся с вами о продаже волос
					</StepDescriptionText>
				</StyledStep>
				<StyledArrow>
					<ArrowRight />
				</StyledArrow>
				<StyledStep>
					<StyledImageWrapper>
						<Banknot />
					</StyledImageWrapper>
					<StepDescriptionTitle>Срезаем волосы</StepDescriptionTitle>
					<StepDescriptionText>
						выплачиваем стоимость волос, выполняем стильную стрижку
					</StepDescriptionText>
				</StyledStep>
			</StyledStepsWrapper>
		</StyledHowSaleHair>
	);
};

const StyledHowSaleHair = styled.div`
	padding-top: 60px;
	padding-bottom: 45px;
	background-color: #f0ebeb;
`;

const StyledSaleHairTitle = styled.h1`
	padding: 0px 20px;
	text-align: center;
	font-size: 42px;
	line-height: 1.23;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	color: #103038;

	@media (max-width: 576px) {
		font-size: 30px;
	}
`;

const StyledStepsWrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 60px auto 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

const StyledStep = styled.div`
	max-width: 300px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledImageWrapper = styled.div`
	width: 100px;
	height: 125px;
`;

const StepDescriptionTitle = styled.h2`
	text-align: center;
	color: #17434e;
	font-size: 24px;
	line-height: 1.35;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;

	@media (max-width: 576px) {
		font-size: 20px;
	}
`;

const StepDescriptionText = styled.p`
	text-align: center;
	font-size: 18px;
	line-height: 1.55;
	font-family: "Open Sans", Arial, sans-serif;
	font-weight: 300;
	color: #000;
`;

const StyledArrow = styled.div`
	@media (max-width: 1024px) {
		margin: 40px 0px;
		transform: rotate(90deg);
	}
`;
