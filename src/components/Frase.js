import styles from './Frase.Module.css';

function Frase({ frase }) {
  return (
    <div className={styles.FraseContainer}>
      <p>Este é um componente com uma FRASE!</p>
    </div>
  );
}
export default Frase;