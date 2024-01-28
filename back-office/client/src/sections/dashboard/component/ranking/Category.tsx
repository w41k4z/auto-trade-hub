const Category = ({ className }: { className?: string }) => {
  return (
    <div className={`card table-card ${className}`}>
      <div className="card-header">
        <h5>Top 5 catégories</h5>
      </div>
      <div className="card-block">
        <div className="table-responsive">
          <table className="table table-hover table-borderless">
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Vente</th>
                <th className="text-right">Moyenne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Familiale 7 places</td>
                <td>3,562</td>
                <td className="text-right">56.23%</td>
              </tr>
              <tr>
                <td>Pickup</td>
                <td>2,650</td>
                <td className="text-right">25.23%</td>
              </tr>
              <tr>
                <td>4x4</td>
                <td>956</td>
                <td className="text-right">12.45%</td>
              </tr>
              <tr>
                <td>Sedan</td>
                <td>689</td>
                <td className="text-right">8.65%</td>
              </tr>
              <tr>
                <td>Coupé</td>
                <td>560</td>
                <td className="text-right">3.56%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
