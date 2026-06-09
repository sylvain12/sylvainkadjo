import Link from "next/link";

export default function PostsHeaderComponent() {
  return (
    <section className="posts__header">
      <div className="posts__header-bg" aria-hidden="true" />
      <div className="posts__header-text">
        <p className="posts__header-kicker">Technical blog</p>
        <h1>Essays on software craft, systems, and product engineering.</h1>
        <p className="posts__header-subtitle">
          Field notes from building modern web applications, data-informed
          tools, resilient systems, and polished product experiences.
        </p>

        <div className="posts__header-actions" aria-label="Primary actions">
          <Link href="#latest-writing" className="posts__header-action primary">
            Browse articles
          </Link>
          <Link
            href="/"
            className="posts__header-action secondary"
          >
            View portfolio
          </Link>
        </div>

        <div className="posts__header-proof" aria-label="Experience highlights">
          <span>Engineering</span>
          <span>Product systems</span>
          <span>Data & AI</span>
        </div>
      </div>
      <div className="posts__header-visual" aria-hidden="true">
        <div className="posts__header-card">
          <div className="posts__header-card-top">
            <span />
            <span />
            <span />
          </div>
          <p className="posts__header-card-label">Editorial focus</p>
          <h2>Practical writing for engineers who care about product quality.</h2>
          <div className="posts__header-card-grid">
            <div>
              <strong>Web</strong>
              <span>Apps</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>Data</span>
            </div>
            <div>
              <strong>Edge</strong>
              <span>Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
