# Dental-Mellow-Monsters

This AR project reduces children’s dental anxiety by transforming clinic sounds into engaging visuals. A real-time audio pipeline captures microphone input, performs FFT feature extraction, and classifies noises into mechanical, pneumatic, or electromagnetic categories. Each category triggers a uniquely shaped 3D “sound monster” from a custom LoRA-based model library. Leveraging WebAR frameworks (e.g. Three.js + AR.js), the app renders the matching monster in the child’s environment with minimal latency, replacing unsettling noises with playful visual feedback.

## Description

The `speech_recognizer.js` script carries out the following steps:

1. **Model Loading**  
   - Fetches `model.json` and `metadata.json` from the `my_model/` directory.  
   - Initializes a `speechCommands.Recognizer` with browser FFT.  

2. **UI Setup**  
   - Reads available word labels via `recognizer.wordLabels()`.  
   - Dynamically creates a `<div><span></span></div>` for each label inside the `#label-container` element.  

3. **Real-Time Inference**  
   - Calls `recognizer.listen()` to continuously process microphone audio.  
   - Receives an array of class probabilities (`result.scores`).  
   - Updates each `<span>` with the corresponding probability as a percentage.  

4. **Configuration Options**  
   - `includeSpectrogram: false` (we only display scores)  
   - `probabilityThreshold: 0.75` (ignore predictions below 75%)  
   - `overlapFactor: 0.5` (adjusts FFT window overlap for smoother updates)  



## Features

- **100% client-side**: No backend required  
- **Real-time inference**: Updates scores at audio‐frame rate  
- **Automatic UI generation**: Adapts to any number of classes  
- **Configurable thresholds**: Tune sensitivity via script parameters  
- **Lightweight**: Only depends on TensorFlow.js  



## File Structure


