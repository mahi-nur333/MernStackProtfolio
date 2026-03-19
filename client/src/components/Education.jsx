import "./Education.css";

const education = [
    {
        org: "Metropolitan University, Sylhet",
        location: "Sylhet, Bangladesh",
        time: "Appeared",
        lines: [
            "B.Sc., Computer Science and Engineering",
            "4th year 3rd semester",
        ],
    },
    {  
        org: "Sylhet Government College",
        location: "Sylhet, Bangladesh",
        time: "Jan 2021",
        lines: [
            "Higher Secondary School Certificate (HSC), Science",
            "GPA: 5.00 out of 5.00",
            "Group Subject Include: Physics, Chemistry, Biology, Higher Math.",
        ],
    },
    {
        org: "Balaganj Govt Dawrokanath High School",
        location: "Sylhet, Bangladesh",
        time: "May 2018",
        lines: [
            "Secondary School Certificate (SSC), Science",
            "GPA: 4.83 out of 5.00",
            "Group Subject Include: Physics, Chemistry, Biology, Higher Math.",
        ],
    },
];

export default function Education() {
    return (
        <div className="education">
            {education.map((item, idx) => (
                <div className="education-item" key={idx}>
                    <div className="education-dot" />
                    <div className="education-card">
                        <div className="education-top">
                            <div className="education-left">
                                <h3 className="education-org">{item.org}</h3>
                                {item.lines?.length ? (
                                    <div className="education-lines">
                                        {item.lines.map((line, i) => (
                                            <p className="education-line" key={i}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                            <div className="education-right">
                                <p className="education-location">{item.location}</p>
                                <p className="education-time">{item.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}