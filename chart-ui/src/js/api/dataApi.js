function getBaseUrl() {
  return 'http://localhost:3000/';
}

function fetchResponse(request) {
  return fetch(request)
    .then(response => response.json())
    .catch(error => error);
}

class DataApi {
  static getItem() {
    const request = new Request(`${getBaseUrl()}item`, {
      method: 'GET',
      credentials: 'include',
    });
    return fetchResponse(request);
  }
}

export default DataApi;
