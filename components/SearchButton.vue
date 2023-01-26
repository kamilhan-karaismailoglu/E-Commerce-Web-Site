<template>
  <div class="menu-drawer-ara" id="arama">
    <div class="container">
      <div class="row">
        <input
          class="Ara"
          type="text"
          maxlength="55"
          placeholder="Arama yapmak için tıklayınız"
        />
        <button
          class="btnAra"
          style="
            float: right;
            border: none;
            background-color: white;
            font-size: 35px;
            margin-top: -50px;
          "
          onclick="$('#arama').toggle(); $('#header-container').show();"
        >
          X
        </button>
      </div>
      <div class="row" style="width: 40%; height: 100px; margin-top: 40px">
        <h3 style="color: black; font-size: 26px">POPÜLER ARAMALAR</h3>
        <ul style="padding-left: 0; font-size: 15px; line-height: 33px">
          <li><a href="" style="color: gray">Elbise</a></li>
          <li><a href="" style="color: gray">Çanta</a></li>
          <li><a href="" style="color: gray">Dış giyim</a></li>
          <li><a href="" style="color: gray">Ayakkabı</a></li>
          <li><a href="" style="color: gray">Ceket</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

</script>>




<style scoped>
</style>