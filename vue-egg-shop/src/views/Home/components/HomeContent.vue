<template>
  <div>
    <div class="nav">
      <div class="sort">
        <span>排序:</span>
        <el-button @click="handleDefault">默认</el-button>
        <span>
          价格
          <i class="iconfont"></i>
        </span>
      </div>
    </div>
    <el-container>
      <el-aside width="300px" class="aside">
        <h4>价格区间:</h4>
        <p
          @click="handlePriceRange(item)"
          v-for="(item, index) of priceRanges"
          :key="index"
        >
          {{ item.min }}-{{ item.max }}
        </p>
      </el-aside>
      <el-container>
        <el-main class="main">
          <cart-item
            :item="item"
            v-for="item of lists"
            :key="item._id"
          ></cart-item>
        </el-main>
        <el-footer>
          <el-pagination
            @current-change="handlePaginationChange"
            class="page"
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
          ></el-pagination>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import GoodsHttp from "../../../models/GoodsHttp";
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      total: 10,
      lists: [],
      pageSize: 8,
      priceRanges: [
        { min: 0, max: 100 },
        { min: 100, max: 500 },
        { min: 500, max: 1000 },
        { min: 1000, max: 5000 },
      ],
    };
  },
  methods: {
    async handlePaginationChange(val) {
      var offset = (val - 1) * 8;
      this.initData(offset);
    },
    async initData(offset = 0) {
      var result = await GoodsHttp.getPagination(offset);
      var { res, total } = result.data;
      this.total = total;
      this.pageSize = 8;
      this.lists = res;
    },
    async handlePriceRange(item) {
      var result = await GoodsHttp.getPriceRange(item);
      var { res, total } = result.data;
      this.total = total;
      this.pageSize = total;
      this.lists = res;
    },
    async handleDefault(){
        this.initData();
    }
  },
  async mounted() {
    this.initData();
  },
};
</script>

<style scoped>
.page {
  margin: 0 auto;
}
.nav {
  background: #fff;
  height: 60px;
  position: relative;
}
.sort {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.aside {
  text-align: center;
}
.aside p {
  line-height: 40px;
}
.aside h4 {
  line-height: 60px;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>