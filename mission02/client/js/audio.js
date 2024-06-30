export class AudioPlayer {
  #audio = null;

  constructor() {
    this.#audio = document.createElement('audio');
  }

  setSource(source) {
    this.#audio.src = source;
  }

  play() {
    this.#audio.play();
  }

  loopPlay() {
    this.play();
    this.#audio.addEventListener('ended', this.play.bind(this));
  }

  pause() {
    this.#audio.pause();
  }

  stop() {
    this.pause();
    this.#audio.currentTime = 0;
  }

  isPlaying() {
    return !this.#audio.paused;
  }

  get time() {
    return this.#audio.currentTime;
  }
}
