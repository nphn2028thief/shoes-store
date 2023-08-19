export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  shippingAddresses: IShippingAddress[];
}

export interface IShippingAddress {
  _id: string;
  phone: string;
  addres: string;
}
