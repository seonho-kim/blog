// @flow strict
import React from 'react';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Published {new Date(new Date(date).setUTCHours(9)).toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>
);

export default Meta;
