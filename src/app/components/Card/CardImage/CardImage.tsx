import styles from './CardImage.module.scss';

import Image from "next/image";

interface CardImageProps {
  src: string;
}

const CardImage = ({ src }: CardImageProps) => {
  return (
    <>
      <Image data-testid="card-image" className={styles.cardImage} width={48} height={48} src={src} alt="Avatar card" />
    </>
  )
}

export default CardImage