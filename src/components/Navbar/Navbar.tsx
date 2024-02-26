import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { clearAccessToken } from "../../store/slices/authSlice";
import tokenService from "../../services/tokenService";
import {
  getClaims,
  removeToken,
  setToken,
} from "../../store/slices/tokenSlice";

type Props = {};

const Navbar = (props: Props) => {
  let claims = useSelector((state: any) => state.token.claims);

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = tokenService.getToken();
    if (storedToken) {
      dispatch(setToken(storedToken));
      dispatch(getClaims());
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [accessToken]);

  const handleLogout = () => {
    dispatch(clearAccessToken());
    localStorage.removeItem("token");
    setLoggedIn(false);
    dispatch(removeToken());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to={""}>
          <h4>RENT A CAR</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Ana Sayfa
              </Link>
            </li>
            {claims && claims.role && claims.role[0] === "ADMIN" && (
              <li className="nav-item">
                <Link className="nav-link" to={"/admin"}>
                  Admin Panel
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
           
            {loggedIn ? (
              <>
              <Link to={"/orderpage"}>
              <button type="button" className="btn" >
               Siparişlerim
             </button>
               <button type="button" className="btn" >
               Profil
             </button>
             </Link>
              <button type="button" className="btn" onClick={handleLogout}>
                Çıkış Yap
              </button>
              
             </>
            ) : (
              <>
                <Link to="/login">
                  <button type="button" className="btn">
                    Giriş Yap
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="btn">
                    Kayıt Ol
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
