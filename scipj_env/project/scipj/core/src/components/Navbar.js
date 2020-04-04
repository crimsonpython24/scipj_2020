import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useNavbarStyles from '../styles/components/Navbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import Link from '@material-ui/core/Link';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function PersistentDrawerLeft() {
  const classes = useNavbarStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open,})} color="inherit" elevation={0} style={{ borderBottom: "0.5px solid #e3e3e3" }}>
        <Toolbar styles={{ "border-bottom": "1px solid #DEDEDE"}}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open}
        classes={{paper: classes.drawerPaper,}}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Index">
            <ListItemIcon><FirstPageIcon/></ListItemIcon>
            <Typography variant="body1"><Link href={index_url} color="inherit">Index</Link></Typography>
          </ListItem>
          <ListItem button key="Sample">
            <ListItemIcon><AllInboxIcon/></ListItemIcon>
            <Typography variant="body1"><Link href={sample_url} color="inherit">Sample</Link></Typography>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
