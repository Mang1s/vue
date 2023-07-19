export default {
  moduleFileExtensions: ['js', 'json', 'vue'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/components/$1'
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest" // Update to match your installed version
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
}