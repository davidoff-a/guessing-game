class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const guessAssume = Math.ceil(this.min + (this.max - this.min) / 2);
    return guessAssume;
  }

  lower() {
    this.max = this.guess();
  }

  greater() {
    this.min = this.guess();
  }
}

module.exports = GuessingGame;
