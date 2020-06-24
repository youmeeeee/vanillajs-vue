import KeywordView from './KeywordView.js'

const tag='[HistoryView]'

const HistoryView = Object.create(KeywordView)

// HistoryView.messages.NO_KEYWORD = '검색 이력이 없습니다.'

HistoryView.getKeywordHtml= function(data) {
    return data.reduce((html, item) => {
        html += `<li data-keyword=${item.keyword}>
            ${item.keyword}
            <span class="date">${item.date}</span>
            <button class="btn-remove" data-keyword=${item.keyword}></button>
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

HistoryView.bindRemoveBtn = function () {
    Array.from(this.el.querySelectorAll('button.btn-remove')).forEach(button => {
        button.addEventListener('click', e => {
            e.stopPropagation()
            this.onRemoveHistory(button.parentElement.dataset.keyword)
        })
    })
}

HistoryView.onRemoveHistory = function (keyword) {
    this.emit('@remove', { keyword }) 
}

export default HistoryView

