<template>
    <div class="main_nav globalWith">
        <!-- ① Traveler's Information  -->
        <div class="fill_box">
            <!-- fill_left -->
            <div class="fill_left">
                <div class="fill_color">
                    <div class="fill_title">① Traveler's Information</div>
                </div>

                <!-- 内容盒子 -->
                <div class="select_all">
                    <div class="select_box">
                        <!-- 1 -->
                        <div>
                            <div class="select_title">
                                Title
                                <span class="select_icont">*</span>
                            </div>
                            <div>
                                <el-select v-model="value" placeholder="Please " style="width: 5.4375rem;">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value"></el-option>
                                </el-select>
                            </div>
                        </div>

                        <!-- 2 -->
                        <div>
                            <div class="select_title">
                                First Name (as on Travel Document)
                                <span class="select_icont">*</span>
                            </div>
                            <div>
                                <el-input placeholder="As shown on passport" style="width: 14rem;"></el-input>
                            </div>
                        </div>

                        <!-- 3 -->
                        <div class="select_three">
                            <div class="select_title">
                                Family Name (as on Travel Document)
                                <span class="select_icont">*</span>
                            </div>
                            <div>
                                <el-input placeholder="As shown on passport" style="width: 14rem;"></el-input>
                            </div>
                        </div>
                    </div>

                    <!-- 4 -->
                    <div class="select_four">
                        <div class="select_title">
                            Country/Region of Travel Document
                            <span class="select_icont">*</span>
                        </div>
                        <div>
                            <el-select v-model="value" placeholder="Please select " style="width: 21.25rem;">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value"></el-option>
                            </el-select>
                        </div>
                    </div>

                    <!-- 5 -->
                    <div class="select_five">
                        <div class="select_title">
                            Country Code
                            <span class="select_icont">*</span>
                        </div>
                        <div class="select_nab">
                            <div class="select_el">
                                <el-select placeholder="Please select " style="width: 17rem;">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value"></el-option>
                                </el-select>
                            </div>
                            <div>
                                <el-input placeholder="Phone Number(In case of emergency)" style="width: 17rem;">
                                </el-input>
                            </div>
                        </div>
                    </div>

                    <!-- 6 -->
                    <div class="select_six">
                        <div class="select_title">
                            Email Address (your voucher will be sent here, make sure it is correct)
                            <span class="select_icont">*</span>
                        </div>
                        <div>
                            <el-input placeholder="请输入内容" style="width: 35rem;"></el-input>
                        </div>
                    </div>
                </div>
            </div>

            <!-- fill_right -->
            <div class="fill_right">
                <div class="right_t">
                    <div class="right_bb">
                        <div class="right_title">Universal Studios Japan™ Ticket</div>
                    </div>

                    <div class="right_tnab">
                        <div class="right_Date">
                            <div class="right_f">Date</div>
                            <div class="right_c">11 Dec 2019</div>
                        </div>
                        <div class="right_Date">
                            <div class="right_f">Units</div>
                            <div class="right_both">
                                <div class="right_c">1 x Adult</div>
                                <div class="right_c">1 x Child(4-11)</div>
                            </div>
                        </div>
                        <div class="right_Date">
                            <div class="right_view">View Package Details</div>
                            <div>
                                <i class="el-icon-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right_b">
                    <div class="right_tnab">
                        <div class="right_Total">
                            <div class="Total_title">Total</div>
                            <div class="Total_price">¥ 822.0</div>
                        </div>

                        <div class="right_Total">
                            <div class="Total_title">Payment Amount</div>
                            <div class="Total_prices">¥ 822.0</div>
                        </div>
                    </div>

                    <div class="right_credits">
                        <div class="right_booking">Get 91 credits for this booking</div>
                        <div class="right_img">
                            <img src="../../assets/images/jifen.png" alt="/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ② Payment Type  -->
        <div class="Payment">
            <div class="Payment_color">
                <div class="Payment_title">② Payment Type</div>
            </div>
            <div class="Payment_na">
                <div class="Payment_nab">
                    <div class="Payment_nab_img">
                        <img src="../../assets/images/纸币_人民币_o.png" alt="/" />
                    </div>
                    <div class="Payment_Use">Use Promo Code</div>
                </div>
            </div>
        </div>

        <!-- paypal -->
        <div class="paypal">
            <div class="paypal_box">
                <div class="paypal_ti">
                    <div>
                        <img src="../../assets/images/图层2.png" alt="/" />
                    </div>
                    <div class="paypal_All">All card information is fully encrypted, secure, and protected.</div>
                </div>
                <div class="paypal_nab">
                    <div>
                        <el-radio v-model="radio" label="1">paypal</el-radio>
                    </div>
                    <div class="paypal_img">
                        <img src="../../assets/images/图层3.png" alt="/" />
                    </div>
                </div>
            </div>
        </div>

        <!-- PayNow -->
        <div class="PayNow">
            <div class="PayNow_nav">
                By clicking Pay Now, you agree that you have read and understood
                <span>our Terms & Conditions</span>
                and
                <span>Cancellation Policy</span>
            </div>
            <div class="PayNow_btn">
                <div class="PayNow_title">PayNow</div>
            </div>
        </div>

        <!-- Data Security -->
        <div class="Security">
            <!-- 1 -->
            <div class="Data">
                <div class="Date_nab">
                    <div>
                        <img src="../../assets/images/suo.png" alt="/" />
                    </div>
                    <div class="Data_title">Data Security</div>
                </div>
                <div class="Data_text">
                    Your details are safe with us. All data is encrypted and transmitted securely with an SSL
                    protocol.
                    <span>Privacy Statement</span>
                </div>
            </div>

            <!-- 2 -->
            <div class="Data">
                <div class="Date_nab">
                    <div>
                        <img src="../../assets/images/suo.png" alt="/" />
                    </div>
                    <div class="Data_title">Data Security</div>
                </div>
                <div class="Data_text">
                    How do I pay?
                    Can I pay by cash?
                    Do you have a physical office for me to buy from?
                    Is my payment secure?
                </div>
            </div>

            <!-- 3 -->
            <div class="Data">
                <div class="Date_nab">
                    <div>
                        <img src="../../assets/images/suo.png" alt="/" />
                    </div>
                    <div class="Data_title">Data Security</div>
                </div>
                <div class="Data_text">
                    800931187 (Hong Kong)
                    (+886) 2-55940490 (Taiwan)
                    (+65) 3158-3270 (Singapore)
                    0120925464 (Japan)
                    400-194-9240 (Mainland China)
                    (+63) 2626-3888 (Philippines)
                    (+60) 3-92128-188 (Malaysia)
                    001800-852-4043 (Thailand)
                    1855-254-4363 (USA)
                    1800-16-2535 (Australia)
                    0800-42-7313 (New Zealand)
                    1203-2611 (Vietnam)
                    0808-101-7040 (United Kingdom)
                    000800-852-2038 (India)
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fillIndex",
        data() {
            return {
                options: [
                    {
                        value: "选项1",
                        label: "黄金糕",
                    },
                    {
                        value: "选项2",
                        label: "双皮奶",
                    },
                    {
                        value: "选项3",
                        label: "蚵仔煎",
                    },
                    {
                        value: "选项4",
                        label: "龙须面",
                    },
                    {
                        value: "选项5",
                        label: "北京烤鸭",
                    },
                ],
                value: "",
                label: false,
            };
        },
    };
</script>

<style lang="scss" scope>
    /* 主体 */
    .main_nav {
        background-color: #fff;
    }

    .fill_box {
        display: flex;
        margin-top: 2.5rem;
        margin-left: 1.1875rem;
        margin-bottom: 1.25rem;
        box-sizing: border-box;
        padding-top: 1.25rem;
    }

    /* fill_left */
    .fill_left {
        width: 70%;
        border: 1px solid blue;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(235, 235, 235, 1);
        box-shadow: 0px 2px 7px 1px rgba(51, 51, 51, 0.1);
        margin-right: 20px;
    }

    .select_icont {
        color: red;
    }

    .fill_color {
        background: rgba(24, 114, 227, 1);
    }

    .fill_title {
        font-size: 22px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 2.7rem;
        margin-left: 1.25rem;
    }

    /* select_box */
    .select_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .select_title {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        line-height: 2.5rem;
    }

    .select_nab {
        display: flex;
    }

    .select_all {
        margin-top: 2rem;
        margin-left: 3rem;
    }

    .select_el {
        margin-right: 1.25rem;
    }

    .select_three {
        margin-right: 3.125rem;
    }

    .select_four {
        margin-bottom: 31px;
    }

    .select_five {
        margin-bottom: 46px;
    }

    .select_six {
        margin-bottom: 47px;
    }

    /* fill_right */
    .fill_right {
        width: 30%;
        margin-right: 1.375rem;
    }

    .right_t {
        border: 1px solid black;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(235, 235, 235, 1);
        box-shadow: 0px 2px 7px 1px rgba(51, 51, 51, 0.1);
        margin-bottom: 0.625rem;
    }

    .right_bb {
        border-bottom: 0.125rem solid #eee;
        margin-bottom: 1.5rem;
    }

    .right_title {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        line-height: 2.6875rem;
        margin-left: 1.125rem;
    }

    .right_tnab {
        width: 90%;
        margin-left: 1.125rem;
        /* margin-top: 1.5rem; */
    }

    .right_Date {
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        margin-bottom: 1.5625rem;
    }

    .right_f {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(136, 136, 136, 1);
    }

    .right_c {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
    }

    .right_view {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(24, 114, 227, 1);
    }

    .right_both {
        text-align: center;
    }

    .right_b {
        border: 1px solid #eee;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(235, 235, 235, 1);
        box-shadow: 0px 2px 7px 1px rgba(51, 51, 51, 0.1);
    }

    .right_Total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 2.5rem;
    }

    .Total_title {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(136, 136, 136, 1);
    }

    .Total_price {
        font-size: 18px;
        font-family: SF Pro Text;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
    }

    .Total_prices {
        font-size: 24px;
        font-family: SF Pro Text;
        font-weight: 500;
        color: rgba(255, 87, 34, 1);
    }

    .right_booking {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
    }

    .right_img img {
        width: 70%;
    }

    .right_credits {
        display: flex;
        align-items: center;
        justify-content: space-around;
        line-height: 50px;
        border-top: 0.125rem solid #@enter="";
    }

    /* ② Payment Type */
    .Payment {
        width: 66%;
        margin-left: 1.1875rem;
        margin-bottom: 1.25rem;
        background: rgba(255, 255, 255, 1);
        border: 1px solid #eee;
        box-shadow: 0px 2px 7px 1px rgba(51, 51, 51, 0.1);
    }

    .Payment_color {
        background: rgba(24, 114, 227, 1);
    }

    .Payment_title {
        font-size: 22px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 2.7rem;
        margin-left: 1.25rem;
    }

    .Payment_nab {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(24, 114, 227, 1);
        border-radius: 4px;
        line-height: 1.0625rem;
        /* text-align: center; */
        margin-left: 2rem;
        margin-top: 1rem;
    }

    .Payment_na {
        height: 3rem;
    }

    .Payment_Use {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(24, 114, 227, 1);
        margin-left: 0.5625rem;
    }

    /* paypal */
    .paypal {
        width: 66%;
        border: 1px solid red;
        margin-left: 1.1875rem;
        margin-bottom: 1.25rem;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(235, 235, 235, 1);
        box-shadow: 0px 2px 7px 1px rgba(51, 51, 51, 0.1);
        box-sizing: border-box;
        padding-top: 1.6875rem;
    }

    .paypal_box {
        width: 90%;
        border: 1px solid #FFCCCCCC;
        margin-left: 1.5625rem;
        margin-bottom: 2.8125rem;
    }

    .paypal_All {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-left: 0.625rem;
    }

    .paypal_ti {
        display: flex;
        background: rgba(245, 245, 245, 1);
        border: 1px solid rgba(238, 238, 238, 1);
        line-height: 1.875rem;
        padding-left: 2.1875rem;
    }

    .paypal_nab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 2.5rem;
        padding-right: 1.875rem;
        height: 4.375rem;
    }

    /* PayNow */
    .PayNow {
        width: 66%;
        border: 1px solid red;
        margin-left: 1.1875rem;
        margin-bottom: 1.25rem;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(235, 235, 235, 1);
        box-shadow: 0px 2px 7px 1px rgba(51, 51, 51, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1.875rem;
    }

    .PayNow_nav {
        width: 60%;
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-left: 0.9375rem;
    }

    .PayNow_btn {
        width: 20%;
        background: rgba(255, 87, 34, 1);
        border-radius: 6px;
        text-align: center;
        margin-right: 2.3125rem;
    }

    .PayNow_title {
        font-size: 24px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 2.25rem;
    }

    /* Data Security */
    .Security {
        width: 67%;
        height: 32.5rem;
        /* border: 1px solid blue; */
        margin-left: 1.1875rem;
        display: flex;
        /* align-items: center; */
        margin-bottom: 30px;
    }

    .Date_nab {
        display: flex;
        margin: 1.875rem;
    }

    .Data {
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(235, 235, 235, 1);
        box-shadow: 0px 2px 7px 1px rgba(51, 51, 51, 0.1);
        width: 100%;
        margin-right: 10px;
    }

    .Data_title {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-left: 0.5rem;
    }

    .Data_text {
        width: 69%;
        font-size: 12px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        line-height: 1.875rem;
        text-align: left;
        margin-left: 1.875rem;
    }
</style>