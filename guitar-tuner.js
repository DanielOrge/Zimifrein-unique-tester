/**
 * Basic browser guitar tuner.
 * Usage:
 * 1) Include this file in an HTML page.
 * 2) Add elements with IDs: note, frequency, cents, status.
 * 3) Call startGuitarTuner() from a user gesture (button click).
 */

const GUITAR_STRINGS = [
  { note: "E2", frequency: 82.41 },
  { note: "A2", frequency: 110.0 },
  { note: "D3", frequency: 146.83 },
  { note: "G3", frequency: 196.0 },
  { note: "B3", frequency: 246.94 },
  { note: "E4", frequency: 329.63 },
];

const DROP_D_STRINGS = [
  { note: "D2", frequency: 73.42 },
  { note: "A2", frequency: 110.0 },
  { note: "D3", frequency: 146.83 },
  { note: "G3", frequency: 196.0 },
  { note: "B3", frequency: 246.94 },
  { note: "E4", frequency: 329.63 },
];

class GuitarTuner {
  constructor(options = {}) {
    this.fftSize = options.fftSize || 2048;
    this.smoothing = options.smoothing || 0.85;
    this.minRms = options.minRms || 0.01;
    this.onUpdate = options.onUpdate || (() => {});
    this.tuning = options.tuning || 'standard'; // 'standard' or 'dropD'

    this.audioContext = null;
    this.analyser = null;
    this.microphone = null;
    this.data = null;
    this.running = false;
    this.rafId = null;
  }

  async start() {
    if (this.running) return;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
    });

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = this.fftSize;
    this.microphone = this.audioContext.createMediaStreamSource(stream);
    this.microphone.connect(this.analyser);

    this.data = new Float32Array(this.analyser.fftSize);
    this.running = true;
    this.loop();
  }

  stop() {
    if (!this.running) return;
    this.running = false;

    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.microphone) this.microphone.disconnect();
    if (this.audioContext) this.audioContext.close();

    this.audioContext = null;
    this.analyser = null;
    this.microphone = null;
    this.data = null;
  }

  loop() {
    if (!this.running) return;

    this.analyser.getFloatTimeDomainData(this.data);
    const result = this.detectPitch(this.data, this.audioContext.sampleRate);

    if (!result) {
      this.onUpdate({
        status: "Listening...",
        frequency: null,
        targetNote: null,
        cents: null,
      });
    } else {
      const nearest = this.getNearestString(result.frequency);
      const cents = 1200 * Math.log2(result.frequency / nearest.frequency);

      this.onUpdate({
        status: Math.abs(cents) < 5 ? "In tune" : cents > 0 ? "Tune down" : "Tune up",
        frequency: result.frequency,
        targetNote: nearest.note,
        cents,
      });
    }

    this.rafId = requestAnimationFrame(() => this.loop());
  }

  detectPitch(buffer, sampleRate) {
    let rms = 0;
    for (let i = 0; i < buffer.length; i += 1) {
      rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / buffer.length);
    if (rms < this.minRms) return null;

    let bestOffset = -1;
    let bestCorrelation = 0;
    const size = buffer.length;
    const maxSamples = Math.floor(size / 2);

    for (let offset = 8; offset < maxSamples; offset += 1) {
      let correlation = 0;
      for (let i = 0; i < maxSamples; i += 1) {
        correlation += Math.abs(buffer[i] - buffer[i + offset]);
      }
      correlation = 1 - correlation / maxSamples;

      if (correlation > bestCorrelation) {
        bestCorrelation = correlation;
        bestOffset = offset;
      }
    }

    if (bestCorrelation < this.smoothing || bestOffset === -1) return null;
    return { frequency: sampleRate / bestOffset };
  }

  setTuning(tuning) {
    this.tuning = tuning;
  }

  getNearestString(frequency) {
    const strings = this.tuning === 'dropD' ? DROP_D_STRINGS : GUITAR_STRINGS;
    let best = strings[0];
    let minDiff = Number.POSITIVE_INFINITY;

    for (const string of strings) {
      const diff = Math.abs(string.frequency - frequency);
      if (diff < minDiff) {
        minDiff = diff;
        best = string;
      }
    }

    return best;
  }
}

async function startGuitarTuner(options = {}) {
  const noteEl = document.getElementById("note");
  const freqEl = document.getElementById("frequency");
  const centsEl = document.getElementById("cents");
  const statusEl = document.getElementById("status");

  const tuner = new GuitarTuner({
    tuning: options.tuning || 'standard',
    onUpdate: ({ status, frequency, targetNote, cents }) => {
      if (noteEl) noteEl.textContent = targetNote || "--";
      if (freqEl) freqEl.textContent = frequency ? `${frequency.toFixed(2)} Hz` : "--";
      if (centsEl) centsEl.textContent = Number.isFinite(cents) ? `${cents.toFixed(1)} cents` : "--";
      if (statusEl) statusEl.textContent = status;
    },
  });

  try {
    await tuner.start();
    return tuner;
  } catch (error) {
    if (statusEl) statusEl.textContent = "Microphone access denied or unavailable.";
    throw error;
  }
}

if (typeof window !== "undefined") {
  window.startGuitarTuner = startGuitarTuner;
  window.startDropDTuner = () => startGuitarTuner({ tuning: 'dropD' });
  window.GuitarTuner = GuitarTuner;
}
