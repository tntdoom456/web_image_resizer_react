import { useState } from "react";

export default function FormPotong({ onTambahData }) {
  const [nama, setNama] = useState("");
  const [lebar, setLebar] = useState(800);
  const [tinggi, setTinggi] = useState(600);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama) return alert("Nama file wajib diisi!");
    
    onTambahData({
      id: Date.now(), // Menghasilkan Key Unik
      nama,
      lebar,
      tinggi
    });
    setNama(""); // Reset form setelah submit
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white fw-bold py-3">Tambah Target Potongan</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Nama File Target</label>
            <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Misal: banner-promo.jpg" />
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label fw-semibold">Lebar (px)</label>
              <input type="number" className="form-control" value={lebar} onChange={(e) => setLebar(Number(e.target.value))} />
            </div>
            <div className="col">
              <label className="form-label fw-semibold">Tinggi (px)</label>
              <input type="number" className="form-control" value={tinggi} onChange={(e) => setTinggi(Number(e.target.value))} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">Tambah Target</button>
        </form>
      </div>
    </div>
  );
}