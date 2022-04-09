import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarList.css";
import {
  ClockCircleOutlined,
  TeamOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { Input, Select } from "antd";
import { DatePicker, Space } from "antd";
import Footer from "../components/Footer";

// import { Select } from "antd";

function CarList() {
  const { Option } = Select;
  //   const { data } = useParams();

  const [dataList, setDataList] = useState([]);

  const handleData = async () => {
    // setDataList([]);

    try {
      const res = await axios(
        "https://rent-cars-api.herokuapp.com/customer/car"
      );
      setDataList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  let navigate = useNavigate();

  const navigateDetail = (event) => {
    const id = event.target.value;
    navigate(`${id}`);
  };

  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  console.log(handleData());
  return (
    <div>
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
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-3">
                      <label for="selectSopir">Pilih Sopir</label>
                      <Select
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
                        <DatePicker />
                      </Space>
                    </div>
                    <div className="col-lg-3">
                      <label for="selectWaktu">Waktu Jemput/Ambil</label>
                      <Select
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
                        id="inputPenumpang"
                        placeholder="Jumlah Penumpang"
                        suffix={<TeamOutlined style={{ color: "#cbcbcb" }} />}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <button
                    className="buttonBiru w-100"
                    style={{ marginTop: 20 }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container sectionDataList">
        <div className="row d-flex">
          {dataList?.map((item) => {
            return (
              <div className="col-lg-4 flex-row my-2">
                <div className="card h-100" key={item.id}>
                  <div className="card-body">
                    <h5 className="card-title justify-content-center">
                      <img
                        src={item.image}
                        alt="img-car"
                        style={{
                          minWidth: 270,
                          maxWidth: "100%",
                          justifyContent: "center",
                        }}
                      />
                    </h5>
                    <p>{item.name}</p>
                    <h6>{formatter.format(item.price)}/hari</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <p className="card-text">
                      <TeamOutlined /> 4 Orang
                    </p>
                    <p className="card-text">
                      <SettingOutlined /> Manual
                    </p>
                    <p className="card-text">
                      <CalendarOutlined /> Tahun 2020
                    </p>

                    <button
                      onClick={navigateDetail}
                      type="button"
                      className="btn-utama w-100"
                      value={item.id}
                    >
                      Pilih Mobil
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CarList;
