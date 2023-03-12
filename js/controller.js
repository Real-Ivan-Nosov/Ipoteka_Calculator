import * as Model from './model.js';
import programs from './components/radioPrograms.js';
import updateResultsView from './components/updateResultsView.js';

import costInput from './components/costInput.js';
import costRange from './components/costRange.js';

window.onload = () => {
  const getData = Model.getData;

  // init programs
  programs(getData);

  // init costinput
  const cleaveCost = costInput(getData);
  const sliderCost = costRange(getData);

  document.addEventListener('updateForm', (e) => {
    Model.setData(e.detail);

    const data = Model.getData();
    const results = Model.getResults();

    // upd all form view based on model
    updateFormAndSliders(data);

    // update results block
    updateResultsView(results);
  })

  const updateFormAndSliders = (data) => {
    // costInput
    if (data.onUpdate !== 'inputCost') {
      cleaveCost.setRawValue(data.cost)
    }

    // costSlider
    if (data.onUpdate !== 'costSlider') {
      sliderCost.noUiSlider.set(data.cost)
    }
  }
}