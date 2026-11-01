import { useState } from "react";
import Header from "./components/Header";
import RingkasanData from "./components/RingkasanData";
import FormPotong from "./components/FormPotong";
import DaftarGambar from "./components/DaftarGambar";
import GaleriInspirasi from "./components/GaleriInspirasi";

function App() {
  const [daftarGambar, setDaftarGambar] = useState([]);

  const handleTambahData = (dataBaru) => {
    setDaftarGambar([...daftarGambar, dataBaru]);
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Header />

      <main className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <FormPotong onTambahData={handleTambahData} />
          </div>

          <div className="col-lg-7">
            <RingkasanData total={daftarGambar.length} />

            <div className="card shadow-sm border-0 mt-4">
              <div className="card-header bg-white fw-bold py-3">Daftar Target Potongan</div>
              <div className="card-body">
                <DaftarGambar dataList={daftarGambar} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <GaleriInspirasi />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;