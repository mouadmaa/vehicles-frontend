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
  filter: {},
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
  getSearchVehicle: async () => {
    const { filter } = get()
    if (!filter) return
    console.log('search')
    // set({ loadingVehicles: true })
    // const { data: res } = await api.post<VehiclesResponse>(
    //   `${vehicleUrl}/search`,
    //   filter
    // )
    // set({ vehicles: res.data, pagination: res.meta, loadingVehicles: false })
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
