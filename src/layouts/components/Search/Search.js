import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FiSearch } from 'react-icons/fi';

import Input from '~/components/Input';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <HeadlessTippy
                interactive
                visible={false}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        Alo
                    </div>
                )}
            >
                <Input
                    className={cx('search-input')}
                    placeholder='Tìm kiếm'
                    spellCheck={false}
                    rightIcon={<FiSearch size={20} />}
                />
            </HeadlessTippy>
        </div>
    );
}

export default Search;
