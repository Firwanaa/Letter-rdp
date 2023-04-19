/**
 * Main test runner
 */

const { Parser } = require('../src/Parser');

const parser = new Parser();

const program = `
    /**
     * Multiline comment
     */
    "32"

    // Number; //for next time
    42;

`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));
