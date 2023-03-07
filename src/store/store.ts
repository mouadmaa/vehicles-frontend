import { createContext, useContext, useMemo } from 'react'
import { create, StoreApi, UseBoundStore } from 'zustand'
import { vehicleActions, vehicleState } from '@/store/vehicle/slice'
import { VehicleSlice } from '@/store/vehicle/types'

export interface StoreState extends VehicleSlice {}

let store: UseBoundStore<StoreApi<StoreState>> | undefined

export const StoreContext = createContext({})
export const StoreProvider = StoreContext.Provider

export const useStore = <StoreState>(
  selector: (state: StoreState) => StoreState,
  equals?: (a: StoreState, b: StoreState) => boolean,
): StoreState => {
  const store = useContext(StoreContext) as UseBoundStore<StoreApi<StoreState>>
  return store<StoreState>(selector, equals)
}

const initStore = (preloadedState = {}) => {
  return create<StoreState>((...params) => ({
    ...vehicleState,
    ...preloadedState,
    ...vehicleActions(...params),
  }))
}

export const initializeStore = (preloadedState?: StoreState) => {
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

export function useCreateStore(initialState: StoreState | string) {
  const state =
    typeof initialState === 'string' ? JSON.parse(initialState) : initialState
  return useMemo(() => initializeStore(state), [state])
}
