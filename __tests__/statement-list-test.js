module.exports = (test) => {
    test(
        `
        42;
        
        'Hello';
        `,
        {
        type: 'Program',
        body: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'NumericLiteral',
              value: 42,
            },
          },
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'StringLiteral',
              value: 'Hello',
            },
          },
        ],
    },
    );
};
