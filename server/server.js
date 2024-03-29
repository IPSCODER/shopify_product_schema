const express = require("express");
const axios = require('axios');
const dotenv = require('dotenv')
const cors = require("cors");
const bodyParser = require("body-parser");
const Shopify = require('shopify-api-node')
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

const PORT = process.env.PORT || 9000;


var shopify = new Shopify({
    shopName : 'test-schema15',
    apiKey: 'a5f8e629be8f29e3d735aac35eb02700',
    password: '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',
});
const nshopifyDomain = 'test-schema15.myshopify.com';
const napiKey = 'a5f8e629be8f29e3d735aac35eb02700';
const npassword = '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';





// Update currency settings
// async function updateCurrencySettings(newCurrencyFormat) {
//     try {
//         const response = await axios.put(`https://${nshopifyDomain}/admin/api/2024-01/shop.json`, {
//             shop: {
//                 currency: newCurrencyFormat
//             }
//         }, {
//             auth: {
//                 username: napiKey,
//                 password: npassword
//             }
//         });

//         console.log('Currency Settings Updated:', response.data.shop.currency);
//     } catch (error) {
//         console.error('Error updating currency settings:', error.response.data);
//     }


// }

// updateCurrencySettings('INR');


app.delete("/:id", async (req,res)=>{
    let {id} = req.params;
    console.log(id);
    await shopify.product
    .delete(id)
    .then(product=> res.send(product))  
    .catch(err=> console.log(err))
})


app.post("/post",(req,res) =>{

    const {body} = req.body;

    shopify.product
    .create({
        title: body.title,
        body_html: body.description,
        vendor: "test-schema15",
        images: [
            {
                src: body.images
            }
        ],
        variants: [
            {  
                price: body.price,
                compare_at_price: body.priceCompare,
                inventory_quantity: body.qty,
            },
        ],
    })
    .then(product => res.send(product))
    .catch(err => console.log(err))

})


app.put("/put/:id",(req,resp) => {
    const {id} = req.params;
    const {data} = req.body;


    const updateData ={
        title: data.title,
        body_html: data.description,
        vendor: "test-schema15",
        images: [
            {
                src: data.images
            }
        ],
        variants: [
            {  
                price: data.price,
                compare_at_price: data.priceCompare,
                inventory_quantity: data.qty,
            },
        ],
    }
   


    shopify.product
    .update(id, updateData)
    .then((product) => resp.send(product))
    .catch((err) => console.log(err));

    resp.status(200);


})

app.get("/currency",(req,res) =>{

    async function fetchCurrencySettings() {
        try {
            const response = await axios.get(`https://${nshopifyDomain}/admin/api/2024-01/shop.json`, {
                auth: {
                    username: napiKey,
                    password: npassword
                }
            });
    
            // console.log('Current Currency Settings:', response.data.shop);
            res.send(response.data.shop)
        } catch (error) {
            console.error('Error fetching currency settings:', error.response.data);
        }
    }
    fetchCurrencySettings()

})

app.get("/get/:id", async(req,res)=>{
    const {id} = req.params;
    // await shopify.product.get(id).then((product) => res.send(product))
    //   .catch((err) => console.log(err))
     await shopify.product.get(id).then((product) => res.send(product))
      .catch((err) => console.log(err))
})

app.get('/', async(req,res)=>{
    await shopify.product
   .list({ limit: 11 })
   .then((products) => res.send(products))
   .catch((err) => console.log(err,"error"));
})


app.listen(PORT,()=>{
    console.log("server is Running");
})


