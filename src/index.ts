/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createElement } from 'react';
import { render } from 'react-dom';
import App from '~/components/App';

// declare global {
//   interface Window {
//   }
// }

render(createElement(App, null), document.getElementById('root') as HTMLElement);
