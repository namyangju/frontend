import React from "react";
import styled from "styled-components";
import Profile from "components/user/Profile";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BidUserName from "components/bid/BidUserName";

function ProfileBio() {
  const { _id } = useSelector(
    (state: RootState) => state.auth.data || { _id: "" }
  );
  return (
    <Bio>
      <div className="image">
        <Profile size="120px" />
      </div>
      <div className="info">
        <h1 className="name">
          <BidUserName id={_id} />
        </h1>
        <p className="introduce">
          Pariatur commodo et elit mollit ut Lorem sit ea cupidatat. Excepteur
          ullamco id deserunt fugiat ea cupidatat. Esse in commodo ad amet
          pariatur. Consequat in in ex nisi nisi in laboris nulla id.
        </p>
      </div>
    </Bio>
  );
}

const Bio = styled.div`
  display: flex;
  align-items: center;
  .info {
    margin-left: 1em;
  }
`;

export default ProfileBio;
