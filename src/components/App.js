import '../assets/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => (
  <>
    <Display />
    <ButtonPanel />
  </>
);

export { App as default };
