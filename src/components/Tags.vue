<template>
    <div class="tags-wrapper">
        <span class="tag" v-for="tag in tags" :key="tag">{{tag}}</span>
    </div>
</template>

<script>
export default {
    name: 'Tags',
    props : {
        tags: Array
    }
}
</script>

<style>
.tags-wrapper {
    max-height: 75px;
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 0.6em;
    flex-wrap: wrap;
    overflow-x: auto;
}
.tag {
    padding: 0px 10px;
    margin: 2px;
    background: #c5c5c5;
    border-radius: 15px;
    color: #333;
}
</style>
