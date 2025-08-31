class Collection {
/**_________________________
 ** { document }
 *
 * ?元素選擇器
 * [根據元素的 id 屬性快速獲取單個元素]: document.getElementById(id)
 * [根據標籤名獲取元素集合(HTMLCollection)]: document.getElementsByTagName(tagName)
 * [根據類別名獲取元素集合(HTMLCollection)]: document.getElementsByClassName(className)
 * [CSS 選擇器獲取第一個匹配的元素]: document.querySelector(selector)
 * [CSS 選擇器獲取所有匹配的元素(NodeList)]: document.querySelectorAll(selector)
 * [從當前元素向上尋找最近的符合 CSS 選擇器的祖先元素]: element.closest(selector)
 * [根據元素的 name 屬性獲取元素集合(NodeList)]: document.getElementsByName(name)
 *
 * ?元素獲取與內容操作
 * [獲取或設置元素的文本內容]: element.textContent
 * [獲取元素的子元素數量]: element.childElementCount
 * [獲取元素的子元素集合(HTMLCollection)]: element.children
 * [獲取或設置元素的文本內容]: element.innerText
 * [獲取或設置元素的 HTML 內容]: element.innerHTML
 * [獲取或設置包含元素本身的 HTML 內容]: element.outerHTML
 * [檢查元素是否包含指定後代元素]: element.contains(otherElement)
 * [獲取元素的所有子節點(包括文本和註解節點)]: element.childNodes
 * [獲取父元素(限元素節點)]: element.parentElement
 * [獲取元素的父節點(可任意節點)]: element.parentNode
 * [獲取上一個兄弟節點(可任意節點)]: element.previousSibling
 * [獲取元素的上一個兄弟元素(限元素節點)]: element.previousElementSibling
 * [獲取下一個兄弟節點(可任意節點)]: element.nextSibling
 * [獲取元素的下一個兄弟元素(限元素節點)]: element.nextElementSibling
 * [獲取元素的第一個子節點(可任意節點)]: element.firstChild
 * [獲取元素的第一個子元素(限元素節點)]: element.firstElementChild
 * [獲取元素的最後一個子節點(可任意節點)]: element.lastChild
 * [獲取元素的最後一個子元素(限元素節點)]: element.lastElementChild
 *
 * ?元素創建與節點操作
 * [創建 HTML 元素]: document.createElement(tagName)
 * [創建文本節點]: document.createTextNode(text)
 * [複製元素節點，deep 決定是否包含子節點]: element.cloneNode(deep)
 * [創建文檔片段，用於批量操作 DOM 提升性能]: document.createDocumentFragment()
 * [insertAdjacent 的 position]: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
 * [在指定位置插入 HTML 字符]: element.insertAdjacentHTML(position, text)
 * [在指定位置插入一個元素]: element.insertAdjacentElement(position, element)
 * [創建註解節點]: document.createComment(text)
 * [創建屬性節點]: document.createAttribute(name)
 * [定義自定義元素，用於 Web Components]: customElements.define(name, constructor, options)
 * [為元素附加 Shadow DOM, mode 可設為 open 或 closed]: element.attachShadow({ mode })
 *
 * ?節點(添加|刪除)
 * [單或多個節點添加到父元素末尾]: parent.append(...nodes)
 * [單或多個節點添加到父元素開頭]: parent.prepend(...nodes)
 * [單個節點添加到父元素末尾]: parent.appendChild(node)
 * [父元素之前插入節點]: parent.before(node)
 * [父元素之後插入節點]: parent.after(node)
 * [DOM 中刪除當前元素]: element.remove()
 * [從父元素中刪除指定子節點]: parent.removeChild(child)
 * [再父元素內參考節點插入節點]: element.insertBefore(node, referenceNode)
 * [用一個或多個節點替換當前元素]: element.replaceWith(...nodes)
 * [用一個或多個節點替換父元素的所有子節]: parent.replaceChildren(...nodes)
 * [用新節點替換父元素的指定子節點]: parent.replaceChild(newChild, oldChild)
 *
 * ?屬性操作
 * [設置元素屬性]: element.setAttribute(name, value)
 * [取得元素屬性]: element.getAttribute(name)
 * [刪除元素屬性]: element.removeAttribute(name)
 * [切換元素屬性(存在則移除，不存在則添加)]: element.toggleAttribute(name, force)
 * [檢查元素是否具有指定屬性]: element.hasAttribute(name)
 * [獲取元素的所有屬性]: element.attributes
 *
 * ?樣式操作
 * [向元素添加一個或多個類別]: element.classList.add(className)
 * [從元素移除指定類別]: element.classList.remove(className)
 * [切換類別(存在則移除，不存在則添加)]: element.classList.toggle(className)
 * [檢查元素是否包含指定類別]: element.classList.contains(className)
 * [用新類別替換舊類別]: element.classList.replace(oldClassName, newClassName)
 * [直接設置元素的類別字符串]: element.className = className
 * [直接設置元素的內聯樣式]: element.style = style
 * [設置元素的特定樣式屬性]: element.style.property = value
 * [獲取元素的計算後樣式]: window.getComputedStyle(element)
 *
 * ?直接取得標籤
 * [HTMLAllCollection]: document.all
 * [<title>]: document.title
 * [<html>]: document.documentElement
 * [<head>]: document.head
 * [<body>]: document.body
 * [<script>]: document.scripts
 * [<a>]: document.links
 * [<img>]: document.images
 * [<embed>]: document.embeds
 * [<form>]: document.forms
 * [獲取網域]: document.domain
 * [獲取來源 URL]: document.referrer
 * [獲取完整 URL]: document.URL
 * [獲取 URI]: document.documentURI
 * [獲取基礎 URI]: document.baseURI
 * [獲取兼容模式]: document.compatMode
 * [獲取當前獲得焦點的元素]: document.activeElement
 * [獲取可見狀態]: document.visibilityState
 * [獲取加載狀態]: document.readyState
 * [獲取字體信息]: document.fonts
 * [獲取或設置 Cookie]: document.cookie
 * [獲取帶 name 屬性的 <a> 元素]: document.anchors
 * [獲取所有樣式表]: document.styleSheets
 * [獲取最後修改的時間]: document.lastModified
 * [獲取使用的字符編碼]: document.characterSet
 * [獲取位置信息]: document.location
 *
 * ?特別操作
 * [將焦點設置到元素上]: element.focus()
 * [返回元素相對於視窗的位置和尺寸信息]: element.getBoundingClientRect()
 * [將元素滾動到可見區域]: element.scrollIntoView(alignToTop)
 */

/**_________________________
 ** { location }
 *
 * window.* (全域) [window.location.href] 獲取完整資訊, 其實基本上和簡化版差不多
 * location.* (簡化版)
 *
 * [重新載入]: location.reload()
 * [重新導向]: location.assign(url)
 * [替換Url]: location.replace(url)
 * [新狀態替換, 並更新Url]: location.replaceState(stateObj, title, url)
 * [新歷史替換, 並更新Url]: location.pushState(stateObj, title, url)
 *
 * [網址]: location.href
 * [域名]: location.host (包含端口) / location.hostname (不包含端口)
 * [端口]: location.port
 * [協議]: location.protocol (https)
 * [域名前半]: location.origin (包含域名)
 * [域名後半]: location.pathname (不包含域名)
 * [搜尋符 ? 後面]: location.search
 * [片段符 # 後面]: location.hash
 */

/**_________________________
 ** { addEventListener }
 *
 * [事件添加]: element.addEventListener("監聽類型", "監聽工作", {附加功能});
 * [手動觸發]: element.dispatchEvent("監聽類型")
 * [移除事件]: element.removeEventListener("監聽類型", "監聽工作")
 *
 * ?只能在控制台使用 (獲取整個頁面的監聽器)
 * window.getEventListeners(對象).監聽器類型
 *
 * 監聽類型:
 * ?滑鼠事件 / 對應手機端指針
 * [滑鼠點擊]: "click"
 * [滑鼠點兩下]: "dblclick"
 * [滑鼠滾動]: "scroll"
 * [提交表單]: "submit"
 * [大小調整]: "resize"
 * [滑鼠放開]: "mouseup" / "pointerup"
 * [滑鼠按下]: "mousedown" / "pointerdown"
 * [滑鼠移入]: "mouseover" / "pointerover" | 在目標上反覆觸發
 * [滑鼠移開]: "mouseout" / "pointerout" | 在目標外反覆觸發
 * [滑鼠進入]: "mouseenter" / "pointerenter" | 進入觸發一次
 * [滑鼠離開]: "mouseleave" / "pointerleave" | 離開觸發一次
 * [滑鼠於元素上移動]: "mousemove" / "pointermove"
 *
 * ?手機觸碰事件
 * [手機按下]: "touchstart"
 * [手機放開]: "touchend"
 * [手機滑動]: "touchmove"
 *
 * ?鍵盤事件
 * [鍵盤放開]: "keyup"
 * [鍵盤按下]: "keydown"
 * [元素獲得焦點]: "focus" (通常用於 input 或 textarea)
 * [元素失去焦點]: "blur" (通常用於 input 或 textarea)
 * [頁面資源載入完成]: "load" (通常用於圖片、音頻、影片等)
 * [DOM 樹插入節點]: "DOMNodeInserted"
 * [DOM 樹載入完成]: "DOMContentLoaded"
 * [歷史紀錄變化]: "popstate" (url 的轉變)
 * [用戶離開頁面]: "beforeunload"
 *
 * ?監聽後事件:
 * document.addEventListener("監聽類型", event => {
 *    event.preventDefault() 防止默認行為, 例如跳轉, 送出表單等
 *    event.stopPropagation() 防止事件傳播, 用於事件只作用在特定元素
 *    event.stopImmediatePropagation() 與上方功能類似, 並防止呼叫其他相同事件類型的事件監聽器
 *
 *    event.type 觸發的事件類型
 *    event.target 獲取事件物件
 *    event.currentTarget 獲取事件觸發元素
 *
 *    event.key 獲取鍵盤相關鍵值
 *    event.keyCode 鍵排按鈕的 code 碼
 *    event.clientX 獲取滑鼠觸發的座標
 *    event.clientY
 * }, {
 *    capture: true, 立即觸發, 預設是冒泡階段才觸發
 *    once: true, 一次性監聽, 觸發後立即移除
 *    passive: true 被動模式, 當監聽器不會使用, preventDefault() 取消默認, 添加該參數可提高性能
 * });
 */

/**_________________________
 ** { navigator }
 *
 * 瀏覽器資訊:
 * navigator.appVersion
 * navigator.userAgent (兩個功能類似, userAgent 比較新)
 * navigator.userAgentData (較完整數據)
 *
 * [瀏覽器語言]: navigator.language
 * [CPU 核心數]: navigator.hardwareConcurrency
 * [是否聯網]: navigator.onLine
 * [網路資訊]: navigator.connection
 * [使用的serviceWorker]: navigator.serviceWorker
 * [是否啟用Cookie]: navigator.cookieEnabled
 * [媒體元數據]: navigator.mediaSession
 * [頁面激活狀態]: navigator.userActivation
 * [自動化狀態]: navigator.webdriver
 * [內存量]: navigator.deviceMemory (單位 GB)
 */

/**_________________________
 ** { Object }
 *
 * Object.assign(目標, ...來源) [一或多個來源的 Object 合併到目標 Objec]
 * Object.keys(物件) [獲取 Object 的 key 值]
 * Object.values(物件) [獲取 Object 的 value 值]
 * Object.entries(物件) [獲取 Object 的, key / value 值]
 * Object.is(物件1, 物件2) [判斷物件是否相同]
 * Object.freeze(物件) [凍結 Object 防止修改]
 * Object.preventExtensions(物件) [防止 Object 擴展]
 * Object.sort((a, b) => b - a); [小到大排序, 反過來就寫 a - b]
 */

/**_________________________
 ** { Array (可使用 Object 類型的一些 api, 但基本用不到) }
 *
 * Array.length [獲取陣列的長度]
 *
 * 添加
 * Array.from() [字串轉陣列]
 * Array.push(新元素) [添加新元素到陣列末端]
 * Array.unshift(新元素) [添加新元素到陣列前端]
 * Array.concat(arr1, arr2, arrn) [將陣列合併, 回傳新的陣列]
 *
 * 刪除
 * Array.pop() [刪除陣列其他元素, 回傳最後一項的值]
 * Array.shift() [刪除陣列其他元素, 回傳第一項的值]
 *
 * 修改
 * Array.flat() [將多維的 陣列 平攤成 一維]
 * Array.join() [輸入值 以該值作為連結字, 例如 * 就會獲取所有 陣列 的數據, 並且以 * 連結]
 * Array.copyWithin() [輸入指定範圍, 複製該範圍的值, 填充陣列]
 * Array.slice(開始索引, 結束索引) [回傳陣列的切片範圍]
 * Array.splice(開始索引, 刪除數量, 選擇新添加元素) [添加刪除或替換陣列中的元素, 修改原始陣列]
 *
 * Array.sort(); [以字母順序進行排序]
 * Array.toSorted(); [與 sort 一樣進行排序, 但他會創新的陣列 , 而不是修改原數據]
 * Array.reverse(); [反轉順序]
 * Array.toReversed() [與 reverse 一樣進行反轉, 但他會創新的陣列 , 而不是修改原數據
 *
 * 數字的排序
 * Array.sort(function(a, b){return a - b}); [升序]
 * Array.sort(function(a, b){return b - a}); [降序]
 *
 * 查找
 * Array.at(索引) [獲取該索引值數據]
 * Array.findLast(查找元素) [重後方查找, 回傳第一個找到的值]
 * Array.indexOf(查找元素, 可選開始索引) [從前面開始查找, 找到就回傳索引, 找不到回傳 -1]
 * Array.lastIndexOf(查找元素, 可選開始索引) [從後面面開始查找, 找到就回傳索引, 找不到回傳 -1]
 * Array.includes(查找元素) [查找是否包含該元素, 回傳 boolean]
 *
 * 帶參數的查找, 回傳 True / False
 * Array.find((查找元素, 查找索引) => { 找到符合條件的值, 沒有就是 undefined })
 * Array.findIndex((查找元素, 查找索引) => { 找到符合條件的索引值, 沒有就是 -1 })
 * Array.findLastIndex() [同上 但重後方開始找]
 *
 * 不帶參數的查找, 回傳符合條件的值
 * Array.find(number => number > 5) [回傳第一個大於 5 的數值]
 * Array.findIndex(number => number > 5) [回傳第一個大於 5 的索引值]
 *
 * Array.forEach() [遍歷數據]
 * Array.filter(number => number % 2 == 0) [過濾出所有的偶數並回傳]
 * Array.reduce((累加值, 當前值) => {return 累加值 + 當前值}, 初始值) [對陣列進行累加]
 * Array.map(參數 => 操作邏輯) [回傳符合邏輯處理後的結果]
 * Array.flatMap() [同上, 但多一個將多維 平攤的功能]
 * Array.reduceRight() [同上, 但反著重後面開始]
 * Array.every(參數 => 判斷) [當所有參數都符合判斷, 回傳 True 反之 False]
 * Array.some(參數 => 判斷) [只要有一個符合判斷, 回傳 True 反之 False]
 */

 /**_________________________
 ** { String }
 *
 * 字串的處理:
 * String.length [獲取字串長度, 不包含 0 有幾個字就是多少]
 * String.charAt() [獲取字串中指定索引值]
 * String.at() [功能與上面差不多]
 * String.charCodeAt() [獲取字串中指定索引值 的 UTF-16 code]
 * String.split(分割字串) [以分割字串為分割點, 將一個字串分割成陣列]
 * String.slice() [進行字串切片, 可提供兩個索引值, 也可是負數, 邏輯與 Python 的切片差不多]
 * String.substring() [只回傳指定索引之間的字串, 其餘的將被排除]
 * String.toUpperCase() [字串都轉大寫]
 * String.toLowerCase() [字串都轉小寫]
 * String.concat(A, B) [用於字串的連結] (用 + 或 `` 模板比較方便吧 w)
 * String.trim() [刪除前後空格]
 * String.trimStart() [只刪除前空格]
 * String.trimEnd() [只刪除後空格]
 * String.padStart(填充數, 填充值) [重前面開始填充, 直到該字串的長度, 與填充數相同, 只有小於填充數的才會運行]
 * String.padEnd(填充數, 填充值) [基本同上, 但重後面來]
 * String.repeat(重複數) [用同一個字串, 根據重複數, 進行累加填充]
 * String.replace(指定字串, 替換的字串) [將字串中的指定字串, 替換成其他字串, 可用正則]
 * String.replaceAll() [基本同上, 但 replace 只會改第一個找到的指定字串, 後續不會變更, 但是使用正則的 /g 就會和 replaceAll 相同]
 *
 * 字串的查找 (查找都可用正則):
 * String.indexOf("查找字串") [查找字串第一次出現的索引位置, 沒找到就回傳 -1]
 * String.search("查找字串") [同上一樣是查找字串, 但不允許添加第二參數, 也就是查找的起始位置, 另外兩個可以]
 * String.lastIndexOf("查找字串") [同上, 但重後面開始找]
 * String.match() [回傳匹配成功的字串]
 * String.matchAll() [回傳 iterator]
 *
 * 字串的判斷:
 * String.startsWith() [是否已指定字串開頭]
 * String.endsWith() [是否已指定字串結尾]
 * String.includes() [是否包含指定字串]
 */

/**_________________________
 ** { Number }
 *
 * BigInt(Number) [轉換長整數]
 * Number.isInteger() [判斷是否是整數]
 * Number.toString() [轉換字串]
 * Number.toFixed(2) [回傳小數點位數到第二位 字串]
 * Number.toPrecision(2) [回傳指定長度的數字]
 *
 * Number() [轉換為整數 類型]
 * parseInt() [解析為整數]
 * parseFloat() [解析為浮點數]
 */

 /**_________________________
  ** { Math }
  *
  * Math.round() [傳入小數四捨五入]
  * Math.ceil() [無條件進位小數]
  * Math.floor() [無條件捨去小數]
  * Math.trunc() [只取整數的部份, 基本就是無條件捨去]
  * Math.sign() [正數回傳 1, 0 回傳 0, 負數回傳 -1]
  * Math.pow(數字, 次方) [獲取次方]
  * Math.sqrt() [獲取平方根]
  * Math.abs() [取絕對值]
  * Math.min(a, b, n...) [回傳最小的數]
  * Math.max(a, b, n...) [回傳最大的數]
  * Math.random() [隨機數, 0 >= ~ < 1 的數字]
  * Math.log() [自然對數]
  * Math.log2(10) [2 需要 * 幾次是 10]
  * Math.log10(1000) [10 需要 * 幾次是 1000]
  * Math.sin()
  * Math.cos()
  */

/**_________________________
 ** { JSON }
 *
 * [解析Json為 js 對象]: JSON.parse(JsonString);
 * [js 對象 轉為 Json]: JSON.stringify(Js物件, 替換=null, 縮排=4)
 */

/**_________________________
 ** { 計算處理時間 }
 *  開始時間 = performance.now() | Date.now()
 *  運行方法...
 *  結束時間 = performance.now() | Date.now()
 *  總共時間 = 結束時間 - 開始時間
 *
 *  另一種方式
 *  console.time("運行計算")
 *  運行方法...
 *  console.timeEnd("運行計算")
 */

/**_________________________
 ** { 正則尾部匹配標誌 }
 *
 * /一個正則/i [不區分大小寫]
 * /一個正則/g [全域匹配]
 */

/**_________________________
 ** { 類型的判斷 }
 *
 * const obj = 某個物件
 * 
 * typeof obj [回傳物件的基本類型, 無法判斷物件類型]
 * Object.prototype.toString.call(obj).slice(8, -1) [回傳物件類型, 有判斷物件類型]
 * Array.isArray(obj) [判斷是否為陣列]
 * obj instanceof Array|Object|Map|Set [判斷是否為 指定類型]
 * obj.constructor === Array|Object|Map|Set [判斷是否為 指定類型]
 */

/**_________________________
 ** { 類型的轉換 }
 *
 * obj = String(obj) [轉換為字串]
 * obj = Number(obj) [轉換為數字]
 * obj = Boolean(obj) [轉換為布林]
 * obj = Object(obj) [轉換為物件]
 * obj = Array(obj) [轉換為陣列]
 * obj = Map(obj) [轉換為 Map]
 * obj = Set(obj) [轉換為 Set]
 * obj = Date(obj) [轉換為日期]
 * obj = RegExp(obj) [轉換為正則]
 * obj = Symbol(obj) [轉換為 Symbol]
 */
}

/**
 * * { 還未深入瞭解的 }
 * PerformanceObserver() [監聽資源的載入, 用於性能分析]
 * Object.defineProperty() [較舊的 API, 提供更強大與底層的 物件監聽控制與回條]
 * Object.defineProperties() [同上]
 */