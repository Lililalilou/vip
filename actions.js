export const changeTrack = track => ({
  type: 'CHANGE_TRACK',
  track,
});

export const filter = search => ({
  type: 'FILTER',
  search,
});
