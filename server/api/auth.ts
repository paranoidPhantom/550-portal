import { createClient } from '@supabase/supabase-js'

const supabase = createClient('http://localhost:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE')

export default defineEventHandler(async (event) => {
    const { email, password } = readBody(event)
    console.log(email, password)
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    console.log(data, error)
    if (!error) {
        return data
    }
})