import process from 'process'

let args = process.argv;
let argv: any = {};
for (let i = 2; i < args.length; ++i) {
  let cur = args[i];
  if (/^(--)/.test(cur)) {
    argv[cur.slice(2)] = args[++i];
  }
}

export {
  argv
}