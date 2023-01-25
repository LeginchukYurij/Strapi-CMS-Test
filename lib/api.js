export const fetcher = async (url, options) => {
  let responce;
  
  if(options) {
    responce = await fetch(url, options);
  } else {
    responce = await fetch(url);
  }

  return responce.json();
};