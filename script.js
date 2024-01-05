// Получаем ссылки на кнопки и контейнеры с фотографиями
const liteButton = document.getElementById('liteButton');
const mediumButton = document.getElementById('mediumButton');
const hardButton = document.getElementById('hardButton');
const photoContainerLite = document.getElementById('photoContainerLite');
const photoContainerMedium = document.getElementById('photoContainerMedium');
const photoContainerHard = document.getElementById('photoContainerHard');

// Сохраняем фон страницы при загрузке
const originalBackground = document.body.style.background;

// Скрываем фотографии при загрузке страницы
photoContainerLite.style.display = 'none';
photoContainerMedium.style.display = 'none';
photoContainerHard.style.display = 'none';

// Функция для восстановления фона
function restoreBackground() {
  document.body.style.background = originalBackground;
}

// Обработка нажатия кнопки LITE
// Обработка нажатия кнопки LITE
liteButton.addEventListener('click', function () {
  // Восстанавливаем фон
  restoreBackground();

  // Переключаем видимость фотографий
  photoContainerLite.style.display = photoContainerLite.style.display === 'none' ? 'block' : 'none';
  // Прокручиваем страницу к контейнеру с фотографиями
  photoContainerLite.scrollIntoView({ behavior: 'smooth' });
});

// Обработка нажатия кнопки MEDIUM
mediumButton.addEventListener('click', function () {
  // Восстанавливаем фон
  restoreBackground();

  // Переключаем видимость фотографий
  photoContainerMedium.style.display = photoContainerMedium.style.display === 'none' ? 'block' : 'none';
  // Прокручиваем страницу к контейнеру с фотографиями
  photoContainerMedium.scrollIntoView({ behavior: 'smooth' });
});

// Обработка нажатия кнопки HARD
hardButton.addEventListener('click', function () {
  // Восстанавливаем фон
  restoreBackground();

  // Переключаем видимость фотографий
  photoContainerHard.style.display = photoContainerHard.style.display === 'none' ? 'block' : 'none';
  // Прокручиваем страницу к контейнеру с фотографиями
  photoContainerHard.scrollIntoView({ behavior: 'smooth' });
});
