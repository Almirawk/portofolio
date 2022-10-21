<template>
    <header>
        <div class="profil">
            <img src="../../assets/img/profil.jpg" alt=""/>
        </div>
        <div class="profil-info">
            <h1>Almira Wulan Kinasih</h1>
            <h3>Student</h3>
        </div>
        <nav id="navigation">

            <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
            <RouterLink :to="{ name: 'project' }">Project</RouterLink>
            <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>

        </nav>
    </header>
</template>

<style lang="scss">

header {
    text-align: center;
}
.profil img {
    width: 100px;
    border-radius: 50%;
}

#navigation {
    display: flex;
    padding: 10px;
    gap: 2rem;
    justify-content: center;
}
</style>