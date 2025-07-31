import { IRepository } from "./repository.interface";

export abstract class BaseRepository<T extends { id: string }>
  implements IRepository<T>
{
  protected items: T[];

  constructor(initialData: T[]) {
    this.items = [...initialData];
  }

  async getAll(): Promise<T[]> {
    return this.items;
  }

  async getById(id: string): Promise<T | undefined> {
    return this.items.find((item) => item.id === id);
  }

  async create(item: T): Promise<T> {
    this.items.push(item);
    return item;
  }

  async update(id: string, updatedFields: Partial<T>): Promise<T | undefined> {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;

    this.items[index] = { ...this.items[index], ...updatedFields };
    return this.items[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return false;

    this.items.splice(index, 1);
    return true;
  }

  async find(filter: Partial<T>): Promise<T[]> {
    return this.items.filter((item) =>
      Object.entries(filter).every(
        ([key, value]) => item[key as keyof T] === value
      )
    );
  }
}
