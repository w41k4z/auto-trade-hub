import useProvinceRanking from "./useProvinceRanking";

const Province = ({
  className,
  token,
  month,
  year,
}: {
  className?: string;
  token: string;
  month: number;
  year: number;
}) => {
  const { provinceRanking, loading } = useProvinceRanking(token, month, year);

  let totalSoldCount = 0;
  provinceRanking.forEach((province) => {
    totalSoldCount += province.soldCount;
  });

  return (
    <div className={`card table-card ${className}`}>
      {loading ? (
        <div className="card-header">
          <h5>Loading...</h5>
        </div>
      ) : (
        <>
          <div className="card-header">
            <h5>Classement provinces</h5>
          </div>
          <div className="card-block">
            <div className="table-responsive">
              <table className="table table-hover table-borderless">
                <thead>
                  <tr>
                    <th>Province</th>
                    <th>Vente</th>
                    <th className="text-right">Moyenne</th>
                  </tr>
                </thead>
                <tbody>
                  {provinceRanking.map((province) => (
                    <tr>
                      <td>{province.provinceName}</td>
                      <td>{province.soldCount}</td>
                      <td className="text-right">
                        {(province.soldCount * 100) / totalSoldCount}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Province;
