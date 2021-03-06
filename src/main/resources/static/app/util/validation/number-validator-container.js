const React = require('react');
const Validator = require('./validator-component');

var ValidatorContainer = React.createClass({
    getInitialState: function() {
      return {
        errorStates: {
          negativeNumber: false
        },
        isValid: true,
        input: ''
      }
    },

    componentWillReceiveProps(newProps) {
      var input = newProps.children.props.value;
      const self = this;
      this.setState({
        input: input
      });
      if (input != null && input != '' && input != undefined) {
        if (parseInt(input) != NaN) {
          if (parseInt(input) < 0) {
            var newState = {
              negativeNumber: true
            };
            self.setState({
              isValid: false,
              errorStates: newState
            });
          }
        }
        if (parseInt(input) != NaN) {
          if (parseInt(input) >= 0) {
            var newState = {
              negativeNumber: false
            };
            self.setState({
              isValid: true,
              errorStates: newState
            });
          }
        }
      }
    },

    shouldComponentUpdate: function(nextProps, nextState) {
      if((this.state.isValid == nextState.isValid) &&
         (this.state.errorStates.negativeNumber == nextState.errorStates.negativeNumber) &&
         (this.state.input == nextProps.children.props.value)) {
        return false;
      } else {
        this.props.handleValidStateChange(this.state.isValid);
        return true;
      }
    },

    componentDidUpdate: function(prevProps, prevState) {
      this.props.handleValidStateChange(this.state.isValid);
    },

    render: function() {
        return (
            <Validator
              isValid={this.state.isValid}
              childs={this.props.children}
              errorStates={this.state.errorStates}
            />
        );
    }
});

module.exports = ValidatorContainer;
