export default function Filters() {
    return (
        <div className="filters">
            <div>
                <span className="label">Location</span>
                <button className="pill active">Gurgaon</button>
                <button className="pill">Manesar</button>
                <button className="pill">Sector 65</button>
            </div>
            <div>
                <span className="label">Type</span>
                <button className="pill active">Office</button>
                <button className="pill">Warehouse</button>
                <button className="pill">Factory</button>
            </div>
        </div>
    );
}