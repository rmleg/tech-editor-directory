import { writable } from 'svelte/store';

export const willGradeChecked = writable(false);

export const filters = writable({
    additionalServices: [],
    crafts: [],
    specialties: [],
    languages: [],
    typesOfProjects: [],
});