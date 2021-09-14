import { App } from 'vue';
import { ElButton, ElLink, ElContainer, ElHeader, ElMain } from 'element-plus';

const ElComponents = [ElButton, ElLink, ElContainer, ElHeader, ElMain];

export default function initElement(app: App) {
  // 按需注册 Element 的组件
  ElComponents.forEach((component) => {
    app.component(component.name, component);
  });
}
