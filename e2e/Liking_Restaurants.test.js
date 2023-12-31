const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/Like');
});
Scenario('showing empty liked restaurants', ({ I }) => {
    I.see('Your Liked Restaurant', '.content__heading');
});

Scenario('showing empty liked restaurants item', ({ I }) => {
    I.dontSeeElement('.restaurant-item');
});

Scenario('liking one restaurant', async ({ I }) => {
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

    assert.strictEqual(firstRestaurantTitle, firstLikedRestaurantTitle);
});
