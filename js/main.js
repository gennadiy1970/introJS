const list = [
  "Подключение внешнего js-файла",
  "Основы синтаксиса",
  "Выражения, инструкции",
  "Переменные: объявление let/const, имена переменных",
  "Вкладка Console в Chrome Devtools",
  "Строгий режим",
  "Получение данных от пользователя: prompt и confirm",
  "Типы примитивов.",
  "Числа. Основные операторы (+-*/ %). Понятие оператора и операнда",
  "Работа со встроенным объектом Math",
  "Строки. Спецсимволы и экранирование",
  "Интерполяция",
  "Преобразование типов примитивов"
];

const elemList = document.querySelector('.list')

elemList.innerHTML = list.map((el,i) => {
  return `<li class="list__item">
      <a class="list_link" href="./html/page-${i + 1}.html">${el}</a>
    </li>`
}).join('')