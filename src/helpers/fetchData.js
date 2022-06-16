export default function fetchData(url, method = "GET") {
  const req = {
    method,
  };

  return fetch(url, req).then(async (res) => {
    if (res.ok) {
      return await res.json();
    } else {
      const error = `Error in fetching data from ${url}`;
      return Promise.reject(error);
    }
  });
}
