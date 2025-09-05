import styles from './PrintControls.module.css';

function PrintControls() {
  const printAs = (mode) => {
    document.body.setAttribute('data-print', mode);
    window.print();
  };

  return (
    <div className={styles.bar}>
      <button className={styles.btn} onClick={() => printAs('cv')}>Print CV</button>
      <button className={styles.btn} onClick={() => printAs('resume')}>Print Resume</button>
    </div>
  );
}

export default PrintControls;
