import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    // ensure that like widget is showed
    it('should show the like button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });


    // Ensure widget unlike is not showed
    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });


    // Ensure the user press the like button
    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // Ensure that the restaurant is successfully liked
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });


    // Ensure that the restaurant is liked before
    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        // Add restaurant with ID 1 to liked restaurant list
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

        // Simulation of user press the like button
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // Ensure that there's no double restaurant
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1}]);

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    })


    // Ensure to not add a restaurant when it has no ID
    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({})

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });


});
