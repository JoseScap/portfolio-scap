import { Tables } from "./supabase.types";

export type Profile = Omit<Tables<'Profile'>, 'id' | 'created_at'>
export type JourneyItem = Tables<'JourneyItem'>
export type Journey = Tables<'Journey'> & {
    JourneyItem?: JourneyItem[]
}