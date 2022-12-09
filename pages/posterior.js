import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Banner } from "../components/sample-additionaly-page/additional-banner";
import { Program } from "../components/sample-additionaly-page/additional-program";
import { Examples } from "../components/sample-additionaly-page/additional-examples";
import { Description } from "../components/sample-additionaly-page/additional-description";
import descImage from "../assets/description/posterior-description.jpeg";
import { Prices } from "../components/sample-additionaly-page/additional-prices";
import banner from "../assets/banners/posterior-banner.jpg";
import example_1 from "../public/posterior/example_1.jpg";
import example_2 from "../public/posterior/example_2.jpg";
import example_3 from "../public/posterior/example_3.jpg";
import example_4 from "../public/posterior/example_4.jpg";
import example_5 from "../public/posterior/example_5.jpg";
import example_6 from "../public/posterior/example_6.jpg";
import example_7 from "../public/posterior/example_7.jpg";
import example_8 from "../public/posterior/example_8.jpg";
import example_9 from "../public/posterior/example_9.jpg";
import { Time } from "../assets/icons/posterior/time";
import { Travel } from "../assets/icons/posterior/travel";
import { Fashion } from "../assets/icons/posterior/new-style";
import { Comfort } from "../assets/icons/posterior/comfort";
import { Mirror } from "../assets/icons/posterior/mirror";
import { Box } from "../assets/icons/posterior/box";

// change text on footer

const bannerInfo = {
	banner: banner,
	titleFirst: "Постижерные",
	titleSecond: "Изделия",
	descBeforeDivider:
		"Постижерные изделия в прическе удобны тем, что можно сразу увидеть конечный результат.",
	descAfterDivider:
		"Они также придают образу уникальный и неповторимый вид. Также такие изделия очень удобны для обладательниц коротких или редких волос.",
};

const programInfo = [
	{
		src: <Time />,
		title: "Время",
		description: "Вы сущесвенно сократите время для укладки",
	},
	{
		src: <Travel />,
		title: "Мобильность",
		description: "Всегда можете взять их с собой в путешевствие",
	},
	{
		src: <Comfort />,
		title: "Удобство",
		description:
			"Легко подготовитесь к созданию креативной прически для фотосессии",
	},
	{
		src: <Fashion />,
		title: "Новый стиль",
		description:
			"Ваши вечерние и правздничные прически приобретут новые свежее дыхание",
	},
	{
		src: <Mirror />,
		title: "Преобразование себя",
		description:
			"Получаете возможность почти кардинально измениться без стрижки и покраски",
	},
	{
		src: <Box />,
		title: "Большой ассортимент",
		description:
			"У нас большой ассортимент готовых комлектов из натуральных волос: шиньон,челки, резинки, накладные волосы.",
	},
];

const examplesInfo = [
	{
		image: example_1,
		src: "/posterior/example_1.jpg",
	},
	{
		image: example_2,
		src: "/posterior/example_2.jpg",
	},
	{
		image: example_3,
		src: "/posterior/example_3.jpg",
	},
	{
		image: example_4,
		src: "/posterior/example_4.jpg",
	},
	{
		image: example_5,
		src: "/posterior/example_5.jpg",
	},
	{
		image: example_6,
		src: "/posterior/example_6.jpg",
	},
	{
		image: example_7,
		src: "/posterior/example_7.jpg",
	},
	{
		image: example_8,
		src: "/posterior/example_8.jpg",
	},
	{
		image: example_9,
		src: "/posterior/example_9.jpg",
	},
];

const descriptionInfo = {
	title:
		"Постижерные изделия помогают достичь желаемого образа любой длины волос, а также украшают прическу",
	descBeforeDivider:
		"У нас большой ассортимент готовых комлектов из натуральных волос: шиньон,челки, парик, резинки, накладные волосы. ",
	descAfterDivider:
		"	Для изготовления мы используем разные волосы: южно-россикие, славянские, европейские, азиатские. Вам остается лишь выбрать то, что подходит к вашему стилю и кошельку.",
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
				<title>Постижерные изделия</title>
				<meta name="description" content="education" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<Banner data={bannerInfo} />
				<Program data={programInfo} title={"Постижерные изделия"} />
				<Examples imagesList={examplesInfo} width={300} height={320} />
				<Description data={descriptionInfo} image={descImage} />
				<Prices priceList={priceList} />
			</main>

			<Footer />
		</div>
	);
}
