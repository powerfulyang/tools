module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest.preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  testPathIgnorePatterns: ['node_modules', 'examples', '__tests__/util'],
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    '!src/components/**/*.story.{js,jsx,ts,tsx}',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
