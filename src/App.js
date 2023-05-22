import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import BasicTable from './Components/Table';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <BasicTable />
      </Container>
    </>
  );
}

export default App;
