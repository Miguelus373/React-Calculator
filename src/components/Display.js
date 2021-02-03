import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

  return (
    <h1>
      Result:
      {' '}
      {result}
    </h1>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export { Display as default };
