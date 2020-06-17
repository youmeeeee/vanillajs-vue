import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function(el) {
    this.init(el)
}

KeywordView.render = function(data = []) {
    this.el.innerHTML = data.length ? this.getKeywordsHTML() : 'No Result'
    this.show()
}

KeywordView.getKeywordsHTML = function() {
    debugger
}

export default KeywordView