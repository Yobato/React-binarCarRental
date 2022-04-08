import "./SearchHome.css";

// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "antd/dist/antd.css";
import { ClockCircleOutlined, TeamOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import { DatePicker, Space } from "antd";
// import CarDetail from "../pages/CarDetail";
import { useNavigate } from "react-router-dom";

function SearchHome() {
  const { Option } = Select;

  let navigate = useNavigate();

  const navigateDataList = () => {
    navigate(`Search`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      {/* <form onSubmit={handleData}> */}
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
                        <DatePicker onChange={onChange} />
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
                    className="btn-utama w-100"
                    onClick={navigateDataList}
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
    </>
  );
}

export default SearchHome;
