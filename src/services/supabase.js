// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxrzkspegyjlgmfsgkli.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cnprc3BlZ3lqbGdtZnNna2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTEyODksImV4cCI6MjA3MTEyNzI4OX0.JjCvDhATOLgHu2MuFd8fuppHvwbw4pkWYxO6JgUoAPQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
