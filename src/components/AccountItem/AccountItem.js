import classNames from "classnames/bind";
import styles from './AccounItem.module.scss'
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <AiFillCheckCircle className={cx('check')} />}
                </p>
                <span className={cx('username')}> {data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object
}
export default AccountItem;