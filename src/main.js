import Swal from 'sweetalert2';

const button = document.querySelector('button');
const img = document.querySelector('img');
const heroName = document.querySelector('h2');
const totalHeroes = 731;

const generateRandomNumber = () => Math.ceil(Math.random() * totalHeroes);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const randomId = generateRandomNumber();
  console.log(randomId);
  fetch(`https://akabab.github.io/superhero-api/api/id/${randomId}.json`)
    .then((response) => response.json())
    .then((data) => {
      const { name, images } = data;

      img.src = images.lg;
      heroName.innerText = name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
