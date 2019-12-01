import * as Scrivito from "scrivito";

const OutboundButtonWidget = Scrivito.provideWidgetClass("OutboundButtonWidget", {
  attributes: {
    target: "link",
    alignment: ["enum", { values: ["left", "center", "right"] }],
    style: ["enum", { values: ["btn-primary", "btn-clear"] }],
  },
});

export default OutboundButtonWidget;
