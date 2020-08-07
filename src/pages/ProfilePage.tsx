import React from "react";
import Layout from "components/Layout";
import ProfileBio from "components/profile/ProfileBio";
import Arts from "components/arts/Arts";
import { useSelector } from "react-redux";
import { RootState } from "store";
import BidList from "components/bid/BidList";

function ProfilePage() {
  const _id = useSelector((state: RootState) => state.auth.data?._id || "");
  return (
    <Layout>
      <ProfileBio />
      <div style={{ marginTop: "3em" }}>
        <Arts query={"author=" + _id} />
      </div>
      <div style={{ marginTop: "3em" }}>
        <BidList query={"author=" + _id} />
      </div>
    </Layout>
  );
}

export default ProfilePage;
