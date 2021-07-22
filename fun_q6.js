function objj() {
  let cource= {
    courseName: "BIT",
    courseFee:"Rs 150 000",
    startDate:"12.06.2018",
    center:"Our Office"
  };
  document.getElementById("q6_name").innerHTML= "Cource Name: " + cource.courseName + " Cource" ;
  document.getElementById("q6_fee").innerHTML= "Fee: " + cource.courseFee ;
  document.getElementById("q6_date").innerHTML= "Start Date: " + cource.startDate ;
  document.getElementById("q6_center").innerHTML= "Center: " + cource.center;

}
