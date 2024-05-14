import Link from "next/link";
import React from "react";

const DeshboardLayout = ({ children }) => {
  return (
    <div className="text-center" dir="ltr">
      <Link className="btn btn-primary" href={'/deshboard/products'}>add Product</Link>
      <Link className="btn bg-yellow-500 ml-10" href={'/deshboard/products/remove'}>remove Product</Link>
      <div>{children}</div>
    </div>
  );
};

export default DeshboardLayout;
