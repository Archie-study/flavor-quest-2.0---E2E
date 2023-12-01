/* eslint-disable operator-linebreak */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div id="mainPoint" class="content">
            <h2 class="content__heading">Restoran Populer Pilihan Kami</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.allRestaurant();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
