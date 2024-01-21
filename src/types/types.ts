import { Tables } from "./supabase.types";

export type Profile = Omit<Tables<'Profile'>, 'created_at'>
export type JourneyItem = Omit<Tables<'JourneyItem'>, 'created_at' | 'journeyId'>
export type Journey = Omit<Tables<'Journey'>, 'created_at'> & {
    JourneyItem?: JourneyItem[]
}