import styles from './DateBox.module.scss';

type DateProps = {
  selected?: boolean;
};

const DateBox: React.FC<DateProps> = ({ selected }) => {
  return (
    <div className={`${styles.dateWrapper} ${selected ? styles.selected : ''}`}>
      <span className="dateName">FRI</span>
      <span className="dateNum">07</span>
    </div>
  );
};

export default DateBox;
