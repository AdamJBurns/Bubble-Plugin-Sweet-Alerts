function(properties, context) {
    
Swal.fire({
  title: properties.title,
  position: properties.position,
  text: properties.text,
  theme: properties.theme,
  icon: properties.icon,
  allowEscapeKey: properties.allowescapekey,
  confirmButtonText: properties.button_text,
  backdrop: properties.backdrop,
  footer: properties.footer,
  iconColor: properties.icon_colour,
  confirmButtonColor: properties.confirmbuttoncolor
})

}