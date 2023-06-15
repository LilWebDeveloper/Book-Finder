export interface RowType {
  id: string;
  title: string;
  country: string;
  subtitle: string;
  publishedDate: string;
  authors: string[];
  img: string | undefined;
  price: string | undefined;
  currencyCode: string | undefined;
}
