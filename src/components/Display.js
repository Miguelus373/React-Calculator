import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

  return (
    <p>
      {result ?? '0'}
    </p>
  );
};

Display.defaultProps = {
  result: null,
};

Display.propTypes = {
  result: PropTypes.string,
};

export { Display as default };
