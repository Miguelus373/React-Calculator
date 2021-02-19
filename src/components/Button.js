import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, handleClick, color, wide,
  } = props;

  return (
    <button
      className={`button ${color} ${wide ? 'wide' : ''}`}
      type="button"
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: '=',
  color: '',
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

export { Button as default };
