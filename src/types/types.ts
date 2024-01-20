import { Tables } from "./supabase.types";

export type Profile = Omit<Tables<'Profile'>, 'id' | 'created_at'>