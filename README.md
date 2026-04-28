# Zimifrein-unique-tester

## Guitar Tuner Add-on

This project includes a browser-based guitar tuner with support for Drop D tuning.

### Features

- Real-time pitch detection using microphone input
- Support for standard guitar tuning (EADGBE)
- **New:** Support for Drop D tuning (DADGBE)
- Visual feedback showing target note, detected frequency, and cents deviation

### Usage

1. Open `guitar-tuner-demo.html` in a web browser
2. Click "Start Standard Tuning" or "Start Drop D Tuning"
3. Play a note on your guitar
4. The tuner will display the nearest string and tuning guidance

### API

#### `startGuitarTuner(options)`

Starts the guitar tuner with the specified options.

- `options.tuning`: `'standard'` (default) or `'dropD'`

#### `startDropDTuner()`

Convenience function to start the tuner in Drop D mode.

#### `GuitarTuner` class

- Constructor: `new GuitarTuner(options)`
- Methods:
  - `start()`: Start tuning
  - `stop()`: Stop tuning
  - `setTuning(tuning)`: Change tuning ('standard' or 'dropD')

### Files

- `guitar-tuner.js`: Main tuner implementation
- `guitar-tuner-demo.html`: Demo page with UI