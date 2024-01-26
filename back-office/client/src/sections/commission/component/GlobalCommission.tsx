import { addGlobalCommission } from "../logic";
import useGlobalCommissionSetting from "./useGlobalCommissionSetting";

const GlobalCommission = ({ className = "" }: { className?: string }) => {
  const { handleSubmit, register, reset } = useGlobalCommissionSetting();

  return (
    <form
      className={className}
      onSubmit={handleSubmit((data) => {
        addGlobalCommission(data);
        reset();
      })}
    >
      <h2>Commission globale</h2>
      <div className="col-auto col-lg-12"></div>
      <div className="mt-3 col-auto col-lg-12">
        <label className="form-label" htmlFor="percentage">
          Pourcentage
        </label>
        <input
          className="form-control"
          type="number"
          id="percentage"
          {...register("percentage")}
        />
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-outline-dark">Sauvegarder</button>
      </div>
    </form>
  );
};

export default GlobalCommission;
