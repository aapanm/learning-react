import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "What is react?",
    content: "react is a front end javascript framework",
  },
  {
    title: "why use react?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "how do you use react?",
    content: "you use react bt creating components",
  },
];

export default function App() {
  return (
    <div className="ui styled accordion">
      <Accordion items={items}></Accordion>
    </div>
  );
}
