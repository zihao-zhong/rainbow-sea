export default class IndexedDBClass {
  private db: any = undefined;

  constructor(dbName: string) {
    let request = window.indexedDB.open(dbName);

    request.onerror = (event: Event) => {
      console.log('数据库打开报错');
    };

    request.onsuccess = () => {
      this.db = request.result;
    };
  }

  createTable(tableName: string, options: IDBObjectStoreParameters) {
    return this.db.createObjectStore(tableName, options);
  }

  createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters) {
    return this.db.createIndex(name, keyPath, options);
  }
}
