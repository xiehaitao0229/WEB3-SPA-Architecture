const { execSync } = require('child_process');

function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  console.log(`Running: ${command}`);
  console.log('=' .repeat(50));
  
  try {
    const output = execSync(command, { 
      stdio: 'inherit',
      encoding: 'utf8'
    });
    console.log(`✅ ${description} completed successfully!`);
    return true;
  } catch (error) {
    console.error(`\n❌ ${description} failed!`);
    console.error(`Exit code: ${error.status}`);
    console.error(`Command: ${command}`);
    console.error('=' .repeat(50));
    return false;
  }
}

function deploy() {
  console.log('🚀 Starting deployment build process...');
  console.log('This build will run: tests → lint → production build');
  
  // 运行测试
  if (!runCommand('npm run test', 'Running unit tests')) {
    console.error('\n💥 Deployment aborted: Tests failed');
    console.error('Please fix the failing tests before deploying.');
    process.exit(1);
  }
  
  // 运行 Lint
  if (!runCommand('npm run lint', 'Running ESLint checks')) {
    console.error('\n💥 Deployment aborted: Lint checks failed');
    console.error('Please fix the linting errors before deploying.');
    console.error('Tip: Run "npm run lint:fix" to auto-fix some issues.');
    process.exit(1);
  }
  
  // 运行生产构建
  if (!runCommand('npm run build:prod', 'Building for production')) {
    console.error('\n💥 Deployment aborted: Production build failed');
    process.exit(1);
  }
  
  console.log('\n🎉 Deployment build completed successfully!');
  console.log('All checks passed: ✅ Tests ✅ Lint ✅ Build');
}

deploy();