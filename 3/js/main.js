const MIN_INDEX = 1;
const MAX_INDEX = 25;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const PHOTOS_COUNT = 25;
const messages = ['Всё отлично!','В целом всё неплохо.',' Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',' В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают.',' Как можно было поймать такой неудачный момент?!'];
const names = ['Иван','Наталья','Игорь','Михаил','Светлана','Олег','Евгений','Оксана','Полина','Снежана',];
const descriptions = ['Это моё лучшее фото','Это фото выражает мои чувства','Здесь цвет более насыщеный','Это фото для медитации','Это просто муза','Миг, когда чувствуеш лёгкость момента'];
/**
 * Функция для получения случайного целого числа.
 * @param {int} - Минимальное значение числа
 * @param {int} - Максимальное значение числа
 * @returns {int} - Возвращает случайное число из интервала чисел
 */
const getRandomInteger = function (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
/**
 * функция для получения случайного не повторяющегося числа в определённом интервале
 * @param {int} - Минимальное число из интервала чисел
 * @param {int} - Максимальное число из интервала чисел
 * @returns {int} Возвращает случайное число из интервала чисел
 */
const getRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger (min, max);
    if (previousValues.length >= (max - min + 1)) {
      // console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max );
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

//Получить id фотографии
const getIdPhoto = getRandomIdFromRangeGenerator(MIN_INDEX,MAX_INDEX);
//Получить url фотографии
const getUrlPhoto = getRandomIdFromRangeGenerator(MIN_INDEX,MAX_INDEX);
//Получить количество лайков
const getLikes = getRandomInteger ;
//Создаём индекс объекта массива коментариев
const idCommint = getRandomIdFromRangeGenerator(30,999);
/**
 * Функция которая создаёт описание фотографии
 * @param {int} - Минимальный шндекс массива
 * @param {int} - максимальный шндекс массива
 * @returns {string} Возвращает случайный элемент массива с описанием фотографии
 */
const getDescription = function(a,b) {
  return descriptions[getRandomInteger(a,b)];
};
/**
 * функцию которая создаёт коментарий из одного или двух предложений
 * @param{int} - Минимальное число предложений
 * @param{int} - Максимальное число предложений
 * @returns{string} Возвращает коментарий в виде строки из одного или двух предложений
 */
const getMessage = function(min, max){
  let string = '';
  let n = getRandomInteger(min, max);
  if(n === 1){
    string = messages[getRandomInteger(0,messages.length - 1)];
  } else {
    string = messages[getRandomInteger(0,messages.length - 1)] + messages[getRandomInteger(0,messages.length - 1)];
  }
  return string ;
};
getMessage(1, 2);

/**
 * Функцию которая создаёт объект коментариев: id, avatar, message, name.
 * @returns {Object} Возвращает объект
 */
const createObjectMessage = function(){
  return {
    id: idCommint(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR,MAX_AVATAR)}.svg`,
    message: getMessage(),
    name: names[getRandomInteger(0, names.length - 1)],
  };
};
/**
 * Функция которая создаёт массив из случайного числа объектов каментариев
 * @param {int} - количество объектов для генерации
 * @returns {Array} - Возвращает коментарии с описанием фотографии
 */
const createArrayComments = function (count) {
  return Array.from({length: count}, createObjectMessage);
};
createArrayComments(getRandomInteger(0,30));
/**
 * Функция которая создаёт объект с id, url, likes, description, comments
 * @returns Возвращает объект
 */
const createPhoto = function () {
  return {
    id: getIdPhoto(),
    url: `photos/${getUrlPhoto(MIN_INDEX, MAX_INDEX)}.jpg`,
    description: getDescription(0, descriptions.length - 1),
    likes: getLikes(MIN_LIKES, MAX_LIKES),
    comments: createArrayComments,
  };
};

/**
 * Функция создаёт массив из 25 объектов Каждый объект массива — описание фотографии, опубликованной пользователем.
 * @param {int} count - количестрво объектов для генерации
 * @return {Array} - список фотографий
 */
const createArrayDescriptionPhotos = function (count) {
  return Array.from({length: count}, createPhoto);
};
createArrayDescriptionPhotos(PHOTOS_COUNT);
