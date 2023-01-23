import './App.css';
import { createClient } from '@supabase/supabase-js'

function App() {

  const options = {
    // дефолтная схема
    schema: 'public',
    headers: { 'x-my-custom-header': 'my-app-name' },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }

  //const supabase = createClient(url, key, options)
  //const supabase = createClient('https://my-app.supabase.co', 'public-anon-key', options)

  const supabase = createClient('https://my-app.supabase.co', 'public-anon-key', {
    fetch: fetch.bind(globalThis)
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
