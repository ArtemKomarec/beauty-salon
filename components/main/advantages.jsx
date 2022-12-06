import styled from "styled-components";
import { AdvantagesBanknot } from "../../assets/icons/advantages/advantages-banknot";
import advantages from "../../assets/advantages.png";
import Image from "next/image";
import { AdvantagesCard } from "../../assets/icons/advantages/advantages-card";
import { AdvantagesHair } from "../../assets/icons/advantages/advantages-hair";
import { AdvantagesTail } from "../../assets/icons/advantages/advantages-tail";
import { AdvantagesMan } from "../../assets/icons/advantages/advantages-man";
import { AdvantagesWorkHonest } from "../../assets/icons/advantages/advantages-work-honest";

export const Advantages = () => {
	return (
		<StyledAdvantages>
			<AdvantagesTitle>Преимущества работы с нами</AdvantagesTitle>
			<AdvantagesContainer>
				<AdvantagesLeft>
					<AdvantagesLeftItem>
						<div>
							<ItemTitle>Высокие цены</ItemTitle>
							<ItemText>На покупку волос в Гродно</ItemText>
						</div>
						<IconWrapper>
							<AdvantagesBanknot />
						</IconWrapper>
					</AdvantagesLeftItem>
					<AdvantagesLeftItem>
						<div>
							<ItemTitle>Оплачиваем сразу</ItemTitle>
							<ItemText>
								после срезания и по цене, о которой договаривались
							</ItemText>
						</div>
						<IconWrapper>
							<AdvantagesCard />
						</IconWrapper>
					</AdvantagesLeftItem>
					<AdvantagesLeftItem>
						<div>
							<ItemTitle>Принимаем волосы взрослых и детей</ItemTitle>
							<ItemText>любых натуральных оттенков</ItemText>
						</div>
						<IconWrapper>
							<AdvantagesHair />
						</IconWrapper>
					</AdvantagesLeftItem>
				</AdvantagesLeft>
				<ImageWrapper>
					<Image src={advantages} alt="advantages image" />
				</ImageWrapper>
				<AdvantagesLeft>
					<AdvantagesRightItem>
						<div>
							<ItemTitle>Работаем честно</ItemTitle>
							<ItemText>и без обмана более 8 лет.</ItemText>
						</div>
						<IconWrapper>
							<AdvantagesWorkHonest />
						</IconWrapper>
					</AdvantagesRightItem>
					<AdvantagesRightItem>
						<div>
							<ItemTitle>Компенсация расходов</ItemTitle>
							<ItemText>на услуги парикмахера при срезе волос</ItemText>
						</div>
						<IconWrapper>
							<AdvantagesMan />
						</IconWrapper>
					</AdvantagesRightItem>
					<AdvantagesRightItem>
						<div>
							<ItemTitle>Покупаем срез волос полным объемом</ItemTitle>
							<ItemText>Не вычесываем короткие и секущиеся волосы</ItemText>
						</div>
						<IconWrapper>
							<AdvantagesTail />
						</IconWrapper>
					</AdvantagesRightItem>
				</AdvantagesLeft>
			</AdvantagesContainer>
		</StyledAdvantages>
	);
};

const StyledAdvantages = styled.div`
	padding: 90px 0px;
	background-color: #d7d8d2;
`;

const AdvantagesTitle = styled.h1`
	text-align: center;
	color: rgb(23, 67, 78);
	font-weight: 700;
	font-size: 42px;
	line-height: 1.23;
	font-family: "Roboto", Arial, sans-serif;
`;

const AdvantagesContainer = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media (max-width: 1024px) {
		margin-top: 0px;
		align-items: center;
		flex-direction: column;
	}
`;
const AdvantagesLeft = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px 10px;
`;

const AdvantagesLeftItem = styled.div`
	width: 230px;
	margin-top: 80px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	text-align: right;
	gap: 10px;
	@media (max-width: 1024px) {
		max-width: 640px;
		width: 100%;
		flex-direction: row-reverse;
		text-align: left;
	}
`;

const ItemTitle = styled.h3`
	color: #17434e;
	font-size: 18px;
	line-height: 1.35;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 600;
`;

const ItemText = styled.p`
	font-size: 16px;
	line-height: 1.55;
	font-family: "Roboto", Arial, sans-serif;
	font-weight: 300;
	color: #000;
`;

const IconWrapper = styled.div`
	width: 60px;
	height: 60px;
`;

const ImageWrapper = styled.div`
	margin-top: 80px;
`;

const AdvantagesRightItem = styled.div`
	width: 230px;
	margin-top: 80px;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	@media (max-width: 1024px) {
		max-width: 640px;
		width: 100%;
	}
`;
