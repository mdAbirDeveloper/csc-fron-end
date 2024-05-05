import Link from "next/link";
import React from "react";

const DeshboardLayout = ({ children }) => {
  return (
    <div className="text-center">
      <Link className="btn btn-info mt-3 mr-3" href={"/deshboard/products"}>
        Add Products
      </Link>
      <Link
        className="btn btn-warning mt-3 mr-3"
        href={"/deshboard/products/remove"}
      >
        Remove Products
      </Link>
      <Link className="btn btn-info mt-3 mr-3" href={"/deshboard/projects"}>
        Add Projects
      </Link>
      <Link
        className="btn btn-warning mt-3 mr-3"
        href={"/deshboard/projects/remove"}
      >
        Remove Projects
      </Link>
      <Link
        className="btn btn-info mt-3 mr-3"
        href={"/deshboard/client"}
      >
        Add Review
      </Link>
      <Link
        className="btn btn-warning mt-3 mr-3"
        href={"/deshboard/client/remove"}
      >
        Remove Review
      </Link>
      <Link
        className="btn btn-warning mt-3 mr-3"
        href={"/deshboard/messages/remove"}
      >
        Manage Message
      </Link>
      <div>{children}</div>
    </div>
  );
};

export default DeshboardLayout;
