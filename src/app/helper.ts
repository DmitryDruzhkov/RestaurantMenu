export class Helper {
  static GetUUID(): string {
    return `f${(~~(Math.random()*1e8)).toString(16)}`;
  }
}
