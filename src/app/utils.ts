import supabase from "@/supabase/supabase"
import { cache } from "react"

export const getProfileData = cache(async function() {
  return await supabase
    .from('profile')
    .select('*')
})