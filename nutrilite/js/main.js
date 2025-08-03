function map_news_open(div){
    map_news_close()
    document.querySelector(div).classList.add('active')
    
}
function map_news_close(){
    document.querySelectorAll('[id^=map-news-]').forEach((e)=>{
        e.classList.remove('active')
    })
}
//手機版選單開合
//宣告g_header=文件選擇器('#命名')
//mo_menu增加事件偵聽('點擊')
//如果g_header元素包含class(指.active)、就移除class
//否則就加上class
const g_header = document.querySelector('#g-header')
const mo_menu = document.querySelector('#mo_menu')
mo_menu.addEventListener('click',()=>{
    if(g_header.classList.contains('active')){
        g_header.classList.remove('active')
    }else{
        g_header.classList.add('active')
    }
})
//手機版關閉選單，不要卡在畫面上要跳頁
const g_nav_a = document.querySelectorAll('#g-header .right a')
g_nav_a.forEach((e)=>{
    e.addEventListener('click',()=>{
        g_header.classList.remove('active')
    })
})