import { type LocalStorageService } from '@/application/services/LocalStorageService'

export default class LocalStorageServiceImpl implements LocalStorageService {
  readStorage(key: string): any {
    if (typeof window != 'undefined') {
      const storage = localStorage.getItem(key)
      if (storage && storage.length) {
        try {
          return JSON.parse(storage)
        } catch {
          return storage
        }
      }
    }
    return null
  }

  setStorage(key: string, storage: any) {
    if (storage) {
      localStorage.setItem(key, JSON.stringify(storage))
      window.dispatchEvent(new CustomEvent('local-storage', { detail: { key, value: storage } }))
    }
  }

  removeStorage(key: string) {
    localStorage.removeItem(key)
    window.dispatchEvent(new CustomEvent('local-storage', { detail: { key, value: null } }))
  }

  clearStorage() {
    localStorage.clear()
    window.dispatchEvent(new CustomEvent('local-storage', { detail: { clear: true } }))
  }
}
