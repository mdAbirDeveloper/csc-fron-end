import React from "react";
import Category from "../Category";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>ارفع أداء نظامك: استكشف مجموعة المكونات لدينا</title>
      </Head>
      <div>
        <Category></Category>
      </div>
    </div>
  );
};

export default index;
