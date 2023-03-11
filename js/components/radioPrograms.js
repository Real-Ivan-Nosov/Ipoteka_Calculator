const init = (getData) => {

  const radioBtns = document.querySelectorAll('input[name="program"]');
  const { base, it, gov, zero } = getData().programs;

  // set programs rates in radio values
  document.querySelector('#base-value').value = base;
  document.querySelector('#it-value').value = it;
  document.querySelector('#gov-value').value = gov;
  document.querySelector('#zero-value').value = zero;

  // show programs rates on page
  document.querySelector('#base-text').textContent = base * 100 + '%';
  document.querySelector('#it-text').textContent = it * 100 + '%';
  document.querySelector('#gov-text').textContent = gov * 100 + '%';
  document.querySelector('#zero-text').textContent = zero * 100 + '%';

  radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('change', () => {
      radioBtn.dispatchEvent(new CustomEvent('updateForm', {
        bubbles: true,
        detail: {
          selectedProgram: parseFloat(radioBtn.value),
          onUpdate: 'radioProgram',
          id: radioBtn.id
        }
      }))
    })
  })
}

export default init;