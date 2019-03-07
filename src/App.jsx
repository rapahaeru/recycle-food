import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';

const App = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <h2>O que posso possuo.</h2>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} sm={6}>
        ITEM DE LISTAGEM
      </Grid>
      <Grid item xs={12} sm={6}>
        ITEM DE LISTAGEM
      </Grid>
    </Grid>


  </Grid>
);

export default App;
