export interface Vehicle {
  id: number
  name: string
}

export interface VehicleSlice {
  vehicles: Vehicle[]
  getVehicles: () => Promise<void>
}
