<template>
    <div>
        <img :src="Icon" :alt="imgAltText" :width="imgWidth" />
        <p class="text">{{bodyText}}</p>
    </div>
</template>

<script>

import loading from '../assets/loading.svg';
import quote from '../assets/quote.svg';
import error from '../assets/sad.svg';

const STATUS = {
    LOADING : 'LOADING',
    LOADED:'LOADED',
    ERROR: 'ERROR'
}; 

export default {
    name:"Indicator",
    props : {
        bodyText: String,
        type: String,
        imgAltText : String,
        imgWidth : String
    },
    computed : {
        Icon(){
            let icon = error;
            switch(this.type){
                case STATUS.LOADING:
                    icon = loading;
                    break;
                case STATUS.LOADED:
                    icon = quote;
                    break;
                default: break;
            }

            return icon;
        }
    }
}
</script>