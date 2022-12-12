import {
	FacebookSizedIcon,
	InstagramSizedIcon,
	VkontakteSizedIcon,
} from "../../icons";
import styled from "styled-components";
import { Viber } from "../../assets/icons/viber";

const StyledAsqSection = styled.div`
	padding-top: 120px;
	padding-bottom: 90px;
	background-color: #ffffff;

	@media (max-width: 576px) {
		padding: 60px 0px;
	}

	& .asq-section__tilte {
		text-align: center;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 600;
		line-height: 1.23;
		box-sizing: content-box;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 42px;
		color: #103038;
		margin-bottom: 75px;

		@media (max-width: 576px) {
			margin-bottom: 40px;
			font-size: 30px;
		}
	}

	& .text-mark {
		color: #f03555;
	}

	& p {
		text-align: center;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 600;
		color: #000;
		line-height: 60px;
		box-sizing: content-box;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 34px;

		@media (max-width: 576px) {
			font-size: 20px;
			line-height: 40px;
		}
	}

	& .asq-section__fast-links {
		display: flex;
		flex-direction: row;
		gap: 8px;
		align-items: center;
		justify-content: center;
	}

	& .asq-section__fast-links > p {
		display: flex;
		gap: 8px;
		color: red;
		list-style: none;
		align-items: center;
		justify-content: center;
	}

	& .asq-section__socials-list > div {
		margin-top: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;

const socialsFastLinks = [
	{
		caption: "Viber",
		href: "VIBER://chat?number=%2B79025833110",
		color: "#a377c2",
	},
	{
		caption: "Telegram",
		href: "https://t.me/Prodatvolosy_rf",
		color: "#06a2c9",
	},
];

const contactsList = [
	{
		href: "#",
		Icon: FacebookSizedIcon,
	},
	{
		href: "#",
		Icon: Viber,
	},
	{
		href: "#",
		Icon: InstagramSizedIcon,
	},
];

export const AskSection = () => (
	<StyledAsqSection>
		<div className="asq-section__tilte">ОСТАЛИСЬ ВОПРОСЫ?</div>

		<div>
			<p>
				Хотите <span className="text-mark">выгодно и быстро</span> продать
				волосы?
			</p>
			<p>
				Позвоните{" "}
				<a
					href="tel:+79025833110"
					rel="noopener noreferrer"
					className="text-mark"
					aria-label="call"
				>
					+7 902 583 31 10
				</a>
			</p>
			<p>или пришлите фото с указанием длины</p>
		</div>

		<div className="asq-section__fast-links">
			{socialsFastLinks.map((link) => (
				<p key={link.caption}>
					<a
						style={{ color: link.color, borderColor: link.color }}
						href={link.href}
						rel="noopener noreferrer"
						aria-label="social icon"
					>
						{link.caption}
					</a>
				</p>
			))}
		</div>
		<div className="asq-section__socials-list">
			<div>
				{contactsList.map((link) => (
					<div className="socials-list__list" key={link.Icon}>
						<a
							href={link.href}
							target="_blank"
							rel="noopener"
							aria-label="social icon"
						>
							<link.Icon
								aria-label="social icon"
								fill="#103038"
								height={48}
								width={48}
								bg={"#103038"}
								color={"#FFFFFF"}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	</StyledAsqSection>
);
