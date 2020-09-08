import validate from 'validate.js';
import get from 'lodash/get';

const conditionalConstraints = (
  value,
  { dependencies, constraints },
  key,
  attributes,
) => {
  let validDependencies = true;
  dependencies.forEach(
    ({ attribute: name, constraints: dependencyConstraints }) => {
      const errors = validate.single(
        get(attributes, name),
        dependencyConstraints,
      );
      validDependencies = validDependencies && !errors;
    },
  );
  if (validDependencies) {
    const errors = validate(
      attributes,
      { [key]: constraints },
      { fullMessages: false },
    );
    if (errors) {
      return errors[key];
    }
  }
};

export default conditionalConstraints;
