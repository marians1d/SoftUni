import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, Provider, PLATFORM_ID } from '@angular/core';

interface IStorage {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T;
}

export class StorageService implements IStorage {
    setItem<T>(key: string, item: T): T { return item; }
    getItem<T>(key: string): T { return null as any }
}

export function storageFactory(platformId: string): any {
  if (isPlatformBrowser(platformId)) {
    return new BrowserStorage();
  }

  if (isPlatformServer(platformId)) {
    return new ServerStorage();
  }
}

export const storageServiceProvider: Provider = {
  provide: StorageService,
  useFactory: storageFactory,
  deps: [PLATFORM_ID],
};

@Injectable()
export class BrowserStorage {
  localStorage = localStorage;
  setItem<T>(key: string, item: T): T {
    const str = typeof item === "string" ? item : JSON.stringify(item);
    this.localStorage.setItem(key, str);
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key);
    try {
      item = JSON.parse(tmp!);
    } catch {
      item = tmp;
    }

    return item;
  }
}

const sourse: {[key: string]: any} = {}

@Injectable()
export class ServerStorage {
  localStorage = {
    data: sourse,
    setItem<T>(key: string, item: T): void {
      this.data[key] = item;
    },
    getItem<T>(key: string): T {
      return this.data[key];
    },
  };
  setItem<T>(key: string, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key) as any;
    try {
      item = JSON.parse(tmp);
    } catch {
      item = tmp;
    }

    return item;
  }
}
