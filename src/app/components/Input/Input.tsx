'use client'

interface InputProps {
  title: string;
  placeholder: string;
  icon?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

import Image from "next/image";
import styles from './Input.module.scss';
import searchIcon from './assets/search.svg';
import { ChangeEvent } from "react";

export function Input({ title, placeholder, icon, onChange, value }: InputProps) {

  return (
    <>
      <div>
        <label className={styles.label} htmlFor={title}>{title}</label>
        <div className={styles.inputContainer}>
          <input value={value} data-testid="input" onChange={(e) => onChange(e)} className={styles.input} type="text" name={title} id={title} placeholder={placeholder} />
          {icon && (
            <Image width={16} height={16} src={searchIcon} alt="Ícone de busca" className={styles.searchIcon} />
          )}
        </div>
      </div>
    </>
  );
}