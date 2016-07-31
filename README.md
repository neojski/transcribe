# transcribe
Small tool to help you learn your favourite language

## Compile and run
```bash
npm run compile
```

Then open `src/index.html` in your browser. For now you can only easily rewind videos with key-bindings:
- <kbd>space</kbd> - play/pause
- <kbd>m</kbd> - mark the beginning of current interval
- <kbd>r</kbd> - replay current interval

Intended usage:
- <kbd>space</kbd> - play
- <kbd>m</kbd> for setting start of current interval to now (to skip moments of silence from replay)
- wait for one sentence
- <kbd>space</kbd> - pause
- <kbd>i</kbd> - enter insert mode - input what you've just heard
- <kbd>esc</kbd> - to enter normal mode
- <kbd>r</kbd> if you missed something. It'll replay the whole interval since your last <kbd>m</kbd>
- if you got it, hit <kbd>c</kbd> to commit current chunk and continue
