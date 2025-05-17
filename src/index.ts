
export enum DecoratorKind {
  CLASS = "class",
  METHOD = "method",
  GETTER = "getter",
  SETTER = "setter",
  FIELD = "field",
  ACCESSOR = "accessor"
}

export default function bind() {
  return (target: Function, context: DecoratorContext) => {
    if (context.kind !== DecoratorKind.METHOD) return

    context.addInitializer(function () {
      Object.defineProperty(this, target.name, {
        value: target.bind(this)
      })
    });
  }
}