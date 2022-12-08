import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Banner } from "../components/sample-additionaly-page/additional-banner";
import banner from "../assets/banners/education-banner.jpg";
import { Program } from "../components/sample-additionaly-page/additional-program";
import { Description } from "../components/sample-additionaly-page/additional-description";
import descImage from "../assets/description/education-description.jpeg";
import { Prices } from "../components/sample-additionaly-page/additional-prices";
import { Theory } from "../assets/icons/program/theory";
import { Practice } from "../assets/icons/program/practice";
import { Lection } from "../assets/icons/program/lection";
import { FeedBack } from "../assets/icons/program/feedback";

export default function Education() {
	const bannerInfo = {
		banner: banner,
		titleFirst: "Обучение",
		titleSecond: "Наращиванию",
		descBeforeDivider: "Хотите сделать вклад в свое профессиональное будущее?",
		descAfterDivider:
			"Обучение наращиванию волос - быстро, доступно, взаимовыгодно!",
	};

	const programInfo = [
		{
			src: <Theory />,
			title: "Теория",
			description:
				"Вся информация о типах волос и их качестве. Подбор волос, слияние цвета и разница структур. Оборудование и обработка.Кератин и его виды. Работа с клиентами, удержание и привлечение новых.",
		},
		{
			src: <Practice />,
			title: "Практический блок 1",
			description:
				"Изучаем 3 вида капсуляции, в том числе и скоростную. Отрабатываем снятие волос и практикуем скрутку капсул на болванке.",
		},
		{
			src: <Practice />,
			title: "Практический блок 2	",
			description:
				"Изучаем расстановку капсул для разных стрижек. Наращиваем волосы на 1-й модели.",
		},
		{
			src: <Practice />,
			title: "Практический блок 3",
			description:
				"Проводим коррекцию на 2-й модели. Отрабатываем прикорневое затемнение донорских волос.",
		},
		{
			src: <Lection />,
			title: "Лекция «Быстрый старт в Бьюти бизнесе»",
			description:
				"Секреты раскрутки в Инстаграмм и где найти первых клиентов.",
		},
		{
			src: <FeedBack />,
			title: "Обратная связь",
			description:
				"После прохождения курса у вас будут ответы на все вопросы касаемо наращивания волос и построения бизнеса. Но не смотря на это после прохождения курса мы оказываем дальнейшую поддержу и гарантируем 100% обратную связь. ",
		},
	];

	const descriptionInfo = {
		title:
			"Вы-начинающий специалист и хотите сделать вклад в свое профессиональное будущее?",
		descBeforeDivider:
			"Приглашаем в нашу студию на обучение наращиванию волос!",
		descAfterDivider:
			"Я делюсь со студентами ценными практическим опытом, рассказываю о подводных камнях процедуры наращивания и раскрываю лайфхаки.",
	};

	const priceList = [
		{
			name: "Стоимость 2-ух дневного курса",
			price: "300$",
		},
		{
			name: "Стоимость 3-ех дневного курса",
			price: "300$",
		},
	];

	return (
		<div>
			<Head>
				<title>Обучение</title>
				<meta name="description" content="education" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<Banner data={bannerInfo} />
				<Program data={programInfo} title={"Программа обучения"} />
				<Description data={descriptionInfo} image={descImage} />
				<Prices priceList={priceList} />
			</main>

			<Footer />
		</div>
	);
}
