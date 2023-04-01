export class ThemeController {
    constructor(input) {
        this._input = input;
        this.init();
    }

    init() {
        const nameTheme = localStorage.getItem('theme') ?? "auto";
        if (nameTheme && this._input)
            this._input.value = nameTheme;

        this.setTheme(nameTheme);
        if (this._input)
            this._input.addEventListener('change', (e) => this.change(e.target.value))
    }

    setAttribute(nameTheme) {
        let theme = nameTheme;
        if (nameTheme === "auto") {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        }
        document.documentElement.setAttribute('data-theme', theme);
    }

    change(nameTheme) {
        this.setTheme(nameTheme)
    }

    setTheme(nameTheme) {
        this.setAttribute(nameTheme)
        localStorage.setItem('theme', nameTheme);
    }
}
