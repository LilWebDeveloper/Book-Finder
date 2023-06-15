export default function createData(
  id: string,
  title: string,
  country: string,
  subtitle: string,
  publishedDate: string,
  authors: string[],
  img?: string,
  price?: string,
  currencyCode?: string
) {
  return {
    id,
    title,
    country,
    subtitle,
    publishedDate,
    authors,
    img,
    price,
    currencyCode,
  };
}
