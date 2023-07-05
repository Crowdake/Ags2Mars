const path = require("path");
const axios = require("axios");
const ctrl = {};

ctrl.index = async (req, res) => {
    res.sendFile(path.join(__dirname , "../index.html"));
};


ctrl.getData = async (req, res ) => {
    
     let getData = await axios.get("http://192.168.4.1/data").then(function (response) {
         console.log(response);
         return response.data;
       })
       .catch(function (error) {
         console.log(error);
       })


    let obj = {
        data: getData,
    }
    res.send(obj);
}



module.exports = ctrl;
