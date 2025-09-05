import controls from "../modules/printControls.module.css";
import styles from "./Language.module.css";

function flip(hostEl, btnEl) {
  const isOn = hostEl.getAttribute("data-print") === "on";
  const next = isOn ? "off" : "on";
  hostEl.setAttribute("data-print", next);
  hostEl.classList.toggle(controls.excluded, next === "off");
  if (btnEl) btnEl.innerText = next === "off" ? "🙈" : "👁";
}

export default function Language({ items }) {
  return (
    <section className={styles.language}>
      <h2 className={styles.heading}>Language Proficiency</h2>

      <ul className={styles.list}>
        {items.map((lang) => (
          <li
            key={lang.id}
            className={`${styles.entry} ${controls.section}`}
            data-print="on"
          >
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title={`Exclude ${lang.name} from print`}
              aria-label={`Exclude ${lang.name} from print`}
            >
              👁
            </button>

            <div className={styles.row}>
              <span className={styles.label}>{lang.name}:</span>
              <span className={styles.value}>{lang.level}</span>
            </div>
            {lang.note ? <p className={styles.note}>{lang.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
