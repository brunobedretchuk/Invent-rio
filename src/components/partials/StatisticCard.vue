<template>
    <div class="box p-2 d-flex gap-3 align-items-center" style="width: 12rem;">
  <div class="imgDiv"><img :src="url" alt=""></div>
  <div class="d-flex flex-column align-items-center textDiv">
    <p class="card-text m-0 quantity"
    :class="{quantityValor : title === 'Patrimônio'}"
    >{{quantity}}</p>
    <p class="card-text">{{title}}</p>
  </div>
</div>
</template>
<script>
export default {
    props: ['url' , 'quantity' , 'title']
}
</script>


<style scoped>

.box{
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 0px gray;
    width: fit-content;
}
.imgDiv{
    width: 30%;

}
.textDiv{
    width: 60%;

}
img{
    width: 100%;
}
.quantity{
    font-size: 2rem;
}
.quantityValor{
    font-size: 1.25rem;
}

</style>