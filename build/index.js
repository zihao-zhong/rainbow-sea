const chalk = require('chalk');
const shell = require('shelljs');
// const inquirer = require('inquirer');

handleBuild();


function handleBuild() {
  shell.echo(chalk.green('开始打包...'));
  shell.exec('git pull');
  shell.exec('npm install');
  shell.exec('npm run build');

  shell.echo(chalk.green('项目打包完成, 配置 Nginx'));
  shell.exec('rm -rf /usr/local/nginx/html/*');
  shell.exec('mv ./dist/* /usr/local/nginx/html');
  shell.exec('nginx -s reload');
  shell.echo(chalk.green('项目构建完成'));
  shell.echo(chalk.green('http://www.zihao.work'));
  shell.exit();
}
