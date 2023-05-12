import fs from 'fs';

export function count_lines(p:string) {
  // becaus last line has no `new line` character
  // we have to start from 1
  let count = 1;
  let buffer = fs.readFileSync(p);
  for (let char of buffer) {
    count += char == 10 ? 1 : 0;
  }
  return count;
}
