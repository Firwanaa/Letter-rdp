/**
 * Letter parser: recursive decent implementaion.
 */

class Parser {
    /**
     * Parses a string into an AST (Abstract Syntax Tree)
     */
    parse(string){
        this._string = string;
    
        //Parse recursively starting from the main
        //entery point, the Program:

        return this.Program();

    }

    /**
     * Main entery Point
     * 
     * Program
     *      : NumericLiteral
     *      ;
     */
    Program(){
        return this.NumericLiteral();
    }
    /**
     * NumericLiteral
     *      : NUMBER
     *      ;
     */
    NumericLiteral(){
        return {
            type: 'NumericLiteral',
            value: Number(this._string),
        }
    }
}

module.exports = {
    Parser, 
};