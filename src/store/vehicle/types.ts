import { ApiResponse } from '@/lib/axios'
import { Agency } from '@/store/agency/types'

export interface Vehicle {
  id: string
  name: string
  model: string
  brand: string
  type: VehicleType
  price: number
  priceBy: PriceBy
  details: any
  desc: string | null
  images: Object[]
  rentStart: Date | null
  rentEnd: Date | null
  isVisible: boolean
  slug: string
  agencyId: string
  agency: Agency
  createdAt: Date
  updatedAt: Date
}

export interface VehicleSlice {
  vehicles: Vehicle[]
  vehicle: Vehicle
  getVehicles: () => Promise<Vehicle[]>
  getVehicleBySlug: (slug: string) => Promise<void>
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
