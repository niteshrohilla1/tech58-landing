export default function RightPanel() {
    return (
        <aside className="right">
            <div className="panel">
                <h4>My Products</h4>
                <ul>
                    <li>HR58 <span>15</span></li>
                    <li>Logi58 <span>15</span></li>
                    <li>Books58 <span>15</span></li>
                    <li>C&M58 <span>15</span></li>
                </ul>
            </div>
            <div className="panel">
                <h4>Attendance</h4>
                <p>Last 5 days</p>
                <button className="out">Punch Out</button>
            </div>
        </aside>
    );
}