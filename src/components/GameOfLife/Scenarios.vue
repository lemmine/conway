<template>
    <fieldset>
        <legend>Scenarios</legend>

        <button class="button" v-for="col in buttons" v-bind:key="col.id">
            <span>{{col.name}}</span>
        </button>

    </fieldset>
</template>

<script>
export default {
    data: function() {
        return {
            buttons: [
                {
                    name: "Default grid",
                    action: []
                },
                {
                    name: "Static shapes",
                    action: []
                },
                {
                    name: "Repeating patterns",
                    action: []
                },
                {
                    name: "Glider",
                    action: []
                }
            ]
        }
    }
}
</script>

<style scoped>

fieldset {
    border: 1px solid grey;
    margin-bottom: 1em;
}

.button {
    margin-right: 1em;
}
</style>
