export interface BookType {
  id: string;
  volumeInfo: VolumeInfoType;
  saleInfo: SaleInfoType;
}

interface VolumeInfoType {
  title: string;
  subtitle?: string;
  publishedDate: string;
  authors: string[];
  imageLinks?: ImageLinksType;
}

interface SaleInfoType {
  country: string;
  listPrice?: ListPriceType;
}

interface ImageLinksType {
  smallThumbnail: string;
}

interface ListPriceType {
  amount: string;
  currencyCode: string;
}
