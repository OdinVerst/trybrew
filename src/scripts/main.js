document.addEventListener('click', (evt) => {
    const { target } = evt;
    if (target && target.classList.contains('toggle-items')) {
        let parent = target.parentElement;
        while (!parent.classList.contains('category') || !parent.parentElement) {
           parent = parent.parentElement;
        }

        if (parent) parent.classList.toggle('close');
    }
})
