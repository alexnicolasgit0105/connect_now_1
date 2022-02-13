<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-xs-12 ccard">
                <div class="row col-6 ">
                    <h5 class="card-title">GET IN TOUCH</h5>
                </div>
                <div class="container card tiles">
                    
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6 col-xs-12">
                                    <label for="exampleInputPassword1">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Name">
                                </div>
                                <div class="form-group col-md-6 col-xs-12">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="text" class="form-control" id="email" placeholder="email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-12">
                                    <label for="message">Messasge</label>
                                    <textarea rows="5" class="form-control rounded-0" id="message"></textarea>
                                </div>
                            </div>
                            <div class="float- right row">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            
                        </form>
                    

                    </div>
                    
                </div>

            </div>

        </div>

    </div>

</template>
<script>
   export default{

   }
</script>

<style>
.ccard{
    margin: 5% 25%;
}

@media (max-width: 420px) {
    .ccard {
        margin: 0px;
    }
}
</style>