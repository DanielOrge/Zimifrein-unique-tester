const OPEN_G_STRINGS = [
  { note: "D2", frequency: 73.42 },
  { note: "G2", frequency: 98.0 },
  { note: "D3", frequency: 146.83 },
  { note: "G3", frequency: 196.0 },
  { note: "B3", frequency: 246.94 },
  { note: "D4", frequency: 293.66 },
];

var openGAddonInstalled = false;

function isOpenGTuning(tuning) {
  return tuning == 'openG';
}

function getOpenGStrings() {
  return OPEN_G_STRINGS;
}

function patchOpenGTuning() {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.GuitarTuner) {
    console.log('GuitarTuner not found, Open G add-on not applied.');
    return;
  }

  if (openGAddonInstalled) {
    return;
  }

  var originalGetNearestString = window.GuitarTuner.prototype.getNearestString;

  window.GuitarTuner.prototype.getNearestString = function (frequency) {
    if (isOpenGTuning(this.tuning)) {
      var best = OPEN_G_STRINGS[0];
      var minDiff = Number.POSITIVE_INFINITY;

      for (var i = 0; i < OPEN_G_STRINGS.length; i += 1) {
        var string = OPEN_G_STRINGS[i];
        var diff = Math.abs(string.frequency - frequency);

        if (diff < minDiff) {
          minDiff = diff;
          best = string;
        }
      }

      return best;
    }

    return originalGetNearestString.call(this, frequency);
  };

  openGAddonInstalled = true;
}

async function startOpenGTuner() {
  patchOpenGTuning();

  if (typeof window === "undefined") {
    return null;
  }

  if (window.currentTuner) {
    window.currentTuner.stop();
  }

  window.currentTuner = await window.startGuitarTuner({ tuning: 'openG' });
  return window.currentTuner;
}

if (typeof window !== "undefined") {
  window.startOpenGTuner = startOpenGTuner;
  window.patchOpenGTuning = patchOpenGTuning;
}
