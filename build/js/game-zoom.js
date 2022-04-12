'use strict';

(function () {
  let area = document.querySelector('.game__area');
  let list = area.querySelectorAll('.game__item')
  let items = area.querySelectorAll('.game__selector');
  let comment = area.querySelector('.game__comment');
  let win = area.querySelector('.game__win');
  let marks;

  function gameInit () {
    function renderCheckboxes () {
      const target = document.querySelector('.game__marks');
      const template = document.querySelector('#result-item-template').content.querySelector('.game__mark');

      items.forEach((item, index) => {
        const element = template.cloneNode(true);
        const i = index + 1;
        element.children[0].id = 'answer' + i;
        element.children[1].htmlFor = 'answer' + i;
        element.children[1].textContent = 'Ответ ' + i;
        target.appendChild(element);
      })
      marks = document.querySelectorAll('.game__mark');
    }

    renderCheckboxes();
  }

  function checkFinal (item) {
    let final = true;

    marks.forEach(item => {
      if (!item.querySelector('.game__check').checked) {
        final = false;
      }
    });

    if (final) {
      win.classList.remove('game__win--hide');
    }
  }

  gameInit();

  items.forEach((item, index) => {
    item.addEventListener('click', function () {
      console.log(items);
      const i = index + 1;
      let question = list[index].querySelector('.game__question');
      let answer = list[index].querySelector('.game__answer');

      question.classList.add('game__question--fade');
      answer.classList.add('game__answer--reveal');
      list[index].classList.add('item__checked');

      if (comment.classList.contains('game__comment--hide')) {
        comment.classList.remove('game__comment--hide');
      }

      comment.textContent = list[index].dataset.answer;
      list[index].style.pointerEvents = "none";
      marks[index].querySelector('.game__check').checked = 'true';

      checkFinal(item);
    });
  });

})();
