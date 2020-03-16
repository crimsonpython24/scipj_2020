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
  );
}

function SimpleTabs() {
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '64px', marginBottom: '0px'}}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Paper square>
            <Tabs value={value1} indicatorColor="primary" textColor="primary" onChange={handleChange1} aria-label="disabled tabs example">
              <Tab label="Active" />
              <Tab label="Disabled"/>
              <Tab label="Active" />
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper square>
            <Tabs value={value2} indicatorColor="primary" textColor="primary" onChange={handleChange2} aria-label="disabled tabs example">
              <Tab label="Active" />
              <Tab label="Disabled"/>
              <Tab label="Active" />
            </Tabs>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
  
ReactDOM.render(<div><Navbar/></div>, document.querySelector('#navbar'));
ReactDOM.render(<div><SimpleContainer/></div>, document.querySelector('#view-1'));
ReactDOM.render(<div><SimpleTabs/></div>, document.querySelector('#view-2a'));
