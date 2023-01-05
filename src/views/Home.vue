<template>
  <div class="home">

    <div id="__next" style="width: 100%;overflow: hidden">
      <div class="flex flex-col w-full">
        <div class="sticky top-0 flex flex-col items-center w-full z-50 bg-darkGray ">
          <div class="flex justify-center border-b border-white-200 w-full bg-black">
            <div
                class="flex justify-center items-center py-3 space-x-5 max-w-desktop-full w-full px-5 text-[12px] leading-[14px] overflow-auto sm:max-w-auto sm:justify-start ">
              <div class="flex-1 flex justify-center items-center space-x-5 flex-shrink-0 sm:flex-none">
                <div class="flex items-center space-x-1.5 flex-shrink-0"><span class="flex-shrink-0 text-white">Circulation </span><span
                    class="text-lightBlue text-[15px] leading-[18px] num-bold-style">{{ contractUSDTBalance }}</span>
                </div>
              </div>
              <!--              <div class="w-1 h-1 bg-lightBlue rounded-full flex-shrink-0"></div>-->
              <!--              <div class="flex-1 flex justify-center items-center space-x-5 flex-shrink-0 sm:flex-none">-->
              <!--                <div class="flex items-center space-x-1.5 flex-shrink-0"><span class="flex-shrink-0 text-white">Joined in 24 hours</span><span-->
              <!--                    class="text-lightBlue text-[15px] leading-[18px] num-bold-style">3 436</span></div>-->
              <!--              </div>-->

            </div>
          </div>
          <div class="flex justify-between items-center max-w-desktop-full w-full py-5 px-5">
            <div class="flex items-center space-x-20 lg:space-x-5">
              <a :href="websideUrl">
                <img src="../assets/logo.png" style="width: 54px;height: 38px;" alt="">
              </a>

              <div class="flex  flex-start space-x-10 lg:space-x-5 font-medium sm:hidden">
                <!--                <a-->
                <!--                    class="hover:text-white" target="_blank"-->
                <!--                    href="#">Community</a>-->
                <a class="hover:text-white"
                   style="color:#999;"
                   target="_blank"
                   :href="documentUrl"> {{ $t("documentation") }}</a>
              </div>
            </div>
            <div class="relative group min-w-[175px] lg:min-w-max sm:hidden">
              <div class="flex justify-between items-center cursor-pointer p-4  group-hover:text-white">
                <div class="flex items-center space-x-2">
                  <img v-show="curLng==='en'" src="../assets/en.svg" class="w-5 h-5 lg:mr-2.5" alt="">
                  <img v-show="curLng==='de'" src="../assets/de.svg" class="w-5 h-5" alt="">
                  <img v-show="curLng==='fr'" src="../assets/fr.svg" class="w-5 h-5" alt="">
                  <img v-show="curLng==='it'" src="../assets/it.svg" class="w-5 h-5" alt="">
                  <span style="color: #999">{{ curLngName }}</span></div>
                <svg class="fill-current w-2.5 transition all easy-out group-hover:rotate-180" viewBox="0 0 8 4"
                     fill="#8B8C8C" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0H0l4 4 4-4Z"></path>
                </svg>
              </div>
              <ul
                  class="w-full absolute bg-lightGray rounded-[15px] hidden group-hover:flex flex-col overflow-hidden drop-shadow-lg top-[50px]">
                <li @click="chooseLng('en')"
                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                  <img src="../assets/en.svg" class="w-5 h-5" alt=""><span
                    class="lg:hidden">English</span></li>
                <!--                <li @click="chooseLng('de')"-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/de.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">German</span></li>-->
                <!--                <li-->
                <!--                    @click="chooseLng('fr')"-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/fr.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">French</span></li>-->
                <!--                <li-->
                <!--                    @click="chooseLng('it')"-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/it.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">Italian</span></li>-->
                <!--                <li-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/es.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">Spanish</span></li>-->
                <!--                <li-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/ru.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">Русский</span></li>-->

                <!--                <li-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/es.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">Spanish</span></li>-->

                <!--                <li-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/az.svg" class="w-5 h-5" alt=""><span class="lg:hidden">AZƏRBAYCAN</span>-->
                <!--                </li>-->
                <!--                <li-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/ar.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">العربية</span></li>-->
                <!--                <li-->
                <!--                    class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                <!--                  <img src="../assets/he.svg" class="w-5 h-5" alt=""><span-->
                <!--                    class="lg:hidden">עִבְרִית</span></li>-->
              </ul>
            </div>
            <div class="flex justify-end space-x-10 lg:space-x-0 sm:hidden">
              <!--              <button-->
              <!--                  class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !px-4 !py-2.5 rounded-[40px] bg-transparent hover:bg-purple font-bold">-->
              <!--                Login-->
              <!--              </button>-->
              <!--              <button-->
              <!--                  class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !px-4 !py-2.5 rounded-[40px] bg-transparent hover:bg-purple font-bold">-->
              <!--                Registration-->
              <!--              </button>-->
            </div>
            <button
                class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !w-10 !h-10 !p-0 !max-w-none rounded-full hidden relative sm:flex flex-col justify-center">
              <span
                  class="absolute top-3.5 left-1/2 -translate-x-1/2 w-5 border-b-2 border-white transition-all duration-150 ease-in-out false"></span><span
                class="absolute top-6 left-1/2 -translate-x-1/2 w-5 border-b-2 border-white transition-all duration-150 ease-in-out false"></span>
            </button>
          </div>
        </div>
        <div class="mb-32 flex items-center flex-col px-5 sm:my-4 sm:mb-12">
          <div class="flex flex-col items-center justify-center flex-1 max-w-desktop-full w-full pt-5 sm:pt-0">
            <!--          swiper-->
            <div class="swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events"

            >
              <div class="swiper-wrapper"
                   style="transition-duration: 0ms; transform: translate3d(-2880px, 0px, 0px);">
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="10"
                     style="width: 160px;"><img src="../assets/nft11.png" alt="NFTcard"></div>
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="11"
                     style="width: 160px;"><img src="../assets/nft12.png" alt="NFTcard"></div>
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="12"
                     style="width: 160px;"><img src="../assets/nft13.png" alt="NFTcard"></div>
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="13"
                     style="width: 160px;"><img src="../assets/nft14.png" alt="NFTcard"></div>

                <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0"
                     style="width: 160px;"><img src="../assets/nft1.png" alt="NFTcard"></div>
                <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="1"
                     style="width: 160px;"><img src="../assets/nft2.png" alt="NFTcard"></div>

                <div class="swiper-slide" data-swiper-slide-index="3" style="width: 160px;"><img
                    src="../assets/nft4.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="4" style="width: 160px;"><img
                    src="../assets/nft5.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="5" style="width: 160px;"><img
                    src="../assets/nft6.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="6" style="width: 160px;"><img
                    src="../assets/nft7.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="7" style="width: 160px;"><img
                    src="../assets/nft8.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="8" style="width: 160px;"><img
                    src="../assets/nft9.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="9" style="width: 160px;"><img
                    src="../assets/nft10.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="10" style="width: 160px;"><img
                    src="../assets/nft11.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="11" style="width: 160px;"><img
                    src="../assets/nft12.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="12" style="width: 160px;"><img
                    src="../assets/nft13.png" alt="NFTcard"></div>
                <div class="swiper-slide" data-swiper-slide-index="13" style="width: 160px;"><img
                    src="../assets/nft14.png" alt="NFTcard"></div>

                <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0"
                     style="width: 160px;"><img src="../assets/nft1.png" alt="NFTcard"></div>
                <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1"
                     style="width: 160px;"><img src="../assets/nft2.png" alt="NFTcard"></div>

                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3"
                     style="width: 160px;"><img src="../assets/nft4.png" alt="NFTcard"></div>
                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4"
                     style="width: 160px;"><img src="../assets/nft5.png" alt="NFTcard"></div>
              </div>
            </div>
            <!--            swiper-->
            <img src="../assets/gradient_logo.png"
                 class="mt-12 mb-12 z-10 max-w-[750px] sm:max-w-[75vw] sm:mb-10"><span
              class="text-center text-white text-2xl mb-10 z-10 sm:mb-10 sm:text-[18px] sm:leading-[24px]"><span
              class="text-orange mr-2">{{ $t('page1info2part1') }}</span>{{
              $t('page1info2part2')
            }} <br>{{ $t('page1info2part3') }}</span>
            <div class="flex flex-col items-center w-full sm:space-y-2.5">
              <!--              <button-->
              <!--                class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] bg-purple hover:bg-lightPurple active:bg-lightPurple z-10 hidden sm:flex sm:max-w-full sm:w-full">-->
              <!--                Sign in-->
              <!--              </button>-->
              <a :href="telegramChannel" target="_blank">
                <button
                    class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] bg-purple hover:bg-lightPurple active:bg-lightPurple z-10 sm:max-w-full sm:w-full">
                  Join Us
                  <svg class="h-5 w-5 ml-2.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                       stroke-linejoin="round">
                      <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                    </g>
                    <defs>
                      <clippath id="a">
                        <path fill="#fff" transform="rotate(90 12 12)" d="M0 0h24v24H0z"></path>
                      </clippath>
                    </defs>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div  class="pb-40 relative flex justify-center w-full px-5 sm:pb-8">
          <!--          <img src="../assets/planet.png"-->
          <!--               class="absolute right-0 -top-44 z-0 sm:hidden"-->
          <!--               alt="forsagePlanet">-->
          <div class="earth absolute right-0 -top-24 z-0 sm:hidden">

          </div>
          <div class="w-full flex flex-col max-w-desktop-full space-y-28">
            <div
                class="text-white text-[24px] leading-[40px] max-w-525px text-2xl z-10 sm:text-[20px] sm:leading-[30px]">
              {{ $t('page2content1') }}<span class="text-gradient mx-1.5">{{ $t("page2content2") }}</span>
              {{ $t("page2content3") }}<span class="text-gradient mx-1.5">{{ $t("page2content4") }}</span>
              {{ $t("page2content5") }}<span class="text-gradient mx-1.5">{{ $t("page2content6") }}</span>
            </div>
            <div class="relative flex w-full z-10"><img src="../assets/planet_mobile.webp"
                                                        class="absolute -top-24 left-1/2 -translate-x-1/2 z-0 hidden sm:block"
                                                        alt="forsagePlanet">
              <div class="flex w-full lg:hidden">
                <!--                <a class="w-full flex justify-center items-center px-2.5 sm:px-0"-->
                <!--                   target="_blank" href="#">-->
                <!--                  <div class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">-->
                <!--                    <div class="flex flex-col items-start text-left flex-1 space-y-2.5"><span-->
                <!--                        class="text-white text-2xl">Community</span><span>A platform for the exchange of experience, where each user can publish their material</span>-->
                <!--                    </div>-->
                <!--                    <a class="flex items-center text-white"-->
                <!--                       :href="websideUrl"><span>Become part of the community</span>-->
                <!--                      <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"-->
                <!--                           xmlns="http://www.w3.org/2000/svg">-->
                <!--                        <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5" stroke-linecap="round"-->
                <!--                           stroke-linejoin="round">-->
                <!--                          <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>-->
                <!--                        </g>-->
                <!--                        <defs>-->
                <!--                          <clippath id="a">-->
                <!--                            <path fill="#fff" transform="rotate(90 12 12)" d="M0 0h24v24H0z"></path>-->
                <!--                          </clippath>-->
                <!--                        </defs>-->
                <!--                      </svg>-->
                <!--                    </a><img src="../assets/people.png"-->
                <!--                             class="absolute right-1.5 bottom-1.5 !w-40 !h-40"></div>-->
                <!--                </a>-->
                <a class="w-full flex justify-center items-center px-2.5 sm:px-0" target="_blank"
                   :href="telegramChannel">
                  <div class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                    <div class="flex flex-col items-start text-left flex-1 space-y-2.5"><span
                        class="text-white text-2xl">{{ $t("page1info1") }}</span><span>{{ $t("page2info1") }}</span>
                    </div>
                    <a class="flex items-center text-white"
                       :href="websideUrl"><span>{{ $t("page2info1bottom") }}</span>
                      <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                           stroke-linejoin="round">
                          <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                        </g>
                        <defs>
                          <clippath id="a">
                            <path fill="#fff" transform="rotate(90 12 12)" d="M0 0h24v24H0z"></path>
                          </clippath>
                        </defs>
                      </svg>
                    </a>
                    <img src="../assets/book.webp"
                         class="absolute right-1.5 bottom-1.5 !w-40 !h-40">
                  </div>
                </a><a class="w-full flex justify-center items-center px-2.5 sm:px-0" target="_blank"
                       :href="telegramChat">
                <div class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                  <div class="flex flex-col items-start text-left flex-1 space-y-2.5"><span
                      class="text-white text-2xl">{{ $t("livechat") }}</span><span>{{ $t("page2info2") }}</span>
                  </div>
                  <a class="flex items-center text-white"
                     :href="websideUrl"><span>{{ $t("page2info2bottom") }}</span>
                    <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                      </g>
                      <defs>
                        <clippath id="a">
                          <path fill="#fff" transform="rotate(90 12 12)" d="M0 0h24v24H0z"></path>
                        </clippath>
                      </defs>
                    </svg>
                  </a><img src="../assets/chat.webp"
                           class="absolute right-1.5 bottom-1.5 !w-40 !h-40"></div>
              </a></div>
              <div class="margin-item-carousel w-full hidden lg:flex lg:pb-8">
                <div class="carousel-root">
                  <div class="carousel carousel-slider" style="width:100%">
                    <ul class="control-dots">
                      <li class="dot selected" value="0" role="button" tabindex="0"
                          aria-label="slide item 1"></li>
                      <li class="dot" value="1" role="button" tabindex="0" aria-label="slide item 2"></li>
                      <li class="dot" value="2" role="button" tabindex="0" aria-label="slide item 3"></li>
                    </ul>
                    <button type="button" aria-label="previous slide / item"
                            class="control-arrow control-prev control-disabled"></button>
                    <div class="slider-wrapper axis-horizontal">
                      <ul class="slider animated"
                          style="-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);-o-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);-webkit-transition-duration:350ms;-moz-transition-duration:350ms;-o-transition-duration:350ms;transition-duration:350ms;-ms-transition-duration:350ms">
                        <li class="slide"><a
                            class="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank" :href="telegramChat">
                          <div
                              class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                            <div class="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span class="text-white text-2xl">Live chat</span><span>Platform where you can ask a question to experienced participants</span>
                            </div>
                            <a class="flex items-center text-white"
                               :href="websideUrl"><span>Find a mentor</span>
                              <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5"
                                   stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                                </g>
                                <defs>
                                  <clippath id="a">
                                    <path fill="#fff" transform="rotate(90 12 12)"
                                          d="M0 0h24v24H0z"></path>
                                  </clippath>
                                </defs>
                              </svg>
                            </a><img src="../assets/chat.png"
                                     class="absolute right-1.5 bottom-1.5 !w-40 !h-40"></div>
                        </a></li>
                        <li class="slide selected previous"><a
                            class="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank" href="#">
                          <div
                              class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                            <div class="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span class="text-white text-2xl">Community</span><span>A platform for the exchange of experience, where each user can publish their material</span>
                            </div>
                            <a class="flex items-center text-white"
                               :href="websideUrl"><span>Become part of the community</span>
                              <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5"
                                   stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                                </g>
                                <defs>
                                  <clippath id="a">
                                    <path fill="#fff" transform="rotate(90 12 12)"
                                          d="M0 0h24v24H0z"></path>
                                  </clippath>
                                </defs>
                              </svg>
                            </a><img src="../assets/people.png"
                                     class="absolute right-1.5 bottom-1.5 !w-40 !h-40"></div>
                        </a></li>
                        <li class="slide"><a
                            class="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank" :href="telegramChannel">
                          <div
                              class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                            <div class="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span
                                  class="text-white text-2xl">Documentation</span><span>Participant learning platform</span>
                            </div>
                            <a class="flex items-center text-white"
                               :href="websideUrl"><span>Start learning</span>
                              <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5"
                                   stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                                </g>
                                <defs>
                                  <clippath id="a">
                                    <path fill="#fff" transform="rotate(90 12 12)"
                                          d="M0 0h24v24H0z"></path>
                                  </clippath>
                                </defs>
                              </svg>
                            </a><img src="../assets/book.png"
                                     class="absolute right-1.5 bottom-1.5 !w-40 !h-40"></div>
                        </a></li>
                        <li class="slide"><a
                            class="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank" :href="telegramChat">
                          <div
                              class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                            <div class="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span class="text-white text-2xl">Live chat</span><span>Platform where you can ask a question to experienced participants</span>
                            </div>
                            <a class="flex items-center text-white"
                               :href="websideUrl"><span>Find a mentor</span>
                              <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5"
                                   stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                                </g>
                                <defs>
                                  <clippath id="a">
                                    <path fill="#fff" transform="rotate(90 12 12)"
                                          d="M0 0h24v24H0z"></path>
                                  </clippath>
                                </defs>
                              </svg>
                            </a><img src="../assets/chat.png"
                                     class="absolute right-1.5 bottom-1.5 !w-40 !h-40"></div>
                        </a></li>
                        <li class="slide selected previous"><a
                            class="w-full flex justify-center items-center px-2.5 sm:px-0"
                            target="_blank" href="#">
                          <div
                              class="relative flex flex-col flex-1 gray-gradient h-240px rounded-3xl p-7.5 cursor-pointer">
                            <div class="flex flex-col items-start text-left flex-1 space-y-2.5">
                              <span class="text-white text-2xl">Community</span><span>A platform for the exchange of experience, where each user can publish their material</span>
                            </div>
                            <a class="flex items-center text-white"
                               :href="websideUrl"><span>Become part of the community</span>
                              <svg class="ml-1 w-5 h-5" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#a)" stroke="#fff" stroke-width="1.5"
                                   stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M19 12H5M13 18l6-6M13 6l6 6"></path>
                                </g>
                                <defs>
                                  <clippath id="a">
                                    <path fill="#fff" transform="rotate(90 12 12)"
                                          d="M0 0h24v24H0z"></path>
                                  </clippath>
                                </defs>
                              </svg>
                            </a><img src="../assets/people.png"
                                     class="absolute right-1.5 bottom-1.5 !w-40 !h-40"></div>
                        </a></li>
                      </ul>
                    </div>
                    <button type="button" aria-label="next slide / item"
                            class="control-arrow control-next control-disabled"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center background-gradient">
          <div class="py-[100px] flex flex-col max-w-desktop-full w-full px-5 lg:py-[40px]">
            <div class="flex flex-col items-center text-center  sm:text-left sm:items-start"><span
                class="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[30px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">{{
                $t("page3title")
              }}</span><span
                class="font-light text-white-700 text-[18px] leading-[30px] font-semibold max-w-[770px] sm:text-[14px] sm:leading-[22px]">{{
                $t("page3content1")
              }}</span>
            </div>
            <div class="flex flex-col w-full items-center mb-[60px] sm:items-start sm:mt-2.5 sm:mb-10">

              <div class="flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2"><span>{{ $t("CirculationAddress") }}
                <!-- --> <span class="text-white font-semibold"></span></span><span
                  class="text-white cursor-pointer hover:text-white-800 sm:hidden">{{ contractAddress }}</span>
                <div class="justify-start items-center hidden sm:flex"><span class=" text-white mr-2.5">{{
                    contractAddress.substr(0, 14) + "..." + contractAddress.substr(contractAddress.length - 4, contractAddress.length)
                  }}</span>
                  <button
                      class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] !p-0 !max-w-none">
                    <svg class="w-5 h-5" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"></path>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
            <div class="relative flex flex-col justify-center items-center w-full">
              <div class="flex flex-col items-center w-full  ">
                <div class="flex bg-white-200 rounded-[40px] p-1.5 w-max mb-16 sm:mb-10 sm:w-full">
                  <!--                  <div-->
                  <!--                      @click="navIndex1=0"-->
                  <!--                      :class="{' bg-white text-black':navIndex1==0}"-->
                  <!--                      class="flex flex-1 justify-center font-bold rounded-[40px] w-max px-5 py-1.5 cursor-pointer uppercase sm:px-2.5">-->
                  <!--                    Total-->
                  <!--                  </div>-->
                  <!--                  <div-->
                  <!--                      @click="navIndex1=1"-->
                  <!--                      :class="{' bg-white text-black':navIndex1==1}"-->
                  <!--                      class="flex flex-1 justify-center font-bold rounded-[40px] w-max px-5 py-1.5 cursor-pointer uppercase sm:px-2.5 ">-->
                  <!--                    eth-->
                  <!--                  </div>-->
                  <div
                      @click="navIndex1=2"
                      :class="{' bg-white text-black':navIndex1==2}"
                      class="flex flex-1 justify-center font-bold rounded-[40px] w-max px-5 py-1.5 cursor-pointer uppercase sm:px-2.5 ">
                    tron
                  </div>
                  <!--                  <div-->
                  <!--                      @click="navIndex1=3"-->
                  <!--                      :class="{' bg-white text-black':navIndex1==3}"-->
                  <!--                      class="flex flex-1 justify-center font-bold rounded-[40px] w-max px-5 py-1.5 cursor-pointer uppercase sm:px-2.5 ">-->
                  <!--                    busd-->
                  <!--                  </div>-->
                </div>
                <div class="flex justify-start w-full sm:h-[300px]">
                  <div
                      :class="{'hidden':navIndex1!=0}"
                      class="flex items-center justify-evenly flex-wrap w-full sm:flex-col sm:space-y-5 sm:items-start sm:w-full">
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span class="text-white text-[42px] leading-[50px] num-bold-style">2 443 563</span><span
                          class="text-green text-[24px] leading-[50px] num-bold-style">+3 436</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Accounts count") }}</span></div>
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span class="text-white text-[42px] leading-[50px] num-bold-style">1 094 688 280</span><span
                          class="text-green text-[24px] leading-[50px] num-bold-style">+598 690</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Total result") }}, USD</span></div>
                  </div>
                  <div
                      :class="{'hidden':navIndex1!=1}"
                      class=" flex items-center justify-evenly flex-wrap w-full sm:flex-col sm:space-y-5 sm:items-start sm:w-full">
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span class="text-white text-[42px] leading-[50px] num-bold-style">1 056 958</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Accounts count") }}</span></div>
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span class="text-white text-[42px] leading-[50px] num-bold-style">712 352</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Total result") }}, ETH</span></div>
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span class="text-white text-[42px] leading-[50px] num-bold-style">906 824 408</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Total result") }}, USD</span></div>
                  </div>
                  <div
                      :class="{'hidden':navIndex1!=2}"
                      class=" flex items-center justify-evenly flex-wrap w-full sm:flex-col sm:space-y-5 sm:items-start sm:w-full">
                    <!--                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">-->
                    <!--                      <div-->
                    <!--                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">-->
                    <!--                        <span class="text-white text-[42px] leading-[50px] num-bold-style">462 681</span><span-->
                    <!--                          class="text-green text-[24px] leading-[50px] num-bold-style">+62</span>-->
                    <!--                      </div>-->
                    <!--                      <span class="text-white-700 font-semibold">{{ $t("Accounts count") }}</span>-->
                    <!--                    </div>-->
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span
                            class="text-white text-[42px] leading-[50px] num-bold-style">{{ contractTrxBalance }}</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Total result") }}, TRX</span></div>
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span
                            class="text-white text-[42px] leading-[50px] num-bold-style">{{
                            contractUSDTBalance
                          }}</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Total result") }}, USDT</span></div>
                  </div>
                  <div
                      :class="{'hidden':navIndex1!=3}"
                      class="flex items-center justify-evenly flex-wrap w-full sm:flex-col sm:space-y-5 sm:items-start sm:w-full">
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span class="text-white text-[42px] leading-[50px] num-bold-style">923 924</span><span
                          class="text-green text-[24px] leading-[50px] num-bold-style">+3 374</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Accounts count") }}</span></div>
                    <div class="flex flex-col items-center flex-1  sm:justify-center sm:items-center sm:w-full">
                      <div
                          class="flex whitespace-nowrap sm:flex-wrap justify-center items-center space-x-2.5 text-center">
                        <span class="text-white text-[42px] leading-[50px] num-bold-style">85 547 932</span><span
                          class="text-green text-[24px] leading-[50px] num-bold-style">+598 690</span>
                      </div>
                      <span class="text-white-700 font-semibold">{{ $t("Total result") }}, BUSD</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center ">
          <div class="py-[100px] flex flex-col max-w-desktop-full w-full px-5 lg:py-[40px]">
            <div class="flex flex-col text-center space-y-[50px] lg:space-y-5">
              <div class="flex flex-col items-center text-center  sm:text-left sm:items-start"><span
                  class="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[30px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">{{
                  $t("page4title")
                }}</span><span
                  class="font-light text-white-700 text-[18px] leading-[30px] font-semibold max-w-[770px] sm:text-[14px] sm:leading-[22px]">{{
                  $t("page4content1")
                }}</span>
              </div>
              <div class="">
                <div class="flex justify-center space-x-[50px] lg:space-x-0 lg:hidden">
                  <div
                      :style="navIndex2!=0?'display:none':''"
                      style="margin-left: 60px"
                      class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                    <div
                        class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                      <svg class="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15 4.75C9.34 4.75 4.75 9.339 4.75 15c0 5.66 4.59 10.25 10.25 10.25S25.25 20.66 25.25 15c0-5.661-4.59-10.25-10.25-10.25zM2.75 15C2.75 8.234 8.235 2.75 15 2.75S27.25 8.234 27.25 15c0 6.765-5.485 12.25-12.25 12.25S2.75 21.765 2.75 15z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.25 12.5a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm7.5 0a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm-6.575 5.535a1 1 0 0 1 1.414.015 3.375 3.375 0 0 0 4.822 0 1 1 0 0 1 1.428 1.4 5.375 5.375 0 0 1-7.678 0 1 1 0 0 1 .014-1.415z"
                              fill="#fff"></path>
                      </svg>
                    </div>
                    <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5"><span
                        class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                        $t('Autonomy')
                      }}</span><span
                        class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                        $t('page4listContent1')
                      }}</span>
                    </div>
                  </div>
                  <div
                      :style="navIndex2!=1?'display:none':''"
                      style="margin-left: 50px"
                      class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                    <div
                        class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                      <svg class="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17.5 2.75a1 1 0 0 1 1 1v5a.25.25 0 0 0 .25.25h5a1 1 0 1 1 0 2h-5a2.25 2.25 0 0 1-2.25-2.25v-5a1 1 0 0 1 1-1z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.75 4.75a1.5 1.5 0 0 0-1.5 1.5V10a1 1 0 1 1-2 0V6.25a3.5 3.5 0 0 1 3.5-3.5h8.75a1 1 0 0 1 .707.293l6.25 6.25a1 1 0 0 1 .293.707v13.75a3.5 3.5 0 0 1-3.5 3.5H15a1 1 0 1 1 0-2h6.25a1.5 1.5 0 0 0 1.5-1.5V10.414L17.086 4.75H8.75z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M7.5 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM2.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M5.912 20.292a1 1 0 0 1 .67 1.245l-1.21 4.034 1.68-.84a1 1 0 0 1 .895 0l1.68.84-1.21-4.034a1 1 0 1 1 1.916-.574l1.875 6.25a1 1 0 0 1-1.405 1.181L7.5 26.745l-3.303 1.65a1 1 0 0 1-1.405-1.181l1.875-6.25a1 1 0 0 1 1.245-.67z"
                              fill="#fff"></path>
                      </svg>
                    </div>
                    <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t("Unchanging conditions")
                                  }}</span><span
                        class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                        $t('page4listContent2')
                      }}</span>
                    </div>
                  </div>
                  <div
                      :style="navIndex2!=2?'display:none':''"
                      class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                    <div
                        class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                      <svg class="w-[30px] h-[30px]" viewBox="0 0 30 31" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15 13.503a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M3.658 15.003c3.02 5.055 6.604 7.51 10.714 7.733a1 1 0 0 1-.108 1.998c-5.154-.28-9.35-3.491-12.632-9.234a1 1 0 0 1 0-.993C5.074 8.484 9.52 5.253 15 5.253s9.926 3.23 13.368 9.254a1 1 0 0 1 0 .992 27.71 27.71 0 0 1-1.7 2.636 1 1 0 1 1-1.614-1.18c.44-.602.87-1.252 1.288-1.951-3.168-5.301-6.957-7.75-11.342-7.75-4.385 0-8.174 2.449-11.342 7.75z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M26.957 20.546a1 1 0 0 1 0 1.415l-5 5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.415l1.793 1.793 4.293-4.293a1 1 0 0 1 1.414 0z"
                              fill="#fff"></path>
                      </svg>
                    </div>
                    <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Transparency')
                                  }}</span><span
                        class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                        $t('page4listContent3')
                      }}</span>
                    </div>
                  </div>
                  <div
                      :style="navIndex2!=3?'display:none':''"
                      class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                    <div
                        class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                      <svg class="w-[30px] h-[30px]" viewBox="0 0 31 31" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.011 5.029a3.5 3.5 0 0 1 2.475-1.026h12.5a2.25 2.25 0 0 1 2.25 2.25v2.75h.25a2.25 2.25 0 0 1 2.25 2.25v3.75a1 1 0 1 1-2 0v-3.75a.25.25 0 0 0-.25-.25h-15a3.5 3.5 0 0 1-1.5-.337v11.837a1.5 1.5 0 0 0 1.5 1.5h15a.25.25 0 0 0 .25-.25v-3.75a1 1 0 1 1 2 0v3.75a2.25 2.25 0 0 1-2.25 2.25h-15a3.5 3.5 0 0 1-3.5-3.5v-15A3.5 3.5 0 0 1 6.011 5.03zm.975 2.474a1.5 1.5 0 0 0 1.5 1.5h12.75v-2.75a.25.25 0 0 0-.25-.25h-12.5a1.5 1.5 0 0 0-1.5 1.5z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20.986 16.003a1.5 1.5 0 0 0 0 3h4v-3h-4zm-2.474-.975a3.5 3.5 0 0 1 2.474-1.025h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a3.5 3.5 0 0 1-2.474-5.975z"
                              fill="#fff"></path>
                      </svg>
                    </div>
                    <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Full automation')
                                  }}</span><span
                        class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                        $t('page4listContent4')
                      }}</span>
                    </div>
                  </div>
                  <div
                      :style="navIndex2!=4?'display:none':''"
                      class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                    <div
                        class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                      <svg class="w-[30px] h-[30px]" viewBox="0 0 30 31" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.25 21.003a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm21-16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M23.75 9.003a1 1 0 0 1 1 1v6.25a7.25 7.25 0 0 1-7.25 7.25h-1.336l2.043 2.043a1 1 0 0 1-1.414 1.415l-3.75-3.75a1 1 0 0 1 0-1.415l3.75-3.75a1 1 0 0 1 1.414 1.415l-2.043 2.042H17.5a5.25 5.25 0 0 0 5.25-5.25v-6.25a1 1 0 0 1 1-1zM11.793 3.046a1 1 0 0 1 1.414 0l3.75 3.75a1 1 0 0 1 0 1.415l-3.75 3.75a1 1 0 0 1-1.414-1.415l2.043-2.043H12.5a5.25 5.25 0 0 0-5.25 5.25v6.25a1 1 0 1 1-2 0v-6.25a7.25 7.25 0 0 1 7.25-7.25h1.336l-2.043-2.042a1 1 0 0 1 0-1.415z"
                              fill="#fff"></path>
                      </svg>
                    </div>
                    <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Decentralization')
                                  }}</span><span
                        class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                        $t('page4listContent5')
                      }}</span>
                    </div>
                  </div>
                  <div
                      :style="navIndex2!=5?'display:none':''"
                      class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                    <div
                        class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                      <svg class="w-[30px] h-[30px]" viewBox="0 0 31 31" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15.986 11.003a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm0-2a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 1 1-7 0v-5a3.5 3.5 0 0 1 3.5-3.5z"
                              fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15.986 4.753c-5.66 0-10.25 4.59-10.25 10.25 0 5.661 4.59 10.25 10.25 10.25 5.661 0 10.25-4.589 10.25-10.25 0-5.66-4.589-10.25-10.25-10.25zm-12.25 10.25c0-6.765 5.485-12.25 12.25-12.25 6.766 0 12.25 5.485 12.25 12.25 0 6.766-5.484 12.25-12.25 12.25-6.765 0-12.25-5.484-12.25-12.25z"
                              fill="#fff"></path>
                      </svg>
                    </div>
                    <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('100% online')
                                  }}</span><span
                        class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                        $t('page4listContent6')
                      }}</span>
                    </div>
                  </div>
                  <div class="flex flex-col justify-center w-full max-w-[330px] space-y-1.5 lg:hidden">
                    <div
                        @click="navIndex2=0"
                        :class="{'bg-white-200 text-white':navIndex2==0}"
                        class="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer border-white-200 ">
                      {{ $t('Autonomy') }}
                    </div>
                    <div
                        @click="navIndex2=1"
                        :class="{'bg-white-200 text-white':navIndex2==1}"
                        class="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                      {{ $t("Unchanging conditions") }}
                    </div>
                    <div
                        @click="navIndex2=2"
                        :class="{'bg-white-200 text-white':navIndex2==2}"
                        class="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                      {{ $t('Transparency') }}
                    </div>
                    <div
                        @click="navIndex2=3"
                        :class="{'bg-white-200 text-white':navIndex2==3}"
                        class="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                      {{ $t('Full automation') }}
                    </div>
                    <div
                        @click="navIndex2=4"
                        :class="{'bg-white-200 text-white':navIndex2==4}"
                        class="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                      {{ $t('Decentralization') }}
                    </div>
                    <div
                        @click="navIndex2=5"
                        :class="{'bg-white-200 text-white':navIndex2==5}"
                        class="flex justify-center items-center w-full px-[30px] py-4 rounded-[30px] border-2 border-transparent font-bold text-[18px] leading-[24px] cursor-pointer text-white-700">
                      {{ $t('100% online') }}
                    </div>
                  </div>
                </div>
                <div class="margin-item-carousel hidden lg:flex">
                  <div class="carousel-root">
                    <div class="carousel carousel-slider" style="width:100%">
                      <ul class="control-dots">
                        <li class="dot selected" value="0" role="button" tabindex="0"
                            aria-label="slide item 1"></li>
                        <li class="dot" value="1" role="button" tabindex="0"
                            aria-label="slide item 2"></li>
                        <li class="dot" value="2" role="button" tabindex="0"
                            aria-label="slide item 3"></li>
                        <li class="dot" value="3" role="button" tabindex="0"
                            aria-label="slide item 4"></li>
                        <li class="dot" value="4" role="button" tabindex="0"
                            aria-label="slide item 5"></li>
                        <li class="dot" value="5" role="button" tabindex="0"
                            aria-label="slide item 6"></li>
                      </ul>
                      <button type="button" aria-label="previous slide / item"
                              class="control-arrow control-prev control-disabled"></button>
                      <div class="slider-wrapper axis-horizontal">
                        <ul class="slider animated"
                            style="-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);-o-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);-webkit-transition-duration:350ms;-moz-transition-duration:350ms;-o-transition-duration:350ms;transition-duration:350ms;-ms-transition-duration:350ms">
                          <li class="slide">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 31 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.986 11.003a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm0-2a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 1 1-7 0v-5a3.5 3.5 0 0 1 3.5-3.5z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.986 4.753c-5.66 0-10.25 4.59-10.25 10.25 0 5.661 4.59 10.25 10.25 10.25 5.661 0 10.25-4.589 10.25-10.25 0-5.66-4.589-10.25-10.25-10.25zm-12.25 10.25c0-6.765 5.485-12.25 12.25-12.25 6.766 0 12.25 5.485 12.25 12.25 0 6.766-5.484 12.25-12.25 12.25-6.765 0-12.25-5.484-12.25-12.25z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('100% online')
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                                  $t('page4listContent6')
                                }}</span>
                              </div>
                            </div>
                          </li>
                          <li class="slide selected previous">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15 4.75C9.34 4.75 4.75 9.339 4.75 15c0 5.66 4.59 10.25 10.25 10.25S25.25 20.66 25.25 15c0-5.661-4.59-10.25-10.25-10.25zM2.75 15C2.75 8.234 8.235 2.75 15 2.75S27.25 8.234 27.25 15c0 6.765-5.485 12.25-12.25 12.25S2.75 21.765 2.75 15z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.25 12.5a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm7.5 0a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm-6.575 5.535a1 1 0 0 1 1.414.015 3.375 3.375 0 0 0 4.822 0 1 1 0 0 1 1.428 1.4 5.375 5.375 0 0 1-7.678 0 1 1 0 0 1 .014-1.415z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Autonomy')
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">

                                .</span>
                              </div>
                            </div>
                          </li>
                          <li class="slide ">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17.5 2.75a1 1 0 0 1 1 1v5a.25.25 0 0 0 .25.25h5a1 1 0 1 1 0 2h-5a2.25 2.25 0 0 1-2.25-2.25v-5a1 1 0 0 1 1-1z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.75 4.75a1.5 1.5 0 0 0-1.5 1.5V10a1 1 0 1 1-2 0V6.25a3.5 3.5 0 0 1 3.5-3.5h8.75a1 1 0 0 1 .707.293l6.25 6.25a1 1 0 0 1 .293.707v13.75a3.5 3.5 0 0 1-3.5 3.5H15a1 1 0 1 1 0-2h6.25a1.5 1.5 0 0 0 1.5-1.5V10.414L17.086 4.75H8.75z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.5 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM2.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.912 20.292a1 1 0 0 1 .67 1.245l-1.21 4.034 1.68-.84a1 1 0 0 1 .895 0l1.68.84-1.21-4.034a1 1 0 1 1 1.916-.574l1.875 6.25a1 1 0 0 1-1.405 1.181L7.5 26.745l-3.303 1.65a1 1 0 0 1-1.405-1.181l1.875-6.25a1 1 0 0 1 1.245-.67z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t("Unchanging conditions")
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                                  $t('page4listContent2')
                                }}</span>
                              </div>
                            </div>
                          </li>
                          <li class="slide">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15 13.503a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.658 15.003c3.02 5.055 6.604 7.51 10.714 7.733a1 1 0 0 1-.108 1.998c-5.154-.28-9.35-3.491-12.632-9.234a1 1 0 0 1 0-.993C5.074 8.484 9.52 5.253 15 5.253s9.926 3.23 13.368 9.254a1 1 0 0 1 0 .992 27.71 27.71 0 0 1-1.7 2.636 1 1 0 1 1-1.614-1.18c.44-.602.87-1.252 1.288-1.951-3.168-5.301-6.957-7.75-11.342-7.75-4.385 0-8.174 2.449-11.342 7.75z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.957 20.546a1 1 0 0 1 0 1.415l-5 5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.415l1.793 1.793 4.293-4.293a1 1 0 0 1 1.414 0z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Transparency')
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                                  $t('page4listContent3')
                                }}</span>
                              </div>
                            </div>
                          </li>
                          <li class="slide">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 31 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.011 5.029a3.5 3.5 0 0 1 2.475-1.026h12.5a2.25 2.25 0 0 1 2.25 2.25v2.75h.25a2.25 2.25 0 0 1 2.25 2.25v3.75a1 1 0 1 1-2 0v-3.75a.25.25 0 0 0-.25-.25h-15a3.5 3.5 0 0 1-1.5-.337v11.837a1.5 1.5 0 0 0 1.5 1.5h15a.25.25 0 0 0 .25-.25v-3.75a1 1 0 1 1 2 0v3.75a2.25 2.25 0 0 1-2.25 2.25h-15a3.5 3.5 0 0 1-3.5-3.5v-15A3.5 3.5 0 0 1 6.011 5.03zm.975 2.474a1.5 1.5 0 0 0 1.5 1.5h12.75v-2.75a.25.25 0 0 0-.25-.25h-12.5a1.5 1.5 0 0 0-1.5 1.5z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M20.986 16.003a1.5 1.5 0 0 0 0 3h4v-3h-4zm-2.474-.975a3.5 3.5 0 0 1 2.474-1.025h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a3.5 3.5 0 0 1-2.474-5.975z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Full automation')
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                                  $t('page4listContent4')
                                }}</span>
                              </div>
                            </div>
                          </li>
                          <li class="slide">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.25 21.003a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm21-16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M23.75 9.003a1 1 0 0 1 1 1v6.25a7.25 7.25 0 0 1-7.25 7.25h-1.336l2.043 2.043a1 1 0 0 1-1.414 1.415l-3.75-3.75a1 1 0 0 1 0-1.415l3.75-3.75a1 1 0 0 1 1.414 1.415l-2.043 2.042H17.5a5.25 5.25 0 0 0 5.25-5.25v-6.25a1 1 0 0 1 1-1zM11.793 3.046a1 1 0 0 1 1.414 0l3.75 3.75a1 1 0 0 1 0 1.415l-3.75 3.75a1 1 0 0 1-1.414-1.415l2.043-2.043H12.5a5.25 5.25 0 0 0-5.25 5.25v6.25a1 1 0 1 1-2 0v-6.25a7.25 7.25 0 0 1 7.25-7.25h1.336l-2.043-2.042a1 1 0 0 1 0-1.415z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Decentralization')
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                                  $t('page4listContent5')
                                }}</span>
                              </div>
                            </div>
                          </li>
                          <li class="slide">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 31 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.986 11.003a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm0-2a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 1 1-7 0v-5a3.5 3.5 0 0 1 3.5-3.5z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.986 4.753c-5.66 0-10.25 4.59-10.25 10.25 0 5.661 4.59 10.25 10.25 10.25 5.661 0 10.25-4.589 10.25-10.25 0-5.66-4.589-10.25-10.25-10.25zm-12.25 10.25c0-6.765 5.485-12.25 12.25-12.25 6.766 0 12.25 5.485 12.25 12.25 0 6.766-5.484 12.25-12.25 12.25-6.765 0-12.25-5.484-12.25-12.25z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('100% online')
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">{{
                                  $t('page4listContent6')
                                }}</span>
                              </div>
                            </div>
                          </li>
                          <li class="slide selected previous">
                            <div
                                class="flex flex-col flex-1 items-center justify-center space-y-5 h-[400px] max-w-[600px] rounded-[30px] gray-gradient-without lg:max-w-full lg:max-h-auto lg:px-[40px] lg:py-[20px] lg:space-y-2.5">
                              <div
                                  class="w-[60px] h-[60px] flex justify-center items-center background-gradient rounded-full sm:w-[50px] sm:h-[50px]">
                                <svg class="w-[30px] h-[30px]" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15 4.75C9.34 4.75 4.75 9.339 4.75 15c0 5.66 4.59 10.25 10.25 10.25S25.25 20.66 25.25 15c0-5.661-4.59-10.25-10.25-10.25zM2.75 15C2.75 8.234 8.235 2.75 15 2.75S27.25 8.234 27.25 15c0 6.765-5.485 12.25-12.25 12.25S2.75 21.765 2.75 15z"
                                        fill="#fff"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.25 12.5a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm7.5 0a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1zm-6.575 5.535a1 1 0 0 1 1.414.015 3.375 3.375 0 0 0 4.822 0 1 1 0 0 1 1.428 1.4 5.375 5.375 0 0 1-7.678 0 1 1 0 0 1 .014-1.415z"
                                        fill="#fff"></path>
                                </svg>
                              </div>
                              <div class="flex flex-col max-w-[385px] space-y-5 sm:max-w-full sm:space-y-2.5">
                                <span
                                    class="text-white text-[24px] leading-[30px] font-bold sm:text-5 sm:leading-[24px]">{{
                                    $t('Autonomy')
                                  }}</span><span
                                  class="text-white-700 text-[18px] leading-[28px] font-light sm:text-[14px] sm:leading-5">

                              </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <button type="button" aria-label="next slide / item"
                              class="control-arrow control-next control-disabled"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center ">
          <div class="py-[100px] flex flex-col max-w-desktop-full w-full px-5 lg:py-[40px]">
            <div class="flex flex-col items-center text-center  sm:text-left sm:items-start"><span
                class="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[30px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">{{
                $t('page5title')
              }}</span><span
                class="font-light text-white-700 text-[18px] leading-[30px] font-semibold max-w-[770px] sm:text-[14px] sm:leading-[22px]">{{
                $t('page5content')
              }}</span>
            </div>
            <div class="relative flex justify-center items-center bg-gradient sm:mt-5"><img
                src="../assets/cabinet_preview.png" class="max-w-full sm:max-w-[90vw]"
                alt="cabinet_preview_image"></div>
          </div>
        </div>
        <div class="flex flex-col items-center ">
          <div class="py-[100px] flex flex-col max-w-desktop-full w-full px-5 lg:py-[40px]">
            <div class="flex flex-col items-center text-center  sm:text-left sm:items-start"><span
                class="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[60px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">{{
                $t('page6title')
              }}</span>
            </div>
            <div data-accordion-component="Accordion" class="accordion">
              <div class="relative flex flex-col w-full">
                <svg class="absolute top-1/3 -left-10 h-40 sm:left-5 sm:top-10" viewBox="0 0 60 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.551 63.978c0-2.69.187-5.239.561-7.65.467-2.41 1.495-4.682 3.084-6.815 1.589-2.225 4.066-4.219 7.43-5.98a146.221 146.221 0 0 1 4.346-2.226 47.366 47.366 0 0 0 5.888-3.338c1.962-1.298 3.598-2.735 4.906-4.311 1.402-1.67 2.103-3.477 2.103-5.424 0-2.133-.841-3.802-2.523-5.007-1.682-1.298-3.645-1.947-5.888-1.947s-4.112.556-5.607 1.668a14.35 14.35 0 0 0-3.505 3.617c-.841 1.298-1.636 2.41-2.383 3.338L0 17.942c2.43-5.656 6.262-10.06 11.495-13.213C16.73 1.576 22.71 0 29.44 0c3.552 0 7.103.51 10.654 1.53a30.12 30.12 0 0 1 9.954 4.868c2.99 2.225 5.374 5.146 7.15 8.762C59.064 18.776 60 23.18 60 28.373c0 4.45-.841 8.53-2.523 12.239-1.683 3.616-4.58 6.815-8.692 9.597a53.935 53.935 0 0 1-8.411 4.728c-2.804 1.299-5.187 2.643-7.15 4.034-1.962 1.298-2.944 2.967-2.944 5.007H8.551ZM8.972 100V77.19h21.729V100H8.972Z"
                      fill="#fff" fill-opacity=".1"></path>
                </svg>
                <svg class="absolute bottom-4 right-14 h-36 rotate-180" viewBox="0 0 60 100" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.551 63.978c0-2.69.187-5.239.561-7.65.467-2.41 1.495-4.682 3.084-6.815 1.589-2.225 4.066-4.219 7.43-5.98a146.221 146.221 0 0 1 4.346-2.226 47.366 47.366 0 0 0 5.888-3.338c1.962-1.298 3.598-2.735 4.906-4.311 1.402-1.67 2.103-3.477 2.103-5.424 0-2.133-.841-3.802-2.523-5.007-1.682-1.298-3.645-1.947-5.888-1.947s-4.112.556-5.607 1.668a14.35 14.35 0 0 0-3.505 3.617c-.841 1.298-1.636 2.41-2.383 3.338L0 17.942c2.43-5.656 6.262-10.06 11.495-13.213C16.73 1.576 22.71 0 29.44 0c3.552 0 7.103.51 10.654 1.53a30.12 30.12 0 0 1 9.954 4.868c2.99 2.225 5.374 5.146 7.15 8.762C59.064 18.776 60 23.18 60 28.373c0 4.45-.841 8.53-2.523 12.239-1.683 3.616-4.58 6.815-8.692 9.597a53.935 53.935 0 0 1-8.411 4.728c-2.804 1.299-5.187 2.643-7.15 4.034-1.962 1.298-2.944 2.967-2.944 5.007H8.551ZM8.972 100V77.19h21.729V100H8.972Z"
                      fill="#fff" fill-opacity=".1"></path>
                </svg>
                <div data-accordion-component="AccordionItem" class="accordion__item">
                  <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5">
                    <div data-accordion-component="AccordionItemHeading" role="heading"
                         class="accordion__heading" aria-level="3"
                         @click="hide1=!hide1"
                    >
                      <div class="accordion__button" id="accordion__heading-raa-0" aria-disabled="false"
                           aria-expanded="false" aria-controls="accordion__panel-raa-0" role="button"
                           tabindex="0" data-accordion-component="AccordionItemButton">
                        <div class="flex items-center justify-between space-x-2.5"><span
                            class="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]">{{
                            $t('page6listTitle1')
                          }}</span>
                          <div
                              :class="{'bg-purple rotate-180':!hide1}"
                              class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                            <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                         aria-hidden="true" id="accordion__panel-raa-0" :hidden="hide1">
                      <div
                          class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                                        <span class="transition-opacity duration-500 ease-in-out"><div
                                            class="space-y-1.5">{{ $t('page6listContent1') }}</div></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-accordion-component="AccordionItem" class="accordion__item">
                  <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                       @click="hide2=!hide2"
                  >
                    <div data-accordion-component="AccordionItemHeading" role="heading"
                         class="accordion__heading" aria-level="3">
                      <div class="accordion__button" id="accordion__heading-raa-1" aria-disabled="false"
                           aria-expanded="false" aria-controls="accordion__panel-raa-1" role="button"
                           tabindex="0" data-accordion-component="AccordionItemButton">
                        <div class="flex items-center justify-between space-x-2.5"><span
                            class="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]">{{
                            $t('page6listTitle2')
                          }}</span>
                          <div
                              :class="{'bg-purple rotate-180':!hide2}"
                              class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                            <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                         aria-hidden="true" id="accordion__panel-raa-1" :hidden="hide2">
                      <div
                          class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                        <span class="transition-opacity duration-500 ease-in-out">{{
                            $t('page6listContent2part1')
                          }}
                        </span>
                        <p>
                          {{ $t('page6listContent2part2') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-accordion-component="AccordionItem" class="accordion__item">
                  <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                       @click="hide3=!hide3"
                  >
                    <div data-accordion-component="AccordionItemHeading" role="heading"
                         class="accordion__heading" aria-level="3">
                      <div class="accordion__button" id="accordion__heading-raa-2" aria-disabled="false"
                           aria-expanded="false" aria-controls="accordion__panel-raa-2" role="button"
                           tabindex="0" data-accordion-component="AccordionItemButton">
                        <div class="flex items-center justify-between space-x-2.5"><span
                            class="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]">{{
                            $t('page6listTitle3')
                          }}</span>
                          <div
                              :class="{'bg-purple rotate-180':!hide3}"
                              class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                            <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                         aria-hidden="true" id="accordion__panel-raa-2" :hidden="hide3">
                      <div
                          class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                        <span class="transition-opacity duration-500 ease-in-out">{{
                            $t('page6listContent3part1')
                          }}</span>
                        <p>
                          {{ $t('page6listContent3part2') }}
                          <a target="_blank" style="color: #acd1f8"
                             href="https://front.pascalfinance.com/pdf/web/viewer.html?file=safeAudit.pdf">https://front.pascalfinance.com/pdf/web/viewer.html?file=safeAudit.pdf</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-accordion-component="AccordionItem" class="accordion__item">
                  <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                       @click="hide4=!hide4">
                    <div data-accordion-component="AccordionItemHeading" role="heading"
                         class="accordion__heading" aria-level="3">
                      <div class="accordion__button" id="accordion__heading-raa-3" aria-disabled="false"
                           aria-expanded="false" aria-controls="accordion__panel-raa-3" role="button"
                           tabindex="0" data-accordion-component="AccordionItemButton">
                        <div class="flex items-center justify-between space-x-2.5"><span
                            class="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]">{{
                            $t('page6listTitle4')
                          }}</span>
                          <div
                              :class="{'bg-purple rotate-180':!hide4}"
                              class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                            <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                         aria-hidden="true" id="accordion__panel-raa-3" :hidden="hide4">
                      <div
                          class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                        <span class="transition-opacity duration-500 ease-in-out"><span>{{
                            $t('page6listContent4part1')
                          }}
                           <a target="_blank" style="color: #acd1f8" href="https://www.yunusloopdefi.com">www.yunusloopdefi.com</a>

                        {{ $t('page6listContent4part2') }}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-accordion-component="AccordionItem" class="accordion__item">
                  <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                       @click="hide5=!hide5">
                    <div data-accordion-component="AccordionItemHeading" role="heading"
                         class="accordion__heading" aria-level="3">
                      <div class="accordion__button" id="accordion__heading-raa-4" aria-disabled="false"
                           aria-expanded="false" aria-controls="accordion__panel-raa-4" role="button"
                           tabindex="0" data-accordion-component="AccordionItemButton">
                        <div class="flex items-center justify-between space-x-2.5"><span
                            class="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]">{{
                            $t('page6listTitle5')
                          }}</span>
                          <div
                              :class="{'bg-purple rotate-180':!hide5}"
                              class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                            <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                         aria-hidden="true" id="accordion__panel-raa-4" :hidden="hide5">
                      <div
                          class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                                        <span class="transition-opacity duration-500 ease-in-out"><div
                                            class="space-y-1.5">{{ $t('page6listContent5part1') }}<ul
                                            class="space-y-1.5"><li>{{ $t('page6listContent5part2') }}

                                          <li>{{
                                              $t('page6listContent5part3')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part4')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part5')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part6')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part7')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part8')
                                            }}</li>
                                          <li>{{
                                              $t('page6listContent5part9')
                                            }}</li>
                                        </ul></div></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-accordion-component="AccordionItem" class="accordion__item">
                  <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                       @click="hide6=!hide6">
                    <div data-accordion-component="AccordionItemHeading" role="heading"
                         class="accordion__heading" aria-level="3">
                      <div class="accordion__button" id="accordion__heading-raa-5" aria-disabled="false"
                           aria-expanded="false" aria-controls="accordion__panel-raa-5" role="button"
                           tabindex="0" data-accordion-component="AccordionItemButton">
                        <div class="flex items-center justify-between space-x-2.5"><span
                            class="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]">{{
                            $t('page6listTitle6')
                          }}</span>
                          <div
                              :class="{'bg-purple rotate-180':!hide6}"
                              class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                            <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                         aria-hidden="true" id="accordion__panel-raa-5" :hidden="hide6">
                      <div
                          class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                        <span class="transition-opacity duration-500 ease-in-out"><span>{{
                            $t('page6listContent6')
                          }}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-accordion-component="AccordionItem" class="accordion__item">
                  <div class="flex flex-col w-full pt-[36px] pb-[30px] border-b border-white-200 sm:pt-5 sm:pb-5"
                       @click="hide7=!hide7">
                    <div data-accordion-component="AccordionItemHeading" role="heading"
                         class="accordion__heading" aria-level="3">
                      <div class="accordion__button" id="accordion__heading-raa-6" aria-disabled="false"
                           aria-expanded="false" aria-controls="accordion__panel-raa-6" role="button"
                           tabindex="0" data-accordion-component="AccordionItemButton">
                        <div class="flex items-center justify-between space-x-2.5"><span
                            class="font-bold text-white text-[22px] leading-[28px] sm:text-[16px] sm:leading-[26px]">{{
                            $t('page6listTitle7')
                          }}</span>
                          <div
                              :class="{'bg-purple rotate-180':!hide7}"
                              class="flex-shrink-0 flex justify-center items-center cursor-pointer rounded-full border border-purple w-[40px] h-[40px] transition duration-500   sm:w-[30px] sm:h-[30px]">
                            <svg class="w-3.5 sm:w-2.5" viewBox="0 0 14 9" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-accordion-component="AccordionItemPanel" class="accordion__panel"
                         aria-hidden="true" id="accordion__panel-raa-6" :hidden="hide7">
                      <div
                          class="font-light text-white-700 text-[18px] leading-[28px] transition-all mt-5 sm:mt-2.5 duration-500 ease-in-out sm:text-[14px] sm:leading-[22px]">
                        <span class="transition-opacity duration-500 ease-in-out"><span>{{
                            $t('page6listContent7')
                          }}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center ">
          <div class="py-[100px] flex flex-col max-w-desktop-full w-full px-5 lg:py-[40px]">
            <div class="flex flex-col items-center text-center  sm:text-left sm:items-start"><span
                class="max-w-[870px] text-white text-[48px] leading-[60px] font-bold mb-[60px] sm:mb-5 sm:text-[30px] sm:leading-[36px]">Official channels</span>
            </div>
            <div style="width: 40%;margin: 0 auto"
                 class="flex items-start  justify-evenly lg:flex-wrap sm:justify-around">
              <a
                  class="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"
                  target="_blank" :href="telegramChannel">
                <div
                    class="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">
                  <svg class="w-6 h-6" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                          fill="#fff"></path>
                  </svg>
                </div>
                <span class="max-w-[90px] group-hover:text-white">Telegram channel</span></a>
              <a
                  class="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"
                  target="_blank" :href="telegramChat">
                <div
                    class="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">
                  <svg class="w-6 h-6" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                          fill="#fff"></path>
                  </svg>
                </div>
                <span class="max-w-[90px] group-hover:text-white">Telegram chat</span>
              </a>
              <!--              <a-->
              <!--                class="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"-->
              <!--                target="_blank" :href="twitterUrl">-->
              <!--                <div-->
              <!--                  class="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">-->
              <!--                  <svg class="w-6 h-6" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
              <!--                    <path fill-rule="evenodd" clip-rule="evenodd"-->
              <!--                          d="M29.494 2.845c-1.104.488-2.275.81-3.474.956a6.074 6.074 0 0 0 2.66-3.35c-1.168.694-2.46 1.2-3.842 1.468a6.052 6.052 0 0 0-10.312 5.52A17.148 17.148 0 0 1 2.05 1.107a6.058 6.058 0 0 0 1.88 8.088 5.93 5.93 0 0 1-2.75-.756v.074a6.056 6.056 0 0 0 4.856 5.938 6.11 6.11 0 0 1-1.592.212c-.388 0-.768-.036-1.138-.112a6.062 6.062 0 0 0 5.658 4.206A12.134 12.134 0 0 1 0 21.263a16.918 16.918 0 0 0 9.262 2.738c11.144 0 17.232-9.23 17.232-17.238 0-.262-.008-.524-.02-.78a12.32 12.32 0 0 0 3.02-3.138Z"-->
              <!--                          fill="#fff"></path>-->
              <!--                  </svg>-->
              <!--                </div>-->
              <!--                <span class="max-w-[90px] group-hover:text-white">Twitter</span></a>-->
              <!--              <a-->
              <!--                class="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"-->
              <!--                target="_blank" :href="insUrl">-->
              <!--                <div-->
              <!--                  class="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">-->
              <!--                  <svg class="w-6 h-6" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">-->
              <!--                    <path fill-rule="evenodd" clip-rule="evenodd"-->
              <!--                          d="M14.756 0c2.497.004 2.987.022 4.206.078 1.383.063 2.328.283 3.155.604.855.333 1.58.777 2.303 1.5a6.372 6.372 0 0 1 1.5 2.303c.32.826.54 1.772.604 3.155.06 1.303.076 1.772.078 4.752v1.217c-.002 2.98-.019 3.449-.078 4.751-.063 1.384-.283 2.33-.605 3.156a6.372 6.372 0 0 1-1.5 2.303 6.373 6.373 0 0 1-2.302 1.5c-.827.32-1.772.54-3.155.604-1.261.057-1.742.075-4.471.078h-1.779c-2.73-.003-3.21-.02-4.47-.078-1.385-.063-2.33-.283-3.156-.604a6.374 6.374 0 0 1-2.303-1.5 6.373 6.373 0 0 1-1.5-2.303c-.321-.827-.54-1.772-.604-3.155-.056-1.22-.074-1.709-.077-4.206v-2.31C.605 9.348.623 8.86.679 7.64c.063-1.383.283-2.329.604-3.155a6.373 6.373 0 0 1 1.5-2.303 6.372 6.372 0 0 1 2.303-1.5C5.912.361 6.857.142 8.24.078 9.46.022 9.95.004 12.446 0h2.31Zm5.946 4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-7.1 1.5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"-->
              <!--                          fill="#fff"></path>-->
              <!--                  </svg>-->
              <!--                </div>-->
              <!--                <span class="max-w-[90px] group-hover:text-white">Instagram</span></a>-->
              <!--              <a-->
              <!--                class="w-full flex flex-col items-center justify-center text-center group lg:p-5 lg:w-[30vw] lg:flex-wrap"-->
              <!--                target="_blank" :href="youtubeUrl">-->
              <!--                <div-->
              <!--                  class="w-[60px] h-[60px] flex justify-center items-center mb-3.5 relative btn__bordered_gradient cursor-pointer">-->
              <!--                  <svg class="w-6 h-6" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
              <!--                    <path-->
              <!--                      d="M32.82 3.755c-.38-1.468-1.495-2.626-2.908-3.021C27.329 0 17 0 17 0S6.67 0 4.088.706c-1.386.395-2.528 1.581-2.908 3.05C.5 6.437.5 12 .5 12s0 5.59.68 8.245c.38 1.468 1.494 2.625 2.908 3.02C6.698 24 17 24 17 24s10.33 0 12.912-.706c1.413-.395 2.528-1.553 2.909-3.021.679-2.683.679-8.245.679-8.245s.027-5.59-.68-8.273ZM13.71 17.14V6.86L22.3 12l-8.59 5.139Z"-->
              <!--                      fill="#fff"></path>-->
              <!--                  </svg>-->
              <!--                </div>-->
              <!--                <span class="max-w-[90px] group-hover:text-white">YouTube</span></a>-->
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full text-[15px] leading-[25px] text-white-500">
          <div style="justify-content: center!important;"
               class="flex w-full max-w-desktop-full mb-[40px] space-x-[50px] px-5 lg:flex-col lg:px-0 lg:mb-0 lg:space-x-0">
            <div
                style="align-items: center"
                class="flex space-x-[50px] lg:flex-col lg:space-x-0 lg:bg-lightGray lg:px-5 lg:pt-[30px] lg:space-y-[30px] lg:order-2">
              <img style="width: 194px" src="../assets/logo_grey.webp" class="h-[36px]"><span class=""/>
              <!--              <div class="flex flex-col items-start max-w-[250px] w-full flex-shrink-0 lg:max-w-full"><img-->
              <!--                  src="../assets/logo_grey.webp" class="h-[36px] mb-5 lg:mt-2.5"><span class="">{{-->
              <!--                  $t('bottomInfo')-->
              <!--                }}</span>-->
              <!--              </div>-->
              <div class="flex flex-col space-y-2.5">
                <div class="flex space-x-5">
                  <div class="flex space-x-1.5 max-w-[100px] w-full flex-shrink-0"><span
                      class="break-normal">Smart</span><span>Contract</span>
                  </div>
                  <a class="text-white font-semibold hover:text-white-900 hover:underline" target="_blank"
                     :href="'https://tronscan.org/#/address/' + contractAddress">{{
                      tronAddress1.substr(0, 6) + "..." + tronAddress1.substr(tronAddress1.length - 4, tronAddress1.length)
                    }}</a>
                </div>

              </div>
            </div>
            <!--            <div class="flex flex-wrap flex-1 sm:px-2.5 sm:mb-10">-->
            <!--              <div class="flex justify-center items-center w-1/2 text-[15px] leading-[20px] p-5 sm:p-2.5"><a-->
            <!--                class="flex justify-center items-center w-full h-full rounded-[15px] cursor-pointer hover:bg-white-50 p-2.5"-->
            <!--                target="_blank" href="https://busd.forsage.io/">-->
            <!--                <svg class="w-[30px] h-[30px] mr-5" viewBox="0 0 22 22" fill="#fff"-->
            <!--                     xmlns="http://www.w3.org/2000/svg">-->
            <!--                  <path fill-rule="evenodd" clip-rule="evenodd"-->
            <!--                        d="M10.972 0 4.605 6.428 6.377 8.2l6.376-6.377L10.973 0Zm4.605 3.327 3.03 3.104-12.23 12.23 12.23-12.23-3.03-3.104ZM3.346 15.631l1.518 1.518-1.518-1.518ZM15.571 4.599 4.606 15.629l1.77 1.77L17.352 6.423 15.571 4.6ZM0 11.024l1.776-1.818 1.776 1.818-1.776 1.777L0 11.024Zm20.177-3.096h.001ZM7.947 20.23ZM20.172 9.2 9.206 20.229 10.976 22l10.977-10.976-1.781-1.825Z"></path>-->
            <!--                </svg>-->
            <!--                <span class="max-w-[75px] text-left text-white font-semibold">Forsage BUSD</span></a></div>-->
            <!--              <div class="flex justify-center items-center w-1/2 text-[15px] leading-[20px] p-5 sm:p-2.5"><a-->
            <!--                class="flex justify-center items-center w-full h-full rounded-[15px] cursor-pointer hover:bg-white-50 p-2.5"-->
            <!--                target="_blank" href="https://trx.forsage.io/auth/">-->
            <!--                <svg class="w-[30px] h-[30px] mr-5" viewBox="0 0 24 24" fill="#fff"-->
            <!--                     xmlns="http://www.w3.org/2000/svg">-->
            <!--                  <path-->
            <!--                    d="m22.79 7.815-4.02-3.674a.855.855 0 0 0-.439-.215L1.797 1.01c-.522-.092-.943.4-.748.873l8.59 20.709c.187.458.818.55 1.145.17L22.848 8.692a.625.625 0 0 0-.057-.876Zm-5.873-2.908-5.031 4.02-7.927-6.301 12.958 2.281Zm-6.882 15.366L3.06 3.463l8.26 6.582-1.284 10.228Zm1.255.014 1.23-9.711 8.325-1.444-9.555 11.155Zm2.237-11.093 4.765-3.818 2.755 2.51-7.52 1.308Z"></path>-->
            <!--                </svg>-->
            <!--                <span class="max-w-[75px] text-left text-white font-semibold">Forsage TRX</span></a></div>-->
            <!--              <div class="flex justify-center items-center w-1/2 text-[15px] leading-[20px] p-5 sm:p-2.5"><a-->
            <!--                class="flex justify-center items-center w-full h-full rounded-[15px] cursor-pointer hover:bg-white-50 p-2.5"-->
            <!--                target="_blank" href="https://lk.forsage.io/auth/">-->
            <!--                <svg class="w-[30px] h-[30px] mr-5" viewBox="0 0 28 28" fill="#fff"-->
            <!--                     xmlns="http://www.w3.org/2000/svg">-->
            <!--                  <path fill-rule="evenodd" clip-rule="evenodd"-->
            <!--                        d="M14.728 3.015a.875.875 0 0 0-1.456 0l-7 10.5a.874.874 0 0 0 0 .97l7 10.5a.875.875 0 0 0 1.456 0l6.997-10.496a.874.874 0 0 0 0-.979L14.728 3.015Zm3.716 8.729L14 5.077l-4.444 6.667 4.053-2.027a.875.875 0 0 1 .782 0l4.053 2.027Zm-9.301 3.893L14 22.922l4.857-7.286-4.58 1.526a.875.875 0 0 1-.554 0l-4.58-1.527ZM14 15.41l-4.72-1.573 4.72-2.36 4.72 2.36L14 15.41Z"></path>-->
            <!--                </svg>-->
            <!--                <span class="max-w-[75px] text-left text-white font-semibold">Forsage ETH</span></a></div>-->
            <!--              <div class="flex justify-center items-center w-1/2 text-[15px] leading-[20px] p-5 sm:p-2.5"><a-->
            <!--                class="flex justify-center items-center w-full h-full rounded-[15px] cursor-pointer hover:bg-white-50 p-2.5"-->
            <!--                target="_blank" :href="documentUrl">-->
            <!--                <svg class="w-[30px] h-[30px] mr-5" viewBox="0 0 24 24" fill="none"-->
            <!--                     xmlns="http://www.w3.org/2000/svg">-->
            <!--                  <g clip-path="url(#a)" stroke="#fff" stroke-width="2" stroke-linecap="round"-->
            <!--                     stroke-linejoin="round">-->
            <!--                    <path-->
            <!--                      d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 7h6m-6 4h6m-6 4h4"></path>-->
            <!--                  </g>-->
            <!--                  <defs>-->
            <!--                    <clippath id="a">-->
            <!--                      <path fill="#fff" d="M0 0h24v24H0z"></path>-->
            <!--                    </clippath>-->
            <!--                  </defs>-->
            <!--                </svg>-->
            <!--                <span class="max-w-[75px] text-left text-white font-semibold">Forsage Support</span></a>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
          <div class="flex justify-center bg-lightGray w-full">
            <div
                class="flex justify-between items-center max-w-desktop-full w-full pt-[40px] pb-[40px]  px-5 lg:pt-10 lg:flex-col lg:items-start lg:pb-5">
              <div class="flex items-center space-x-[50px] lg:space-x-0 lg:flex-col ">
                <div class="flex flex-col space-y-[5px] max-w-[250px] w-full lg:order-2"><span>© <!-- -->2022
                  <!-- --> All Rights Reserved </span>
                  <!--                  <a-->
                  <!--                  class="text-white hover:text-white-900 hover:underline"-->
                  <!--                  :href="Disclaimer">Disclaimer</a>-->
                </div>
                <div class="flex space-x-3 lg:mb-10"><a
                    class="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"
                    target="_blank" :href="telegramChannel">
                  <svg class="h-4" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                          fill="#fff"></path>
                  </svg>
                </a><a
                    class="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"
                    target="_blank" :href="telegramChat">
                  <svg class="h-4" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                          fill="#fff"></path>
                  </svg>
                </a>
                  <!--                  <a-->
                  <!--                    class="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"-->
                  <!--                    target="_blank" :href="twitterUrl">-->
                  <!--                    <svg class="h-4" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                  <!--                      <path fill-rule="evenodd" clip-rule="evenodd"-->
                  <!--                            d="M29.494 2.845c-1.104.488-2.275.81-3.474.956a6.074 6.074 0 0 0 2.66-3.35c-1.168.694-2.46 1.2-3.842 1.468a6.052 6.052 0 0 0-10.312 5.52A17.148 17.148 0 0 1 2.05 1.107a6.058 6.058 0 0 0 1.88 8.088 5.93 5.93 0 0 1-2.75-.756v.074a6.056 6.056 0 0 0 4.856 5.938 6.11 6.11 0 0 1-1.592.212c-.388 0-.768-.036-1.138-.112a6.062 6.062 0 0 0 5.658 4.206A12.134 12.134 0 0 1 0 21.263a16.918 16.918 0 0 0 9.262 2.738c11.144 0 17.232-9.23 17.232-17.238 0-.262-.008-.524-.02-.78a12.32 12.32 0 0 0 3.02-3.138Z"-->
                  <!--                            fill="#fff"></path>-->
                  <!--                    </svg>-->
                  <!--                  </a><a-->
                  <!--                    class="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"-->
                  <!--                    target="_blank" :href="insUrl">-->
                  <!--                    <svg class="h-4" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                  <!--                      <path fill-rule="evenodd" clip-rule="evenodd"-->
                  <!--                            d="M14.756 0c2.497.004 2.987.022 4.206.078 1.383.063 2.328.283 3.155.604.855.333 1.58.777 2.303 1.5a6.372 6.372 0 0 1 1.5 2.303c.32.826.54 1.772.604 3.155.06 1.303.076 1.772.078 4.752v1.217c-.002 2.98-.019 3.449-.078 4.751-.063 1.384-.283 2.33-.605 3.156a6.372 6.372 0 0 1-1.5 2.303 6.373 6.373 0 0 1-2.302 1.5c-.827.32-1.772.54-3.155.604-1.261.057-1.742.075-4.471.078h-1.779c-2.73-.003-3.21-.02-4.47-.078-1.385-.063-2.33-.283-3.156-.604a6.374 6.374 0 0 1-2.303-1.5 6.373 6.373 0 0 1-1.5-2.303c-.321-.827-.54-1.772-.604-3.155-.056-1.22-.074-1.709-.077-4.206v-2.31C.605 9.348.623 8.86.679 7.64c.063-1.383.283-2.329.604-3.155a6.373 6.373 0 0 1 1.5-2.303 6.372 6.372 0 0 1 2.303-1.5C5.912.361 6.857.142 8.24.078 9.46.022 9.95.004 12.446 0h2.31Zm5.946 4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-7.1 1.5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"-->
                  <!--                            fill="#fff"></path>-->
                  <!--                    </svg>-->
                  <!--                  </a><a-->
                  <!--                    class="flex justify-center items-center rounded-full bg-darkGray hover:bg-white-100 w-[40px] h-[40px]"-->
                  <!--                    target="_blank" :href="youtubeUrl">-->
                  <!--                    <svg class="h-4" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                  <!--                      <path-->
                  <!--                        d="M32.82 3.755c-.38-1.468-1.495-2.626-2.908-3.021C27.329 0 17 0 17 0S6.67 0 4.088.706c-1.386.395-2.528 1.581-2.908 3.05C.5 6.437.5 12 .5 12s0 5.59.68 8.245c.38 1.468 1.494 2.625 2.908 3.02C6.698 24 17 24 17 24s10.33 0 12.912-.706c1.413-.395 2.528-1.553 2.909-3.021.679-2.683.679-8.245.679-8.245s.027-5.59-.68-8.273ZM13.71 17.14V6.86L22.3 12l-8.59 5.139Z"-->
                  <!--                        fill="#fff"></path>-->
                  <!--                    </svg>-->
                  <!--                  </a>-->
                </div>
              </div>
              <div class="relative group min-w-[175px] lg:min-w-max sm:hidden">
                <div class="flex justify-between items-center cursor-pointer p-4  group-hover:text-white">
                  <div class="flex items-center space-x-2">
                    <img v-show="curLng==='en'" src="../assets/en.svg" class="w-5 h-5 lg:mr-2.5" alt="">
                    <img v-show="curLng==='de'" src="../assets/de.svg" class="w-5 h-5" alt="">
                    <img v-show="curLng==='fr'" src="../assets/fr.svg" class="w-5 h-5" alt="">
                    <img v-show="curLng==='it'" src="../assets/it.svg" class="w-5 h-5" alt="">
                    <span style="color: #999">{{ curLngName }}</span></div>
                  <svg class="fill-current w-2.5 transition all easy-out group-hover:rotate-180" viewBox="0 0 8 4"
                       fill="#8B8C8C" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0H0l4 4 4-4Z"></path>
                  </svg>
                </div>
                <ul
                    class="w-full absolute bg-lightGray rounded-[15px] hidden group-hover:flex flex-col overflow-hidden drop-shadow-lg bottom-full !right-0">
                  <li
                      @click="chooseLng('en')"
                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">
                    <img src="../assets/en.svg" class="w-5 h-5" alt=""><span class="lg:hidden">English</span>
                  </li>
                  <!--                  <li-->
                  <!--                      @click="chooseLng('de')"-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/de.svg" class="w-5 h-5" alt=""><span class="lg:hidden">German</span>-->
                  <!--                  </li>-->
                  <!--                  <li-->
                  <!--                      @click="chooseLng('fr')"-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/fr.svg" class="w-5 h-5" alt=""><span class="lg:hidden">French</span>-->
                  <!--                  </li>-->
                  <!--                  <li-->
                  <!--                      @click="chooseLng('it')"-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/it.svg" class="w-5 h-5" alt=""><span class="lg:hidden">Italian</span>-->
                  <!--                  </li>-->
                  <!--                  <li-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/es.svg" class="w-5 h-5" alt=""><span class="lg:hidden">Spanish</span>-->
                  <!--                  </li>-->
                  <!--                  <li-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/ru.svg" class="w-5 h-5" alt=""><span class="lg:hidden">Русский</span>-->
                  <!--                  </li>-->

                  <!--                  <li-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/es.svg" class="w-5 h-5" alt=""><span class="lg:hidden">Spanish</span>-->
                  <!--                  </li>-->

                  <!--                  <li-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/az.svg" class="w-5 h-5" alt=""><span class="lg:hidden">AZƏRBAYCAN</span>-->
                  <!--                  </li>-->
                  <!--                  <li-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/ar.svg" class="w-5 h-5" alt=""><span class="lg:hidden">العربية</span>-->
                  <!--                  </li>-->
                  <!--                  <li-->
                  <!--                      class="cursor-pointer flex items-center lg:justify-center space-x-2 hover:text-white p-4 border-b border-white-100 last:border-b-0 hover:bg-lightGray2">-->
                  <!--                    <img src="../assets/he.svg" class="w-5 h-5" alt=""><span class="lg:hidden">עִבְרִית</span>-->
                  <!--                  </li>-->
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed bottom-5 right-5 flex flex-col items-end space-y-2.5 !z-30 sm:bottom-3 sm:right-3">
          <button
              class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] bg-purple-750 hover:bg-lightPurple active:bg-lightPurple !rounded-5 !py-2.5 !px-3.5 relative !z-40 drop-shadow-md min-h-[45px] overflow-hidden border border-white-50">
            <div class="absolute top-0 left-0 w-full h-full backdrop-blur bg-white-10"></div>
            <a class="flex items-center space-x-2 z-10" target="_blank" :href="telegramChat">
              <svg class="w-6 h-6" viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#a)">
                  <path
                      d="M33.38 12.69a7.426 7.426 0 0 1-1.89.66c.332 1.017.504 2.08.51 3.15a11.081 11.081 0 0 1-3.71 8.11 1.002 1.002 0 0 0-.32.73v5.34l-4.38-2.79a.999.999 0 0 0-.83-.11 16.001 16.001 0 0 1-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12a16 16 0 0 1 4.55.66A7.44 7.44 0 0 1 23 3.22a18 18 0 0 0-5-.72c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 0 0 4.88-.68l5.53 3.52a1 1 0 0 0 1.54-.84v-6.73a13.001 13.001 0 0 0 4-9.27 12.32 12.32 0 0 0-.57-3.81z"></path>
                  <path
                      d="M11 15.5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2H11zm3.25 5a1 1 0 0 0 0 2h7.5a1 1 0 0 0 0-2h-7.5zm-3.97-9a1 1 0 0 0 1 1h13.44a1 1 0 0 0 .83-.47A7.53 7.53 0 0 1 24 10.5H11.28a1 1 0 0 0-1 1zM30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
                </g>
                <defs>
                  <clippath id="a">
                    <path d="M0 0h36v36H0z"></path>
                  </clippath>
                </defs>
              </svg>
              <span>Chat</span></a></button>
          <button
              class="py-5 px-[40px] max-w-max flex justify-center items-center text-center text-base font-medium text-white rounded-[80px] sm:text-sm outline-none sm:py-4 sm:text-[14px] sm:leading-[17px] bg-purple-750 hover:bg-lightPurple active:bg-lightPurple !rounded-5 !py-2.5 !px-3.5 relative !z-40 drop-shadow-md min-h-[45px] overflow-hidden border border-white-50">
            <div class="absolute top-0 left-0 w-full h-full backdrop-blur bg-white-10"></div>
            <a class="flex items-center space-x-2.5 z-10" target="_blank" :href="telegramChannel">
              <svg class="w-5 h-5" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M28.788.94 1.102 11.92a1 1 0 0 0 .074 1.886l6.978 2.16 2.83 8.758a1 1 0 0 0 1.632.426l4.1-3.808 7.778 5.724a1 1 0 0 0 1.566-.578l5.414-23.234A2 2 0 0 0 28.788.941V.94ZM12.58 17.79l-.864 5.18-2-7.253 19.54-12.75-16.676 14.82v.002Z"
                      fill="#fff"></path>
              </svg>
              <span>News</span></a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
const TronWeb = require('tronweb')
import abiUtil from "../abi/index"

var COUNT = 6;
//定时器
var TIMER;
export default {
  name: "Home",
  data() {
    return {
      tronWeb: {},
      documentUrl: "https://documentation.yunusloopdefi.com/",
      websideUrl: "#",
      Disclaimer: "#",
      telegramChat: "https://t.me/+1xx-sOgmbns3YzFl",
      telegramChannel: "https://t.me/YunusLoopDeFiChannel",
      insUrl: "#",
      twitterUrl: "#",
      youtubeUrl: "#",
      contractAddress: "TUtsRXcAAgC9FfFyhHzNZkqCByLXytmVii",
      tronAddress1: "TUA9cFnwkSMtHnEKmSN9HRXwpMtdr7drBq",
      navIndex1: 2,
      navIndex2: 0,
      hide1: true,
      hide2: true,
      hide3: true,
      hide4: true,
      hide5: true,
      hide6: true,
      hide7: true,
      hide8: true,
      hide9: true,
      hide0: true,
      nodePath: "https://api.trongrid.io",
      contractTrxBalance: 0,
      contractUSDTBalance: 0,
      curLng: "en",
      curLngName: "English"
    }
  },
  components: {},
  created() {
    if (this.IsPhone()) {
      window.location = 'tronlinkoutside://pull.activity?param=' + JSON.stringify({
        "url": "https://site.yunusloopdefi.com/", //target DApp
        "action": "open",
        "protocol": "tronlink",
        "version": "1.0"
      });
      this.bindEvent()

      TIMER = setTimeout(function () {
        //超时后跳转下载页
        window.location.href = 'https://www.tronlink.org/';
      }, COUNT * 1000);
    }
  },
  methods: {
    bindEvent() {
      var hidden, visibilityChange;
      if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
      } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
      }
      $(document).bind(visibilityChange, function () {
        if (document[hidden]) {
          //监听浏览器挂起时（即调起APP）清除定时
          clearTimeout(TIMER);
        }
      });
    },
    IsPhone() {
      var info = navigator.userAgent;
      var isPhone = /mobile/i.test(info);
      return isPhone;
    },

    handelChooseLng(type) {
      switch (type) {
        case "en" :
          this.curLngName = "English";
          this.curLng = "en";
          break
        case "de" :
          this.curLngName = "German";
          this.curLng = "de";
          break
        case "fr" :
          this.curLngName = "Franch";
          this.curLng = "fr";
          break
        case "it" :
          this.curLngName = "Italian";
          this.curLng = "it";
          break
      }
    },
    chooseLng(type) {
      localStorage.setItem("language", type);
      this.$i18n.locale = type;
      this.handelChooseLng(type)
    },
    async getConnect() {
      const HttpProvider = TronWeb.providers.HttpProvider;
      const fullNode = new HttpProvider(this.nodePath);
      const solidityNode = new HttpProvider(this.nodePath);
      const eventServer = new HttpProvider(this.nodePath);

      const tronWeb = new TronWeb(
          fullNode,
          solidityNode,
          eventServer,
      );
      tronWeb.setAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
      // tronWeb.setAddress(this.contractAddress);
      window.tronWeb = tronWeb
    },
    async getData() {
      try {
        let balance = await window.tronWeb.trx.getBalance(this.contractAddress);
        this.contractTrxBalance = parseInt(parseInt(balance) / 10 ** 6).toString()
        this.contractTrxBalance = this.contractTrxBalance.split('').reverse().join('');
        this.contractTrxBalance = this.contractTrxBalance.replace(/(.{3})/g, "$1 ")
        this.contractTrxBalance = this.contractTrxBalance.split('').reverse().join('');
        tronWeb.setAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
        this.getUSDTBalance()
      } catch (e) {
        console.log(e)
      }
    },
    async getUSDTBalance() {
      let contract = await abiUtil.getContractByName("USDT", window.tronWeb)
      let res = await contract.balanceOf(this.contractAddress).call({})
      this.contractUSDTBalance = parseInt(window.tronWeb.toDecimal(res._hex) / 10 ** 6).toString()
      this.contractUSDTBalance = this.contractUSDTBalance.split('').reverse().join('');
      this.contractUSDTBalance = this.contractUSDTBalance.replace(/(.{3})/g, "$1 ")
      this.contractUSDTBalance = this.contractUSDTBalance.split('').reverse().join('');
    }
  },
  async mounted() {


    await this.getConnect()
    setTimeout(() => {
      this.getData()
    }, 2000)
    new Swiper('.swiper-container', {
      autoplay: 4000,
      paginationClickable: true,
      slidesPerView: 5,
      loop: true,
      effect: 'coverflow',
      centeredSlides: true,
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../style/home2.css";
@import "../style/home1.css";

.home {
  .swiper {
    width: 70%;
  }

  .swiper-slide {
    img {
      border-radius: 20px;
    }
  }

  .swiper-slide {
    transform: scale(.65) !important;
  }

  .swiper-slide.swiper-slide-active {
    transform: scale(1) !important;
  }

  .swiper-slide.swiper-slide-next, .swiper-slide.swiper-slide-prev {
    transform: scale(.8) !important;
  }

  @keyframes planetRotate {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: -200% center;
    }
  }

  .earth {
    width: 500px;
    height: 500px;
    animation: planetRotate 30s linear infinite;
    background: url("../assets/earth.webp");
    background-size: 200% 100%;
    box-shadow: inset 1px 0px 0px -1px rgba(255, 255, 255, 0.1), inset -30px 0px 50px 0px black, -5px 0px 10px -4px #b3caff;
    border-radius: 50%;
    overflow: hidden;
    transform: rotate(45deg);
  }
}
</style>
