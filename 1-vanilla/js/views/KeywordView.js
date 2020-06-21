import View from './View.js'

const tag='[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function (el) {
    this.init(el)
}

KeywordView.render = function (data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getKeywordHtml(data) :  '추천 검색어가 없습니다.'
    this.show()
}

KeywordView.getKeywordHtml = function (data) {
    return data.reduce((html, item, idx) => {
        html += `<li>
            <span class="number">${idx + 1}</span>
            ${item.keyword}
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

export default KeywordView

