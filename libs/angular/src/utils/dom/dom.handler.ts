export class DomHandler {
  public static applyAttributeFlag(element: HTMLElement, flag: string, value: boolean) {
    if (value) {
      element.setAttribute(flag, "");
    } else {
      element.removeAttribute(flag);
    }
  }
}
