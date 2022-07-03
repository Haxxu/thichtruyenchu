import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import HeroSlide from '~/layouts/components/HeroSlide';
import Footer from '~/layouts/components/Footer';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <HeroSlide />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
