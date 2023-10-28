import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/components/Button";
import { AiFillCheckCircle } from "react-icons/ai";
const cx = classNames.bind(styles)
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://i.pinimg.com/1200x/0e/99/51/0e9951d110d57aed6fef4086a4796ed9.jpg"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Lalisa Manoband</strong>
                    <AiFillCheckCircle className={cx('check')} />
                </p>
                <p className={cx('name')}>Lisa</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}


export default AccountPreview;