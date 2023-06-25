import React from "react";
import axios from "axios";
import { APIURL } from "../App";

const Place = () => {
  const params = React.useParams();
  const getAPI = async () => {
    try {
      const url = `${APIURL}/post/list-certified-loc/${params.placeID}`;
      const res = await axios.get(url);
      console.log(res.data);
    } catch (err) {
      console.log("getPost error: ", err);
    }
  };
  return <div></div>;
};

export default Place;
