import { Cre } from '~/mocks/cres';

const cresUrl = '/api/v1/cres';

/**
 * Get CREs
 */
export async function apiGetCres() {
    const response = await fetch(cresUrl, {
        cache: 'no-store',
        method: 'GET',
    });

    if (!response.ok) {
        throw await response.text();
    }
    const res = await response.json();
    if (!res)
        return {
            cres: [],
        };

    return res;
}
