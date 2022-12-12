import Head from "next/head";
import { Advantages } from "../components/main/advantages.jsx";
import { AskSection } from "../components/main/ask-section";
import { Banner } from "../components/main/banner";
import { CutYourself } from "../components/main/cut-yourself";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { HowSaleHair } from "../components/main/how-sale-hair";
import { MapSection } from "../components/main/map-section";
import { OnlineEvaluation } from "../components/main/online-evaluation";
import { ReviewsSection } from "../components/main/reviews-section";
import { ToClientSection } from "../components/main/to-client-section";
import { HeaderMenu } from "../components/header-menu.jsx";

export default function Home() {
	return (
		<div>
			<Header title={"Купить волосы Гродно"} />
			<HeaderMenu></HeaderMenu>

			<main>
				<Banner />
				<HowSaleHair />
				<Advantages />
				<OnlineEvaluation />
				<CutYourself />
				<ToClientSection />
				<ReviewsSection />
				<AskSection />
				<MapSection />
			</main>

			<Footer />
		</div>
	);
}
