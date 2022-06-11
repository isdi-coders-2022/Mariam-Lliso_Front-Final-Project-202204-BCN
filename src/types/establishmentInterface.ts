export interface IEstablishmentState {
  totalEstablishments: number;
  currentPage: number;
  nextPage: IPage | null;
  previousPage: IPage | null;
  establishments: IEstablishment[];
}

export interface IPage {
  page: number;
  limit: number;
}

export interface IEstablishment {
  establishmentType: IDictionary[];
  name: string;
  cusine: String;
  establishmentOffer: IDictionary[] | [];
  adress: string;
  municipality: string;
  region: string;
  phones: number | null;
  emails: string;
  website: string;
  picture: string;
  pictureBackup: string;
  id: string;
}

export interface IDictionary {
  code: string;
  description: string;
}
