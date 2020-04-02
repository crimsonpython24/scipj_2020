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

var createClass = require('create-react-class');

const Component = createClass({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </div>
    );
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: '60px'
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

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
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HorizontalLinearStepper() {
  const classes = useStyles();
  const svgClasses = useIconStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  const iframe = `<iframe
    src="https://codesandbox.io/embed/testfilespython-nz343?fontsize=12&hidenavigation=1&module=%2FTestfile.py&theme=dark&view=editor"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="test_files_python"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  ></iframe>`; 

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {stepProps.completed = false;}
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>
              <Container maxWidth="sm" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Paper variant="outlined" >
                  <form className={classes.root} noValidate autoComplete="off" style={{ paddingTop: '20px', paddingLeft: '16px', padddingRight: '16px', paddingBottom: '20px' }}>
                    <div className={ svgClasses.root }>
                      <TextField id="outlined-basic" variant="outlined" size="small" helperText="Your input string"/>  
                      <TrendingFlatIcon/>
                      <Tooltip title="Sorry, no time to do reverse" placement="top-start">
                        <TextField id="outlined-basic" variant="outlined" size="small" InputProps={{ readOnly: true }} helperText="Your input string"/>
                      </Tooltip>
                    </div>
                  </form>
                </Paper>
              </Container>
              <Button onClick={handleReset} className={classes.button}>Reset</Button>
            </div>
          ) : (
            <div>
              <Component iframe={iframe} />
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button variant="contained" color="primary" onClick={handleSkip} className={classes.button}>
                    Skip
                  </Button>
                )}
                <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}


ReactDOM.render(<div><Navbar/></div>, document.querySelector('#navbar'));
ReactDOM.render(<div><SimpleContainer/></div>, document.querySelector('#view-1'));
ReactDOM.render(<div><HorizontalLinearStepper></HorizontalLinearStepper></div>, document.querySelector('#view-2'));
