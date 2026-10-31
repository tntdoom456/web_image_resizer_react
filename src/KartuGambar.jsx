export default function KartuGambar({ data }) {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100 shadow-sm border-0 bg-light">
        <div className="card-body text-center">
          <h6 className="fw-bold">{data.nama}</h6>
          <span className="badge bg-secondary">
            Resolusi Target: {data.lebar} x {data.tinggi} px
          </span>
        </div>
      </div>
    </div>
  );
}