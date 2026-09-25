// Web Audio API ambient romantic piano synthesizer
// Pure client-side, zero external audio dependency, works offline and on Vercel without broken URLs

class RomanticChimePlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private noteIndex = 0;

  // Romantic chord progression frequencies (in Hz): Cmaj7, Am7, Fmaj7, G6
  // Sweet gentle lullaby arpeggios
  private melodyNotes: number[] = [
    // Chord 1: C major 7 (C4, E4, G4, B4, C5)
    261.63, 329.63, 392.00, 493.88, 523.25, 392.00, 329.63, 392.00,
    // Chord 2: A minor 7 (A3, C4, E4, G4, A4)
    220.00, 261.63, 329.63, 392.00, 440.00, 329.63, 261.63, 329.63,
    // Chord 3: F major 7 (F3, A3, C4, E4, F4)
    174.61, 220.00, 261.63, 329.63, 349.23, 261.63, 220.00, 261.63,
    // Chord 4: G / Em (G3, B3, D4, G4, B4)
    196.00, 246.94, 293.66, 392.00, 493.88, 392.00, 293.66, 246.94,
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playGentleTone(freq: number) {
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Soft sine + triangle mix through warm low-pass filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Envelope: gentle attack and long, warm acoustic decay
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 2.0);
    } catch {
      // Audio fallback safe
    }
  }

  public start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const playNext = () => {
      if (!this.isPlaying) return;
      const freq = this.melodyNotes[this.noteIndex % this.melodyNotes.length];
      this.playGentleTone(freq);
      this.noteIndex++;
      this.timer = window.setTimeout(playNext, 480);
    };

    playNext();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const romanticPlayer = new RomanticChimePlayer();
