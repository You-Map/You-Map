import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../App";
import PlaceHeader from "../components/Place/PlaceHeader";
import PlaceBox from "../components/Place/PlaceBox";
import styled from "styled-components";

const PlaceList = {
  1: "정하산관(J관)",
  3: "베르크만스우정관(BW관)",
};

const dummy = {
  title: "제이관휴게실",
  purpose: "휴게",
  location: "정하산관 3층",
};

const Place = () => {
  const [dataList, setDataList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const params = useParams();
  const placeID = params.placeID;
  const getAPI = async () => {
    try {
      const url = `${APIURL}/post/list-certified-loc/?location=${placeID}`;
      const res = await axios.get(url);
      setDataList(res.data);
      setLoading(true);
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
        {loading ? (
          dataList.map((placebox) => <PlaceBox data={placebox} />)
        ) : (
          <></>
        )}
      </GoodPlaceContainer>
    </div>
  );
};

const PlaceTitle = styled.h2``;
const PlaceSubtitlte = styled.h3``;

const GoodPlaceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Place;
