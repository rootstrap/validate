import validate from 'validate.js';

const noPresence = (value, { includeFalse = false }) => {
  const isNotPresent = validate.single(value, {
    presence: true,
  });

  if (!isNotPresent || (value === false && !includeFalse)) {
    return 'ERRORS.noPresence';
  }
};

export default noPresence;
