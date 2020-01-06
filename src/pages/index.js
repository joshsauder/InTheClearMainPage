import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql} from "gatsby";

function IndexPage() {
  return (

    <Layout>
    
      <SEO
        title="In The Clear"
        keywords={[`In The Clear`, `Weather`, `Directions`, `Travel`, `iOS`]}
      />

    </Layout>
  );
}

export default IndexPage;