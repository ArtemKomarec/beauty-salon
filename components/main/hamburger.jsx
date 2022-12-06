import { useState } from "react";
import styled from "styled-components";
import { Cross } from "../../assets/icons/close-hamburger";

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
						<Cross />
					</button>
					<div className="header-links">
						<a href="/">Главная</a>
						<a href="/">Обучение</a>
						<a href="/">Наращивание волос</a>
						<a href="/">Постижерные изделия</a>
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
	min-width: 180px;
	max-width: calc(320px - 80px);
	height: 100vh;
	padding: 0px 0px 0px 20px;
	position: absolute;
	right: -9px;
	top: -50px;
	background-color: #f03555;
	box-shadow: -7px -3px 28px -9px #000000;
	z-index: 999999;
	transition: all 0.2s linear;
	display: none;

	.header-links {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	& > button {
		width: 100%;
		text-align: end;
		padding: 6px 0px 0px 0px;
	}
`;
