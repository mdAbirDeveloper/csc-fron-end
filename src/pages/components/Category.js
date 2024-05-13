/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Category = () => {
  //console.log(data);
  return (
    <div style={{maxWidth: '1300px',}} className="mx-auto mt-28">
      <div className="mx-auto  lg:w-full md:w-full w-11/12">
        <h1 className="text-center my-6 font-bold xl:text-4xl md:text-3xl text-2xl xl:w-3/4 md:w-3/4 w-full mx-auto py-2">
          أقسام الضباب والرذاذ
        </h1>
        <p className="text-center">
          استكشف مجموعتنا المتنوعة من منتجات الضباب والرذاذ لتحصل على أفضل
          النتائج
        </p>
        <div>
          <div className="grid xl:grid-cols-6 mt-10 md:grid-cols-4 grid-cols-2 gap-3 justify-around relative group">
            <Link href={"components/products/mistFan"}>
              <div
                className="text-center bg-cover relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: "url(coller.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  height: "270px", // Set background height to fit content
                }}
              >
                <div className="absolute h-full inset-0 bg-black opacity-20"></div>
                <p className="mt-32 text-xl font-serif font-bold text-white relative z-10">
                  مراوح ضباب
                </p>
              </div>
            </Link>
            <Link href={"components/products/filter"}>
              <div
                className="text-center bg-cover relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: "url(filter.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  height: "270px",  // Set background height to fit content
                }}
              >
                <div className="absolute h-full inset-0 bg-black opacity-30"></div>
                <p className="mt-32 text-xl font-serif font-bold text-white relative z-10">
                  فلاتر
                </p>
              </div>
            </Link>
            <Link href={"components/products/hydraulicValves"}>
              <div
                className="text-center bg-cover relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: "url(bolt.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  height: "270px",  // Set background height to fit content
                }}
              >
                <div className="absolute h-full inset-0 bg-black opacity-30"></div>
                <p className="mt-32 text-xl font-serif font-bold text-white relative z-10">
                  ليات هيدروليك
                </p>
              </div>
            </Link>
            <Link href={"components/products/fogNuzzles"}>
              <div
                className="text-center bg-cover relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: "url(bolt2.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  height: "270px",  // Set background height to fit content
                }}
              >
                <div className="absolute h-full inset-0 bg-black opacity-30"></div>
                <p className="mt-32 text-xl font-serif font-bold text-white relative z-10">
                  فوهات الضباب
                </p>
              </div>
            </Link>
            <Link href={"components/products/fogAndMistPumps"}>
              <div
                className="text-center bg-cover relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: "url(motor.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  height: "270px",  // Set background height to fit content
                }}
              >
                <div className="absolute h-full inset-0 bg-black opacity-30"></div>
                <p className="mt-32 text-xl font-serif font-bold text-white relative z-10">
                  مضخات الضباب والرذاذ
                </p>
              </div>
            </Link>
            <Link href={"components/products/connectors"}>
              <div
                className="text-center bg-cover relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: "url(nut.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  height: "270px",  // Set background height to fit content
                }}
              >
                <div className="absolute h-full inset-0 bg-black opacity-30"></div>
                <p className="mt-32 text-xl font-serif font-bold text-white relative z-10">
                  الوصلات وملحقاتها
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
