import { makeStyles } from '@material-ui/core/styles';

export const useLayoutStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export const useListStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  beforeText: {
    fontWeight: 300
  }
}));

export const useTranslateStyles = makeStyles(theme => ({
  box: {
    margin: "0px",
    width: "100%",
    minHeight: "170px",
    border: "0px"
  }
}));
