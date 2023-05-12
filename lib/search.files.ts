import fs from 'fs';
import path from 'path';

let excludeExt = /\.(png|jpe?g|gif|svg|mkv|mp4|webp|wmv|avi|mov|flv|webm|wav|mp3)(\?.*)?$/

export function search_files(p:string) {
  let files: string[] = [];
  let dir_content:string[];

  /* Check path is a directory or file */
  if (fs.statSync(p).isFile()) return [p];
  else dir_content = fs.readdirSync(p);

  /* Scan files of the path directory */
  let last_folder = p;
  for (let i = 0; i < dir_content.length; i++) {
    let curr_root = path.join(last_folder, dir_content[i]);
    if (excludeExt.test(curr_root)) continue; 
    else if (fs.statSync(curr_root).isFile()) {
      files.push(curr_root);
    } else {
      last_folder = curr_root;
      dir_content.push(...fs.readdirSync(curr_root));
    };
  }
  return files;
}