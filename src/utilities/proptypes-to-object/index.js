// import this to check each of the component's PropTypes against
import PropTypes from "prop-types";

// helper method to determine whether a propType method is a particular PropType validator
// i.e. string, node, or bool
const isCorrectPropType = (method, propType) => {
  return (
    method === PropTypes[propType] || method === PropTypes[propType].isRequired
  );
};

// helper method to determine whether a prop is required or not - if it is required,
// it'll be equal to the .isRequired method on the propType.
// propType here is the current object type only, e.g. string
const isPropTypeRequired = (method, propType) => {
  return method === PropTypes[propType].isRequired;
};

// method to determine what PropType a particular prop is. It does this by taking
// the PropType validator of a particular prop, and running it against each of the
// PropType validators set in the propTypes array. If a match is found, we return
// an object of the prop type, and whether it is required or not.
const getPropInfo = method => {
  // Array needs to be updated whenever we add a new propType you add a new component
  const propTypes = ["string", "node", "bool"];

  return propTypes.reduce((obj, curr) => {
    // Returns true for the PropType validators that match our propTypes (e.g. string)
    // And false for those that don't match (e.g. node, bool)
    const isCorrect = isCorrectPropType(method, curr);

    // Our obj is {type: "string", required: true}
    // If type is string, we return an object of prop type
    if (obj.type) {
      return obj;
    }

    // If required - we first assign current value to object type
    // thus making obj.type a string
    if (isCorrect) {
      obj.type = curr;
      obj.required = isPropTypeRequired(method, curr);
    }
    return obj;
  }, {});
};

// Loops through propType, and returns a human-readable object containing
// type and required status for each prop.
const propTypesToObject = ({ propTypes }) => {
  // Object.keys returns property name in an array, e.g. [title]
  // We add the following arguments to reduce = object and current value, e.g. title
  let newProps = Object.keys(propTypes).reduce((obj, curr) => {
    // Info returns an object with required and value key-value pairs, e.g. {type: "string", required: true}
    const info = getPropInfo(propTypes[curr]);
    return {
      ...obj,
      [curr]: {
        type: info.type,
        required: info.required
      }
    };
  }, {});
  return newProps;
};

export default propTypesToObject;
