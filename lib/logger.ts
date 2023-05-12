import colors from 'colors'

export function error(message:string) {
  console.log(colors.red(colors.bold(message)));
}

export function message(message:string) {
  console.log(colors.bold(colors.italic(colors.cyan(message))));
}

export function result(message:string) {
  console.log(colors.bold(colors.yellow(message)));
}