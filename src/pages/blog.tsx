import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { AvatarGroup, Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
export const ContactIcon = ({
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
        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        fillRule="evenodd"
      />
    </svg>
  );
};
export const CommentIcon = ({
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
      height={size || height || 512}
      viewBox="0 0 900 900"
      width={size || width || 512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        fill={fill}
        d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
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
  let type_two: string = `Reference users are the user types for general, non-person-related users, enabling more accurate assignments for additional identical authorizations, such as Internet users created with the SU01 code.Dec 22, 2023.`;
  return (
    <DefaultLayout>
      <section className="mt-[40px]">
        <div className="lg:w-[700px] md:w-[400px] lg:relative lg:left-[200px] md:relative md:left-[100px]">
          <div className="flex flex-col gap-10 items-center">
            <h1 className="font-bold text-[40px] capitalize text-success">
              Build Your Experiences
            </h1>
            <p className="leading-8 text-center text-[18px]">{type_one}</p>
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
            <div className="relative left-[10px]">
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
        <div className="lg:grid lg:grid-cols-3 lg:m-[100px] lg:gap-5 md:grid md:grid-cols-2 md:gap-3 sm:grid sm:grid-cols-1 sm:gap-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
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
          </motion.div>
        </div>
      </section>
      <section className="mt-[100px] mb-[150px]">
        <div className="flex flex-col gap-5 items-center">
          <div>
            <h1 className="capitalize font-black text-primary text-[40px] text-center">
              Our Partner
            </h1>
            <small className="capitalize text-default-400 text-[20px] font-bold text-center mb-10">
              list company
            </small>
          </div>

          <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring" }}
            className="grid grid-cols-8 lg:gap-9 md:gap-5"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
              <Image
                alt="google"
                width={80}
                height={80}
                radius="full"
                src="data:image/png;base64,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"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Image
                alt="spotify"
                width={80}
                height={80}
                radius="full"
                src="https://i.pcmag.com/imagery/reviews/042FW7hC9vrGnoDea9LArXI-35.fit_scale.size_1028x578.v1674253030.png"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Image
                alt="linkedin"
                width={80}
                height={80}
                radius="full"
                src="https://yt3.googleusercontent.com/ekbHIYdtWJBB2p9gk2PsKPUiXVmlyEeSWOT5q18B7D_USR-Ba3SGZ7cXUOLnoPU_P207EYyU6Q=s900-c-k-c0x00ffffff-no-rj"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Image
                alt="github"
                width={80}
                height={80}
                radius="full"
                src="https://rock-the-prototype.com/wp-content/uploads/2022/01/github-repositories-1.jpg"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Image
                alt="github"
                width={80}
                height={80}
                radius="full"
                src="https://rock-the-prototype.com/wp-content/uploads/2022/01/github-repositories-1.jpg"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Image
                alt="github"
                width={80}
                height={80}
                radius="full"
                src="https://rock-the-prototype.com/wp-content/uploads/2022/01/github-repositories-1.jpg"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Image
                alt="github"
                width={80}
                height={80}
                radius="full"
                src="https://rock-the-prototype.com/wp-content/uploads/2022/01/github-repositories-1.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="mb-[100px]">
        <div className="flex flex-col justify-center items-center gap-10">
          <div>
            <h1 className="text-[40px] font-black capitaize text-primary ">
              Referrence of us
            </h1>
          </div>
          <div className="leading-10 lg:w-[700px] text-center text-[20px]">
            <p>{type_two}</p>
          </div>
          <div className="flex flex-row gap-5 text-white">
            <Button
              color="success"
              size="md"
              endContent={<CommentIcon />}
              className="w-[130px]"
            >
              Comments
            </Button>
            <Button
              color="secondary"
              size="md"
              endContent={<ContactIcon />}
              className="w-[130px]"
            >
              Contact
            </Button>
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
