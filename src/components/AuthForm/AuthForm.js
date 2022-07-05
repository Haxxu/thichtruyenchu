import classNames from 'classnames/bind';
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

import Input from '~/components/Input';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

function AuthForm({ close = false, login = false, register = false }) {
    const [isLogin, setIsLogin] = useState(login);
    const [isRegister, setIsRegister] = useState(register);

    const toggle = () => {
        setIsLogin(!isLogin);
        setIsRegister(!isRegister);
    };

    return (
        <div className={cx('wrapper')}>
            {close && (
                <div className={cx('close-wrapper')}>
                    <GrFormClose className={cx('close')} onClick={close} size={30} />
                </div>
            )}
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={cx('auth-type')}>
                        {isLogin && <div className={cx('login', { active: isLogin })}>Đăng nhập</div>}
                        {!isLogin && (
                            <div onClick={toggle} className={cx('login', { active: isLogin })}>
                                Đăng nhập
                            </div>
                        )}
                        {isRegister && <div className={cx('register', { active: isRegister })}>Đăng ký</div>}
                        {!isRegister && (
                            <div onClick={toggle} className={cx('register', { active: isRegister })}>
                                Đăng ký
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('body')}>
                    {isLogin && (
                        <form className={cx('register-form')}>
                            <div className={cx('form-inline')}>
                                <label>Email</label>
                                <div className={cx('form-action')}>Gửi lại email kích hoạt</div>
                            </div>
                            <Input placeholder='Email' grayBg />
                            <div className={cx('form-inline')}>
                                <label>Mật khẩu</label>
                                <div className={cx('form-action')}>Quên mật khẩu?</div>
                            </div>
                            <Input placeholder='Nhập mật khẩu' grayBg />
                        </form>
                    )}
                    {isRegister && (
                        <form className={cx('login-form')}>
                            <div className={cx('form-inline')}>
                                <label>Email</label>
                            </div>
                            <Input placeholder='Email' grayBg />
                            <div className={cx('form-inline')}>
                                <label>Mật khẩu</label>
                            </div>
                            <Input placeholder='Nhập mật khẩu' grayBg />
                            <div className={cx('form-inline')}>
                                <label>Nhập lại mật khẩu</label>
                            </div>
                            <Input placeholder='Nhập lại mật khẩu' grayBg />
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
