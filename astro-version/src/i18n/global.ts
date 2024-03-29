import {t} from "./utils.ts";

export function globalTranslations(locale: string) {
	return t(locale, 'global', {
		en: {
			sections: "Sections",
			about: "About",
			settings: "Settings",
			aeropress: "Aeropress",
			cezve: "Cezve",
			chemex: "Chemex",
			pourover: "Pourover",
			coldbrew: "Cold brew",
			summer: "Summer",
			menu: "Menu"
		},
		ru: {
			sections: "Разделы",
			about: "О нас",
			settings: "Настройки",
			aeropress: "Аэропресс",
			cezve: "Джезва/Турка",
			chemex: "Кемекс",
			pourover: "Пуровер / V60",
			coldbrew: "Cold brew",
			summer: "Лето",
			menu: "Меню"
		},
	})
}
