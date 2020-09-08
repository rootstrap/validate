import validate from 'validate.js';

import noPresence from './noPresence';
import conditionalConstraints from './conditionalConstraints';

/*
Overrides allowEmpty for presence default because it makes no sense

Should you need to set it back to the default you can simply override it
the same way it is overwritten here.

*/
validate.validators.presence.options = { allowEmpty: false };

// CUSTOM, BUT COMMON, VALIDATORS
validate.validators.noPresence = noPresence;
validate.validators.conditionalConstraints = conditionalConstraints;

export default validate;
