import View from './View.js'

const tag='[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function (el) {
    this.init(el)
    return this
}

KeywordView.render = function (data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getKeywordHtml(data) :  '추천 검색어가 없습니다.'
    this.bindEvent()
    this.show()
    return this
}

KeywordView.getKeywordHtml = function (data) {
    return data.reduce((html, item, idx) => {
        html += `<li data-keyword="${item.keyword}">
            <span class="number">${idx + 1}</span>
            ${item.keyword}
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

KeywordView.bindEvent = function () {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.onClickKeyword(e))
    })
}

KeywordView.onClickKeyword = function (e) {
    const { keyword } = e.currentTarget.dataset;
    this.emit('@click', { keyword }) 
}

export default KeywordView

