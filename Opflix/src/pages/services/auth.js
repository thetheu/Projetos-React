export const parseJwt = () => {
    if (localStorage.getItem('usuario-OpFlix') !== null) {
        let token = localStorage.getItem('usuario-OpFlix').split('.')
        let payload = token[1];
        let base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }
}