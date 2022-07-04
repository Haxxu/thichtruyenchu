// Config
import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Ranking from '~/pages/Ranking';
import Upload from '~/pages/Upload';

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
    {
        path: config.routes.upload,
        component: Upload,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
