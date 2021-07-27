import React from 'react';
import styles from './AddUser.module.css';
import Button from './Button';

const AddUser = () => {
  return (
    <form className={styles.input}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" name="age" step="1" />
      <Button />
    </form>
  );
};

export default AddUser;
