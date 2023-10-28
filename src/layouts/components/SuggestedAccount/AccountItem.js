import styles from './SuggestedAccount.module.scss'
import classNames from 'classnames/bind';
import { AiFillCheckCircle } from "react-icons/ai";
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles)
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive // co the tuong tac duoc cac item o ben trong
                delay={[800, 0]}
                render={renderPreview}
                placement='bottom'
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://i.pinimg.com/1200x/0e/99/51/0e9951d110d57aed6fef4086a4796ed9.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Lisa</strong>
                            <AiFillCheckCircle className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Lalisa Manoband</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;