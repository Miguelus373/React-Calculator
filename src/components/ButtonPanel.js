import Button from './Button';

const ButtonPanel = () => {
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
            <Button key={button} name={button} />
          ))}
        </div>
      ))}
    </>
  );
};

export { ButtonPanel as default };
