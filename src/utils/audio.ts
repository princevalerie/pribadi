// HTML5 Audio Player for "A Thousand Years - Christina Perri"
// Plays high quality romantic background song with loop and smooth volume

class RomanticAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private onStateChangeCallbacks: Array<(playing: boolean) => void> = [];

  constructor() {
    // Initialize in browser environment
    if (typeof window !== 'undefined') {
      const audioUrl = `${import.meta.env.BASE_URL}audio/a-thousand-years.mp3`;
      this.audio = new Audio(audioUrl);
      this.audio.loop = true;
      this.audio.volume = 0.65; // Warm, romantic background volume

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  private notify() {
    this.onStateChangeCallbacks.forEach((cb) => cb(this.isPlaying));
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.onStateChangeCallbacks.push(cb);
    return () => {
      this.onStateChangeCallbacks = this.onStateChangeCallbacks.filter((c) => c !== cb);
    };
  }

  public start(): boolean {
    if (!this.audio) return false;

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.notify();
        })
        .catch((err) => {
          console.warn('Autoplay restricted by browser, user interaction required:', err);
        });
    }
    return true;
  }

  public stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  public toggle(): boolean {
    if (this.audio) {
      if (this.audio.paused) {
        this.start();
        return true;
      } else {
        this.stop();
        return false;
      }
    }
    return false;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const romanticPlayer = new RomanticAudioPlayer();
