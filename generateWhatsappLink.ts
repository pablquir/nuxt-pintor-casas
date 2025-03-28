const isMobile = () => {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent)
}

const whatsappLink = (phoneNumber: string, msg: string) => {
  const encodeMsj = encodeURIComponent(msg)

  const linkMobile = `whatsapp://send?phone=${phoneNumber}&text=${encodeMsj}`
  const linkDesktop = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeMsj}`

  return isMobile() ? linkMobile : linkDesktop
}

export default whatsappLink
