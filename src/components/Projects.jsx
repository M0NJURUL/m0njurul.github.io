import styles from './Projects.module.css';
import controls from '../modules/printControls.module.css';

function Projects({ items }) {
  const flip = (hostEl, btnEl) => {
    const isOn = hostEl.getAttribute('data-print') === 'on';
    const next = isOn ? 'off' : 'on';
    hostEl.setAttribute('data-print', next);
    if (next === 'off') {
      hostEl.classList.add(controls.excluded);   // ✅ use controls.excluded
      if (btnEl) btnEl.innerText = '🙈';
    } else {
      hostEl.classList.remove(controls.excluded);
      if (btnEl) btnEl.innerText = '👁';
    }
  };

  return (
    <section className={`${styles.projects} projects`}>  {/* ✅ add plain 'projects' */}
      <h2 className={styles.heading}>Projects</h2>

      <ul className={styles.list}>
        {items.map((proj) => (
          <li
            key={proj.id}
            className={`${styles.item} ${controls.section}`}
            data-print="on"
            style={{ position: 'relative' }}
          >
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title={`Exclude ${proj.title} from print`}
              aria-label={`Exclude ${proj.title} from print`}
            >
              👁
            </button>

            {/* Row 1: Project Title */}
            <div className={styles.top}>
              <h3 className={styles.title}>{proj.title}</h3>
            </div>

            {/* Row 2: Description */}
            {proj.description ? (
              <p className={styles.description}>{proj.description}</p>
            ) : null}

            {/* Row 3: Tech + Link (same line) */}
            <div className={styles.meta}>
              {proj.tech && proj.tech.length > 0 && (
                <span className={styles.tech}>
                  <strong>Tech:</strong> {proj.tech.join(', ')}
                </span>
              )}
              {proj.link ? (
                <>
                  <span className={styles.dot}>•</span>
                  <a
                    href={proj.link}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* ✅ Web shows label, print shows URL (CSS handles visibility) */}
                    <span className="linkLabel">View project</span>
                    <span className="printUrl">{proj.link}</span>
                  </a>
                </>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
