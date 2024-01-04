import type {
  Config
} from 'jest';

const config: Config = {
  verbose: true,
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
    '\\.(css|sass)$': '<rootDir>/__mocks__/svg.js'
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@mui/x-charts)/)'
  ]
};

export default config;