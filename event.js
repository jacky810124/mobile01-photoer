'use strict'

function main() {
  const hostname = location.hostname
  const pathname = location.pathname

  const isMobile01 = /^\S+.mobile01.com$/.test(hostname)
  const isTopic = /^\/topicdetail.php/.test(pathname)
  const isNews = /^\/newsdetail/.test(pathname)

  /**
   * send notify
   * @param  {String} message notify message
   */
  function sendNotify(message) {
    const bodyElement = document.querySelector('body')
    const notifyElement = document.createElement('p')
    const containerElement = document.createElement('div')

    notifyElement.innerHTML = message
    notifyElement.style.color = 'white'
    notifyElement.style.position = 'fixed'
    notifyElement.style['text-align'] = 'center'
    notifyElement.style['font-weight'] = '700'
    notifyElement.style.width = '400px'
    notifyElement.style['font-size'] = '1em'
    notifyElement.style.top = '50px'
    notifyElement.style.left = `${window.innerWidth / 2}px`
    notifyElement.style['margin-left'] = '-200px'
    notifyElement.style['background-color'] = 'rgba(255, 111, 0, 0.8)'
    notifyElement.style['z-index'] = '99999999'
    notifyElement.style.padding = '20px'
    // notifyElement.style.border = '1px solid gray'
    notifyElement.style['border-radius'] = '3px'
    notifyElement.style.transition = 'opacity 1s ease-out'

    bodyElement.prepend(notifyElement)

    setTimeout(function () {
      notifyElement.style.opacity = 0
    }, 1500)
    setTimeout(function () {
      bodyElement.firstChild.remove()
    }, 3000)
  }

  /**
   * clear mobil01 news description
   */
  function clearNews() {
    const post = document.querySelector('.single-post-content')
    const imgs = document.querySelectorAll('.single-post-content>img')

    post.innerHTML = ''

    Array.prototype.forEach.call(imgs, el => post.append(el))
    // [...imgs].forEach(el => post.append(el))
  }

  /**
   * clear first user topic description
   */
  function clearTopic() {
    const post = document.querySelector('.forum-content article')
    const imgs = document.querySelector('.forum-content article').querySelectorAll('img')

    post.innerHTML = ''

    Array.prototype.forEach.call(imgs, el => post.append(el))
    // [...imgs].forEach(el => post.append(el))
  }

  if (isMobile01) {
    if (isNews) {
      clearNews()
    } else if (isTopic) {
      clearTopic()
    } else {
      sendNotify('Mobile01 Photoer 目前僅支援小惡魔新聞台與使用者討論串')
    }
  } else {
    sendNotify('Mobile01 Photoer 目前僅支援 mobile01.com')
  }

}

main()
