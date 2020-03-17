import { makeStyles } from '@material-ui/core/styles';

const useLayoutStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const useListStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  beforeText: {
    fontWeight: 300
  }
}));

export default {useLayoutStyles, useListStyles};
