import "./Experience.css";
const experiences = [
    {
        role: "Assistant",
        company: "Centre for Strategy and Policy Innovation (CSPI)",
        companyUrl: "https://www.linkedin.com/company/mucspi/posts/?feedView=all",
        location: "Sylhet, Bangladesh",
        duration: "Jan 2025 - Present",
        description: ["Contribute to research and policy analysis work.",
            "Support stakeholder engagement and strategic discussions.",
            "Assist with reports and initiatives that drive data-informed impact.",
        ],
    },


    {
        role: "Co-founder & Photographer",
        company: "Chitrachar",
        companyUrl:"https://web.facebook.com/profile.php?id=61557351724647",
        location: "Sylhet, Bangladesh",
        duration: "Mar 2024 — Present",
        description: [
            "Co-founded a photography initiative and work as a part-time photographer.",
            "Handle photography assignments and coordinate creative work when needed.",
        ],
    },
    {
        role: "Social Media Manager",
        company: "Wesitely LTD",
        location: "Sylhet, Bangladesh",
        duration: "Mar 2023 — Oct 2023",
        description: [
            "Managed social media platforms and content publishing.",
            "Monitored engagement to improve online presence.",
        ],
    },
];
export default function Experience() {
    return (
        <div className="exp">
            {experiences.map((item, idx) => (
                <div className="exp-item" key={idx}>
                    <div className="exp-dot" />
                    <div className="exp-card">
                        <div className="exp-top">
                            <div className="exp-left">
                                <h3 className="exp-role">{item.role}</h3>
                               {item.companyUrl ? (
                                    <a className="exp-company" href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                                        {item.company}
                                    </a>
                                ) : (
                                    <p className="exp-company">{item.company}</p>
                                )}
                            </div>

                            <div className="exp-right">
                                <p className="exp-location">{item.location}</p>
                                <p className="exp-time">{item.duration}</p>
                            </div>
                        </div>
                        <ul className="exp-list">
                            {item.description.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );



}