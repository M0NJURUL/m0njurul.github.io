import styles from './About.module.css';

function About({ text }) {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>{text}</p>
    </section>
  );
}

export default About;
