import { ApiResponse, PaginationResponse } from '@/lib/axios'
import { Agency } from '@/store/agency/types'

export interface VehicleState {
  vehicles: Vehicle[]
  vehicle: Vehicle
  pagination: PaginationResponse
  loadingVehicles: boolean
  filter: any
}

export interface VehicleActions {
  getVehicles: () => Promise<Vehicle[]>
  getSearchVehicle: () => Promise<void>
  getVehicleBySlug: (slug: string) => Promise<void>
}

export interface VehicleSlice extends VehicleState, VehicleActions {}

export interface Vehicle {
  id: string
  model: string
  brand: string
  year: string
  type: VehicleType
  price: number
  priceBy: PriceBy
  coverUrl: string
  images: Object[]
  features: Features
  desc: string | null
  rentStart: Date | null
  rentEnd: Date | null
  isPublic: boolean
  slug: string
  agencyId: string
  agency: Agency
  createdAt: Date
  updatedAt: Date
}

export interface Features {
  id: string
  transmission: Transmission
  fuelType: FuelType
  exteriorColor: String
  interiorColor: String | null
  seatingCapacity: number
  packages: Packages
  mileage: number
  engine: String | null
  horsepower: number | null
  mpg: string | null
  drivetrain: Drivetrain
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

export enum Transmission {
  Automatic = 'Automatic',
  Manual = 'Manual',
}

export enum FuelType {
  Gasoline = 'Gasoline',
  Diesel = 'Diesel',
  Electric = 'Electric',
}

export enum Packages {
  Full = 'Full',
  Semi = 'Semi',
  Empty = 'Empty',
}

export enum Drivetrain {
  FrontWheelDrive = 'FrontWheelDrive',
  RearWheelDrive = 'RearWheelDrive',
  AllWheelDrive = 'AllWheelDrive',
}

export interface VehicleResponse extends ApiResponse {
  data: Vehicle
}

export interface VehiclesResponse extends ApiResponse {
  data: Vehicle[]
}
