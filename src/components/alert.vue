<template>
    <div class="alert" v-show="show">
        <div class="box">
            <main>{{ content }}</main>
            <div @click="show = false">我知道了</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show : false,
            content : ''
        }
    }
}
</script>

<style scoped  lang="scss">
@import '../style/_mixin.scss';
.alert{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

.box{
    width: 80%;
    border-radius: 10px;
    background-color: white;
    @include center(absolute);
    text-align: center;
    z-index: 101;

    header{
        background-color: #eee;
        height: 50px;
        line-height: 50px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

    }

    main{
        width: 100%;
        line-height: 20px;
        padding: 50px 40px;
        box-sizing: border-box;
        word-break: break-all;
    }

    div{
        height: 50px;
        line-height: 50px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top: 1px solid #D0D0D0;
        background-color: #F2F2F2;
    }
}


</style>
