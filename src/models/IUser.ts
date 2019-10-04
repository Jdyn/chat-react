export default interface IUser {
  id: number
  first_name: string
  last_name: string
  email?: string
  has_integrations?: boolean
  referral_code?: string
  referrals?: number
  unweighted_gpa?: number
  weighted_gpa?: number
  scholar: boolean
  profile_image_url?: string
  staff: boolean
  support: boolean
}