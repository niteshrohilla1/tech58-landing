export default function TermAndConditionModal({ onClose }) {
    return (
        <div className="policy-overlay" onClick={onClose}>
            <div className="policy-modal" onClick={(e) => e.stopPropagation()}>
                <button className="policy-close" onClick={onClose}>✕</button>
                <h1 style={{ textAlign: "center" }}>Terms & Condition</h1>
                <div className="policy-content">
                    <p>No terms and conditions available.</p>
                </div>
            </div>
        </div >
    );
}
