import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <h1>Sidebar page</h1>
        </div>
    );
}

export default SideBar;
