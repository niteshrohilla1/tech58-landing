import './DashBoard.css'
import Sidebar from '../../DashBoard/SideBar';
import Topbar from '../../DashBoard/TopBar';
import Filters from '../../DashBoard/Filters';
import Stats from '../../DashBoard/Stats';
import DashboardGrid from '../../DashBoard/DashBoardGrid';
import RightPanel from '../../DashBoard/RIghtPannel';
export default function DashBoard() {
    return (
        <div className="app">
            <Sidebar />
            <main className="main">
                <Topbar />
                <Filters />
                <Stats />
                <DashboardGrid />
            </main>
            <RightPanel />
        </div>
    );
}