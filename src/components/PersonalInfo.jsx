import controls from "../modules/printControls.module.css";
import styles from "./PersonalInfo.module.css";

function flip(hostEl, btnEl) {
  const isOn = hostEl.getAttribute("data-print") === "on";
  const next = isOn ? "off" : "on";
  hostEl.setAttribute("data-print", next);
  hostEl.classList.toggle(controls.excluded, next === "off");
  if (btnEl) btnEl.innerText = next === "off" ? "🙈" : "👁";
}

export default function PersonalInfo({ items }) {
  return (
    <section className={styles.personal}>
      <h2 className={styles.heading}>Personal Information</h2>

      <ul className={styles.list}>
        {items.map((row) => (
          <li
            key={row.id}
            className={`${styles.entry} ${controls.section}`}
            data-print="on"
          >
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title={`Exclude ${row.label} from print`}
              aria-label={`Exclude ${row.label} from print`}
            >
              👁
            </button>

            <div className={styles.row}>
              <span className={styles.label}>{row.label}:</span>
              <span className={styles.value}>{row.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
