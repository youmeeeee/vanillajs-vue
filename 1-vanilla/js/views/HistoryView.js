import KeywordView from './KeywordView.js'

const tag='[HistoryView]'

const HistoryView = Object.create(KeywordView)

// HistoryView.messages.NO_KEYWORD = '검색 이력이 없습니다.'

HistoryView.getKeywordHtml= function(data) {
    return data.reduce((html, item) => {
        html += `<li data-keyword=${item.keyword}>
            ${item.keyword}
            <span class="date">${item.date}</span>
            <button class="btn-remove"></button>
        </li>`
        return html
    }, '<ul class="list">') + '</ul>'

}

export default HistoryView

