import React from "react";
import Layout from "components/Layout";
import WriteBid from "components/bid/WriteBid";
function WritePage() {
  return (
    <Layout>
      <h1>입찰 등록</h1>
      <WriteBid />
    </Layout>
  );
}

export default WritePage;
