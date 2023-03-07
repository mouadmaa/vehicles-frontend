import { GetState, SetState, StoreApi } from 'zustand'
import { shallow } from 'zustand/shallow'
import api, { MetadataApiResponse } from '@/lib/axios'
import { useStore } from '@/store/store'
import {
  Vehicle,
  VehicleActions,
  VehicleSlice,
  VehiclesResponse,
  VehicleState,
} from '@/store/vehicle/types'

const vehicleUrl = '/vehicles'

export const vehicleState: VehicleState = {
  vehicles: [],
  vehicle: {} as Vehicle,
  pagination: {} as MetadataApiResponse,
  loadingVehicles: false,
}

export const vehicleActions = (
  set: SetState<VehicleState>,
  _get: GetState<VehicleState>,
  _store: StoreApi<VehicleState>,
): VehicleActions => ({
  getVehicles: async (search?: string) => {
    set({ loadingVehicles: true })
    const { data: res } = await api.get<VehiclesResponse>(
      `${vehicleUrl}?populate=features${
        search ? `&searchBy=model[${search}]` : ''
      }`,
    )
    set({ vehicles: res.data, pagination: res.meta, loadingVehicles: false })
    return res.data
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
  useStore(
    state => ({
      vehicles: state.vehicles,
      vehicle: state.vehicle,
      pagination: state.pagination,
      loadingVehicles: state.loadingVehicles,
      getVehicles: state.getVehicles,
      getVehicleBySlug: state.getVehicleBySlug,
    }),
    shallow,
  )
