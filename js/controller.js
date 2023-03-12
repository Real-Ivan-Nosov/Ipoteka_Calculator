import * as Model from './model.js';
import programs from './components/radioPrograms.js';
import updateResultsView from './components/updateResultsView.js';
import costInput from './components/costInput.js';

window.onload = () => {
  const getData = Model.getData;

  // init programs
  programs(getData);

  // init costinput
  costInput(getData);

  document.addEventListener('updateForm', (e) => {
    Model.setData(e.detail);

    const data = Model.getData();
    const results = Model.getResults();

    // update results block
    updateResultsView(results)
  })
}