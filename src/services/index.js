async function getData() {
  const url = `https://coronavirus-19-api.herokuapp.com/countries/BRAZIL`;
  const options = {
    mode: "cors",
    cache: "default",
    header: new Headers(),
    method: "GET"
  };
  const req = await fetch(url, options);
  const response = await req.json();
  return response;
}

export default getData;
