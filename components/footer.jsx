import styled from "styled-components";

const StyledFooter = styled.footer`
	padding-top: 45px;
	padding-bottom: 30px;
	background-color: #103038;

	& .container {
		display: flex;
		justify-content: space-between;
		padding: 0px 30px;
	}

	& .footer__menu-list {
		display: flex;
		gap: 20px;
	}

	& .menu-item__sub-menu > ul {
		list-style: none;
		padding: 0px;
		margin: 0px;
	}

	& .sub-menu__item {
		user-select: none;
		-webkit-font-smoothing: antialiased;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 300;
		font-size: 14px;
		line-height: 1.55;
		color: #ffffff;
		display: block;
		margin-bottom: 10px;

		@media (max-width: 576px) {
			font-size: 14px;
		}
	}

	& .menu-item__caption {
		-webkit-font-smoothing: antialiased;
		text-align: left;
		box-sizing: content-box;
		margin: 0;
		padding: 0;
		border: 0;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 600;
		font-size: 16px;
		line-height: 1.35;
		margin-bottom: 14px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: #f03555;

		@media (max-width: 576px) {
			font-size: 16px;
		}
	}

	& .footer__logo {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& .footer-copyright {
		color: #525252;
		margin-top: 40px;
	}

	@media (max-width: 960px) {
		& .container {
			flex-direction: column;
			gap: 30px;
		}
	}
`;

const StyledContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding: 0;
	width: 100%;
	max-width: 1200px;

	@media screen and (max-width: 1200px) {
		max-width: 960px;
		padding: 0;
	}

	@media screen and (max-width: 960px) {
		max-width: 640px;
	}
`;

const menuColumns = [
	{
		caption: { caption: "ИНФО" },
		links: [
			{
				caption: "КАК ПРОДАТЬ ВОЛОСЫ",
				href: "#",
			},
			{
				caption: "ЧТО ПОКУПАЕМ",
				href: "#",
			},
			{
				caption: "ВЫГОДЫ",
				href: "#",
			},
		],
	},
	{
		caption: { caption: "СВЯЗЬ" },
		links: [
			{
				caption: "ПОЗВОНИТЬ",
				href: "#",
			},
			{
				caption: "ЗАКАЗАТЬ ЗВОНОК",
				href: "#",
			},
			{
				caption: "КОНТАКТЫ",
				href: "#",
			},
		],
	},
];

export const Footer = () => (
	<StyledFooter>
		<StyledContainer className="container">
			<div className="footer__logo">
				<img src="#" />
				<div className="footer-copyright">
					© All Rights Reserved. {new Date().getFullYear()}
				</div>
			</div>
			<div className="footer__menu-list">
				{menuColumns.map((menuItem, menuIndex) => (
					<div className="footer__menu-item" key={menuIndex}>
						<div className="menu-item__caption">{menuItem.caption.caption}</div>
						<div className="menu-item__sub-menu">
							<ul>
								{menuItem.links.map((link, linksIndex) => (
									<li className="sub-menu__item" key={linksIndex}>
										<a href={link.href}>{link.caption}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</StyledContainer>
	</StyledFooter>
);
