import React, { useEffect, useState } from "react";
import "./SearchHome.css";

// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "antd/dist/antd.css";
import {
  ClockCircleOutlined,
  TeamOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Input, Select } from "antd";
import { DatePicker, Space } from "antd";
import axios from "axios";
// import CarDetail from "../pages/CarDetail";
import { useNavigate } from "react-router-dom";

function SearchHome() {
  const { Option } = Select;

  const [waktu, setWaktu] = useState("");
  const handleChangeWaktu = (event) => {
    setWaktu(event.target.value);
  };

  const [dataList, setDataList] = useState([]);

  const handleData = async (e) => {
    setDataList([]);

    e.preventDefault();
    try {
      const res = await axios(
        "https://rent-cars-api.herokuapp.com/customer/car"
      );
      setDataList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  let navigate = useNavigate();

  const navigateDetail = (event) => {
    const id = event.target.value;
    navigate(`Search/${id}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <>
      <form onSubmit={handleData}>
        <div className="Search p-3" style={{ marginTop: "-3.5rem" }}>
          <div className="Container mx-auto" style={{ maxWidth: "80%" }}>
            <div className="card">
              <div className="card-body">
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
                          <DatePicker
                            onChange={onChange}
                          />
                        </Space>
                      </div>
                      <div className="col-lg-3">
                        <label for="selectWaktu">Waktu Jemput/Ambil</label>
                        <Select
                          placeholder="Pilih Waktu"
                          style={{ minWidth: "100%", maxWidth: "100%" }}
                          onChange={handleChangeWaktu}
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
                      className="btn-utama w-100"
                      type="submit"
                      style={{ marginTop: 20 }}
                    >
                      Cari Mobil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
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
                      className="btn btn-success w-100"
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
    </>
  );
}

export default SearchHome;
