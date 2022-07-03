import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input placeholder='Tìm kiếm' />
                <button className='search-btn'>
                    <FiSearch size={20} />
                </button>
            </div>
        </div>
    );
}

export default Search;
