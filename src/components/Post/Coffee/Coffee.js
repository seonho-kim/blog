// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Coffee.module.scss';

type Props = {
    coffeeId: string[]
};

const Coffee = ({ coffeeId }: Props) => (
    <div className={styles['coffee-button']}>
      <a
         className={styles['bmc-button']}
         target="_blank"
         href={`http://buymeacoff.ee/${coffeeId}`}
      >
      <img
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span>Buy me a coffee</span>
    </a>
    </div>
);

export default Coffee;
