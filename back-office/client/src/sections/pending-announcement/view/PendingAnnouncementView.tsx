import Announcement from "../component/Announcement";
import usePendingAnnouncement from "../usePendingAnnouncement";

const PendingAnnouncementView = () => {
  const { loading, announcements } = usePendingAnnouncement();
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : announcements.length === 0 ? (
        <div className="text-center">Aucune annonce en attente</div>
      ) : (
        announcements.map((announcement) => (
          <>
            <div className="mt-5">
              <Announcement announcement={announcement} />
              <div className="container px-4 text-center mt-4">
                <div className="row gx-5">
                  <div className="col">
                    <button className="px-3 btn btn-outline-danger">
                      Refuser
                    </button>
                  </div>
                  <div className="col">
                    <button className="px-3 btn btn-outline-success">
                      Valider
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))
      )}
    </>
  );
};

export default PendingAnnouncementView;
