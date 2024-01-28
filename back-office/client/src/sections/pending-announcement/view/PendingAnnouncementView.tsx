import Announcement from "../component/Announcement";

const PendingAnnouncementView = () => {
  return (
    <div>
      <div className="mb-5">
        <Announcement />
        <div className="container px-4 text-center mt-4">
          <div className="row gx-5">
            <div className="col">
              <button className="px-3 btn btn-outline-danger">Refuser</button>
            </div>
            <div className="col">
              <button className="px-3 btn btn-outline-success">Valider</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-5">
        <Announcement />
        <div className="container px-4 text-center mt-4">
          <div className="row gx-5">
            <div className="col">
              <button className="px-3 btn btn-outline-danger">Refuser</button>
            </div>
            <div className="col">
              <button className="px-3 btn btn-outline-success">Valider</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAnnouncementView;
