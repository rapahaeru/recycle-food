import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import Ingredients from './components/Ingredients';


const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  wrapper: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  appBar: {
    padding: theme.spacing.unit * 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    paddingLeft: theme.spacing.unit * 2,
  },
  subtitle: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  paperWrapper: {
    padding: theme.spacing.unit * 2,
  },
});

const App = (props) => {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static" className={classes.appBar}>
          <Icon>remove_shopping_cart</Icon>
          <Typography variant="h6" component="h1" inline className={classes.title}>Recycle food</Typography>
        </AppBar>
      </Grid>
      <Grid container className={classes.wrapper}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid className={classes.container} item xs={12}>
            <Typography variant="h4">Lorem ipsum</Typography>
            <Typography variant="p">
              Lorem ipsum dolor avec Lorem ipsum dolor
              avec Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor
              avec Lorem ipsum dolor avec.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <section>
              <Typography variant="h5" className={classes.subtitle}>
                O que tenho:
              </Typography>
              <Paper className={classes.paperWrapper}>
                <h3>Testando paper</h3>
                <Ingredients />
              </Paper>
            </section>
          </Grid>
          <Grid item xs={12} sm={6}>
            <section>
              <Typography variant="h5" className={classes.subtitle}>
                O que posso fazer:
              </Typography>
              <Paper className={classes.paperWrapper}>
                <h3>Testando paper</h3>
                <ul>
                  <li>testando</li>
                  <li>testando</li>
                  <li>testando</li>
                </ul>
              </Paper>
            </section>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(App);
