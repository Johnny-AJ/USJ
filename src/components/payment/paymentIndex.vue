<template>
    <div class="payment_nav globalWith">

        <div class="payment_box">

            <div class="payment_left">
                <div class="payment_content">
                    <!-- 1 -->
                    <div class="p31">
                        <div>
                            <img src="../../assets/images/图层3.png" alt="/">
                        </div>
                        <div class="p30">
                            <div class="p33">
                                <img src="../../assets/images/图层4.png" alt="">
                            </div>
                            <div class="payment_price">$ 1,918.00 </div>
                            <div class="p33">
                                <img src="../../assets/images/xiala2拷贝.png" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="payment_title">Hello, little! <div class="payment_you">Is this not you?</div>
                    </div>

                    <div class="paymene_complete">
                        <div class="cont1">
                            <img src="../../assets/images/suo.png" alt="/">
                        </div>
                        <div class="payment_add">Please add a credit or debit card to complete the purchase.</div>
                    </div>

                    <div class="payment_input">
                        <div>
                            <el-input v-model="input" placeholder="First Name" style="width: 220px;"></el-input>
                        </div>
                        <div>
                            <el-input v-model="input" placeholder="Family Name" style="width: 220px;"></el-input>
                        </div>
                    </div>

                    <div class="payment_multiple">
                        <div>
                            <img src="../../assets/images/图层12.png" alt="">
                        </div>
                        <div>
                            <img src="../../assets/images/图层15.png" alt="">
                        </div>
                        <div>
                            <img src="../../assets/images/图层16.png" alt="">
                        </div>
                        <div>
                            <img src="../../assets/images/图层15.png" alt="">
                        </div>
                    </div>

                    <div class="payment_Billing">
                        <el-input v-model="input" placeholder="The card number"></el-input>
                    </div>

                    <div class="payment_Valid">
                        <div>
                            <div class="font_s">Valid term</div>
                            <div>
                                <el-input v-model="input" placeholder="MM/YY" style="width: 220px;"></el-input>
                            </div>
                        </div>
                        <div>
                            <div class="font_s">CSC</div>
                            <div>
                                <el-input v-model="input" placeholder="The last 3 digits" style="width: 220px;"
                                    suffix-icon="el-icon-bank-card">
                                </el-input>
                            </div>
                        </div>
                    </div>


                    <div class="payment_Billing">
                        <div class="payment_address">
                            <div class="font_s">Billing address</div>
                            <div class="blue">add</div>
                        </div>
                        <div>
                            <el-select v-model="value" placeholder="Add shipping address" style="width: 100%;">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>


                    <div class="add_btn">
                        <div class="btn_add">Add</div>
                    </div>


                </div>
            </div>


            <div class="payment_right">

                <div class="payment_right_nav">

                    <div class="PayPal_img">
                        <img src="../../assets/images/scr_vp_fprd_shield_bags.png" alt="">
                    </div>
                    <div class="PayPal_title">
                        <div>PayPal is a safer and more</div>
                        <div>convenient way to pay</div>
                    </div>
                    <div class="security">
                        <div class="financial">
                            No matter where you shop, we will help you to ensure the security of your financial
                            information.
                        </div>
                    </div>

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
</template>

<script>
    export default {
        name: 'paymentIndex',
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        }
    }
</script>

<style lang="scss" scope>
    .payment_nav {
        border: 1px solid red;
        background-color: #fff;
        padding-top: 33px;
    }

    .payment_box {
        width: 97%;
        height: 100%;
        border: 1px solid red;
        box-sizing: border-box;
        margin: 0 auto;
        display: flex;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(222, 222, 222, 1);
        border-radius: 4px;
    }

    .payment_left {
        width: 50%;
        /* border: 1px solid blue; */
    }

    .payment_content {
        margin-left: 3.875rem;
        margin-top: 1.9375rem;
        /* border: 1px solid red; */
    }

    .p30 {
        display: flex;
        align-items: center;
    }

    .p31 {
        display: flex;
        justify-content: space-between;
    }

    .p31 img {
        width: 100%;
    }

    .p33 img {
        width: 100%;
    }

    .payment_price {
        font-size: 1.875rem;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(255, 87, 34, 1);
    }

    .payment_title {
        display: flex;
        font-size: 1rem;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(13, 18, 21, 1);
        margin-bottom: 1.5rem;
        border-top: 1px solid #FFAAAAAA;
        padding-top: 1.75rem;
    }

    .paymene_complete {
        display: flex;
        background: rgba(170, 170, 170, 1);
        border-radius: 4px;
        line-height: 50px;
        margin-bottom: 1.5rem;
    }

    .payment_add {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(238, 238, 238, 1);
        margin-left: .625rem;
        /* padding-left: .625rem; */
    }

    .payment_input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .payment_multiple {
        display: flex;
        /* align-items: center; */
        /* line-height: 10px; */
        /* margin: 0 auto; */
        background: rgba(242, 243, 244, 1);
        border: 1px solid rgba(222, 222, 222, 1);
        border-radius: 4px;
        margin-bottom: 1.5rem;
    }

    .payment_multiple img {
        width: 70%;
        margin-left: 15px;
        margin-top: .3125rem;
    }

    .add_btn {
        width: 100%;
        /* border: 1px solid blue; */
        background: rgba(0, 112, 186, 1);
        border-radius: 4px;
        /* line-height: 23px; */
        text-align: center;
        margin-bottom: 5rem;
    }

    .btn_add {
        font-size: 30px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(254, 255, 254, 1);
        line-height: 2.8125rem;
    }

    .payment_address {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .font_s {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }

    .payment_Valid {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .blue {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(0, 112, 186, 1);
    }

    .payment_you {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: #FF019CDE;
    }

    .cont1 {
        margin-left: .625rem;
    }

    .payment_Billing {
        margin-bottom: 1.5rem;

    }

    /*  payment_right */
    .payment_right {
        width: 50%;
        /* height: 800px; */
        /* border: 1px solid black; */
        text-align: center;
        position: relative;
    }

    .payment_right_nav {
        position: absolute;
        top: 14.6875rem;
        right: -1.25rem;
    }

    .PayPal_img img {
        width: 50%;
        /* height: 90%; */
    }

    .PayPal_title {
        font-size: 30px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        text-align: center;
    }

    .security {
        width: 70%;
        text-align: center;
        margin: 30px 75px;
    }

    .financial {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }
</style>