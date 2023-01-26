<template>
  <client-only placeholder="loading...">
    <head>
      <title>Twist | Stil Giyim, Ayakkabı ve Aksesuar Markası</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
    </head>
    <body>
      <main class="site-main">
        <div class="page page-login">
          <div class="page-login-grid display-grid">
            <div class="ga1 sortable">
              <div id="validateUye">
                <div class="member-login">
                  <div class="ems-tab ems-tab-login ems-tab-activeted">
                    <div class="ems-header-title">
                      <span>Hoş geldiniz</span>
                    </div>

                    <div class="ems-tab-header display-flex">
                      <div rel="tab-1" class="selected">
                        <span><a href="uyelik">Üye Girişi</a></span>
                      </div>
                      <div rel="tab-2" class="">
                        <span><a href="/kayit">Yeni Üyelik</a></span>
                      </div>
                    </div>

                    <div class="ems-tab-content">
                      <div
                        rel="tab-1"
                        class="ems-signin selected"
                        id="validateUyeGiris"
                      >
                        <div class="form">
                          <div class="form-inner login-form-container">
                            <form
                              class="ems-form"
                              id="login"
                              method="post"
                              action="/tr/LogOn"
                            >
                              <div class="row g-20">
                                <div class="ems-field label-anim is-completed">
                                  <label
                                    class="form-label"
                                    for="UserNameOrEmail"
                                    >E-Mail</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="UserNameOrEmail"
                                    type="text"
                                    name="UserNameOrEmail"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field label-anim is-completed">
                                  <label class="form-label" for="Password"
                                    >Şifre</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="Password"
                                    type="password"
                                    name="Password"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field is-active is-completed">
                                  <div
                                    class="
                                      display-flex
                                      align-items-center
                                      justify-between
                                    "
                                  ></div>
                                </div>
                                <div class="ems-field is-active is-completed">
                                  <div
                                    class="
                                      display-flex
                                      align-items-center
                                      justify-between
                                    "
                                  >
                                    <div class="form-check">
                                      <span
                                        class="
                                          sStylerMainWrp
                                          sStylerWrp_checkbox
                                        "
                                        ><span class="cStyler"
                                          ><img
                                            class="icon-checkbox"
                                            src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox.svg" /><img
                                            class="icon-checkbox-active"
                                            src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox-active.svg" /></span
                                        ><input
                                          class="
                                            form-check-input
                                            ems-styler-activeted
                                            act-iStyler
                                            sCheckbox
                                          "
                                          id="RememberMe"
                                          type="checkbox"
                                          name="RememberMe"
                                          value="true"
                                      /></span>
                                      <label
                                        class="form-check-label"
                                        for="RememberMe"
                                        >Beni Hatırla</label
                                      >
                                    </div>
                                    <a href="/sifremi-unuttum"
                                      >Şifremi Unuttum?</a
                                    >
                                  </div>
                                </div>

                                <div class="ems-field">
                                  <div
                                    class="
                                      display-flex
                                      align-items-center
                                      justify-between
                                    "
                                  >
                                    <button
                                      type="submit"
                                      class="btn btn-clr1 btnDefault"
                                      id="jest"
                                    >
                                      <span>GİRİŞ YAP</span>
                                    </button>
                                  </div>
                                </div>
                                <input
                                  name="__RequestVerificationToken"
                                  type="hidden"
                                  value=""
                                  class="ems-styler-activeted act-iStyler"
                                />
                                <input
                                  id="returnUrl"
                                  name="returnUrl"
                                  type="hidden"
                                  value="/tr/Widget/Get/LoginRaw"
                                  class="ems-styler-activeted act-iStyler"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div class="ems-tab-header display-flex">
                        <div rel="tab-2" class="">
                          <span
                            ><a href="javascript:void(0);">Yeni Üyelik</a></span
                          >
                        </div>
                      </div>

                      <div
                        rel="tab-2"
                        class="ems-signup"
                        id="validateYeniUyelik"
                      >
                        <div class="form">
                          <div class="form-inner signup-form-container">
                            <form
                              class="ems-form"
                              id="signup"
                              action="/tr/CreateMember"
                              method="post"
                            >
                              <div class="row g-20">
                                <div class="ems-field label-anim">
                                  <label class="form-label" for="Name"
                                    >* Adınız</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="Name"
                                    name="Name"
                                    type="text"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field label-anim">
                                  <label class="form-label" for="Surname"
                                    >* Soyadınız</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="Surname"
                                    type="text"
                                    name="Surname"
                                    value=""
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field label-anim">
                                  <label class="form-label" for="Email"
                                    >E-Mail</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="Email"
                                    name="Email"
                                    type="text"
                                    value=""
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field label-anim">
                                  <label class="form-label" for="Password"
                                    >Şifre</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="Password"
                                    name="Password"
                                    type="password"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field label-anim">
                                  <label class="form-label" for="PasswordCheck"
                                    >Şifre Tekrar</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="PasswordCheck"
                                    name="PasswordCheck"
                                    type="password"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field label-anim">
                                  <label class="form-label" for="MobilePhone"
                                    >Telefon Numarası</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="MobilePhone"
                                    name="MobilePhone"
                                    type="text"
                                    value=""
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field is-active is-completed">
                                  <label class="form-label" for="Gender"
                                    >Cinsiyet</label
                                  >
                                  <span class="sStylerMainWrp sStylerWrp_select"
                                    ><div class="sStylerWrp">
                                      <span class="sStyleHolder"
                                        ><span class="sStyler">Seçiniz</span
                                        ><img
                                          class="icon-select"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/select.svg" /><img
                                          class="icon-select-active"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/select-active.svg"
                                      /></span>
                                    </div>
                                    <select
                                      class="
                                        form-select
                                        ems-styler-activeted
                                        act-iStyler
                                        sSelect
                                      "
                                      id="Gender"
                                      name="Gender"
                                    >
                                      <option value="">Seçiniz</option>
                                      <option value="1">Erkek</option>
                                      <option value="2">Kadın</option>
                                    </select></span
                                  >
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field">
                                  <label class="form-label" for="BirthDate"
                                    >Doğum Tarihi</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="BirthDate"
                                    placeholder="gg.aa.yyyy"
                                    name="BirthDate"
                                    type="date"
                                    min="1931-11-21"
                                    max="2006-11-02"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div class="ems-field is-active is-completed">
                                  <div class="form-check">
                                    <span
                                      class="sStylerMainWrp sStylerWrp_checkbox"
                                      ><span class="cStyler checked"
                                        ><img
                                          class="icon-checkbox"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox.svg" /><img
                                          class="icon-checkbox-active"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox-active.svg" /></span
                                      ><input
                                        class="
                                          form-check-input
                                          ems-styler-activeted
                                          act-iStyler
                                          sCheckbox
                                        "
                                        onclick="smsCheck(this)"
                                        id="IsEmailPermitted"
                                        type="checkbox"
                                        name="IsEmailPermitted"
                                        value="true"
                                    /></span>
                                    <label
                                      class="form-check-label"
                                      for="IsEmailPermitted"
                                      >Yeniliklerden Haberdar Olmak
                                      İstiyorum.</label
                                    >
                                    <input
                                      id="IsSmsPermitted"
                                      type="hidden"
                                      name="IsSmsPermitted"
                                      value="true"
                                      class="ems-styler-activeted act-iStyler"
                                    />
                                  </div>
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div
                                  class="ems-field mt-10 is-active is-completed"
                                >
                                  <div class="form-check">
                                    <span
                                      class="sStylerMainWrp sStylerWrp_checkbox"
                                      ><span class="cStyler"
                                        ><img
                                          class="icon-checkbox"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox.svg" /><img
                                          class="icon-checkbox-active"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox-active.svg" /></span
                                      ><input
                                        class="
                                          form-check-input
                                          ems-styler-activeted
                                          act-iStyler
                                          sCheckbox
                                        "
                                        id="MembershipAgreement"
                                        type="checkbox"
                                        name="MembershipAgreement"
                                        value="true"
                                    /></span>
                                    <label
                                      class="form-check-label"
                                      for="MembershipAgreement"
                                      ><a
                                        href="javascript:void(0);"
                                        class="ems-membership-trigger ems-link"
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        >Üyelik Sözleşmesi</a
                                      >
                                      'nı okudum ve onaylıyorum..</label
                                    >
                                  </div>
                                  <div class="ems-field-feedback"></div>
                                </div>

                                <div
                                  class="
                                    ems-field
                                    mt-10
                                    ems-field-checkbox
                                    is-active is-completed
                                  "
                                >
                                  <div class="form-check">
                                    <span
                                      class="sStylerMainWrp sStylerWrp_checkbox"
                                      ><span class="cStyler"
                                        ><img
                                          class="icon-checkbox"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox.svg" /><img
                                          class="icon-checkbox-active"
                                          src="https://img2-twist.mncdn.com/Twist/frontend/icons/checkbox-active.svg" /></span
                                      ><input
                                        id="IsLoyaltyCardRequested"
                                        type="checkbox"
                                        name="IsLoyaltyCardRequested"
                                        value="true"
                                        class="
                                          ems-styler-activeted
                                          act-iStyler
                                          sCheckbox
                                        "
                                    /></span>

                                    <label for="IsLoyaltyCardRequested">
                                      Twist Kart istiyorum ve
                                      <a
                                        href="javascript:void(0);"
                                        class="ems-loyaltycard-trigger ems-link"
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        >Twist Kart sözleşmesini onaylıyorum.
                                      </a>
                                    </label>
                                  </div>
                                </div>

                                <div class="ems-field">
                                  <button
                                    type="submit"
                                    class="btn btn-clr1 btnDefault"
                                  >
                                    <span>Bilgilerimi Kaydet</span>
                                  </button>
                                </div>
                                <input
                                  name="__RequestVerificationToken"
                                  type="hidden"
                                  value=""
                                  class="ems-styler-activeted act-iStyler"
                                />
                                <input
                                  id="returnUrl"
                                  name="returnUrl"
                                  type="hidden"
                                  value="/tr/Widget/Get/CreateUserRaw"
                                  class="ems-styler-activeted act-iStyler"
                                />
                                <input
                                  id="CountryCode"
                                  name="CountryCode"
                                  type="hidden"
                                  value="+90"
                                  class="ems-styler-activeted act-iStyler"
                                />

                                <input
                                  id="RedirectUrl"
                                  name="RedirectUrl"
                                  type="hidden"
                                  value="/cep-telefonu-dogrulama"
                                  class="ems-styler-activeted act-iStyler"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ga2 sortable" style="margin-top: 65px">
              <div
                data-banner="Login Page Slider"
                class="
                  swiper-container
                  login-page-swiper
                  ems-swiper-activeted
                  item-2
                  swiper-container-initialized swiper-container-horizontal
                  ems-swiper-ready
                "
                data-swiper="widgetAuto"
              >
                <div class="ems-none">
                  <div
                    class="swiper-button-next"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-disabled="false"
                  >
                    <span>İLERİ</span>
                  </div>
                  <div
                    class="swiper-button-prev swiper-button-disabled"
                    tabindex="0"
                    role="button"
                    aria-label="Previous slide"
                    aria-disabled="true"
                  >
                    <span>GERİ</span>
                  </div>
                  <div
                    class="
                      swiper-pagination
                      swiper-pagination-clickable
                      swiper-pagination-bullets
                    "
                  >
                    <span
                      class="
                        swiper-pagination-bullet swiper-pagination-bullet-active
                      "
                      tabindex="0"
                      role="button"
                      aria-label="Go to slide 1"
                    ></span
                    ><span
                      class="swiper-pagination-bullet"
                      tabindex="0"
                      role="button"
                      aria-label="Go to slide 2"
                    ></span>
                  </div>
                </div>

                <div class="swiper-inner">
                  <ul
                    class="swiper-wrapper"
                    style="
                      transition-duration: 0ms;
                      transform: translate3d(0px, 0px, 0px);
                    "
                  >
                    <li
                      data-promo="Login Page Slider 0"
                      data-promo-name=""
                      data-promo-id=""
                      data-promo-position="1"
                      data-promo-creative="https://img2-twist.mncdn.com/Twist/uploads/banner/login/login_2109.jpg"
                      class="
                        swiper-slide
                        sticky
                        promo-not-trigger
                        activeted
                        swiper-slide-active
                        slide-active
                      "
                      data-order="0"
                      style="width: 100% !important"
                    >
                      <div
                        class="banner banner05 ems-animated animated fadeInUp"
                        data-cls="fadeInUp"
                      >
                        <li
                          data-promo="Login Page Slider 0"
                          data-promo-name=""
                          data-promo-id=""
                          data-promo-position="1"
                          data-promo-creative="https://img2-twist.mncdn.com/Twist/uploads/banner/login/Login_D_2211.jpg"
                          class="
                            swiper-slide
                            sticky
                            promo-not-trigger
                            activeted
                            swiper-slide-active
                            slide-active
                          "
                          data-order="0"
                          style="width: 100% !important"
                        >
                          <div
                            class="
                              banner
                              banner05
                              ems-animated
                              animated
                              fadeInUp
                            "
                            data-cls="fadeInUp"
                          >
                            <picture
                              class="
                                prm-media
                                lazy
                                ratio ratio-gridblock
                                activeted
                              "
                            >
                              <source
                                class="lazy-picture"
                                media="(max-width:0)"
                                srcset="
                                  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAQAAACh8pzAAAAAEElEQVR42mN8V88ABYzkMQE/CwiVDB4roAAAAABJRU5ErkJggg==
                                "
                              />

                              <source
                                media="(max-width: 1024px)"
                                srcset="
                                  https://img2-twist.mncdn.com/Twist/uploads/banner/login/Login_M_2211.jpg 1x,
                                  https://img2-twist.mncdn.com/Twist/uploads/banner/login/Login_M_2211.jpg 2x
                                "
                              />

                              <source
                                media="(min-width: 1025px)"
                                srcset="
                                  https://img2-twist.mncdn.com/Twist/uploads/banner/login/Login_D_2211.jpg
                                "
                              />

                              <img
                                class="ratio-item"
                                src="https://img2-twist.mncdn.com/Twist/uploads/banner/login/Login_M_2211.jpg"
                                alt=""
                              />
                            </picture>
                          </div>
                        </li>
                      </div>
                    </li>
                  </ul>
                </div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  </client-only>
</template>