import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Banner } from "../components/sample-additionaly-page/additional-banner";
import { Program } from "../components/sample-additionaly-page/additional-program";
import { Examples } from "../components/sample-additionaly-page/additional-examples";
import { Description } from "../components/sample-additionaly-page/additional-description";
import descImage from "../assets/description/education-description.jpeg";
import { Prices } from "../components/sample-additionaly-page/additional-prices";
import banner from "../assets/banners/extension-banner.jpg";
import { Theory } from "../assets/icons/program/theory";
import { Practice } from "../assets/icons/program/practice";
import { Lection } from "../assets/icons/program/lection";
import { FeedBack } from "../assets/icons/program/feedback";

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
		src: <Theory />,
		title: "Подготовим",
		description:
			" Подготовим ваши волосы перед наращиванием, помоем, удалим по желанию секущиеся и пересушенные кончики волос",
	},
	{
		src: <Practice />,
		title: "Определим",
		description:
			"Определим объем, цвет, текстуру и длину донорских волос, наиболее подходящих именно Вам",
	},
	{
		src: <Practice />,
		title: "Проконсультируем",
		description: "Подробно проконсультируем по уходу за наращенными волосами",
	},
	{
		src: <Practice />,
		title: "Подберем",
		description: "Подберем варианты подходящие под Ваш бюджет",
	},
	{
		src: <Lection />,
		title: "Проведем",
		description: "Проведем саму процедуру наращивания",
	},
	{
		src: <FeedBack />,
		title: "Поможем",
		description:
			"Если необходимо сделать покраску, наши колористы с удовольствием с Вами поработают",
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
				<Program data={programInfo} title={"Программа обучения"} />
				{/* <Examples /> */}
				<Description data={descriptionInfo} image={descImage} />
				<Prices priceList={priceList} />
			</main>

			<Footer />
		</div>
	);
}
