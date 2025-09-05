import styles from './Experience.module.css';
import controls from '../modules/printControls.module.css';

function Experience({ items }) {
  const flip = (hostEl, btnEl) => {
    const isOn = hostEl.getAttribute('data-print') === 'on';
    const next = isOn ? 'off' : 'on';
    hostEl.setAttribute('data-print', next);
    if (next === 'off') {
      hostEl.classList.add(print.excluded);
      if (btnEl) btnEl.innerText = '🙈';
    } else {
      hostEl.classList.remove(print.excluded);
      if (btnEl) btnEl.innerText = '👁';
    }
  };

  return (
    <section className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>

      <ul className={styles.list}>
        {items.map((job) => (
          <li
            key={job.id}
            className={`${styles.item} ${controls.section}`}
            data-print="on"
            style={{ position: 'relative' }} // anchor the toggle button
          >
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title="Exclude this job from print"
              aria-label="Exclude this job from print"
            >
              👁
            </button>

            {/* ORIGINAL STRUCTURE — unchanged */}
            <div className={styles.top}>
              <h3 className={styles.role}>{job.role}</h3>
              {/* Use the exact period field you had before */}
              <span className={styles.period}>{job.period}</span>
            </div>

            <p className={styles.company}>{job.company}</p>

            {Array.isArray(job.bullets) && job.bullets.length > 0 && (
              <ul className={styles.bullets}>
                {job.bullets.map((bullet, index) => (
                  <li key={index} className={styles.bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
