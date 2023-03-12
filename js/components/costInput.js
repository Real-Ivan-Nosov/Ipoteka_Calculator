import updateModel from "./../utils/updateModel.js";

const costInput = (getData) => {
  const { cost, minPrice, maxPrice } = getData();

  const input = document.querySelector('#input-cost');

  const settings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '
  }

  const cleaveInput = new Cleave(input, settings);
  cleaveInput.setRawValue(cost);

  input.addEventListener('input', () => {
    const value = +cleaveInput.getRawValue();

    // check min max price on input
    if (value < minPrice || value > maxPrice) {
      input.closest('.param__details').classList.add('param__details--error')
    }

    if (value >= minPrice && value <= maxPrice) {
      input.closest('.param__details').classList.remove('param__details--error')
    }


    // upd model
    updateModel(input, {
      cost: value,
      onUpdate: 'inputCost'
    })
  })

  input.addEventListener('change', () => {
    const value = +cleaveInput.getRawValue();

    if (value > maxPrice) {
      input.closest('.param__details').classList.remove('param__details--error')
      cleaveInput.setRawValue(maxPrice)
    }

    if (value < minPrice) {
      input.closest('.param__details').classList.remove('param__details--error')
      cleaveInput.setRawValue(minPrice)
    }

    // upd model
    updateModel(input, {
      cost: +cleaveInput.getRawValue(),
      onUpdate: 'inputCost'
    })
  })

  return cleaveInput;
}

export default costInput