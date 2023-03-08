import { createContext, useContext, useMemo } from 'react'
import { createStore, StoreApi, useStore as useContextStore } from 'zustand'
import { shallow } from 'zustand/shallow'
import { combine } from 'zustand/middleware'
import { vehicleActions, vehicleState } from '@/store/vehicle/slice'
import { VehicleSlice } from '@/store/vehicle/types'

export interface ContextStore extends VehicleSlice {}

let store: StoreApi<ContextStore> | undefined

const initStore = (preloadedState = {}) =>
  createStore<ContextStore>(
    combine(
      {
        ...vehicleState(),
        ...preloadedState,
      },
      (...params) => ({
        ...vehicleActions(...params),
      }),
    ),
  )

export const StoreContext = createContext<StoreApi<ContextStore> | null>(null)
export const StoreProvider = StoreContext.Provider

export const useStore = <T>(
  selector: (state: ContextStore) => T,
  equalityFn: (a: T, b: T) => boolean = shallow,
) => {
  const store = useContext(StoreContext)!
  return useContextStore(store, selector, equalityFn)
}

export const initializeStore = (preloadedState?: ContextStore) => {
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

export const useCreateStore = (initialState: ContextStore | string) => {
  const state =
    typeof initialState === 'string' ? JSON.parse(initialState) : initialState
  return useMemo(() => initializeStore(state), [state])
}
