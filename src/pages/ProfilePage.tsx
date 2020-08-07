import React from "react";
import Layout from "components/Layout";
import ProfileBio from "components/profile/ProfileBio";
import Arts from "components/arts/Arts";

function ProfilePage() {
  return (
    <Layout>
      <ProfileBio />
      <div style={{ marginTop: "3em" }}>
        <Arts />
      </div>
    </Layout>
  );
}

export default ProfilePage;
