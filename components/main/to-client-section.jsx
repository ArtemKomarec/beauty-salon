import styled from "styled-components";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ToClientSection = () => {
	return (
		<StyledToClientSlideItem className="slider_container">
			<Swiper
				className="external-buttons"
				spaceBetween={50}
				slidesPerView={1}
				modules={[Navigation, Pagination, A11y]}
				loop={true}
				navigation={{
					clickable: true,
				}}
				pagination={{ clickable: true }}
			>
				<SwiperSlide className="single_slide">
					<div className="call_master_img slider_img">
						<div className="slider_text">
							<h1 className="desc_header">ВЫЕЗД МАСТЕРА НА ДОМ</h1>
							<p className="desc_text">
								Если у вас нет времени на посещение салона в Москве, мы приедем
								к вам сами.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="single_slide">
					<div className="style_haircut_img slider_img">
						<div className="slider_text">
							<h1 className="desc_header">ВЫЕЗД МАСТЕРА НА ДОМ</h1>
							<p className="desc_text">
								Если у вас нет времени на посещение салона в Москве, мы приедем
								к вам сами.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="single_slide">
					<div className="buy_hair_img slider_img">
						<div className="slider_text">
							<h1 className="desc_header">ВЫЕЗД МАСТЕРА НА ДОМ</h1>
							<p className="desc_text">
								Если у вас нет времени на посещение салона в Москве, мы приедем
								к вам сами.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</StyledToClientSlideItem>
	);
};

const StyledToClientSlideItem = styled.div`
	.slider_container {
	}

	.single_slide {
		margin: 0 auto;
	}

	.slider_img {
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		height: 70vh;
	}

	.slider_img:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
		z-index: 2;
	}

	.slider_text {
		position: relative;
		z-index: 3;
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 13% 0px;
		text-align: center;
		padding: 10px 20px;
	}

	.desc_header {
		color: #f03555;
		text-transform: uppercase;
		font-size: 48px;
		line-height: 1.23;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 600;
	}

	.desc_text {
		color: #fff;
		margin-top: 30px;
		font-size: 20px;
		line-height: 1.55;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 300;
	}

	.swiper-button-prev,
	.swiper-button-next {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 1);
	}

	& .swiper-button-prev {
		left: 30px;
	}

	& .swiper-button-next {
		right: 30px;
	}

	& .swiper-button-next:after,
	& .swiper-button-prev:after {
		font-size: 10px;
		color: rgb(34, 34, 34);
	}

	.swiper-pagination-bullet-active {
		background-color: #fff;
	}

	.swiper-pagination-bullet {
		background-color: #f6f6f6;
	}

	.call_master_img {
		height: 70vh;
		background-image: url("/slider/slider-1.jpeg");
		background-position: 80% 60%;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.style_haircut_img {
		height: 70vh;
		background-image: url("/slider/slider-2.jpeg");
		background-position: 80% 53%;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.buy_hair_img {
		height: 70vh;
		background-image: url("/slider/slider-3.jpeg");
		background-position: 80% 23%;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		.desc_header {
			font-size: 32px;
		}

		.desc_text {
			font-size: 18px;
		}

		.swiper-button-prev,
		.swiper-button-next {
			display: none;
		}
	}
`;
