import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import { Container, Row, Col } from 'react-grid-system';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrUploadOption } from 'react-icons/gr';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Image from '~/components/Image';
import { PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const genresMenu = [
    {
        title: 'Tất Cả',
        to: '/search',
    },
    {
        title: 'Huyền Huyễn',
        to: '/search',
    },
    {
        title: 'Võng Du',
        to: '/search',
    },
    {
        title: 'Đồng Nhân',
        to: '/search',
    },
    {
        title: 'Cạnh Kỹ',
        to: '/search',
    },
    {
        title: 'Kiếm Hiệp',
        to: '/search',
    },
    {
        title: 'Tiên Hiệp',
        to: '/search',
    },
    {
        title: 'Khoa Huyễn',
        to: '/search',
    },
    {
        title: 'Đô Thị',
        to: '/search',
    },
    {
        title: 'Dã Sử',
        to: '/search',
    },
    {
        title: 'Huyền Nghi',
        to: '/search',
    },
    {
        title: 'Kỳ Ảo',
        to: '/search',
    },
];

const rankingMenu = [
    {
        title: 'Thịnh Hành',
        to: '/ranking',
    },
    {
        title: 'Đọc Nhiều',
        to: '/ranking',
    },
    {
        title: 'Tặng thưởng',
        to: '/ranking',
    },
    {
        title: 'Đề Cử',
        to: '/ranking',
    },
    {
        title: 'Yêu thích',
        to: '/ranking',
    },
    {
        title: 'Thảo Luận',
        to: '/ranking',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('nav')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <Image src={images.logo} />
                    </Link>
                    <div>
                        <HeadlessTippy
                            interactive
                            placement='bottom-start'
                            arrow
                            render={(attrs) => (
                                <PopperWrapper className={cx('menu-items')} tabIndex='-1' {...attrs}>
                                    <Container>
                                        <Row>
                                            {genresMenu.map((genre, index) => (
                                                <Col sm={6} key={index}>
                                                    <Link to={genre.to} className={cx('memu-item')}>
                                                        {genre.title}
                                                    </Link>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </PopperWrapper>
                            )}
                        >
                            <Link to={config.routes.search} className={cx('nav-menu')}>
                                <AiOutlineMenu size={20} />
                                <span>Thể loại</span>
                            </Link>
                        </HeadlessTippy>
                    </div>
                    <div>
                        <HeadlessTippy
                            interactive
                            placement='bottom-start'
                            arrow
                            render={(attrs) => (
                                <PopperWrapper className={cx('menu-items')} tabIndex='-1' {...attrs}>
                                    <Container>
                                        <Row>
                                            {rankingMenu.map((item, index) => (
                                                <Col sm={6} key={index}>
                                                    <Link to={item.to} className={cx('memu-item')}>
                                                        {item.title}
                                                    </Link>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                </PopperWrapper>
                            )}
                        >
                            <Link to={config.routes.ranking} className={cx('nav-menu')}>
                                <span>Bảng xếp hạng</span>
                            </Link>
                        </HeadlessTippy>
                    </div>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <div className={cx('action-upload', 'action')}>
                        <GrUploadOption size={13} className={cx('action-upload-icon')} />
                        <Link to={config.routes.upload}>Đăng truyện</Link>
                    </div>
                    <div className={cx('action-login', 'action')}>Đăng nhập</div>
                    <div className={cx('action-register', 'action')}>Đăng ký</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
