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
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
      }
    }
  }
  return cookieValue;
}

const TranslatedText = {text: "lorem"}
const TranslateContext = React.createContext(TranslatedText.text);

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography component="div" role="tabpanel" hidden={value !== index} id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

function SimpleTabs() {
  const translate_classes = useTranslateStyles();

  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleChange2 = (event, newValue) => {setValue2(newValue);};

  return (
    <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '64px', marginBottom: '0px'}}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Paper square>
            <AppBar position="static" color="default">
              <Tabs value={value1} onChange={handleChange1} indicatorColor="primary" textColor="primary" variant="scrollable"
              scrollButtons="auto" aria-label="scrollable auto tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <div id="textAreaTranslateIn"></div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper square>
            <AppBar position="static" color="default">
              <Tabs value={value2} onChange={handleChange2} indicatorColor="primary" textColor="primary" variant="scrollable"
              scrollButtons="auto" aria-label="scrollable auto tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <TextareaAutosize aria-label="minimum height" rowsMin={3} disabled 
            placeholder=""
            style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
            width: "100%", minHeight: "170px", border: "0px" }} />
          </Paper>
          <TranslateContext.Consumer> 
              {
                (after) => {
                  <div>{after.text}</div>
                }
              }
            </TranslateContext.Consumer>
        </Grid>
      </Grid>
    </Container>
  );
}

// textarea handle change
class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', after: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();

    let csrftoken = getCookie('csrftoken');
    let me = this;

    fetch('/hash/sample/', {
        method: "post",
        credentials: "include",
        headers: new Headers({
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest'
        }),
        body: `translateText=${this.state.value}` 

    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      me.setState({after: data.translateText});
    }).catch(function(ex) {
        console.log("parsing failed", ex);
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" onChange={this.handleChange}
            style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
            width: "100%", minHeight: "170px", border: "0px" }} />
        <TranslateContext.Provider value={ TranslatedText[this.state.after] }>
          <Typography>{ this.state.after }</Typography>
        </TranslateContext.Provider>
      </form>
    );
  }
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useListStyles();

  return (
    <div className={classes.root} style={{ paddingTop: '64px' }}>
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Typography variant="h4" style={{ paddingBottom: '30px' }}>Translated Texts</Typography>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItemLink href="#" button>
            <ListItemText
              primary={
                <div style={{ paddingLeft: "-16px" }}>
                  <Typography variant="overline" display="block" gutterBottom style={{ marginBottom: "0px", marginTop: "15px" }}>
                    Consectetur adipiscing elit, vivamus orci velit
                  </Typography>
                  <Typography variant="h6" className={classes.beforeText} style={{ marginBottom: "-4.5px" }}>
                    Lorem Ipsum dolor sit Amet
                  </Typography>
                  <Typography variant="h6" style={{ marginBottom: "15px" }}>Lorem Ipsum dolor sit Amet</Typography>
                </div>
              }
            />
          </ListItemLink>
        </List>
      </Container>
    </div>
  );
}


ReactDOM.render(<div><Navbar/></div>, document.querySelector('#navbar'));
ReactDOM.render(<div><SimpleContainer/></div>, document.querySelector('#view-1'));
ReactDOM.render(<div><SimpleTabs/></div>, document.querySelector('#view-2a'));
ReactDOM.render(<div><TextArea/></div>, document.querySelector('#textAreaTranslateIn'));
ReactDOM.render(<div><SimpleList/></div>, document.querySelector('#view-2b'));
