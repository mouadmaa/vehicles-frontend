import { StateCreator } from 'zustand'
import { VehicleSlice } from '@/store/vehicle/types'

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

// export const slice = () => useStore(vehicleStore)
