<template>
  <div class="container">
    <loading
      :active.sync="loadingStatus"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    >
    </loading>
    <div class="row g-2">
      <div class="col-md-4 col-sm-12 ">
        <div class="p-3 tiles">
          <div class="container">
            <div class="row">
              <label>Filter Results</label>
            </div>
            <div class="row">
              <label for="seatch-txt">Name (Contains)</label>
              <div class="input-group mb-3">
                <input v-model="search" type="text" class="form-control" id="seatch-txt" aria-describedby="basic-addon3">
              </div>
            </div>
            <div class="row">
              <label for="score">Minimum Score</label>
              <div class="input-group mb-3">
                <input v-model="searchRate" type="number" min="1" max="10" class="form-control" id="score" aria-describedby="basic-addon3">
              </div>
            </div>
            <div class="row">
              <label for="order_by">Order By</label>
              <div class="input-group mb-3">
                <select v-model="sort" class="form-control" name="order_by" id="order_by">
                  <option value="first_release_date">Release Date</option>
                  <option value="rating">Score</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
            <div class="row">
              <button type="button" @click="clearFilters()" class="btn btn-sm btn-primary">Clear</button>
            </div>
          </div>

        </div>
      </div>
      <div class="col-md-8 col-sm-12 " >
        <div class="p-3 tiles game" v-for="item in gamesData(this.$store.state.games)">
          <div class="row container m-0 p-0">
            <div class="col-lg-2 col-md-2 col-xs-12 order-lg-1 order-md-1 order-sm-3 bg-black">
                <div class="col-12"> </div>
            </div>
            <div class="col-lg-8 col-md-8 col-xs-12 order-lg-2 order-md-2 order-sm-1">   
              <div class="col-12 mt-4">
                
                <div class="row h6">{{item.name}}</div>
                <div class="row"><span>Release Date: {{formatDate(item.first_release_date)}}</span></div>
                <div class="row" ><p>
                [summary]: {{item.summary}}</p></div>
              </div>        
              
            </div>
            <div class="col-lg-2 col-md-2 col-xs-12 order-lg-3 order-md-3 order-sm-0 h-200 d-flex justify-content-center align-items-center">
              <h4>
                <span class="badge badge-pill badge-primary">{{formatRating(item.rating)}}</span>
              </h4>
              
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: 'Games',  
  data: () => ({
    loadingStatus: true,
    search: null,
    searchRate: null,
    sort: 'name'
    //items: ["Hammer", "Circular Saw", "Torque Wrench"]
  }),
  mounted() {
    this.$store.dispatch('getGames')
  },
   methods:{
    formatRating: function (rating) {		
      let r = rating/10;
		  return parseInt(r);
    },
    formatDate: function (dateT) {
      var dateT = new Date(dateT);;
      return dateT.toLocaleDateString();
    },
    clearFilters: function() {
      this.search = null;
      this.searchRate = null
      this.sort = 'name';
    },
    gamesData: function(data) {

      let search_tmp = [];
      let rate_tmp = [];
      var tmp = [];
      var data_return = null;

      if (this.search || this.searchRate) {

        tmp= data.filter(function(item) {

          if (this.search) {
            var txt_search = this.search
            .toLowerCase()
            .split(" ")
            .every(v => item.name.toLowerCase().includes(v));

          }else {
            var txt_search = false;
          }
          
            var r = item.rating/10;
		        r = parseInt(r);
            
            if(r == this.searchRate) {
              console.log('this.searchRate',this.searchRate,r);
              var rate_search = true;
            } else {
              var rate_search = false;  
            }

          if (this.search && this.searchRate) {
            console.log('both search');
            console.log(rate_search,txt_search);
            if (rate_search && txt_search) {
              return true;
            }
            
          } else {

            if (rate_search || txt_search) {
              return true;
            }

          }

        },this);

        data_return = tmp;
      } else {
        data_return = data;
      }
      
      setTimeout(() => {
        this.loadingStatus = false;
      }, 3000);
      return data_return.sort((a, b) => {
          return a[this.sort] - b[this.sort];
      });

    }
  },
  components: {
    Loading
  }
}
</script>
<style>
</style>