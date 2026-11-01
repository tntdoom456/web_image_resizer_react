import KartuGambar from "./KartuGambar";

export default function DaftarGambar({ dataList }) {
  if (dataList.length === 0) {
    return (
      <div className="alert alert-warning text-center shadow-sm">
        Belum ada data Metadata Gambar
      </div>
    );
  }

  return (
    <div className="row">
      {/* Render list menggunakan .map() dan Key unik */}
      {dataList.map((item) => (
        <KartuGambar key={item.id} data={item} />
      ))}
    </div>
  );
}