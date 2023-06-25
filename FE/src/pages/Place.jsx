import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../App";

const Place = () => {
  const params = useParams();
  const getAPI = async () => {
    try {
      const url = `${APIURL}/post/list-certified-loc/?location=${params.placeID}`;
      //console.log(url);
      const res = await axios.get(url);
      console.log(res.data);
    } catch (err) {
      console.log("getPost error: ", err);
    }
  };
  getAPI();
  return <div></div>;
};

export default Place;
