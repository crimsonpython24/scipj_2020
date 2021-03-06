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
import GitHubIcon from '@material-ui/icons/GitHub';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const classes2 = useNavbarStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {setOpen(true);};
  const handleDrawerClose = () => {setOpen(false);};

  const preventDefault = (event) => event.preventDefault();

  const listItems = all.map((slug) =>
    <div>
      <Hidden only={["xs", "sm", "md"]}>
        <Link href={"/hash/" + slug} color="inherit">
          <Tooltip title={slug} placement="right" arrow>
            <ListItem button key={slug}>
              <ListItemIcon><CheckBoxOutlineBlankIcon/></ListItemIcon>
              <Typography variant="body1">{slug}</Typography>
            </ListItem>
          </Tooltip>
        </Link>
      </Hidden>
      <Hidden only={["lg", "xl"]}>
        <Link href={"/hash/" + slug} color="inherit">
          <ListItem button key={slug}>
            <ListItemIcon><CheckBoxOutlineBlankIcon/></ListItemIcon>
            <Typography variant="body1">{slug}</Typography>
          </ListItem>
        </Link>
      </Hidden>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open,})} color="inherit"
        elevation={0} style={{ borderBottom: "0.5px solid #e3e3e3" }}>
        <Toolbar styles={{ "border-bottom": "1px solid #DEDEDE"}}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>News</Typography>
        </Toolbar>
      </AppBar>
      <Hidden only={["xs", "sm", "md"]}>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link href="/" color="inherit">
              <Tooltip title="Index" placement="right" arrow>
                <ListItem button key="Index">
                  <ListItemIcon><FirstPageIcon/></ListItemIcon><Typography variant="body1">Index</Typography>
                </ListItem>
              </Tooltip>
            </Link>
            <Link href="/admin/" color="inherit">
              <Tooltip title="Admin" placement="right" arrow>
                <ListItem button key="Admin">
                  <ListItemIcon><AllInboxIcon/></ListItemIcon><Typography variant="body1">Admin</Typography>
                </ListItem>
              </Tooltip>
            </Link>
          </List>
          <List>{listItems}</List>
          <Divider />
          <List>
            <Link href="https://github.com/crimsonpython24/scipj_2020/" color="inherit">
              <Tooltip title="GitHub" placement="right" arrow>
                <ListItem button key="Github">
                  <ListItemIcon><GitHubIcon/></ListItemIcon><Typography variant="body1">Visit on Github!</Typography>
                </ListItem>
              </Tooltip>
             </Link>
          </List>
        </Drawer>
      </Hidden>
      <Hidden only={["lg", "xl"]}>
        <Drawer className={classes2.drawer} variant="persistent" anchor="left" open={open}
          classes={{paper: classes2.drawerPaper,}}>
          <div className={classes2.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link href="" color="inherit">
              <ListItem button key="Index">
                <ListItemIcon><FirstPageIcon/></ListItemIcon><Typography variant="body1">Index</Typography>
              </ListItem>
            </Link>
            <Link href="/admin/" color="inherit">
              <ListItem button key="Admin">
                <ListItemIcon><FirstPageIcon/></ListItemIcon><Typography variant="body1">Admin</Typography>
              </ListItem>
            </Link>
          </List>
          <List>{listItems}</List>
          <Divider />
          <List>
            <Link href="/admin/" color="inherit">
              <ListItem button key="Github">
                <ListItemIcon><GitHubIcon/></ListItemIcon><Typography variant="body1">Visit on Github!</Typography>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
}
