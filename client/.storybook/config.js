import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

const req = require.context('../src', true, /\.?stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);





// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);
