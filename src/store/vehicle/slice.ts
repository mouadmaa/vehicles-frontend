import { StateCreator } from 'zustand'
import { shallow } from 'zustand/shallow'
import api, { MetadataApiResponse } from '@/lib/axios'
import { useStore } from '@/store/store'
import { Vehicle, VehicleSlice, VehiclesResponse } from '@/store/vehicle/types'

const vehicleUrl = '/vehicles'

export const vehicleSlice: StateCreator<VehicleSlice> = (set, get) => ({
  vehicles: [],
  vehicle: {} as Vehicle,
  pagination: {} as MetadataApiResponse,
  getVehicles: async () => {
    const { data: res } = await api.get<VehiclesResponse>(
      `${vehicleUrl}?populate=features`,
    )
    if (res.status === 'success') {
      set({ vehicles: res.data, pagination: res.meta })
      return res.data
    }
    return get().vehicles
  },
  getVehicleBySlug: async (slug: string) => {
    const { data: res } = await api.get<VehiclesResponse>(
      `${vehicleUrl}?populate=features,agency&searchBy=slug[${slug}]`,
    )
    if (res.status === 'success' && res.data.length) {
      set({ vehicle: res.data[0] })
    }
  },
})

export const useVehicleStore = (): VehicleSlice =>
  useStore(state => state, shallow)
