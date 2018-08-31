import React from 'react';

function Track(props) {
  const { details } = props;
  return (
    <div>
      {details.creator} - {details.title}
    </div>
  );
}

export default Track;
