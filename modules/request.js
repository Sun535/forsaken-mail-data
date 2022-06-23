"use strict";

let axios = require("axios");

let request = axios.create({
  baseURL: process.env.mailUrl,
  timeout: 5000,
})

module.exports = {
  setMail: function (data) {
    if (!process.env.isMail) {
      return;
    }
    let _data = {
      subject: data.subject,
      text: data.text,
      date: data.date,
      from: data.from.text,
      texthtml: data.textAsHtml,
      html: data.html,
      to: data.envelopeTo[0].address.toLowerCase(),
    };
    request({
      method: "post",
      url: '',
      params: {type:'setMail'},
      headers: { "content-type": "application/json" },
      data: _data,
    }).then((res) => {
      //console.log(res.data);
    });
  },
  getMail: function (obj) {
    if (!process.env.isMail) {
      return;
    }
    return request({
      url: '',
      method: "get",
      params: {
        type: 'getMail',
        ...obj
      },
    })
    
  },
};
