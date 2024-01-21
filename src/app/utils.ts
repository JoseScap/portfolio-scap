import supabase from "@/supabase/supabase"
import { cache } from "react"

export const getProfileData = cache(async function() {
  return await supabase
    .from('Profile')
    .select('*')
})

export const getJourneyData = cache(async function() {
  return await supabase
    .from('Journey')
    .select(`
      *,
      JourneyItem(
        *
      )
    `)
    .eq('fav', true)
    .order('id', { ascending: true })
    .order('endDate', { referencedTable: 'JourneyItem', ascending: false })
    .range(0, 1)
})