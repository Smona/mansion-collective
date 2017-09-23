import s from './Menu.scss';
import { randInt } from '../../core/math';

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

  // Moves individual letters to a new, random position
  hallucination: {
    enable(el) {
      el.classList.add(s.hallucination);
      const maxDistance = 100;         // Max movable distance in pixels
      const originalText = el.innerHTML;
      el.innerHTML += '<span>';
      for (const letter of originalText) {
        el.innerHTML += `<span style="
                           transform: translate(${randInt(maxDistance)}px,
                                      ${randInt(maxDistance, -maxDistance)}px);"
                         >
                           ${letter}
                         </span>`;
      }

      el.innerHTML += '</span>';
    },

    disable(el) {
      el.classList.remove(s.hallucination);
      el.innerHTML = el.firstChild.textContent;
    },
  },

  drunk: {
    enable(el) {
      el.classList.add(s.drunk);
      const originalString = el.innerHTML;
      let jumbledString;
      do {
        jumbledString = '';
        for (const letter of originalString) {
          const position = randInt(jumbledString.length + 1);
          jumbledString = jumbledString.substr(0, position) +
            letter +
            jumbledString.substr(position, jumbledString.length);
        }
      } while (jumbledString === originalString);

      el.innerHTML = `<span style="display: none;">${originalString}</span>
        <span>${jumbledString}</span>`;
    },

    disable(el) {
      el.classList.remove(s.drunk);
      el.innerHTML = el.firstChild.innerHTML;
    },
  },

  // Vertically stretches word
  elongation: {
    enable(el) {
      el.classList.add(s.stretch);
    },

    disable(el) {
      el.classList.remove(s.stretch);
    },
  },
};
