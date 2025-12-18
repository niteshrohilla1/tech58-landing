export default function Card({ title, children, wide }) {
    return (
        <section className={`card ${wide ? 'wide' : ''}`}>
            <header>{title}</header>
            {children}
        </section>
    );
}