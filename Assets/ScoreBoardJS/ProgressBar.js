  // Progress bar
  class ProgressBar {
    constructor(element, increment) {
        this.element = element;
        this.progress = 0;
        this.increment = increment;
        this.playerClass = element.classList.contains('player1') ? 'player1' : 'player2';
    }

    increaseProgress() {
        if (this.progress <= 100) {
            this.element.style.width = this.progress + '%';
            this.progress += this.increment;
            setTimeout(() => this.increaseProgress(), 1000); // Increase every 1 second
        }
    }

    start() {
        this.increaseProgress();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function (progressBar) {
        const increment = progressBar.classList.contains('player1') ? 10 : 15; // Increment based on player class
        const bar = new ProgressBar(progressBar, increment);
        bar.start();
    });
});
// progress bar