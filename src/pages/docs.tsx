import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Avatar } from "@heroui/avatar";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";
import React from "react";

const AnchorIcon = (props: object) => {
  return (
    // Icon size customize
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      width="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"
        fill="currentColor"
      />
      <path
        d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"
        fill="currentColor"
      />
    </svg>
  );
};
const MoonIcon = (props: object) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      width="24"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  );
};
const SunIcon = (props: object) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      width="24"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <circle
        cx={256}
        cy={256}
        fill="none"
        r={80}
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </svg>
  );
};
const HeartIcon = (props: object) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      height="24"
      width="24"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  );
};
export const Country = [
  { label: "Cambodia", key: "cambodia", description: "The country in asia" },
  { label: "Thailand", key: "thailand", description: "The country in asia" },
  { label: "Lao", key: "lao", description: "The country in asia" },
  { label: "Japan", key: "japan", description: "The country in asia" },
  { label: "Vietnam", key: "vietnam", description: "The country in asia" },
  { label: "Singapore", key: "singapore", description: "The country in asia" },
  { label: "Malasia", key: "malasia", description: "The country in asia" },
  { label: "China", key: "china", description: "The country in asia" },
  // The country that stay at the Europe country
  {
    label: "United State",
    key: "united state",
    description: "The country in Europe",
  },
  {
    label: "United Kingdom",
    key: "united kingdom",
    description: "The country in Europe",
  },
  { label: "Australia", key: "autralia", description: "The country in Europe" },
  {
    label: "Swizaland",
    key: "swizaland",
    description: "The country in Europe",
  },
  { label: "Franch", key: "franch", description: "The country in Europe" },
];
export default function DocsPage() {
  // header intrdduction
  const script: string = "Behinde the screen";
  const defaultContent: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const speech: string =
    "Before proceeding, carefully review the terms and conditions of each service to ensure they align with your specific needs and long-term goals.";
  const speech1: string =
    "A statement is a sentence that says something is true, like Pizza is delicious There are other kinds of statements in the worlds of the law, banking, and government. All statements claim something or make a point. If you witness an accident, you make a statement to police, describing what you saw.";
  const heart: string =
    "a hollow muscular organ of vertebrates that expands and contracts to move blood through the arteries, veins, and capillaries. b. : a structure in an invertebrate that serves a purpose like that of the heart of a vertebrate.";
  const colors: string[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  // Hook function fix error
  const [touch, setTouch] = React.useState(false);
  const [key, setKey] = React.useState("");
  const inValid = key === "cambodia";
  const myFilter = (textValue: string, inputValue: string) => {
    if (inputValue.length == 0) {
      return true;
    }
    // Normalize both strings so we can slice safely
    // take into account the ignorePunctuation option as well...
    textValue = textValue.normalize("NFC").toLowerCase();
    inputValue = inputValue.normalize("NFC").toLocaleLowerCase();
    return textValue.slice(0, inputValue.length) === inputValue;
  };
  return (
    <DefaultLayout>
      <div className={title()}>
        <h1 className="text-9x1 text-center text-teal-50 font-medium  bg-teal-500 w-20xl m-20 p-2 capitalize">
          {script}
        </h1>
      </div>
      <Accordion
        variant="bordered"
        defaultExpandedKeys={["Anchor"]}
        className="flex flex-col p-2 gap-1 w-full max-w-[300px] ml-20"
      >
        {/* Moon accordion display */}
        <AccordionItem
          key="Moon"
          aria-lable="Moon"
          title="Moon"
          indicator={({ isOpen }) => (isOpen ? <SunIcon /> : <MoonIcon />)}
        >
          {speech}
        </AccordionItem>
        {/* Anchor accordion display */}
        <AccordionItem
          key="Anchor"
          aria-label="Anchor"
          title="Anchor"
          indicator={<AnchorIcon />}
          subtitle={<p className="text-red-400">Next Step</p>}
        >
          {defaultContent}
        </AccordionItem>
        {/* Sun accordion display */}
        <AccordionItem
          key="Sun"
          aria-lable="Sun"
          title="Sun"
          indicator={<SunIcon />}
        >
          {speech1}
        </AccordionItem>
        {/* Heart accordion display */}
        <AccordionItem
          key="heart"
          aria-label="heart"
          title="Heart Sweet"
          indicator={<HeartIcon />}
        >
          {heart}
        </AccordionItem>
      </Accordion>
      {/* type auto compelete  */}
      <h2 className="capitalize text-[50px] text-center bg-sky-700 color-white m-20">
        Hello Welcome to select plan country
      </h2>
      <div className="flex flex-row w-full flex-wrap gap-4 ml-20">
        {colors.map((color) => (
          <Autocomplete
            allowsCustomValue
            errorMessage={
              inValid || touch ? "" : "You must be select one of most country"
            }
            isInvalid={inValid || touch ? false : true}
            onClose={() => setTouch(true)}
            onSelectionChange={() => setKey}
            className="max-w-lg"
            key={color}
            defaultItems={Country}
            placeholder="Search"
            label="Plan Country"
            defaultFilter={myFilter}
            defaultSelectedKey={"united state"}
            scrollShadowProps={{
              isEnabled: true,
            }}
          >
            {(item) => (
              <AutocompleteItem
                key={item.key}
                startContent={
                  <Avatar alt="icon" className="h-6 w-6" src="./tiger.svg" />
                }
              >
                {item.label}
              </AutocompleteItem>
            )}
          </Autocomplete>
        ))}
      </div>
      <h1 className="bg-red-300 text-center m-20 capitalize text-[50px]">
        Alert message to indicate{" "}
      </h1>
      <div className="m-20 ">
        {colors.map((color) => (
          <div key={color} className="flex flex-wrap items-center">
            <Alert
              className="flex flex-column "
              color="success"
              title={`The message color ${color} representation meaning.`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-10 ml-20">
        <Button isLoading color="default" variant="bordered">
          Hello UI
        </Button>
        <Button color="primary" variant="shadow">
          Hello UI
        </Button>
        <Button color="secondary" variant="flat">
          Hello UI
        </Button>
        <Button
          color="success"
          variant="light"
          className="bg-gradient-to-tr from-sky-400 to-fuchsia-500"
        >
          Hello UI
        </Button>
        <Button color="warning" variant="solid">
          Hello UI
        </Button>
        <Button
          color="danger"
          variant="ghost"
          className="bg-gradient-to-br from-pink-500 to-emerald-500 text-white"
          radius="full"
        >
          Hello UI
        </Button>
      </div>
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
