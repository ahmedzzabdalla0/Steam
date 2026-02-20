import Subtitle from "@/components/book/subtitle";
import Tag from "@/components/book/tag";

export const metadata = {
  title: "ملفات إرشادية - منهج STEAM",
  description: "مجموعة من الملفات الإرشادية والموارد التعليمية لمنهج STEAM",
  authors: [
    {
      name: "الباحثة جيهان زايد",
      title: "قائدة فريق تطوير منهج العلوم في ضوء مدخل STEAM",
    },
  ],
};

const pdfFiles = [
  {
    title: "تطبيقات تعليم STEAM",
    path: "/guidelines/تطبيقات تعليم STEAM.pdf",
  },
  {
    title: "تطبيقات نظرية فيثاغورس",
    path: "/guidelines/تطبيقات_نظرية_فيثاغورس.pdf",
  },
  {
    title: "مادة علمية 1 STEAM",
    path: "/guidelines/مادة علمية 1 STEAM.pdf",
  },
  {
    title: "نموذج",
    path: "/guidelines/نموذج.pdf",
  },
];

const externalLinks = [
  {
    title: "LabXchange - STEAM Resources",
    url: "https://www.labxchange.org/library/items/lb:LabXchange:159bcdf6:html:1",
    description: "موارد تعليمية تفاعلية من LabXchange",
  },
  {
    title: "تعليم ستيم STEM – STEAM توجه مستقبلي في تعليم العلوم والرياضيات",
    url: "https://www.new-educ.com/%D9%85%D9%86%D8%AD%D9%89-%D8%B3%D8%AA%D9%8A%D9%85-steam-%D8%A7%D9%84%D9%82%D8%A7%D8%A6%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-steampbl",
    description: "د. بارعة بهجت خجا - 2018/09/15",
  },
];

export default function GuidelinesPage() {
  return (
    <>
      <Tag>ملفات إرشادية</Tag>

      <Subtitle>ملفات PDF</Subtitle>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,300px))] gap-7 mb-8">
        {pdfFiles.map((file, index) => (
          <a
            key={index}
            href={file.path}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-[5px] border border-primary/20 rounded-m p-5 hover:border-primary/40 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <svg
                className="icon-lm flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13H14"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 17H14"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h6 className="font-content-bold text-primary-400 group-hover:text-primary transition-colors">
                  {file.title}
                </h6>
                <p className="font-caption-emphasis text-neutral-1100 mt-1">
                  ملف PDF
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <Subtitle>روابط خارجية</Subtitle>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-7">
        {externalLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-[5px] border border-primary/20 rounded-m p-5 hover:border-primary/40 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <svg
                className="icon-lm flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11C13.5705 10.4259 13.0226 9.9508 12.3934 9.60704C11.7642 9.26328 11.0685 9.05886 10.3533 9.00765C9.63816 8.95643 8.92037 9.05961 8.24861 9.31018C7.57685 9.56076 6.96684 9.9529 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04519 15.666 2.05659 16.977C2.06798 18.288 2.59382 19.542 3.52086 20.4691C4.44791 21.3961 5.70197 21.9219 7.01295 21.9333C8.32393 21.9447 9.58694 21.4408 10.53 20.53L12.24 18.82"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h6 className="font-content-bold text-primary-400 group-hover:text-primary transition-colors leading-relaxed">
                  {link.title}
                </h6>
                {link.description && (
                  <p className="font-caption-emphasis text-neutral-1100 mt-2">
                    {link.description}
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
