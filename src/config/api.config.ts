export const BASE_URL = getBaseUrl();
export const BASE_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "true",
};

function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  return "https://api.mgraetz.de";
}
