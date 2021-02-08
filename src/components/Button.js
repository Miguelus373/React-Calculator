import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick } = props;

  return (
    <button type="button" onClick={() => handleClick(name)}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: '=',
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export { Button as default };
