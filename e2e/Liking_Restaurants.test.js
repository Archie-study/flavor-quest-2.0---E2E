Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/Like');
});
Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});