/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <div className="h-fit min-h-[calc(100vh_-_58px)] bg-[#101529]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-50">
            🤔 Frequently asked questions ❔
          </h2>
          <dl className="mt-10">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                open={open === index + 1}
                animate={customAnimation}
              >
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className="text-gray-600 hover:text-gray-700"
                >
                  {faq.question}
                </AccordionHeader>
                <AccordionBody className="text-gray-600">
                  {faq.answer}
                </AccordionBody>
              </Accordion>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
