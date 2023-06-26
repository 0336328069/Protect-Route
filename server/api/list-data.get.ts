import checkAuthPost from "../ultils/check-auth.post";
export default defineEventHandler(async (event) => {
    if(!getCookie(event, 'session')){
        await checkAuthPost(event);
    }
    const runtimeConfig = useRuntimeConfig();
    try{
        const data = await $fetch(`${runtimeConfig.public.apiBase}/users123`) as any;
        if(!data.length){
            throw createError({
                statusCode: 404,
                message: "Unauthorized",    
            })
        }
        return data;
    }
    catch(err){
        throw createError({
            statusCode: 404,
            message: "Unauthorized",    
        })
    }
})