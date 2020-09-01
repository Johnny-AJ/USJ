<template>
    <div class="success_box">

        <div class="success_box_nav">

            <div class="success_img">
                <img src="../../assets/images/成功.png" alt="/">
            </div>

            <div class="success_nab">
                <div class="const">You have paid <span class="const_price">¥ 8900.00</span> yuan</div>
                <div class="const">Order Number：210190121589</div>
            </div>

            <div class="success_btn">
                <!-- <div class="success_title">View order details</div> -->
                <el-button class="success_title">View order details</el-button>
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
</template>

<script>
    export default {
        name: "successfulIndex",
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .success_box {
        width: 62.5rem;
        margin: 0 auto;
        /* border: 1px solid red; */
        margin-top: 2.625rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 4px;
        padding-top: 2.0625rem;
    }

    .success_box_nav {
        width: 60rem;
        border: 2px solid #FFDEDEDE;
        margin: 0 auto;
        text-align: center;
    }

    .const {
        /* display: flex; */
        align-items: center;
        font-size: 1rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(0, 0, 0, 1);
        margin-bottom: .9375rem;
    }

    .const_price {
        font-size: 30px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: #ff6935;
    }

    .success_btn {
        /* border: 1px solid rgba(24, 114, 227, 1); */
        border-radius: 4px;
        line-height: 2.1875rem;
        /* width: 25%; */
        margin: 0 auto;
        margin-bottom: 4.125rem;
    }

    .success_title {
        font-size: 1rem;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(24, 114, 227, 1);
        border: 1px solid rgba(24, 114, 227, 1);;
    }

    .success_img {
        margin-top: 4.1875rem;
    }

    .success_img img {
        width: 10%;
    }

    /*  current_nab*/
    .current_nab {
        width: 61rem;
        /* margin-top: 1.5rem; */
        /* margin-left: 1.375rem; */
        /* border: 1px solid black; */
        /* margin-bottom: 2.5rem; */
        margin: 0 auto;
        height: 100%;
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
        margin-bottom: 1.25rem;
    }

    /* 小于768 宽度100% */
    @media screen and (max-width: 768px) {
        .globalWith {
            width: 100% !important;
            /* width: 100%; */
        }

        .success_box {
            width: 100%;
        }

        .success_box_nav{
            width: 100%;
        }
        .success_btn{
            width: 45%;
        }
        .current_nab{
            width: 100%;
        }
    }
</style>