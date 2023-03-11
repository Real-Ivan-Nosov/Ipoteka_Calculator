import * as Model from './model.js';
import programs from './components/radioPrograms.js';

window.onload = () => {
  const getData = Model.getData;

  // init programs
  programs(getData);

  document.addEventListener('updateForm', (e) => {
    Model.setData(e.detail);
  })
}