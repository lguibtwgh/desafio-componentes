import styles from './CardEvents.module.scss';

interface CardEventsProps {
  events: string[];
}

const CardEvents = ({ events }: CardEventsProps) => {
  return (
    <div data-testid="card-events" className={styles.cardEvents}>
      {events.map(event => (
        <p data-testid="card-event" key={event}>{event}</p>
      ))}
    </div>
  )
}

export default CardEvents