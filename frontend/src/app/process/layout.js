import CartBreadcrumbs from "@/components/CartScreen/CartBreadcrumbs";
import React from "react";

const ProcessLayout = ({ children }) => {
  return (
    <div>
      <CartBreadcrumbs />
      {children}
    </div>
  );
};

export default ProcessLayout;
