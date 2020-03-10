import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Hello, World!</h1>
    </div>
  );
}

ReactDOM.render(<Index />, document.querySelector('#app'));
