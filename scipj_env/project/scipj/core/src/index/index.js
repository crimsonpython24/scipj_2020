import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useListStyles, useTranslateStyles } from '../styles/sample/layout';
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
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HistoryIcon from '@material-ui/icons/History';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import EjectIcon from '@material-ui/icons/Eject';


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

const useStyles = makeStyles({
  media: {height: 400,},
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: "64px" }}>
      <Card elevation={0}>
        <CardMedia
          className={classes.media}
          image={ idx_image }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{ idx_title }</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { idx_desc }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="#anchor-2">Get Started</Button>
        </CardActions>
      </Card>
    </Container>
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

  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  const [MD5Text,       setMD5]    = React.useState("");
  const [SHA1Text,      setSHA1]   = React.useState("");
  const [SHA2Text,      setSHA2]   = React.useState("");
  const [Ripemd160Text, setRip160] = React.useState("");
  const [BcryptText,    setBcrypt] = React.useState("");
  const [Blake2Text,    setBlake2] = React.useState("");
  const [WhirlpoolText, setWhirl]  = React.useState("");
  const [SHA3Text,      setSHA3]   = React.useState("");

  const ref = React.useRef(null);

  const [tabCountValue,      setTabCountValue]   = React.useState("default value");
  const handleChange1 = (event, newValue) => {setValue1(newValue);};
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
    ref.current.changeTab(newValue);
  };

  return (
    <div>
      <Hidden only="xs">
        <div style={{ paddingTop: '64px' }}>
          <Paper variant="outlined" style={{ backgroundColor: "#f2f2f2", height: "150px" }} elevation={0}/>
        </div>
      </Hidden>
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <div style={{ paddingTop: '64px' }}>
          <Paper variant="outlined" style={{ backgroundColor: "#FFFFFF", height: "90px" }} elevation={0}/>
        </div>
      </Hidden>
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px',
                                        marginBottom: '0px', position: "relative", top: "-96px" }}>
        <Paper elevation={2} style={{ borderRadius: "15px" }}>
          <AppBar position="static" color="default" style={{ boxShadow: "none" }}>
            <Grid container spacing={0} style={{ borderBottom: "0.5px solid #e3e3e3", backgroundColor: "#ffffff",
                                                  borderRadius: "15px 15px 0px 0px" }}>
              <Grid item xs={6}>
                <Tabs value={value1} onChange={handleChange1} indicatorColor="primary" textColor="primary" variant="scrollable"
                  scrollButtons="auto" aria-label="scrollable auto tabs example" elevation={0} 
                  style={{ paddingRight: '50px', borderRadius: "15px 0px 0px 0px" }}>
                  <Tab label="Input Text" {...a11yProps(0)} className={translate_classes.tabs} />
                </Tabs>
              </Grid>
              <Grid item xs={6}>
                <Hidden only={["sm", "xs"]}>
                  <Tabs value={value2} onChange={handleChange2} indicatorColor="primary" textColor="primary" variant="scrollable"
                  scrollButtons="auto" aria-label="scrollable auto tabs example" elevation={0}>
                    <Tab label="MD5" {...a11yProps(0)} className={translate_classes.tabs} />
                    <Tab label="SHA-1" {...a11yProps(1)} className={translate_classes.tabs} />
                    <Tab label="SHA-2" {...a11yProps(2)} className={translate_classes.tabs} />
                    <Tab label="RIPEMED-160" {...a11yProps(3)} className={translate_classes.tabs} />
                    <Tab label="Bcrypt" {...a11yProps(4)} className={translate_classes.tabs} />
                    <Tab label="BLAKE2(b, 64-bit)" {...a11yProps(5)} className={translate_classes.tabs} />
                    <Tab label="Whirlpool" {...a11yProps(6)} className={translate_classes.tabs} />
                    <Tab label="SHA-3" {...a11yProps(7)} className={translate_classes.tabs} />
                  </Tabs>
                </Hidden>
                <Hidden only={["md", "lg", "xl"]}>
                  <Tabs value={value2} onChange={handleChange2} indicatorColor="primary" textColor="primary" variant="scrollable"
                  scrollButtons="auto" aria-label="scrollable auto tabs example" elevation={0}>
                    <Tab label="MD5" {...a11yProps(0)} className={translate_classes.tabs} />
                    <Tab label="SHA-1" {...a11yProps(1)} className={translate_classes.tabs} />
                    <Tab label="SHA-2" {...a11yProps(2)} className={translate_classes.tabs} />
                    <Tab label="RIPEMED-160" {...a11yProps(3)} className={translate_classes.tabs} />
                    <Tab label="Bcrypt" {...a11yProps(4)} className={translate_classes.tabs} />
                    <Tab label="BLAKE2(b, 64-bit)" {...a11yProps(5)} className={translate_classes.tabs} />
                    <Tab label="Whirlpool" {...a11yProps(6)} className={translate_classes.tabs} />
                    <Tab label="SHA-3" {...a11yProps(7)} className={translate_classes.tabs} />
                  </Tabs>
                </Hidden>
              </Grid>
            </Grid>
          </AppBar>
          <div>
            <Grid container spacing={0} >
              <Hidden only="xs">
                <Grid item xs={6} style={{ borderRight: "0.5px solid #e3e3e3" }}>
                  <TextArea ref={ref} setMD5={setMD5} setSHA1={setSHA1} setSHA2={setSHA2} setRip160={setRip160}
                    setBcrypt={setBcrypt} setBlake2={setBlake2} setWhirl={setWhirl} setSHA3={setSHA3}
                    tabCountValue={tabCountValue} />
                </Grid>
              </Hidden>
              <Hidden only={["sm", "md", "lg", "xl" ]}>
                <Grid item xs={6} style={{ borderRight: "none" }}>
                  <TextArea setMD5={setMD5} setSHA1={setSHA1} setSHA2={setSHA2} setRip160={setRip160}
                    setBcrypt={setBcrypt} setBlake2={setBlake2} setWhirl={setWhirl} setSHA3={setSHA3}/>
                </Grid>
              </Hidden>
              <Grid item xs={6}>
                <TabPanel value={value2} index={0} style={{ padding: '0px' }}>
                  <TextareaAutosize disabled placeholder={MD5Text}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
                <TabPanel value={value2} index={1}>
                  <TextareaAutosize disabled placeholder={SHA1Text}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
                <TabPanel value={value2} index={2}>
                  <TextareaAutosize disabled placeholder={SHA2Text}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
                <TabPanel value={value2} index={3}>
                  <TextareaAutosize disabled placeholder={Ripemd160Text}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
                <TabPanel value={value2} index={4}>
                  <TextareaAutosize disabled placeholder={BcryptText}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
                <TabPanel value={value2} index={5}>
                  <TextareaAutosize disabled placeholder={Blake2Text}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
                <TabPanel value={value2} index={6}>
                  <TextareaAutosize disabled placeholder={WhirlpoolText}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
                <TabPanel value={value2} index={7}>
                  <TextareaAutosize disabled placeholder={SHA3Text}
                    style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
                    width: "100%", minHeight: "170px", border: "0px", backgroundColor: "#FFFFFF" }} />
                </TabPanel>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Typography variant="caption" display="block" gutterBottom style={{ paddingTop: "15px", paddingRight: "25px" }}>
            Due to time constraints, this box is basically a poor man's version of Google Translate
          </Typography>
        </Grid>
      </Container>
      <Grid container direction="row" justify="center" alignItems="center" spacing={5}
            style={{ width: '232px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Grid item xs={6}>
          <Tooltip title="History" placement="bottom" arrow>
            <IconButton aria-label="history" disableRipple style={{ padding: '20px', border: "0.5px solid #e3e3e3", borderRadius: "50px" }}
              href="#subview-b">
              <HistoryIcon fontSize="large"/>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={6}>
          <Tooltip title="Back" placement="bottom" arrow>
            <IconButton aria-label="back" disableRipple style={{ padding: '20px', border: "0.5px solid #e3e3e3", borderRadius: "50px" }}
              href="#anchor-1">
              <EjectIcon fontSize="large"/>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', MD5: '', SHA1: '', SHA2: '', Ripemd160: '',
                  Bcrypt: '', Blake2: '', Whirl: '', SHA3: '', tab: 0};

    this.setMD5 = props.setMD5;
    this.setSHA1 = props.setSHA1;
    this.setSHA2 = props.setSHA2;
    this.setRip160 = props.setRip160;
    this.setBcrypt = props.setBcrypt;
    this.setBlake2 = props.setBlake2;
    this.setWhirl = props.setWhirl;
    this.setSHA3 = props.setSHA3;

    this.tabCountValue = props.tabCountValue;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeTab(tabValue) {
    this.setState({tab: tabValue});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();

    let csrftoken = getCookie('csrftoken');
    let me = this;

    const spliturl = window.location.href.split('/');
    const algotype0 = spliturl[spliturl.length-1].split('#')[0]

    fetch('/', {
        method: "post",
        credentials: "include",
        headers: new Headers({
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest'
        }),
        body: `translateText=${event.target.value}&tabIndex=${me.state.tab}`

    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      me.setState({MD5: data.MD5Text, SHA1: data.SHA1Text, SHA2: data.SHA2Text, Ripemd160: data.Ripemd160Text,
                   Bcrypt: data.BcryptText, Blake2: data.Blake2Text, Whirl: data.WhirlpoolText, SHA3: data.SHA3Text});
      me.setMD5(data.MD5Text);
      me.setSHA1(data.SHA1Text);
      me.setSHA2(data.SHA2Text);
      me.setRip160(data.Ripemd160Text);
      me.setBcrypt(data.BcryptText);
      me.setBlake2(data.Blake2Text);
      me.setWhirl(data.WhirlpoolText);
      me.setSHA3(data.MD5Text);
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
        <TextareaAutosize onChange={this.handleChange}
          style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', margin: "0px",
          width: "100%", minHeight: "170px", border: "0px" }} />
      </form>
    );
  }
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList() {
  let content = ""
  const classes = useListStyles();
  const preventDefault = (event) => event.preventDefault();

  const [logText, setLogText] = React.useState("");
  const [listItems, setListItems] = React.useState([]);

  useEffect(() => {
    console.log(content)
    content.addEventListener('refreshlog', (evt) => {
      console.log("f");

      fetch('/core/log/', {
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        setListItems(data.objects);
      }).catch(function(ex) {
        console.log("parsing failed", ex);
      });
    })
  }, [])

  return (
    <div ref={e => {content = e}} className={classes.root} style={{ paddingTop: '64px' }}>
      <div id="log-refresh-listener"></div>
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Typography variant="h4" gutterBottom style={{ marginBottom: '0px' }}>Translated Texts</Typography>
        <Typography variant="subtitle1" style={{ paddingBottom: '30px' }}>
          <Link href="#subview-a" color="inherit">Back to Translator</Link>
        </Typography>
        <List component="nav" aria-label="secondary mailbox folders">
          {listItems.map(item =>
            <ListItemLink href="#" button>
              <ListItemText
                primary={
                  <div style={{ paddingLeft: "-16px" }}>
                    <Typography variant="h6" className={classes.beforeText} style={{ marginBottom: "-4.5px" }}>
                      { item.original_text }   >>> TO { item.algotype }
                    </Typography>
                    <Typography variant="h6" style={{ marginBottom: "-4.5px" }}>
                      { item.text }
                    </Typography>
                  </div>
                }
              />
            </ListItemLink>
          )}
        </List>
      </Container>
    </div>
  );
}


ReactDOM.render(<Navbar/>, document.querySelector('#navbar'));
ReactDOM.render(<MediaCard/>, document.querySelector('#view-1'));
ReactDOM.render(<SimpleTabs/>, document.querySelector('#view-2a'));
ReactDOM.render(<SimpleList/>, document.querySelector('#view-2b'));
