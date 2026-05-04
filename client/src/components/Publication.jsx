import "./Publication.css";
import { SiOrcid, SiGooglescholar, SiResearchgate, SiIeee } from "react-icons/si";


const publications = [
    {
        authors: "A Sayeed, & M. R. Pamel",
        year: "2025",
        month: "November",
        title:
            "AI at the Crossroads of Energy and Ethics: The PAT Framework for Risk Assessment in Petroleum Operations",
        conference:
            "2025 IEEE 7th International Conference on Computing, Communication and Automation (ICCCA)",
        pages: "pp. 1-6",
        publisher: "IEEE",
        doi: "https://doi.org/10.1109/ICCCA66364.2025.11325323",
    },

    {
        authors: "A Sayeed, & M. R. Pamel,S. A. Emran and J. A. Salvi",
        year: "2026",
        month: "May",
        title:
            "Feature Ranking Using Pearson and Spearman Correlation forROP Optimization in Autonomous Drilling Systems",
        conference:
            "026 International Conference on Machine Learning and Autonomous Systems (ICMLAS), Bangkok, Thailand, 2026",
        publisher: "IEEE",
        doi: "https://doi.org/10.1109/ICMLAS67792.2026.11483791",
    },
];

const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getMonthIndex = (month) => {
    const index = monthOrder.indexOf(month);
    return index === -1 ? -1 : index;
};

export default function Publication() {
    const sortedPublications = [...publications].sort((a, b) => {
        const yearDiff = parseInt(b.year, 10) - parseInt(a.year, 10);
        if (yearDiff !== 0) {
            return yearDiff;
        }
        return getMonthIndex(b.month) - getMonthIndex(a.month);
    });

    return (
        <div className="pub-list">
            {sortedPublications.map((p, idx) => (
                <div className="pub-card" key={idx}>
                        <p className="pub-cite">
                            <span className="pub-authors">{p.authors}</span> ({p.year}, {p.month}).{" "}
                            <span className="pub-title">{p.title}</span>.{" "}
                            In <em>{p.conference}</em>
                            {p.pages ? ` (${p.pages})` : ""}. {p.publisher}.
                            <br />
                            DOI:{" "}
                            <a className="pub-doi" href={p.doi} target="_blank" rel="noopener noreferrer">
                                {p.doi}
                            </a>
                        </p>
                    </div>
            ))}
            <div className="research-links">
                <h4>Research Profiles</h4>

                <div className="research-icons">
                    <a href="https://orcid.org/0009-0003-0376-7936" target="_blank" rel="noreferrer">
                        <SiOrcid />
                        <span>ORCID</span>
                    </a>

                    <a href="https://scholar.google.com/citations?hl=en&user=IAdLf8sAAAAJ&view_op=list_works&authuser=2&gmla=AF9nlQuR6KTDjf4ZO4NM9xAyyKDu0Lp2lyG1hVaI7nlE_Y02tgOsxPMTamUQXx5ecLoWXrvysNSTmKnIzWt30o9Y" target="_blank" rel="noreferrer">
                        <SiGooglescholar />
                        <span>Google Scholar</span>
                    </a>

                    <a href="https://www.researchgate.net/profile/Mahinur-Pamel?ev=hdr_xprf" target="_blank" rel="noreferrer">
                        <SiResearchgate />
                        <span>ResearchGate</span>
                    </a>
                    <a href="https://ieeexplore.ieee.org/author/970610031537327" target="_blank" rel="noreferrer">
                        <SiIeee />
                        <span>IEEE Xplore</span>
                    </a>
                </div>

            </div>
        </div>
    );
}