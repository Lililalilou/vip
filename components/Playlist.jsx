import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Track from './Track';

export const Playlist = (props) => {
  const { playlist, search } = props;
  return (
    <div>
      {
      /*
      {search && ( */
      }

        <React.Fragment>
          {playlist.forEach((track, search) => (
            <Track details={track} />
          ))}
        </React.Fragment>
      
      {
      /*
      )} */
      }
    </div>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

{
  /*
const mapStateToProps = state => ({
  filter: state.filter,
});
*/
}

export default Playlist;
