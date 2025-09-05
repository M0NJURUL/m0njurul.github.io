import styles from './Education.module.css';
import controls from '../modules/printControls.module.css';

function Education({ items }) {
  // Flip data-print + excluded class on this list item, swap icon 👁 ↔ 🙈
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
    <section className={styles.education}>
      <h2 className={styles.heading}>Education</h2>

      <ul className={styles.list}>
        {items.map((edu) => (
          <li
            key={edu.id}
            className={`${styles.item} ${controls.section}`}
            data-print="on"
            style={{ position: 'relative' }}  // for the absolute toggle button
          >
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title="Exclude this education entry from print"
              aria-label="Exclude this education entry from print"
            >
              👁
            </button>

            {/* ORIGINAL STRUCTURE — unchanged fields */}
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.institute}>{edu.institute}</p>
            <p className={styles.details}>
              {edu.subject}
              {edu.scoreType && edu.score ? <> | <strong>{edu.scoreType}: {edu.score}</strong></> : null}
              {edu.year ? <> | {edu.year}</> : null}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
