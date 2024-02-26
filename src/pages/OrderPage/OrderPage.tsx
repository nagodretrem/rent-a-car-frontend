import React, { useEffect } from "react";
import "../OrderPage/orderpage.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { useLocation, useNavigate } from "react-router-dom";
import { getClaims } from "../../store/slices/tokenSlice";
import { getById } from "../../store/slices/rentalSlice";
import { getByOwnerUser } from "../../store/slices/invoiceSlice";
import { GetAllInvoiceResponse } from "../../models/invoices/response/getAllInvoiceResponse";

type Props = {};

const OrderPage = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const claims = useSelector((state: any) => state.token.claims);
  const navigate = useNavigate();
  const invoicesState = useSelector((state: any) => state.invoice);
  const ownerUser = claims?.id;
  const handleGetClaims = () => {
    dispatch(getClaims());
  };


  useEffect(() => {
    if (ownerUser) {
      dispatch(getByOwnerUser(ownerUser));
    }
  }, [dispatch, ownerUser]);

  const selectedInvoice = useSelector(
    (state: any) => state.invoice.selectedInvoice
  );
  console.log("Owner User:", ownerUser);
  const selectedInvoices = invoicesState.invoices.filter(
    (invoice: GetAllInvoiceResponse) =>
      invoice.ownerUser === parseInt(ownerUser)
  );
  console.log("selected invoice:", selectedInvoices);

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
                    Kilometre
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
                {selectedInvoices.map((invoice: GetAllInvoiceResponse) => (
                  <tr key={invoice.id}>
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
                          <p>
                            {
                              invoice.rentalResponse.carResponse.model_id
                                .brandResponse.name
                            }{" "}
                            {invoice.rentalResponse.carResponse.model_id.name}{" "}
                          </p>
                          <small>
                            <span className="text-muted">Renk: {invoice.rentalResponse.carResponse.color_id.name}</span>
                        
                            &nbsp;
                            <span className="text-muted">Kiralama Tarihi:{invoice.rentalResponse.startDate} </span> 
                            &nbsp;
                            <span className="text-muted">
                            Teslim Tarihi:{invoice.rentalResponse.endDate}
                            </span>{" "}
                           
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      {invoice.rentalResponse.carResponse.dailyPrice}{" "}
                    </td>
                    <td className="align-middle p-4">
                      {invoice.rentalResponse.carResponse.kilometer}
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">
                      {invoice.totalPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
