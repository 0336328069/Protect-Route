import { getAuth } from "firebase-admin/auth"
export default defineEventHandler(async (event) => {
    const sessionCookie = getCookie(event, 'session') as any;
    try{
        const claim = await getAuth().verifyIdToken(sessionCookie);
        if(!claim){
            throw createError({
                statusCode: 404,
                message: "Unauthorized",    
            })
        }
    }
    catch(err){
        throw createError({
            statusCode: 404,
            message: "Unauthorized",    
        })
    }
})