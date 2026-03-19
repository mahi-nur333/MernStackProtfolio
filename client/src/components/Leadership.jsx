import "./Leadership.css";
const leadershipData = [
    {
        Title: "Organising Secretary",
        Organization: "Metropolitan University Research Society",
        OrganizationUrl: "#1",
        Duration: "July 2025 - Present",
        Points: [
            "Coordinating research events and fostering collaboration and Seeking opportunities to learn, explore, and apply knowledge in research initiatives.",
        ]
    },

    {
        Title: "Senior Rover Mate & President of Unit Council",
        Organization: "Metropolitan University Rover Scout Unit",
        OrganizationUrl: "#3",
        Duration: "Apr 2025 - Mar 2026",
        Points: ["Elected as Senior Rover Mate and President of the Metropolitan University Rover Scout Unit Council,leading members and overseeing scouting programs, leadership workshops, and community service initiatives, while representing the unit at institutional and national events, ensuring effective coordination,promoting teamwork, and driving meaningful contributions."
        ],
    },

    {
        Title: "Student Secretary",
        Organization: "CSE Society, Metropolitan University",
        OrganizationUrl: "#5",
        Duration: "Jan 2025 – Jan 2026",
        Points: [
          "Managed activities, promoted collaboration, and executed events.",
          "Supported students’ academic and professional growth.",
      "Maintained communication with students and university administration.",
        ],
    },

    {
        Title: "President",
        Organization: "Knocking Collaborator’s Youth Foundation",
        OrganizationUrl: "#6",
        Duration: "May 2024 – May 2025",
        Points: [
      "Led and oversaw youth foundation activities focused on public speaking, debate, leadership, and charity.",
      "Coordinated programs with team members and partners.",
    ],
    },

    {
        Title: "Founder",
        Organization: "Call for Blood",
        OrganizationUrl: "#7",
        Duration: "Jun 2021 – Present",
        Points: [
      "Founded an online blood donation platform in Sylhet via Messenger-based network.",
      "Connected donors and recipients and maintained an updated donor database.",
    ], 
    },

    {
     Title: "Assistant Publication Coordinator",
        Organization: "NDFBD Sylhet Zone",
        OrganizationUrl: "#10",
        Duration: "Feb 2020 – Mar 2021",
        Points: [
      "Gained valuable management and communication skills through coordinating publication activities.",
      "Participated and enjoyed several debate events, enhancing public speaking and critical thinking.",
    ],
  },


    {
        Title: "Member",
        Organization: "Bangladesh Scouts",
        OrganizationUrl: "#8",
        Duration: "Mar 2010 – Present",
        Points: [
      "Progressed through scouting levels: Cub Scout, Scout, and Rover Scout.",
      "Developed teamwork, leadership training, and problem-solving through activities and events.",
    ],
    },




];

export default function Leadership() {
  return (
    <div className="lead">
      {leadershipData.map((item, idx) => (
        <div className="lead-item" key={idx}>
          <div className="lead-dot" />
          <div className="lead-card">
            <div className="lead-top">
              <div className="lead-left">
                <h3 className="lead-role">{item.Title}</h3>

                {item.OrganizationUrl ? (
                  <a
                    className="lead-org"
                    href={item.OrganizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.Organization}
                  </a>
                ) : (
                  <p className="lead-org">{item.Organization}</p>
                )}
              </div>

              <div className="lead-right">
                <p className="lead-location">{item.location}</p>
                <p className="lead-time">{item.Duration}</p>
              </div>
            </div>

            <ul className="lead-list">
              {item.Points.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}