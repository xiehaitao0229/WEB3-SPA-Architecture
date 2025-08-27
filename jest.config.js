// 在 CI/CD 里用 --coverage 检查覆盖率是否达标。
// 在本地开发调试时用 jest-stare 看详细报告。

// jest --coverage → 覆盖率报告
// jest-stare → 详细的 HTML 报告
// majestic → 本地跑测试的 可视化控制台，让你点点鼠标选测试用例

const path = require('path');

module.exports = {
  // 测试文件匹配模式：查找所有以 .spec.ts/.test.ts/.spec.tsx/.test.tsx 结尾的文件
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],

  // 在每个测试文件运行前执行的设置文件
  setupFilesAfterEnv: [],

  // Jest 的根目录，空字符串表示当前目录
  rootDir: '',

  // 文件转换器配置：使用 @swc/jest 来转换 TypeScript 文件
  transform: {
    '.(ts|tsx)': '@swc/jest',
  },

  // 模块路径映射：将 @utils 别名映射到 src/utils 目录
  moduleNameMapper: {
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },

  // 代码覆盖率阈值设置
  coverageThreshold: {
    global: {
      branches: 50, // 分支覆盖率至少 50%
      functions: 85, // 函数覆盖率至少 85%
      lines: 85, // 行覆盖率至少 85%
      statements: 85, // 语句覆盖率至少 85%
    },
  },

  // 启用代码覆盖率收集
  collectCoverage: true,

  // 覆盖率报告输出目录
  coverageDirectory: './docs/jest-coverage',

  // 覆盖率收集时忽略的路径模式
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],

  // Jest 能够处理的模块文件扩展名
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],

  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: path.join(__dirname, 'docs', 'jest-stare'),  // 使用path.join确保路径正确
        reportTitle: 'Jest Stare Report',
        coverageLink: '../jest-coverage/index.html',
        reportHeadline: 'Web3 Architecture Test Report',
        reportSummary: true,
        reportFiles: true,
        coverageReport: true
      },
    ],
  ],
};