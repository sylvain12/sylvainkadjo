import HomeBlogPreview from "./components/home-blog-preview";
import Link from "next/link";

export const runtime = "edge";

const expertiseItems = [
  {
    title: "Product-focused web applications",
    description:
      "Polished product interfaces, dashboards, workflows, and web platforms designed for clarity and repeated use.",
    capabilities: ["Next.js interfaces", "Design systems", "Typed workflows"],
    marker: "APP",
  },
  {
    title: "Backend/API systems",
    description:
      "Reliable services, server actions, integrations, and data models that keep products predictable as they scale.",
    capabilities: ["APIs", "Auth flows", "PostgreSQL"],
    marker: "API",
  },
  {
    title: "Data, AI & automation",
    description:
      "Useful intelligent tools, ML experiments, automation pipelines, and data workflows for real decisions.",
    capabilities: ["ML/NLP", "Automation", "Pipelines"],
    marker: "AI",
  },
  {
    title: "Cloud, DevOps & deployment",
    description:
      "Deployable systems with edge-ready infrastructure, CI/CD thinking, and practical operational discipline.",
    capabilities: ["Cloudflare", "Docker", "CI/CD"],
    marker: "OPS",
  },
  {
    title: "Technical leadership & delivery",
    description:
      "Product-minded engineering judgment across discovery, architecture, execution, and continuous improvement.",
    capabilities: ["Scoping", "Architecture", "Delivery"],
    marker: "LEAD",
  },
];

const featuredProjects = [
  {
    title: "Resultus",
    problem: "Application flows often hide failures until they become messy runtime paths.",
    solution:
      "A typed result-handling utility that makes success and error states explicit across product code.",
    impact: "Cleaner control flow for TypeScript teams.",
    visual: "typed-result",
    featured: true,
    tags: ["TypeScript", "Package", "DX"],
    href: "https://github.com/sylvain12/resultjs",
  },
  {
    title: "Portfolio & technical publishing system",
    problem: "A personal brand needs more than static pages; it needs a product-like publishing system.",
    solution:
      "A Next.js portfolio with Supabase content, rich text editing, Cloudflare Pages, and editorial blog routes.",
    impact: "Personal operating system for work, writing, and projects.",
    visual: "publishing",
    tags: ["Next.js", "Supabase", "Edge"],
    href: "/blog",
  },
  {
    title: "Product engineering systems",
    problem: "Internal tools can become slow, inconsistent, and hard to evolve.",
    solution:
      "Reusable foundations for dashboards, workflows, integrations, and data-backed product interfaces.",
    impact: "Faster delivery with a cleaner engineering base.",
    visual: "systems",
    tags: ["React", "APIs", "Cloud"],
    href: "/projects",
  },
  {
    title: "Fraud Detection ML project",
    problem: "Risk signals are difficult to interpret when they are scattered across raw transactional data.",
    description:
      "Machine learning exploration for identifying suspicious patterns and turning model output into useful product signals.",
    solution:
      "A practical data workflow that frames prediction, review, and explainability as one product system.",
    impact: "Sharper fraud review patterns.",
    visual: "ml",
    tags: ["ML", "Python", "Data"],
    href: "/projects",
  },
  {
    title: "Edumatch school discovery platform",
    problem: "Families need better ways to compare schools and understand fit beyond a simple list.",
    solution:
      "A discovery experience for matching education needs, search behavior, and structured school information.",
    impact: "More useful school discovery decisions.",
    visual: "matching",
    tags: ["Product", "Search", "UX"],
    href: "/projects",
  },
];

const processSteps = [
  {
    title: "Understand",
    description:
      "Clarify users, constraints, risks, and the smallest valuable product path.",
  },
  {
    title: "Design",
    description:
      "Shape flows, interfaces, data models, and technical decisions before code hardens.",
  },
  {
    title: "Build",
    description:
      "Implement clean UI, APIs, data workflows, and product behavior with tight feedback loops.",
  },
  {
    title: "Ship",
    description:
      "Deploy, verify, document, and make the product usable in the real environment.",
  },
  {
    title: "Improve",
    description:
      "Use feedback, metrics, and operational signals to refine what matters.",
  },
];

const stackGroups = [
  {
    title: "Frontend",
    tools: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    tools: ["Python", "FastAPI", "Django", "PostgreSQL"],
  },
  {
    title: "Data / AI",
    tools: ["ML", "NLP", "Automation", "Data pipelines"],
  },
  {
    title: "Cloud / DevOps",
    tools: ["Docker", "CI/CD", "DigitalOcean", "Cloudflare"],
  },
  {
    title: "Tools",
    tools: ["GitHub", "Supabase", "Salesforce", "Product analytics"],
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__hero-bg" aria-hidden="true" />
        <div className="home__orb home__orb--one" aria-hidden="true" />
        <div className="home__orb home__orb--two" aria-hidden="true" />
        <div className="home__hero-content">
          <p className="home__eyebrow">
            Software Engineer - Product Systems - Data & AI
          </p>
          <h1>
            I design and build intelligent software products with clean
            interfaces and scalable systems.
          </h1>
          <p className="home__hero-text">
            I help turn ideas into reliable digital products - from product
            strategy and UI engineering to backend systems, automation, data,
            and deployment.
          </p>
          <div className="home__hero-actions" aria-label="Primary actions">
            <Link href="/projects" className="home__button home__button--primary">
              View selected work
            </Link>
            <Link href="/blog" className="home__button home__button--secondary">
              Read my notes
            </Link>
            <Link
              href="mailto:hello@sylvainkadjo.com"
              className="home__button home__button--ghost"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="home__command-center" aria-label="Engineering command center preview">
          <div className="home__command-shell">
            <div className="home__command-header">
              <span>Command Center</span>
              <strong>Live product system</strong>
            </div>
            <div className="home__command-grid">
              <div className="home__command-panel home__command-panel--wide">
                <p>System health</p>
                <strong>98.7%</strong>
                <div className="home__signal-bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="home__command-panel">
                <p>Deploy</p>
                <strong>Edge</strong>
              </div>
              <div className="home__command-panel">
                <p>Data flow</p>
                <strong>AI ready</strong>
              </div>
            </div>
            <div className="home__node-graph" aria-hidden="true">
              <span className="home__node home__node--a" />
              <span className="home__node home__node--b" />
              <span className="home__node home__node--c" />
              <span className="home__node home__node--d" />
            </div>
          </div>
          <div className="home__floating-terminal">
            <span>api/product.status</span>
            <code>{"{ signal: 'stable', velocity: 'high' }"}</code>
          </div>
          <div className="home__floating-stack">
            <span>UI</span>
            <span>API</span>
            <span>AI</span>
            <span>Cloud</span>
          </div>
        </div>

        <div className="home__trust-badges" aria-label="Engineering highlights">
          {[
            "Full-stack engineering",
            "Backend/API systems",
            "Data & AI automation",
            "Cloud deployment",
            "Product thinking",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="home__section home__signature">
        <div className="home__section-heading">
          <p className="home__section-kicker">Signature</p>
          <h2>Engineering with product taste and execution speed.</h2>
          <p>
            I combine software engineering, UI craft, automation, and data/AI
            thinking to build products that are useful, maintainable, and ready
            to evolve.
          </p>
        </div>
        <div className="home__capability-map" aria-label="Capability map">
          <div className="home__capability-core">
            <span>SK</span>
            <strong>Product engineering</strong>
          </div>
          {["Interface", "Systems", "Data", "Automation", "Cloud"].map((item) => (
            <div className="home__capability-node" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="home__section">
        <div className="home__section-heading">
          <p className="home__section-kicker">Expertise</p>
          <h2>Focused capabilities for building useful product systems.</h2>
        </div>
        <div className="home__expertise-grid">
          {expertiseItems.map((item) => (
            <article className="home__expertise-card" key={item.title}>
              <span className="home__expertise-icon">{item.marker}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home__section home__projects">
        <div className="home__section-heading">
          <p className="home__section-kicker">Selected work</p>
          <h2>Case-study style projects from the product lab.</h2>
        </div>
        <div className="home__project-grid">
          {featuredProjects.map((project) => (
            <article
              className={`home__project-card${
                project.featured ? " home__project-card--featured" : ""
              }`}
              key={project.title}
            >
              <div className={`home__project-visual home__project-visual--${project.visual}`} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="home__project-copy">
                <h3>{project.title}</h3>
                <p>
                  <strong>Problem:</strong> {project.problem}
                </p>
                <p>
                  <strong>Solution:</strong> {project.solution}
                </p>
                <p className="home__project-impact">{project.impact}</p>
              </div>
              <div className="home__project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link href={project.href} className="home__project-link">
                Explore project
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home__section home__stack">
        <div className="home__section-heading">
          <p className="home__section-kicker">Stack</p>
          <h2>Connected modules for modern product engineering.</h2>
        </div>
        <div className="home__stack-grid">
          {stackGroups.map((group) => (
            <article className="home__stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <HomeBlogPreview />

      <section className="home__final-cta">
        <p className="home__section-kicker">Let&apos;s build</p>
        <h2>Have a product, workflow, or system worth making sharper?</h2>
        <p>
          Let&apos;s turn it into something clean, reliable, and useful.
        </p>
        <div className="home__hero-actions" aria-label="Contact actions">
          <Link
            href="mailto:hello@sylvainkadjo.com"
            className="home__button home__button--primary"
          >
            Start a conversation
          </Link>
          <Link href="/projects" className="home__button home__button--secondary">
            View projects
          </Link>
        </div>
      </section>
    </main>
  );
}
