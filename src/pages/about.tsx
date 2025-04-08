import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
export const ArrowForwardIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      className="mt-3"
      fill="none"
      height={size || height || 24}
      viewBox="0 0 900 900"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        fill={fill}
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default function DocsPage() {
  const script: string = `It's be a opportunity for develop your career. We provide the best career for member that had join a premuim members. please try join our premuim to get an experience development career. `;
  return (
    <DefaultLayout>
      <section className="my-5 font-poppins">
        <div className="ml-10 mr-10 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:max-w-[96rem] xl:flex xl:flex-col xl:justify-center xl:items-center xl:max-w-[80rem] lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[64rem] md:flex md:flex-col md:justify-center md:items-center md:max-w-[48rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-[40rem] gap-7 ">
          <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:max-w-[96rem] xl:flex xl:flex-col xl:justify-center xl:items-center xl:max-w-[80rem] lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[64rem] md:flex md:flex-col md:justify-center md:items-center md:max-w-[48rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-[40rem] gap-5 ">
            <h1 className="capitalize font-bold text-secondary 2xl:text-[4rem] xl:text-[3rem] lg:text-[2rem] md:text-[2rem] sm:text-[2rem]">
              terms services
            </h1>
            <p className="leading-10 text-[20px] text-center 2xl:w-[90rem] xl:w-[40rem] lg:w-[40rem] md:w-[30rem] sm:w-[30rem]">
              {script}
            </p>
          </div>
          <div>
            <Button
              variant="shadow"
              className="bg-gradient-to-tr from-green-400 to-purple-400"
              endContent={<ArrowForwardIcon />}
              as={Link}
              target="blink"
              href="/card"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>
      <section className="mt-[130px] mb-[100px]">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[80rem] md:flex md:flex-col md:justify-center md:items-center md:max-w-[68rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-[48rem] gap-5">
          <div>
            <h1 className="capitalize font-bold text-[50px] text-primary">
              Video Hightlight
            </h1>
          </div>
          <div>
            <video
              className="w-full h-auto max-w-full border-1 border-gray-300 dark:border-gray-700 shadow-lg rounded-lg opacity-50"
              autoPlay
              loop
              playsInline
              muted
            >
              <source src="hahaha.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
