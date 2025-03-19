import DefaultLayout from "@/layouts/default";
import { Tabs, Tab } from "@heroui/tabs";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { AvatarGroup, Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
const CodeIcon = ({
  fill = "currenColor",
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
        d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
        fill={fill}
        stroke="false"
        strokeWidth="around"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function DocsPage() {
  let type_one: string = `Welcome to Arema Development team. We are waiting for support every one for 24 hours in a day, if you needed a problem related in technology system and networking. We have a custumer support replies every problem that you see.`;
  let hacker_text: string = `I'm a hacker who uses computer, networking or other skills to overcome a technical problem. The term also may refer to anyone who uses their abilities to gain unauthorized access to systems or networks in order to commit crimes.`;
  let software_text: string = `I'm a software engineering that used my mind to designs, develops, tests, and maintains software applications and systems, applying engineering principles and programming skills to create efficient and reliable solutions for real-world problems.`;
  let banking_text: string = `I'm a banking system is a group or network of institutions that provide financial services for us. These institutions are responsible for operating a payment system, providing loans, taking deposits, and helping with investments.`;
  let designer_text: string = `I'm a designer develops and creates visual ideas. But depending on the type of designer you are, the work you do could be anything from designing magazines and digital interfaces to creating a navigation system for a public space.`;
  let manager_text: string = `I'm a manager carefully balances their focus between strategising for growth and ensuring daily operations run smoothly. They mediate conflict, build and nurture teams, align resources, and often make difficult decisions.`;
  let ceo_text: string = `I'm a CEO that managing a company, who is sometimes also the company's president or chairman of the board: Selling and Administrative units are headed-up by Senior Vice Presidents who report directly to the CEO.`;
  return (
    <DefaultLayout>
      <section>
        <div className="lg:w-[700px] md:w-[400px] lg:relative lg:left-[200px] md:relative md:left-[100px]">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="font-bold text-[40px] capitalize text-success">
              Build Your Experiences
            </h1>
            <p className="leading-8">{type_one}</p>
            <div className="flex flex-row gap-4">
              <Button
                key="button"
                variant="shadow"
                color="default"
                radius="full"
                as={Link}
                href="#"
              >
                See Feature
              </Button>

              <Button
                key="button"
                variant="shadow"
                color="danger"
                radius="full"
                as={Link}
                href="#"
              >
                Get Started
              </Button>
            </div>
            <div className="relative -left-[40px]">
              <AvatarGroup className="w-[150px]" total={1}>
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:grid lg:grid-cols-3 lg:m-[100px] gap-5 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">
          <div>
            <Card>
              <CardBody>
                <div className="flex flex-row gap-5">
                  <div>
                    <Image
                      alt="arena dev"
                      width={50}
                      height={50}
                      radius="sm"
                      src="hacker-toaboa.jpeg"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold capitalize">Jonh Smith </p>
                    <small className="text-default-500">Hacker 007</small>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="my-0 lg:w-[300px] md:w-[400px]">
                  {hacker_text}
                </div>
              </CardBody>
              <CardFooter>
                <div className="lg:mt-6">
                  <Button
                    showAnchorIcon
                    key="button"
                    as={Link}
                    href="#"
                    radius="full"
                    className="bg-gradient-to-tr from-teal-300 to-sky-300"
                  >
                    Go To
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <div className="flex flex-row gap-5">
                  <div>
                    <Image
                      alt="arena dev"
                      width={50}
                      height={50}
                      radius="sm"
                      src="software_toaboa.jpeg"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold capitalize">Billion Jink</p>
                    <small className="text-default-500">
                      Software Engineering
                    </small>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="my-0 lg:w-[300px] md:w-[400px]">
                  {software_text}
                </div>
              </CardBody>
              <CardFooter>
                <div>
                  <Button
                    showAnchorIcon
                    key="button"
                    as={Link}
                    href="#"
                    radius="full"
                    className="bg-gradient-to-tr from-teal-300 to-sky-400"
                  >
                    Go To
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <div className="flex flex-row gap-5">
                  <div>
                    <Image
                      alt="arena dev"
                      width={50}
                      height={50}
                      radius="sm"
                      src="banking-toaboa.jpeg"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold capitalize">David Morgan </p>
                    <small className="text-default-500">Banking System</small>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="my-0 lg:w-[300px] md:w-[400px]">
                  {banking_text}
                </div>
              </CardBody>
              <CardFooter>
                <div>
                  <Button
                    showAnchorIcon
                    key="button"
                    as={Link}
                    href="#"
                    radius="full"
                    className="bg-gradient-to-tr from-teal-300 to-sky-300"
                  >
                    Go To
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <div className="flex flex-row gap-5">
                  <div>
                    <Image
                      alt="arena dev"
                      width={50}
                      height={50}
                      radius="sm"
                      src="designer-toaboa.jpeg"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold capitalize">jeny richard</p>
                    <small className="text-default-500">Designer</small>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="my-0 lg:w-[300px] md:w-[400px]">
                  {designer_text}
                </div>
              </CardBody>
              <CardFooter>
                <div>
                  <Button
                    showAnchorIcon
                    key="button"
                    as={Link}
                    href="#"
                    radius="full"
                    className="bg-gradient-to-tr from-teal-300 to-sky-300"
                  >
                    Go To
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <div className="flex flex-row gap-5">
                  <div>
                    <Image
                      alt="arena dev"
                      width={50}
                      height={50}
                      radius="sm"
                      src="manager-toaboa.jpeg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold capitalize">lio zeiness</p>
                    <small className="text-default-500">Manager</small>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="my-0 lg:w-[300px] md:w-[400px]">
                  {manager_text}
                </div>
              </CardBody>
              <CardFooter>
                <div className="lg:mt-6">
                  <Button
                    showAnchorIcon
                    key="button"
                    as={Link}
                    href="#"
                    radius="full"
                    className="bg-gradient-to-tr from-teal-300 to-sky-300"
                  >
                    Go To
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <div className="flex flex-row gap-5">
                  <div>
                    <Image
                      alt="arena dev"
                      width={50}
                      height={50}
                      radius="sm"
                      src="ceo-toaboa.jpeg"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold capitalize">Arena mariniar</p>
                    <small className="text-default-500">CEO</small>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <div className="my-0 lg:w-[300px] md:w-[400px]">{ceo_text}</div>
              </CardBody>
              <CardFooter>
                <div className="lg:mt-6">
                  <Button
                    showAnchorIcon
                    key="button"
                    as={Link}
                    href="#"
                    radius="full"
                    className="bg-gradient-to-tr from-teal-300 to-sky-300"
                  >
                    Go To
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center gap-20">
          <div>
            <h1 className="capitalize font-black text-primary text-[40px]">
              Our Partner
            </h1>
            <small className="capitalize text-default-400 text-[20px] font-bold">
              list company
            </small>
          </div>
          <div className="flex flex-row gap-10">
            <Image alt="google" width={100} height={100} src="data:image/png;base64,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"/>
            <Image alt="spotify" width={100} height={100} src="https://i.pcmag.com/imagery/reviews/042FW7hC9vrGnoDea9LArXI-35.fit_scale.size_1028x578.v1674253030.png" />
            <Image alt="linkedin" width={100} height={100} src="https://yt3.googleusercontent.com/ekbHIYdtWJBB2p9gk2PsKPUiXVmlyEeSWOT5q18B7D_USR-Ba3SGZ7cXUOLnoPU_P207EYyU6Q=s900-c-k-c0x00ffffff-no-rj"/>
            <Image alt="github" width={100} height={100} src="https://rock-the-prototype.com/wp-content/uploads/2022/01/github-repositories-1.jpg" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
