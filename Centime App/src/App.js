import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import {Grid} from '@material-ui/core'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import useStyles from './styles';
import Header from "./Header";
import SankeyChart from './components/SankeyChart'


function App() {
  const classes =useStyles();
  return (
    <div>
      <div>
        <div>
    <Header />
        </div>
      <div >
         <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{height:'100vh'}}>
            <Grid item xs={12} sm={4}>
              <Details title="Income"/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Main/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Details title="Expense"/>
            </Grid>
         </Grid>
    </div>
      </div>
      <div >
        <Grid>
        <SankeyChart />
        </Grid>
      </div>
    </div>
  );
}

export default App;
