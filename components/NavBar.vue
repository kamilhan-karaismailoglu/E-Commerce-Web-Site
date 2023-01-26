<template>
  <header id="header" style="margin-top: 2.5rem">
    <nav
      id="header"
      class="navbar navbar-fixed-top"
      style="
        z-index: 9;
        background-color: white;
        border-bottom: 2px solid rgb(245, 245, 245);
      "
    >
      <SearchButton />
      <div id="header-container" class="container navbar-container">
        <div class="navbar-header" id="Nb1">
          <a href="/"
            ><img
              alt="Twist"
              title="Twist"
              src="https://img2-twist.mncdn.com/Twist/frontend/images/logo.svg"
          /></a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <DropdownYepyeni />
            <DropdownKoleksiyon />
            <li style="width: 150px">
              <a style="background-color: white" href="#about">SHOP BY LOOK</a>
            </li>
            <DropdownOutlet />
          </ul>
          <div style="margin-top: 15px">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <button
                  class="btnAra"
                  style="background-color: white; border: none"
                  onclick="$('#arama').toggle(); $('#header-container').hide();"
                >
                  ARA
                </button>
              </li>
              <li style="width: 80px">
                <a
                  href="/uyelik"
                  style="
                    color: #333333;
                    background-color: white;
                    margin-top: -15px;
                  "
                >
                  ÜYELİK</a
                >
              </li>
              <SepetButton />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
</script>
