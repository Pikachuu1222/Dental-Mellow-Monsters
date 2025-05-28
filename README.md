# Dental-Mellow-Monsters
This AR project transforms children’s dental anxiety by converting clinical sounds into friendly visuals. Mechanical, pneumatic, and electromagnetic noises are classified and matched with cute 3D monsters—square, round, or triangular. When sounds are detected, the corresponding monster appears in AR, replacing fear with playful interaction and turning stressful dental visits into engaging, comforting experiences.
# Speech Command Recognition with TensorFlow.js

**Real-time browser-based voice command recognition and confidence display using TensorFlow.js**



## Project Introduction

This project leverages TensorFlow.js’s Speech-Commands API to load a Teachable Machine–exported audio model directly in the browser. It captures live microphone input, performs FFT feature extraction, and classifies spoken commands (for example: “yes”, “no”, “up”, “down”). The page dynamically builds a list of labels and continuously updates each class’s prediction probability, enabling voice-driven interactions, animations, or control flows without any server-side component.



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


