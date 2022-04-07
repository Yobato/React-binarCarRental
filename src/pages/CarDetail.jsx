import React from "react";
import {
  TeamOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import "./CarDetail.css";

function CarDetail() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h4>Tentang Paket</h4>
                <h6>Include</h6>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h6>Exclude</h6>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h4>Refund, Reschedule, Overtime</h4>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <img alt="detail-Mobil" />
                <h4>Nama/Tipe Mobil</h4>
                <div className="row">
                  <div className="col-sm-12 d-flex align-items-center">
                    <TeamOutlined className="me-1" /> 4 Orang
                    <SettingOutlined className="me-1 ms-2" /> Manual
                    <CalendarOutlined className="me-1 ms-2" /> Tahun 2020
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-between">
                    <p>Total</p>
                    <p>Rp 430.000</p>
                  </div>
                </div>

                <button className="btn-utama w-100">Lanjutkan Pembayaran</button>
              </div>
            </div>
          </div>
        </div>
        <div className="next d-flex justify-content-center mt-3">
          <button className="btn-utama">Lanjutkan Pembayaran</button>
        </div>
      </div>
    </>
  );
}

export default CarDetail;
