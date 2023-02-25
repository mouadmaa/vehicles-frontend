import { StateCreator } from 'zustand'
import { shallow } from 'zustand/shallow'
import api from '@/lib/axios'
import { useStore } from '@/store/store'
import { VehicleSlice, VehiclesResponse } from '@/store/vehicle/types'

const vehicleUrl = '/vehicles'

export const vehicleSlice: StateCreator<VehicleSlice> = set => ({
  vehicles: [],
  getVehicles: async () => {
    const { data } = await api.get<VehiclesResponse>(vehicleUrl)
    set({ vehicles: data.data })
  },
})

export const useVehicleStore = (): VehicleSlice =>
  useStore(state => state, shallow)
