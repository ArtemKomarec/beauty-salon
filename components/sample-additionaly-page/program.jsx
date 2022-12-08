import styled from "styled-components";
import { Cross } from "../../assets/icons/close-hamburger";
import { FeedBack } from "../../assets/icons/program/feedback";
import { Lection } from "../../assets/icons/program/lection";
import { Practice } from "../../assets/icons/program/practice";
import { Theory } from "../../assets/icons/program/theory";

const program = [
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
		description: "Секреты раскрутки в Инстаграмм и где найти первых клиентов.",
	},
	{
		src: <FeedBack />,
		title: "Обратная связь",
		description:
			"После прохождения курса у вас будут ответы на все вопросы касаемо наращивания волос и построения бизнеса. Но не смотря на это после прохождения курса мы оказываем дальнейшую поддержу и гарантируем 100% обратную связь. ",
	},
];

export const Program = () => {
	return (
		<StyledProgramWrapper>
			<h1 className="program-title">Программа обучения</h1>
			<div className="program-content">
				{program.map((step) => (
					<div className="content-step" key={step.title}>
						{step.src}
						<h3 className="step-title">{step.title}</h3>
						<p className="step_description">{step.description}</p>
					</div>
				))}
			</div>
		</StyledProgramWrapper>
	);
};

const StyledProgramWrapper = styled.div`
	padding: 70px 0px;

	.program-title {
		color: #17434e;
		text-align: center;
	}

	.program-content {
		margin-top: 40px;
		display: grid;
		grid-template-columns: 360px 360px 360px;
		justify-content: center;
		gap: 40px;
	}

	.content-step {
		max-width: 360px;
		width: 100%;
		padding: 30px 20px;
		border: 1px solid #f02846;
		color: black;
		font-family: "Montserrat Alternates", sans-serif;
	}

	.step-title {
		margin-top: 14px;
		font-weight: 900;
		transition-delay: 0.05s;
	}

	.step_description {
		margin-top: 14px;
		font-weight: 400;
	}
`;
