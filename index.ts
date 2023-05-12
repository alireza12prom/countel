#! /usr/bin/env node

import { search_files, count_lines, path_validator, logger } from './lib';
import { program } from 'commander';


program
  .version('0.0.1', '-v, --version')
  .usage('dir [test]')
  .parse(process.argv);

main(program.args);

function main(args: string[]) {
  let path = args[0];
  if (!path) {
    logger.error('Error: please specify a path.');
    return;
  }
  if (!path_validator(path)) {
    logger.error(`Error: no such file or directory '${path}'.`);
    return;
  }

  logger.message('Start counting, please wait... 🚀');
  let total = (search_files(path).map(count_lines)).reduce((prev, curr) => prev + curr);
  logger.result(`> Total lines << ${total.toLocaleString('en-US')} >>`);
}
