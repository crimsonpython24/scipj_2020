import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useLayoutStyles from '../styles/sample/layout';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";


function SimpleContainer() {
  const layout_classes = useLayoutStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Typography variant="overline" display="block" gutterBottom style={{ paddingTop: '64px', marginBottom: '0px'}}>
          Consectetur adipiscing elit, vivamus orci velit
        </Typography>
        <Typography variant="h4" gutterBottom>
          Lorem Ipsum dolor sit Amet
        </Typography>
        <div className={layout_classes.root }>
          <Grid container spacing={0}>
            <Grid item xs={12} md={5} style={{ height: "455px" }}>
            </Grid>
            <Grid item xs={12} md={7} style={{ height: "455px",  padding: "30px" }}>
              <Typography variant="body1" gutterBottom>
                Vestibulum efficitur enim sed leo vehicula, nec vulputate neque aliquam. Morbi hendrerit neque massa,
                in finibus libero egestas vitae. Curabitur mattis orci sapien, vitae bibendum elit finibus nec.
                Integer rutrum tellus sem, id egestas metus aliquam eget. In commodo ultricies gravida. Suspendisse mi ante,
                hendrerit commodo lorem sit amet, finibus elementum mauris. Proin vehicula libero et elit venenatis gravida.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value1: PropTypes.any.isRequired,
  value2: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} style={{ paddingTop: '64px', marginBottom: '0px'}}>
        <Grid item xs={12} sm={6}>
          <AppBar position="static">
            <Tabs
              value={value1}
              indicatorColor="primary"
              textColor="primary"
              aria-label="disabled tabs example"
            >
              <Tab label="Input Text" />
            </Tabs>
          </AppBar>
          <TabPanel value={value1} index={0}>
            <Paper variant="outlined">Item One</Paper>
          </TabPanel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppBar position="static">
            <Tabs
              value={value2}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange2}
              aria-label="disabled tabs example"
            >
              >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value2} index={0}>
            <Paper variant="outlined">Item One</Paper>
          </TabPanel>
          <TabPanel value={value2} index={1}>
            <Paper variant="outlined">Item Two</Paper>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

  
ReactDOM.render(<div><Navbar/></div>, document.querySelector('#navbar'));
ReactDOM.render(<div><SimpleContainer/></div>, document.querySelector('#view-1'));
ReactDOM.render(<div><SimpleTabs/></div>, document.querySelector('#view-2a'));
