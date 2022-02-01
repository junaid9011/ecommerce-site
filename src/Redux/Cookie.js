export const setCookie = (key, value, expire_time_in_seconds) => {
    let d = new Date();
    d.setTime(d.getTime() + (expire_time_in_seconds * 1000*3600*24));
    let expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

export const getCookie = (key) => {
    let name = key + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const checkCookie = (key) => {
    let value = getCookie(key);
    return value !== "" && value != null;
}

export const deleteCookie = (key, path, domain) => {
    if (checkCookie(key)) {
        document.cookie = key + "=" +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}