import { DashboardMacro } from ".";

export default {
  title: "Components/DashboardMacro",
  component: DashboardMacro,
  argTypes: {
    property1: {
      options: ["pair", "im-pair"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "pair",
    divClassName: {},
    divClassNameOverride: {},
    className: {},
    text: "CA TTC",
    divClassName1: {},
    divClassName2: {},
    divClassName3: {},
    text1: "426k €",
    text2: "4,6M €",
    text3: "5,4M €",
    hasDiv: true,
    visible: true,
    hasDiv1: true,
    hasDiv2: true,
    hasDiv3: true,
    hasDiv4: true,
  },
};
