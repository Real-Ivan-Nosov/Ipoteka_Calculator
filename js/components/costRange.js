import updateModel from "./../utils/updateModel.js";

const costRange = (getData) => {
  const slider = document.querySelector('#slider-cost');
  const { cost, minPrice, maxPrice } = getData();

  noUiSlider.create(slider, {
    start: cost,
    connect: 'lower',
    // tooltips: true,
    step: 100000,
    range: {
      min: minPrice,
      '1%': [40000, 100000],
      '50%': [10000000, 500000],
      max: maxPrice
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: ''
    })
  })

  slider.noUiSlider.on('slide', () => {
    let sliderValue = slider.noUiSlider.get();
    sliderValue = sliderValue.split('.')[0];
    sliderValue = parseInt(String(sliderValue).replace(/ /g, ''))

    updateModel(slider, {
      cost: sliderValue,
      onUpdate: 'costSlider'
    })
  })

  return slider;
}

export default costRange;