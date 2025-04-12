import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { CircularProgress } from "@heroui/progress";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
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
  const script_service: string = `We have a customer service, for helping you 24 hours per day. So that you don't worry about the problem that you see during developing a program project. The team support will help your all problem when you show reason of it.`;
  return (
    <DefaultLayout>
      <section className="my-5 font-poppins">
        <div className="ml-6 mr-6 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:max-w-[96rem] xl:flex xl:flex-col xl:justify-center xl:items-center xl:max-w-[80rem] lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[64rem] md:flex md:flex-col md:justify-center md:items-center md:max-w-[48rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-[40rem] gap-7 ">
          <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:max-w-[96rem] xl:flex xl:flex-col xl:justify-center xl:items-center xl:max-w-[80rem] lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[64rem] md:flex md:flex-col md:justify-center md:items-center md:max-w-[48rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-[40rem] gap-5 ">
            <h1 className="capitalize font-bold text-secondary 2xl:text-[4rem] xl:text-[3rem] lg:text-[3rem] md:text-[3rem] sm:text-[3rem] text-[2rem] my-5">
              terms services
            </h1>
            <p className="leading-10  2xl:text-[20px] 2xl:text-center 2xl:w-[90rem] xl:text-center xl:w-[40rem] xl:text-[20px]  lg:w-[40rem] lg:text-center lg:text-[20px] md:text-center md:text-[20px] md:w-[30rem] sm:text-center sm:w-[30rem] sm:text-[20px] w-[300px] text-[18px] ">
              {script}
            </p>
          </div>
          <div className="my-10">
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
        <div className="ml-6 mr-6 lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-[80rem] md:flex md:flex-col md:justify-center md:items-center md:max-w-[68rem] sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-[48rem] gap-5">
          <div>
            <h1 className="capitalize font-bold text-[50px] text-primary">
              Video Hightlight
            </h1>
          </div>
          <div className="lg:flex lg:flex-row lg:w-[800px] md:flex md:flex-row md:w-[700px] sm:flex sm:flex-row sm:w-[600px] flex flex-col gap-6 w-[300px] items-center">
            <div>
              <video
                className="border-1 border-gray-300 dark:border-gray-700 shadow-lg rounded-lg"
                playsInline
                muted
                autoPlay
                loop
              >
                <source src="hahaha.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <video
                className="border-1 border-gray-300 dark:border-gray-700 shadow-lg rounded-lg"
                autoPlay
                playsInline
                loop
                muted
              >
                <source src="baby.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <div className="ml-6 mr-6 lg:flex lg:flex-row lg:justify-center md:flex-row md:justify-center sm:flex sm:flex-row sm:justify-center flex flex-col justify-center items-center">
          <div className="lg:flex lg:flex-row lg:gap-[60px] lg:justify-center md:flex md:flex-row md:justify-center md:gap-[80px] sm:flex sm:flex-col sm:justify-center sm:gap-[60px] flex flex-col gap-5 justify-center items-center">
            <div className="text-center">
              <h1 className="mb-10 text-primary lg:text-[50px] lg:font-bold md:text-[50px] md:font-bold sm:text-[50px] sm:font-bold text-[30px] font-bold">
                Customer Services
              </h1>
              <p className="lg:w-[580px] lg:leading-[40px] lg:text-[20px] md:w-[400px] md:text-[20px] md:leading-[40px] sm:w-[400px] sm:text-[20px] sm:leading-[40px] w-[300px] text-[18px] leading-[30px]">
                {script_service}
              </p>
            </div>
            <div className="lg:w-[500px] md:w-[400px] sm:[500px] w-[300px]">
              <video
                className="border-1 border-gray-300 dark:border-gray-700 shadow-lg rounded-lg"
                loop
                autoPlay
                muted
                playsInline
              >
                <source src="service-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="my-[100px]">
        <div className="ml-6 mr-6 flex justify-center">
          <Card>
            <div className="lg:w-[340px] lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[340px] sm:h-[300px] w-[300px] h-[300px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <CardBody className="justify-center items-center relative top-[50px]">
                <CircularProgress
                  classNames={{
                    svg: "w-50 h-40 drop-shadow-md",
                    indicator: "stroke-primary",
                    track: "stroke-primaru/20",
                    value: "text-3xl font-semibold text-white",
                  }}
                  showValueLabel={true}
                  strokeWidth={4}
                  value={100}
                />
              </CardBody>
            </div>
          </Card>
        </div>
      </section>
      <hr />
      {/* prepare Image to circle  */}
      <section className="my-[200px]">
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center gap-5 sm:flex sm:flex-row sm:justify-center sm:items-center flex flex-row justify-center items-center mt-[100px] mb-[100px] lg:w-[1200px]">
          {/* Image of one */}
          <div className="lg:w-[200px] md:w-[200px] sm:w-[200px] w-[100px] border-1 border-gray-300 dark:border-gray-700 showdow-lg rounded-2xl lg:relative lg:top-[180px] lg:left-[240px] md:relative md:top-[140px] md:left-[180px] sm:relative sm:top-[90px] sm:left-[140px] relative top-[60px] left-[100px]">
            <Image alt="Image" src="service-program.jpg" />
          </div>
          {/* Image of two */}
          <div className="lg:w-[200px] md:w-[200px] sm:w-[200px] w-[100px] border-1 border-gray-300 dark:border-gray-700 showdow-lg rounded-2xl round-lg lg:relative lg:top-[-180px] lg:left-[20px] md:relative md:top-[-140px] md:left-[20px] sm:relative sm:top-[-90px] sm:left-[20px] relative top-[-60px] left-[20px] ">
            <Image alt="Image" src="service-program-1.jpg" />
          </div>
          {/* Video middle page */}
          <div className="lg:w-[300px] md:w-[300px] sm:w-[300px] w-[200px]">
            <video
              className="border-1 border-gray-300 dark:border-gray-700 shadow-lg rounded-lg"
              autoPlay
              loop
              playsInline
              muted
            >
              <source src="service-video-middle.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Image of three */}
          <div className="lg:w-[200px] md:w-[200px] sm:w-[200px] w-[100px] border-1 border-gray-300 dark:border-gray-700 showdow-lg rounded-2xl lg:relative lg:top-[180px] lg:left-[-20px] md:relative md:top-[140px] md:left-[-20px] sm:relative sm:top-[90px] sm:left-[-20px] relative top-[60px] left-[-20px]">
            <Image alt="Image" src="service-program-2.jpg" />
          </div>
          {/* Image of four */}
          <div className="lg:w-[200px] md:w-[200px] sm:w-[200px] w-[100px] border-1 border-gray-300 dark:border-gray-700 showdow-lg rounded-2xl lg:relative lg:top-[-180px] lg:left-[-240px] md:relative md:top-[-140px] md:left-[-180px] sm:relative sm:top-[-90px] sm:left-[-140px] relative top-[-60px] left-[-90px]">
            <Image alt="Image" src="service-program-3.jpg" />
          </div>
        </div>
      </section>
      <hr />
      <section className="my-10">
        {/* Form submit feedback of user */}
        <div>
          <div className="lg:w-[400px] rounded-lg md:w-[400px] sm:w-[400px] w-[300px] ">
            <Card>
              <CardHeader>
                <h1 className="mt-4 lg:text-[30px] lg:font-bold md:text-[30px] md:font-bold sm:text-[30px] sm:font-bold ml-10 text-[30px] text-secondary">
                  Contact Service
                </h1>
              </CardHeader>
              <CardBody>
                <div className="my-4">
                  <Form>
                    <Input label="User Name" name="username" />
                    <Input label="Email" name="email" />
                    <Textarea label="Description" name="description" />
                    <Button
                      className="bg-gradient-to-tr from-green-400 to-purple-400 relative left-[100px] my-10 max-w-lg"
                      type="submit"
                      variant="shadow"
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <footer className="my-10">
          <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-row-1 gap-4 ml-[50px] mr-[50px]">
            <div className="leading-[40px]">
              <ul className="flex flex-col capitalize underline">
                <h3 className="text-[30px] font-bold my-5 capitalize no-underline">
                  Partner
                </h3>
                <li>
                  <a href="#">Google</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Amazone</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">X</a>
                </li>
                <li>
                  <a href="#">Freecodecamp</a>
                </li>
              </ul>
            </div>
            <div className="leading-[40px]">
              <ul className="flex flex-col capitalize underline">
                <h3 className="text-[30px] font-bold my-5 capitalize no-underline">
                  Course Popular
                </h3>
                <li>
                  <a href="#">Python programming</a>
                </li>
                <li>
                  <a href="#">Javascript programming</a>
                </li>
                <li>
                  <a href="#">Java programming</a>
                </li>
                <li>
                  <a href="#">Mobile Application</a>
                </li>
                <li>
                  <a href="#">Javascript Development</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
              </ul>
            </div>
            <div className="leading-[40px]">
              <ul className="flex flex-col capitalize underline">
                <div>
                  <h3 className="text-[30px] font-bold my-5 capitalize">
                    Goal Together
                  </h3>
                </div>
                <li>
                  <a href="#">Develope Artificial Intelligent</a>
                </li>
                <li>
                  <a href="#">Community Developes</a>
                </li>
                <li>
                  <a href="#">Campanies Partner</a>
                </li>
                <li>
                  <a href="#">Learning Resources</a>
                </li>
                <li>
                  <a href="#">Blog Technologies</a>
                </li>
                <li>
                  <a href="#">Safety and security</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <hr />
      </section>
    </DefaultLayout>
  );
}
