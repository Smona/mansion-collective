import s from './Menu.scss';

export default {
  cascade: {
    enable(el) {
      el.classList.add(s.cascade);
      const itemText = el.innerHTML;
      for (let i = 1; i <= 5; i++) {
        el.innerHTML += `<div class="${s.cascadeEl}" style="top: ${i * i * 5}px">${itemText}</div>`;
      }
    },

    disable(el) {
      el.classList.remove(s.cascade);
      el.innerHTML = el.innerHTML.split('<div')[0];
    },
  },

  stretch: {
    enable(el) {
      el.classList.add(s.stretch);
    },

    disable(el) {
      el.classList.remove(s.stretch);
    },
  },
};
