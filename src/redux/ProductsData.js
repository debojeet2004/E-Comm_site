import axios from 'axios';

async function fetchData() {
    const response = await axios.get("https://dummyjson.com/products?limit=100");
    const data = await response.data;
    return data
    
}

async function getData() {
    try{
        const data = await fetchData();
        return data; 
    } 
    catch (error){
        console.error('Error fetching data:', error);
        return null;
    }
}  
const Products_Data = await getData();
const Products =  Products_Data.products
export default Products;