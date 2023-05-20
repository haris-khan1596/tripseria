export function isloggedIn() {
    return localStorage.getItem('isloggedIn')==='true';
}
export function isUser() {
    return isloggedIn() && localStorage.getItem('isplanner') !== 'true';
  }  
export function isplanner() {
    return localStorage.getItem('isplanner')==='true'&&isloggedIn();
}
export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}
