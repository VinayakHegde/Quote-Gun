<template>
    <div class="quote-card-wrapper" v-on:click="getQuote">
        <div v-if="status && status !== 'LOADING'" class="quote-card-info">Keep tapping/clicking to load more</div>
        <Indicator class="state-container" v-if="status == 'ERROR'" type="ERROR" imgAltText="!" imgWidth="40px" bodyText="Something went wrong, please try again!"/>
        <Indicator class="state-container" v-else-if="status == 'LOADING'" type="LOADING" imgAltText="..." imgWidth="40px" bodyText="Loading..."/>
        <div class="state-container" v-else-if="status == 'LOADED'">
            <Indicator class="quote-wrapper" type="LOADED" imgAltText="" imgWidth="24px" :bodyText="Quote"/>
            <!-- Tags needing done -->
            <Tags :tags="Tags"/>
            <div class="author">{{Author}}</div>
        </div>
        <div v-else class="state-container">Tap/click to load quote</div>
    </div>
</template>

<script>
import axios from 'axios';
import Indicator from './Indicator.vue';
import Tags from './Tags.vue';
import {APP_STATUS, API_ENDPOINT} from '../shared/Constants';

export default {
    name: "QuoteCard",
    data(){
        return {
            appStatus : APP_STATUS,
            apiEndpoint : API_ENDPOINT, 
            favqResponse : null,
            status : null
        }
    },
    components:{
        Indicator,
        Tags
    },
    methods :{
        getQuote(){
            this.status = this.appStatus.LOADING;

            axios.get(this.apiEndpoint).then(response => {
                this.favqResponse = response.data;
                this.status = this.appStatus.LOADED;
            }).catch(() => {
                this.favqResponse = null;
                this.status = this.appStatus.ERROR;
            });
        }
    },
    computed : {
        Tags(){
            let tags = [];
            if(this.favqResponse && this.favqResponse.quote){
                tags = this.favqResponse.quote.tags || tags;
            }
            return tags;
        },

        Author(){
            let author = 'Anonymous';
            if(this.favqResponse && this.favqResponse.quote){
                author = this.favqResponse.quote.author || author;
            }

            return '-'.concat(author);
        },

        Quote(){
            let quote = '';
            if(this.favqResponse && this.favqResponse.quote){
                quote = this.favqResponse.quote.body || quote;
            }
            return quote;
        }

    }
}
</script>
<style>

.quote-card-wrapper{
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #2c3e50;
    cursor: pointer;
}
.quote-card-info {
    color: #c5c5c5;
    font-size: 1.2em;
}
.state-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-sizing: border-box;
    width: 95%;
    flex: 1;
    margin: 10px auto;
    font-size: 1.5em;
    border-radius: 10px;
}

.quote-wrapper {
    display: flex;
    align-items: center;
    flex:1;
    overflow: auto;
    padding: 40px;
}

.quote-wrapper p {
    padding: 0 10px;
}

.author {
    padding:5px 40px 5px 0px;
    text-align: right;
    color: white;
}
</style>
