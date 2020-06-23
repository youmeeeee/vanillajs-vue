import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/keywordView.js'
import HistoryView from '../views/HistoryView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'



const tag = '[MainController]'

export default {
    init() {
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())
        
        
        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        KeywordView.setup(document.querySelector('#search-keyword'))    
        
        ResultView.setup(document.querySelector('#search-result'))   

        KeywordView.setup(document.querySelector('#search-keyword'))
            .on('@click', e => this.onClickKeyword(e.detail.keyword))

        HistoryView.setup(document.querySelector('#search-history'))
            .on("@click", e => this.onClickHistory(e.detail.keyword))
    

        this.selectedTab = '최근 검색어'
        this.renderView()
    },

    renderView () {
        console.log(tag, 'renderView()')
        TabView.setActiveTab(this.selectedTab)

        if (this.selectedTab === '추천 검색어') {
           this.fetchSearchKeyword()
        } else {
            this.fetchSearchHistory()
        }

        ResultView.hide()
    },

    fetchSearchKeyword() {
        KeywordModel.list().then(data => {
            KeywordView.render(data)
        })
    },

    fetchSearchHistory() {
        HistoryModel.list().then(data => {
            HistoryView.render(data)
        })
    },

    onChangeTab (tabName) {
        debugger
    },

    onSubmit (input) {
        console.log(input)
        this.search(input)
    },

    search (query) {
        console.log(tag, 'search()', query)
        FormView.setValue(query)
        SearchModel.list(query).then(data => this.onSearchResult(data))
    },

    onSearchResult (data) { 
        TabView.hide()
        KeywordView.hide()
        ResultView.render(data)
    },

    onResetForm () {
        this.renderView()
    },

    onClickKeyword(keyword) {
        this.search(keyword)
    },

    onClickHistory(keyword) {
        this.search(history)
    }
}