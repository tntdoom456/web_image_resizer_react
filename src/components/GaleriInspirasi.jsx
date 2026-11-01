import { useState, useEffect } from "react";

export default function GaleriInspirasi() {
  // 1. Deklarasi State untuk Data, Loading, dan Error
  const [galeri, setGaleri] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // 2. Fungsi Fetch API
  const fetchGaleri = async () => {
    setIsLoading(true);
    setErrorMsg(""); // Reset pesan error
    
    try {
      // Menggunakan endpoint mock API JSONPlaceholder
      const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=4");
      
      if (!response.ok) {
        throw new Error("Gagal mengambil data dari server");
      }
      
      const data = await response.json();
      setGaleri(data); // State Success: Set data ke dalam array
    } catch (error) {
      setErrorMsg(error.message); // State Error: Tangkap pesan gagal
    } finally {
      setIsLoading(false); // Selesai loading, apa pun hasilnya
    }
  };

  // 3. Menjalankan fetch saat komponen pertama kali dimuat (mounting)
  useEffect(() => {
    fetchGaleri();
  }, []);

  return (
    <div className="card shadow-sm border-0 mt-4 mb-5">
      <div className="card-header bg-white fw-bold py-3">
        Inspirasi Gambar Komunitas (API Eksternal)
      </div>
      <div className="card-body text-center">
        
        {/* KONDISI LOADING */}
        {isLoading && (
          <div className="text-primary my-4">
            <div className="spinner-border" role="status"></div>
            <p className="mt-2 fw-semibold">Memuat gambar dari server...</p>
          </div>
        )}

        {/* KONDISI ERROR & TOMBOL COBA LAGI */}
        {!isLoading && errorMsg && (
          <div className="text-danger my-4">
            <p className="fw-bold mb-1">Terjadi Kesalahan: {errorMsg}</p>
            <p className="text-muted small">Periksa koneksi internet Anda atau URL API.</p>
            <button onClick={fetchGaleri} className="btn btn-outline-danger mt-2 fw-bold">
              Coba Lagi Pengambilan Data
            </button>
          </div>
        )}

        {/* KONDISI SUCCESS (Render List dengan .map) */}
        {!isLoading && !errorMsg && galeri.length > 0 && (
          <div className="row g-3 text-start">
            {galeri.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card h-100 shadow-sm border-0 bg-light">
                  <img src={item.thumbnailUrl} className="card-img-top" alt={item.title} />
                  <div className="card-body p-2 text-center">
                    <span className="badge bg-secondary mb-1">Album ID: {item.id}</span>
                    <p className="card-text text-truncate text-muted" title={item.title} style={{ fontSize: "0.85rem" }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}