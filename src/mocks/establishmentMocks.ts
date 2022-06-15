import { IDictionary, IEstablishment } from "../types/establishmentInterface";

export const mockDictionary: IDictionary = {
  code: "cod",
  description: "codigo",
};

export const mockEstablishments: IEstablishment[] = [
  {
    establishmentType: [mockDictionary],
    name: "Sitio de comer 1",
    cusine: "Cocina rica",
    establishmentOffer: [mockDictionary],
    adress: "calle calle",
    municipality: "Valensia",
    region: "Valensia",
    phone: null,
    email: "",
    website: "",
    picture: "",
    pictureBackup: "",
    id: "id1234",
  },
  {
    establishmentType: [mockDictionary],
    name: "Sitio de comer 2",
    cusine: "Cocina no tan rica",
    establishmentOffer: [mockDictionary],
    adress: "Avenida calle",
    municipality: "Alicante",
    region: "Benidorm",
    phone: null,
    email: "@",
    website: ".com",
    picture: "foto.jpg",
    pictureBackup: "foto.jpg",
    id: "id5678",
  },
];

export const mockEstablishment: IEstablishment = {
  establishmentType: [
    {
      code: "RES",
      description: "Restaurante",
    },
  ],
  name: "La Grava",
  cusine: "Cocina tradicional",
  establishmentOffer: [
    {
      code: "DELIVERY",
      description: "A domicilio",
    },
  ],
  adress: "c/ de llargues, 28",
  municipality: "Albal",
  region: "Valencia",
  phone: 961840266,
  email: "info@restaurantelagrava.es",
  website: "",
  picture: "",
  pictureBackup: "",
  id: "629c6fab590f5fafee717fec",
};
