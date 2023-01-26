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
        <button id="modalbtn" class="button" outlined></button>
        <a id="profile">my profile</a>
        <transition name="fade" appear>
          <div class="modal-overlay"></div>
        </transition>
        <div class="page page-login">
          <div class="page-login-grid display-grid">
            <div class="ga1 sortable">
              <div id="validateUye">
                <div class="member-login">
                  <div class="ems-tab ems-tab-login ems-tab-activeted">
                    <div
                      class="ems-header-title"
                      style="margin-top: 80px !important"
                    >
                      <span>Hoş geldiniz</span>
                    </div>

                    <div class="ems-tab-header display-flex">
                      <div rel="tab-1">
                        <span><a href="uyelik">Üye Girişi</a></span>
                      </div>
                      <div rel="tab-2" class="selected">
                        <span><a href="/kayit">Yeni Üyelik</a></span>
                      </div>
                    </div>

                    <div class="ems-tab-content">
                      <div
                        rel="tab-2"
                        class="ems-signup selected"
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
                                <div
                                  class="
                                    ems-field
                                    label-anim
                                    is-active is-completed
                                  "
                                >
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

                                <div
                                  class="
                                    ems-field
                                    label-anim
                                    is-active is-completed
                                  "
                                >
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
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div
                                  class="
                                    ems-field
                                    label-anim
                                    is-completed is-active is-completed
                                  "
                                >
                                  <label class="form-label" for="Email"
                                    >E-Mail</label
                                  >
                                  <input
                                    class="
                                      form-control
                                      to-lower-case
                                      ems-styler-activeted
                                      act-iStyler
                                    "
                                    id="Email"
                                    name="Email"
                                    type="text"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>
                                <div
                                  class="
                                    ems-field
                                    label-anim
                                    is-completed is-active is-completed
                                  "
                                >
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

                                <div
                                  class="
                                    ems-field
                                    label-anim
                                    is-completed is-active is-completed
                                  "
                                >
                                  <label class="form-label" for="Password"
                                    >Şifre Tekrar</label
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

                                <div
                                  class="
                                    ems-field
                                    label-anim
                                    is-active is-completed
                                  "
                                >
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
                                    min="1932-12-30"
                                    max="2007-12-12"
                                  />
                                  <div class="ems-field-feedback"></div>
                                </div>

                                <div class="ems-field">
                                  <div class="member-new-information">
                                    <div>
                                      Kişisel verileriniz,
                                      <b>KVKK Aydınlatma Metni</b> kapsamında
                                      işlenmektedir. Üye ol butonuna basarak
                                      <a
                                        href="javascript:void(0);"
                                        class="ems-kvkk-trigger ems-link"
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        ><u
                                          ><b>KVKK Aydınlatma Metni'ni</b></u
                                        ></a
                                      >
                                      -
                                      <a
                                        href="javascript:void(0);"
                                        class="ems-kvkk-trigger ems-link"
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        ><u><b>Üyelik Sözleşmesi'ni</b></u></a
                                      >
                                      ve
                                      <a
                                        href="javascript:void(0);"
                                        class="ems-etk-trigger ems-link"
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        ><u
                                          ><b>ETK Aydınlatma Metni’ni</b></u
                                        ></a
                                      >
                                      okuduğunuzu ve kabul ettiğinizi
                                      onaylıyorsunuz.
                                    </div>
                                  </div>
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
                                      >İpekyol A.Ş’nin tarafıma SMS ve E-mail
                                      ile ticari ileti göndermesine
                                      <a
                                        href="javascript:void(0);"
                                        class="
                                          ems-commercialmessage-trigger ems-link
                                        "
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        ><u>burada</u></a
                                      >
                                      belirtilen izni veriyorum.</label
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
                                      >Segmentasyon/profilleme ve bu kapsamda
                                      kişiselleştirilmiş ürün tanıtımı
                                      faaliyetlerinin gerçekleştirilmesi
                                      amacıyla kişisel verilerimin işlenmesine
                                      ilişkin
                                      <a
                                        href="javascript:void(0);"
                                        class="
                                          ems-expressconsent-trigger ems-link
                                        "
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        ><u>Açık Rıza</u></a
                                      >
                                      metnini ve kişisel verilerimin yurtdışına
                                      aktarılmasına ilişkin
                                      <a
                                        href="javascript:void(0);"
                                        class="
                                          ems-expressconsent-abroad-trigger
                                          ems-link
                                        "
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        ><u>Açık Rıza</u></a
                                      >
                                      metnini okudum, onay veriyorum.</label
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
                                      Sadakat kart istiyorum ve sözleşmeyi
                                      <a
                                        href="javascript:void(0);"
                                        class="ems-loyaltycard-trigger ems-link"
                                        data-target=".jconfirm"
                                        data-ready="ems-ready"
                                        data-animate="ems-animate"
                                        data-type="toggle"
                                        ><u>burada</u>
                                      </a>
                                      onaylıyorum.
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
            <div class="ga2 sortable" style="margin-top: 45px">
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
                    class="swiper-button-next swiper-button-disabled"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-disabled="true"
                  >
                    <span>İLERİ</span>
                  </div>
                  <div
                    class="swiper-button-prev"
                    tabindex="0"
                    role="button"
                    aria-label="Previous slide"
                    aria-disabled="false"
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
                      class="swiper-pagination-bullet"
                      tabindex="0"
                      role="button"
                      aria-label="Go to slide 1"
                    ></span
                    ><span
                      class="
                        swiper-pagination-bullet swiper-pagination-bullet-active
                      "
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
                        swiper-slide-prev
                      "
                      data-order="0"
                      style="width: 100% !important"
                    >
                      <div
                        class="banner banner05 ems-animated animated fadeInUp"
                        data-cls="fadeInUp"
                      >
                        <picture
                          class="prm-media lazy ratio ratio-gridblock activeted"
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
                              https://img2-twist.mncdn.com/Twist/uploads/banner/login/Signup_M_2211.jpg 1x,
                              https://img2-twist.mncdn.com/Twist/uploads/banner/login/Signup_M_2211.jpg 2x
                            "
                          />

                          <source
                            media="(min-width: 1025px)"
                            srcset="
                              https://img2-twist.mncdn.com/Twist/uploads/banner/login/Signup_D_2211.jpg
                            "
                          />

                          <img
                            class="ratio-item"
                            src="https://img2-twist.mncdn.com/Twist/uploads/banner/login/Signup_M_2211.jpg"
                            alt=""
                          />
                        </picture>
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