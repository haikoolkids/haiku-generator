const SUPABASE_URL = 'https://cvpnauqokinnpwanskbe.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cG5hdXFva2lubnB3YW5za2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNDMsImV4cCI6MTk4MzY4NDA0M30.A8Io_J4_NWTx-iVGngaqEBOxKmW8AGDymaSwiRF2Q0Q';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
    // eslint-disable-next-line no-unreachable
    // console.log('client', client);
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
function checkError(response) {
    // eslint-disable-next-line no-console
    return response.error ? console.error(response.error) : response.data;
}
// export async function getAll() {
//     const response = await client.from('one_liners').select();
//     console.log('response.data', response.data);
// }
// getAll();

export async function getHaikus() {
    const response = await client.from('haikus').select('*');
    return checkError(response);
}
