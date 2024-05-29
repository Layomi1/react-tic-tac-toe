import styles from "./Square.module.css";

const Square = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
