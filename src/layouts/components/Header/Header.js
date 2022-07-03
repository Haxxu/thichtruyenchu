import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

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
                    <div>
                        <Tippy
                            interactive
                            placement='bottom'
                            render={(attrs) => (
                                <div className={cx('menu-items')} tabIndex='-1' {...attrs}>
                                    <div>
                                        <h3>Cay the nho</h3>
                                    </div>
                                </div>
                            )}
                        >
                            <Link to={config.routes.search} className={cx('nav-menu')}>
                                <AiOutlineMenu size={20} />
                                <span>Thể loại</span>
                            </Link>
                        </Tippy>
                    </div>
                    <Link to={config.routes.ranking} className={cx('nav-menu')}>
                        <span>Bảng xếp hạng</span>
                    </Link>
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
