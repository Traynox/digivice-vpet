import React from 'react'
import styles from '../../public/css/Title.module.css'

const Title = () => {
  return (
    <div>
      <h1
        className={`${styles['digi-title']}`}>
        Digimon
      </h1>
      <div className={`${styles['digi-subtitle']} d-flex justify-content-end`}>
        <h3> simple vpet</h3>
      </div>
    </ div>
  );

};

export  default Title;