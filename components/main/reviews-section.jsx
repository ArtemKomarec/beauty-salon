import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

const StyledReviewsSection = styled.div`
	padding: 60px 20px;
	background-color: #faebf0;

	& h1 {
		text-align: center;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 600;
		font-size: 42px;
		line-height: 1.23;
		box-sizing: content-box;
		margin: 0;
		padding: 0;
		border: 0;
		color: rgb(16, 48, 56);
		margin-bottom: 40px;

		@media (max-width: 576px) {
			padding: 0px 10px;
			font-size: 30px;
		}
	}

	& .swiper-horizontal > .swiper-scrollbar,
	& .swiper-scrollbar.swiper-scrollbar-horizontal {
		display: none;
	}

	& .swiper-button-next,
	& .swiper-button-prev {
		transform: rotate(45deg);
		width: 20px;
		height: 20px;
		border-color: #17434e;
		color: #17434e;
	}

	& .swiper-button-prev {
		left: 30px;
		border-left: 1px solid;
		border-bottom: 1px solid;
	}

	& .swiper-button-next {
		right: 30px;
		border-top: 1px solid;
		border-right: 1px solid;
	}

	& .swiper-button-next::after,
	& .swiper-button-prev::after {
		content: none !important;
	}

	& .swiper-horizontal > .swiper-pagination-bullets,
	& .swiper-pagination-bullets.swiper-pagination-horizontal,
	& .swiper-pagination-custom,
	& .swiper-pagination-fraction {
		padding-top: 15px;
		position: static;
	}

	& .swiper-pagination-bullet {
		text-align: center;
		box-sizing: content-box;
		padding: 0;
		border: 0;
		display: inline-block;
		cursor: pointer;
		border-radius: 10px;
		transition: 0.2s ease-in-out opacity;
		width: 4px;
		height: 4px;
		margin: 0 5px;
		opacity: 0.4;
		background-color: #222 !important;
	}

	& .swiper-pagination-bullet.swiper-pagination-bullet-active {
		background-color: #17434e !important;
		opacity: 1;
	}

	@media (max-width: 768px) {
		.swiper-button-next,
		.swiper-button-prev {
			display: none;
		}
	}
`;

const StyledReviewItem = styled.div`
	text-align: center;
	max-width: 760px;
	margin: 0px auto;

	& .review-item__text {
		text-align: center;
		margin: 0;
		padding: 0;
		border: 0;
		font-family: "Open Sans", Arial, sans-serif;
		font-weight: 300;
		color: #000;
		font-size: 20px;
		line-height: 1.55;
		margin-top: 40px;
		margin-bottom: 32px;

		@media (max-width: 576px) {
			padding: 0px 10px;
			font-size: 16px;
		}
	}

	& .review-item__fio {
		text-align: center;
		margin: 0;
		padding: 0;
		border: 0;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 600;
		font-size: 22px;
		line-height: 1.35;
		margin-top: 8px;
		margin-bottom: 5px;
		color: #17434e;

		@media (max-width: 576px) {
			font-size: 18px;
		}
	}

	& .review-item__city {
		text-align: center;
		margin: 0;
		padding: 0;
		border: 0;
		font-family: "Roboto", Arial, sans-serif;
		font-weight: 300;
		color: #000;
		font-size: 14px;
		line-height: 1.55;
		margin-top: 0;
		margin-bottom: 6px;
	}
	& .review-item__avatar img {
		display: block;
		border-radius: 100%;
		margin: 0px auto;
		width: 150px;
		height: 150px;
	}
`;

const ReviewSlideItem = () => (
	<StyledReviewItem>
		<div className="review-item__avatar">
			<img
				src="https://thumb.tildacdn.com/tild6365-6530-4432-a262-613361393732/-/cover/300x300/center/center/-/format/webp/1_24.jpg"
				alt="client"
			/>
		</div>
		<div className="review-item__text">
			Добрый день! Всем, кто ещё не&nbsp;знает или выбирает, куда обратиться
			по&nbsp;продаже своих волос, Вам непременно в&nbsp;компанию
			«продатьволосы.рф». Здесь очень выгодные цены на&nbsp;покупку волос,
			вежливые сотрудники. Еще радует, что волосы могут выкупить сразу,
			то&nbsp;есть в&nbsp;день обращения. Хочу сказать большое спасибо
			за&nbsp;Ваш доброжелательный подход и&nbsp;работу!
		</div>
		<div className="review-item__fio">Кристина Ушакова</div>
		<div className="review-item__city">Липецк</div>
	</StyledReviewItem>
);

export const ReviewsSection = () => (
	<StyledReviewsSection>
		<h1>ОТЗЫВЫ ДОВОЛЬНЫХ КЛИЕНТОВ</h1>
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			slidesPerView={1}
			navigation
			loop
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
			<SwiperSlide>
				<ReviewSlideItem />
			</SwiperSlide>
		</Swiper>
	</StyledReviewsSection>
);
