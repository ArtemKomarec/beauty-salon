import styled from "styled-components";

export const OnlineEvaluation = () => {
	return (
		<StyledEvaluationWrapper>
			<EvaluationTitle>
				Для оценки стоимости волос, не обязательно ехать к нам
				<br />и тратить свое время
			</EvaluationTitle>
			<EvaluationText>
				можете прислать нам фотографии волос любым удобным для вас способом, а
				также получить бесплатную консультацию и рекомендации по подготовке
				волос к продаже.
			</EvaluationText>
			<OnlineEvaluationTableTitle>
				Онлайн оценка стоимости волос
			</OnlineEvaluationTableTitle>
			<OnlineStepWrapper>
				<OnlineStepContainer>
					<OnlineStepCircle>
						<CircleNumber>1</CircleNumber>
					</OnlineStepCircle>
					<OnlineStepDescription>
						<StepDescriptionTitle>
							измерьте длину волос от линии планируемого среза волос до концов
						</StepDescriptionTitle>
						<StepDescriptionText>
							длина волос к срезу должна быть 41 см и больше
						</StepDescriptionText>
					</OnlineStepDescription>
				</OnlineStepContainer>
				<OnlineStepContainer>
					<OnlineStepCircle>
						<CircleNumber>2</CircleNumber>
					</OnlineStepCircle>
					<OnlineStepDescription>
						<StepDescriptionTitle>
							сделайте фото распущенных волос со спины
						</StepDescriptionTitle>
						<StepDescriptionText>
							желательно, чтобы освещение падало на волосы
						</StepDescriptionText>
					</OnlineStepDescription>
				</OnlineStepContainer>
				<OnlineStepContainer>
					<OnlineStepCircle>
						<CircleNumber>3</CircleNumber>
					</OnlineStepCircle>
					<OnlineStepDescription>
						<StepDescriptionTitle>
							Пришлите фото в
							<br />
							<a href="/" style={{ color: "#a377c2" }}>
								Viber
							</a>
							<br />
							<a
								href="/"
								style={{ color: "rgb(6, 162, 201) ", marginLeft: "6px" }}
							>
								Telegram
							</a>
						</StepDescriptionTitle>
						<StepDescriptionText>
							На номер{" "}
							<a href="/" style={{ color: "rgb(206, 21, 40)" }}>
								+79025833110
							</a>
						</StepDescriptionText>
					</OnlineStepDescription>
				</OnlineStepContainer>
			</OnlineStepWrapper>
			<StyledMoreInformation>
				<strong>или отправьте фото волос</strong>
				<p>
					- на почту{" "}
					<a href="/" style={{ color: "rgb(240, 53, 85)" }}>
						alinasliaptsova@gmail.com
					</a>
				</p>
				<p>- в социальные сети</p>
			</StyledMoreInformation>
		</StyledEvaluationWrapper>
	);
};

const StyledEvaluationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 100px 0px;
	align-items: center;
`;

const EvaluationTitle = styled.h2`
	padding: 0px 20px;
	text-align: center;
	color: #17434e;
	font-size: 26px;
	line-height: 1.23;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;
`;

const EvaluationText = styled.p`
	max-width: 1000px;
	width: 100%;
	padding: 0px 20px;
	margin-top: 22px;
	text-align: center;
	font-size: 20px;
	line-height: 1.55;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 300;
	color: #000;

	@media (max-width: 576px) {
		font-size: 16px;
	}
`;

const OnlineEvaluationTableTitle = styled.h1`
	margin-top: 12px;
	color: #ce1528;
	text-align: center;
	font-size: 42px;
	line-height: 1.23;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;

	@media (max-width: 576px) {
		font-size: 30px;
	}
`;

const OnlineStepWrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	margin-top: 90px;
	padding: 0px 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 40px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const OnlineStepContainer = styled.div`
	max-width: 360px;
	width: 100%;
	padding-top: 35px;
	position: relative;

	@media (max-width: 768px) {
		max-width: 540px;
		width: 100%;
	}
`;

const OnlineStepCircle = styled.div`
	width: 70px;
	height: 70px;
	background-color: #fff;
	border-radius: 100%;
	border: 1px solid #222;
	margin: 0 auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	border-color: #ce1528;
`;

const CircleNumber = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	text-align: center;
	transform: translateY(-50%);
	color: #103038;
	font-size: 20px;
	line-height: 1.35;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;

	@media (max-width: 576px) {
		font-size: 16px;
	}
`;

const OnlineStepDescription = styled.div`
	max-height: 300px;
	height: 100%;
	padding-bottom: 80px;
	border: 1px solid rgb(206, 21, 40);
	color: black;
`;

const StepDescriptionTitle = styled.h3`
	padding: 0px 20px;
	margin-top: 80px;
	text-align: center;
	color: #103038;
	text-transform: uppercase;
	font-size: 20px;
	line-height: 1.35;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;

	@media (max-width: 576px) {
		font-size: 16px;
	}
`;

const StepDescriptionText = styled.p`
	margin-top: 18px;
	padding: 0px 26px;
	text-align: center;
	color: rgb(16, 48, 56);
	font-size: 15px;
	line-height: 1.55;
	font-family: "Open Sans", Arial, sans-serif;
	font-weight: 300;

	@media (max-width: 576px) {
		font-size: 14px;
	}
`;

const StyledMoreInformation = styled.div`
	margin-top: 58px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #000000;
	text-align: center;
	font-size: 24px;
	line-height: 1.55;
	font-family: "Roboto", Arial, sans-serif;
`;
