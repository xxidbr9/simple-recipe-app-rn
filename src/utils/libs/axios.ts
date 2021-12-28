import axios from "axios";


const recipeAxios = axios.create({
  baseURL: "https://yummly2.p.rapidapi.com/",
  headers: {
    'x-rapidapi-host': 'yummly2.p.rapidapi.com',
    'x-rapidapi-key': '63842ca890msh2cff5fa18d6007ap1573acjsna7d1755523d7'
    // 'x-rapidapi-key': 'f9fcff390amsh83bd18d67badb96p1ea693jsn84e57a0ea311'
  }
})


export default recipeAxios