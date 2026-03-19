import "./Section.css";
export default function Section({ id, title, children }) {
    return (
        <section className="section" id={id}>
            <div className="section-inner">
                <h2>{title}</h2>
                {children}
            </div>
        </section>
    );
}