const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

describe('Web Application Tests', () => {
  let dom;
  let document;
  let button;
  let message;

  beforeEach(async () => {
    const scriptContent = fs.readFileSync(
      path.resolve(__dirname, '../public/script.js'),
      'utf8'
    );

    // Set up jsdom with HTML and include the client-side script
    dom = new JSDOM(
      `<!DOCTYPE html>
      <html>
        <head><title>Test</title></head>
        <body>
          <button id="click-me-btn">Click Me!</button>
          <p id="message"></p>
          <script>${scriptContent}</script>
        </body>
      </html>`,
      {
        runScripts: 'dangerously',  // Enable script execution
        resources: 'usable'         // Allow resources like scripts to load
      }
    );

    document = dom.window.document;
    button = document.getElementById('click-me-btn');
    message = document.getElementById('message');

    // Wait for the DOMContentLoaded event
    await new Promise(resolve => dom.window.addEventListener('load', resolve));
  });

  test('Button click updates the message', async () => {
    // Trigger the click event manually
    button.click();

    // Wait for the DOM update to reflect the new message
    await new Promise(resolve => setTimeout(resolve, 100));

    // Now check if the message was updated
    expect(message.textContent).toBe('Button clicked! Welcome to My Web App!');
  });
});
