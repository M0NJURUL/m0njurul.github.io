import styles from './Skills.module.css';
import controls from '../modules/printControls.module.css';

function normalize(items) {
  if (Array.isArray(items)) {
    return items.map((g, i) => ({
      id: g.id ?? i,
      category: g.category ?? g.title ?? `Group ${i + 1}`,
      skills: Array.isArray(g.skills) ? g.skills : [],
    }));
  }
  if (items && typeof items === 'object') {
    return Object.entries(items).map(([category, list], i) => ({
      id: i,
      category,
      skills: Array.isArray(list) ? list : [],
    }));
  }
  return [];
}

function Skills({ items }) {
  const groups = normalize(items);

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
    <section className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.groups}>
        {groups.map((group) => (
          <div
            key={group.id}
            className={`${styles.group} ${controls.section}`}
            data-print="on"
            style={{ position: 'relative' }}
          >
            {/* group toggle */}
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title={`Exclude ${group.category} from print`}
              aria-label={`Exclude ${group.category} from print`}
            >
              👁
            </button>

            <h3 className={styles.category}>{group.category}</h3>

            <ul className={styles.list}>
              {group.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className={`${styles.skill} ${controls.section}`}
                  data-print="on"
                  /* IMPORTANT: do not shrink column width; keep button out of flow */
                  style={{
                    position: 'relative',
                    paddingRight: 0,                      // no width loss
                    breakInside: 'avoid',                 // avoid split across columns
                    WebkitColumnBreakInside: 'avoid',
                    pageBreakInside: 'avoid',
                  }}
                >
                  <button
                    className={controls.toggleBtn}
                    onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
                    title={`Exclude ${skill} from print`}
                    aria-label={`Exclude ${skill} from print`}
                    /* pin button exactly in the corner without changing layout */
                    style={{ top: 4, right: 4 }}
                  >
                    👁
                  </button>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
