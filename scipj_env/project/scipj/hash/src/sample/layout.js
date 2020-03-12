import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../../core/src/components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useLayoutStyles from '../styles/sample/layout';
import Typography from '@material-ui/core/Typography';

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
  
ReactDOM.render(<div><Navbar/><SimpleContainer/></div>, document.querySelector('#app'));
