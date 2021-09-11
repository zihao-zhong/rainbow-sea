import { ElButton, ElLink } from 'element-plus';

export default function initElement(app: any) {
  app.use(ElButton);
  app.use(ElLink);
}
