import { IDictionary, IEstablishment } from "../types/establishmentInterface";

export const mockDictionary: IDictionary = {
  code: "cod",
  description: "codigo"
}

export const mockEstablishments: IEstablishment[] = [
  {
    establishmentType: [mockDictionary],
    name: "Sitio de comer 1",
    cusine: "Cocina rica",
    establishmentOffer: [mockDictionary],
    adress: "calle calle",
    municipality: "Valensia",
    region: "Valensia",
    phones: null,
    emails: "",
    website: "",
    picture: "",
    id: "id1234"
  },
  {
    establishmentType: [mockDictionary],
    name: "Sitio de comer 2",
    cusine: "Cocina no tan rica",
    establishmentOffer: [mockDictionary],
    adress: "Avenida calle",
    municipality: "Alicante",
    region: "Benidorm",
    phones: null,
    emails: "@",
    website: ".com",
    picture: "foto.jpg",
    id: "id5678"
  }
];

