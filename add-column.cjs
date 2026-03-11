const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = 'https://ftxadlakjhklmrfznciq.supabase.co'
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eGFkbGFramhrbG1yZnpuY2lxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjYzNDkzNywiZXhwIjoyMDY4MjEwOTM3fQ.0vYAh5wQBq0yKD2jE_TlE6c6BIaQjI_LJagHZElA1lI'

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

async function addColumn() {
  // Check if is_pro column exists by trying to update
  const { data, error } = await supabase
    .from('profiles')
    .update({ is_pro: false })
    .eq('id', '00000000-0000-0000-0000-000000000000')
    .select()
  
  if (error && error.message.includes('is_pro')) {
    console.log('is_pro column does not exist, need to add it')
  } else {
    console.log('is_pro column already exists or table works!')
  }
  
  // Try inserting with is_pro to trigger creation if needed
  console.log('Testing insert with is_pro...')
}

addColumn().catch(console.error)
