import "./Award.css";

const awards = [
    {
        title: "President’s Scout Award",
        imageSrc: "/presidents-scout-award.png",
        imageAlt: "Bangladesh Scouts President’s Scout Award emblem",
        org: "Bangladesh Scouts",
        orgUrl: "",
        location: "Bangladesh",
        time: "Oct 2019",
        points: [
            "Achieved the highest recognition in Bangladesh Scouts, awarded by the President of Bangladesh.",
            "Successfully completed rigorous scouting requirements including Membership Badge, Standard Badge, Progress Badge, Service Badge, and 16+ Skill Badges.",
            "Passed multiple levels of written, oral, and swimming examinations conducted at Upazila, Zila, Regional, and National levels.",
            "Recognized for outstanding leadership, discipline, and dedication in scouting activities.",
        ],
    },
    {
        title: "Study In India (SII) Scholarship",
        org: "Government of India",
        orgUrl: "",
        location: "India",
        time: "Oct 2022",
        points: [
            "Awarded the prestigious Study in India (SII) Scholarship funded by the Government of India for the Bachelor of Technology (B.Tech) in Computer Engineering program at Pandit Deendayal Energy University, Gujarat, India.",
            "The scholarship covered full tuition, hostel, and food fees for the first three academic years. (Did not attend)",
        ],
    },
];

export default function Award() {
    return (
        <div className="award">
            {awards.map((item, idx) => (
                <div className="award-item" key={idx}>
                    <div className="award-dot" />
                    <div className="award-card">
                        <div className="award-top">
                            <div className="award-left">
                                <div className="award-heading">
                                    {item.imageSrc ? (
                                        <img
                                            className="award-logo"
                                            src={item.imageSrc}
                                            alt={item.imageAlt || ""}
                                            loading="lazy"
                                        />
                                    ) : null}
                                    <h3 className="award-title">{item.title}</h3>
                                </div>
                                {item.orgUrl ? (
                                    <a
                                        className="award-org"
                                        href={item.orgUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.org}
                                    </a>
                                ) : (
                                    <p className="award-org">{item.org}</p>
                                )}
                            </div>

                            <div className="award-right">
                                <p className="award-location">{item.location}</p>
                                <p className="award-time">{item.time}</p>
                            </div>
                        </div>

                        {item.points?.length ? (
                            <ul className="award-list">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}