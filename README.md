# Chrome Extension Downloader (CRX Method)

A modern web application to download and validate Chrome extensions directly using their IDs or URLs.

## Features

- Clean, modern UI with smooth animations
- Extract Chrome extension IDs from various formats
- Direct download of extension CRX files
- Validation of extension IDs with name detection
- Mobile responsive design

## Setup Instructions

1. Clone the repository:
```
git clone https://github.com/yourusername/chrome-extension-downloader.git
```

2. Navigate to the project directory:
```
cd chrome-extension-downloader
```

3. Open the project in your preferred code editor

4. Launch the application by opening `index.html` in your browser, or use a local server:
```
npx serve
```

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Core functionality for extension download and validation

## Usage

1. Enter a Chrome extension URL or ID in the input field
2. Click "Download Extension" to download the CRX file directly
3. Click "Detect If Its Valid" to verify the extension and display its name

## Extension ID Formats Supported

- Full Chrome Web Store URLs: `https://chrome.google.com/webstore/detail/extension-name/abcdefghijklmnopqrstuvwxyz012345`
- Chrome extension URLs: `chrome-extension://abcdefghijklmnopqrstuvwxyz012345`
- Direct IDs: `abcdefghijklmnopqrstuvwxyz012345`

## Technical Implementation

The application uses a combination of:
- Modern JavaScript for DOM manipulation and fetch API calls
- CSS animations for visual feedback
- Google's CRX download API for retrieving extensions
- Custom ID validation and extraction algorithms

## License

MIT
