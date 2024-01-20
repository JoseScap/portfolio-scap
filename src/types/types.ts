import { Tables } from "./supabase.types";

export type Profile = Omit<Tables<'profile'>, 'id' | 'created_at'>