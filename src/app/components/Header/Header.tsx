'use client'

import Image from "next/image";
import objectiveLogo from './assets/objective-logo.svg';
import styles from './Header.module.scss';
import Link from "next/link";

export function Header() {

  return (
    <>
      <header className={styles.header}>
        <Image width={96} height={24} src={objectiveLogo} alt="Objective Logo" className="headerImg" />

        <div className={styles.headerInfo}>
          <div className={styles.userInfo}>
            <span className={styles.userInfo__name}>
              Luiz Guilherme Pessoa da Silva
            </span>
            <span className="userInfo__test">Teste de Front-end</span>
          </div>
          <Link className={styles.userAvatar} href="/about">LG</Link>
        </div>
      </header>
    </>
  );
}