import { ReactNode } from 'react'
import styles from './CardImageAndName.module.scss';

interface CardImageAndNameProps {
  children: ReactNode;
}

const CardImageAndName = ({ children }: CardImageAndNameProps) => {
  return (
    <div data-testid="card-image-and-name" className={styles.cardImageAndName}>{children}</div>
  )
}

export default CardImageAndName