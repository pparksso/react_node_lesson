import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action";
import { useNavigate } from "react-router-dom";

export default function Auth(specificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);
        // if (!res.payload.isAuth) {
        //   if (option) {
        //     navigate("/login");
        //   }
        // } else {
        //   if (adminRoute && !res.payload.isAdmin) {
        //     navigate("/");
        //   } else {
        //     if (option === false) {
        //       navigate("/");
        //     }
        //   }
        // }
      });
    }, []);
  }
  return AuthenticationCheck();
}
