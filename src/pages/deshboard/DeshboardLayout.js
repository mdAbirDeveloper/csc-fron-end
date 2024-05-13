import Link from "next/link";
import React from "react";

const DeshboardLayout = ({ children }) => {
  return (
    <div className="text-center" dir="ltr">
      <Link className="btn btn-info mt-3 mr-3" href={"/deshboard/mistFan"}>
        Add Mist Fan
      </Link>
      <Link className="btn bg-yellow-400 mt-3 mr-3" href={"/deshboard/removeFan"}>
        remove MistFan
      </Link>

      <Link className="btn btn-info mt-3 mr-3" href={"/deshboard/connectors"}>
        Add Connectors
      </Link>
      <Link className="btn bg-yellow-400  mt-3 mr-3" href={"/deshboard/removeConnectors"}>
        Remove Connectors
      </Link>

      <Link className="btn btn-info mt-3 mr-3" href={"/deshboard/filter"}>
        Add Filters
      </Link>
      <Link className="btn bg-yellow-400  mt-3 mr-3" href={"/deshboard/removeFilter"}>
        remove Filters
      </Link>


      <Link
        className="btn btn-info mt-3 mr-3"
        href={"/deshboard/fogAndMistPumps"}
      >
        Add Pumps
      </Link>
      <Link
        className="btn bg-yellow-400  mt-3 mr-3"
        href={"/deshboard/removePumps"}
      >
        Remove Pumps
      </Link>

      <Link className="btn btn-info mt-3 mr-3" href={"/deshboard/fogNuzzles"}>
        Add Nuzzles
      </Link>
      <Link className="btn bg-yellow-400  mt-3 mr-3" href={"/deshboard/removeNuzzles"}>
        Remove Nuzzles
      </Link>

      <Link
        className="btn btn-info mt-3 mr-3"
        href={"/deshboard/hydraulicValves"}
      >
        Add valves
      </Link>
      <Link
        className="btn bg-yellow-400  mt-3 mr-3"
        href={"/deshboard/removeValves"}
      >
        Remove valves
      </Link>
      <Link
        className="btn btn-warning mt-3 mr-3"
        href={"/deshboard/products/remove"}
      >
        Manage All products
      </Link>
      <div>{children}</div>
    </div>
  );
};

export default DeshboardLayout;
