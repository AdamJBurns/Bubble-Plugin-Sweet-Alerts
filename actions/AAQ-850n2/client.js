function(properties, context) {

const Toast = Swal.mixin({
  toast: true,
  position: properties.position,
  showConfirmButton: properties.confirmbutton,
  timer: properties.timer,
  timerProgressBar: properties.timerbar,
  confirmButtonColor: properties.confirmbuttoncolor,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: properties.icon,
  title: properties.message
})



}