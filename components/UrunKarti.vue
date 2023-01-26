<template>
    
    <client-only placeholder="loading...">
    <head>
    <title>Twist | Stil Giyim, Ayakkabı ve Aksesuar Markası</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    </head>

    <body style="margin-top:10em">
        <main class="site-main">
        <div class="ems-page-product-detail">
                  <div class="ems-page-product-detail-grid display-grid">
                    <div class="ga2">
                      <div class="urunDetay">
                        <div class="ems-prdd-grid display-grid">
                          <div class="ga4">
        
                            <div class="ems-prdd-badge">
                                    <div id="plhYeniUrunBtn">
                                        <span> <div class="marquee colorBlueBg" :data1= "`${product.durumu}&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;`"></div>
                                        </span>
                                    </div>
                            </div>
                            
                          </div>
                          <div class="ga1">
                            
                            <div class="ems-prdd-gallery swiper-gallery swiper-gallery-vertical ems-swiper-activeted">
                                <div class="swiper-container mobi-swiper swiper-gallery-top item-5 swiper-container-initialized swiper-container-vertical ems-swiper-ready">
                                    <div class="swiper-inner">
                                        <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                                        
                                                        <li data-order="0" :data-large="product.img" class="swiper-slide type-image swiper-slide-active slide-active" style="width: 100%;height: 100%;">
                            <a title="DESEN MIX ETEK" href="javascript:void(0);">
                                    <img :src="product.img" :alt="product.name" class="activeted">
                            </a>
                        </li>
                                        
                                        </ul>
                                    </div>
                                    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
                                    <div class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                
                                <div class="swiper-container swiper-gallery-thumb slider-pagination product-slider item-5 swiper-container-initialized swiper-container-vertical ems-swiper-ready">
                                    <div class="swiper-inner">
                                        <ul class="swiper-wrapper">
                                        </ul>
                                    </div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                  
                              
        
                            </div>
                              
        
                          <div class="ga2">
                            
                            
                            
        
                          
                            <div data-product-id="11987" data-product-code="TW6220004078001" data-stock-barcode-id="" class="ems-prdd-right  sticky">
                             
                              
                              <div class="ems-prdd-right-wrp">
                                
                                <div class="ems-prdd-code" id="plhUrunKodu">TW6220004078001</div>
                                
                                <div class="ems-prdd-type colorRed m-bttm-10" id="plhUrunTipi"></div>

                                <div class="ems-prdd-name" id="plhUrunAdi" >
                                  <h1 class="emos_H1" style="margin-top: -100px; ;max-height: 100px;"><span class="ems-none">Siyah</span> {{product.name}}</h1>
                                </div>

                                <div class="ems-prdd-block1 display-flex" style="margin-top: 100px;">
                                  <div class="ems-prdd-price display-flex align-items-center">

                                        <span class="urunDetay_brutFiyat">{{product.priceWithoutDiscount}}</span>

                                    <span data-product-price="399,5" class="urunDetay_satisFiyat">{{product.price}}</span>

                                  </div>
                                </div>

                                <div class="ems-prdd-group">
                                  <div class="ems-overlay ems-group-overlay"></div>
                                </div>

                                <div class="ems-prdd-block3">
                                  <div class="ems-prdd-block2 btn-group">

                                    <div class="ems-prdd-guide" id="plhUrunAdiLabel">
                                        <span>
                                            <a data-target="body" data-ready="mini-size-guide-ready" data-animate="mini-size-guide-animate" data-type="toggle" class="open-size-guide btn-ems-prdd-size-guide-trigger" href="javascript:void(0);">
                                                  <u>Beden Tablosu</u>
                                            </a>
                                        </span>
                                    </div>

                                    <div class="ems-prdd-store" id="plhUrunKoduLabel">
                                        <span>
                                            <a data-target="body" data-ready="ems-find-store-ready" data-animate="ems-find-store-animate" data-type="toggle" class="open-store btn-prdd-dealer" href="javascript:void(0);">
                                                <span class="fs13 medium m-bttm-5 display-block">MAĞAZADA ARA</span>
                                            </a>
                                        </span>
                                    </div>
                                    
                                    
                                     
                                    <div class="ems-prdd-favorite" id="plhFavoriEkleBtn">
                                        <a class="btnDefault btnFavoriEkle btn-add-to-fav add-to-fav-btn" id="btnFavoriEkle" style="cursor:pointer;">
                                            <span>
                                                <span class="fs13 medium fvEkle">FAVORİLERE EKLE</span>
                                                <span class="fs13 medium fvCikar none">FAVORİLERDEN ÇIKAR</span>
                                            </span>
                                        </a>
                                    </div>
                                    
                                    
                                  </div>
                                  
                                  
                                  
                                  <div class="ems-prdd-add-to-cart">
                                  
                                  
                                      <div class="ems-prdd-toggle" id="plhMarkaLabel">
                                      
                                      <span>
                                        <div class="display-flex">
                                        
                                           <a data-target="body" data-ready="ems-prdd-size-ready" data-animate="ems-prdd-size-animate" data-type="add" class="ems-prdd-toggle-option show" href="javascript:void(0)">
                                            <div class="dropdown-trigger"><span>BEDEN SEÇ</span><span class="ems-prdd-option1-selected"></span></div>
                                            
                                            </a>
                                            
                                            
                                        </div>
                                        
                                        </span>
                                            
                                        </div>
                                        <div class="ems-prdd-size">
                                        
                                          <div data-target="body" data-ready="ems-prdd-size-ready" data-animate="ems-prdd-size-animate" data-type="remove" class="ems-overlay ems-size-overlay"></div>
                                          
                                          <div class="ems-prdd-size-sub">
                                          
                                            <span data-target="body" data-ready="ems-prdd-size-ready" data-animate="ems-prdd-size-animate" data-type="remove" class="sub-close base64-remove"></span>
                                            
                                            <div class="urunDetay_urunSecenek show">
                                              
                                              <div class="urunDetay_urunSecenek1">
                                                
                                                <div class="urunSecenek_baslik1"><span><span class="fs18 medium">BEDEN SEÇ</span></span></div>
                                                
                                                <ul class="dropdown-options ems-prdd-option1-list">
                                                
                                                            <li class="nav-item mt-10 me-10  ">
                                                                <a class="dropdownrow" onclick="shopping.setStockBarcode('24445', this.parentNode)" href="javascript:void(0);">34</a>
                                                            </li>
                                                            <li class="nav-item mt-10 me-10  ">
                                                                <a class="dropdownrow" onclick="shopping.setStockBarcode('24446', this.parentNode)" href="javascript:void(0);">36</a>
                                                            </li>
                                                            <li class="nav-item mt-10 me-10  ">
                                                                <a class="dropdownrow" onclick="shopping.setStockBarcode('24447', this.parentNode)" href="javascript:void(0);">38</a>
                                                            </li>
                                                            <li class="nav-item mt-10 me-10  ">
                                                                <a class="dropdownrow" onclick="shopping.setStockBarcode('24448', this.parentNode)" href="javascript:void(0);">40</a>
                                                            </li>
                                                            <li class="nav-item mt-10 me-10 out-of-stock ">
                                                                <a class="dropdownrow" onclick="shopping.setStockBarcode('24511', this.parentNode)" href="javascript:void(0);">42</a>
                                                            </li>
                                                
                                                </ul>
                                                
                                              </div>
                                              
                                            </div>
                                            
                                          </div>
                                          
                                        </div>
               
                                    <div class="pnlSepetGrup">
        
                                    
                                              <div class="urunDetay_btnSepeteAt">
                                            <a onclick="SepeteEkle()" class="btnDefault btnsepeteAt custom-add-to-cart" href="javascript:void(0);"><span>SEPETE EKLE</span></a>
                                              </div>
                                              <div class="urunDetay_btnSepeteAt  out-of-stock">
                                                <a class="btnDefault  btn-out-of-stock btnsepeteAt" href="javascript:void(0);"><span>STOKTA YOK</span></a>
                                              </div>
                                            <div class="urunDetay_btnStokHaberci">
                                              <a onclick="return customStockAlert(this);" class="btnDefault stock-alert btnStokHaberci" id="lnk_stokHaberci" href="javascript:void(0);"><span>GELİNCE HABER VER</span></a>
                                            </div>
                                      
                                    </div>
                                    
                                  </div>
                                  
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="ga3">
                          
                            <div class="ems-prdd-prop">
                            
                            
                              <div class="ems-inner-header"><span rel="lbfDetailTab">ÜRÜN AÇIKLAMASI</span></div>
                              
                              
                              
                              <div class="ems-prdd-info">
        
                                <p>Deseni ile ilk bakışta dikkat çeken etek, ideal kış silüetine imza atıyor. Kloş kesimi ile feminen bir silüet kazanan büzgü detaylı etek, gündüzden geceye cool şıklığın anahtar parçası oluyor.</p><br><ul class="urun-detay-ul"></ul>
        
                              </div>
                              
                              
                              <div class="ems-inner-content">
                              
                              <div class="urunOzellik">
                              
                                  <table cellspacing="0" align="Center" border="0" style="width:100%;border-collapse:collapse;">
                                        <tbody>
                                    
                                                <tr class="gridRowDefault gridRowUrunOzellikDetay">
                                                    <td class="gridUrunOzellikDetayBaslik" style="width:35%;">
                                                        Üretim Ülkesi
                                                    </td>
                                                    <td class="gridUrunOzellikDetayIcerik">
                                                        Türkiye
                                                    </td>
                                                </tr>
                                                <tr class="gridAlternateDefault gridAlternateUrunOzellikDetay">
                                                    <td class="gridUrunOzellikDetayBaslik" style="width:35%;">
                                                        Sezon Kodu
                                                    </td>
                                                    <td class="gridUrunOzellikDetayIcerik">
                                                        Fw 22/23
                                                    </td>
                                                </tr>
                                            
                                        </tbody>
                                    </table>
                              
                              </div>
                              
                              
                              %100 VISKOZ
                              

                                    <div class="ems-prdd-model-size" id="plhEditorBaslik">
                                        MANKEN ÖLÇÜLERİ : Giydiği Beden  36 / S Manken Boyu  179 cm    Ölçüler  81/60/91
                                    </div>
        
                              </div>
                            </div>
                            
                            <div class="ems-prdd-tab ems-tab ems-tab-vertical ems-tab-activeted">
                              <div class="ems-tab-content">
                              
                                
                                
                                  
                                <div rel="tab-3">
                                  <div class="ems-tab-inner-content delivery-and-returns-content">
                                    
                                  </div>
                                  <div data-target=".delivery-and-returns-content" data-uri="/{{lang}}/Widget/Get/AjxContent?parameters={BlogPostId:6, Tags:[&quot;hide&quot;, &quot;modal&quot;]}" class="ems-tab-inner-header"><span rel="lbfTeslimatTab">Teslimat ve Kolay İade</span></div>
                                </div>
                                
                                
                              </div>
                            </div>
                          </div>
                          <div class="ga5"></div>
                        </div>
                      </div>
                      
                      
                      
                      <div class="mini-size-guide">
                        <div data-target="body" data-ready="mini-size-guide-ready" data-animate="mini-size-guide-animate" data-type="remove" class="ems-overlay mini-size-guide-overlay"></div>
                        <div class="mini-size-guide-sub">
                          <div class="sub-header">Beden Tablosu 
                              <a data-target="body" data-ready="mini-size-guide-ready" data-animate="mini-size-guide-animate" data-type="remove" class="sub-close" href="javascript:void(0);">
                                  <svg class="icon-close">
                                    <use xlink:href="/Content/Styles/base/icons.svg#close"></use>
                                  </svg></a>
                           </div>
                              
                           <div class="mini-size-guide-content">
                           
                           </div>
                           
                        </div>
                      </div>
                      
                      
                      
                      
                      <div class="ems-find-store">
                        <div data-target="body" data-ready="ems-find-store-ready" data-animate="ems-find-store-animate" data-type="remove" class="ems-overlay ems-find-store-overlay"></div>
                        <div class="ems-find-store-sub">
                        
                            <div class="sub-header">Mağazada Ara 
                            
                            <a data-target="body" data-ready="ems-find-store-ready" data-animate="ems-find-store-animate" data-type="remove" id="findStoreCloseBtn" class="sub-close" href="javascript:void(0);">
                                    <svg class="icon-close">
                                        <use xlink:href="/Content/Styles/base/icons.svg#close"></use>
                                    </svg></a>
                            </div>
                            <div class="mod-service-list-grid display-grid mod-service-list-content">
        
                            </div>
                            
                            
                            <div class="address-detail">
                                <div class="address-detail-inner">
                                    <div class="right-column">
                                        <div class="map" id="Map"></div>
                                        
                                        <a href="javascript:void(0);" class="toggle-map"><span>Close Map</span></a>
                                        <div class="selected-address-detail-wrp">
                                            <div class="back-btn"><a href="javascript:void(0);"><svg class="icon icon-close">
                                                        <use xlink:href="/Content/Styles/base/icons.svg#icon-close"></use>
                                                    </svg></a></div>
                                            <div data-city="" class="selected-address-detail pServisListe store-list-item"></div>
                                        </div>
                                    </div>
                                    <div class="left-column">
                                        <div class="title"></div>
                                        <div class="detail"></div>
                                        <div class="work-table"></div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                      </div>
                     
                    </div>
                   
                  </div>
                </div>
        
        
            </main>
    </body>

  </client-only>
  
    
</template>
  
<script>
import { ref,computed, onMounted } from "@vue/composition-api";
export default {
  name: "UrunKarti",
  setup() {
    const yepyeniYepyeni = ref([]);
    const yepyeniDisgiyim = ref([]);
    const yepyeniKazak = ref([]);
    const yepyeniElbise = ref([]);
    const yepyeniBluz = ref([]);
    const yepyeniAksesuar = ref([]);
    const yepyeniAyakkabi = ref([]);
    const yepyeniPantolon= ref([]);
    const products= ref([]);

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

        products.value = [
          ...data.yepyeniYepyeni,
          ...data.yepyeniDisgiyim,
          ...data.yepyeniKazak,
          ...data.yepyeniElbise,
          ...data.yepyeniBluz,
          ...data.yepyeniAksesuar,
          ...data.yepyeniAyakkabi,
          ...data.yepyeniPantolon,
        ]
      });
  });
    const route = useRoute();

    const product = computed( ()=>{
      return products.value.find((item) => item["id"] == parseInt(route.params.child));
    })

    return {
      product
    };
  },
};
</script>

<style scoped>

</style>