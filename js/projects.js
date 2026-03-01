// =============================================
//  PROJECTS DATA — edit this array to add,
//  remove, or update your projects.
//
//  Each project supports:
//    title       (required)  string
//    description (required)  string
//    github      (optional)  URL string  — shows a GitHub button
//    image       (optional)  path string — e.g. "assets/project1.jpg"
//    youtube     (optional)  YouTube video ID string — e.g. "dQw4w9WgXcQ"
//                            (youtube takes priority over image if both are set)
//    link        (optional)  URL string  — shows a "Visit Website" button
// =============================================

const projects = [
/*    {
        title: "Project One",
        description: "A brief description of what this project does, the problem it solves, and any notable technical details. Keep it clear and concise.",
        github: "https://github.com/Red3tar/project-one",
        image: "assets/project1.jpg",
    },

    {
        title: "Project Two",
        description: "Another project description. Highlight the tech stack, your role, and what makes it interesting. You can write a few sentences here.",
        github: "https://github.com/Red3tar/project-two",
        youtube: "dQw4w9WgXcQ",   // ← replace with your YouTube video ID
    },
*/    
    {
        title: "VSiD - Canyon Research Labs",
        description: "AI powered very small image detection system to detect thumbs up and thumbs down hand gestures via a live camera feed. The model will be deployed to an ESP32 microcontroller and is overseen by Canyon Research Labs. For more information, visit the VSiD website linked above.",
        link: "https://aigcu.github.io/VSiD-website/",
        image: "assets/VSiD.png",
    },
];


// =============================================
//  RENDERING — no need to edit below this line
// =============================================

function getYouTubeEmbed(videoId) {
    return `<div class="project-video-wrap">
                <iframe
                    src="https://www.youtube.com/embed/${videoId}"
                    title="YouTube video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>`;
}

function getImage(src, title) {
    return `<div class="project-img-wrap">
                <img src="${src}" alt="${title} screenshot" class="project-img" loading="lazy">
            </div>`;
}

function renderProjects() {
    const grid = document.getElementById("projectsGrid");

    grid.innerHTML = projects.map((p, i) => {
        const media = p.youtube
            ? getYouTubeEmbed(p.youtube)
            : p.image
                ? getImage(p.image, p.title)
                : `<div class="project-img-wrap project-no-media">
                       <span>No preview available</span>
                   </div>`;

        const githubBtn = p.github
            ? `<a class="project-github-btn" href="${p.github}" target="_blank" rel="noopener noreferrer">
                   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                       <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                   </svg>
                   View on GitHub
               </a>`
            : "";

        const websiteBtn = p.link
            ? `<a class="project-website-btn" href="${p.link}" target="_blank" rel="noopener noreferrer">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                       <circle cx="12" cy="12" r="10"/>
                       <line x1="2" y1="12" x2="22" y2="12"/>
                       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                   </svg>
                   Visit Website
               </a>`
            : "";

        return `
        <article class="project-card" style="animation-delay: ${i * 0.1}s">
            ${media}
            <div class="project-body">
                <div class="project-title-row">
                    <h2 class="project-title">${p.title}</h2>
                    <div class="project-btn-group">${githubBtn}${websiteBtn}</div>
                </div>
                <div class="project-divider"></div>
                <p class="project-desc">${p.description}</p>
            </div>
        </article>`;
    }).join("");
}

renderProjects();
