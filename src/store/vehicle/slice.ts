import { StateCreator } from 'zustand'
import { shallow } from 'zustand/shallow'
import api from '@/lib/axios'
import { useStore } from '@/store/store'
import { Vehicle, VehicleSlice, VehiclesResponse } from '@/store/vehicle/types'

const vehicleUrl = '/vehicles'

export const vehicleSlice: StateCreator<VehicleSlice> = set => ({
  vehicles: [],
  vehicle: {} as Vehicle,
  getVehicles: async () => {
    const { data } = await api.get<VehiclesResponse>(vehicleUrl)
    const vehicles = data.data
    set({ vehicles })
    return vehicles
  },
  getVehicleBySlug: async (slug: string) => {
    const { data } = await api.get<VehiclesResponse>(
      `${vehicleUrl}?searchBy=slug[${slug}]`,
    )
    set({ vehicle: data.data[0] })
  },
})

export const useVehicleStore = (): VehicleSlice =>
  useStore(state => state, shallow)
