<template>
    <div class="main_nav globalWith">

        <div class="current_box">

            <div class="current_nav">

                <div class="nav_nav">

                    <div class="current_img">
                        <img src="../../assets/images/成功.png" alt />
                    </div>

                    <div class="price">
                        <div class="price_t">
                            You have paid
                            <span class="prices">¥ 8900.00</span>yuan
                        </div>
                        <div class="price_t">Order Number：210190121589</div>
                    </div>

                    <div class="current_btn">
                        <div>View order details</div>
                    </div>

                </div>
            </div>

            <div class="current_nab">

                <div class="nab_box">

                    <div class="nab_title">Cancel and return to USJ</div>

                    <div class="nab_bot">

                        <div class="nab_clause">
                            <div class="n1">clause</div>
                            <div class="n1">Privacy protection</div>
                            <div class="n1">feedback</div>
                        </div>

                        <div class="nab_time">
                            <div class="time">© 1999 - 2019</div>
                            <div>
                                <img src="../../assets/images/suo.png" alt="/" />
                            </div>
                        </div>
                    </div>

                </div>

                <div class="Consumer">
                    Consumer tip -- PayPal Pte. Ltd. Is the holder of PayPal's value storage tool and does not need to
                    be approved by the monetary authority of Singapore. Users are advised to read
                    <span>the terms and conditions carefully</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "successfulIndex",
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scope>
    /* 主体 */
    .main_nav {
        border: 1px solid red;
        background-color: #fff;
        /* width: 100%; */
        /* height: 100%; */
    }

    .current_box {
        width: 55.5rem;
        /* height: 31.875rem; */
    }

    .current_nav {
        width: 53rem;
        border: 1px solid red;
        margin-top: 2.0625rem;
        margin-left: 1.375rem;
        box-sizing: border-box;
        padding: 50px 0;
    }

    .current_img img {
        width: 9%;
        // 62.5rem
    }

    .price_t {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 300;
    }

    .current_btn {
        width: 10rem;
        height: 1.5rem;
        border: 1px solid rgba(24, 114, 227, 1);
        border-radius: 4px;
        line-height: 1.5rem;
        text-align: center;
        color: blue;
        margin-top: 1.6875rem;
        margin-left: 21rem;
    }

    .nav_nav {
        /* border: 1px solid red; */
        text-align: center;
    }

    /*  current_nab*/
    .current_nab {
        width: 97%;
        margin-top: 1.5rem;
        margin-left: 1.375rem;
        /* border: 1px solid black; */
        margin-bottom: 2.5rem;
    }

    .nab_box {
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        margin-top: 0.5rem;
    }

    .nab_title {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(0, 112, 186, 1);
    }

    .nab_clause {
        display: flex;
    }

    .n1 {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-right: 20px;
    }

    .nab_time {
        display: flex;
        /* align-items: center; */
        margin-right: 10px;
    }

    .time {
        margin-right: 10px;
    }

    .nab_bot {
        display: flex;
    }

    .Consumer {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        margin-top: 1.5rem;
    }
</style>