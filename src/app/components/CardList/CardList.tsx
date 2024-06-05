'use client'

import { Card } from '@/app/components/Card';
import styles from './CardList.module.scss';

interface ICard {
  id: string;
  avatar: string;
  series: string[];
  events: string[];
  name: string;
}

interface CardListProps {
  cardList: ICard[];
  loading?: boolean;
}

export function CardList({ cardList, loading }: CardListProps) {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <section className={styles.cardList}>
        <header className={styles.cardListHeader}>
          <span>Personagem</span>
          <span>Séries</span>
          <span>Eventos</span>
        </header>
        {cardList.map((card, index: number) => (
          <Card.Root key={card.id + index}>
            <Card.ImageAndName>
              <Card.Image src={card.avatar} />
              <Card.Name text={card.name} />
            </Card.ImageAndName>
            <Card.Series series={card.series} />
            <Card.Events events={card.events} />
          </Card.Root>
        ))}
      </section>
    </>
  )
}