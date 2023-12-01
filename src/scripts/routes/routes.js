import Home from '../views/pages/home';
import Resto from '../views/pages/resto';
import Like from '../views/pages/like';

const routes = {
    '/': Home,
    '/home': Home,
    '/detail/:id': Resto,
    '/like': Like,
};

export default routes;
