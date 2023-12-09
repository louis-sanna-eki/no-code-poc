import { TopbarNav } from ".";

export default {
  title: "Components/TopbarNav",
  component: TopbarNav,
  argTypes: {
    property1: {
      options: ["nav"],
      control: { type: "select" },
    },
    property2: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "nav",
    property2: "two",
    className: {},
  },
};
