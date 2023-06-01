export function mergeProps<A, B>(a: A, b: B): A & B;

export function mergeProps<A, B, C>(a: A, b: B, c: C): A & B & C;

export function mergeProps(...items: any[]) {
  let rect = { ...items[0] };
  for (let i = 1; i < items.length; i++) {
    rect = Object.assign(rect, items[i]);
  }
  return rect;
}
