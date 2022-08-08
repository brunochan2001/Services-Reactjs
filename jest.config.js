module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest'
  }
};
