export async function fetchAlbumList() {
  const request = 'https://jsonplaceholder.typicode.com/albums';
  const response = await fetch(request);
  const responseJSON = await response.json(response);

  return responseJSON;
}
