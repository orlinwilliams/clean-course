(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor(value: string, placeholder: string) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }
  class InputElement {
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;
    public htmlElement: HtmlElement;
    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new HtmlElement(id, 'input');
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');    
  console.log({ nameField });
})();
