import './AlertList.scss';

// import Alert from '@Components/Alert/Alert';

export default function AlertList() {
  return (
    <div className="alert">
      <div className="alert__list">
        {/* {alerts.length > 0 &&
          alerts.map((alert) => {
            return <Alert type={alert.type} text={alert.text} key={alert.id} />;
          })} */}
      </div>
    </div>
  );
}
