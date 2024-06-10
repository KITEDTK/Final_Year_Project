
export const Dashboard = () => {
    
  return (
    <div className="card card-primary card-outline">
      <div className="card-header">
        <h3 className="card-title">
          <i className="far fa-chart-bar"></i>
          Bar Chart
        </h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus"></i>
          </button>
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="remove"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <div id="bar-chart" style={{ height: '300px' }}>
        </div>
      </div>
    </div>
  );
};
