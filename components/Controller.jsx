import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';

const Controller = (props) => {
  const { currentTrack } = props;
  console.log(currentTrack);
  return (
    <div>
      {currentTrack && (
        <React.Fragment>
          <div>{currentTrack.title}</div>
          <audio autoPlay controls src={currentTrack.location} />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
});

export default connect(mapStateToProps)(Controller);
