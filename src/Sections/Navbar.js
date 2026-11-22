import logo from "../assets/branding/vp-wisconsin-red.svg";

function PageIcon({ camera = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {camera ? (
        <>
          <path d="M4 7h4l2-2h4l2 2h4v12H4z" strokeLinejoin="round" />
          <circle cx="12" cy="12.5" r="3.2" />
        </>
      ) : (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 10h16M10 10v10" />
        </>
      )}
    </svg>
  );
}

export default function Navbar({ currentScreen, onNavigate }) {
  return (
    <nav className="site-navbar" aria-label="Main navigation">
      <div className="brand-group">
        <button
          className="site-logo-button"
          onClick={() => onNavigate("home")}
          aria-label="Go to home page"
        >
          <img src={logo} alt="VP" />
        </button>
      </div>
      <div
        className="page-switch"
        role="group"
        aria-label="Choose page"
        data-page={currentScreen}
      >
        <span className="page-switch-thumb" aria-hidden="true" />
        <button
          type="button"
          onClick={() => onNavigate("home")}
          aria-pressed={currentScreen !== "photo-vault"}
          aria-current={currentScreen === "home" ? "page" : undefined}
        >
          <PageIcon />
          <span>Main</span>
        </button>
        <button
          type="button"
          onClick={() => onNavigate("photo-vault")}
          aria-pressed={currentScreen === "photo-vault"}
          aria-current={currentScreen === "photo-vault" ? "page" : undefined}
        >
          <PageIcon camera />
          <span>Photo Vault</span>
        </button>
      </div>
      <div className="nav-links">
        {currentScreen !== "photo-vault" ? (
          <>
            <a href="#about">About</a>
            <a
              href="#/projects"
              aria-current={currentScreen === "projects" ? "page" : undefined}
            >
              Projects
            </a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <span className="nav-page-label">Photography archive</span>
        )}
      </div>
    </nav>
  );
}
