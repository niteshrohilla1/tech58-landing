import logo from '../../assets/DashBoard/t-logo.jpg';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo-wrapper">
                <img src={logo} alt="tech58 logo" className='logo' />
                <span>Tech58</span>
            </div>
            <nav>
                <button className="nav-btn active">▦</button>
                <button className="nav-btn">👤</button>
                <button className="nav-btn">⚙</button>
            </nav>
        </aside>
    );
}