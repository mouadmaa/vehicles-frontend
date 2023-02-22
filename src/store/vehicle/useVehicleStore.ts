import { createStore, useStore } from 'zustand'

export const vehicleStore = createStore<any>(set => ({
  vehicles: [],
  setVehicles: (data: any) => set({ vehicles: data }),
}))

export const useVehicleStore = () => useStore(vehicleStore)
