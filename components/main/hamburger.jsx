import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Cross } from "../../assets/icons/close-hamburger";
import viber from "../../assets/viber.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import logo from "../../assets/MockLogo.png";
import { Logo } from "../../assets/icons/logo";

export const Hamburger = (e) => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		if (toggle) {
			document.body.style.overflowY = "auto";
		} else {
			document.body.style.overflowY = "hidden";
		}

		setToggle(!toggle);
	};

	return (
		<StyledHamburger className={toggle ? "active" : ""}>
			<button onClick={handleClick}>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div style={{ position: "relative" }}>
				<HamburgerMenu className="hamburger-menu">
					<button onClick={handleClick}>
						<Cross className="cross-button" />
					</button>
					<div className="hamburger-container">
						<div className="hamburger-links">
							<Logo width={208} height={140} />
							<a href="/" aria-label="Главная">
								Главная
							</a>
							<a href="/education" aria-label="Обучение">
								Обучение
							</a>
							<a href="/extension" aria-label="Наращивание волос">
								Наращивание волос
							</a>
							<a href="/posterior" aria-label="Постижерные изделия">
								Постижерные изделия
							</a>
						</div>
						<div className="contants-with-us">
							<div className="socials-contacts">
								<Image src={viber} width={38} height={38} alt="viber" />
								<Image src={instagram} width={30} height={30} alt="instagram" />
								<Image src={facebook} width={30} height={30} alt="facebook" />
							</div>
							<a
								className="phone-contact"
								href="tel:+375336564222"
								aria-label="phone-contact"
							>
								+375336564294
							</a>
							<div className="want-sell">Хочу продать</div>
						</div>
					</div>
				</HamburgerMenu>
			</div>
			<div className="overlay"></div>
		</StyledHamburger>
	);
};

const StyledHamburger = styled.div`
	@media (min-width: 769px) {
		display: none;
	}

	& span {
		width: 100%;
		height: 2px;
		display: block;
		background-color: white;
	}

	& button {
		border: none;
		background-color: transparent;
	}

	& > button {
		width: 30px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	&.active .overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: black;
		opacity: 0.25;
		display: block;
	}

	&.active .hamburger-menu {
		display: block;
	}
`;

const HamburgerMenu = styled.div`
	min-width: 280px;
	max-width: calc(320px - 40px);
	height: 100vh;
	position: absolute;
	right: -9px;
	top: -50px;
	background-color: #f03555;
	box-shadow: -7px -3px 28px -9px #000000;
	z-index: 999999;
	transition: all 0.2s linear;
	display: none;

	.hamburger-container {
		height: 76%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger-links {
		padding: 20px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.hamburger-links a {
		color: #ffffff;
		font-size: 19px;
		font-weight: 600;
		font-family: "Roboto";
		text-transform: uppercase;
	}

	.hamburger-links :nth-child(2) {
		margin-top: 30px;
	}

	.contants-with-us {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 16px;
	}

	.socials-contacts {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	.socials-contacts img:nth-child(2) {
		margin-left: -5px;
	}

	.phone-contact {
		max-width: 200px;
		width: 100%;
		padding: 14px 20px;
		margin: 12px auto 0px;
		border-radius: 6px;
		background: white;
		color: #f03555;
		text-align: center;
		font-weight: 700;
	}

	.want-sell {
		max-width: 200px;
		width: 100%;
		padding: 14px 20px;
		margin: 12px auto 0px;
		border: 2px solid #ffffff;
		border-radius: 6px;
		color: white;
		text-align: center;
	}

	& > button {
		width: 100%;
		text-align: end;
		padding: 12px 12px 0 0;
	}
`;
