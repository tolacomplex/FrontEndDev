import DefaultLayout from "@/layouts/default";
import React from "react";
import { CircularProgress } from "@heroui/progress";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
// svg icon card shopping
//  for button buys
export const BuysIcon = ({
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
        d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};
// main page whole of page
// incluce all of page
export default function DocsPage() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v == 100 ? (v = 0) : v + 10));
      return () => clearInterval(interval);
    }, 5000);
  }, []);
  const beginner: number = 49.99;
  const advance: number = 199.99;
  const master: number = 599.99;
  const speed_text: string =
    "The speed with which data is getting transmitted in computer is called data transmission speed. It is commonly measured in bits per second. To be more specific, it is measured in megabits (million bits) per second which is usually abbreviated as Mbps";
  return (
    <DefaultLayout>
      <section>
        <div className="lg:flex lg:flex-row lg:justify-around md:flex md:flex-row md:justify-around sm:flex sm:flex-col sm:justify-around gap-4">
          <div className="lg:w-[500px] md:w-[400px]">
            <h1 className="capitalize text-[40px] font-bold mb-4">
              Speed of Data
            </h1>
            <p className="leading-10 text-medium">{speed_text}</p>
            <Button
              showAnchorIcon
              as={Link}
              href="#"
              variant="bordered"
              className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 "
            >
              Get Started
            </Button>
          </div>
          <div>
            <Card className="w-[300px] h-[300px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <CardBody className="justify-center items-center pb-0">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-3xl font-semibold text-white",
                  }}
                  aria-label="Loading..."
                  showValueLabel={true}
                  strokeWidth={4}
                  value={value}
                />
              </CardBody>
              <CardFooter className="justify-center items-center pt-0">
                <Chip
                  classNames={{
                    base: "border-1 border-white/30",
                    content: "text-white/90 text-small font-semibold",
                  }}
                  variant="bordered"
                >
                  2800 Data points
                </Chip>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-success text-center text-[40px] font-black capitalize my-10">
            Try beginner course:
          </h1>
        </div>
      </section>
      {/* Page Ecommmerce */}
      {/* section display course of page  */}
      <section className="my-4">
        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-2 sm:grid sm:grid-1 gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="computer-science.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      variant="light"
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="python.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Python</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="c_program.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>C Programming</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="c-pp.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>C++ Programming</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="cs.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>C# Programming</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="java.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Java Programming</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="javascript.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Javascript</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="react.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>React</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="html.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>HTML</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="css.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>CSS</h1>
                  <small className="text-default-500">Price: ${beginner}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Advance course display out put user interface */}
      {/* Page advance course*/}
      {/* Page require user that had studied beginner courses below */}
      <section>
        <div className="text-center text-[40px] font-black my-10 text-secondary">
          <h1>Advance Courses: </h1>
        </div>
      </section>
      {/* Try your advance course of user choice */}
      <section className="my-10">
        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-2 sm:grid sm:grid-1 gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="ai-py.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">AI with Python</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card frontend developer tool */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="frontend.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Front end develpment</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card page back end development tool */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="backend.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Back end development</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card page react js development */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="react.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">React js</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card Full Stuck development application */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="fullstuck.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Full stuck development</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/*Card  Data science page development*/}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="data-science.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Date science</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card page machine learning development */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="machine-learning.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">machine learning</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card page mobile development */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="mobile.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Mobile Development</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card desktop application development */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="desktop.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">desktop application</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* Card ethicle hacking page development*/}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="hacking.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Ethicle hacking</h1>
                  <small className="text-default-500">Price: ${advance}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Master course display out put user interface */}
      {/* Page master course*/}
      {/* Page require user that had studied some of advance courses and beginner courses below */}
      <section>
        <div className="text-center text-[40px] font-black my-10 text-secondary">
          <h1>Master Courses: </h1>
        </div>
      </section>
      <section className="my-10">
        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 sm:grid sm:grid-2 gap-2 lg:relative lg:left-[100px]">
          {/* card master game development */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="master-game.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Master game development</h1>
                  <small className="text-default-500">Price: ${master}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* card master system banking development */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="master-system.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">master system banking</h1>
                  <small className="text-default-500">Price: ${master}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* card master software archeticture */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="master-archeticture.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">Software archeticture</h1>
                  <small className="text-default-500">Price: ${master}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          {/* card systme maintainance development */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="master-maintainance.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1 className="capitalize">System maintainance</h1>
                  <small className="text-default-500">Price: ${master}</small>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      as={Link}
                      target="blank"
                      href="/card"
                      className="bg-gradient-to-tr from-sky-400 to-fuchsia-500 mt-3 relative left-10"
                      endContent={<BuysIcon />}
                    >
                      Buys
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
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
