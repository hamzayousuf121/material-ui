import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

class CircularDeterminate extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer;

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed === 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CircularProgress
          className={classes.progress}
          mode="determinate"
          value={this.state.completed}
        />
        <CircularProgress
          className={classes.progress}
          mode="determinate"
          size={50}
          value={this.state.completed}
        />
        <CircularProgress
          className={classes.progress}
          color="secondary"
          mode="determinate"
          value={this.state.completed}
        />
        <CircularProgress
          className={classes.progress}
          color="secondary"
          mode="determinate"
          size={50}
          value={this.state.completed}
        />
      </div>
    );
  }
}

CircularDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularDeterminate);
