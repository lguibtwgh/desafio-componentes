'use client'

import styles from './CharacterView.module.scss';
import { ChangeEvent, useState } from 'react';
import { Pagination } from '@/app/components/Pagination/Pagination';
import { CardList } from '@/app/components/CardList';
import { charactersMock } from '../../__mocks__/charactersMock';
import { Header } from '@/app/components/Header';
import { Input } from '@/app/components/Input';
import { ICharacter } from '../../types';

const CHARACTERS_PER_PAGE = 4;

export function CharacterView() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [characterList, setCharacterList] = useState<ICharacter[]>(charactersMock);
  const [loading, setLoading] = useState(false);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const searchToLowerCase = e.target.value.toLowerCase();
    setSearchTerm(searchToLowerCase);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const indexOfLastCharacter = currentPage * CHARACTERS_PER_PAGE;
  const indexOfFirstCharacter = indexOfLastCharacter - CHARACTERS_PER_PAGE;
  const currentCharacters = characterList.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const totalPages = Math.ceil(characterList.length / CHARACTERS_PER_PAGE);

  const goToNextPage = (currentPage: number) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const goToPrevPage = (currentPage: number) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const goToFirstPage = () => {
    setCurrentPage(1);
  }

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  }

  const filteredCharacters = searchTerm.length > 0
    ? currentCharacters.filter(char => char.name.toLowerCase().includes(searchTerm))
    : [];

  return (
    <>
      <section className={styles.characterView}>
        <div data-testid="header" className={styles.header}>
          <Header />
        </div>

        <div data-testid="content" className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.title}>Busca de personagens</h1>
            <Input value={searchTerm} onChange={(e) => handleInput(e)} icon title="Nome do personagem" placeholder="Search" />
            <div className={styles.characterList}>
              {
                filteredCharacters.length > 0 ?
                  <CardList cardList={filteredCharacters} loading={loading} />
                  :
                  <CardList cardList={currentCharacters} loading={loading} />
              }
            </div>
          </div>
        </div>

        <div data-testid="footer" className={styles.footer}>
          <Pagination
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
            goToLastPage={goToLastPage}
            goToFirstPage={goToFirstPage}
            totalPages={totalPages}
            paginate={paginate}
            activePage={currentPage} />
        </div>
      </section>
    </>
  );
}