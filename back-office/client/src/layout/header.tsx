import { BsSearch } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setUser, setLoading } from "../redux/features/User/action";

const Header = () => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(
      setUser({
        accessToken: "",
        role: "",
      })
    );
    dispatch(setLoading(false));
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="nav navbar navbar-dark bg-dark px-5 px-sm-2 d-flex justify-content-end align-items-center">
      <div className="d-none d-md-block me-5">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
          />
          <button className="btn btn-primary input-group-prepend">
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="profile">
        <button
          onClick={logout}
          className="btn btn-danger d-flex align-items-center"
        >
          <span>
            <FiLogOut />
          </span>
          <span className="d-none ms-md-2 d-md-block">Log out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
