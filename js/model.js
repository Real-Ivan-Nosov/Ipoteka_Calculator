let data = {
  selectedProgram: 0.1,
  cost: 12000000,
  minPrice: 375000,
  maxPrice: 100000000,
  minPaymentPercents: 0.15,
  maxPaymentPercents: 0.9,
  paymentPercents: 0.5,
  payment: 6000000,
  getMinPayment: function () {
    return this.cost * this.minPaymentPercents
  },
  getMaxPayment: function () {
    return this.cost * this.maxPaymentPercents
  },
  programs: {
    base: 0.1,
    it: 0.047,
    gov: 0.067,
    zero: 0.12
  }
}

let results = {
  rate: data.selectedProgram,
}

const getData = () => {
  return { ...data }
}

const getResults = () => {
  return { ...results }
}

const setData = (newData) => {

  if (newData.onUpdate === 'radioProgram') {
    if (newData.id === 'zero-value') {
      data.minPaymentPercents = 0;
    } else {
      data.minPaymentPercents = 0.15;
    }
  }

  // check 
  if (newData.onUpdate === 'updateCost' || newData.onUpdate === 'costSlider') {
    // if cost lower than min price
    if (newData.cost < data.minPrice) newData.cost = data.minPrice

    // if cost bigger than max price
    if (newData.cost > data.maxPrice) newData.cost = data.maxPrice

    // if new cost lower than first cost
    if (data.payment > data.getMaxPayment()) data.payment = data.getMaxPayment()

    if (data.payment < data.getMinPayment()) data.payment = data.getMinPayment()
  }

  if (newData.onUpdate === 'paymentSlider') {
    newData.paymentPercents /= 100;
  }

  data = {
    ...data,
    ...newData
  }

  results = {
    rate: data.selectedProgram
  }

  console.log(data)
}

export { getData, setData, getResults }