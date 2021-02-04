import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;

  return (
    <span>
      {name}
    </span>
  );
};

Button.defaultProps = {
  name: '=',
};

Button.propTypes = {
  name: PropTypes.string,
};

export { Button as default };
