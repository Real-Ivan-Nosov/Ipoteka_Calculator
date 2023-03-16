import * as Model from './model.js';
import programs from './components/radioPrograms.js';

import updateResultsView from './components/updateResultsView.js';
import updateMinPercents from './components/updateMinPercents.js';

import costInput from './components/costInput.js';
import costRange from './components/costRange.js';

import paymentInput from './components/paymentInput.js';
import paymentRange from './components/paymentRange.js';

window.onload = () => {
  const getData = Model.getData;

  // init programs
  programs(getData);

  // init costinput
  const cleaveCost = costInput(getData);
  const sliderCost = costRange(getData);

  // imit paymentInput
  const cleavePayment = paymentInput(getData);
  const sliderPayment = paymentRange(getData);

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
    updateMinPercents(data);

    // costInput
    if (data.onUpdate !== 'inputCost') {
      cleaveCost.setRawValue(data.cost)
    }

    // costSlider
    if (data.onUpdate !== 'costSlider') {
      sliderCost.noUiSlider.set(data.cost)
    }

    //paymentInput
    if (data.onUpdate !== 'inputPayment') {
      cleavePayment.setRawValue(data.payment)
    }

    // paymentSlider
    if (data.onUpdate !== 'paymentSlider') {
      sliderPayment.noUiSlider.set(data.paymentPercents)
    }
  }
}