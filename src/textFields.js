import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";


import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "42%"
  },
  button: {
    margin: theme.spacing(3)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  fab: {
    margin: theme.spacing(1),
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function TextFields(props) {
  const classes = useStyles();

  return (
    <Grid>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-with-placeholder"
        label="GPA"
        placeholder="GPA"
        className={classes.textField}
        margin="normal"
        name="gpa"
        value={props.Gpa.gpa}
        onChange={props.change}
        required
      />

      <TextField
        id="standard-with-placeholder"
        label="Credit"
        placeholder="Credit"
        className={classes.textField}
        margin="normal"
        name="credit"
        value={props.Gpa.credit}
        onChange={props.change}
        required
      />

      <Button
        size="small"
        onClick={props.del}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>

      
    </form>
    </Grid>
  );
}
