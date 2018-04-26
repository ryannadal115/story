// @flow

export default function(classNames: (?string)[]): string {
  return classNames.filter(f => f).join(' ');
}
