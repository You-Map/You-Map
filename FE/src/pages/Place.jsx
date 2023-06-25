import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../App";
import PlaceHeader from "../components/Place/PlaceHeader";
import PlaceBox from "../components/Place/PlaceBox";
import styled from "styled-components";

const PlaceList = {
  1: "정하상관(J관)",
  3: "베르크만스우정관(BW관)",
};

const dummy = {
  title: "제이관휴게실",
  purpose: "휴게",
  location: "정하상관 3층",
};

const Place = () => {
  const params = useParams();
  const placeID = params.placeID;
  const getAPI = async () => {
    try {
      const url = `${APIURL}/post/list-certified-loc/?location=${placeID}`;
      const res = await axios.get(url);
      console.log(res.data);
    } catch (err) {
      console.log("getPost error: ", err);
    }
  };

  React.useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      <PlaceHeader />
      <PlaceTitle>{PlaceList[placeID]}</PlaceTitle>
      <PlaceSubtitlte>인기 많은 장소</PlaceSubtitlte>
      <GoodPlaceContainer>
        <PlaceBox data={dummy} />
        <PlaceBox data={dummy} />
        <PlaceBox data={dummy} />
      </GoodPlaceContainer>
    </div>
  );
};

const PlaceTitle = styled.h2`
  text-align: center;
  padding: 70px;
  color: #3c6255;
  font-size: 64px;
  font-family: Gmarket Sans TTF;
  font-weight: 300;
`;
const PlaceSubtitlte = styled.h3`
  color: #000;
  font-size: 40px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  padding: 60px 60px 20px 60px;
`;

const GoodPlaceContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Place;
