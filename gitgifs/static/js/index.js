import 'whatwg-fetch'
import isUndefined from 'lodash/isUndefined'

var gitGifLinkEl = document.getElementsByClassName('git-gif')[0]

if (!isUndefined(gitGifLinkEl)) {
  fetch('/gifs.json')
    .then((res) => {return res.json()})
    .then(function (json) {
      var gitGifUrl = json[Math.ceil(Math.random() * json.length)].url
      gitGifLinkEl.href = gitGifUrl
    })
}
