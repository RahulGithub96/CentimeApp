import React,{useContext } from 'react'
import{Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Centime"/>
        <CardContent>
          <Typography align='center' variant='h5'>Total Balance Rs {balance}</Typography>
          <Typography variant='subtitle1' align="center" style={{lineHeight:'1.5em', marginTop:'20px'}}>
                        Add Your Income and Expenses... 
          </Typography>
          <Divider />
          <Form/>
        </CardContent>
        <CardContent className={classes.CardContent}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <List />
                  </Grid>
              </Grid>
        </CardContent>
    </Card>
  )
}

export default Main