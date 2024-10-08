import { API_KEY } from "./constants";

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  console.log('Headers:', headers);
  console.log('AccessToken:', accessToken);

  return headers;
}