
import { AiOutlinePlus } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5';
import { IoMdMore } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { TbCoins } from "react-icons/tb"
import { AiOutlineSetting } from "react-icons/ai"
import { LuLogOut } from "react-icons/lu"
import { BiHelpCircle } from 'react-icons/bi'
import { BsKeyboard } from 'react-icons/bs'
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images'
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';

import Tippy from '@tippyjs/react';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <IoLanguage></IoLanguage>,
        title: 'Vietnamese',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },

    },
    {
        icon: <BiHelpCircle></BiHelpCircle>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <BsKeyboard></BsKeyboard>,
        title: 'Keyboard shortcuts',

    }
]
function Header() {
    const currentUser = true;


    const handleMenuChange = (menuItem) => {

    }
    const userMenu = [
        {

            icon: <AiOutlineUser></AiOutlineUser>,
            title: 'View Profile',
            to: '/user'

        },
        {

            icon: <BsBookmark></BsBookmark>,
            title: 'Favorite',
            to: '/favaorite'

        },
        {

            icon: <TbCoins></TbCoins>,
            title: 'Get Coins',
            to: '/coin'

        },
        {

            icon: <AiOutlineSetting></AiOutlineSetting>,
            title: 'Setting',
            to: '/setting'

        },

        ...MENU_ITEM,
        {
            icon: <LuLogOut></LuLogOut>,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ]
    return (

        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link className={cx('logo-link')} to="/">    <img src={images.logo} alt='logo'></img></Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content='Upload Video' placement='bottom'>
                                <button style={{ padding: '0 12px' }} className={cx('action-btn')}>
                                    <UploadIcon />
                                </button >
                            </Tippy>
                            <button style={{ padding: '0 12px' }} className={cx('action-btn')}>
                                < MessageIcon />
                            </button >
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<AiOutlinePlus />} > Upload</Button>
                            <Button primary> Log in</Button>

                        </>

                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src='https://i1.sndcdn.com/artworks-NEqICFr9sNcJ2YMC-pnDcZw-t500x500.jpg' className={cx('user-avatar')} alt='nguyentien' />
                        ) : (
                            <button className={cx('more-btn')}>
                                <IoMdMore />
                            </button>
                        )}

                    </Menu>
                </div>
            </div>

        </header>
    );
}

export default Header
