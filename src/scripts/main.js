import {ThemeController} from "./themeController";

document.addEventListener('click', (evt) => {
    const { target } = evt;
    if (!target)
        return;

    if (target instanceof HTMLElement && target.classList.contains('toggle-items')) {
        let parent = target.parentElement;
        while (parent && (!parent.classList.contains('category') || !parent.parentElement)) {
           parent = parent.parentElement;
        }

        if (parent) parent.classList.toggle('close');
    }
});

const themeInput = document.querySelector('#theme');
new ThemeController(themeInput);

const langInput = document.querySelector('#lang');
if (langInput) {
    const currentLang = document.documentElement.lang;
    langInput.value = currentLang;
    langInput.addEventListener('change', (e) => {
        const value = e.target.value;
        location.href = location.pathname.replace(currentLang, value);
    })
}

const menuButton = document.querySelector('#menuButton');
const header = document.querySelector('#header')
if (menuButton && header) menuButton.addEventListener('click', () => header.classList.toggle('open'));

