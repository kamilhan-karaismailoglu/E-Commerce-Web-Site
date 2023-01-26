<template>
  <div style="display: inline-block">
    <li style="width: 140px">
      <button
        class="btnSpt"
        style="background-color: white; border: none"
        onclick="$('#sepetim').toggle();"
      >
        SEPETİM &nbsp;
        <span
          style="
            background-color: black;
            color: white;
            padding: 6px 10px 6px 10px;
            border-radius: 50%;
          "
          >0</span
        >
      </button>
    </li>

    <div class="menu-drawer-sepetim" data-toggle="collapse" id="sepetim">
      <div class="container" style="width: 100%" data-toggle="collapse-in">
        <div class="row">
          <button
            class="btnSpt"
            style="
              float: right;
              border: 0.5px solid lightgray;
              background-color: white;
              border-radius: 50%;
              padding: 2px 8px 2px 8px;
            "
            onclick="$('#sepetim').toggle();"
          >
            X
          </button>
        </div>
        <div class="row" style="padding-left: 20px">
          <h1 style="width: 110px; float: left">Sepet</h1>
          <h5 style="float: left; padding-top: 25px">ürün</h5>
        </div>
        <div class="row" style="margin-top: 20px">
          <div
            class="col-lg-offset-3 col-lg-5"
            style="text-align: center; margin-top: 140px"
          >
            <img src="../assets/bag.png" style="width: 60px; height: 60px" />
            <h5>Sepetin Henüz Boş!</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

</script>>
