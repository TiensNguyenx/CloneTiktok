
import styles from './SideBar.module.scss'
import classNames from "classnames/bind";
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons';
import SuggestedAccount from '../SuggestedAccount';


const cx = classNames.bind(styles)
function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title='For you' to='/' icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem title='Following' to='/following' icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
        <MenuItem title='LIVE' to='/live' icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccount label="Suggested Account" />
      <SuggestedAccount label="Following" />
    </aside>
  );
}

export default SideBar
