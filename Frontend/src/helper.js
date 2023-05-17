export function isloggedIn() {
    return localStorage.getItem('isloggedIn')==='true';
}
export function isplanner() {
    return localStorage.getItem('isplanner')==='true';
}
export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}
