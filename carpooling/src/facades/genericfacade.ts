export interface GenericFacade<T,U> {
    create(data: T): T;
    getById(id: U): T | null;
    update(id: U, data: Partial<T>): T;
    delete(id: U): boolean
    list(): Array<T>;
}
