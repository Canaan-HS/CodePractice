from alive_progress import alive_bar
import time

"""
>>> (經過時間顯示) : elapsed

>>> bar 進度條樣式 =>
█ : 'smooth'
=> : 'classic' 
#. : 'classic2'
>> : 'brackets' 
▉ : 'blocks'
● : bubbles'
■ : 'solid' 
✓ : 'checks' 
●○ 'circles'
■□'squares'
♬ : 'notes'
>>> 特別效果 =>
萬聖節圖示 'halloween' 
.∙∙∙∙. : 'ruler' 
+∙∙∙∙+ : 'ruler2'
´¯`·.¸¸.·´¯` : 'fish' 
⠠⢀⡀⡀⢀⠄ : 'scuba'

"""

spinner_style = [
    'classic', # /
    'stars', # *
    'twirl', # ↖
    'twirls', # ←↖
    'horizontal', # ▊
    'vertical', # ▂
    'waves', # ▃▅▇
    'waves2', # (更快) ▆▅▂
    'waves3', # ▇▂▇
    'dots_waves', # ⠐⠠⢀⡀⠄
    'dots_waves2', # ⢀⠄⠁⠐⢀ 
    'it', # >< ><●
    'ball_belt', # ●/~\_/~
    'balls_belt', # ●/~\_/~
    'triangles', # ⡀|  ▶▶
    'brackets', # <<<
    'bubbles', # ○○○○○ (做右球)
    'circles', # ○○○○○●
    'squares', # ■□□□
    'flowers', # 🌸🌸
    'elements',
    'loving',
    'notes',
    'notes2',
    'arrow',
    'arrows',
    'arrows2',
    'arrows_in',
    'arrows_out',
    'radioactive',
    'boat',
    'fish',
    'fish2',
    'fishes',
    'crab',
    'alive',
    'wait',
    'wait2',
    'wait3',
    'wait4',
    'pulse'
]

def display(spinner, delay=0.03):
    with alive_bar(total=100, title=f'[{spinner}]', length=90, bar='blocks', spinner=spinner, elapsed=False) as bar:
        for _ in range(100):
            bar()
            time.sleep(delay)


for spinner in spinner_style:
    display(spinner)