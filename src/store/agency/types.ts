export interface Agency {
  id: string
  name: string
  phone: string
  address: string
  desc: string | null
  coverUrl: string | null
  coordinates: string[]
  subscriptionEnd: Date | null
  slug: string
  ownerId: string
  cityId: string
  createdAt: Date
  updatedAt: Date
}
