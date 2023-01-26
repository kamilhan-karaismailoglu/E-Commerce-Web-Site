<template >
  <client-only style="margin-left: 100px;">
    <div class="ga2" style="margin-top: 140px;">
      <div class="categories-append obj-desktop">
          <div data-swiper="widgetAuto" class="swiper-container swiper-categories">
              <div class="swiper-header">
                <h1>{{$route.params.child}}</h1>
              </div>
          </div>
      </div>
    </div>
    <div v-for="product in products" style="display: inline-block; margin-left: 1.3%;">
      <a class="product" :id=product.id :href="`../urun/${product.id}`" >
        <img :src="product.img"  :data-image-src="product.img" :alt="product.name" class="activeted" style="width: 645px; height: 774px;">
        <div class="prd-body">
          <div class="prd-name text-uppercase">{{ product.name }}
            <div class="prd-badge">
              <div class="ems-prd-badge1 urunListe_yeniUrun"><span>{{ product.durumu }}</span></div>
            </div>
          </div>
          <div class="prd-price display-flex">
            <div class="first is-empty">
              <div class="first-inner display-flex align-items-center">
                <div class="urunListe_brutFiyat">{{ product.priceWithoutDiscount }}</div>
                <div class="urunListe_satisFiyat">{{ product.price }}</div>
              </div>
              </div>
          </div>
        </div>
      </a>
    </div>
    <div style="margin-bottom: 100px;">

    </div>
  </client-only>
</template>

<script>
import { ref,computed, onMounted } from "@vue/composition-api";
export default {
  name: "TheUrunler",
  setup() {
    const yepyeniYepyeni = ref([]);
    const yepyeniDisgiyim = ref([]);
    const yepyeniKazak = ref([]);
    const yepyeniElbise = ref([]);
    const yepyeniBluz = ref([]);
    const yepyeniAksesuar = ref([]);
    const yepyeniAyakkabi = ref([]);
    const yepyeniPantolon= ref([]);

    onMounted(async () => {
      await fetch("http://localhost:3050/products").then((res) => res.json()).then((data) => {

      yepyeniYepyeni.value = data.yepyeniYepyeni;
      yepyeniDisgiyim.value = data.yepyeniDisgiyim;
      yepyeniKazak.value = data.yepyeniKazak;
      yepyeniElbise.value = data.yepyeniElbise;
      yepyeniBluz.value = data.yepyeniBluz;
      yepyeniAksesuar.value = data.yepyeniAksesuar;
      yepyeniAyakkabi.value = data.yepyeniAyakkabi;
      yepyeniPantolon.value = data.yepyeniPantolon;
    });
    });
const route = useRoute();
    const products = computed(()=>{
      if(route.params.child==="Yepyeni")
      {
        return yepyeniYepyeni.value;
      }
      else if(route.params.child==="Kazak")
      {
        return yepyeniKazak.value;
      }
      else if(route.params.child==="Elbise")
      {
        return yepyeniElbise.value;
      }
      else if(route.params.child==="Bluz")
      {
        return yepyeniBluz.value;
      }
      else if(route.params.child==="Pantolon")
      {
        return yepyeniPantolon.value;
      }
      else if(route.params.child==="Ayakkabi")
      {
        return yepyeniAyakkabi.value;
      }
      else if(route.params.child==="Aksesuar")
      {
        return yepyeniAksesuar.value;
      }
      return yepyeniDisgiyim.value;
    })

    return {
      products
    };
  },
};
</script>

<style>
a.product:hover {
  text-decoration: none;
}
</style>