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

const multiButton = document.querySelector('#multiButton');

multiButton.addEventListener('click', () => {
    console.log(123);
});


