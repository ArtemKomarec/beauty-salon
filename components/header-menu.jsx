import styled from "styled-components";
import Image from "next/image";
import { Logo } from "../assets/icons/logo";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { Hamburger } from "./main/hamburger";
import { useRouter } from "next/router";

export const HeaderMenu = () => {
	const router = useRouter();

	return (
		<StyledHeaderWrapper>
			<HeaderLogo>
				<Logo width={130} height={70} color={"floralwhite"} />
			</HeaderLogo>

			<HeaderMenuWrapper>
				<Hamburger aria-label="hamburger menu" />
				<Link
					className={router.pathname == "/" ? `activeLink` : "link"}
					href="/"
					aria-label="main"
				>
					Главная
				</Link>
				<Link
					className={router.pathname == "/education" ? `activeLink` : "link"}
					href="/education"
					aria-label="education"
				>
					Обучение
				</Link>
				<Link
					className={router.pathname == "/extension" ? `activeLink` : "link"}
					href="/extension"
					aria-label="extension"
				>
					Наращивание
				</Link>
				<Link
					className={router.pathname == "/posterior" ? `activeLink` : "link"}
					href="/posterior"
					aria-label="posterior"
				>
					Постижерные изделия
				</Link>
				<Link href="tel: +375336666666" className="phone" aria-label="call">
					+375336666666
				</Link>
				<StyledSocialLinks>
					<a href="/" aria-label="facebook">
						<Image src={facebook} alt="facebook" width={30} height={30} />
					</a>
					<a href="/" aria-label="instagram">
						<Image src={instagram} alt="instagram" width={30} height={30} />
					</a>
				</StyledSocialLinks>
			</HeaderMenuWrapper>
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

const HeaderMenuWrapper = styled.div`
	padding: 0px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 16px;

	.link {
		color: floralwhite;
		font-size: 16px;
		font-weight: 500;
		font-family: "Roboto";
		text-transform: uppercase;
		text-align: center;
		@media (max-width: 892px) {
			font-size: 14px;
		}
		@media (max-width: 768px) {
			display: none;
		}
	}

	.link:after {
		display: block;
		position: absolute;
		left: 0;
		width: 0;
		height: 2px;
		background-color: #eff0ea;
		content: "";
		transition: width 0.3s ease-out;
	}

	.activeLink {
		color: #eff0ea;
		text-align: center;
		font-size: 16px;
		font-weight: 500;
		font-family: "Roboto";
		text-transform: uppercase;
		border-bottom: 2px solid #eff0ea;
		outline: none;
	}

	.phone {
		font-family: Roboto;
	}

	@media (max-width: 892px) {
		.phone {
			display: none;
		}

		@media (max-width: 768px) {
			.activeLink {
				display: none;
			}
		}
	}
`;

const Link = styled.a``;

const StyledSocialLinks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	@media (max-width: 768px) {
		display: none;
	}
`;
