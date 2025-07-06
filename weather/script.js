//scripts for the app

function get_himawari_date({ hrs_to_subtract = 0 } = {}) {
  const now = new Date()

  // Get UTC date
  const [utcyear, utcmonth, utcday] = [
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  ]
  const [utchour, utcmin, utcsec] = [
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  ]
  const nowUTC = new Date(utcyear, utcmonth, utcday, utchour, utcmin, utcsec)

  let now_minused = new Date(nowUTC.valueOf())
  //subtract 'hrs_to_subtract' hours
  now_minused.setHours(now_minused.getHours() - hrs_to_subtract)
  // round minutes to nearest 10 lower
  let temp_minutes = now_minused.getMinutes()
  now_minused.setMinutes(temp_minutes - (temp_minutes % 10))
  //set seconds to zero
  now_minused.setSeconds(0)

  const year = String(now_minused.getFullYear())
  const month = String(now_minused.getMonth() + 1).padStart(2, '0')
  const day = String(now_minused.getDate()).padStart(2, '0')
  const time = String(
    `${now_minused.getHours()}${now_minused.getMinutes()}00`
  ).padStart(6, '0')

  const output = `${year}/${month}/${day}/${time}`

  return output
}

function set_vis_title() {
  const vis_title = document.getElementById('vis-title')

  const now = new Date()
  now.setHours(now.getHours() - 1)
  //round minutes to nearest 10 lower
  const temp_minutes = now.getUTCMinutes()
  now.setMinutes(temp_minutes - (temp_minutes % 10))
  //set seconds equal to zero
  now.setSeconds(0)

  // Get each time component in UTC
  const day = String(now.getUTCDate()).padStart(2, '0')
  const month = now.toLocaleString('default', { month: 'long' }) // "July"
  const year = now.getUTCFullYear()
  const hours = String(now.getUTCHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  const formatted = `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`

  vis_title.textContent = `Visible satellite ${formatted} UTC`
}

function set_vis_img_links() {
  const myDate = get_himawari_date({ hrs_to_subtract: 1 })

  const img1_link = `https://himawari8-dl.nict.go.jp/himawari8/img/D531106/8d/550/${myDate}_3_6.png`
  const img2_link = `https://himawari8-dl.nict.go.jp/himawari8/img/D531106/8d/550/${myDate}_4_6.png`
  const img3_link = `https://himawari8-dl.nict.go.jp/himawari8/img/D531106/8d/550/${myDate}_5_6.png`

  const img1 = document.getElementById('vis-sat-1')
  const img2 = document.getElementById('vis-sat-2')
  const img3 = document.getElementById('vis-sat-3')

  vis_title = img1.src = img1_link
  img2.src = img2_link
  img3.src = img3_link
}

document.addEventListener('DOMContentLoaded', set_vis_img_links)
document.addEventListener('DOMContentLoaded', set_vis_title)

// const myDate = get_himawari_date({ hrs_to_subtract: 1 })
// const myLink_1 = `https://himawari8-dl.nict.go.jp/himawari8/img/D531106/8d/550/${myDate}_3_6.png`
// const myLink_2 = `https://himawari8-dl.nict.go.jp/himawari8/img/D531106/8d/550/${myDate}_4_6.png`
// const myLink_3 = `https://himawari8-dl.nict.go.jp/himawari8/img/D531106/8d/550/${myDate}_5_6.png`

// console.log('The link should be : ', myLink_1)
