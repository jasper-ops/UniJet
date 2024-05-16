const POLYFILL = '/node_modules/abort-controller';

/**
 *
 * @param {object} options
 * @param {string} options.fromLibrary
 * @returns {import("vite").Plugin}
 */
export default function (options) {
    const polyfillStatementStr = `import { AbortController, AbortSignal } from '${options.fromLibrary}';`;
    // const importStatement = parseSync(polyfillStatementStr).program.body[0];

    return {
        transform(code, id) {
            if (id.includes(POLYFILL))
                return code;

            if (!code.includes('AbortController') && !code.includes('AbortSignal'))
                return code;

            // const ast = parseSync(code);
            // ast.program.body.unshift(importStatement);
            // code = generate(ast).code;

            return polyfillStatementStr.concat('\n').concat(code);
        },
    };
}
