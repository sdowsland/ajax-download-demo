var app = new Vue({
  el: '#app',
  data: {
    appName: 'Ajax Download Example',
    testLinks: [
      { value: "https://s3.eu-west-2.amazonaws.com/static.vetsens.co.uk/vetsens_logo.jpg"},
      { value: "https://s3-eu-west-1.amazonaws.com/cloudviz-resources/4K-test.png"},
      { value: "https://s3-eu-west-1.amazonaws.com/cloudviz-resources/hd-test.png"},
      { value: "https://s3-eu-west-1.amazonaws.com/cloudviz-resources/cycles.png"},
      { value: "https://s3-eu-west-1.amazonaws.com/cloudviz-resources/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg"}
    ]
  }
})