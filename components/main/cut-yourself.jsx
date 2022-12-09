import styled from "styled-components";
import Image from "next/image";
import beforeCut from "../../assets/cut-yourself.jpeg";
import afterCut from "../../assets/cut-yourself-res.jpeg";

// const ImageStyle = {
// 	maxWidth: "440px",
// 	maxHeight: "560px",
// };

export const CutYourself = () => {
	return (
		<StyledCutWrapper>
			<StyledCutContainer>
				<ContainerContentItem>
					<Image src={beforeCut} alt="before cut" />
					<ItemDescriptionTitle>
						Не срезайте волосы сами или в парикмахерских
					</ItemDescriptionTitle>
					<ItemDescriptionText>
						доверьте это ответственное дело нашим специалистам.
					</ItemDescriptionText>
				</ContainerContentItem>
				<ContainerContentItem>
					<Image src={afterCut} alt="after cut" />
					<ItemDescriptionTitle>
						Вымойте и высушите волосы накануне среза
					</ItemDescriptionTitle>
					<ItemDescriptionText>
						накануне среза, не наносите на них бальзамы, маски и масла. Волосы
						должны быть чистыми.
					</ItemDescriptionText>
				</ContainerContentItem>
			</StyledCutContainer>
		</StyledCutWrapper>
	);
};

const StyledCutWrapper = styled.div`
	padding-top: 75px;
	padding-bottom: 120px;
	background-color: #f03555;
`;

const StyledCutContainer = styled.div`
	padding: 0px 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 40px;

	@media (max-width: 576px) {
		flex-direction: column;
		align-items: center;
	}
`;

const ContainerContentItem = styled.div`
	max-width: 440px;
	width: 100%;
	position: relative;
	padding-bottom: 54px;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;

	img {
		max-width: 440px;
		width: 100%;
		height: auto;
	}
`;

const ItemDescriptionTitle = styled.h1`
	margin-top: 28px;
	padding: 0px 10px;
	color: #17434e;
	font-size: 28px;
	line-height: 1.35;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;

	@media (max-width: 576px) {
		font-size: 22px;
	}
`;

const ItemDescriptionText = styled.p`
	margin-top: 8px;
	padding: 0px 10px;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 300;
	color: #000;
	font-size: 18px;
	line-height: 1.4;

	@media (max-width: 576px) {
		font-size: 16px;
	}
`;
