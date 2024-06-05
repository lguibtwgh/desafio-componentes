import { ReactNode } from 'react'
import styles from './CardRoot.module.scss';

interface CardRootProps {
  children: ReactNode;
}

const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div data-testid="card-root" className={styles.cardRoot}>{children}</div>
  )
}

export default CardRoot