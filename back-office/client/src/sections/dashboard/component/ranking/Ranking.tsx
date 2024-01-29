import Province from "./Province";
// import Category from "./Category";
import Brand from "./Brand";
import useRanking from "./useRanking";

const Ranking = ({ token }: { token: string }) => {
  const { month, year, setMonth, setYear } = useRanking();

  return (
    <>
      <header className="d-flex">
        <select
          className="form-select"
          onChange={(e) => setMonth(parseInt(e.target.value))}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <input
          type="number"
          className="form-control"
          placeholder="Year"
          onChange={(e) => setYear(parseInt(e.target.value))}
        />
      </header>
      <Brand month={month} year={year} token={token} className="col-md-4" />
      <Province month={month} year={year} token={token} className="col-md-8" />
      {/* <Category className="col-md-4" /> */}
    </>
  );
};

export default Ranking;
