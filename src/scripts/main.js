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

const darkThemeInput = document.querySelector('#darkTheme');
new Theme(darkThemeInput);

const langInput = document.querySelector('#lang');
if (langInput) {
    langInput.addEventListener('change', (e) => {
        const lastDirectoryUrl = location.pathname.replace(/.*\/(\w+)\/?$/, '$1')
        const value = e.target.value;
        location.href = `${value}${lastDirectoryUrl}`
    })
}

const menuButton = document.querySelector('#menuButton');
const header = document.querySelector('#header')
if (menuButton && header) menuButton.addEventListener('click', () => header.classList.toggle('open'));

