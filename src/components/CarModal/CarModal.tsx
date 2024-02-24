import { FC } from "react";
import { GetAllCarResponse } from "../../models/cars/response/getAllCarResponse";

interface CarModalProps {
    open: boolean;
    onClose: () => void;
    selectedCar: GetAllCarResponse | null;
  }
  
  const CarModal: FC<CarModalProps> = (props) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        props.onClose();
      }
    };
    return (
      <div
        className={`modal ${props.open ? "display-block" : "display-none"}`}
        onClick={handleOverlayClick}
      >
        <div className="modal-main">
          <div className="modal-head">
            <h5> </h5>
          </div>
          <div className="modal-body">
            {props.selectedCar && (
              <div>
                <h4>{props.selectedCar.model_id.brandResponse.name}</h4>
                <p className="card-text">
                  <span className="logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-speedometer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                      <path
                        fillRule="evenodd"
                        d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
                      />
                    </svg>
                  </span>
                  500 KM
                </p>
                <p className="card-text">
                  <span className="logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-blockquote-right"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm10.113-5.373a7 7 0 0 0-.445-.275l.21-.352q.183.111.452.287.27.176.51.428.234.246.398.562.164.31.164.692 0 .54-.216.873-.217.328-.721.328-.322 0-.504-.211a.7.7 0 0 1-.188-.463q0-.345.211-.521.205-.182.569-.182h.281a1.7 1.7 0 0 0-.123-.498 1.4 1.4 0 0 0-.252-.37 2 2 0 0 0-.346-.298m-2.168 0A7 7 0 0 0 10 6.352L10.21 6q.183.111.452.287.27.176.51.428.234.246.398.562.164.31.164.692 0 .54-.216.873-.217.328-.721.328-.322 0-.504-.211a.7.7 0 0 1-.188-.463q0-.345.211-.521.206-.182.57-.182h.281a1.7 1.7 0 0 0-.124-.498 1.4 1.4 0 0 0-.251-.37 2 2 0 0 0-.347-.298M13 3a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0V3z" />
                    </svg>
                  </span>
                  5
                </p>
                <p className="card-text">Model: {props.selectedCar.model_id.name}</p>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => props.onClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CarModal;
  