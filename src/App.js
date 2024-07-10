import React, { useState } from 'react';
import SuperhumanList from './components/SuperhumanList/SuperhumanList';
import SuperhumanForm from './components/SuperhumanForm/SuperhumanForm';
import styles from './App.module.scss';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshSuperhumans = () => {
    setRefresh(!refresh);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Superhuman Manager</h1>
      <SuperhumanForm refreshSuperhumans={refreshSuperhumans} />
      <SuperhumanList key={refresh} />
    </div>
  );
};

export default App;