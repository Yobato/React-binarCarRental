import React from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import SearchHome from "../components/SearchHome";  
import "./Home.css"

function Home() {
  return (
    <>
      <div id="halaman-1" className="halaman-1">
        <div className="container-fluid pt-5">
          <div className="row d-flex align-items-center mt-5">
            <div className="col-lg-6">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h1
                    className="judul"
                    style={{
                      fontSize: "36px",
                      lineHeight: "54px",
                      maxWidth: "568px",
                    }}
                  >
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                  </h1>
                  <p style={{ fontSize: "14px" }}>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                  {/* <button className="btn btn-utama mb-4 fw-bold">
                    Mulai Sewa Mobil
                  </button> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 m-0">
              <img src="./img/img_car.png" className="w-100" alt="Mobil Home" />
            </div>
          </div>
        </div>
      </div>
      <SearchHome />
    </>
  );
}

export default Home;
