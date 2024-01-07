/**
 * code by @BiliRumble
 * @copyright WhCraftMC
*/
export function getUserLoginStatus(): boolean {
    const token = localStorage.getItem("token");
    if (token===null) {
        return false;
    }
    return true;
}

export function getUserToken() {
    if (getUserToken()) {
        return localStorage.getItem("Token");
    }
    return null;
}

export function setUserToken(token: string) {
    try {
        localStorage.setItem("Token", token);
        return;
    } catch (error) {
        return error;
    }
}

export function removeUserToken() {
    if (getUserToken()) {
        localStorage.removeItem("Token");
        return;
    }
    return;
}