import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

const StyledToClientSlideItem = styled.div`
	padding: 150px 0px;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(graphic-to-be-filtered.jpg);
		background-image: url("https://static.tildacdn.com/tild6439-3232-4365-b331-636663383165/womens2359562_1920_1.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-color: #000;
		filter: brightness(0.5);
	}

	& .tc-slide__container {
		max-width: 760px;
		margin: 0px auto;
		position: relative;
		z-index: 1;
	}

	& .tc-slide__title {
		text-align: center;
		margin: 0;
		padding: 0;
		border: 0;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 600;
		font-size: 48px;
		line-height: 1.23;
		color: #f03555;
		text-transform: uppercase;
	}
	& .tc-slide__description {
		text-align: center;
		margin: 0;
		padding: 0;
		border: 0;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 300;
		font-size: 20px;
		line-height: 1.55;
		color: #fff;
		margin-top: 30px;
	}
`;

const StyledToClientSection = styled.div`
	& .swiper-button-prev,
	& .swiper-button-next {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 1);
	}

	& .swiper-button-next:after,
	& .swiper-button-prev:after {
		font-size: 10px;
		color: rgb(34, 34, 34);
	}

	& .swiper-pagination-bullet {
		width: 10px;
		height: 10px;
		background-color: transparent;
		border: 2px solid #ffffff;
		opacity: 1;
	}

	& .swiper-pagination-bullet.swiper-pagination-bullet-active {
		background-color: #ffffff;
	}
`;

const ToClientSlideItem = () => (
	<StyledToClientSlideItem>
		<div className="tc-slide__container">
			<div className="tc-slide__title">Стильная прическа</div>
			<div className="tc-slide__description">
				Дарим новый образ при сдаче волос длиной от 60 см.
			</div>
		</div>
	</StyledToClientSlideItem>
);

export const ToClientSection = () => (
	<StyledToClientSection>
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			slidesPerView={1}
			navigation
			loop
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ToClientSlideItem />
			</SwiperSlide>
		</Swiper>
	</StyledToClientSection>
);
