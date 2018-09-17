import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../actions';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  filter = () => {
    
  }

  render() {
    const {} = this.props;
    return (
      <form onSubmit={this.filter}>
        <input 
          type="search"
          name="search" 
          onChange={this.handleChange} 
          value={this.state.value}
        />
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  filter: (search) => dispatch(filter(search))
});

export default connect(null, mapDispatchToProps)(Search);
