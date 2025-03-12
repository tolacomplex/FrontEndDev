import DefaultLayout from "@/layouts/default";
import React from "react";
import { CircularProgress } from "@heroui/progress";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
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
export default function DocsPage() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
              Get Start
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
            Try Your course:
          </h1>
        </div>
      </section>
      {/* Page Ecommmerce */}
      {/* section display course of page  */}
      <section className="my-4">
        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-2 sm:grid sm:grid-1 gap-2">
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={250}
                />
              </CardBody>
              <CardFooter>
                <div>
                  <h1>Computer Science</h1>
                  <small className="text-default-500">Price: $200.00</small>
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
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
