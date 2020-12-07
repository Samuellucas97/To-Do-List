import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 800
  },

  cssLabel: {
    color: "white"
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.secondary.main} !important`
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderColor: "white !important"
  }
});

class ValidField extends React.Component {
  // state = {
  //   name: "InputMode"
  // };

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="true">
        <TextField
          id="standard-name"
          label="Name"
          // value={this.state.name}
          // onChange={this.handleChange("name")}
          color="secondary"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            },
            inputMode: "numeric"
          }}
        />
      </form>
    );
  }
}

ValidField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ValidField);
