/* global module */

module.exports = {
    'settings': {
        react: {
            version: 'detect'
        }
    },
    'extends': [
        '@chimericdream/eslint-config',
        '@chimericdream/eslint-config-react',
        '@chimericdream/eslint-config-jest',
        '@chimericdream/eslint-config-jsx-a11y',
    ],
    'plugins': [
        'emotion',
        'react-hooks',
    ],
    'rules': {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'emotion/no-vanilla': 'error',
    },
};
