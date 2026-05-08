import './navigation.styles.scss';

const navigationLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
];

const Webfolio = ({ currentPath, onNavigate }) => {
    return (
        <nav className="site-nav">
            <ul>
                {navigationLinks.map((link) => (
                    <li key={link.path}>
                        <a
                            className={currentPath === link.path ? 'active' : ''}
                            href={link.path}
                            onClick={(event) => onNavigate(event, link.path)}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Webfolio;
