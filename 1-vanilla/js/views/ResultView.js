import View from './View.js'

const tag='[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function(el) {
    this.init(el)
}

ResultView.render = function(data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) :  'No result'
}

ResultView.getSearchResultsHtml = function(data) {
    debugger
}

export default ResultView
