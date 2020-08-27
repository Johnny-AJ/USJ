<template>
    <div>
        <top />
        <router-view></router-view>
        <bottom />
    </div>
</template>

<script>
    import top from "../components/top";
    import bottom from "../components/bottom";
    // import reserve from "@/views/reserve/reserve";
    export default {
        name: "home",
        components: {
            top,
            bottom,
            // reserve,
        },
        data() {
            return {};
        },
    };
</script>

<style>
</style>