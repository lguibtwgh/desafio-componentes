import styles from './CardName.module.scss';

interface CardNameProps {
  text: string;
}

const CardName = ({ text }: CardNameProps) => {
  return (
    <>
      <h3 data-testid="card-name" className={styles.cardName}>{text}</h3>
    </>
  )
}

export default CardName