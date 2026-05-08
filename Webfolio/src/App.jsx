import React, { useEffect, useState } from 'react'
import Webfolio from './assets/components/Navigation.component.jsx'
import Projects from './assets/components/Projects.component.jsx'
import './App.css'

const routes = ['/', '/about', '/projects', '/contact'];

const getCurrentPath = () => {
  const path = window.location.pathname;

  return routes.includes(path) ? path : '/';
};

const HomePage = () => (
  <main className="page-shell page-shell--home">
    <section className="route-hero">
      <p className="page-kicker">Web portfolio</p>
      <h1>Fernando Herrera</h1>
      <p>
        A simple React portfolio for sharing the sites, apps, and experiments I am building.
      </p>
      <div className="home-preview" aria-label="Portfolio homepage preview">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  </main>
);

const AboutPage = () => (
  <main className="page-shell">
    <section className="route-hero route-hero--split">
      <div>
        <p className="page-kicker">About</p>
        <h1>Developer focused on useful, polished web experiences.</h1>
        <p>
          I enjoy turning ideas into clean interfaces with React, JavaScript, HTML, and CSS.
          This page can grow into a deeper story about my background, skills, and goals.
        </p>
      </div>
      <div className="about-panel">
        <h2>Current focus</h2>
        <ul>
          <li>Responsive frontend layouts</li>
          <li>Reusable React components</li>
          <li>Portfolio-ready project pages</li>
        </ul>
      </div>
    </section>
  </main>
);

const ContactPage = () => (
  <main className="page-shell">
    <section className="route-hero route-hero--contact">
      <p className="page-kicker">Contact</p>
      <h1>Let’s build something for the web.</h1>
      <p>
        Use this page for your email, phone, LinkedIn, GitHub, YouTube, or a short contact form.
      </p>
      <div className="contact-list">
        <a href="mailto:hello@example.com">hello@example.com</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  </main>
);

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getCurrentPath());

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (event, path) => {
    event.preventDefault();

    if (path === currentPath) {
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderRoute = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage />;
      case '/projects':
        return <Projects />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Webfolio currentPath={currentPath} onNavigate={handleNavigate} />
      {renderRoute()}
    </>
  )
}

export default App;
