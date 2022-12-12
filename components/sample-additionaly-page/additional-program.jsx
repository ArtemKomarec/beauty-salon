import styled from "styled-components";
import { Cross } from "../../assets/icons/close-hamburger";
import { FeedBack } from "../../assets/icons/program/feedback";
import { Lection } from "../../assets/icons/program/lection";
import { Practice } from "../../assets/icons/program/practice";
import { Theory } from "../../assets/icons/program/theory";

export const Program = ({ data, title }) => {
	return (
		<StyledProgramWrapper>
			<h1 className="program-title">{title}</h1>
			<div className="program-content">
				{data.map((step) => (
					<div className="content-step" key={step.title}>
						{step.src}
						<h2 className="step-title">{step.title}</h2>
						<p className="step_description">{step.description}</p>
					</div>
				))}
			</div>
		</StyledProgramWrapper>
	);
};

const StyledProgramWrapper = styled.div`
	padding: 70px 0px;

	@media (max-width: 992px) {
		padding: 40px 0px;
	}

	.program-title {
		color: #17434e;
		text-align: center;

		@media (max-width: 576px) {
			font-size: 24px;
		}
	}

	.program-content {
		margin-top: 40px;
		display: grid;
		grid-template-columns: 360px 360px 360px;
		justify-content: center;
		gap: 40px;

		@media (max-width: 1200px) {
			grid-template-columns: 360px 360px;
		}

		@media (max-width: 768px) {
			grid-template-columns: 460px;
		}

		@media (max-width: 576px) {
			grid-template-columns: 90%;
		}
	}

	.content-step {
		max-width: 460px;
		width: 100%;
		padding: 30px 20px;
		border: 1px solid #f02846;
		color: black;
		font-family: "Montserrat Alternates", sans-serif;

		@media (max-width: 576px) {
			padding: 20px 14px;
			margin: 0 auto;
		}
	}

	.step-title {
		font-size: 19px;
		margin-top: 14px;
		font-weight: 900;
		transition-delay: 0.05s;
	}

	.step_description {
		margin-top: 14px;
		line-height: 1.2;
		font-weight: 400;
		color: #666565;

		@media (max-width: 576px) {
			font-size: 14px;
		}
	}
`;
