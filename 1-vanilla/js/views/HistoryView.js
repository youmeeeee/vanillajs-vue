import View from './View.js'

const tag='[HistoryView]'

const HistoryView = Object.create(View)

HistoryView.setup = function (el) {
    this.init(el)
    return this
}

HistoryView.render = function (data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getKeywordHtml(data) :  '최근 검색어가 없습니다.'
    this.bindEvent()
    this.show()
}

HistoryView.getKeywordHtml = function (data) {
    return data.reduce((html, item, idx) => {
        html += `<li data-keyword="${item.keyword}">
            <span class="number">${idx + 1}</span>
            ${item.keyword}
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

HistoryView.bindEvent = function () {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.onClickKeyword(e))
    })
}

HistoryView.onClickKeyword = function (e) {
    const { keyword } = e.currentTarget.dataset;
    this.emit('@click', { keyword }) 
}

export default HistoryView

