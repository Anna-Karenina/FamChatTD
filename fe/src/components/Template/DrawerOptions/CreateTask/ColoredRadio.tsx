import React from 'react';
import { green,red, orange,yellow } from '@material-ui/core/colors';
import { withStyles, Radio } from '@material-ui/core';


  const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);

  const RedRadio = withStyles({
    root: {
      color: red[700],
      '&$checked': {
        color: red[800],
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);

  const YellowRadio = withStyles({
    root: {
      color: yellow[500],
      '&$checked': {
        color: yellow[800],
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);

  const OrangeRadio = withStyles({
    root: {
      color: orange[500],
      '&$checked': {
        color: orange[800],
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);


export  {GreenRadio,RedRadio,YellowRadio,OrangeRadio }
