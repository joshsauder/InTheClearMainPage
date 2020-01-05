import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage({data}) {
  return (

    <Layout images={data.FeatureImgs}>
    
      <SEO
        title="GatsbyJS Tailwind Starter"
        keywords={[`In The Clear`, `Weather`, `Directions`, `Travel`, `iOS`]}
      />

    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query allImgsQuery{
    FeatureImgs: allFile(
      filter: {relativePath: { regex: "/undraw.*.svg/"}}
    ) {
      edges {
        node {
          relativePath
          name
          publicURL
        }
      }
    } 
  }`