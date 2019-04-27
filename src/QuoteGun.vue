<template>
    <div class="quote-gun-app">
        <canvas id="canvas" width="200" height="200" hidden/>
        <Header/>
        <QuoteCard/>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import QuoteCard from './components/QuoteCard.vue';
import Footer from './components/Footer.vue';

export default {
    name : 'QuoteGun',
    components:{
        Header,
        QuoteCard,
        Footer
    },
    mounted(){
        let canvas =  document.getElementById('canvas');
        if(canvas){
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            context.textBaseline = 'middle';
            context.textAlign = 'center';
            context.font = '200px "Montserrat", "sans-serif"';
            context.fillStyle = '#000';
            context.fillText('QG', 100, 100, 200);

            const link = document.querySelector("link[rel*='icon']");
            link.type = 'image/x-icon';
            link.href = canvas.toDataURL('image/png');
        }
    }
}
</script>

<style>
.quote-gun-app{
    display: flex;
    flex-direction: column;
    flex:1;
    overflow: auto;
    text-align: center;
}
</style>
