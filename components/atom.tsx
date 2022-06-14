import { atom } from 'recoil'


export const UserAtom = atom<string>({
    key: 'user',
    default: {
        money: '' as string,
        why: '' as string,
    }
})

export const lastNameAtom = atom<string>({
    key: 'lastNameAtom',
    default: '' as string
})

export const firstNameAtom = atom<string>({
    key: 'firstNameAtom',
    default: '' as string
})

export const lastNameKanaAtom = atom<string>({
    key: 'lastNameKanaAtom',
    default: '' as string
})

export const firstNameKanaAtom = atom<string>({
    key: 'firstNameKanaAtom',
    default: '' as string
})

export const birthAtom = atom<string>({
    key: 'birthAtom',
    default: '' as string
})

export const genderMarriageAtom = atom<string>({
    key: 'genderMarriageAtom',
    default: '' as string
})

export const familyAtom = atom<string>({
    key: 'familyAtom',
    default: '' as string
})

export const kidsAtom = atom<string>({
    key: 'kidsAtom',
    default: '' as string
})
export const emailAtom = atom<string>({
    key: 'emailAtom',
    default: '' as string
})
export const licenseAtom = atom<string>({
    key: 'licenseAtom',
    default: '' as string
})
export const licenseNumberAtom = atom<string>({
    key: 'licenseNumberAtom',
    default: '' as string
})
