import { GetState, SetState, StoreApi } from 'zustand'
import api, { PaginationResponse } from '@/lib/axios'
import {
  Vehicle,
  VehicleActions,
  VehicleFilter,
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
  getVehicles: async (newFilter?: VehicleFilter) => {
    // Filter
    const filter: any = { ...get().filter, ...newFilter }
    let searchQuery = ''
    if (filter.name) {
      filter.name.split(' ').forEach((str: string) => {
        if (!str) return
        searchQuery += `model[${str}],`
        searchQuery += `brand[${str}],`
        searchQuery += `year[${str}],`
      })
    }
    searchQuery = searchQuery.substring(0, searchQuery.length - 1)

    // Send Request
    set({ filter, loadingVehicles: true })
    const { data: res } = await api.get<VehiclesResponse>(
      `${vehicleUrl}?populate=features${
        searchQuery && `&search=${searchQuery}`
      }`,
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
