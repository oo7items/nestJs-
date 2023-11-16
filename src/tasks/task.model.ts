// 使用接口进行强类型检查，确保在编译时捕获潜在的类型错误。确保类型可读性、可维护性、类型安全性
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

// 枚举用于将常量组织起来，提高代码质量的工具。
export enum TaskStatus {
  OPEN = 'OPEN', // 发布
  IN_PROGRESS = 'IN_PROGRESS', // 编辑
  DONE = 'DONE', // 关闭
}
