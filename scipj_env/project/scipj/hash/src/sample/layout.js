import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useLayoutStyles, useListStyles, useTranslateStyles } from '../styles/sample/layout';
import Typography from '@material-ui/core/Typography';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from '@material-ui/core/List';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function SimpleContainer() {
  const layout_classes = useLayoutStyles();
  
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Typography variant="overline" display="block" gutterBottom style={{ paddingTop: '64px', marginBottom: '0px'}}>
          Consectetur adipiscing elit, vivamus orci velit
        </Typography>
        <Typography variant="h4" gutterBottom>
          Lorem Ipsum dolor sit Amet
        </Typography>
        <div className={ layout_classes.root }>
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
    </div>
  );
}

function SimpleTabs() {
  const translate_classes = useTranslateStyles();

  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '64px', marginBottom: '0px'}}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Paper square>
              <Tabs value={value1} indicatorColor="primary" textColor="primary" onChange={handleChange1} aria-label="disabled tabs example">
                <Tab label="Active" />
                <Tab label="Disabled"/>
                <Tab label="Active" />
              </Tabs>
              <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" className={translate_classes.box}  />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper square>
              <Tabs value={value2} indicatorColor="primary" textColor="primary" onChange={handleChange2} aria-label="disabled tabs example">
                <Tab label="Active" />
                <Tab label="Disabled"/>
                <Tab label="Active" />
              </Tabs>
              <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" className={translate_classes.box} disabled />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useListStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="#" button>
          <ListItemText
            primary={
              <div style={{ paddingLeft: "0px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  style={{ marginBottom: "0px" }}
                >
                  Consectetur adipiscing elit, vivamus orci velit
                </Typography>
                <Typography
                  variant="h6"
                  className={classes.beforeText}
                  style={{ marginBottom: "-4.5px" }}
                >
                  Lorem Ipsum dolor sit Amet
                </Typography>
                <Typography variant="h6">Lorem Ipsum dolor sit Amet</Typography>
              </div>
            }
          />
        </ListItemLink>
      </List>
    </div>
  );
}


ReactDOM.render(<div><Navbar/></div>, document.querySelector('#navbar'));
ReactDOM.render(<div><SimpleContainer/></div>, document.querySelector('#view-1'));
ReactDOM.render(<div><SimpleTabs/></div>, document.querySelector('#view-2a'));
ReactDOM.render(<div><SimpleList/></div>, document.querySelector('#view-2b'));
