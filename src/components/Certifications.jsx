import controls from "../modules/printControls.module.css";
import styles from "./Certifications.module.css";

const flip = (hostEl, btnEl) => {
  const on = hostEl.getAttribute("data-print") === "on";
  const next = on ? "off" : "on";
  hostEl.setAttribute("data-print", next);
  hostEl.classList.toggle(controls.excluded, next === "off");
  if (btnEl) btnEl.innerText = next === "off" ? "🙈" : "👁";
};

export default function Certifications({ items }) {
  return (
    <section className={`${styles.certifications} certifications`}>
      <h2 className={styles.heading}>Certifications</h2>
      <ul className={styles.list}>
        {items.map((c) => (
          <li
            key={c.id}
            className={`${styles.item} ${controls.section} item`}
            data-print="on"
          >
            <button
              className={controls.toggleBtn}
              onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
              title="Exclude this certificate from print"
              aria-label="Exclude this certificate from print"
            >
              👁
            </button>

            <div className={styles.top}>
              <span className={styles.title}>{c.title}</span>
              <time className={styles.date}>{c.date}</time>
            </div>

            <div className={styles.meta}>
              <span className={styles.issuer}>{c.issuer}</span>
              {c.link && (
                <>
                  <span className={styles.dot}>•</span>
                  <a className={styles.link} href={c.link} target="_blank" rel="noreferrer">
                    <span className="linkLabel">View certificate</span>
                    <span className="printUrl">{c.link}</span>
                  </a>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
