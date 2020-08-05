<template>
    <!-- 顶部 -->
    <div class="top">
        <!-- 展示 -->
        <div class="top_top">
            <div class="top_left">
                <img src="@/assets/images/logo.png">
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
        <div class="top_navi">
            <div class="navi_img">
                <a href="/">
                    <img src="@/assets/images/header_menu_attractions_off.png" alt="游乐设施" title="游乐设施">
                </a>
            </div>
            <div class="navi_img">
                <a href="/">
                    <img src="@/assets/images/header_menu_park_guide_off.png" alt="游乐设施" title="游乐设施">
                </a>
            </div>
            <div class="navi_img">
                <a href="/">
                    <img src="@/assets/images/header_menu_restaurants_off.png" alt="游乐设施" title="游乐设施">
                </a>
            </div>
            <div class="navi_img">
                <a href="/">
                    <img src="@/assets/images/header_menu_shops_off.png" alt="游乐设施" title="游乐设施">
                </a>
            </div>
            <div class="navi_img">
                <a href="/">
                    <img src="@/assets/images/header_menu_tickets_off.png" alt="游乐设施" title="游乐设施">
                </a>
            </div>
            <div class="navi_img">
                <a href="/">
                    <img src="@/assets/images/header_menu_hotels_off.png" alt="游乐设施" title="游乐设施">
                </a>
            </div>
            <div class="navi_img">
                <a href="/">
                    <img src="@/assets/images/header_menu_travel_off.png" alt="游乐设施" title="游乐设施">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scope>
    .top {
        height: 200px;
        border: 1px solid blue;
    }

    .top_top {
        display: flex;
        margin-top: 30px;
    }

    /* 左边 */
    .top_left img {
        width: 400px;
        height: 80px;
        border: 1px solid red;
        visibility: top;
    }

    /* 右边 */
    .top_right {
        border: 1px solid red;
        margin-left: 48px;
    }

    .language_list {
        display: flex;
        align-items: center;
        width: 100%;
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
        align-items: center;
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
        width: 100%;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 20px
    }

    .navi_img {
        width: 170px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: linear-gradient(0deg, rgba(11, 56, 131, 1), rgba(15, 75, 162, 1));
        border: 1px solid #0059aa;
    }

    .navi_img img {
        visibility: top;
    }
</style>