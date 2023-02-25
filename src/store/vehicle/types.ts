import { ApiResponse } from '@/lib/axios'

export type Vehicle = {
  id: string
  name: string
  model: string
  brand: string
  type: VehicleType
  price: number
  priceBy: PriceBy
  details: Object | null
  desc: string | null
  images: Object[]
  rentStart: Date | null
  rentEnd: Date | null
  isVisible: boolean
  slug: string
  agencyId: string
  createdAt: Date
  updatedAt: Date
}

export interface VehicleSlice {
  vehicles: Vehicle[]
  getVehicles: () => Promise<void>
}

export enum VehicleType {
  Car = 'Car',
  Motorcycle = 'Motorcycle',
}

export enum PriceBy {
  Month = 'Month',
  Week = 'Week',
  Day = 'Day',
  Hour = 'Hour',
}

export interface VehicleResponse extends ApiResponse {
  data: Vehicle
}

export interface VehiclesResponse extends ApiResponse {
  data: Vehicle[]
}
