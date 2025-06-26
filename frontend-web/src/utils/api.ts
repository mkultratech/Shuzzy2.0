
export function buildPath(route: string): string
{
  const BASE = import.meta.env.DEV
    ? 'https://localhost:5000'
    : 'https://${import.meta.env.VITE_APP_DOMAIN}';
  
  return `${BASE}/${route}`;
}
  
// export async function post<T>(route: string, data: any): Promise<T> {
//   const res = await fetch(`${BASE}/api/${route}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// }