import styled from "styled-components";
import Image from "next/image";
import logo from "../assets/MockLogo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

import { Hamburger } from "./main/hamburger";

export const Header = () => {
	return (
		<StyledHeaderWrapper>
			<HeaderLogo>
				<Image src={logo} alt="logo" />
			</HeaderLogo>

			<HeaderMenu>
				<Hamburger />
				<HeaderMenuItem href="/">Главная</HeaderMenuItem>
				<HeaderMenuItem href="/education">Обучение</HeaderMenuItem>
				<HeaderMenuItem href="/extension">Наращивание</HeaderMenuItem>
				<HeaderMenuItem href="/posterior">Постижерные изделия</HeaderMenuItem>
				<HeaderMenuItem href="tel: +375336666666">+375336666666</HeaderMenuItem>
				<StyledSocialLinks>
					<a href="/">
						<Image src={facebook} alt="alt" width={30} height={30} />
					</a>
					<a href="/">
						<Image src={instagram} alt="alt" width={30} height={30} />
					</a>
				</StyledSocialLinks>
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
	gap: 16px;
`;

const HeaderMenuItem = styled.a`
	color: #ffffff;
	font-size: 16px;
	font-weight: 500;
	font-family: "Roboto";
	text-transform: uppercase;
	text-align: center;
	@media (max-width: 892px) {
		font-size: 14px;
		&:nth-child(6) {
			display: none;
		}
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const StyledSocialLinks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	@media (max-width: 768px) {
		display: none;
	}
`;
