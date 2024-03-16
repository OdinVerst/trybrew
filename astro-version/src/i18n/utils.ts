import {createI18n, type Translations} from "@nanostores/i18n";
import {atom} from "nanostores";

export function t<T extends Translations>(locale: string, componentName: string, translations: { en: T, ru: any }) {
	const i18n = createI18n(atom(locale), {
		async get() {
			return {}
		},
		cache: {
			'ru': { [componentName]: translations['ru'] }
		}
	})

	return i18n(componentName, translations['en']).get();
}
