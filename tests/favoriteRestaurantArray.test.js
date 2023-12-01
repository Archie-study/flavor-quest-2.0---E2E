import { itActsAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
    getRestaurant(id) {
        if(!id) {
            return;
        }

        return favoriteRestaurants.find((restaurant) => restaurant.id == id);
    },

    getAllRestaurants() {
        return favoriteRestaurants;
    },

    putRestaurant(restaurant) {
        if(!restaurant.hasOwnProperty('id')) {
            return;
        }

        //Pastikan id ini belum ada dalam daftar favoriteRestaurants
        if(this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestaurants.push(restaurant);
    },

    deleteRestaurant(id) {
        // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
        // kecuali restaurant dengan id == id
        favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id != id);
    },
};

describe('Favorite Restaurant Contract Test Implementation', () => {
    afterEach(() => {
        favoriteRestaurants = [];
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
