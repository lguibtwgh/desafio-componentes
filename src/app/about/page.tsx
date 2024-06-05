'use client'

import Link from 'next/link';
import '../styles/reset.css';
import styles from './about.module.scss';


export default function About() {
  return (
    <>
      <section className={styles.aboutPage}>
        <header className={styles.aboutHeader}>
          <Link className={styles.goToHome} href="/">Ir para home</Link>
          <h1 className={styles.pageTitle}>Documentação de componentes</h1>
        </header>
        <div className={styles.doc}>
          <h2 className={styles.title}>{'<Input />'}</h2>
          <h3 className={styles.subtitle}>Propriedades do componente:</h3>
          <p>title: string;</p>
          <p>placeholder: string;</p>
          <p>icon?: boolean;</p>
          <p>{'onChange: (e: ChangeEvent<HTMLInputElement>) => void;'}</p>
          <p>value: string;</p>
        </div>

        <div className={styles.doc}>
          <h2 className={styles.title}>{'<Pagination />'}</h2>
          <h3 className={styles.subtitle}>Propriedades do componente:</h3>
          <p>totalPages: number;</p>
          <p>activePage: number;</p>
          <p>{'paginate: (number: number) => void;'}</p>
          <p>{'goToPrevPage: (number: number) => void;'}</p>
          <p>{'goToNextPage: (number: number) => void;'}</p>
          <p>{'goToLastPage: () => void;'}</p>
          <p>{'goToFirstPage: () => void;'}</p>
        </div>


        <div className={styles.doc}>
          <h2 className={styles.title}>{'<Card />'}</h2>
          <h3 className={styles.subtitle}>Propriedades do componente:</h3>

          <p>O componente card foi feito utilizando o pattern composition, então podemos compor ele de acordo com o necessário, removendo ou não partes desse componente. <br>
          </br>
            Segue um exemplo de utlização logo abaixo, caso não quisermos utilizar a imagem, basta retirar a linha correspondente.
          </p>
          <p>Todos os componentes menores que compõem o Card e estão marcados com uma {'->'} podem ser retirados ou colocados em um Card.</p>

          <br></br>
          <pre style={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>
            {`<Card.Root key={card.id + index}>
              -> <Card.ImageAndName>
                -> <Card.Image src={card.avatar} />
                -> <Card.Name text={card.name} />
              -> </Card.ImageAndName>
              -> <Card.Series series={card.series} />
              -> <Card.Events events={card.events} />
            </Card.Root>
          `}
          </pre>
        </div>
      </section>
    </>
  );
}