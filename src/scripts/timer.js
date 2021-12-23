export class Timer {
    constructor(buttonSelector, blockSelector) {
        this.button = document.querySelector(`#${buttonSelector}`);
        this.block = document.querySelector(`#${blockSelector}`);
        this.display = this.block.querySelector('span');
        this.isStart = false;
        this.time = 0;
        this.init();
    }

    _parseToTime(time) {
        const minutes = Math.trunc(time / 60);
        const seconds = time - minutes * 60;
        const fullSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${fullSeconds}`;
    }

    init() {
       this.button.addEventListener('click', () => {
           if (this.isStart)
               return;
           this.isStart = true;
           this.block.classList.add('active');
           setInterval(() => {
               this.display.innerHTML = this._parseToTime(this.time++);
           }, 1000)
       })
    }
}
