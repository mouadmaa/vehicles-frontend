import { StateCreator } from 'zustand'
import { VehicleSlice } from '@/store/vehicle/types'
import { useStore } from '@/store/store'
import { shallow } from 'zustand/shallow'

export const vehicleSlice: StateCreator<VehicleSlice> = set => ({
  vehicles: [],
  getVehicles: async () => {
    const res = await fetch(
      'https://api.escuelajs.co/api/v1/products?offset=0&limit=20',
    )
    const data = await res.json()
    set({ vehicles: data })
  },
})

export const useVehicleStore = (): VehicleSlice =>
  useStore(state => state, shallow)
