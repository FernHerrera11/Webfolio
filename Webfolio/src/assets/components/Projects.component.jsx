import './projects.styles.scss';

const projects = [
  {
    title: 'Portfolio Redesign',
    type: 'Personal Site',
    description: 'A fast, responsive portfolio refresh focused on project storytelling and clean motion.',
    accent: '#22c55e',
    preview: 'portfolio',
  },
  {
    title: 'Shop Dashboard',
    type: 'React App',
    description: 'A compact admin interface for tracking orders, inventory, and revenue at a glance.',
    accent: '#f97316',
    preview: 'dashboard',
  },
  {
    title: 'Travel Landing Page',
    type: 'Marketing Site',
    description: 'A visual landing page concept for booking trips with curated destination sections.',
    accent: '#06b6d4',
    preview: 'travel',
  },
  {
    title: 'Task Flow',
    type: 'Productivity Tool',
    description: 'A simple task board experiment with focused lists, priorities, and progress states.',
    accent: '#8b5cf6',
    preview: 'tasks',
  },
  {
    title: 'Recipe Finder',
    type: 'API Project',
    description: 'A recipe search experience that filters meals by ingredients, prep time, and mood.',
    accent: '#ef4444',
    preview: 'recipe',
  },
  {
    title: 'Studio Booking',
    type: 'Full Stack App',
    description: 'A booking flow for reserving creative studio time with calendar and profile views.',
    accent: '#eab308',
    preview: 'booking',
  },
];

const PreviewWindow = ({ preview, accent, title }) => (
  <div className={`project-preview project-preview--${preview}`} aria-label={`${title} preview`}>
    <div className="preview-browser">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="preview-canvas" style={{ '--project-accent': accent }}>
      <div className="preview-hero"></div>
      <div className="preview-lines">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="preview-blocks">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <p className="section-kicker">Selected work</p>
        <h2>Projects I am building</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <PreviewWindow
              preview={project.preview}
              accent={project.accent}
              title={project.title}
            />
            <div className="project-card__content">
              <div>
                <p className="project-card__type">{project.type}</p>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <a href="/contact" aria-label={`Ask Fernando about ${project.title}`}>
                Discuss project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
