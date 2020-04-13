import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useLayoutStyles } from '../styles/sample/layout';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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

function SimpleContainer() {
  const layout_classes = useLayoutStyles();

  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const handleClick3 = (event) => {setAnchorEl3(event.currentTarget);};
  const handleClose3 = () => {setAnchorEl3(null);};
  
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Typography variant="overline" display="block" gutterBottom style={{ paddingTop: '64px', marginBottom: '0px'}}>
          {algo_subtitle}
        </Typography>
        <Typography variant="h4" gutterBottom>{algo_name}</Typography>
        <div className={ layout_classes.root }>
          <Grid container spacing={0}>
            <Hidden only={["xs", "sm"]}>
              <Grid item xs={12} md={5} style={{ height: "455px" }}>
                <Card>
                  <CardActionArea>
                    <CardMedia image={algo_image} title="Image" style={{ height: "455px" }}/>
                  </CardActionArea>
                </Card>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={7} style={{ height: "455px",  padding: "30px" }}>
              <Typography variant="body1" gutterBottom>{algo_p1}</Typography>
              <Typography variant="body1" gutterBottom>{algo_p2}</Typography>
              <Typography variant="body1" gutterBottom>{algo_p3}</Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing={0}>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item style={{ paddingRight: "12px" }}>
            <Tooltip title="Show Image" placement="top">
              <Fab size="small" color="secondary" aria-label="edit" aria-controls="simple-menu"
                  aria-haspopup="true" onClick={handleClick3}>
                <ImageSearchIcon />
              </Fab>
            </Tooltip>
          </Grid>
          <Menu id="simple-menu" anchorEl={anchorEl3} keepMounted open={Boolean(anchorEl3)} onClose={handleClose3}>
            <MenuItem onClick={handleClose3} style={{ width: "455px" }}>
              <Card >
                <CardActionArea>
                  <CardMedia image={algo_image} title="Image" style={{ width: "375px", height: "455px" }}/>
                </CardActionArea>
              </Card>
            </MenuItem>
          </Menu>
        </Hidden>
        <Grid item style={{ paddingRight: "12px" }}>
          <Fab variant="extended" size="medium" color="primary" aria-label="Step Through" href="#anchor-2">
            <SystemUpdateAltIcon className={layout_classes.extendedIcon}/>  Step through
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

var createClass = require('create-react-class');

const Component = createClass({
  iframe: function () {return {__html: this.props.iframe}},
  render: function() {return (<div><div dangerouslySetInnerHTML={ this.iframe() } /></div>);}
});

const useStyles = makeStyles(theme => ({
  root: {width: '100%', paddingTop: '60px'},
  button: {marginRight: theme.spacing(1),},
  instructions: {marginTop: theme.spacing(1), marginBottom: theme.spacing(1),},
}));

function getSteps() {return ['Select campaign settings', 'Create an ad group', 'Create an ad'];}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const useIconStyles = makeStyles((theme) => ({
  root: {'& > svg': {margin: theme.spacing(2),},},
}));

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', after: ''};
    this.setAfter = props.setAfter;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();

    let csrftoken = getCookie('csrftoken');
    let me = this;

    const spliturl = window.location.href.split('/');
    const algotype0 = spliturl[spliturl.length-1].split('#')[0]

    fetch(('/hash/' + algo_slug), {
        method: "post",
        credentials: "include",
        headers: new Headers({
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest'
        }),
        body: `translateText=${event.target.value}&algotype=${algotype0}`

    }).then(function(response) {
        return response.json();
    }).then(function(data) {
      me.setState({upper: data.afterText});
      me.setAfter(data.afterText);
    }).catch(function(ex) {console.log("parsing failed", ex);});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField onChange={this.handleChange} id="outlined-basic" variant="outlined"
                    size="small" helperText="Your input string"/>
      </form>
    );
  }
}


function HorizontalLinearStepper() {
  const classes = useStyles();
  const svgClasses = useIconStyles();
  
  const handleDelete = () => {console.info('You clicked the delete icon.');};

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = algo_steps_header_tmp;
  const desc = algo_steps_desc_tmp;
  
  const [afterText, setAfter] = React.useState("");
  const isStepOptional = step => {return null;};
  const isStepSkipped = step => {return skipped.has(step);};

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {newSkipped = new Set(newSkipped.values()); newSkipped.delete(activeStep);}
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {setActiveStep(prevActiveStep => prevActiveStep - 1);};

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {throw new Error("You can't skip a step that isn't optional.");}

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {setActiveStep(0);};
  
//  const iframe = `<iframe
//    src="https://codesandbox.io/embed/testfilespython-nz343?autoresize=1&fontsize=12&hidenavigation=1&module=%2FTestfile.py&theme=dark&view=editor"
//    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
//    title="test_files_python"
//    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
//    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
//  ></iframe>`;
//  const iframe2 = `<iframe
//    src="https://codesandbox.io/embed/testfilespython-nz343?autoresize=1&fontsize=12&hidenavigation=1&module=%2FTestfile.py&theme=dark&view=editor"
//    style="width:100%; height:275px; border:0; border-radius: 4px; overflow:hidden;"
//    title="test_files_python"
//    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
//    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
//  ></iframe>`;
  const iframe = ""; const iframe2 = "";

  return (
    <div className={classes.root}>
      <Grid direction="row" justify="center" alignItems="center" style={{ height: "100%" }}>
        <Grid item>
          <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {labelProps.optional = <Typography variant="caption">Optional</Typography>;}
                if (isStepSkipped(index)) {stepProps.completed = false;}
                return (
                  <Step key={label} {...stepProps}><StepLabel {...labelProps}>{label}</StepLabel></Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
                  <Container maxWidth="sm" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <Paper variant="outlined" >
                      <div className={classes.root} style={{ paddingTop: '20px', paddingLeft: '16px',
                                                              padddingRight: '16px', paddingBottom: '20px' }}>
                        <div className={ svgClasses.root }>
                          <TextInput setAfter={setAfter} />
                          <TrendingFlatIcon/>
                          <Tooltip title="Sorry, no time to do reverse" placement="top-start">
                            <TextField id="outlined-basic" variant="outlined" size="small"
                              InputProps={{ readOnly: true }} placeholder={ afterText } helperText="Your input string"
                              multiline rowsMax="4"/>
                          </Tooltip>
                        </div>
                      </div>
                      <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px" }} >
                        <Chip size="small" label="Hint" onDelete={handleDelete} color="primary" />
                        <Typography variant="caption" display="block" gutterBottom style={{ display: 'inline', paddingLeft: '17px' }}>
                          Input your value at the left-hand box
                        </Typography>
                      </div>
                    </Paper>
                  </Container>
                  <div style={{ paddingTop: "20px" }}>
                    <Button onClick={handleReset} className={classes.button}>Reset</Button>
                    <Button href="#anchor-1" variant="outlined" color="primary">Back to Top</Button>
                  </div>
                </div>
              ) : (
                <div>
                  <Hidden only={['xs']}><Component iframe={iframe} /></Hidden>
                  <Hidden only={['md', 'lg', 'xl', 'sm' ]}><Component iframe={iframe2} /></Hidden>
                  <Typography className={classes.instructions}>{desc[activeStep]}</Typography>
                  <div style={{ paddingTop: '20px' }}>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back</Button>
                    {isStepOptional(activeStep) && (
                      <Button variant="contained" color="primary" onClick={handleSkip} className={classes.button}>Skip</Button>
                    )}
                    <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}


ReactDOM.render(<Navbar/>, document.querySelector('#navbar'));
ReactDOM.render(<SimpleContainer/>, document.querySelector('#view-1'));
ReactDOM.render(<HorizontalLinearStepper/>, document.querySelector('#view-2'));
