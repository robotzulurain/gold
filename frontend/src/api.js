const API = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

// helpers
async function getJSON(path) {
  const res = await fetch(`${API}${path}`, { credentials: 'include' });
  if (!res.ok) throw new Error(`Fetch ${path} failed ${res.status}`);
  return res.json();
}

// Summary endpoints
export function countsSummary(params='') { return getJSON(`/api/summary/counts-summary/${params}`); }
export function timeTrends(params='') { return getJSON(`/api/summary/time-trends/${params}`); }
export function antibiogram(params='') { return getJSON(`/api/summary/antibiogram/${params}`); }
export function sexAge(params='') { return getJSON(`/api/summary/sex-age/${params}`); }

// Geo / facilities
export function geoFacilities(params='') { return getJSON(`/api/geo/facilities/${params}`); }

// Options (filters)
export function options() { return getJSON(`/api/options/`); }

// Reports (examples used by UI)
export function reportSummary(params='') { return getJSON(`/api/report/summary/${params}`); }
export function reportFacilityLeague(params='') { return getJSON(`/api/report/facility-league/${params}`); }
export function reportAntibiogram(params='') { return getJSON(`/api/report/antibiogram/${params}`); }

// Auth endpoints used in UI
export async function whoami() { return getJSON(`/api/auth/whoami/`); }
export async function tokenAuth(credentials) {
  const res = await fetch(`${API}/api/auth/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error('Auth failed ' + res.status);
  return res.json();
}

// Data entry / upload
export async function createEntry(data) {
  const res = await fetch(`${API}/api/entry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Entry failed ' + res.status);
  return res.json();
}

export async function uploadCSV(formData) {
  const res = await fetch(`${API}/api/upload/`, {
    method: 'POST',
    body: formData
  });
  if (!res.ok) throw new Error('Upload failed ' + res.status);
  return res.json();
}

