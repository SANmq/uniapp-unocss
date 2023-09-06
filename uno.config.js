// import {
//   defineConfig, presetAttributify, presetIcons,
//   presetTypography, presetUno, presetWebFonts,
//   transformerDirectives, transformerVariantGroup
// } from 'unocss'
const {
	defineConfig,
	presetUno
} = require("unocss")
module.exports = defineConfig({
	rules: [
		[/^m-([\.\d]+)$/, ([_, num]) => {
			console.log(_, num, "----打包的时候也运行了")
			return {
				margin: `${num}rpx`
			}
		}]
	],
	// presets: [presetUno()]
})