const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = 'https://ftxadlakjhklmrfznciq.supabase.co'
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eGFkbGFramhrbG1yZnpuY2lxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjYzNDkzNywiZXhwIjoyMDY4MjEwOTM3fQ.0vYAh5wQBq0yKD2jE_TlE6c6BIaQjI_LJagHZElA1lI'

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

async function createTable() {
  console.log('Creating profiles table...')
  
  // Try to create table using SQL directly via postgrest
  const { data, error } = await supabase.from('profiles').select('*').limit(1)
  
  if (error && error.code === '42P01') { // Table doesn't exist
    console.log('Table does not exist, attempting to create...')
    
    // Insert a dummy record to create table (won't work without table)
    // We need to use the management API instead
  }
  
  console.log('Check result:', data, error)
}

createTable().catch(console.error)
