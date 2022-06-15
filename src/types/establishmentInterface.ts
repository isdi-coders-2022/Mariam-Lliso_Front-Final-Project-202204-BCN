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
  establishmentType: IDictionary[] | [];
  name: string;
  cusine: string;
  establishmentOffer: IDictionary[] | [];
  adress: string;
  municipality: string;
  region: string;
  phone: number | null;
  email: string | null;
  website: string | null;
  picture: string | null;
  pictureBackup: string | null;
  id: string;
}

export interface IValidationEstablishment {
  establishmentType: boolean;
  name: boolean;
  adress: boolean;
  municipality: boolean;
  region: boolean;
}

export interface IEstablishmentAddEdit {
  establishmentType: string;
  name: string;
  cusine?: string;
  establishmentOffer?: string;
  adress: string;
  municipality: string;
  region: string;
  phone?: string | number | null;
  email?: string | null;
  website?: string | null;
  image?: string | null;
}

export interface IDictionary {
  code: string;
  description: string;
}
