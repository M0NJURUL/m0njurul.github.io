import styles from './References.module.css';
import controls from '../modules/printControls.module.css';

function References({ items }) {
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
    <section className={styles.references}>
      <h2 className={styles.heading}>References</h2>

      <ul className={styles.list}>
        {items.map((ref) => (
          <li
            key={ref.id}
            className={`${styles.item} ${controls.section}`}
            data-print="on"
            style={{ position: 'relative' }}
          >
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title={`Exclude ${ref.name} from print`}
              aria-label={`Exclude ${ref.name} from print`}
            >
              👁
            </button>

            <p className={styles.name}>{ref.name}</p>
            <p className={styles.position}>{ref.position}</p>
            <p className={styles.meta}>{ref.organization}</p>
            <p className={styles.meta}>{ref.organizationAddress}</p>
            <p className={styles.meta}>Contact: {ref.contact}</p>
            <p className={styles.meta}>
              Email:{' '}
              <a
                href={`mailto:${ref.email}`}
                className={styles.link}
              >
                {ref.email}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default References;
