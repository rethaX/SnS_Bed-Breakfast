import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23494,
  login: 'vu}L@Ce\\LvX',
};

export const sampleWithPartialData: IUser = {
  id: 13415,
  login: 'oINl@f\\cIm5g\\Hx6G3',
};

export const sampleWithFullData: IUser = {
  id: 22546,
  login: 'b4-j',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
