'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const travelWishList = {
    travels: [
      'ШРИ-ЛАНКА. Сигирия.',
      'ВЬЕТНАМ. Золотой мост. Мраморные горы.',
      'США (АРИЗОНА). Гранд Каньон',
    ],
  };

  const travelList = document.querySelector('.interactive_recordings-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding_input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newTravel = addInput.value;
    addInput.value.toUpperCase();
    const favorite = checkbox.checked;

    if (newTravel) {
      if (newTravel.length > 30) {
        newTravel = `${newTravel.substring(0, 31)}...`;
      }

      if (favorite) {
        alert('Галочка работает =)');
      }

      travelWishList.travels.push(newTravel);
      sortArr(travelWishList.travels);

      createTravelList(travelWishList.travels, travelList);
    }
    event.target.reset();
  });
  const sortArr = (arr) => {
    arr.sort();
  };

  function createTravelList(countries, parent) {
    parent.innerHTML = '';
    sortArr(countries);

    countries.forEach((place, i) => {
      parent.innerHTML += `<li class="interactive_recordings-item">
      ${i + 1} ${place} <div class="delete"></div></li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        travelWishList.travels.splice(i, 1);
        createTravelList(countries, parent);
      });
    });
  }

  createTravelList(travelWishList.travels, travelList);
});
