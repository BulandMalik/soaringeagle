import {render} from 'react-dom';
import { App } from './components/App';

import { Provider } from 'react-redux';
import { votingToolStore } from './stores/votingToolStore';


import './index.css';

render(
  <Provider store={votingToolStore}>
    <App />,
  </Provider>,
  document.querySelector(`#root`),
)