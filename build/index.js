const chalk = require('chalk');
const shell = require('shelljs');
// const inquirer = require('inquirer');

handleBuild();


function handleBuild() {
  try {
    shell.echo(chalk.green('拉取远程代码'));
    shell.exec('git pull');
    shell.echo(chalk.green('下载依赖包'));
    shell.exec('npm install');
    shell.echo(chalk.green('开始打包'));
    shell.exec('npm run build');

    shell.echo(chalk.green('项目打包完成, 配置 Nginx'));
    shell.exec('rm -rf /usr/local/nginx/html/*');
    shell.exec('mv ./dist/* /usr/local/nginx/html');
    shell.exec('nginx -s reload');
    shell.echo(chalk.green('项目构建完成'));
    shell.echo(chalk.green('https://www.zihao.work'));
    shell.exit();
  } catch (error) {
    console.error(error);
    shell.exit(1);
  }
}
