import Image from "next/image";
import bgImage from "@/assets/images/bg.svg";
import ComplementaryIcon from "@/assets/icons/complementary";
import InterconnectedIcon from "@/assets/icons/interconnected";
import EffectiveLearningIcon from "@/assets/icons/effective-learning";

export default function Home() {
  return (
    <div className="container w-auto">
      {/* Base */}
      <div className="h-screen relative">
        {/* Background Image */}
        <div className="bg-primary-300 full-width h-full absolute -z-10">
          <Image src={bgImage} layout="fill" objectFit="cover" alt="" />
        </div>

        {/* Body */}
        <div className="flex items-center h-full">
          <div className="max-w-[800px] mx-auto px-3">
            <h2 className="font-heading-3 text-button-frames ">
              منهج العلوم المُطور
            </h2>

            <div className="text-neutral-400">
              <p className="text-justify font-highlight-accent md:leading-7 mt-6">
                منصة تعليمية تفاعلية من إعداد الباحثة جيهان زايد، تهدف إلى دمج
                العلوم والتكنولوجيا والهندسة والفنون والرياضيات في تجربة تعليمية
                متكاملة، من خلال وحدات دراسية وأنشطة عملية مبتكرة، تدعم الإبداع
                وتنمي مهارات القرن الحادي والعشرين لدى الطلاب.
              </p>
              <div className="flex items-center gap-x-2 mt-5 font-content-bold">
                <a
                  href=""
                  className="block p-2.5 px-6 bg-primary-100 rounded-3xl"
                >
                  <span>عرض المناهج</span>
                </a>
                <a
                  href=""
                  className="block p-2.5 px-6 border border-primary-100 hover:bg-primary-100 transition-colors rounded-3xl"
                >
                  <span>تواصل معنا</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        className="relative py-12 px-3 flex flex-col justify-center"
        id="features"
      >
        {/* Background Image */}
        <div className="bg-neutral-400 full-width h-full absolute -z-10" />

        <div className="text-center">
          <div className="text-primary font-heading-4">مميزات المناهج</div>
          <div className="font-highlight-accent mt-2 mb-6">
            استعراض الميزات الرئيسة للمناهج المطورة
          </div>
          <div className="h-0.5 w-8 bg-primary mx-auto" />
        </div>
        <div className="flex flex-col items-center min-[1400px]:items-start min-[1400px]:flex-row mt-10 min-[1400px]:mt-16">
          <div className="feature text-center">
            <ComplementaryIcon className="icon-16 min-[1400px]:icon-20 rounded-full p-2.5 min-[1400px]:p-4 mx-auto shadow-md mb-3" />
            <div className="font-feature-bold">متكاملة</div>
            <div className="font-content-accent max-w-[350px]">
              منهج متكامل يجمع بين العلوم والتكنولوجيا والهندسة والفنون
              والرياضيات، مما يعزز التفكير النقدي والإبداع لدى الطلاب.
            </div>
          </div>
          <div className="self-center h-[30px] my-3 min-[1400px]:h-[80px] w-0.5 bg-neutral-500 mx-auto" />
          <div className="feature text-center">
            <InterconnectedIcon className="icon-16 min-[1400px]:icon-20 rounded-full p-2.5 min-[1400px]:p-4 mx-auto shadow-md mb-3" />
            <div className="font-feature-bold">مترابطة</div>
            <div className="font-content-accent max-w-[350px]">
              وحدات دراسية مصممة لتكمل بعضها البعض، مما يسهل على الطلاب فهم
              الروابط بين المواضيع المختلفة وتطبيق المعرفة بشكل عملي.
            </div>
          </div>
          <div className="self-center h-[30px] my-3 min-[1400px]:h-[80px] w-0.5 bg-neutral-500 mx-auto" />
          <div className="feature text-center">
            <EffectiveLearningIcon className="icon-16 min-[1400px]:icon-20 rounded-full p-2.5 min-[1400px]:p-4 mx-auto shadow-md mb-3" />
            <div className="font-feature-bold">تعلم فعال</div>
            <div className="font-content-accent max-w-[350px]">
              منهج يركز على التعلم النشط والتفاعل بين الطلاب، مما يعزز الفهم
              العميق للمواد الدراسية ويدعم تطوير مهارات القرن الحادي والعشرين.
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div
        className="relative py-12 px-3 flex flex-col justify-center items-center"
        id="contact"
      >
        {/* Background Image */}
        <div
          className="full-width h-full absolute -z-10 bg-cover bg-no-repeat bg-fixed py-10 px-5"
          style={{
            backgroundImage: `linear-gradient(rgba(117, 0, 69, 0.85), rgba(117, 0, 69, 0.85)), url('/space-bg.jpg')`,
          }}
        />
        <div className="text-white font-heading-4">تواصل معنا</div>
        <div className="text-neutral-400 font-highlight-accent mt-2 max-w-[450px] text-center">
          إذا كان لديك أي استفسارات أو تحتاج إلى مزيد من المعلومات، لا تتردد في
          التواصل معنا عبر البريد الإلكتروني.
        </div>
        <div className="w-16 h-0.5 bg-white mx-auto my-6 rounded-full" />
        <a href="mailto:gehanzayedd@yahoo.com">
          <div className="font-content-bold text-neutral-400 block p-2.5 px-6 bg-primary-200 rounded-3xl">
            اضغط هنا
          </div>
        </a>
      </div>

      <footer className="h-fit relative text-center">
        <p className="font-caption-bold text-neutral-400 my-3">
          {"جميع الحقوق محفوظة"} &copy; 2025
        </p>
      </footer>
    </div>
  );
}
