import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineClear } from 'react-icons/md';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                interactive
                visible={false}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        Alo
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder='Tìm kiếm'
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleChange}
                    />
                    {searchValue && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <MdOutlineClear size={14} />
                        </button>
                    )}

                    <button className={cx('search-btn')} onClick={handleSubmit}>
                        <FiSearch size={20} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
