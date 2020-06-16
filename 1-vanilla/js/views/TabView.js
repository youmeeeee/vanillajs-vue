import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function (el) {
    this.init(el)
    this.bindClick()
    return this
}

TabView.setActiveTab = function (tabName) {
    Array.from(this.el.children).forEach(list => {
        list.className = list.innerHTML === tabName ? 'active' : ''
    })
}

TabView.bindClick = function () {
    Array.from(this.el.querySelectorAll('li')).forEach(list => {
        list.addEventListener('click', e => this.onClick(list.innerHTML))
    })
}

TabView.onClick = function (tabName) {
    this.setActiveTab(tabName)
    this.emit('@change', {tabName})
}

export default TabView