""" 題目說明

請使用選擇敘述撰寫一程式，讓使用者輸入三個邊長
檢查這三個邊長是否可以組成一個三角形。若可以，則輸出該三角形之周長
否則顯示【Invalid】。

提示：檢查方法 = 任意兩個邊長之總和大於第三邊長。

範例輸入1
5
6
13

範例輸出1
Invalid

範例輸入2
1
1
1

範例輸出2
3

"""

def triangle(a,b,c):
    if a+b>c and a+c>b and c+b>a:
        print(a+b+c)
    else:
        print("Invalid")

triangle(
    int(input("邊長1:")),
    int(input("邊長2:")),
    int(input("邊長3:"))
)

""" 搞不懂以前練習題怎麼這麼爛 """