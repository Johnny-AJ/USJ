<template>
    <div class="mains">

        <!-- 面包屑 -->
        <div class="mains_breadcrumb globalWith">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>Home</el-breadcrumb-item>
                <el-breadcrumb-item>JAPAN</el-breadcrumb-item>
                <el-breadcrumb-item>Osake</el-breadcrumb-item>
                <el-breadcrumb-item>Special</el-breadcrumb-item>
                <el-breadcrumb-item>Theme Parks</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 主体内容 -->
        <div class="main_nav globalWith">
            <div class="main_img">
                <img src="../../assets/images/pic.png" alt />
            </div>

            <div class="main_Ticket">
                <!-- 左 -->
                <div class="main_left">
                    <div class="main_title">Universal Studios Japan™ Ticket</div>

                    <div class="main_star">
                        <i class="el-icon-star-off"></i>
                        <div class="main_score">
                            <div class="main_god">4.7</div>
                            <div class="main_blue">(16.254 reviews)</div>
                            <div class="main_booked">2M+ Booked</div>
                        </div>
                    </div>

                    <div class="main_Tidak">
                        <div class="main_Tidak_box">
                            <img src="@/assets/images/dayin.png" alt="/" />
                            <div class="main_end">Tidak Bisa Refund</div>
                        </div>
                        <div class="main_Tidak_box">
                            <img src="@/assets/images/dayin.png" alt="/" />
                            <div class="main_end">Show Mobile or Printed Voucher</div>
                        </div>
                        <div class="main_Tidak_box">
                            <img src="@/assets/images/dayin.png" alt="/" />
                            <div class="main_end">Open Date Ticket/ Fixed Date Ticket</div>
                        </div>
                        <div class="main_Tidak_box">
                            <img src="@/assets/images/dayin.png" alt="/" />
                            <div class="main_end">Collect Physical Ticket/Enter Directly With Voucher</div>
                        </div>
                    </div>

                    <div class="main_Enjoy">
                        <dl>
                            <dd>● Enjoy direct entry to Universal Studios Japan™’s 60+ attrac</dd>
                            <dd>
                                ● Experience the thrill of the world’s # 1 ride for 5 consecutive years: The Wizarding
                                World of Harry Potter
                            </dd>
                            <dd>
                                ●
                                Make sure to catch shows, such as the Universal Spectacle Night Parade, where 100+
                                characters and floats take
                            </dd>
                            <dd>
                                ●
                                Add an Express Pass 3, 4, or 7 to your USJ ticket and skip the lines to your favorite
                                rides
                            </dd>
                        </dl>
                    </div>
                </div>

                <!-- 右 -->
                <div class="main_rights">
                    <!-- 价格部分 -->
                    <div class="main_right">
                        <div class="colors"></div>
                        <div class="right_price">¥ 488</div>
                        <div class="right_Today">
                            <img src="@/assets/images/图层11.png" alt="/" />
                            <div class="right_Instant">Instant Confirmation</div>
                        </div>
                        <div class="right_Today">
                            <img src="@/assets/images/riqi.png" alt="/" />
                            <div class="right_Instant">Available Today</div>
                        </div>
                        <div class="right_btn">
                            <img src="@/assets/images/图层11拷贝.png" alt="/" />
                            <div class="right_Options">Select Options</div>
                        </div>
                        <div class="right_Get">
                            <div class="right_let">Get free credits when you complete an experience</div>
                            <div class="right_right">〉</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Package Options -->
            <div class="Package">
                <div class="Options">Package Options</div>
            </div>

            <div class="selects">
                <!-- 左 -->
                <div class="selects_left">
                    <div class="selects_left_title">Select date and package options</div>
                    <div class="selects_left_titles">
                        Please select a visit date. The date you select is for reference only
                    </div>
                    <!-- select选择器 -->
                    <el-select v-model="value" placeholder="Check Availability">
                        <el-option v-for="item in options"
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="Days">Duration (Days)</div>
                    <el-tooltip class="item" effect="light"
                        content="Complete the selection below to view full package details" placement="top-start">
                        <el-button>1 Day</el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="light"
                        content="Complete the selection below to view full package details" placement="top-start">
                        <el-button>2 Day</el-button>
                    </el-tooltip>
                    <div class="Days">Schedule</div>
                    <div class="plain_box">
                        <div>
                            <el-button plain style="width: 20.625rem;">Ticket - A Low Season (JPY7,600-7,800)
                            </el-button>
                            <el-button plain>Ticket - C Regular-High Season (JPY6,900)
                            </el-button>
                        </div>
                        <div>
                            <el-button plain style="width: 20.625rem;">Ticket - C Regular-High Season (JPY8,900)
                            </el-button>
                            <el-button plain>Ticket - C Regular-High Season (JPY7,900)
                            </el-button>
                        </div>
                    </div>
                    <div class="Days">Date</div>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="quantity">
                        <div>Quantity</div>
                        <div>You must select no more than 40 for this package</div>
                    </div>
                    <div class="Adult">
                        <div class="Adult_titel">Adult</div>
                        <div class="Adult_box">
                            <div class="Adult_price">$286</div>
                            <div class="Adult_prices">$175</div>
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                        </div>
                    </div>
                    <div class="Adult">
                        <div class="Adult_titel">Adult</div>
                        <div class="Adult_box">
                            <div class="Adult_price">$286</div>
                            <div class="Adult_prices">$175</div>
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step_title">Complete all required fields to proceed to the next step</div>
                        <div class="addtocart">
                            <div class="add">ADDTOCART</div>
                            <div class="book">BOOKNOW</div>
                        </div>
                    </div>
                </div>
                <!-- 右 -->
                <div class="selects_right">
                    <div class="riselects_rightgh_title">Selected Package Details</div>

                    <div class="selects_nav">
                        <img src="../../assets/images/图层11.png" alt="/" />
                        <div class="nav_instant">Instant Confirmation</div>
                    </div>
                    <div class="selects_nav">
                        <img src="../../assets/images/shouhou.png" alt="/" />
                        <div class="nav_instant">No Cancellation</div>
                    </div>
                    <div class="selects_nav">
                        <img src="../../assets/images/dayin.png" alt="/" />
                        <div class="nav_instant">Show Mobile or Printed Voucher</div>
                    </div>
                    <div class="selects_nav">
                        <img src="../../assets/images/riqi1.png" alt="/" />
                        <div class="nav_instant">Open Date Ticket</div>
                    </div>
                    <div class="selects_nav">
                        <img src="../../assets/images/riqi拷贝.png" alt="/" />
                        <div class="nav_instant">Enter Directly With Voucher</div>
                    </div>

                    <div class="package_right">
                        <!-- Package_nav -->
                        <div class="Package_nav">
                            <div class="Description">Package Description</div>
                        </div>
                        <!-- nav -->
                        <div class="select_textarea">
                            <div>●</div>
                            <div class="textarea_nav">
                                For schedule and pricing information, please check the dates in green on the official
                                website’s calendar. Vouchers will be valid for 6 months from the chosen participation
                                date
                                with the same price tier
                            </div>
                        </div>
                    </div>

                    <div class="package_right">
                        <!-- Package_nav -->
                        <div class="Package_nav">
                            <div class="Description">Terms & Conditions</div>
                        </div>
                        <!-- nav -->
                        <div class="select_textarea">
                            <div>●</div>
                            <div class="textarea_nav">
                                In the event that you do not receive an email from us, please check your Spam folder or
                                notify us via email
                            </div>
                        </div>
                        <div class="select_textarea">
                            <div>●</div>
                            <div class="textarea_nav">You can present either a printed or a mobile voucher for this
                                activity</div>
                        </div>
                    </div>

                    <div class="package_right">
                        <!-- Package_nav -->
                        <div class="Package_nav">
                            <div class="Description">How To Use</div>
                        </div>
                        <!-- nav -->
                        <div class="select_textarea">
                            <div>●</div>
                            <div class="textarea_nav">You can present either a printed or a mobile voucher for this
                                activity</div>
                        </div>
                        <div class="select_textarea">
                            <div>●</div>
                            <div class="textarea_nav">You can enter the attraction directly with this voucher</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Package Related">
                <div class="Options">Related Activities</div>
            </div>

            <!-- 轮播图 -->
            <div class="swiper">123</div>

            <div class="Package Related">
                <div class="Options">Most Recent Review</div>
            </div>

            <!-- sunnay -->
            <div class="sunnay">
                <div class="sunnay_box">
                    <div class="sunnay_nav">
                        <!-- 头像 -->
                        <div class="Avatar">
                            <img src="../../assets/images/组39.png" alt />
                        </div>
                        <div>
                            <div class="sunnay_title_nav">
                                <div class="sunnay_title">sunnay</div>
                                <el-rate v-model="value1"></el-rate>
                            </div>
                            <div class="Review">Review for: 1 Day · Ticket - B Regular Season (JPY8,400)</div>
                            <div class="no">no hassle to line up at the queue on the venue itself</div>
                            <div class="Read">Read all 74,306 reviews</div>
                        </div>
                        <div class="Nov">28 Nov 2019</div>
                    </div>
                </div>
            </div>

            <div class="Package Related">
                <div class="Options">What To Expect</div>
            </div>

            <div class="welcome">
                Welcome to the incredible world of Universal Studios Japan in Osaka! With a Universal Studios Japan
                ticket from Klook, you can recreate dramatic scenes from your favorite blockbusters – at one of only two
                locations in Asia! Encounter a new dimension of excitement with attractions from Harry Potter, Minions,
                Spider Man, Jurassic Park, Jaws, and more! Experience the magic firsthand at the towering Hogwarts
                castle and Hogsmeade village before riding wizard-themed rides and attractions in The Wizarding World of
                Harry Potter. This adventure park is sure to indulge the thrill-seeker and movie buff's every fantasy!
            </div>

            <div class="figure_box">
                <!-- 游玩图 -->
                <div class="figure">
                    <img src="../../assets/images/组40.png" alt />
                </div>

                <!-- 内容 -->
                <div class="Osaka">▲ Don't miss out on all the featured activities at Universal Studios Japan in Osaka!
                </div>
            </div>

            <div class="figure_box">
                <!-- 游玩图 -->
                <div class="figure">
                    <img src="../../assets/images/组41.png" alt />
                </div>

                <!-- 内容 -->
                <div class="Osaka">▲ Don't miss out on all the featured activities at Universal Studios Japan in Osaka!
                </div>
            </div>

            <!-- booking -->
            <div class="booking_box">
                <div class="Package Options_booking">
                    <div class="Options">Booking Information</div>
                </div>

                <div class="booking_left">
                    <div class="booking_title">Confirmation:</div>
                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>You will receive a confirmation email and voucher instantly after booking</div>
                    </div>
                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            In the event that you do not receive an email from us, please check your Spam folder or
                            notify us via email
                        </div>
                    </div>
                </div>

                <div class="Additional_color">
                    <div class="booking_title">Additional Information:</div>
                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>Child ticket: Age 4-11</div>
                    </div>
                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>Re-entry is not allowed once you leave the park</div>
                    </div>

                    <div class="booking_title">Insider Tips:</div>
                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            At peak times, you are not guaranteed entry at the Wizarding World of Harry Potter when
                            timed entry is in place,
                            unless you purchase the
                            <span>Express Pass 4</span>or any
                            <span>Express Pass 7</span>
                        </div>
                    </div>

                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            Book a
                            <span>Countdown Party Entry Pass</span> on 31 Dec to celebrate 2020 New Year! Party
                            it up from
                            7:00pm on 31 Dec to 2:00am on 1 Jan, exclusive to Party Pass Ticket holders
                        </div>
                    </div>

                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            At peak times, you are not guaranteed entry at the Wizarding World of Harry Potter when
                            timed entry is in place, unless you purchase the Central Park
                        </div>
                    </div>

                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            The
                            <span>15-minute Early</span>Entry gives you entry to USJ 15 minutes before it opens so
                            you can be first in line!
                        </div>
                    </div>

                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            Grab food at Universal Citywalk Osaka before entering the park to fill your stomach and
                            save
                            money
                        </div>
                    </div>

                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            Get the most out of your day with insider tips from Klook’s
                            <span>USJ guide</span>
                        </div>
                    </div>

                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>
                            Check the
                            <span>studio map</span> to plan your visit
                        </div>
                    </div>

                    <div class="booking_nav">
                        <div class="dian">●</div>
                        <div>For more details on USJ shows and attractions, check the official website</div>
                    </div>
                </div>
            </div>

            <!-- How To Use -->

            <div class="how_box">
                <div class="Package how_use">
                    <div class="Options">How To Use</div>
                </div>

                <div>
                    <div class="present">
                        <div class="dian">●</div>
                        <div>You can present either a printed or a mobile voucher for this activity</div>
                    </div>

                    <div class="present">
                        <div class="dian">●</div>
                        <div>You can enter the attraction directly with this voucher</div>
                    </div>

                    <div class="present">
                        <div class="dian">●</div>
                        <div>The voucher is valid within 180 days from the date you selected upon booking</div>
                    </div>

                    <div class="present">
                        <div class="dian">●</div>
                        <div>You can enter the attraction directly with this voucher</div>
                    </div>

                    <div class="present">
                        <div class="dian">●</div>
                        <div>The voucher is transferable regardless of whose name it is booked under</div>
                    </div>
                </div>

                <div class="Admission">Admission Guidelines:</div>

                <div class="how_nav_box">
                    <div class="how_title">1 Day Ticket</div>
                    <div>
                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                You may only visit the park on days with the same price tier as your voucher (Ticket A
                                cannot be used for entry on
                                Tickets B, C or D dates, etc.) Check the Price Calendar above for reference
                            </div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                Tickets cannot be exchanged on site. You will need to repurchase if you need a
                                different ticket type
                            </div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>You cannot enter the attraction before the date you selected when booking</div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                The voucher is transferable. Anyone can use it regardless of whose name it is booked
                                under
                            </div>
                        </div>
                    </div>
                </div>

                <div class="how_nav_box">
                    <div class="how_title">2-Day Ticket</div>
                    <div>
                        <div class="present">
                            <div class="dian">●</div>
                            <div>The ticket is valid for 2 consecutive days of use</div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                Please note:
                                Keep your ticket after the first day, or you will not be able to use it for the second
                                day. It will not be
                                reissued if lost
                            </div>
                        </div>
                    </div>
                </div>

                <div class="how_nav_box">
                    <div class="how_title">Opening Hours:</div>
                    <div>
                        <div class="present">
                            <div class="dian">●</div>
                            <div>9:30am–7:00pm</div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>Please note that park opening hours vary</div>
                        </div>
                    </div>
                </div>

                <div class="how_nav_box">
                    <div class="how_title">How To Get There:</div>
                    <div>
                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                From hotel:
                                Check with your hotel for shuttle services to USJ
                            </div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                By bus:
                                35-75 minutes from Kansai Airport and 45 minutes from Itami Airport
                            </div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                By train:
                                From Namba, take Hanshin Namba Line to Nishikujo (4th stop) then transfer to JR Yumesaki
                                Line and get off
                                at Universal City Station
                            </div>
                        </div>

                        <div class="present">
                            <div class="dian">●</div>
                            <div>
                                By ferry:
                                Captain Line transfers people to and from Universal Studios Japan and Osaka Aquarium
                            </div>
                        </div>
                        
                    </div>
                </div>

                <!-- 地图 -->
                <div class="how_map">
                    <img src="../../assets/images/图层14.png" alt />
                </div>

            </div>

            <!-- Common problem -->
            <div class="common_big_box">
                <div class="Common_box">
                    <div class="Package">
                        <div class="Options">Common problem</div>
                    </div>

                    <div class="Activity">Activity Q&A</div>

                    <div class="common_problem">
                        <div class="common_nav">
                            <div class="common_title">Q 1:</div>
                            <div class="common_text">
                                Do I have to enter the park on the date I selected when make the
                                booking?
                            </div>
                        </div>
                        <div class="common_nav">
                            <div class="common_title">A 1:</div>
                            <div class="common_text">
                                The passes are considered open tickets, you may enter the park on any day before the
                                expiration date
                                written on the pass
                            </div>
                        </div>
                    </div>

                    <div class="common_problem">
                        <div class="common_nav">
                            <div class="common_title">Q 2:</div>
                            <div class="common_text">Can I make any changes to my booking?</div>
                        </div>
                        <div class="common_nav">
                            <div class="common_title">A 2:</div>
                            <div class="common_text">
                                Unfortunately, all confirmations are final. You cannot cancel, refund, or make changes
                                to your booking
                                Please carefully plan your trip and provide the correct information during the purchase.
                            </div>
                        </div>
                    </div>

                    <div class="common_problem">
                        <div class="common_nav">
                            <div class="common_title">Q 3:</div>
                            <div class="common_text">What does open date ticket mean?</div>
                        </div>
                        <div class="common_nav">
                            <div class="common_title">A 3:</div>
                            <div class="common_text">
                                Open date ticket means you can use this pass on any day within the period of
                                validity.The date you
                                specified for booking is for reference only, so you may redeem the pass within 6 months
                                from your
                                specified date.
                            </div>
                        </div>
                    </div>

                    <div class="common_problem">
                        <div class="common_nav">
                            <div class="common_title">Q 4:</div>
                            <div class="common_text">How do I know if my booking has been confirmed?</div>
                        </div>
                        <div class="common_nav">
                            <div class="common_title">A 4:</div>
                            <div class="common_text">
                                Your booking is confirmed once you have received the confirmation email with the voucher
                                attached
                                within 5 minutes after booking. You can also find your voucher within your booking
                                details - On Web
                                access "My Bookings" within your profile, look for this order and you should see the
                                "View Voucher"
                                button. On App: access "My Bookings" via the Bookings tab, look for this order and you
                                should see the
                                View Voucher" button.
                            </div>
                        </div>
                    </div>

                    <div class="common_problem">
                        <div class="common_nav">
                            <div class="common_title">Q 5:</div>
                            <div class="common_text">Do children need a ticket to enter? What are the age limits for a
                                child ticket?</div>
                        </div>
                        <div class="common_nav">
                            <div class="common_title">A 5:</div>
                            <div class="common_text">
                                Yes, children from ages 4-11 require a child ticket to enter the park. Infants under the
                                age 4 can enter
                                the park for free.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeIndex",
        data() {
            return {
                options: [
                    {
                        value: "选项1",
                        label: "黄金糕，葫芦娃救爷爷",
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
                num: 1,
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
        },
    };
</script>

<style scoped>
    /* select选择器 */
    /deep/ .el-input--suffix .el-input__inner {
        background-color: #00549e;
        padding-right: 90px;
        color: #fff;
    }

    /deep/ .el-select {
        margin-top: 10px;
        margin-left: 10px;
    }

    /* 面包屑 */
    /deep/ .el-breadcrumb__inner {
        color: #fff;
    }

    /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
        color: #ffffff;
    }

    /* /deep/ .el-breadcrumb {
        margin-top: 2.3125rem;
        margin-bottom: 1rem;
        margin-left: .625rem;
    } */

    /* 按钮 */
    /deep/.el-button {
        margin-top: 5px;
        margin-left: 10px;
    }
</style>

<style lang="scss" scope>
    .mains {
        /* border: 2px solid blue; */
        /* width: 100%; */
    }

    .main_nav {
        /* border: 1px solid red; */
        background-color: #fff;
    }

    .main_img {
        text-align: center;
        /* margin-top: 0.625rem; */
        margin-bottom: 2.8125rem;
        padding-top: .625rem;
    }

    .main_img img {
        width: 98%;
        /* visibility: top; */
    }

    .main_title {
        font-size: 1.875rem;
        font-family: SF Pro Display;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
    }

    .main_Ticket {
        display: flex;
        /* border: 1px solid red; */
        margin-left: 10px;
        margin-bottom: 3rem;
    }

    /* 左 */
    .main_left {
        width: 70%;
        /* border: 1px solid blueviolet; */
        margin-right: 1.25rem;
    }

    .main_star {
        display: flex;
        margin-top: 10px;
    }

    .main_score {
        display: flex;
    }

    .main_god {
        color: gold;
        margin-right: 5px;
        margin-left: 5px;
    }

    .main_blue {
        color: #4095ea;
        margin-right: 5px;
    }

    .main_booked {
        color: #ff97989a;
    }

    .main_Tidak {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        border-top: 2px solid #FF97989A;
        margin: 20px 0;
    }

    .main_Tidak_box {
        display: flex;
        /* align-items: center; */
        margin-top: 20px;
    }

    .main_end {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-left: .625rem;
    }

    .main_Enjoy {
        border-top: 2px solid #FF97989A;
        border-bottom: 2px solid #FF97989A;
    }

    .main_Enjoy dd {
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 13px;
        font-size: .125rem;
    }

    /* 右 */
    .main_rights {
        width: 27%;
        /* border: 1px solid gold; */
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
    }

    .right_price {
        font-size: 1.875rem;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 30px;
        margin-top: 42px;
        margin-left: 38px;
    }

    .right_Today {
        display: flex;
        margin-top: 15px;
        margin-left: 38px;
    }

    .right_btn {
        width: 70%;
        display: flex;
        background: rgba(255, 87, 34, 1);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0 30px 30px;
    }

    .right_Options {
        font-size: 1.5rem;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-left: 10px;
        line-height: 2.5rem;
    }

    .right_Get {
        display: flex;
        border-top: 2px solid #ffaaaaaa;
        display: flex;
        align-items: center;
        margin-left: 8px;
    }

    .right_Instant {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-left: .625rem;
    }

    .right_let {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(137, 137, 137, 1);
        margin-top: 20px;
    }

    .right_right {
        margin-top: 20px;
    }

    .colors {
        background: rgba(25, 82, 159, 1);
    }

    /* Package */
    .Package {
        width: 35%;
        /* border: 1px solid red; */
        border-left: 8px solid rgba(25, 82, 159, 1);
        border-radius: 4px;
        margin-left: 10px;
        margin-bottom: 30px;
    }

    .Options {
        font-size: 1.5rem;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-left: 10px;
    }

    /* Selects */
    .selects {
        width: 98%;
        /* border: 1px solid red; */
        margin-left: 10px;
        display: flex;
        background-color: #fff;
    }

    /* 左 */
    .selects_left {
        width: 77%;
        border: 1px solid skyblue;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
        margin-right: 10px;
        /* margin-left: 30px; */
    }

    .selects_left_title {
        font-size: 1.5rem;
        font-family: SF Pro Display;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-top: 20px;
        margin-left: 10px;
    }

    .selects_left_titles {
        font-size: .875rem;
        font-family: SF Pro Display;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-top: 20px;
        margin-left: 10px;
    }

    .Days {
        font-size: 1rem;
        font-family: SF Pro Display;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-top: 10px;
        margin-left: 10px;
    }

    .plain_box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    /* 票价 */
    .Adult {
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        height: 3.75rem;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
        border-radius: 6px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-top: 10px;
    }

    .Adult_titel {
        font-size: 1rem;
        font-family: SF Pro Display;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-left: 10px;
    }

    .Adult_box {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid red; */
        width: 40%;
        margin-right: 10px;
    }

    .Adult_price {
        font-size: .875rem;
        font-family: SF Pro Display;
        font-weight: 400;
        text-decoration: line-through;
        color: rgba(51, 51, 51, 1);
        margin-right: 10px;
    }

    .Adult_prices {
        font-size: 1rem;
        font-family: SF Pro Display;
        font-weight: 800;
        color: #ff5305;
        margin-right: 20px;
    }

    /* 两个按钮 */
    .step {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .step_title {
        font-size: .75rem;
        font-family: SF Pro Display;
        font-weight: 100;
        color: rgba(51, 51, 51, 1);
    }

    .addtocart {
        display: flex;
        color: #fff;
    }

    .add {
        background-color: #ffa014;
        width: 7rem;
        height: 1.9rem;
        border-radius: 6px;
        text-align: center;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        margin-right: 20px;
    }

    .book {
        background-color: #ff4800;
        border-radius: 6px;
        width: 7rem;
        height: 1.9rem;
        border-radius: 6px;
        text-align: center;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
    }

    .quantity {
        font-size: 1rem;
        font-family: SF Pro Display;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-top: 10px;
        margin-left: 10px;
    }

    /* 右 */
    .selects_right {
        width: 30%;
        border: 1px solid gold;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(229, 229, 229, 0.7);
        box-shadow: 0px 2px 9px 2px rgba(51, 51, 51, 0.1);
    }

    .riselects_rightgh_title {
        /* text-align: center; */
        margin-left: 15px;
        margin-top: 30px;
    }

    .selects_nav {
        display: flex;
        margin-left: 15px;
        margin-top: 15px;
    }

    .selects_nav img {
        width: 5%;
        height: 5%;
    }

    .nav_instant {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-left: 20px;
    }

    /* Package_nav */
    .Package_nav {
        /* border: 1px solid red; */
        border-left: 8px solid rgba(25, 82, 159, 1);
        border-radius: 4px;
        margin-bottom: 5px;
    }

    .Description {
        font-size: 1.125rem;
        font-family: SF Pro Display;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 30px;
    }

    /* nav */
    .select_textarea {
        width: 100%;
        /* height: 100%; */
        display: flex;
    }

    .textarea_nav {
        /* width: 100%; */
        /* height: 50%; */
        font-size: 12px;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        line-height: 22px;
        margin-left: 5px;
    }

    .package_right {
        margin-left: 15px;
        margin-top: 10px;
    }

    .Related {
        margin-top: 50px;
        margin-bottom: 30px;
        margin-left: 20px;
    }

    /* 轮播图 */
    .swiper {
        width: 67%;
        border: 1px solid red;
        margin-left: 10px;
    }

    /* sunnay */
    .sunnay {
        /* width: 100%; */
        /* border: 1px solid blue; */
    }

    .sunnay_box {
        /* display: flex; */
        width: 67%;
        border-bottom: .125rem solid #FFAAAAAA;
        margin-left: 10px;
    }

    .sunnay_nav {
        display: flex;
        position: relative;
    }

    .sunnay_title_nav {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .sunnay_title {
        font-size: 1.5rem;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-right: 10px;
    }

    .Avatar {
        /* width: 10%; */
        /* border: 1px solid ghostwhite; */
        display: inline-block;
        margin-right: 20px;
    }

    .Review {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(153, 153, 153, 1);
        margin-bottom: 10px;
    }

    .no {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 10px;
    }

    .Read {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 500;
        color: rgba(25, 82, 159, 1);
        margin-bottom: 40px;
    }

    .Nov {
        font-size: .875rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(153, 153, 153, 1);
        position: absolute;
        top: 0;
        right: 0;
    }

    /* welcome */
    .welcome {
        width: 67%;
        /* border: 1px solid red; */
        font-size: .875rem;
        /* font-size: 14px; */
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 1.875rem;
        /* line-height: 30px; */
        margin-left: 1.25rem;
        /* margin-left: 20px; */
        margin-bottom: 1.875rem;
        /* margin-bottom: 30px; */
    }

    /* 游玩图 */
    .figure {
        margin-right: 10px;
    }

    .figure img {
        width: 70%;
        /* height: ; */
    }

    .figure_box {
        margin-bottom: 2.5rem;
        /* margin-bottom: 40px; */
        margin-left: 1.25rem;
        /* margin-left: 20px; */
    }

    /* 内容 */
    .Osaka {
        font-size: .875rem;
        /* font-size: 14px; */
        font-family: FontAwesome;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-left: .625rem;
        margin-top: .625rem;
    }

    /* booking */
    .booking_box {
        width: 67%;
        border-top: .125rem solid #FFAAAAAA;
        border-bottom: .125rem solid #FFAAAAAA;
        margin-left: 1.25rem;
        margin-bottom: 3.125rem;
    }

    .booking_nav {
        display: flex;
        font-size: .75rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        line-height: 36px;
    }

    .Additional_color {
        /* background: rgba(255, 250, 229, 1); */
        background: #fffbe6;
        margin-bottom: 2.5rem;
        box-sizing: border-box;
        padding-top: .625rem;
        margin-left: .625rem;
        padding-left: 1.25rem;
    }

    .booking_title {
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 1.125rem;
        font-family: SF Pro Text;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
    }

    .Options_booking {
        margin-top: 40px;
    }

    .booking_left {
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .dian {
        margin-right: 10px;
    }

    /* how to use */
    .how_box {
        width: 67%;
        /* border-top: 1px solid red; */
        border-bottom: .125rem solid #FFAAAAAA;
        margin-left: 20px;
    }

    .present {
        display: flex;
        font-size: .75rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        line-height: 25px;
    }

    .how_title {
        font-size: 1.125rem;
        font-family: SF Pro Text;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 10px;
    }

    .how_nav_box {
        margin-bottom: 23px;
    }

    .Admission {
        font-size: 1rem;
        font-family: SF Pro Text;
        font-weight: 300;
        color: rgba(51, 51, 51, 1);
        margin: 30px 0 30px 0;
    }

    .how_use {
        margin-top: 40px;
    }

    /* 地图 */
    .how_map {
        margin-bottom: 30px;
    }

    .how_map img {
        width: 100%;
    }

    /* Common problem */
    .common_big_box {
        width: 67%;
        /* border-top: 1px solid black;  */
        /* border-bottom: 1px solid black; */
        margin-left: 20px;
    }

    .Common_box {
        box-sizing: border-box;
        padding-top: 50px;
    }

    .common_nav {
        display: flex;
        width: 100%;
        /* align-items: center; */
    }

    .common_title {
        width: 5%;
        font-size: 1rem;
        font-family: SFProDisplay-Medium;
        font-weight: 900;
        color: rgba(51, 51, 51, 1);
        display: flex;
        margin-right: 14px;
    }

    .common_text {
        width: 95%;
        font-size: .75rem;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
    }

    .common_problem {
        width: 100%;
        line-height: 30px;
        margin-bottom: 20px;
    }

    .Activity {
        font-size: 1.125rem;
        font-family: SF Pro Display;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 20px;
    }

    /* 个别字体颜色 */
    span {
        color: blue;
        font-family: SF Pro Text;
        font-weight: 500;
        font-size: .875rem;
    }
</style>