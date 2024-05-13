/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Category from "./components/Category";
import { useRouter } from "next/router";
import { isMobile } from 'react-device-detect';

const Home = () => {
  const router = useRouter();

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+8801832822560';
    let url;

    // Check if the user is on a mobile device
    if (isMobile) {
      url = `https://wa.me/${phoneNumber}`;
    } else {
      // If on desktop, redirect to WhatsApp Web
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }
    
    router.push(url);
  };

  return (
    <div>
      <div className="hero min-h-screen pt-28" style={{ backgroundColor: "#E8FEFF" }}>
        <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-between lg:w-11/12 md:w-11/12 w-full mx-auto">
          <img
            src="/top.jpeg"
            className="xl:max-w-lg md:max-w-lg shadow-2xl lg:order-1 md:order-1 order-2"
            style={{
              borderRadius: "80px 10px 80px 10px",
              height: "550px",
              width: "700px",
            }}
          />
          <div className="xl:text-left md:text-left text-center lg:order-2 md:order-2 order-1">
            <h1 className="mb-5 lg:text-5xl text-2xl font-bold w-full text-right">
              هواء نقي ومنعش
            </h1>
            <p className="text-right">
              🍃 مع أنظمتنا المتقدمة للضباب والرذاذ، نقدم حلولًا فعالة لتنقية
              الهواء وتحسين جودته. 🏡 اكتشف كيف يمكن لمنتجاتنا وخدماتنا تحويل
              منزلك ومكان عملك إلى ملاذ صحي.
            </p>
            <div className="mt-10 flex justify-end">
              <button
               onClick={handleWhatsAppRedirect}
                className="flex btn text-white rounded-3xl"
                style={{ backgroundColor: "#2594AF" }}
              >
                استشاره مجانية
              </button>
            </div>
            <div className="grid grid-cols-3 mt-10">
              <div>
                <h1 className="text-3xl font-bold flex">
                  87
                  <IoIosArrowForward className="ml-10 mt-6 opacity-50" />
                </h1>
                <p>اعمالنا</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold flex">
                  206
                  <IoIosArrowForward className="ml-10 mt-6 opacity-50" />
                </h1>
                <p>العملاء</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">8</h1>
                <p>نحن فخورين بالجوائز اللي حصلنا عليه</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start product section  */}

      <div>
        <Category></Category>
      </div>

      {/* end product section */}

      {/* start video section */}

      <div>
        <div
          className="min-h-screen mt-10"
          style={{ backgroundColor: "#E8FEFF" }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-serif pt-20">أعمالنا</h1>
            <p>تتجلى التزامنا بالتميز في الثقة والرضا من عملائنا.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 justify-around lg:w-10/12 md:w-10/12 w-full mx-auto">
            <div
              style={{
                backgroundImage: "url(product1.png)",
                backgroundRepeat: "no-repeat",
                height: "500px",
                transition: "transform 0.3s ease-in-out", // Transition for zoom effect
              }}
              className="bg-cover rounded overflow-hidden hover:scale-105 relative"
            >
              <div className="absolute bottom-0 right-0 p-4 text-white text-right grid grid-cols-2 gap-2">
                <button className="btn w-12">
                  <FaPlay></FaPlay>{" "}
                </button>
                <div>
                  <p className="font-bold text-xl">اسم الشركة</p>
                  <p>نظام ضباب ورذاذ كوفي شوب جلسات خارجيه</p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url(product2.png)",
                backgroundRepeat: "no-repeat",
                height: "500px",
                transition: "transform 0.3s ease-in-out", // Transition for zoom effect
              }}
              className="bg-cover rounded overflow-hidden hover:scale-105 relative"
            >
              <div className="absolute bottom-0 right-0 p-4 text-white text-right grid grid-cols-2 gap-2">
                <button className="btn w-12">
                  <FaPlay></FaPlay>{" "}
                </button>
                <div>
                  <p className="font-bold text-xl">اسم الشركة</p>
                  <p>نظام ضباب ورذاذ كوفي شوب جلسات خارجيه</p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url(product3.png)",
                backgroundRepeat: "no-repeat",
                height: "500px",
                transition: "transform 0.3s ease-in-out", // Transition for zoom effect
              }}
              className="bg-cover rounded overflow-hidden hover:scale-105 relative"
            >
              <div className="absolute bottom-0 right-0 p-4 text-white text-right grid grid-cols-2 gap-6">
                <button className="btn w-12 mr-44">
                  <FaPlay></FaPlay>{" "}
                </button>
                <div>
                  <p className="font-bold text-xl">دانكن</p>
                  <p>وصف للعمل</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-20 justify-center">
            <h2
              className="text-2xl font-bold font-serif"
              style={{ color: "#2594AF" }}
            >
              عرض جميع التقييمات من عملائنا
            </h2>
            <FaArrowRight
              className="mt-2 ml-2"
              style={{ color: "#2594AF" }}
            ></FaArrowRight>
          </div>
        </div>
      </div>

      {/* end vedio section */}

      {/* start big image section  */}

      <div>
        <div
          className="lg:w-10/12 md:w-10/12 w-full mx-auto rounded bg-cover text-right mt-10"
          style={{
            backgroundImage: "url(pahar.jpeg)",
            backgroundRepeat: "no-repeat",
            height: "",
          }}
        >
          <div className="bg-green-700 bg-opacity-30 ">
            <div className="lg:w-1/2 md:w-1/2 w-full mx-auto opacity-100">
              <h2 className="text-xl text-right font-bold text-white py-20">
                خبراء في أنظمة الضباب والرذاذ. نقدم لكم خدماتنا بكل دقة
                واحترافية، من تصميم وتركيب الضباب والرذاذ إلى الصيانة. معنا،
                اشعر بتغيير في الجو في منزلك أو مكان عملك، واستمتع بالراحة
                والجودة
              </h2>
              <p className="text-white text-right mt-4">انظمة المدن</p>
              <p className="text-white text-right pb-5">قسم الضباب والرذاذ</p>
            </div>
          </div>
        </div>
      </div>

      {/* end big image section  */}

      {/* start after big image again  */}

      <div
        className="text-center py-16 my-20"
        style={{ backgroundColor: "#044160" }}
      >
        <div className="text-white lg:w-3/5 md:w-3/5 w-full mx-auto">
          <h1 className="text-5xl font-bold font-serif mb-5">هواء نقي ومنعش</h1>
          <h3 className="text-xl font-bold">
            🔍 هل تبحث عن طرق لتحسين جودة الهواء في منزلك أو مكان عملك؟ اكتشف
            حلولنا المبتكرة لتقديم بيئة داخلية صحية ومريحة! احصل على استشارة
            مجانية اليوم واحجز زيارة مجانية لموقعك!
          </h3>
          <button onClick={handleWhatsAppRedirect} className="btn bg-white text-black mt-7">ابدأ الآن</button>
        </div>
      </div>

      {/* end after big image again  */}

      {/* start Q&A section  */}

      <div>
        <div className="lg:w-4/5 md:w-4/5 w-full mx-auto mb-20">
          <h2 className="text-center text-4xl font-bold font-serif">
            أسئلة شائعة حول كيفية تنقية الهواء وتحسين جودته
          </h2>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 text-right mt-3"
            >
              <div className="collapse-title text-xl font-medium">
                ما هي الاختلافات الرئيسية بين أنظمة الضباب والرذاذ المستخدمة
                لتقليل حرارة الصيف؟
              </div>
              <div className="collapse-content">
                <p>
                  في فصل الصيف، تتجه معظم الأعمال نحو التخفيف من حرارة الطقس
                  الحار، وذلك باستخدام أنظمة الضباب والرذاذ. وهناك بالطبع فارق
                  بين كلا النظامين. نظام الضباب: يتميز بانتشاره الواسع واستخدام
                  مضخات ذات ضغط عالي تصل قوتها إلى 100 بار، حيث تقوم بضخ الماء
                  تحت ضغط عالٍ جداً من خلال فتحات ضيقة جداً بقياسات 200 - 300 -
                  400 ميكرون. ونتيجة لهذا الضغط، يتحول الماء إلى ضباب بارد، يمكن
                  أن تكون درجته أقل من 14 درجة مئوية من درجة الحرارة المحيطة،
                  ولكنه لا يترك أثرًا على الأرض حتى على ارتفاع 2 متر.نظام
                  الرذاذ: يعتمد على استخدام مضخات عادية تصل قوتها إلى 10 بار،
                  مما يجعل جزيئات الماء أكبر من الضباب، ويترك أثرًا على الأرض
                  إذا كان الارتفاع قريبًا منها.
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 text-right mt-3"
            >
              <div className="collapse-title text-xl font-medium">
                كيف تساعد تقنية الضباب والرذاذ في تخفيف حرارة الجو في الصيف ؟
              </div>
              <div className="collapse-content">
                <p>
                  عملية تحويل الماء من الحالة السائلة إلى بخار تحدث طبيعياً في
                  الجو وتتبع قوانين فيزيائية معينة. يتطلب تحويل 1 جرام من الماء
                  إلى بخار 600 سعرة حرارية. باستخدام تقنية حديثة تسمى ديناميكية
                  الحرار، نجح العلماء في محاكاة هذه العملية الطبيعية. يتم ضخ
                  الماء بواسطة مضخة ذات ضغط عالٍ (PSI1000) في أنابيب مصممة للضغط
                  العالي. توزع فوهات صغيرة جداً بحجم يتراوح بين 2 إلى 1 ميكرون،
                  حيث يُخرج الماء منها على شكل ضباب بارد. ينتج هذا الضباب البارد
                  من آلاف جزيئات الماء الباردة، مما يسفر عن انخفاض في درجة
                  الحرارة. تعتبر هذه العملية فعالة للغاية وتُعرف علمياً باسم
                  نتائج تبادل الطاقة. (الميكرون يُعتبر جزءًا من الألف من
                  المليمتر)
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 text-right mt-3"
            >
              <div className="collapse-title text-xl font-medium">
                ماهي فوائد تركيب نظام الضباب والرذاذ ؟
              </div>
              <div className="collapse-content">
                <p>
                  تنقية الأجواء :كسائل الماء لديه القدره على استيعاب وامتصاص
                  جميع المركبات الأخرى في الجو. إذا ما أحسن توزيع مخارج الضباب
                  في الموقع يمكن لقطرات الماء امتصاص الغبار والجزيئات الفردية
                  وإزالة الروائح تماماً من الجو في عملية فيزيائية تعرف باسم
                  (الالتصاق) . هنا يمكن أن تكون المياه وسيلة فعالة في تنقية
                  الأجواء من الغبار والسيطرة على الروائح . - تخفيض درجة الحرارة
                  :- تمتص حبيبات الماء فور خروجها من فوهات الضباب متناهية الصغر
                  بدعم من قوة مضخات الضغط العالي الطاقة من الهواء في شكل حرارة
                  مما يؤدي إلى انخفاض كبير في درجة الحرارة المحيطة . لأن الماء
                  لدية القدرة على استيعاب المزيد من الحرارة أكثر من أي مادة أخرى
                  . أن نظام الضباب هو الأسلوب الأمثل لتبريد الهواء الطلق . -
                  زيادة نسبة الرطوبة :كما يزيد نظام الضباب في نسبة الرطوبة في
                  الجو . ويلطف الأجواء الصحراوية والجافة . ومن خلال التحكم في
                  تدفق الهواء ومستوى الرطوبة ممكن أن نوفر أجواء مصطنعة يسهل
                  التحكم فيها بدقة للاستخدامات الزراعية والصناعية المختلفة . -
                  تجميل الموقع :عندما تكون ذرات الهواء مشبعة بالرطوبة بنسبة 100%
                  ولا يمكنها امتصاص المزيد من الرطوبة وبحجم 5ميكرون سيبقى الماء
                  في حالته السائلة على شكل رذاذ معلق في الهواء وذلك سوف يخلق
                  منظر طبيعي
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 text-right mt-3"
            >
              <div className="collapse-title text-xl font-medium">
                كم نسبة تبريد الجو بعد استخدم النظام ؟
              </div>
              <div className="collapse-content">
                <p>
                  نظام الضباب من أكثر الاستخدامات لنظام الضباب استخدام نظام
                  الضباب للتبريد في الهواء الطلق حيث ممكن أن تخفض أنظمة الضباب
                  درجة الحرارة إلى 15 - 20 درجة مئوية وفي حال وجود مراوح يقوم
                  بتخفيض درجة الحرارة بين معدل 20 - 23 درجة مئوية وهذا يساعد
                  بشكل كبير في تحسين البيئة وتبريد الجو في الحدائـــق والمتنزهات
                  ومزارع الماشية والدواجن ومواقــــع البناء وأماكن العمل
                  التجارية (كفيهات -مطاعم - منتزهات - وشاليهات -فعاليات )
                  والصناعية . نظام الرذاذيقوم بتخفض درجة الحرارة إلى 8 - 12 درجة
                  مئوية وهذا يساعد بشكل كبير في تحسين البيئة وزيادت الرطوبة
                  يستخدم في حدائق المنزل الصغيرة ولا ينصح به للمنشأت التجارية
                  والصناعية فيما ذلك مزراع التي تحتاج لنسبة رطوبة
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 text-right mt-3"
            >
              <div className="collapse-title text-xl font-medium">
                هل يمكنني استخدام أنظمتكم في مكان عملي؟
              </div>
              <div className="collapse-content">
                <p>
                  بالتأكيد، تستطيع تركيب أنظمتنا في مكان عملك لتوفير بيئة عمل
                  نقية وصحية تعزز الإنتاجية وراحة الموظفين.
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 text-right mt-3"
            >
              <div className="collapse-title text-xl font-medium">
                كيف يمكنني الحصول على أنظمتكم؟
              </div>
              <div className="collapse-content">
                <p>
                  يمكنك التواصل معنا الآن لمعرفة المزيد عن منتجاتنا وخدماتنا،
                  ونحن سنكون سعداء بتقديم المساعدة وتوجيهك نحو الحلول المناسبة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end Q&A section  */}

      

    </div>
  );
};

export default Home;

