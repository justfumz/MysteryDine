const address = document.querySelector('#address');
const btn = document.querySelector('#btn');
const starter = document.querySelector('#starter');
const main = document.querySelector('#main');
const message = document.querySelector('.message');
const orderContent = document.querySelector('.orderContent');
const reset = document.querySelector('.reorder');

const resturant = {
  name: 'JustFumz Cuisine',
  location: 'Home of specialized surpise delicacies!',
  categories: ['Italiano', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: [
    '',
    'Salad',
    'Garlic Bread',
    'Bruchetta',
    'Focallio',
    'Custard',
  ],
  mainMenu: ['', 'Pizza', 'Pasta', 'Basmatti', 'Eba', 'Isi-Ewu'],
};

address.textContent = resturant.location;

btn.addEventListener('click', function () {
  const firstCourse = resturant.starterMenu[starter.value];
  const secondCourse = resturant.mainMenu[main.value];
  if (
    starter.value >= 1 &&
    main.value >= 1 &&
    starter.value <= 5 &&
    main.value <= 5
  ) {
    message.textContent = `Your Order has been received!`;
    orderContent.textContent = `Your surprise order is ${firstCourse} and ${secondCourse}`;
    reset.classList.remove('hidden');
    btn.classList.add('hidden');
    starter.value = '';
    main.value = '';
  } else {
    message.textContent = 'Kindly pick a Number between 1-5 from the Menu';
  }
});

reset.addEventListener('click', function () {
  reset.classList.add('hidden');
  btn.classList.remove('hidden');
  message.textContent = '';
  orderContent.textContent = '';
});

const nested = [1, 2, [3, 5]];

console.log(nested[2][1]);
