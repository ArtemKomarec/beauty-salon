import NextHeader from "next/head";

export const Header = ({ charset, description, title }) => (
	<NextHeader>
		<title>{title}</title>
		<meta charSet={charset} />
		<meta name="description" content={description}></meta>
		<link rel="icon" href="/favicon.ico" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
			rel="stylesheet"
		/>
	</NextHeader>
);
