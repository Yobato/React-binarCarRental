import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ClockCircleOutlined,
  TeamOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import "./CarDetail.css";
import axios from "axios";

import { Input, Select } from "antd";
import { DatePicker, Space } from "antd";
import Footer from "../components/Footer";

function CarDetail() {
  const { Option } = Select;
  const [dataDetail, setDataDetail] = useState({});

  const { id } = useParams();

  const HandleDetail = async (id) => {
    try {
      const res = await axios(
        `https://rent-cars-api.herokuapp.com/customer/car/${id}`
      );
      setDataDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleDetail(id);
  });

  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <>
      <div
        className="biru"
        style={{ backgroundColor: "#f1f3ff", paddingBottom: "9.5rem" }}
      >
        <p style={{ display: "none" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="Search p-3 " style={{ marginTop: "-4.5rem" }}>
        <div className="Container mx-auto" style={{ maxWidth: "80%" }}>
          <div className="card">
            <div className="card-body">
              <h6 class="card-title">Pencarianmu</h6>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-3">
                      <label for="selectSopir">Pilih Sopir</label>
                      <Select
                        disabled
                        placeholder="Pilih Sopir"
                        style={{ minWidth: "100%", maxWidth: "100%" }}
                        id="selectSopir"
                      >
                        <Option value={"Dengan Sopir"}>Dengan Sopir</Option>
                        <Option value={"Tanpa Sopir"}>
                          Tanpa Sopir (Lepas Kunci)
                        </Option>
                      </Select>
                    </div>
                    <div className="col-lg-3">
                      <label for="selectDate">Pilih Tanggal</label>
                      <Space direction="vertical" id="selectDate">
                        <DatePicker disabled />
                      </Space>
                    </div>
                    <div className="col-lg-3">
                      <label for="selectWaktu">Waktu Jemput/Ambil</label>
                      <Select
                        disabled
                        placeholder="Pilih Waktu"
                        style={{ minWidth: "100%", maxWidth: "100%" }}
                        id="selectWaktu"
                        suffixIcon={<ClockCircleOutlined />}
                      >
                        <Option value={"08.00 WIB"}>08.00 WIB</Option>
                        <Option value={"09.00 WIB"}>09.00 WIB</Option>
                        <Option value={"10.00 WIB"}>10.00 WIB</Option>
                        <Option value={"11.00 WIB"}>11.00 WIB</Option>
                        <Option value={"12.00 WIB"}>12.00 WIB</Option>
                      </Select>
                    </div>
                    <div className="col-lg-3">
                      <label for="inputPenumpang">
                        Jumlah Penumpang [Optional]
                      </label>
                      <Input
                        disabled
                        id="inputPenumpang"
                        placeholder="Jumlah Penumpang"
                        suffix={<TeamOutlined style={{ color: "#cbcbcb" }} />}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-2">
                  <button
                    className="buttonBiru w-100"
                    style={{ marginTop: 20 }}
                  >
                    Edit
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-auto mx-auto" style={{ marginTop: "20rem" }}>
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
                <img
                  src={dataDetail.image}
                  alt="detail-Mobil"
                  style={{
                    minWidth: 270,
                    maxWidth: "100%",
                    justifyContent: "center",
                  }}
                />
                <h4>{dataDetail.name}</h4>
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
                    <p>{formatter.format(dataDetail.price)}</p>
                  </div>
                </div>

                <button className="btn-utama w-100">
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="next d-flex justify-content-center mt-3">
          <button className="btn-utama">Lanjutkan Pembayaran</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarDetail;
