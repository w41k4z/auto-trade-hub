type ActivityProps = {
  title: string;
  content: string;
  icon: JSX.Element;
  textColor: string;
  bgColor: string;
};

const Activity = ({
  title,
  content,
  icon,
  textColor,
  bgColor,
}: ActivityProps) => {
  return (
    <div className="card">
      <div className="card-block">
        <div className="row align-items-center p-2">
          <div className="col-8">
            <h4 className={`${textColor} f-w-600`}>{content}</h4>
            <h6 className="text-muted m-b-0">{title}</h6>
          </div>
          <div className="col-4 text-right">
            <span style={{ fontSize: "40px" }}>{icon}</span>
          </div>
        </div>
      </div>
      <div className={`card-footer ${bgColor}`}></div>
    </div>
  );
};

export default Activity;
