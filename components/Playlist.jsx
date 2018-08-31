import React from 'react';
import PropTypes from 'prop-types';
import Track from './Track';

function Playlist(props) {
  const { playlist } = props;
  return (
    <div>
      {playlist.map((track, id) => (
        <Track details={track} key={id} />
      ))}
    </div>
  );
}
Playlist.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Playlist;
