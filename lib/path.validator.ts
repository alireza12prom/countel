import fs from 'fs';

export function path_validator(p:string) {
  return fs.existsSync(p);
}