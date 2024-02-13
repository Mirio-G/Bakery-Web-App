import ProgressBar from 'react-bootstrap/ProgressBar';
import './style/index.css'

function PBar() {
  const now = 20;
  return  <ProgressBar now={now} label={`${now}%`} />;
}

export default PBar;