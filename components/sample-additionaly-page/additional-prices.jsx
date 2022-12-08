import styled from "styled-components";

export const Prices = ({ priceList }) => {
	return (
		<StyledPricesWrapper>
			<h1 className="prices-title">Наши цены</h1>
			<div className="prices-content-container">
				{priceList.map((service, index) => (
					<div className="asd" key={index}>
						<p className="service-name">{service.name}</p>
						<p className="service-price">{service.price}</p>
					</div>
				))}
			</div>
		</StyledPricesWrapper>
	);
};

export const StyledPricesWrapper = styled.div`
	background-color: #9c6590;
	padding: 60px 20px;

	.prices-title {
		text-align: center;
		color: #ffe4e1;

		@media (max-width: 576px) {
			font-size: 24px;
		}
	}

	.prices-content-container {
		max-width: 400px;
		width: 100%;
		margin: 40px auto 0px;
		padding: 40px 0px;
		/* display: grid;
		grid-template-columns: 300px 100px; */
		row-gap: 18px;
		border: 2px solid #ffe4e1;
		border-radius: 6px;
		justify-content: center;
	}

	.asd {
		padding: 8px 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		gap: 20px;
		line-height: 1.4;
	}

	.service-name {
	}

	.service-price {
		justify-self: center;
	}
`;
