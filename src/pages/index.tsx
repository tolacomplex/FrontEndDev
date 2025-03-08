import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/image";
import { Card, CardHeader, CardFooter, CardBody } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
export default function IndexPage() {
  const student: string =
    "You would like exporing about involve of techonology development and learn start from zero or beginer course that we recomment. The next you have opportunity learn and work anywhere if you complete this course in 4-5 months.";
  const Worker: string =
    "You can start finding out about us, because we have special course for every worker that development your knowledge and talent to works ensure the. After you complete this course, you have more talent to work anywhere going to get income deserve it. ";
  const professional: string =
    "Professional courses can help you develop skills and advance your career. Some examples include data science, digital marketing, project management, leadership, business writing, and accounting.";
  const paragraph: string =
    "flexibility in learning pace and schedule, personalized instruction, accessibility from anywhere with an internet connection, cost-effectiveness, access to a wider range of instructors and learning materials, and the ability to revisit content at any time";
  const strategy: string =
    "Strategy can be intended or can emerge as a pattern of activity as the organization adapts to its environment or competes. It involves activities such as strategic planning and strategic thinking.";
  return (
    <DefaultLayout>
      <section className="my-10">
        <div className="mb-20 mt-10 lg:flex lg:flex-row lg:justify-around md:flex-cols sm:flex-cols">
          <div className="lg:w-[500px] sm:w-[400px]">
            <h1 className="text-[50px] capitalize font-bold">Which one</h1>
            <h1 className="text-[50px] text-success capitalize font-bold mb-7">
              is yours
            </h1>
            <Accordion variant="bordered">
              <AccordionItem key="student" aria-label="student" title="Student">
                {student}
                <div className="w-[200px] h-[200px] lg:relative lg:left-[100px] my-5">
                  <Image alt="Image" src="st-im-1.jpeg" />
                </div>
              </AccordionItem>
              <AccordionItem key="worker" aria-label="worker" title="Worker">
                {Worker}
                <div className="w-[200px] h-[200px] lg:relative lg:left-[100px] my-5">
                  <Image alt="Image" src="st-im-2.jpeg" />
                </div>
              </AccordionItem>
              <AccordionItem
                key="professional"
                aria-label="professional"
                title="Professional"
              >
                {professional}
                <div className="w-[200px] h-[200px] lg:relative lg:left-[100px] my-5">
                  <Image alt="Image" src="st-im-3.jpeg" />
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="lg:w-[600px]lg:mt-2 md:w-[500] sm:w-[400]">
            <Image alt="Tool" src="dev-im-3.jpeg" />
          </div>
        </div>
      </section>

      <section className="my-10">
        <div className="lg:w-[400px] lg:relative lg:left-[400px] md:w-[400px] md:relative md:left-[100px]">
          <Alert
            title="Course Reviews That Popular Than  ☘️"
            description="Have more than 100+ course"
            className="text-success"
          />
        </div>
      </section>
      <section className="my-10">
        <div className="lg:grid lg:grid-cols-4 lg:gap-9 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 mt-10">
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Frontend Developer
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="it-pro-1.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  The front end is the part of a website or application that
                  users see and interact with. It's responsible for the look and
                  feel of the user experience.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Backend Developer
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="it-pro-2.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  In computing, the back end is the part of a system that
                  processes and stores data, rather than the part that the user
                  sees. It's also known as the "server side
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Binary Computer
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="it-pro-3.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  Computers can represent numbers using binary code in the form
                  of digital 1s and 0s inside the central processing unit (CPU)
                  and RAM. These digital numbers are electrical signals that are
                  either on or off inside the CPU or RAM.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Cybersecurity
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="it-pro-4.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  Computers can represent numbers using binary code in the form
                  of digital 1s and 0s inside the central processing unit (CPU)
                  and RAM. These digital numbers are electrical signals that are
                  either on or off inside the CPU or RAM.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Data Science
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="dev-im-1.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  Data science is a field that uses data to solve problems and
                  improve operations. It combines math, statistics, computer
                  science, and other disciplines to analyze large amounts of
                  data.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Cloud Computing
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="dev-im-4.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  Cloud computing is the delivery of IT services over the
                  internet, such as storage, computing power, and databases.
                  It's also known as internet-based computing.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Computer Science
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="dev-im-2.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  Computer science is the study of computers and how they are
                  used to solve problems. It involves the design, development,
                  and analysis of software and hardware. Computer science uses
                  principles from mathematics, engineering, and logic.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-[20px] text-sky-400 relative left-5 uppercase">
                  Software Development
                </h3>
              </CardHeader>
              <CardBody>
                <Image alt="Programmer" src="dev-im-5.jpeg" />
              </CardBody>
              <CardFooter>
                <p>
                  Software development is the process of creating, testing, and
                  maintaining software. It involves a combination of design,
                  programming, and testing.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-[url(/bg-im-2.jpeg)] bg-no-repeat bg-center bg-cover lg:h-[630px] sm:h-[500px]">
        <div className="mb-20 mt-10 lg:flex lg:flex-row lg:justify-around lg:items-center md:flex-cols sm:flex-cols">
          <div className="w-[700px] lg:relative lg:top-[100px] md:left-[50px]">
            <h1 className="lg:text-[40px] font-bold ">Benefite Of</h1>
            <h1 className="lg:text-[40px] text-success font-bold">Course</h1>
            <p className="w-[400px] mt-10">{paragraph}</p>
            <Button
              showAnchorIcon
              as={Link}
              color="primary"
              href="https://github.com/"
              target="blink"
              variant="solid"
              radius="full"
              className="mt-10"
            >
              Start Yours
            </Button>
          </div>
          <div className="w-[400px] relative top-[100px]">
            {/* No contents in this page */}
          </div>
        </div>
      </section>
      <section className="bg-[url(/bg-im-1.jpeg)] bg-no-repeat bg-center bg-cover lg:h-[630px] sm:h-[500px]">
        <div className="mb-20 mt-10 lg:flex lg:flex-row lg:justify-around lg:items-center md:flex-cols sm:flex-cols">
          <div className="w-[400px] relative top-[100px]">
            {/* No contents in this page */}
          </div>
          <div className="w-[700px] lg:relative lg:top-[100px] lg:left-[200px]">
            <h1 className="text-[40px] font-bold text-warning">
              Behind The strategy
            </h1>
            <p className="w-[400px] mt-10">{strategy}</p>
            <Button
              showAnchorIcon
              as={Link}
              target="blink"
              href="https://about.gitlab.com/"
              color="primary"
              variant="solid"
              className="mt-10"
            >
              Expore More
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
