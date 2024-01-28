import useCommissionSetting from "./useCommissionSetting";
import { addCommission } from "../logic";

const Commission = ({
  className = "",
  token,
}: {
  className?: string;
  token: string;
}) => {
  const { register, handleSubmit, reset, carModels, isSubmitting } =
    useCommissionSetting();

  let carModelOptions: [string, string][] = [];
  // eslint-disable-next-line array-callback-return
  carModels.map((carModel) => {
    carModelOptions.push([
      carModel.id.toString(),
      carModel.brand.name + " " + carModel.category.name + " " + carModel.name,
    ]);
  });

  return (
    <form
      className={className}
      onSubmit={handleSubmit((data) => {
        addCommission(data, token);
        reset();
      })}
    >
      <h2>Commission spécifique</h2>
      <div className="col-auto col-lg-12">
        <label className="form-label" htmlFor="carModelId">
          Type
        </label>
        <select
          className="form-select"
          id="carModelId"
          {...register("carModelId")}
        >
          <option value="-1">Choose</option>
          {carModelOptions.map((option, index) => {
            return (
              <option key={`option-${index}`} value={option.at(0)}>
                {option.at(1)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-3 col-auto col-lg-12">
        <label className="form-label" htmlFor="percentage">
          Pourcentage
        </label>
        <input
          className="form-control"
          type="number"
          step="0.1"
          id="percentage"
          {...register("percentage")}
        />
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button disabled={isSubmitting} className="btn btn-outline-dark">
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default Commission;
