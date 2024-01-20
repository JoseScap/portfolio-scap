import supabase from "@/supabase/supabase";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  let { data, error } = await supabase
    .from('profile')
    .select('*')
        
  return Response.json({ data, error })
}