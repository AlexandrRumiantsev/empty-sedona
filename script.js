const HOTEL_CONAINER = document.querySelector(".hotel-list");

const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, JSON.parse(xhr.response));
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const renderHotel = (data) => {
  return `
  <li class="hotel-card">
            <a class="hotel-image-link" href="#">
              <img class="hotel-card-image" src="./images/${data.img}" width="300" height="206" alt="${data.title}">
            </a>
            <h3 class="hotel-card-title">${data.title}</h3>
            <div class="hotel-card-container">
              <span class="hotel-card-type">Гостиница</span>
              <span class="hotel-card-price">От ${data.price} ₽</span>
            </div>
            <div class="hotel-card-container">
              <a class="button product-card-link" href="#">Подробнее</a>
              <button class="button button-blue product-card-favorites" type="button">В избранное</button>
            </div>
            <div class="hotel-card-container">
              <div class="product-card-star">
                <span class="visually-hidden">Количество звезд.</span>
                <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
                <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
                <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
                <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
              </div>
              <div class="product-card-rating">РЕЙТИНГ: <span>${data.rate}</span></div>
            </div>
          </li>
  `;
};



getJSON(`${window.location.origin}/data.json`, function (err, data) {
  console.log(data)
  data.forEach(element => {
    HOTEL_CONAINER.innerHTML += renderHotel(element);
  });
});
