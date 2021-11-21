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

const burger = document.querySelector('.header__burger');
if (burger)
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
    })


