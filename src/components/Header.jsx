import styles from "./Header.module.css";
import controls from "../modules/printControls.module.css";
import profile from "../assets/profile.png";

function Header({ data }) {
  const { name, title, presentAddress, contact, email, linkedin, github } = data;

  const flip = (hostEl, btnEl) => {
    const isOn = hostEl.getAttribute("data-print") === "on";
    const next = isOn ? "off" : "on";
    hostEl.setAttribute("data-print", next);
    hostEl.classList.toggle(controls.excluded, next === "off");
    if (btnEl) btnEl.innerText = next === "off" ? "🙈" : "👁";
  };

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        {/* Name */}
        <div className={controls.section} data-print="on" style={{ position: "relative" }}>
          <h1 className={styles.name}>{name}</h1>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
          >
            👁
          </button>
        </div>

        {/* Title */}
        <div className={controls.section} data-print="on" style={{ position: "relative" }}>
          <p className={styles.title}>{title}</p>
          <button
            className={controls.toggleBtn}
            onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
          >
            👁
          </button>
        </div>

        {/* Contact block */}
        <div
          className={controls.section}
          data-print="on"
          style={{ position: "relative", marginTop: "0.5rem" }}
        >
          <button
            className={controls.toggleBtn}
            onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
          >
            👁
          </button>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.5 }}>
            <li><strong>Present Address:</strong> {presentAddress}</li>
            <li><strong>Contact:</strong> <a href={`tel:${contact}`}>{contact}</a></li>
            <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
            <li><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a></li>
            <li><strong>GitHub:</strong> <a href={github} target="_blank" rel="noreferrer">{github}</a></li>
          </ul>
        </div>
      </div>

      {/* Photo: now shows dotted hover outline and correct eye placement */}
      <div
        className={`${styles.photoWrapper} ${controls.photoWrapper} ${controls.section}`}
        data-print="on"
      >
        <img className={styles.avatar} src={profile} alt="Profile" />
        <button
          className={controls.toggleBtn}
          onClick={(e) => flip(e.currentTarget.parentElement, e.currentTarget)}
          title="Exclude photo from print"
          aria-label="Exclude photo from print"
        >
          👁
        </button>
      </div>
    </header>
  );
}

export default Header;
