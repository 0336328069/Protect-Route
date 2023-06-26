import { getApps, cert, initializeApp } from "firebase-admin/app";

const fireBaseServerConfigs = {
    "type": "service_account",
    "project_id": "protect-route",
    "private_key_id": "330caf51d0e43c396fd579285d3b649debd4f907",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2xS9pFGQguQaj\nQAPJsMfjBSLFl6VU3AAUCLm0bIAHl72Ihbl50EsiN1Bb2vHaaO5rDaj7LmAZrtsR\nSjf1MXyrmOQ4znIAG9AAu9Lzw6cHek2UHI+zTGKpHg2GDQj/YOihC239yoHJLdj1\not7ajg+/aDRuhmJleZmJxeWheoJKJU7wrjSZE9SyKhWvJVUNUTNm+pl1xrjuwJ18\n4Iw8HCgd1orHWAwLTdLpo+vhbpC7b35lcqN00WYxpc/kteDmQ9/ROUr8cl6eER26\n8mn7foqmH5UG5byIRkKkYymq37tx4Dxka4RKYdmLz2S0H3NgI71N8Ef6nBn1/OdA\ncJZmxALDAgMBAAECggEAUU0AjHUaHyY/CiJhLPg6ykUQFSYiUM+2JzNEbDoxb28z\ny8V0Xnfl3BgP4nRPzjCMEcnXR7h23iXWY+gIYUT8qJZPuuc2dc7pZVIngfCf3act\nWDumPoM1hfYM3PrybCtO/8hGSrUoq3V+A7JKAJ1d6u5vGFUl8u62+j6yKXUF/PW/\n+7zRuZHEXhoZjmdDHe+7Y/ZAfmkFU88SqQ1wUIGiZxao8hWDTH1lMJjFgyCl1Pwf\n7kiZGgY9ecsv7+TQiuE4Vy3S95nc6BKRv12iKYnLARDdFkyqjatF+k0nWKNS8Abo\n53vwFDaiqA4/kZT1plV/WAkUfVfDNzgOqLUh6MM3xQKBgQDhzZf1FoCCx37KqHcU\n9ADXzrnpJ8E+paQhhw/ngpZQOvo6OTDu57+BlZE0iQ6i/Kj0GDHiJUBMlc6wJvfZ\nHVuzBdD6ySN82yizDRMYMUjkFcUud37kyV26+6ww0PQ6iZQP0ky8aYEGNeZdkj9H\n3lbk/586vP3J6/vvadp/aPy7PQKBgQDPNlrkhuDgwHdIppQag0EOxfVrU0yEZhzc\nsfJwm4am6Qmrm4k4grEm5q72fAM9xN7HFUVupnyPcRhrpr74d+Mpys3z0Pd1YJ0H\np/1mY7n+r8GwythiHacHMfZs3CCAySj3NQRJZgLipy/7BRXn3ruGxS/SmWClCxO9\nTI2cPueV/wKBgQCfIzJxPMadZNPrKAek8MKXVc6Yj7gV2s9uAa4nz1T4flhUKHJg\nLVw+i5amm+GA5Oh9/39IjlBeqUXdx9jtX099QCAkXxVvrVVlu1U1u6ZPeThao0T/\nIRu56B1W2i0GBGghLml+cCzKn7oXQDbxA7Xh9nXWA9QpNvN7q/Kd0PQtUQKBgQC5\nzdWnAcL4Bd1wSd6X/4YAx0WP3XvJZP8QbogkrXEKjgBb3vYmtBpB9ayB3SXS54uU\nHODLnYIn5ZOuRDEOAAK0YORYctLSb7WfPeWdQGNxmwwliV6KbGhvrT940dJbaQXQ\n1btoTY7cymndvuurpS+mY37Ea0Ab/ljO76wzpLxo5QKBgGGvqmih2G+fBxsiOD70\nTDvaLVx1g9SOEFiICU4Wfp4osJmScZqA/MAQzDiXhM41o2lqz+XJuxKd6aJKn5UR\nP258NGsLSvPQciOL2iimFPK+/wUPt9QlcAxV6Bj1LWxjpqVj66CG0w0rdTjZrcu4\nlDan0VJ8wWzzRflooLCu2fr3\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-hi7fa@protect-route.iam.gserviceaccount.com",
    "client_id": "108112096323068807140",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hi7fa%40protect-route.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
} as any;

export default function useFireBaseServer() {
    let app;
    if(getApps().length === 0)
    app = initializeApp({
        credential: cert({...fireBaseServerConfigs})
    })
    return {
        app
    }
}