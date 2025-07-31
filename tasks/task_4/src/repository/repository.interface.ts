export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | undefined>;
  create(item: T): Promise<T>;
  update(id: string, item: Partial<T>): Promise<T | undefined>;
  delete(id: string): Promise<boolean>;
  find(filter: Partial<T>): Promise<T[]>;
}
