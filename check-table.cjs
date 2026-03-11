const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = 'https://ftxadlakjhklmrfznciq.supabase.co'
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eGFkbGFramhrbG1yZnpuY2lxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjYzNDkzNywiZXhwIjoyMDY4MjEwOTM3fQ.0vYAh5wQBq0yKD2jE_TlE6c6BIaQjI_LJagHZElA1lI'

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

async function check() {
  // Get table info from information_schema
  const { data, error } = await supabase
    .from('information_schema.columns')
    .select('column_name, data_type')
    .eq('table_name', 'profiles')
  
  console.log('Columns:', data)
}

check().catch(console.error)
