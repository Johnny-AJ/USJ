<template>
  <div class="ticket globalWith">

    <!-- tickets -->
    <div class="tickeys_box">

      <div class="ticket_titler">Tickets</div>

      <div class="ticket_nav">

        <div class="ticket_nav_nab" v-for="item in ticketList" :key="item.id">
          <div class="ticket_img">
            <img :src="item.ticket_url" alt="">
          </div>
          <div class="ticket_left">
            <div class="title_nav">{{item.ticket_title}}</div>
            <div class="type">Type {{item.ticket_type}}</div>
            <div class="ticket_price">
              <div class="priceq">${{item.ticket_price}}</div>
              <div class="ordernow">
                <div class="order_title">Order now</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- quick notes -->
    <div class="tickeys_box">

      <div class="ticket_titler">Quick notes</div>

      <div class="ticket_nav">

        <div class="ticket_nav_nab" v-for="item in quickList" :key="item.id">
          <div class="ticket_img">
            <img :src="item.ticket_url" alt="">
          </div>
          <div class="ticket_left">
            <div class="title_nav">{{item.ticket_title}}</div>
            <div class="type">Type {{item.ticket_type}}</div>
            <div class="ticket_price">
              <div class="priceq">${{item.ticket_price}}</div>
              <div class="ordernow">
                <div class="order_title">Order now</div>
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
  name: "ticket",
  data() {
    return {
      ticketList: [],
      quickList: [],
    }
  },
  mounted() {
    ;(this.ticketList = [
      {
        id: "0",
        ticket_url: require("../../assets/images/组9.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "788",
        ticket_type: "Adult",
      },
      {
        id: "1",
        ticket_url: require("../../assets/images/组16.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "900",
        ticket_type: "Children",
      },
      {
        id: "3",
        ticket_url: require("../../assets/images/组12.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "699",
        ticket_type: "Adult",
      },
      {
        id: "4",
        ticket_url: require("../../assets/images/组8.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "345",
        ticket_type: "Children",
      },
      {
        id: "5",
        ticket_url: require("../../assets/images/组14.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "196.5",
        ticket_type: "Adult",
      },
      {
        id: "6",
        ticket_url: require("../../assets/images/组17.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "345",
        ticket_type: "Children",
      },
      {
        id: "7",
        ticket_url: require("../../assets/images/组10.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "988",
        ticket_type: "Adult",
      },
      {
        id: "8",
        ticket_url: require("../../assets/images/组13.png"),
        ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
        ticket_price: "1000",
        ticket_type: "Children",
      },
    ]),
      (this.quickList = [
        {
          id: "0",
          ticket_url: require("../../assets/images/组18.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "788",
          ticket_type: "Adult",
        },
        {
          id: "1",
          ticket_url: require("../../assets/images/组11.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "900",
          ticket_type: "Children",
        },
        {
          id: "3",
          ticket_url: require("../../assets/images/组8.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "699",
          ticket_type: "Adult",
        },
        {
          id: "4",
          ticket_url: require("../../assets/images/组10.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "345",
          ticket_type: "Children",
        },
        {
          id: "5",
          ticket_url: require("../../assets/images/组14.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "196.5",
          ticket_type: "Adult",
        },
        {
          id: "6",
          ticket_url: require("../../assets/images/组17.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "345",
          ticket_type: "Children",
        },
        {
          id: "7",
          ticket_url: require("../../assets/images/组10.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "988",
          ticket_type: "Adult",
        },
        {
          id: "8",
          ticket_url: require("../../assets/images/组13.png"),
          ticket_title: "The promise of Crystal Spelial Appreciaton Admission The promise of Crystal Spelial Appreciaton",
          ticket_price: "1000",
          ticket_type: "Children",
        },
      ])
  },
}
</script>

<style lang="scss" scoped>
.ticket {
  margin-top: 30px;
}

// tickeys_box
.tickeys_box {
  width: 1000px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 30px;
}

.ticket_titler {
  color: #0a216b;
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 20px;
  margin-left: 10px;
  padding-top: 20px;
}

.ticket_nav {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}

.type {
  color: #8d8d8d;
  font-size: 14px;
  line-height: 40px;
}

.ticket_price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.priceq {
  color: #fc5302;
  font-size: 25px;
}

.ordernow {
  width: 90px;
  background-color: #0e1f6f;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  margin-right: 5px;
}

.order_title {
  color: #fff;
  font-size: 14px;
}

.ticket_nav_nab {
  width: 235px;
  height: 285px;
  border: 1px solid #eee;
  margin-right: 10px;
  margin-bottom: 15px;
}

.title_nav {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
}

.ticket_left {
  margin-left: 5px;
}

.ticket_img img {
  width: 100%;
}
</style>
