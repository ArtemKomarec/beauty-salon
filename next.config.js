/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

const Localization = {
	i18n: {
		locales: ["ru"],
		defaultLocale: "ru",
	},
};

module.exports = Localization;
