import Link from "next/link";

export default function PostsHeaderComponent() {
  return (
    <section className="posts__header">
      <div className="posts__header-bg" aria-hidden="true" />
      <div className="posts__header-text">
        <p className="posts__header-kicker">Software engineer portfolio</p>
        <h1>Clean interfaces, resilient systems, thoughtful products.</h1>
        <p className="posts__header-subtitle">
          I am Sylvain Kadjo, a software engineer crafting fast, polished web
          experiences with modern frontend architecture and product-minded
          execution.
        </p>

        <div className="posts__header-actions" aria-label="Primary actions">
          <Link href="#latest-writing" className="posts__header-action primary">
            Read the blog
          </Link>
          <Link
            href="mailto:hello@sylvainkadjo.com"
            className="posts__header-action secondary"
          >
            Contact me
          </Link>
        </div>

        <div className="posts__header-proof" aria-label="Experience highlights">
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Cloudflare Edge</span>
        </div>
      </div>
      <div className="posts__header-visual" aria-hidden="true">
        <div className="posts__header-card">
          <div className="posts__header-card-top">
            <span />
            <span />
            <span />
          </div>
          <p className="posts__header-card-label">Current focus</p>
          <h2>Building elegant, fast interfaces that stay reliable at the edge.</h2>
          <div className="posts__header-card-grid">
            <div>
              <strong>14</strong>
              <span>Next.js</span>
            </div>
            <div>
              <strong>18</strong>
              <span>React</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
