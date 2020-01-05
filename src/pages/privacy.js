import React from "react";

import Privacy from "../components/privacy";
import SEO from "../components/seo";

function PrivacyPage() {
  return (

    <Privacy>
    
      <SEO
        title="Privacy Policy"
        keywords={[`In The Clear`, `privacy`, `policy`, `weather`]}
      />

    </Privacy>
  );
}

export default PrivacyPage;
