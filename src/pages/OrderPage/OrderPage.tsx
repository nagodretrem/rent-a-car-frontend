import React from "react";
import "../OrderPage/orderpage.css";

type Props = {};

const OrderPage = (props: Props) => {
  return (
    <div className="container px-3 my-5 clearfix">
      <div className="card">
        <div className="card-header">
          <h2>Siparişlerim</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered m-0">
              <thead>
                <tr>
                  <th
                    className="text-center py-3 px-4"
                    style={{ minWidth: "400px" }}
                  >
                    Ürün Adı &amp; Detayları
                  </th>
                  <th
                    className="text-right py-3 px-4"
                    style={{ width: "100px" }}
                  >
                    Günlük Ücret
                  </th>
                  <th
                    className="text-center py-3 px-4"
                    style={{ width: "120px" }}
                  >
                    Quantity
                  </th>
                  <th
                    className="text-right py-3 px-4"
                    style={{ width: "100px" }}
                  >
                    Toplam ücret
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">
                    <div className="row media align-items-start">
                        <div className="col-5">
                      <img
                        src="https://megarentacar.com/tema/genel/uploads/araclar/renault-clio-hb_1.png"
                        style={{ width: "150px" }}

                        alt=""
                      />
                      </div>
                      <div className="col-7 media-body">
                        <a href="#" className="d-block text-dark">
                          Product 1
                        </a>
                        <small>
                          <span className="text-muted">Color:</span>
                          <span
                            className="ui-product-color ui-product-color-sm align-text-bottom"
                            style={{ background: "#e81e2c" }}
                          ></span>{" "}
                          &nbsp;
                          <span className="text-muted">Size: </span> EU 37
                          &nbsp;
                          <span className="text-muted">Ships from: </span> China
                        </small>
                      </div>
                    </div>
                  </td>
                  <td className="text-right font-weight-semibold align-middle p-4">
                    $57.55
                  </td>
                  <td className="align-middle p-4">
                    <input
                      type="text"
                      className="form-control text-center"
                      value="2"
                    />
                  </td>
                  <td className="text-right font-weight-semibold align-middle p-4">
                    $115.1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
