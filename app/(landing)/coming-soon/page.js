import Image from "next/image";
import bgImage from "@/assets/images/bg.svg";
import ComplementaryIcon from "@/assets/icons/complementary";
import InterconnectedIcon from "@/assets/icons/interconnected";
import EffectiveLearningIcon from "@/assets/icons/effective-learning";
import Link from "next/link";

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
        <div className="flex items-center text-center h-full">
          <div className="max-w-[800px] mx-auto px-3">
            <h2 className="font-heading-3 text-button-frames ">قريبًا</h2>

            <div className="text-neutral-400">
              <p className="text-center font-highlight-accent md:leading-8 mt-6">
                نعمل على تطوير منصة تعليمية مبتكرة تجمع بين العلوم، التكنولوجيا،
                الهندسة، الفنون، والرياضيات (STEAM)، لتقديم محتوى تفاعلي وأنشطة
                عملية تدعم الإبداع وتنمي المهارات. ستوفر المنصة تجربة تعليمية
                عصرية تلهم الطلاب والمعلمين معًا. ترقبوا الإطلاق قريبًا لمزيد من
                المتعة والفائدة في التعلم. شكرًا لاهتمامكم وثقتكم بنا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
