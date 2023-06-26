// export default defineNuxtRouteMiddleware(async(to, from) => {
//     const cookie = useCookie('session');
//     const res = await $fetch('/api/check-auth', {
//         method: "POST",
//         body: JSON.stringify({ sessionCookie : cookie.value })
//     }) as any;

//     const data = await res.json();
//     console.log(data,'data');
// })