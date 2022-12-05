import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/MockLogo.png";

export const Header = () => {
	return (
		<StyledHeaderWrapper>
			<HeaderLogo>
				<Image src={logo} alt="logo" />
			</HeaderLogo>

			<HeaderMenu>
				<HeaderMenuItem>Главная</HeaderMenuItem>
				<HeaderMenuItem>Обучение</HeaderMenuItem>
				<HeaderMenuItem>Наращивание волос</HeaderMenuItem>
				<HeaderMenuItem>Постижерные изделия</HeaderMenuItem>
			</HeaderMenu>
		</StyledHeaderWrapper>
	);
};

const StyledHeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #f03555;
`;

const HeaderLogo = styled.div`
	padding: 6px 10px;
`;

const HeaderMenu = styled.div`
	padding: 0px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 22px;
`;

const HeaderMenuItem = styled.div`
	color: #ffffff;
	font-size: 16px;
	font-weight: 500;
	font-family: "Roboto";
	text-transform: uppercase;
	cursor: pointer;
`;
