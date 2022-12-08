import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Banner } from "../components/sample-additionaly-page/additional-banner";
import { Program } from "../components/sample-additionaly-page/program";
import { Examples } from "../components/sample-additionaly-page/examples";
import { check } from "../assets/advantages.png";

export default function Education() {
	return (
		<div>
			<Head>
				<title>Обучение</title>
				<meta name="description" content="education" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<Banner />
				<Program />
				<Examples />
			</main>

			<Footer />
		</div>
	);
}
