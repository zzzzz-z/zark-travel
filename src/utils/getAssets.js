export const getAccessURL = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
 