import './Notification.scss';
import ReactDOM from 'react-dom';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'success';
  }

  if (status === 'error') {
    statusClasses = 'error';
  }

  const cssClasses = `notification notification__${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
}

export default Notification;
