
let productList=[]
document.getElementById('formId').addEventListener("submit",function(event)
{
    event.preventDefault();
    const productName=document.getElementById("name").value;
    const quantity=document.getElementById("quantity").value;
    const price=document.getElementById("price").value;
    let product={
        "name":productName,
        "price":price,
        "quantity":quantity
    }
    productList.push(product);
    console.log(productList);
    const productListExists=document.getElementById("productDisplayContainerId");
    console.log(productListExists);
    let contentHtml='';
    productList.forEach(product=>
{

    contentHtml+=`<div class="subcontainers">
                <img src="/Users/nareshkumarg/Desktop/Frontend project/Asserts/shirt.jpg",alt="shirt image"/>
                <h1>${product.name}</h1>
                <h2>Available : ${product.quantity}</h2>
                <h2>Price : $${product.price}</h2>
                <button class="shop-now-button" id="shoppingId" type="submit">Shop Now</button>
            </div>`
})
    productListExists.innerHTML=contentHtml;
})

let wishlist=[];

document.getElementById("shoppingId").addEventListener("click",function(event)
{
    console.log("fyfhgfg")
})

document.querySelector(".search-container input").addEventListener('input',function(event)
{
    const productListExists=document.getElementById("productDisplayContainerId");
    event.preventDefault();
    let contentHtml='';
    productList.filter(product=>
{
    const name=product.name+"";
    if(name.includes(event.target.value))
        {
    contentHtml+=`<div class="subcontainers">
                <img src="/Users/nareshkumarg/Desktop/Frontend project/Asserts/shirt.jpg",alt="shirt image"/>
                <h1>${product.name}</h1>
                <h2>Available : ${product.quantity}</h2>
                <h2>Price : $${product.price}</h2>
                <button class="shop-now-button" id="shoppingId" type="submit">Shop Now</button>
            </div>`
        }
})
productListExists.innerHTML=contentHtml;
})


function filters(min=0,max=1000000,stockAvilability=false)
{
    const productListExists=document.getElementById("productDisplayContainerId");
    let contentHtml='';
    if(stockAvilability!==false)
        {
            console.log("frfr")
            productList.filter(product=>
            {
            if(product.quantity >0)
                {
                    contentHtml+=`<div class="subcontainers">
                    <img src="/Users/nareshkumarg/Desktop/Frontend project/Asserts/shirt.jpg",alt="shirt image"/>
                    <h1>${product.name}</h1>
                    <h2>Available : ${product.quantity}</h2>
                    <h2>Price : $${product.price}</h2>
                    <a href="#" class="shop-now-button">Shop Now</a>
                    </div>`
                }
            })
        }
        else
        {
            console.log(productList.length)
            productList.filter(product=>
                {
                    console.log(product.price+" "+min+" "+max)
                    if(product.price>=min)
                        {
                        console.log("inside if")
                    contentHtml+=`<div class="subcontainers">
                        <img src="/Users/nareshkumarg/Desktop/Frontend project/Asserts/shirt.jpg",alt="shirt image"/>
                        <h1>${product.name}</h1>
                        <h2>Available : ${product.quantity}</h2>
                        <h2>Price : $${product.price}</h2>
                        <a href="#" class="shop-now-button">Shop Now</a>
                        </div>`
                }
            }
            )
        }
    productListExists.innerHTML=contentHtml;
}

document.getElementById("filterFormId").addEventListener("submit",function(event)
{
    event.preventDefault();
    const min=document.getElementById("min-value").value;
    const max=document.getElementById("max-value").value
    const stockAvilability=document.getElementById("stock-availability")
    filters(min,max,stockAvilability.checked);
})
