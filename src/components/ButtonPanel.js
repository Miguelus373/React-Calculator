import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const buttons = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'X'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };

  return (
    <>
      {Object.keys(buttons).map(group => (
        <div key={group}>
          {buttons[group].map(button => (
            <Button
              key={button}
              name={button}
              handleClick={props.clickHandler}
            />
          ))}
        </div>
      ))}
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export { ButtonPanel as default };
