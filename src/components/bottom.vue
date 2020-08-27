<template>
  <div class="bottom">



    <!-- 底部 -->
    <div class="nav_Box globalWith">

      <!-- 内容 -->
      <div class="ItemBox">
        <dl>
          <dt>
            <a href="/">〉游乐设施</a>
          </dt>
          <dt>
            <a href="/">〉门票</a>
          </dt>
          <dt>
            <a href="/">〉旅行社</a>
          </dt>
        </dl>
      </div>

      <div class="ItemBox">
        <dl>
          <dt>
            <a href="/">〉服务指南</a>
          </dt>
          <dd>
            <a href="/">〉一般服务</a>
          </dd>
          <dd>
            <a href="/">〉家庭服务</a>
          </dd>
          <dd>
            <a href="/">〉便捷服务</a>
          </dd>
          <dd>
            <a href="/">〉其他服务</a>
          </dd>
        </dl>
      </div>

      <div class="ItemBox">
        <dl>
          <dt>
            <a href="/">〉餐厅</a>
          </dt>
          <dd>
            <a href="/">〉哈利波特的魔法世界™</a>
          </dd>
          <dd>
            <a href="/">〉小黄人乐园</a>
          </dd>
          <dd>
            <a href="/">〉环球奇境</a>
          </dd>
          <dd>
            <a href="/">〉纽约</a>
          </dd>
          <dd>
            <a href="/">〉旧金山</a>
          </dd>
          <dd>
            <a href="/">〉侏罗纪公园™</a>
          </dd>
          <dd>
            <a href="/">〉小镇亲善村</a>
          </dd>
        </dl>
      </div>

      <div class="ItemBox">
        <dl>
          <dt>
            <a href="/">〉商店</a>
          </dt>
          <dd>
            <a href="/">〉哈利波特的魔法世界™</a>
          </dd>
          <dd>
            <a href="/">〉小黄人乐园</a>
          </dd>
          <dd>
            <a href="/">〉环球奇境</a>
          </dd>
          <dd>
            <a href="/">〉好莱坞</a>
          </dd>
          <dd>
            <a href="/">〉纽约</a>
          </dd>
          <dd>
            <a href="/">〉旧金山</a>
          </dd>
          <dd>
            <a href="/">〉侏罗纪公园™</a>
          </dd>
          <dd>
            <a href="/">〉小镇亲善村</a>
          </dd>
        </dl>
      </div>

      <!-- 酒店 -->
      <div class="ItemBox_last">
        <dl>
          <dt>
            <a href="/">〉酒店</a>
          </dt>
          <dd>
            <a href="/">〉正式合作酒店</a>
          </dd>
          <dd>
            <a href="/">〉加盟酒店</a>
          </dd>
          <dd>
            <a href="/">〉同盟酒店</a>
          </dd>
          <dd>
            <div class="item_btn">
              <a href="/">〉营业时间、日程表</a>
            </div>
          </dd>
          <dd>
            <div class="item_btn">
              <a href="/">〉常见问题</a>
            </div>
          </dd>
        </dl>
      </div>

    </div>


    <!-- logo -->
    <div class="logo">
      <div class="logo_l">TWEENT</div>
    </div>


    <!-- color -->
    <div class="color"></div>


  </div>
</template>

<script>
  export default {
    name: "bottom",
    data() {
      return {
        // imgSrc: require('../assets/images/bg_main1.png')
      };
    },
  };
</script>

<style lang="scss" scope>
  .bottom {
    /* padding-bottom: 20px; */
    /* border: 1px solid red; */
    width: 100%;
    /* margin: 0 auto; */
    /* background-image: url("@/assets/images/bg_main1.png"); */
    background-image: url("../assets/images/bg_main.png");
    background-position: top center;
    background-repeat: no-repeat;
    position: relative;
    margin-top: 4.375rem;
  }

  /* // .ImgWith {
  //   width: 1000px;
  //   margin: 0 auto;
  // } */

  .nav_Box {
    /* width: 10%; */
    display: flex;
  }

  .ItemBox {
    width: 18.3%;
    min-height: 158px;
    /* border: 1px solid yellow; */
    border-right: 1px dotted #fff;
    margin-right: 10px;
    padding-right: 10px;
  }

  .ItemBox dt {
    width: 160px;
    height: 26px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.5;
    border-radius: 4px;
    margin: 0 0 8px;
    line-height: 26px;
    font-size: 14px;
  }

  .ItemBox dd {
    padding: 2px 5px 5px;
    margin: 0;
    font-size: 14px;
    color: #fff;
    font-size: 14px;
  }

  .ItemBox dd a {
    color: #fff;
    font-size: 14px;
  }

  /* 酒店 */
  .ItemBox_last dd {
    padding: 2px 5px 5px;
    font-size: 14px;
  }

  .ItemBox_last dd a {
    color: #fff;
    font-size: 14px;
  }

  .ItemBox_last {
    width: 20%;
    /* border: 1px solid yellow; */
  }

  .ItemBox_last dt {
    width: 160px;
    height: 26px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.5;
    border-radius: 4px;
    margin: 0 0 8px;
    line-height: 26px;
    font-size: 14px;
  }

  .item_btn {
    background: rgba(19, 47, 109, 1);
    border-radius: 4px;
    line-height: 34px;
    width: 160px;
  }

  .item_btn a {
    color: #fff;
    font-size: 14px;
  }

  /* logo */
  .logo {
    width: 84px;
    height: 84px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.6;
    border-radius: 50%;
    text-align: center;
    line-height: 84px;
    /* margin-left: 600px; */
    /* margin-top: 41px; */
    /* margin-bottom: 30px; */
    margin: 0 auto;
  }

  .logo_l1 {
    font-size: 18px;
    font-family: SF Pro Text;
    font-weight: 400;
    color: rgba(4, 92, 230, 1);
  }

  .color {
    width: 100%;
    height: 65px;
    background: rgba(19, 47, 109, 1);
    opacity: 0.3;
  }

  /* 底部消失 */
  /* @media screen and(max-width: 740px) and (min-width: 375px) { */
  @media screen and (max-width: 768px) {
    .nav_Box {
      display: none;
    }

    .bottom {
      width: 100%;
    }
  }
</style>