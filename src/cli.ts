import {program} from 'commander';
const pkg: {
    version: string;
} = require('../package.json');
import lib from '.';

function commaSeparatedList(value: string): string[] {
    return value.split(',').map(v => v.trim());
}

program.version(pkg.version).usage('<paths> [options]');

program
    .description('基于 ecomfe 的本地 lint 工具')
    .option('--context <context>', '执行上下文', process.cwd())
    .action(async (cmd, options) => {
        const paths = commaSeparatedList(options[0]);

        lib(paths, cmd.context);
    });

program.on('--help', () => {
    console.log(); // eslint-disable-line no-console
});

program.parse(process.argv);
