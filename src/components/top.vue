<template>
    <!-- 顶部 -->
    <div class="top globalWith">

        <!-- 展示 -->
        <div class="top_top">

            <!-- logo -->
            <div class="top_left">
                <img src="@/assets/images/logo1.png" />
            </div>

            <div class="top_right">
                <ul class="language_list">
                    <li>日本語</li>
                    <li>English</li>
                    <li>한국</li>
                    <li>中文簡體字</li>
                    <li>中文繁體字 香港</li>
                    <li>中文繁體字 台灣</li>
                </ul>

                <ul class="menu_list">
                    <li>Top</li>
                    <li>Access</li>
                    <li>Operation Hours/Schule</li>
                    <li>Studio Map</li>
                    <li>Rules & Manners</li>
                </ul>
            </div>
        </div>

        <!-- 导航栏 -->
        <div class="top_navi sp_none">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "top",
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .top {
        padding-top: 30px;
    }

    .top_top {
        display: flex;
        justify-content: space-between;
    }

    .top_left img {
        visibility: top;
    }

    .language_list {
        display: flex;
        width: 100%;
        margin-bottom: 0.625rem;
    }

    .language_list li {
        font-size: 14px;
        border: 1px solid #fff;
        text-align: center;
        line-height: 34px;
        list-style: none;
        height: 34px;
        padding: 0 12px;
        margin: 0;
        /* border-right: 1px solid gold; */
        color: #fff;
    }

    .menu_list {
        display: flex;
        width: 100%;
        margin-left: 20px;
    }

    .menu_list li {
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
    }

    /* 导航栏 */
    .top_navi {
        display: flex;
    }

    .navi_img {
        width: 100%;
        text-align: center;
        line-height: 60px;
        background: linear-gradient(0deg, rgba(11, 56, 131, 1), rgba(15, 75, 162, 1));
        border: 1px solid #0059aa;
    }
</style>