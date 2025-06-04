const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://rjbdggjpudrmxgxfxxel.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqYmRnZ2pwdWRybXhneGZ4eGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODExNDgsImV4cCI6MjA2NDA1NzE0OH0.HiXtaAuz-CGFrFoP7z-oGP_ontgvPduEgEhFSm37Yzk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;
