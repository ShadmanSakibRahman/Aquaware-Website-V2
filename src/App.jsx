import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import {
  about,
  contactPage,
  home,
  knowledge,
  knowledgeArticles,
  privacy,
  site,
  terms,
} from './content'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/knowledge' element={<KnowledgePage />} />
          <Route path='/knowledge/:id' element={<KnowledgeArticlePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/privacy-policies' element={<LegalPage data={privacy} />} />
          <Route path='/terms-and-conditions' element={<LegalPage data={terms} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeDark, setThemeDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.dataset.theme = themeDark ? 'dark' : 'light'
  }, [themeDark])

  return (
    <div
      className='site-root'
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2
        const y = (event.clientY / window.innerHeight - 0.5) * 2
        document.documentElement.style.setProperty('--mouse-x', `${x}`)
        document.documentElement.style.setProperty('--mouse-y', `${y}`)
      }}
    >
      <WaterBackground />
      <header className='top-nav glass-panel'>
        <Link to='/' className='brand'>
          <img src={site.brand.logo} alt='Aqua Ware Logo' className='brand-logo' />
        </Link>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className='nav-actions'>
          <button className='icon-btn' onClick={() => setThemeDark((s) => !s)} aria-label='Toggle theme'>
            {themeDark ? 'Light' : 'Dark'}
          </button>
          <button className='icon-btn'>EN</button>
          <button className='menu-btn' onClick={() => setMenuOpen((s) => !s)} aria-label='Open menu'>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main key={location.pathname} className='page-wrap'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

function WaterBackground() {
  return (
    <div className='water-bg' aria-hidden='true'>
      <div className='orb orb-a' />
      <div className='orb orb-b' />
      <div className='orb orb-c' />
      <div className='ripple-grid' />
    </div>
  )
}

function HomePage() {
  const [activeService, setActiveService] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <section className='hero section'>
        <div className='hero-copy reveal'>
          <p className='eyebrow'>{home.hero.badge}</p>
          <h1>{home.hero.title}</h1>
          <p>{home.hero.subtitle}</p>
          <div className='audience-list'>
            {home.hero.audiences.map((audience) => (
              <span key={audience}>{audience}</span>
            ))}
          </div>
          <a href='#contact-form' className='cta-btn'>
            {home.hero.cta}
          </a>
        </div>
        <div className='hero-media reveal'>
          <img src={home.hero.image} alt='Modern Water Treatment Facility' />
        </div>
      </section>

      <section className='section split'>
        <div className='reveal'>
          <h2>{home.pressure.titleA}</h2>
          <h2>{home.pressure.titleB}</h2>
          <p>{home.pressure.description}</p>
          <Link to='/knowledge' className='ghost-btn'>
            {home.pressure.cta}
          </Link>
        </div>
        <div className='pressure-panel reveal glass-panel'>
          <img src={home.pressure.image} alt='Water management professionals in meeting' />
          <ul>
            {home.pressure.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className='section' id='expert'>
        <div className='center-title reveal'>
          <h2>{home.functionalities.title}</h2>
          <p>{home.functionalities.subtitle}</p>
        </div>
        <div className='feature-grid'>
          <div className='feature-list reveal'>
            {home.functionalities.items.map((item, index) => (
              <button
                key={item.title}
                className={`feature-item ${index === activeService ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <h3>{item.title}</h3>
                {index === activeService && (
                  <div className='feature-detail'>
                    <p>{item.description}</p>
                    <div className='chip-row'>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className='feature-media glass-panel reveal'>
            <img src={home.functionalities.items[activeService].image} alt={home.functionalities.items[activeService].title} />
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='center-title reveal'>
          <h2>{home.support.title}</h2>
          <p>{home.support.subtitle}</p>
        </div>
        <div className='support-grid'>
          {home.support.cards.map((card) => (
            <article key={card.title} className='support-card glass-panel reveal'>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <blockquote className='quote-panel reveal'>
          <img src={site.brand.icon} alt='AquaWare logo' />
          <p>{home.support.quote}</p>
        </blockquote>
      </section>

      <section className='section split'>
        <div className='reveal'>
          <h2>{home.funnel.title}</h2>
          <p>{home.funnel.description}</p>
          <a href='#contact-form' className='ghost-btn'>
            {home.funnel.cta}
          </a>
        </div>
        <div className='funnel-panel glass-panel reveal'>
          <div className='step-tabs'>
            {home.funnel.steps.map((step, i) => (
              <button
                key={step}
                className={activeStep === i ? 'active' : ''}
                onClick={() => setActiveStep(i)}
              >
                {step}
              </button>
            ))}
          </div>
          <div className='band-stack'>
            {home.funnel.bands.map((band, i) => (
              <button key={band.title} onClick={() => setActiveStep(i)} className={`band ${activeStep === i ? 'active' : ''}`}>
                <strong>{band.title}</strong>
                <span>{band.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='center-title reveal'>
          <h2>{home.value.title}</h2>
          <p>{home.value.subtitle}</p>
        </div>
        <div className='newsletter glass-panel reveal'>
          <h3>{home.value.newsletterTitle}</h3>
          <p>{home.value.newsletterInfo}</p>
          <form className='newsletter-form' onSubmit={(e) => e.preventDefault()}>
            <input type='email' placeholder='you@example.com' aria-label='Email' />
            <button>{home.value.newsletterCta}</button>
          </form>
          <small>{home.value.newsletterPrivacy}</small>
        </div>
        <div className='support-grid'>
          {home.value.cards.map((card) => (
            <article key={card.title} className='support-card glass-panel reveal'>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <section className='section text-page'>
        <h1>{about.title}</h1>
        <p className='lead'>{about.intro}</p>
        <div className='about-grid'>
          <article className='glass-panel reveal'>
            <h3>{about.whatTitle}</h3>
            <p>{about.whatBody}</p>
          </article>
          <article className='glass-panel reveal'>
            <h3>{about.goalTitle}</h3>
            <p>{about.goalBody}</p>
          </article>
        </div>
      </section>

      <section className='section'>
        <div className='center-title reveal'>
          <h2>{about.powerTitle}</h2>
          <p>{about.powerBody}</p>
        </div>
        <div className='support-grid'>
          {about.pillars.map((pillar) => (
            <article key={pillar.title} className='support-card glass-panel reveal'>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='section cta-strip glass-panel reveal'>
        <h2>{about.ctaTitle}</h2>
        <p>{about.ctaBody}</p>
        <a href='#contact-form' className='cta-btn'>
          {about.cta}
        </a>
      </section>

      <ContactSection />
    </>
  )
}

function KnowledgePage() {
  return (
    <section className='section text-page'>
      <h1>{knowledge.title}</h1>
      <p className='lead'>{knowledge.subtitle}</p>
      <div className='knowledge-grid'>
        {knowledge.list.map((item) => (
          <Link to={`/knowledge/${item.id}`} key={item.id} className='knowledge-card glass-panel reveal'>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.quote}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function KnowledgeArticlePage() {
  const { id } = useParams()
  const article = knowledgeArticles[id]

  if (!article) {
    return (
      <section className='section text-page'>
        <h1>Article not found</h1>
      </section>
    )
  }

  return (
    <section className='section text-page'>
      <h1>{article.title}</h1>
      <div className='article-hero glass-panel reveal'>
        <img src={article.image} alt={article.title} />
        <button className='ghost-btn'>Share Article</button>
      </div>
      <div className='article-content'>
        {article.sections.map((section) => (
          <article key={section.heading} className='legal-card glass-panel reveal'>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
      <div className='related reveal'>
        <h3>Related Content</h3>
        <div className='related-links'>
          {article.related.map((relatedId) => (
            <Link key={relatedId} to={`/knowledge/${relatedId}`}>
              {knowledgeArticles[relatedId].title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className='section text-page' id='contact-form'>
      <h2>{contactPage.title}</h2>
      <p className='lead'>{contactPage.subtitle}</p>
      <div className='contact-grid'>
        <article className='glass-panel reveal'>
          <h3>Email</h3>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <h3>Phone</h3>
          <a href={`tel:${site.contact.phone}`}>{site.contact.phoneDisplay}</a>
          <h3>Office address</h3>
          {site.contact.locations.map((loc) => (
            <p key={loc}>{loc}</p>
          ))}
        </article>
        <article className='glass-panel reveal'>
          <h3>{contactPage.formTitle}</h3>
          <p>{contactPage.formSubtitle}</p>
          <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
            <label>
              {contactPage.fields[0]}
              <input type='text' placeholder='Enter your full name' required />
            </label>
            <label>
              {contactPage.fields[1]}
              <input type='email' placeholder='Enter your email address' required />
            </label>
            <label>
              {contactPage.fields[2]}
              <textarea placeholder='Tell us about your water management needs...' rows='5' required />
            </label>
            <button className='cta-btn'>{contactPage.cta}</button>
          </form>
        </article>
      </div>
    </section>
  )
}

function ContactPage() {
  return <ContactSection />
}

function LegalPage({ data }) {
  return (
    <section className='section text-page legal'>
      <h1>{data.title}</h1>
      <p className='lead'>{data.updated}</p>
      <div className='article-content'>
        {data.sections.map((section) => (
          <article key={section.title} className='legal-card glass-panel reveal'>
            <h2>{section.title}</h2>
            {section.text ? section.text.split('\n').map((line) => <p key={line}>{line}</p>) : null}
            {section.list ? (
              <ul>
                {section.list.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-grid'>
        <div>
          <img src={site.brand.logo} alt='Aqua Ware' className='footer-logo' />
          <p>{site.brand.tagline}</p>
        </div>
        <div>
          <h4>Functionalities</h4>
          <ul>
            <li>
              <a href='/#expert'>Central database</a>
            </li>
            <li>
              <a href='/#expert'>Interactive, user-friendly dashboards</a>
            </li>
            <li>
              <a href='/#expert'>Company priority list</a>
            </li>
            <li>
              <a href='/#expert'>Company reports</a>
            </li>
            <li>
              <a href='/#expert'>Heatmaps</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/knowledge'>Knowledge</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact Info</h4>
          <ul>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone}`}>{site.contact.phone}</a>
            </li>
            {site.contact.locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© 2025 AquaWare. All rights reserved.</p>
        <div>
          <Link to='/privacy-policies'>Privacy Policy</Link>
          <Link to='/terms-and-conditions'>Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default App
