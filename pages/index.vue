<template>
    <div>
        <h1 class="text-3xl font-bold underline italic">
            Hello world!
        </h1>
    </div>
</template>

<script lang="ts" setup>
    import {signInWithEmailAndPassword, setPersistence, inMemoryPersistence, getIdToken, signOut, createUserWithEmailAndPassword} from 'firebase/auth';
    const { auth } = useFireBase();

    onMounted(() => {
        setPersistence(auth, inMemoryPersistence).then(() => {
            signInWithEmailAndPassword(auth, "hungtest@mgisolutions.com", "test12321321").then((user) => {
                return getIdToken(user.user).then(async (idToken) => {
                    const userData = await $fetch('/api/login', {
                        method: "POST",
                        body: {
                            idToken: idToken
                        },
                        headers: {
                            "Content-Type":"application/json"
                        }
                    }) as any;
                    if(userData.error){
                        return;
                    }
                    signOut(auth).then(() => {
                        navigateTo('/dash-board');
                    })
                })
            })
        })
    })
</script>