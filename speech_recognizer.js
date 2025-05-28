/**
 * speech_recognizer.js
 *
 * Loads and runs a TensorFlow.js Speech-Commands model exported from Teachable Machine.
 * Displays real-time class probabilities in the page.
 */

const URL = './my_model/';  // folder containing model.json, metadata.json, and shard files

/**
 * Create and load the speech recognizer.
 */
async function createModel() {
  // URLs to model topology and metadata
  const checkpointURL = URL + 'model.json';
  const metadataURL   = URL + 'metadata.json';

  // Create a recognizer using WebAudio FFT feature extraction
  const recognizer = speechCommands.create(
    'BROWSER_FFT',   // use built-in browser FFT
    undefined,       // vocabulary (we’ll load our own via metadata.json)
    checkpointURL,
    metadataURL
  );

  // Wait for model and metadata to finish downloading
  await recognizer.ensureModelLoaded();
  return recognizer;
}

/**
 * Initialize UI and start listening.
 */
async function init() {
  const recognizer   = await createModel();
  const classLabels  = recognizer.wordLabels();       // e.g. ['Yes', 'No', 'Up', 'Down', ...]
  const labelContainer = document.getElementById('label-container');

  // Build a <div><span></span></div> for each class to show its score
  classLabels.forEach(label => {
    const labelDiv  = document.createElement('div');
    labelDiv.textContent = label + ': ';
    const scoreSpan = document.createElement('span');
    labelDiv.appendChild(scoreSpan);
    labelContainer.appendChild(labelDiv);
  });

  // Start listening to the microphone input
  recognizer.listen(result => {
    const scores = result.scores;  // probabilities for each class

    // Update each <span> with the current score
    classLabels.forEach((_, i) => {
      const percentage = (scores[i] * 100).toFixed(2) + '%';
      labelContainer.children[i]
        .querySelector('span').textContent = percentage;
    });
  }, {
    includeSpectrogram: false,       // we only need the scores
    probabilityThreshold: 0.75,      // ignore anything below 75%
    overlapFactor: 0.5               // how much frames overlap
  });
}

// Run init() when the page has loaded
window.addEventListener('DOMContentLoaded', init);
