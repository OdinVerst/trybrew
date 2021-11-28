export class Theme {
    constructor(input) {
        this.input = input;
        this.init();
    }

    init() {
        const nameTheme = localStorage.getItem('theme') || 'auto';
        if (nameTheme !== 'auto')
            this.input.checked = nameTheme === 'dark';

        this.setTheme(nameTheme);
        this.input.addEventListener('change', () => this.change(this.input.checked))
    }

    change(isDarkTheme) {
        const nameTheme = isDarkTheme ? 'dark' : 'light';
        this.setTheme(nameTheme)
    }

    setTheme(nameTheme) {
        document.documentElement.setAttribute('data-theme', nameTheme);
        localStorage.setItem('theme', nameTheme);
    }
}
