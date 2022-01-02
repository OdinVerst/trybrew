import {Theme} from "./darkTheme";
import {Timer} from "./timer";

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

multiButton.addEventListener('click', () => {
    multiButtonMenu.classList.toggle('multiButton__menu_active')
});

const darkThemeInput = document.querySelector('#darkTheme');
new Theme(darkThemeInput);

new Timer('timer', 'timerBlock')

