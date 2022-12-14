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
import { HeaderMenu } from "../components/header-menu";

const bannerInfo = {
	banner: banner,
	titleFirst: "??????????????????????",
	titleSecond: "??????????",
	descBeforeDivider:
		"?????????????????????? ?????????? ??? ???????? ???? ???????????????? ?????????????????????? ???????????????? ???????? ??????????.",
	descAfterDivider:
		"?????? ?????????????????? ?????????????????? ???????????????????? ???????????????? ?? ???????????? ???????????? ?? ?????????????? ?? ????????????!",
};

const programInfo = [
	{
		src: <Dryer />,
		title: "????????????????????",
		description:
			" ???????????????????? ???????? ???????????? ?????????? ????????????????????????, ????????????, ???????????? ???? ?????????????? ?????????????????? ?? ???????????????????????? ?????????????? ??????????",
	},
	{
		src: <CombScissors />,
		title: "??????????????????",
		description:
			"?????????????????? ??????????, ????????, ???????????????? ?? ?????????? ?????????????????? ??????????, ???????????????? ???????????????????? ???????????? ??????",
	},
	{
		src: <Haircut />,
		title: "????????????????????????????????",
		description: "???????????????? ???????????????????????????????? ???? ?????????? ???? ?????????????????????? ????????????????",
	},
	{
		src: <BanknotExtension />,
		title: "????????????????",
		description: "???????????????? ???????????????? ???????????????????? ?????? ?????? ????????????",
	},
	{
		src: <Scissors />,
		title: "????????????????",
		description: "???????????????? ???????? ?????????????????? ??????????????????????",
	},
	{
		src: <Salon />,
		title: "??????????????",
		description:
			"???????? ???????????????????? ?????????????? ????????????????, ???????? ?????????????????? ?? ?????????????????????????? ?? ???????? ????????????????????",
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
		"???? ?????????????????????? ???????? ?????????????????????? ?????????????????????? ?????????? ???????????????? ???????????????? ?????????????????????? ?? ????????????????????",
	descBeforeDivider:
		"?????? ???????????????????? ???????????????????? ???????? ?????????????????????? ???????????????? ?????????????????? ?????????????????? ???????????? ?? ???????????????? ?????????? ????????????????. ?????? ?????????????? ???? ?????????????? ?????????????????? ?????????? ?????????? ???? 70 ????, ?????????????? ???????????? ?? ?????? ???????? ????????????????, ?????????????????????? ?????????????????????????? ?? ??????????????????????",
	descAfterDivider:
		"?????? ???????? ???????????????????? ???????????? ???? ?????????????? ???????????????? ???????????????????????? ??????????. ???????????????????? ?????????????????????? ?????????? ?????????? ???????? ?????????????????????? ???? ???????????? ?? ???????????????? ?? ???????????????????? ????????????, ???? ?? ?????????????????????? ???? ??????????????!",
};

const priceList = [
	{
		name: "???????????????????????? ?? ???????????? ??????????",
		price: "??????????????????",
	},
	{
		name: "???????????? ???????????????????? ??????????",
		price: "300$",
	},
	{
		name: "?????????????????????? ??????????",
		price: "300$",
	},
];

export default function Extension() {
	return (
		<div>
			<Header title={"?????????????????????? ?????????? ?? ????????????"} />
			<HeaderMenu></HeaderMenu>

			<main>
				<Banner data={bannerInfo} />
				<Program data={programInfo} title={"?????????????????????? ??????????"} />
				<Examples imagesList={examplesInfo} width={300} height={400} />
				<Description data={descriptionInfo} image={descImage} />
				<Prices priceList={priceList} />
			</main>

			<Footer />
		</div>
	);
}
