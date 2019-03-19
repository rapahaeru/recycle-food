import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ForwardIcon from '@material-ui/icons/Forward';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItemLink href="#recype-one">
          <ListItemIcon>
            <ForwardIcon />
          </ListItemIcon>
          <ListItemText primary="Recype one" />
        </ListItemLink>
        <ListItemLink href="#recype-two">
          <ListItemIcon>
            <ForwardIcon />
          </ListItemIcon>
          <ListItemText primary="Recype two" />
        </ListItemLink>
        <ListItemLink href="#recype-three">
          <ListItemIcon>
            <ForwardIcon />
          </ListItemIcon>
          <ListItemText primary="Recype Three" />
        </ListItemLink>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(SimpleList);
