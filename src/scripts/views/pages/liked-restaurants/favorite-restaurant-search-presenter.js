class FavoriteRestaurantSearchPresenter {
    constructor({ favoriteRestaurants }) {
        this._listenToSearchRequestByUser();
        this._favoriteRestaurants = favoriteRestaurants;
    }

    _listenToSearchRequestByUser() {
        this._queryElement = document.getElementById('query');
        this._queryElement.addEventListener('change', (event) => {
            this._searchRestaurants(event.target.value);
            // this._latestQuery = event.target.value;
            // this._favoriteRestaurants.searchRestaurants(this._latestQuery);
        });
    }

    async _searchRestaurants(latestQuery) {
        this._latestQuery = latestQuery;
        // eslint-disable-next-line max-len
        const foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);
        this._showFoundRestaurants(foundRestaurants);
        // this._favoriteRestaurants.searchRestaurants(this.latestQuery);
    }

    // eslint-disable-next-line class-methods-use-this
    _showFoundRestaurants(restaurants) {
        console.log(restaurants);

        const html = restaurants.reduce(
            (carry, restaurant) => carry.concat(`
                <li class="restaurant">
                    <span class="restaurant__title">${restaurant.title || '-'}</span>
                </li>
            `),
            '',
        );
        document.querySelector('.restaurants').innerHTML = html;

        document
            .getElementById('restaurant-search-container')
            .dispatchEvent(new Event('restaurants:searched:updated'));
    }

    get latestQuery() {
        return this._latestQuery;
    }
}

export default FavoriteRestaurantSearchPresenter;
