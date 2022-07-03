import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

import config from '~/config';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Image from '~/components/Image';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('nav')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <Image src={images.logo} />
                    </Link>
                    <div className='nav-menu'>
                        <AiOutlineMenu size={20} />
                        <span>Thể loại</span>
                    </div>
                    <div className='nav-menu'>
                        <span>Bảng xếp hạng</span>
                    </div>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <button>Đăng truyện</button>
                    <button>Đăng nhập</button>
                    <button>Đăng ký</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
