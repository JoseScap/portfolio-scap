import supabase from "@/supabase/supabase"
import { cache } from "react"

export const getProfile = cache(async function() {
  return await supabase
    .from('Profile')
    .select('*')
})

export const getJourneys = cache(async function() {
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

export const getSkills = cache(async function() {
  return await supabase
    .from('Skill')
    .select('*')
    .order('years', { ascending: false })
})