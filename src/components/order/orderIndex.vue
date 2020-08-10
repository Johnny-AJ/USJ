<template>
    <div class="main_nav globalWith">

        <!-- 上半部分 -->
        <div class="Order">

            <div class="order_box">
                <!-- 左 -->
                <div class="order_left">

                    <!-- Package Options -->
                    <div class="Information">
                        <div class="Information_title">Order Information</div>
                    </div>

                    <div class="left_box">
                        <div class="box_nav">
                            <div class="box_img">
                                <img src="../../assets/images/组47.png" alt="/">
                            </div>
                            <div>
                                <div class="Universal">Universal Studios Japan™ Ticket</div>
                                <div class="Undone">Undone</div>
                                <div class="Purchase">Purchase number: ¥ 400 x2</div>
                            </div>
                            <div class="Total">Total order amount: <span>¥ 800.00</span> RMB </div>
                        </div>
                    </div>

                    <table>
                        <tr>
                            <th>Contact Name:</th>
                            <td>Hexiaoxiao</td>
                        </tr>
                        <tr>
                            <th>Contact Number:</th>
                            <td>12315623452</td>
                        </tr>
                        <tr>
                            <th>Order Date:</th>
                            <td>2019-12-11</td>
                        </tr>
                        <tr>
                            <th>Order Number:</th>
                            <td>34578909876</td>
                        </tr>
                        <tr>
                            <th>Effective Date:</th>
                            <td>2019-12-11 that day</td>
                        </tr>
                        <tr>
                            <th>Product Type:</th>
                            <td>1 x Child(4-11) <div>1 x Adult</div>
                            </td>
                            <span></span>
                        </tr>
                    </table>
                </div>


                <!-- 右 -->
                <div class="order_right">
                    <div class="you">you can</div>
                    <div class="Again">
                        <div class="Book">Book Again</div>
                        <div class="Cancel">Cancel Order</div>
                    </div>
                    <div class="Service">
                        <div>Service Merchant:USJ</div>
                        <div>Consumer Hotline:020-12345678</div>
                    </div>
                </div>
            </div>

        </div>


        <!-- 下半部分 -->
        <div class="Order_bottom">



            <!-- 左 -->
            <div class="Order_bottom_left">

                <div class="How">
                    <div class="How_title">How To Use</div>
                </div>

                <div class="order_nav">
                    You can present either a printed or a mobile voucher for this activity You can enter the
                    attraction
                    directly with this voucher
                    The voucher is valid within 180 days from the date you selected upon booking
                </div>

            </div>
            <!-- 右 -->

            <div class="Order_bottom_right">

                <div class="How">
                    <div class="How_title">Withdrawal rules</div>
                </div>

                <div class="order_title">Confirmation:</div>
                <div class="order_nav">
                    You will receive a confirmation email and voucher instantly after booking
                    In the event that you do not receive an email from us, please check your Spam folder or notify
                    us
                    via email
                </div>
                <div class="order_title">Cancelation:</div>
                <div class="order_nav">No cancellations, refunds, or changes can be made</div>
            </div>


        </div>

    </div>
</template>
<script>
    export default {
        name: "orderIndex",
        data() {
            return {

            }
        },
    };
</script>

<style lang="scss" scope>
    /* 主体 */
    .main_nav {
        border: 1px solid red;
        background-color: #fff;
        width: 100%;
        height: 100%;
    }

    /* 下半部分 */
    .Order_bottom {
        width: 38rem;
        height: 23rem;
        border: 1px solid black;
        margin-left: 1.25rem;
        display: flex;
        margin-bottom: 2.5625rem;
    }


    /* 左 */
    .Order_bottom_left {
        width: 50%;
        border: 1px solid blue;
        margin-right: 20px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
        border-radius: 4px;
    }

    .order_nav {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(2, 0, 0, 1);
        line-height: 30px;
        width: 80%;
        margin-left: 40px;
    }

    /* 右 */
    .Order_bottom_right {
        width: 50%;
        border: 1px solid green;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
        border-radius: 4px;
    }

    .order_title {
        font-size: 18px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(2, 0, 0, 1);
        margin-left: 40px;
    }

    .How {
        width: 45%;
        border: 1px solid red;
        border-left: 8px solid rgba(25, 82, 159, 1);
        border-radius: 4px;
        margin: 1.25rem;
    }

    .How_title {
        font-size: 18px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(2, 0, 0, 1);
        margin-left: 10px;
    }

    /* 上半部分 */
    /* Order */
    .Order {
        width: 96%;
                /* background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(229, 229, 229, 0.7);
                box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
                border-radius: 4px;
                border: 1px solid red;
                box-sizing: border-box; */
        margin-top: 33px;
        margin-left: 19px;
        margin-bottom: 32px;
    }

    /* Package Options */
    .Information {
        width: 30%;
        border: 1px solid red;
        border-left: 8px solid rgba(25, 82, 159, 1);
        border-radius: 4px;
        /* margin-left: 10px; */
        /* margin-bottom: 30px; */
        margin: 13px 0 29px 14px;
    }

    .Information_title {
        font-size: 18px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(2, 0, 0, 1);
        margin-left: 10px;
    }

    .order_box {
        display: flex;
    }

    /* 左 */
    .order_left {
        width: 80%;
        border: 1px solid black;
        /* margin-left: 19px; */
        margin-right: 17px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
        border-radius: 4px;
    }

    .left_box {
        width: 98%;
        /* border: 1px solid red; */
        margin-left: 12px;
        margin-bottom: 30px;
    }

    .box_nav {
        display: flex;
        position: relative;
    }

    .box_img {
        margin-right: 15px;
    }

    .box_img img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    .Universal {
        font-size: 24px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(27, 27, 27, 1);
        margin-bottom: 1.500rem;
    }

    .Undone {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-bottom: 1.100rem;
    }

    .Purchase {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(27, 27, 27, 1);
    }

    .Total {
        font-size: 16px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(21, 47, 73, 1);
        position: absolute;
        bottom: 0;
        right: 1.625rem;
    }

    /* 表格 */
    table tr {
        width: 100%;
    }

    table tr th {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(27, 27, 27, 1);
        width: 37%;
        line-height: 40px;
    }

    table tr td {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(27, 27, 27, 1);
        width: 63%;
    }

    /* 右 */
    .order_right {
        width: 30%;
        height: 40%;
        border: 1px solid blue;
        /* margin-right: 22px; */
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
        border-radius: 4px;
    }

    .Service {
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(2, 0, 0, 1);
        line-height: 30px;
        border-top: 1px solid red;
        box-sizing: border-box;
        padding-left: 1rem;
    }

    .Again {
        /* text-align: center; */
        margin-left: 3.75rem;
    }

    .you {
        margin-top: 1.875rem;
        margin-left: 5.5rem;
    }

    .Book {
        width: 60%;
        background: rgba(24, 114, 227, 1);
        border-radius: 6px;
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        text-align: center;
        margin-top: 13px;
        margin-bottom: 10px;

    }

    .Cancel {
        width: 60%;
        background: rgba(229, 229, 229, 1);
        border-radius: 6px;
        font-size: 14px;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(140, 140, 140, 1);
        line-height: 30px;
        text-align: center;
        margin-bottom: 1.4625rem;
    }
</style>