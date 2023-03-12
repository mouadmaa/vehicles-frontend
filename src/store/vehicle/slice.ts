import { GetState, SetState, StoreApi } from 'zustand'
import api, { PaginationResponse } from '@/lib/axios'
import {
  Vehicle,
  VehicleActions,
  VehiclesResponse,
  VehicleState,
} from '@/store/vehicle/types'

const vehicleUrl = '/vehicles'

export const vehicleState = (): VehicleState => ({
  vehicles: [],
  vehicle: {} as Vehicle,
  pagination: {} as PaginationResponse,
  loadingVehicles: false,
  filter: {
    name: '',
  },
})

export const vehicleActions = (
  set: SetState<VehicleState>,
  get: GetState<VehicleState>,
  _store: StoreApi<VehicleState>,
): VehicleActions => ({
  getVehicles: async () => {
    set({ loadingVehicles: true })

    const { data: res } = await api.get<VehiclesResponse>(
      `${vehicleUrl}?populate=features`,
    )
    set({ vehicles: res.data, pagination: res.meta, loadingVehicles: false })
    return res.data
  },
  getVehicleBySlug: async (slug: string) => {
    const { data: res } = await api.get<VehiclesResponse>(
      `${vehicleUrl}?populate=features,agency&search=slug[${slug}]`,
    )
    if (res.status === 'success' && res.data.length) {
      set({ vehicle: res.data[0] })
    }
  },
})
