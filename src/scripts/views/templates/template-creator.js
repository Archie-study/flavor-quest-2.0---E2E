/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title" style="margin-top: 1rem;">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${
      CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Categories</h4>
    <p>${restaurant.categories
        .map(
            (category) => `
        <span class="category">${category.name}</span>
        `
        )
        .join('')}
    </p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant-menu">
    <h2>Menu</h2>
    <h3>Foods</h3>
    <div class="restaurant-menu__foods" style="margin-bottom: 1rem;">
          <ul style="list-style-type: none;">
          ${restaurant.menus.foods.map((food) => `
            <li>⭐${food.name}</li>
          `).join('')}
          </ul>
    </div>
    <h3>Drinks</h3>
    <div class="restaurant-menu__drinks">
          <ul style="list-style-type: none;">
          ${restaurant.menus.drinks.map((drink) => `
            <li>⭐${drink.name}</li>
          `).join('')}
          </ul>
    </div>

  </div>
  <div class="restaurant__review">
  <h3>Reviews</h3>
    ${restaurant.customerReviews.map((customerReview) => `
    <div class="review__list">
            <h3>${customerReview.name}</h3>
            <p>${customerReview.date}</p>
            <p>${customerReview.review}</p>
            </div>
            `).join('')}
      
  </div>
  

`;

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurants.name}"
           src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurants.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
            restaurants.rating
        }</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
