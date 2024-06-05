import styles from './CardSeries.module.scss';

interface CardSeriesProps {
  series: string[];
}

const CardSeries = ({ series }: CardSeriesProps) => {
  return (
    <div data-testid="card-series" className={styles.cardSeries}>
      {series.map(serie => (
        <p data-testid="card-serie" key={serie}>{serie}</p>
      ))}
    </div>
  )
}

export default CardSeries