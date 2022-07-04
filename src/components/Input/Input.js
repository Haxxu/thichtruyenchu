import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { MdOutlineClear } from 'react-icons/md';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ placeholder, rightIcon, ...props }) {
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClear = () => {
        setInputValue('');
        inputRef.current.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('wrapper')}>
            <input value={inputValue} ref={inputRef} placeholder={placeholder} onChange={handleChange} {...props} />
            {inputValue && (
                <button className={cx('clear-btn')} onClick={handleClear}>
                    <MdOutlineClear size={14} />
                </button>
            )}
            {rightIcon && (
                <button className={cx('btn')} onClick={handleSubmit}>
                    {rightIcon}
                </button>
            )}
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    rightIcon: PropTypes.node,
};

export default Input;
