// Config
import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Ranking from '~/pages/Ranking';

// Public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.search,
        component: Search,
    },
    {
        path: config.routes.ranking,
        component: Ranking,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
