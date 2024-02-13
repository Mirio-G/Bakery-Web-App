import ProgressBar from 'react-bootstrap/ProgressBar';

function PBar() {
  const now = 20;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default PBar;