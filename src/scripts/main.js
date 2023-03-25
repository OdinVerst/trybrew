import {Theme} from "./darkTheme";

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

const multiButton = document.querySelector('.multiButton');
const multiButtonMenu = document.querySelector('.multiButton__menu')

if (multiButtonMenu && multiButton)
multiButton.addEventListener('click', () => {
    multiButtonMenu.classList.toggle('multiButton__menu_active')
});

const darkThemeInput = document.querySelector('#darkTheme');
if (darkThemeInput) new Theme(darkThemeInput);

const menuButton = document.querySelector('#menuButton');
const header = document.querySelector('#header')
if (menuButton && header) menuButton.addEventListener('click', () => header.classList.toggle('open'));

