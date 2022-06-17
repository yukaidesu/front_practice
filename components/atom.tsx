import { atom } from 'recoil'


export const Money = atom({
    key: 'money',
    default: {
        howMuch: '' as string,
        why: '' as string,
    }
})

export const UserInfo = atom({
    key: 'user',
    default: {
        lastName: '' as string,
        firstName: '' as string,
        lastNameKana: '' as string,
        firstNameKana: '' as string,
        birth: '' as string,
        genderMarriage: '' as string,
        family: '' as string,
        kids: '' as string,
        email: '' as string,
        license: '' as string,
        licenseNumber: '' as string
    }
})