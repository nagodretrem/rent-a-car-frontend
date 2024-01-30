import React from 'react'
import "../../styles/searcform.css"

type Props = {}

const SearchForm = (props: Props) => {
  return (
    <div className="search-form">
        <form className="form-homepage">
          <div className="row first-row">
            <div className="col-6 row-search">
              <label className="form-label mt-3">Teslim Alış Yeri</label>
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="İl, ilçe ya da havalimanı"
                  className="form-control form-control-lg"
                />
                  
                
              </div>
            </div>
            <div className="col-6 row-search">
              <label className="form-label mt-3">Teslim Ediş Yeri</label>
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search "
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="İl, ilçe ya da havalimanı"
                  className="form-control form-control-lg "
                />
              </div>
            </div>
          </div>
          <div className="row second-row">
            <div className="col-4 row-search">
              <label className="form-label mt-3">Teslim Alış Tarihi</label>
              <div className="mb-3 input-group">
                <input
                  type="date"
                  placeholder=""
                  className="form-control form-control-lg"
                />
                <input
                  type="time"
                  placeholder=""
                  className="form-control form-control-lg"
                />

              </div>
            </div>
            <div className="col-4 row-search">
              <label className="form-label mt-3">Teslim Ediş Tarihi</label>
              <div className="mb-3 input-group">
                <input
                  type="date"
                  placeholder=""
                  className="form-control form-control-lg"
                />
                 <input
                  type="time"
                  placeholder=""
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="col-4 d-flex align-items-center mt-2 justify-content-center button-show-car">
              <button type="button" className="btn btn-dark homepage-button">
                Araç Bul
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default SearchForm