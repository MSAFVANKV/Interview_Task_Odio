import React from "react";

import { OURPOLICIES, MYACCOUNT, CONTACTS } from "./FooterMenu";
import FooterItems from "./FooterItems";

function ItemContainer() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 ">
      {/* First column */}

      <FooterItems Links={OURPOLICIES} title="OUR POLICIES" />

      {/* Second column */}

      {/* <FooterItems Links={RESOURCES} title="RESOURCES" /> */}
      <FooterItems Links={MYACCOUNT} title="MY ACCOUNT" />

      {/* Empty space to start the third column from the fourth column */}

      {/* Third column */}
      <FooterItems Links={CONTACTS} title="CONTACTS" />
    </div>
  );
}

export default ItemContainer;
