import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Banner } from "../components/sample-additionaly-page/additional-banner";
import { Program } from "../components/sample-additionaly-page/additional-program";
import { Examples } from "../components/sample-additionaly-page/additional-examples";
import { Description } from "../components/sample-additionaly-page/additional-description";
import descImage from "../assets/description/extension-description.jpeg";
import { Prices } from "../components/sample-additionaly-page/additional-prices";
import banner from "../assets/banners/extension-banner.jpg";
import example_1 from "../public/extension/example_1.jpg";
import example_2 from "../public/extension/example_2.jpg";
import example_3 from "../public/extension/example_3.jpg";
import example_4 from "../public/extension/example_4.jpg";
import example_5 from "../public/extension/example_5.jpg";
import example_6 from "../public/extension/example_6.jpg";
import example_7 from "../public/extension/example_7.jpg";
import example_8 from "../public/extension/example_8.jpg";
import example_9 from "../public/extension/example_9.jpg";
import example_10 from "../public/extension/example_10.jpg";
import example_11 from "../public/extension/example_11.jpg";
import example_12 from "../public/extension/example_12.jpg";
import example_13 from "../public/extension/example_13.jpg";
import example_14 from "../public/extension/example_14.jpg";
import example_15 from "../public/extension/example_15.jpg";
import { Dryer } from "../assets/icons/extension-program/dryer";
import { CombScissors } from "../assets/icons/extension-program/comb-scissors";
import { Haircut } from "../assets/icons/extension-program/haircut";
import { Salon } from "../assets/icons/extension-program/salon";
import { Scissors } from "../assets/icons/extension-program/scissors";
import { BanknotExtension } from "../assets/icons/extension-program/banknot";

const bannerInfo = {
	banner: banner,
	titleFirst: "Наращивание",
	titleSecond: "Волос",
	descBeforeDivider:
		"Наращивание волос – один из способов кардинально изменить свой образ.",
	descAfterDivider:
		"Эта процедура позволяет превратить короткие и редкие волосы в длинные и густые!",
};

const programInfo = [
	{
		src: <Dryer />,
		title: "Подготовим",
		description:
			" Подготовим ваши волосы перед наращиванием, помоем, удалим по желанию секущиеся и пересушенные кончики волос",
	},
	{
		src: <CombScissors />,
		title: "Определим",
		description:
			"Определим объем, цвет, текстуру и длину донорских волос, наиболее подходящих именно Вам",
	},
	{
		src: <Haircut />,
		title: "Проконсультируем",
		description: "Подробно проконсультируем по уходу за наращенными волосами",
	},
	{
		src: <BanknotExtension />,
		title: "Подберем",
		description: "Подберем варианты подходящие под Ваш бюджет",
	},
	{
		src: <Scissors />,
		title: "Проведем",
		description: "Проведем саму процедуру наращивания",
	},
	{
		src: <Salon />,
		title: "Поможем",
		description:
			"Если необходимо сделать покраску, наши колористы с удовольствием с Вами поработают",
	},
];

const examplesInfo = [
	{
		image: example_1,
		src: "/extension/example_1.jpg",
	},
	{
		image: example_2,
		src: "/extension/example_2.jpg",
	},
	{
		image: example_3,
		src: "/extension/example_3.jpg",
	},
	{
		image: example_4,
		src: "/extension/example_4.jpg",
	},
	{
		image: example_5,
		src: "/extension/example_5.jpg",
	},
	{
		image: example_6,
		src: "/extension/example_6.jpg",
	},
	{
		image: example_7,
		src: "/extension/example_7.jpg",
	},
	{
		image: example_8,
		src: "/extension/example_8.jpg",
	},
	{
		image: example_9,
		src: "/extension/example_9.jpg",
	},
	{
		image: example_10,
		src: "/extension/example_10.jpg",
	},
	{
		image: example_11,
		src: "/extension/example_11.jpg",
	},
	{
		image: example_12,
		src: "/extension/example_12.jpg",
	},
	{
		image: example_13,
		src: "/extension/example_13.jpg",
	},
	{
		image: example_14,
		src: "/extension/example_14.jpg",
	},
	{
		image: example_15,
		src: "/extension/example_15.jpg",
	},
];

const descriptionInfo = {
	title:
		"На сегодняшний день итальянское наращивание волос является наиболее современным и безопасным",
	descBeforeDivider:
		"Эта уникальная технология дает возможность мастерам создавать настоящие чудеса с волосами своих клиентов. При желании Вы сможете увеличить длину волос до 70 см, сделать волосы в три раза объемнее, осуществить колорирование и мелирование",
	descAfterDivider:
		"При этом наращенные волосы не требуют сложного специального ухода. Капсульное наращивание волос может быть произведено не только в височной и затылочной частях, но и практически до пробора!",
};

const priceList = [
	{
		name: "Консультация и подбор волос",
		price: "Бесплатно",
	},
	{
		name: "Снятие наращенных волос",
		price: "300$",
	},
	{
		name: "Наращивание волос",
		price: "300$",
	},
];

export default function Extension() {
	return (
		<div>
			<Head>
				<title>Наращивание волос</title>
				<meta name="description" content="education" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<Banner data={bannerInfo} />
				<Program data={programInfo} title={"Наращивание волос"} />
				<Examples imagesList={examplesInfo} width={300} height={400} />
				<Description data={descriptionInfo} image={descImage} />
				<Prices priceList={priceList} />
			</main>

			<Footer />
		</div>
	);
}
