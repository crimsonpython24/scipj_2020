import { makeStyles } from '@material-ui/core/styles';

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
    border: "0px",
    paddingLeft: "-30px;",
    paddingRight: "-30px;"
  },
  tabs: {
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
    backgroundColor: '#FFFFFF',
  }
}));
