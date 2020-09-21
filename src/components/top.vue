<template>
  <!-- 顶部 -->
  <!-- <div class="globalWith"> -->

  <!-- 展示 -->
  <!-- <div class="top_top"> -->

  <!-- logo -->
  <!-- <div class="top_left">
                <img src="@/assets/images/logo1.png" />
            </div> -->

  <!-- <div class="top_right">
                <ul class="language_list">
                    <li><a href="/">日本語</a></li>
                    <li><a href="/">English</a></li>
                    <li><a href="/">한국</a></li>
                    <li><a href="/">中文簡体字</a></li>
                    <li><a href="/">中文繁体字　香港</a></li>
                    <li><a href="/">中文繁体字　台湾</a></li>
                </ul>

                <ul class="menu_list">
                    <li><a href="/">Top</a></li>
                    <li><a href="/">Access</a></li>
                    <li><a href="/">Operation Hours/Schedule</a></li>
                    <li><a href="/">Studio Map</a></li>
                    <li><a href="/">Rules & Manners</a></li>
                </ul>
            </div> -->

  <!-- </div> -->

  <!-- 导航栏 -->
  <!-- <div class="top_navi">
            <div class="navi_img">
                <router-link to="/">
                    <img src="@/assets/images/header_menu_attractions_off.png" alt="游乐设施" title="游乐设施" />
                </router-link>
            </div>
            <div class="navi_img">

                <router-link to="/">
                    <img src="@/assets/images/header_menu_park_guide_off.png" alt="服务指南" title="服务指南" />
                </router-link>
            </div>
            <div class="navi_img">
                <router-link to="/">
                    <img src="@/assets/images/header_menu_restaurants_off.png" alt="餐厅" title="餐厅" />
                </router-link>
            </div>
            <div class="navi_img">
                <router-link to="/">
                    <img src="@/assets/images/header_menu_shops_off.png" alt="商城" title="商城" />
                </router-link>
            </div>
            <div class="navi_img">
                <router-link to="/">
                    <img src="@/assets/images/header_menu_tickets_off.png" alt="门票" title="门票" />
                </router-link>
            </div>
            <div class="navi_img">
                <router-link to="/">
                    <img src="@/assets/images/header_menu_hotels_off.png" alt="酒店" title="酒店" />
                </router-link>
            </div>
            <div class="navi_img">
                <router-link to="/">
                    <img src="@/assets/images/header_menu_travel_off.png" alt="机票" title="机票" />
                </router-link>
            </div>
        </div> -->

  <!-- 更多 -->
  <!-- <p class="bnm">
            <a href="/">
                <img src="https://www.usj.co.jp/cn/common/img/sp_img/sp_top_menu_bt.png" alt="">
            </a>
        </p> -->

  <!-- 返回到顶部 -->
  <!-- <div class="black_top" >
            <div>
                <img @click='handleScroll' src="@/assets/images/top.png" alt="/">
            </div>
        </div> -->

  <!-- </div> -->

  <!-- 新头部 -->
  <!-- 顶部 -->
  <div class="bgc_bgc">

    <div class="globalWiths">

      <div class="top_bgc">

        <!-- 顶部 -->
        <!-- 上部分 -->
        <div class="top_top">

          <div class="top_img">
            <img src="https://www.usj.co.jp/tridiondata/usj/en/us/files/assets/logos/Universal-japan-logo-b.png">
          </div>

          <div class="top_right">
            <!-- 语言选择 -->
            <div class="top_dropdown">
              <el-dropdown>
                <span class="el-dropdown-links a30">
                  English<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" v-model="value">
                  <el-dropdown-item v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    {{item.label}}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

            <!-- 面包屑 -->
            <div class="top_breadcrumb">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>Service Guide </el-breadcrumb-item>
                <el-breadcrumb-item>Traffic Access </el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>

            <!-- 日期时间 -->
            <div class="time">
              <div class="x1"> Operation Hours for Today </div>
              <div class="x2"> 9:00AM - 7:00PM </div>
            </div>

          </div>

        </div>
      </div>

      <div class="bottom_bgc">

        <!-- 下部分 -->
        <!-- 导航栏 -->
        <div class="bottom_bottom">

          <div class="botm_box">

            <!-- 1 -->
            <div class="btom_right">
              <el-dropdown>
                <span class="el-dropdown-link" @click="isshow1=!isshow1">
                  Events & Attractions<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-card class="box-card" v-show="isshow1" @mouseenter.native="isshow=false" @click.native.stop="isshow=true" v-model="oneList">
                  <div v-for="item in oneList" :key="item.value1" :label="item.label1" class="text item">
                    {{item.label1 }}
                  </div>
                  <div class="border"></div>
                  <div v-for="item in twoList" :key="item.value1" :label="item.label1" class="text item b9">
                    {{item.label1 }}
                  </div>
                </el-card>
              </el-dropdown>
            </div>

            <!-- 2 -->
            <div class="btom_right">
              <el-dropdown>
                <span class="el-dropdown-link" @click="isshow2=!isshow2">
                  Enjoying the Park<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-card class="box-card" v-show="isshow2" @mouseenter.native="isshow=false" @click.native.stop="isshow=true" v-model="onesList">
                  <div v-for="item in onesList" :key="item.value2" :label="item.label2" class="text item">
                    {{item.label2 }}
                  </div>
                  <div class="border"></div>
                  <div v-for="item in twosList" :key="item.value2" :label="item.label2" class="text item b9">
                    {{item.label2 }}
                  </div>
                </el-card>
              </el-dropdown>
            </div>

            <!-- 3 -->
            <div class="btom_right">
              <el-dropdown>
                <span class="el-dropdown-link" @click="isshow3=!isshow3">
                  Food＆Goods<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-card class="box-card" v-show="isshow3" @mouseenter.native="isshow=false" @click.native.stop="isshow=true" v-model="onessList">
                  <div v-for="item in onessList" :key="item.value3" :label="item.label3" class="text item">
                    {{item.label3 }}
                  </div>
                  <div class="border"></div>
                </el-card>
              </el-dropdown>
            </div>

            <!-- 4 -->
            <div class="btom_right">
              <el-dropdown>
                <span class="el-dropdown-link" @click="isshow4=!isshow4">
                  Hotels<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-card class="box-card" v-show="isshow4" @mouseenter.native="isshow=false" @click.native.stop="isshow=true" v-model="onesssList">
                  <div v-for="item in onesssList" :key="item.value4" :label="item.label4" class="text item">
                    {{item.label4 }}
                  </div>
                  <div class="border"></div>
                </el-card>
              </el-dropdown>
            </div>

            <!-- 5 -->
            <div class="btom_right">
              <el-dropdown>
                <span class="el-dropdown-link" @click="isshow5=!isshow5">
                  Ticket Information<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-card class="box-card" v-show="isshow5" @mouseenter.native="isshow=false" @click.native.stop="isshow=true" v-model="onessssList">
                  <div v-for="item in onessssList" :key="item.value5" :label="item.label5" class="text item">
                    {{item.label5 }}
                  </div>
                  <div class="border"></div>
                </el-card>
              </el-dropdown>
            </div>
          </div>

          <i class="el-icon-search"></i>

          <!-- logo -->
          <div class="bgc_img">
            <img src="https://www.usj.co.jp/tridiondata/usj/en/us/files/assets/logos/Universal-japan-logo-b.png">
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      isshow1: false,
      isshow2: false,
      isshow3: false,
      isshow4: false,
      isshow5: false,
      visible: false,
      scrollTop: 0,
      options: [
        {
          value: "选1",
          label: "日本語",
        },
        {
          value: "选2",
          label: "English",
        },
        {
          value: "选3",
          label: "中文簡体字",
        },
        {
          value: "选4",
          label: "한국",
        },
        {
          value: "选5",
          label: "中文繁体字　香港",
        },
        {
          value: "选6",
          label: "中文繁体字　台湾",
        },
      ],
      value: "",
      value1: "",
      oneList: "",
      onesList: "",
      onessList: "",
      onesssList: "",
      onessssList: "",
      oneList: [
        {
          value1: "选1",
          label1: "Find an Event",
        },
        {
          value1: "选2",
          label1: "- Ongoing Events",
        },
      ],
      twoList: [
        {
          value1: "选1",
          label1: "Single Rider",
        },
        {
          value1: "选2",
          label1: "Child Switch",
        },
      ],
      onesList: [
        {
          value2: "选1",
          label2: "Enjoying The Park",
        },
        {
          value2: "选2",
          label2: "- Celebrate birthdays and " + "anniversaries at the park!",
        },
      ],
      twosList: [
        {
          value2: "选1",
          label2: "Park Map",
        },
      ],
      onessList: [
        {
          value3: "选1",
          label3: "Food and Restaurnats",
        },
        {
          value3: "选1",
          label3: "-Find a Restarurant",
        },
      ],
      onesssList: [
        {
          value4: "选1",
          label4: "Partner Hotels",
        },
        {
          value4: "选1",
          label4: "Travel Agency",
        },
      ],
      onessssList: [
        {
          value5: "选1",
          label5: "Studio Pass(Park Entry Ticker)",
        },
        {
          value5: "选1",
          label5: "Universal Express Pass",
        },
        {
          value5: "选1",
          label5: "Travel Agency",
        },
      ],
    }
  },
  mounted() {
    // 获取屏幕高度
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    // 大于多少就显示返回顶部
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 100) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
  },
}
</script>

<style scoped>
/deep/ .el-breadcrumb__inner {
  color: #fff;
  font-weight: 800;
}

/deep/ .el-icon-search {
  font-size: 30px;
  color: #fff;
  margin-top: 4px;
}

/deep/ .el-dropdown-link {
  color: #fff;
}

/deep/ .el-card {
  background-color: #162b75;
  color: #fff;
  font-weight: 800;
  border: 1px solid #162b75;
  width: 200px;
}

/deep/ .el-card__body {
  margin-left: 10px;
}
</style><style lang="scss" scoped>
/* .top_top {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
    }

    .top_left img {
        visibility: top;
    } */

/* .language_list {
        display: flex;
        width: 100%;
        margin-bottom: 0.625rem;
    } */

/* .language_list li {
        font-size: 14px;
        border: 1px solid #fff;
        text-align: center;
        line-height: 34px;
        list-style: none;
        height: 34px;
        padding: 0 12px;
        margin: 0;
        color: #fff;
    } */

/* .menu_list {
        display: flex;
        width: 100%;
        margin-left: 20px;
    } */

/* .menu_list li {
        font-size: 14px;
        text-align: center;
        height: 25px;
        padding: 0 12px;
        margin: 0;
        line-height: 25px;
        background: linear-gradient(0deg,
                rgba(175, 109, 1, 1),
                rgba(236, 209, 129, 1));
        border: 1px solid rgba(233, 198, 97, 1);
        color: #fff;
    } */

/* ul li a {
        font-size: 7px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
    } */

/* ul li a:hover {
        color: gold;
    } */

/* 导航栏 */
/* .top_navi {
        display: flex;
    } */

/* .navi_img {
        width: 100%;
        text-align: center;
        line-height: 60px;
        background: linear-gradient(0deg, rgba(11, 56, 131, 1), rgba(15, 75, 162, 1));
        border: 1px solid #0059aa;
    } */

/* 更多 */
/* .bnm {
        position: absolute;
        top: -18px;
        right: 0;
        z-index: 9999;
    }

    p a img {
        width: 66%;
    } */

/* 返回顶部 */
/* .black_top {
        display: block;
        position: fixed;
        bottom: 50px;
        right: 10px;
        z-index: 99;
    }

    .black_top img {
        width: 50%;
    } */

/* 小于768 宽度100% */
/* @media screen and (max-width: 768px) { */
/* .top_right {
            display: none;
        }

        .top_right {
            width: 768px;
            border: 1px solid red;
        }

        .top_left img {
            width: 100% !important;
        }

        .globalWith {
            width: 100% !important;
        } */

/* 导航栏 */
/* .top_navi {
            display: none;
        } */
/* } */

/* 隐藏更多 */
/* @media screen and (min-width: 768px) {
        .bnm {
            display: none;
        }

        .black_top {
            display: none;
        }
    } */

/* 新头部 */
.bgc_bgc {
  background-color: #0268da;
}

globalWiths {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  transition: 0.3s ease-in-out;
}

.top_top {
  display: flex;
  background-color: #0268da;
  justify-content: center;
}

.top_img img {
  width: 35%;
}

.top_right {
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  /* color: black; */
  font-weight: 800;
}

.el-dropdown-links {
  color: #fff;
  font-weight: 800;
}

.a30 {
  font-size: 13px;
}

.isshow {
  display: flex;
}

/* 面包屑 */
.top_dropdown {
  margin-right: 15px;
}

.time {
  display: flex;
}

.x1 {
  font-size: 14px;
  color: #fff;
  font-weight: 800;
}

.x2 {
  font-size: 14px;
  text-decoration: underline;
  color: #fff;
  font-weight: 800;
  margin-left: 5px;
}

/* 下部分 */
.bottom_bottom {
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  background-color: #036ce2;
}

.botm_box {
  display: flex;
  line-height: 35px;
}

.btom_right {
  margin-right: 20px;
}

.border {
  margin-top: 10px;
  border: 1px solid #eee;
}

.b9 {
  font-weight: normal;
  font-size: 14px;
}

.bgc_img {
  position: absolute;
  top: -18px;
  left: 0;
  z-index: 9999;
}

.bgc_img img {
  width: 10%;
}

@media screen and (max-width: 1024px) {
  .globalWiths {
    margin-top: -7px;
    top: -90px;
    background-color: red;
    width: 100%;
  }

  .top_top {
    display: none;
  }

  .botm_box {
    display: none;
  }

  .top_img {
    display: inline;
  }
}

@media screen and (min-width: 1024px) {
  .bgc_img {
    display: none;
  }
}
</style>
