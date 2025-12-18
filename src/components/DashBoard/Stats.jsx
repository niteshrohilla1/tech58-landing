export default function Stats() {
    const items = [
        ['2', 'Location'],
        ['8', 'Users'],
        ['5', 'Asset'],
        ['8', 'Employee'],
        ['8', 'Consultant'],
    ];
    return (
        <div className="stats">
            {items.map(([v, l]) => (
                <div key={l} className="stat">
                    <strong>{v}</strong>
                    <span>{l}</span>
                </div>
            ))}
        </div>
    );
}