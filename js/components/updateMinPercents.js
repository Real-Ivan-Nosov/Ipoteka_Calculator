const updateMinPercents = (data) => {
  if (data.onUpdate === 'radioProgram') {
    document.querySelector('#percents-from').textContent = data.minPaymentPercents * 100 + '%';
  }
}

export default updateMinPercents;