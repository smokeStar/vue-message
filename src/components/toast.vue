<template>
    <div class="toast" v-show="show">
        <div class="container">{{ text }}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text : '',
            show : false
        }
    }
}
</script>

<style scoped  lang="scss">
@import '../style/_mixin.scss';
.toast{
    width: fit-content;
    padding: 20px 40px;
    background-color: rgba(0,0,0,.8);
    color: white;
    font-size: 16px;
    border-radius: 10px;
    @include center(fixed);
    z-index: 100;
}

.container{
    max-width: 250px;
    word-wrap: break-word;
    max-height: 100px;
    overflow: hidden;
}


</style>
