import classNames from 'classnames/bind';

import styles from './HeroSlide.module.scss';

const cx = classNames.bind(styles);

function HeroSlide() {
    return <div className={cx('wrapper')}>Hero Slide</div>;
}

export default HeroSlide;
