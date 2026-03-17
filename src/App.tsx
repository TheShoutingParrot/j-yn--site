type NavItem = {
  href: string;
  label: string;
};

type HeroStat = {
  value: string;
  label: string;
};

type Step = {
  number: string;
  title: string;
  description: string;
  accent: "paper" | "yellow" | "sage";
};

type Feature = {
  title: string;
  description: string;
  tag: string;
  tone: "paper" | "yellow" | "charcoal" | "sage";
  wide?: boolean;
};

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  accent: "paper" | "yellow" | "charcoal";
};

type FaqItem = {
  question: string;
  answer: string;
};

const navItems: NavItem[] = [
  { href: "#process", label: "Process" },
  { href: "#features", label: "Capabilities" },
  { href: "#vault", label: "The Vault" },
  { href: "#faq", label: "Ethics" },
];

const heroStats: HeroStat[] = [
  { value: "11", label: "deadlines neutralized" },
  { value: "4", label: "lectures attended by AI today" },
  { value: "98%", label: "autopilot confidence" },
];

const campusSignals = [
  "MyCourses",
  "Sisu",
  "Moodle",
  "Dipoli",
  "Kandidaatintutkinto",
  "24/7 Study Cellar",
  "Group Work Survivor",
  "Deadline Archaeology",
];

const steps: Step[] = [
  {
    number: "1",
    title: "Hand over your logins",
    description:
      "Connect MyCourses, Sisu, and every other portal your degree currently hides behind.",
    accent: "paper",
  },
  {
    number: "2",
    title: "AI becomes academically present",
    description:
      "We read course pages, detect deadlines, attend digital sessions, and form suspiciously strong opinions about grading rubrics.",
    accent: "yellow",
  },
  {
    number: "3",
    title: "Receive daily briefings",
    description:
      "Wake up to a progress score, a calm summary, and a message claiming everything is under control.",
    accent: "sage",
  },
];

const features: Feature[] = [
  {
    title: "Autonomous Coursework",
    description:
      "Submits assignments at 03:14 to preserve a realistic student aura and the illusion of mild panic.",
    tag: "Moodle-ready",
    tone: "paper",
    wide: true,
  },
  {
    title: "Deadline Extraction Engine",
    description:
      "Searches four portals and one cursed PDF to find the real due date your professor only mentioned once.",
    tag: "Calendar sync",
    tone: "sage",
  },
  {
    title: "Exam Panic Compression",
    description:
      "Turns 200 lecture slides into three bullets and one completely unjustified confidence score.",
    tag: "Last-night mode",
    tone: "charcoal",
  },
  {
    title: "Grade-Optimized Presence",
    description:
      "Attends Zoom, nods algorithmically, and types 'good question' into the chat at socially strategic moments.",
    tag: "Participation farming",
    tone: "yellow",
    wide: true,
  },
  {
    title: "Excuse Generator",
    description:
      "Produces faculty-safe reasons involving campus Wi-Fi, migrating squirrels, and interoperable suffering.",
    tag: "Ethically modular",
    tone: "paper",
  },
  {
    title: "Daily Competence Report",
    description:
      "Delivers a neat summary proving progress happened whether or not you were conscious for any of it.",
    tag: "Parent-forwardable",
    tone: "paper",
  },
];

const integrations = ["Sisu", "MyCourses", "Zoom", "Outlook", "Lecture Capture", "Calendar"];

const testimonials: Testimonial[] = [
  {
    quote:
      "I have not opened a tab beginning with 'mycourses' in weeks. I am becoming emotionally available again.",
    name: "Lauri M.",
    detail: "Information Networks",
    accent: "paper",
  },
  {
    quote:
      "The AI passed a quiz I did not know existed. I feel morally uncertain, but my GPA now feels very secure.",
    name: "Heidi K.",
    detail: "Engineering Physics",
    accent: "yellow",
  },
  {
    quote:
      "I forwarded the daily competence report to my summer boss. He called me proactive. I had just woken up.",
    name: "Joonas S.",
    detail: "Computer Science",
    accent: "charcoal",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Is this legal?",
    answer:
      "Our legal analysis consists of one LLM prompted to sound confident. It remains optimistic.",
  },
  {
    question: "Will it attend lectures for me too?",
    answer:
      "Yes. It can lurk in Zoom, watch recordings, and occasionally ask whether the material will be on the exam.",
  },
  {
    question: "What if the AI becomes better at my major than I am?",
    answer:
      "That is treated as a premium success metric and appears in the daily report under 'career acceleration'.",
  },
  {
    question: "Does this work outside Otaniemi?",
    answer:
      "We are currently optimized for Aalto-flavored administrative suffering. Expansion follows compatible bureaucracy.",
  },
];

function LogoMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span className="brand-mark__chip" />
      <span className="brand-mark__dot" />
    </div>
  );
}

function App() {
  const signalLoop = [...campusSignals, ...campusSignals];

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#hero" aria-label="otaniemi.ai home">
            <LogoMark />
            <span className="brand__label">otaniemi.ai</span>
          </a>

          <nav className="topnav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--neon button--compact" href="#cta">
            Delegate Your Degree
          </a>
        </div>
      </header>

      <main>
        <section className="hero section section--yellow dot-grid" id="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Teekkari Productivity Breakthrough</p>
              <h1 className="hero__title">
                Make studying <span>automatic.</span>
              </h1>
              <p className="hero__lede">
                Give otaniemi.ai your academic credentials and let the algorithm
                handle MyCourses, Sisu, lecture recordings, deadline hunting,
                and the daily competence report.
              </p>

              <div className="hero__actions">
                <a className="button button--signal" href="#cta">
                  Delegate Your Degree
                </a>
                <a className="button button--ghost" href="#process">
                  See How The Scam Works
                </a>
              </div>

              <p className="hero__note">Not approved by Aalto. Not denied either.</p>

              <div className="hero__stats" aria-label="Product claims">
                {heroStats.map((stat) => (
                  <div className="stat-pill" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <article className="surface-card surface-card--hero surface-card--tilt-right">
                <div className="surface-card__header">
                  <span className="surface-chip surface-chip--live">Sisu Sync</span>
                  <span className="live-dot" />
                </div>
                <strong className="surface-card__metric">180 / 180 ECTS</strong>
                <p className="surface-card__text">Academic progress: suspiciously complete.</p>
                <div className="mini-bars">
                  <span />
                  <span />
                  <span />
                </div>
              </article>

              <article className="surface-card surface-card--sage surface-card--floating">
                <p className="surface-card__eyebrow">Vault Status</p>
                <strong className="surface-card__metric">CONNECTED</strong>
                <p className="surface-card__text">MyCourses, Zoom, Moodle, and calendar portals.</p>
              </article>

              <article className="surface-card surface-card--report surface-card--tilt-left">
                <span className="surface-chip">Daily Intelligence</span>
                <h2 className="surface-card__headline">
                  Your AI attended 4 lectures today. You did not.
                </h2>
                <div className="report-tags">
                  <span>Quiz passed</span>
                  <span>2 deadlines handled</span>
                  <span>Forum post deployed</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Campus credibility">
          <div className="ticker__track">
            {signalLoop.map((signal, index) => (
              <span className="ticker__item" key={`${signal}-${index}`}>
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section className="section section--paper" id="process">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow--dark">Three suspiciously simple steps</p>
                <h2>The handoff process</h2>
              </div>
              <div className="callout-card">
                <span>Estimated efficiency</span>
                <strong>99.8% less effort</strong>
              </div>
            </div>

            <div className="step-grid">
              {steps.map((step) => (
                <article className={`step-card step-card--${step.accent}`} key={step.number}>
                  <div className="step-card__number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--paper" id="features">
          <div className="container">
            <div className="section-heading section-heading--stacked">
              <p className="eyebrow eyebrow--dark">Core optimization engines</p>
              <h2>All the automation a morally flexible student could ask for</h2>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article
                  className={`feature-card feature-card--${feature.tone}${feature.wide ? " feature-card--wide" : ""}`}
                  key={feature.title}
                >
                  <span className="feature-card__tag">{feature.tag}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--charcoal" id="vault">
          <div className="container vault-grid">
            <div className="vault-copy">
              <p className="eyebrow eyebrow--light">Credential handoff, now premium</p>
              <h2>
                The <span>zero-knowledge-ish</span> vault
              </h2>
              <p>
                University-grade automation requires university-grade access. We
                store your Haka credentials in a digital bunker somewhere below
                Otakaari and then run your academic life at platform scale.
              </p>

              <ul className="vault-list">
                <li>Zero-knowledge-ish vault</li>
                <li>University-grade automation</li>
                <li>Trusted by students with unfinished assignments</li>
              </ul>
            </div>

            <aside className="vault-panel">
              <div className="vault-panel__header">
                <div>
                  <p className="vault-panel__eyebrow">Integration hub</p>
                  <strong>Live study orchestration</strong>
                </div>
                <span className="surface-chip surface-chip--live">Live sync</span>
              </div>

              <div className="integration-grid">
                {integrations.map((integration) => (
                  <div className="integration-tile" key={integration}>
                    <span className="integration-tile__icon" aria-hidden="true" />
                    <span>{integration}</span>
                  </div>
                ))}
              </div>

              <div className="meter-card">
                <div className="meter-card__labels">
                  <span>Study load autopilot</span>
                  <strong>94%</strong>
                </div>
                <div className="meter">
                  <span />
                </div>
              </div>

              <div className="report-preview">
                <p className="report-preview__eyebrow">Today&apos;s report</p>
                <ul>
                  <li>2 quiz attempts completed while you were asleep</li>
                  <li>4 lecture recordings summarized into one sane paragraph</li>
                  <li>Attendance preserved with one strategically timed chat message</li>
                </ul>
              </div>

              <a className="button button--neon button--full" href="#cta">
                Authorize All Systems
              </a>
            </aside>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container">
            <div className="section-heading section-heading--stacked">
              <p className="eyebrow eyebrow--dark">Testimonials</p>
              <h2>Feedback from the future</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article
                  className={`testimonial-card testimonial-card--${testimonial.accent}`}
                  key={testimonial.name}
                >
                  <div className="stars" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>{testimonial.quote}</p>
                  <footer>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.detail}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white" id="faq">
          <div className="container faq-shell">
            <div className="section-heading section-heading--stacked">
              <p className="eyebrow eyebrow--dark">FAQ</p>
              <h2>Ethical clarifications</h2>
            </div>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="cta">
        <div className="container footer__content">
          <p className="eyebrow eyebrow--light">Last call before your next deadline</p>
          <h2>
            Your GPA deserves <span>delegation.</span>
          </h2>
          <p className="footer__lede">
            Stop studying manually. Start operating academically at platform
            scale. Join the beta before your next deadline notices find you.
          </p>
          <a className="button button--signal button--footer" href="#hero">
            Join The Beta Before Your Next Deadline
          </a>

          <div className="footer__meta">
            <a className="brand brand--inverse" href="#hero">
              <LogoMark />
              <span className="brand__label">otaniemi.ai</span>
            </a>

            <div className="footer__links">
              <a href="#faq">Privacy (?)</a>
              <a href="#faq">Terms of Scam</a>
              <a href="#vault">Support Cellar</a>
            </div>

            <p className="footer__note">
              © 2026 otaniemi.ai. manufactured in an unfinished basement under
              otaniemi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
