/*----- PROJECT -----*/

const projects = [
    {
        id: 0,
        num: "001",
        title: "AI SaaS Platform",
        client: "Independent Build",
        year: 2026,
        role: "Full Stack AI Developer",
        tags: ["TypeScript", "AI", "SaaS"],

        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=75&auto=format",

        brief:
            "A production-oriented SaaS platform combining a modern web application with AI-assisted workflows, structured data, authentication, APIs and a maintainable backend.",

        approach: [
            "Built around TypeScript, React, Node.js and PostgreSQL with clear separation between the interface, API layer and data model.",

            "Integrated AI through structured prompts, controlled context and reusable service boundaries rather than coupling model calls directly to the interface."
        ],

        outcome:
            "A maintainable full-stack foundation designed for iterative product development, AI features and production deployment.",

        related: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop&q=75&auto=format"
        ],

        github:
            "https://github.com/yourusername/ai-saas-platform"
    },

    {
        id: 1,
        num: "002",
        title: "AI Agent Workflow",
        client: "Independent Build",
        year: 2026,
        role: "AI / Full Stack Developer",
        tags: ["AI Agents", "LLM", "Automation"],

        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&q=75&auto=format",

        brief:
            "An AI agent workflow designed to connect models with tools, structured outputs and application logic for repeatable multi-step tasks.",

        approach: [
            "Designed agent flows around explicit tools, predictable inputs and outputs, context boundaries and failure handling.",

            "Focused on prompt engineering, token efficiency and observability so model usage remains useful, controlled and maintainable."
        ],

        outcome:
            "A reusable agent architecture for turning natural-language requests into controlled application actions.",

        related: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=600&fit=crop&q=75&auto=format"
        ],

        github:
            "https://github.com/yourusername/ai-agent-workflow"
    },

    {
        id: 2,
        num: "003",
        title: "Developer Productivity Tool",
        client: "Independent Build",
        year: 2026,
        role: "Full Stack AI Developer",
        tags: ["TypeScript", "AI", "DevTools"],

        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop&q=75&auto=format",

        brief:
            "A developer-focused application built around automation, AI-assisted workflows and practical tooling for reducing repetitive engineering work.",

        approach: [
            "Combined TypeScript, APIs and developer tooling with AI-assisted workflows for code exploration, generation, documentation and repetitive tasks.",

            "Kept human review in the loop and prioritised predictable outputs, concise context and efficient token usage."
        ],

        outcome:
            "A practical engineering tool focused on reducing repetitive work while keeping developers in control of the final result.",

        related: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop&q=75&auto=format"
        ],

        github:
            "https://github.com/yourusername/developer-productivity-tool"
    },

    {
        id: 3,
        num: "004",
        title: "Production Web Platform",
        client: "Independent Build",
        year: 2025,
        role: "Backend-Focused Full Stack Developer",
        tags: ["React", "Node.js", "PostgreSQL"],

        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop&q=75&auto=format",

        brief:
            "A full-stack web platform focused on clean APIs, reliable data handling, responsive interfaces and production-minded engineering.",

        approach: [
            "Designed REST APIs, database models and application flows around maintainability, validation, security and predictable behaviour.",

            "Used Docker, PostgreSQL and a component-based React frontend to keep local development and deployment workflows consistent."
        ],

        outcome:
            "A production-ready web architecture balancing user experience, backend reliability and straightforward maintenance.",

        related: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop&q=75&auto=format",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop&q=75&auto=format"
        ],

        github:
            "https://github.com/yourusername/production-web-platform"
    }
];


/* =========================================================
   PROJECT MOSAIC
   ========================================================= */

const mosaic = document.getElementById("mosaic");

const tiles = projects.map((project, index) => {
    const tile = document.createElement("a");

    tile.className = "tile";
    tile.href = `#project-${project.id}`;
    tile.setAttribute("role", "listitem");
    tile.dataset.id = String(index);

    tile.innerHTML = `
        <img
            src="${project.image}"
            alt="${project.title}"
            loading="${index === 0 ? "eager" : "lazy"}"
            decoding="async"
        >

        <div class="tile__label">
            <span>[${project.num}]</span>
            <span>${project.year}</span>
        </div>
    `;

    const image = tile.querySelector("img");

    const markLoaded = () => {
        tile.dataset.loaded = "true";
    };

    if (image.complete) {
        markLoaded();
    } else {
        image.addEventListener("load", markLoaded, { once: true });
        image.addEventListener("error", markLoaded, { once: true });
    }

    tile.addEventListener("click", event => {
        event.preventDefault();
        openProject(index);
    });

    mosaic.appendChild(tile);

    return tile;
});


/* =========================================================
   PROJECT REVEAL
   ========================================================= */

const revealTiles = () => {
    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        tiles.forEach(tile => {
            tile.dataset.visible = "true";
        });

        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const index = tiles.indexOf(entry.target);

                entry.target.style.setProperty(
                    "--reveal-delay",
                    `${Math.min(index * 35, 180)}ms`
                );

                entry.target.dataset.visible = "true";

                observer.unobserve(entry.target);
            });
        },
        {
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.05
        }
    );

    tiles.forEach(tile => observer.observe(tile));
};

revealTiles();


/*----- PROJECT DETAIL MODAL -----*/

const detail = document.getElementById("detail");

const detailImg = document.getElementById("detail-img");
const detailTitle = document.getElementById("detail-title");
const detailCrumb = document.getElementById("detail-crumb");

const detailClient = document.getElementById("detail-client");
const detailYear = document.getElementById("detail-year");
const detailRole = document.getElementById("detail-role");

const detailTags = document.getElementById("detail-tags");

const detailBrief = document.getElementById("detail-brief");

const detailAppr1 =
    document.getElementById("detail-approach-1");

const detailAppr2 =
    document.getElementById("detail-approach-2");

const detailOutcome =
    document.getElementById("detail-outcome");

const detailRelated =
    document.getElementById("detail-related");

const detailMetaL =
    document.getElementById("detail-meta-l");

const detailMetaR =
    document.getElementById("detail-meta-r");

const detailGithub =
    document.getElementById("detail-github");

const detailClose =
    document.getElementById("detail-close");

let activeTile = null;


function fillDetail(project) {
    detailImg.src = project.image;
    detailImg.alt = project.title;

    detailTitle.textContent = project.title;

    detailCrumb.textContent =
        `№${project.num} — ${project.title}`;

    detailClient.textContent = project.client;
    detailYear.textContent = project.year;
    detailRole.textContent = project.role;

    detailTags.innerHTML = project.tags
        .map(tag => `<span>${tag}</span>`)
        .join("");

    detailBrief.textContent = project.brief;

    detailAppr1.textContent =
        project.approach[0];

    detailAppr2.textContent =
        project.approach[1];

    detailOutcome.textContent =
        project.outcome;

    detailRelated.innerHTML =
        project.related
            .map(
                src =>
                    `<img src="${src}" alt="" loading="lazy">`
            )
            .join("");

    detailMetaL.textContent =
        `№${project.num} — ${project.title.toUpperCase()}`;

    detailMetaR.textContent =
        `FIG. ${String(project.id + 1).padStart(2, "0")}`;

    detailGithub.href = project.github;
}


/* =========================================================
   MODAL OPEN / CLOSE
   ========================================================= */

function applyOpenState() {
    detail.dataset.open = "true";
    detail.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


function applyCloseState() {
    detail.dataset.open = "false";
    detail.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


function openProject(index) {
    const project = projects[index];
    const tile = tiles[index];

    const tileImg = tile.querySelector("img");

    activeTile = tile;

    fillDetail(project);

    if (document.startViewTransition) {
        tileImg.style.viewTransitionName =
            "hero-image";

        detailImg.style.viewTransitionName =
            "hero-image";

        const transition =
            document.startViewTransition(() => {
                applyOpenState();

                tileImg.style.viewTransitionName = "";
            });

        transition.finished.finally(() => {
            detailImg.style.viewTransitionName = "";
        });
    } else {
        applyOpenState();
    }

    detail.scrollTop = 0;
}


function closeProject() {
    if (!activeTile) {
        applyCloseState();
        return;
    }

    const tileImg =
        activeTile.querySelector("img");

    if (document.startViewTransition) {
        detailImg.style.viewTransitionName =
            "hero-image";

        tileImg.style.viewTransitionName =
            "hero-image";

        const transition =
            document.startViewTransition(() => {
                applyCloseState();

                detailImg.style.viewTransitionName =
                    "";
            });

        transition.finished.finally(() => {
            tileImg.style.viewTransitionName =
                "";

            activeTile = null;
        });
    } else {
        applyCloseState();
        activeTile = null;
    }
}


detailClose.addEventListener(
    "click",
    closeProject
);


document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        detail.dataset.open === "true"
    ) {
        closeProject();
    }
});


detail.addEventListener("click", event => {
    if (event.target === detail) {
        closeProject();
    }
});


/* ------CONTACT FORM------ */

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submit = form.querySelector(".form__submit");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    status.dataset.state = "";
    status.textContent = "";

    submit.disabled = true;
    submit.textContent = "Sending…";

    const formData = new FormData(form);

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        if (result.success) {
            status.dataset.state = "ok";
            status.textContent = "✓ Message sent successfully.";
            form.reset();
        } else {
            throw new Error(
                result.message || "Unable to send message."
            );
        }

    } catch (error) {

        status.dataset.state = "error";

        status.textContent =
            "✕ Unable to send your message. Please try again.";

        console.error(error);

    } finally {

        submit.disabled = false;
        submit.textContent = "Send Message";

    }
});


form.addEventListener(
    "submit",
    async (event) => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        status.dataset.state = "";
        status.textContent = "";

        submit.disabled = true;
        submit.textContent = "Sending…";

        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (!result.success) {
                throw new Error(
                    result.message || "Unable to send message."
                );
            }

            status.dataset.state = "ok";

            status.textContent =
                "✓ Message sent successfully.";

            form.reset();

        } catch (error) {
            status.dataset.state = "error";

            status.textContent =
                "✕ Unable to send your message. Please try again.";

            console.error(error);

        } finally {
            submit.disabled = false;
            submit.textContent = "Send Message";
        }
    }
);
 
/*----- SERVICES ACCORDION -----*/

document
    .querySelectorAll(".services__item")
    .forEach(item => {

        const trigger =
            item.querySelector(
                ".services__trigger"
            );

        const arrow =
            item.querySelector(
                ".services__arrow"
            );

        trigger.addEventListener(
            "click",
            () => {

                const willOpen =
                    item.dataset.open !== "true";

                document
                    .querySelectorAll(
                        ".services__item"
                    )
                    .forEach(other => {

                        const otherTrigger =
                            other.querySelector(
                                ".services__trigger"
                            );

                        const otherArrow =
                            other.querySelector(
                                ".services__arrow"
                            );

                        const isCurrent =
                            other === item;

                        other.dataset.open =
                            isCurrent
                                ? String(willOpen)
                                : "false";

                        otherTrigger.setAttribute(
                            "aria-expanded",
                            isCurrent
                                ? String(willOpen)
                                : "false"
                        );

                        otherArrow.textContent =
                            isCurrent && willOpen
                                ? "−"
                                : "+";
                    });

                arrow.textContent =
                    willOpen ? "−" : "+";
            }
        );
    });


/* =========================================================
   INDIA CLOCK
   ========================================================= */

const clock1 =
    document.getElementById("local-time");

const clock2 =
    document.getElementById("local-time-2");

/* =========================================================
   THEME TOGGLE
   ========================================================= */

const themeToggle = document.getElementById("theme-toggle");

function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    if (themeToggle) {
        themeToggle.classList.toggle("change", isDark);

        themeToggle.setAttribute(
            "aria-pressed",
            String(isDark)
        );
    }

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );
}

const savedTheme = localStorage.getItem("theme");

setTheme(savedTheme === "dark");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark =
            !document.body.classList.contains("dark-mode");

        setTheme(isDark);
    });

    themeToggle.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();

            const isDark =
                !document.body.classList.contains("dark-mode");

            setTheme(isDark);
        }
    });
}
