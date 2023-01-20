
<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name: 'home' }">Boolfolio</router-link>
                
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">Home <span
                                    class="visually-hidden">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'projects' }">Projects</router-link>
                            
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'contact' }">Contact Me</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>



</template>
<style lang="scss" scoped>

</style>