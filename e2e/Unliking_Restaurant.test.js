/* eslint-disable no-undef */
Feature('Unliking A Restaurant');

Scenario('showing empty liked restaurants item', ({ I }) => {
    I.amOnPage('/#/Like');
    I.dontSeeElement('.restaurant-item');
});
Scenario('unliking restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.restaurant-item ');

    const firstRestaurant = locate('.restaurant-item').first();
    const firstRestaurantTitle = await I.grabTextFrom(locate(firstRestaurant).find('a'));
    I.click(firstRestaurantTitle);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/Like');
    I.seeElement('.restaurant-item');
    const firstLikedRestaurant = locate('.restaurant-item').first();
    const firstLikedRestaurantTitle = await I.grabTextFrom(locate(firstLikedRestaurant).find('a'));

    I.click(firstLikedRestaurantTitle);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/Like');
    I.dontSeeElement('.restaurant-item');
});
