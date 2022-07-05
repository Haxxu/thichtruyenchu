import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    rounded = false,
    semiRounded = false,
    disabled = false,
    small = false,
    large = false,
    wFull = false,
    children,
    className,
    style,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        outline,
        disabled,
        small,
        large,
        semiRounded,
        rounded,
        wFull,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    semiRounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    wFull: PropTypes.bool,
    children: PropTypes.node.isRequired,
    class: PropTypes.string,
    style: PropTypes.object,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
