class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}`)
    .then(res => {
      return res.data;
    })
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/${id}`)
    .then(res => {
      return res.data;
    })  
  }

  createOneRegister (newChar) {
    return axios.post(`${this.BASE_URL}`, newChar)
    .then(res => {
     return res.data;
    }) 
  }

  updateOneRegister () {
    return axios.put(`${this.BASE_URL}/${id}`)
    .then(res => {
      return res.data;
    })   
  }

  deleteOneRegister (deleteChar) {
    return axios.delete(`${this.BASE_URL}/${deleteChar}`)
    // .then(res => {
    //   return res.data;
    // }) 
  }
}
