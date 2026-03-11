const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = 'https://ftxadlakjhklmrfznciq.supabase.co'
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eGFkbGFramhrbG1yZnpuY2lxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjYzNDkzNywiZXhwIjoyMDY4MjEwOTM3fQ.0vYAh5wQBq0yKD2jE_TlE6c6BIaQjI_LJagHZElA1lI'

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
})

async function createTable() {
  // Create profiles table
  const { error } = await supabase.rpc('create_profiles_table', {})
  
  // Since RPC might not work, let's try direct table creation via rest API
  console.log('Creating table...')
  
  const createSQL = `
    CREATE TABLE IF NOT EXISTS profiles (
      id UUID PRIMARY KEY,
      email TEXT NOT NULL,
      is_pro BOOLEAN DEFAULT false,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `
  
  // Use the rest API to execute SQL
  const response = await fetch(`${SUPABASE_URL}/rest/v1/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({})
  })
  
  console.log('Response:', response.status)
}

createTable().catch(console.error)
