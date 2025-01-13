import { defineConfig, Preset, presetUno } from 'unocss'

const customPreset: Preset = {
    name: 'custom-preset',
    rules: [
        [/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
        [/^p-([.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    ],
}


export default defineConfig({
    presets: [
        presetUno(),
        customPreset,
    ],
})
