import Element from "./element-maker";

export default function components() {
  // div
  function divCI(className, id) {
    return new Element("div").addAttributes({
      class: className,
      id,
    });
  }

  function divCIT(className, id, text) {
    return new Element("div")
      .addAttributes({
        class: className,
        id,
      })
      .addText(text);
  }

  // button
  function butCIT(className, id, text) {
    return new Element("button")
      .addAttributes({
        class: className,
        id,
        type: "button",
      })
      .addText(text);
  }

  // radio button
  function radCINCh(className, id, name, isChecked) {
    return new Element("input").addAttributes({
      class: className,
      type: "radio",
      id,
      name,
      value: id,
      checked: isChecked,
    });
  }

  function inpCIIn(className, id, init) {
    return new Element("input").addAttributes({
      class: className,
      type: "text",
      id,
      value: init,
    });
  }

  // image
  function imgSACI(src, alt, className, id) {
    return new Element("img").addAttributes({
      src,
      alt,
      class: className,
      id,
    });
  }

  return { divCI, divCIT, butCIT, radCINCh, imgSACI, inpCIIn };
}
