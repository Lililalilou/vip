import React from 'react';
import { connect} from 'react-redux';
import { changeTrack } from '../actions';

const Track = (props) => {
  const { details, changeTrack } = props;
  return (
    <div onClick={() => changeTrack(details)}>
      {details.creator} - {details.title}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  changeTrack: (track) => dispatch(changeTrack(track))
});

export default connect(null, mapDispatchToProps)(Track);
