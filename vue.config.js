const UnoCSS = require('@unocss/webpack').default
const UnoCSSConfig = require('./uno.config.js')

module.exports = {
	configureWebpack: {
		plugins: [
			UnoCSS(UnoCSSConfig),
		],
	},
	chainWebpack(config) {
		config.module.rule("vue").uses.delete("cache-loader");
		config.merge({
			cache: false,
		});
	},
	css: {
		extract: {
			filename: "[name].[hash:9].css",
			ignoreOrder: true
		},
	},
}