import styled from "styled-components";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import {
	FacebookIcon,
	InstagramIcon,
	OkIcon,
	VkontakteIcon,
} from "../../icons";
import { useEffect, useRef, useState } from "react";

const StyledMapSection = styled.div`
	display: flex;

	& .map-section__info {
		padding: 70px;
		background-color: #17434e;
	}
	& .map-section__map,
	& .map-section__info {
		width: 50%;
	}

	& .map-section__attention {
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 300;
		font-size: 18px;
		line-height: 1.55;
		color: #f03555;
		margin-top: 40px;
	}

	& .map-section__socials-list {
		margin-top: 40px;
	}

	& .map-section__socials-list > div {
		display: flex;
		gap: 5px;
	}

	& .map-section__addresses {
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 300;
		font-size: 26px;
		line-height: 1.45;
		margin-bottom: 40px;
		color: #ffffff;
		margin-top: 20px;

		p {
			margin: 0;
		}
	}

	& .map-section__title {
		font-family: "Roboto", Arial, sans-serif;
		font-size: 26px;
		line-height: 1.45;
		color: #ffffff;
		box-sizing: content-box;
		font-weight: 700;
	}
`;

const contactsList = [
	{
		href: "#",
		Icon: FacebookIcon,
	},
	{
		href: "#",
		Icon: VkontakteIcon,
	},
	{
		href: "#",
		Icon: OkIcon,
	},
	{
		href: "#",
		Icon: InstagramIcon,
	},
];

export const MapSection = () => {
	let ref = useRef(null);
	const [bounds, setBounds] = useState({
		height: 0,
		width: 0,
	});

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			console.log(entries[0]);
			setBounds({
				width: entries[0].contentRect.width,
				height: entries[0].contentRect.height,
			});
		});
		observer.observe(ref.current);
		return () => ref.current && observer.unobserve(ref.current);
	}, []);

	return (
		<StyledMapSection>
			<div ref={ref} className="map-section__map">
				<YMaps>
					<div>
						<Map
							width={bounds.width}
							height={bounds.height}
							defaultState={{
								center: [55.751574, 37.573856],
								zoom: 9,
							}}
						>
							<Placemark defaultGeometry={[55.751574, 37.573856]} />
						</Map>
					</div>
				</YMaps>
			</div>
			<div className="map-section__info">
				<div>
					<div>
						<strong className="map-section__title">
							<span>Продать волосы.рф</span>
							<br />
							Покупка волос в Москве. Скупка волос, приём, продать волосы
						</strong>

						<div className="map-section__addresses">
							<p>Москва, улица Шоссейная, 11</p>
							<p>Москва, Бескудниковский Бульвар, 56к1</p>
							<p>Химки, улица Молодежная,68</p>
							<p>Москва, улица Чертановская, д. 1 "Г"</p>
						</div>

						<div className="map-section__contacts">
							<p>
								Телефон: <a href="tel:+79025833110">+7(902) 583-31-10</a>
							</p>
							<p>WhatsApp/Viber/Telegram</p>
						</div>
					</div>
					<div className="map-section__attention">
						<div>
							<strong>
								ВАЖНО! Перед выездом к нам, согласуйте время – специалист может
								быть на выезде или может быть занят с другим клиентом.
							</strong>
						</div>
					</div>
					<div className="map-section__socials-list">
						<div>
							{contactsList.map((link) => (
								<div className="socials-list__list">
									<a href={link.href} target="_blank" rel="noopener">
										<link.Icon />
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</StyledMapSection>
	);
};
