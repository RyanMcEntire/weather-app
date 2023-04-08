export default function components() {

  // div
  function divCI(className, id) {
    return new Element('div').addAttributes({
      class: className,
      id,
    });
  }

  // button
  function butCIT(className, id, text) {
    return new Element('button')
      .addAttributes({
        class: className,
        id,
      })
      .addText(text);
  }

  // radio button
  function radCINCh(className, id, name, isChecked) {
    return new Element('input').addAttributes({
      class: className,
      type: 'radio',
      id,
      name,
      value: id,
      checked: isChecked,
    });
  }

  // image 
  function imgSACI(src, alt, className, id) {
    return new Element('img').addAttributes({
      src,
      alt,
      class: className,
      id,
    });
  }

  return { divCI, butCIT, radCINCh, imgSACI };
}