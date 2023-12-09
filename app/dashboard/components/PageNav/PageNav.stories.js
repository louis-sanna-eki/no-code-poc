import { PageNav } from ".";

export default {
  title: "Components/PageNav",
  component: PageNav,
  argTypes: {
    property1: {
      options: ["btn"],
      control: { type: "select" },
    },
    property2: {
      options: ["active", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "btn",
    property2: "active",
    className: {},
    text: "PARUTIONS RÉGLÉES",
    text1: "ARCHIVES",
  },
};
