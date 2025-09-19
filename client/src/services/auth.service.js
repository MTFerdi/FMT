// client/src/services/auth.service.js
import axios from "axios";

// NGINX/Ingress exposes the services under /api/* — no localhost fallbacks.
const baseURL = process.env.REACT_APP_SERVER_AUTH_URL || "/api/auth";

const api = axios.create({ baseURL });

export const signup = (data) => api.post("/signup", data);  // NOT /register
export const login  = (data) => api.post("/login", data);
export const verify = (token) =>
  api.get("/verify", { headers: { Authorization: `Bearer ${token}` } });

export default { signup, login, verify };
