import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'cddb7804-e987-4f8e-a678-e390c06b86aa',
};

export const sampleWithPartialData: IAuthority = {
  name: 'fb241def-a9b1-47d2-8b00-b4aa7ac39d5e',
};

export const sampleWithFullData: IAuthority = {
  name: '0822ec75-02e0-406b-996a-0e87dfc20103',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
