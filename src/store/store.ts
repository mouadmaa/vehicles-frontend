import { createContext, useContext, useMemo } from 'react'
import create, { StoreApi, UseBoundStore } from 'zustand'

export const StoreContext = createContext({})
export const StoreProvider = StoreContext.Provider

export const useStore = (selector: any, eqFn: any) => {
  const store = useContext(StoreContext) as any
  return store(selector, eqFn)
}

let store: UseBoundStore<StoreApi<any>> | undefined

const initialState: any = {
  data: null,
}

function initStore(preloadedState = initialState) {
  return create((set: any, _get: any) => ({
    ...initialState,
    ...preloadedState,
    setData: (data: any) => {
      set({ data })
    },
  }))
}

export const initializeStore = (preloadedState?: any) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useCreateStore(initialState: any) {
  const state =
    typeof initialState === 'string' ? JSON.parse(initialState) : initialState
  return useMemo(() => initializeStore(state), [state])
}
