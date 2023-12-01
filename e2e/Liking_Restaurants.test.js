Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/Like');
});
Scenario('showing empty liked restaurants', ({ I }) => {
    // I.seeElement('#restaurants');
    I.see('Your Liked Restaurant', '.content__heading');
});
