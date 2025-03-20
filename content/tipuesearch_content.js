var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 學員作業網站:  https://mdecd2025.github.io/hw-zhe41223118/ \n 學員作業倉儲:\xa0 https://github.com/mdecd2025/hw-zhe41223118 \n \n 課程代號: cd2025 \n Teams 線上教學： \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Integrate', 'text': '除了每周上課內容任務外，小組作業個人製作部分，依序整理至此目錄下。', 'tags': '', 'url': 'Integrate.html'}, {'title': 'w1', 'text': '任務： \n 分組團隊  (Teams)  建立後，參考 說明 後，將各班各學員與各團隊的倉儲與網站連結，分別放入標題為 list  (使用第一階標題)  的網頁中。 \n \n 甲乙班學員網站及倉儲整理 \n from browser import html, document\n\n# 讀取甲班資料\nurl = "https://mde.tw/list/2a.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\nbrython_div1 = document["brython_div1"]\ncount = 0\n\n# 插入甲班標題\nbrython_div1 <= html.H3("甲班")\n\n# 顯示甲班的學生資料\nfor i in all_stud:\n    count += 1\n    stud = i.split("\\t")\n    stud_num = stud[0]\n    github = stud[1]\n    brython_div1 <= str(count) + ". " + html.A(str(stud_num), href="https://mdecd2025.github.io/hw-" + str(github))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/hw-" + str(github))\n    brython_div1 <= html.BR()\n\n# 讀取乙班資料\nurl = "https://mde.tw/list/2b.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\ncount = 0\n\n# 插入乙班標題\nbrython_div1 <= html.H3("乙班")\n\n# 顯示乙班的學生資料\nfor i in all_stud:\n    count += 1\n    stud = i.split("\\t")\n    stud_num = stud[0]\n    github = stud[1]\n    brython_div1 <= str(count) + ". " + html.A(str(stud_num), href="https://mdecd2025.github.io/hw-" + str(github))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/hw-" + str(github))\n    brython_div1 <= html.BR()\n \n \n 甲乙兩班團隊網站及倉儲整理 \n from browser import document, html\n\n# 顯示甲班標題\nbrython_div1 = document["brython_div1"]\nbrython_div1 <= html.H3("甲班")  # 這行會顯示 "甲班" 標題\n\nnum = 11\nfor i in range(num):\n    brython_div1 <= str(i+1) + ". " + html.A("2a-ag" + str(i+1), href="https://mdecd2025.github.io/2a-" + "ag" + str(i+1))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/2a-" + "ag" + str(i+1))\n    brython_div1 <= html.BR()\n\n# 顯示乙班標題\nbrython_div1 <= html.H3("乙班")  # 這行會顯示 "乙班" 標題\n\nfor i in range(num):\n    brython_div1 <= str(i+1) + ". " + html.A("2b-g" + str(i+1), href="https://mdecd2025.github.io/2b-" + "g" + str(i+1))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/2b-" + "g" + str(i+1))\n    brython_div1 <= html.BR()\n', 'tags': '', 'url': 'w1.html'}, {'title': 'w3', 'text': '列出各班目前尚未納入分組的學員名單。 \n # 甲班學員資料處理\nurl = "https://mde.tw/list/2a.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\na_all_members = [\'41223154\', \'41271125\', \'41271158\', \'41271146\', \'41271131\', \'CYG41223103\', \'41223102\', \'41023128\', \'41023137\', \'41223137\', \'41223157\', \'41223156\', \'otakuyoyo\', \'41223141\', \'41223113\', \'kim41223114\', \'joeisme1208\', \'41223116\', \'41223144\', \'41223140\', \'41223143\', \'41223138\', \'41223134\', \'41223136\', \'zhe41223118\', \'Spirit0224\', \'yuhao-08\', \'41223158\', \'Ren911308\', \'41223150\', \'Manto8\', \'CYA41223106\', \'yan21ed\', \'Lin41223107\', \'41223133\', \'hong41223129\', \'41223110\', \'41223147\', \'Linjiahong41223125\', \'CHN41223132\', \'Yu-Fang-Hong\', \'41023111\', \'yckaooooo\', \'kolas911205\', \'41023105\', \'40932134\', \'41223104\', \'yan41223101\', \'41223105\', \'41223153\', \'41223120\', \'41223152\', \'G8People\', \'WSE41223112\', \'41223146\', \'41223119\']\n\n# 顯示甲班標題\nprint("甲班:")\nfor i in all_stud:\n    drop_n = i.rstrip("\\n")\n    stud = drop_n.split("\\t")\n    stud_num = stud[0]\n    stud_github = stud[1]\n    if stud_github not in a_all_members:\n        print(stud_num)\n\n# 乙班學員資料處理\nurl = "https://mde.tw/list/2b.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\nb_all_members = [\'41223251\', \'41223211\', \'41223245\', \'41223243\', \'jjjay41223212\', \'leeshaowei0716\', \'41223234\', \'41223209\', \'41223205\', \'41223201\', \'41223202\', \'41223208-hw\', \'41223216\', \'41223217\', \'41223248\', \'emma0312\', \'41223242\', \'41223203\', \'41223144\', \'41223235\', \'RAY41223215\', \'hyy41223228\', \'41223227\', \'41223206\', \'41223226-0\', \'Cloud41223237\', \'Yujenchuang\', \'41223225\', \'ljg41223220\', \'supowen\', \'jacky93111\', \'41223246\', \'Liu41223244\', \'41223236\', \'41223219\', \'41271237\', \'41223249\', \'41223229\', \'41223224\', \'41223222\', \'41223231\', \'linryan23\', \'41023114\', \'41223230\', \'timluo123\', \'CYC41223247\', \'41223218\', \'ych0227\', \'41023215\', \'41023216\', \'41023213\', \'41071203\', \'41071204\', \'41071202\', \'c-ching\', \'YUN4\', \'tseYU000\', \'snowfall-killer\', \'junpig10\']\n\n# 顯示乙班標題\nprint("\\n乙班:")\nfor i in all_stud:\n    drop_n = i.rstrip("\\n")\n    stud = drop_n.split("\\t")\n    stud_num = stud[0]\n    stud_github = stud[1]\n    if stud_github not in b_all_members:\n        print(stud_num)\n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '\n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '', 'tags': '', 'url': 'w5.html'}, {'title': 'tasks', 'text': 'task1 與 task2 任務為建立可在 近端維護個人作業與協同作業 的前置準備工作： \n 1. \xa0 task1 (自行製作可攜程式系統) \n 2.  task2 ( SSH 協定執行作業倉儲的推送) \n \n task3 與 task4 為  HW2  的內容： \n 1.  task3 ( Solvespace  建立 平面四連桿 系統零組件) \n 2.  task4 ( Onshape  建立平面 四連桿 系統零組件) \n \n task5 與 task6 為  HW3  的 主要 內容 \n 1.  task5 (Webots Tutorial 1 ~3) \n 2.  task6 (Webots Tutorial 4 ~6)', 'tags': '', 'url': 'tasks.html'}, {'title': 'task1', 'text': '下方 python版本更新影片缺少內容補充 ： \n 1. \xa0 以 python get-pip.py 安裝 pip 工具, 完成後，之後以 pip list 確認 pip.exe 已經配置完成 \n 2. \xa0以 pip install flask flask_cors bs4 lxml pelican markdown 安裝 cmsimde 網際內容管理系統啟動所需的 Python模組 \n 補做上以上兩件後，便可使用 可攜系統中的Python 3.13.2套件 來維護個人作業倉儲與分組倉儲 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '此影片因使用 regedit 指令後後續內容缺失，以下為補充: \n 1. 利用 命令列 regedit  指令進入後，在 HKEY_CURRENT_USER 內 SOFTWARE 裡 SimonTatham位置，滑鼠右鍵將此登錄設定檔案【 匯出 】存入可攜程式  start_ipv6.bat 所在目錄 。 (名稱隨意) \n 2.  將指定的倉儲帳號下的分支克隆後即可完成 \n \xa0 \xa0 例：git clone --recurse-submodules git@(.ppk名稱):(倉儲帳號)/(倉儲分支名稱).git\xa0 \n \xa0 \xa0操作依據有參考整理重點的- 這個網站 \n', 'tags': '', 'url': 'task2.html'}, {'title': 'task3', 'text': '', 'tags': '', 'url': 'task3.html'}, {'title': 'task4', 'text': '', 'tags': '', 'url': 'task4.html'}, {'title': 'task5', 'text': '', 'tags': '', 'url': 'task5.html'}, {'title': 'task6', 'text': '', 'tags': '', 'url': 'task6.html'}, {'title': 'Homework', 'text': '作業 (30%) \n HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n part1: \n 請各學員在 USB 隨身碟或個人電腦上完成 cd2025 課程所需的可攜系統配置: \n 下載  portable_wcm2025.7z  (330MB, 解開壓縮後 1.4GB) \n Webots_2025a.7z  (1.5 GB, 解開後約為 2.9GB, 可單獨運作) \n Webots_2025a_web.7z  (171 MB, 解開壓縮後約為 1GB, 必須連網運作) \n Blender4.2.7z \n part2: \n 請各學員完成可攜程式系統配置後, 利用 Webots R2025a 中寬度與高度都為 0.1m 的 box 物件建立一個簡單的平面四連桿機構模擬場景. \n base (基座) 長度 1m, link1 長度 0.4m, link2 長度 0.6m, link3 長度 0.9m, 各轉軸均為 HingeJoint, joint1 旋轉速度設定為 1radian/sec. \n part3: \n 模擬場景啟動後, 按下 s 鍵機構開始作動, 按下 p 鍵後機構暫停. \n 參考資料: \n cd2025_hw1_demo.7z \n HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 各學員請利用 CAD 系統依據 HW1 的連桿尺寸與運動方式, 配置適當大小的旋轉軸以及基座後, 利用 Webots R2025a 完成一個簡單的平面四連桿機構模擬場景. \n 參考資料: \n fourbar_slvs.7z \n HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 請各分組利用CAD 系統建立一個能在電腦桌 (1600W X 700D X 740H mm) 上運作的投籃機構 ( 參考影片 )後, 導入 Webots R2025a 套件, 建立一個能由使用者透過鍵盤按鍵操作, 且具備計分板的籃球遊戲機模擬系統. \n 參考資料: \n 參考資料: \n fourbar_ball_throwing_linkage.slvs \n sixbar_ball_throwing_linkage.slvs \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': 'HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW1 - 學員學號 \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW2 - 學員學號 \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW3 - 學員學號 \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Midterm', 'text': '本課程所繳交的期中成績為學員自評之學習期望成績. \n 期中考週的自評期望成績繳交流程: \n \n 整理先前所完成的各週的進度、作業網頁內容以及心得 \n 拍攝期中自評影片, 上傳至 Youtube 後, 以" 國立虎尾科技大學 - 機械設計工程系 - cd2025 期中自評- 學員學號 "為影片標題後嵌入本頁面中 \n 回填期中自評表單 \n 上傳學員期中成績 \n \n 各週進度: \n 各週網頁內容: \n 期中心得: \n 期中自評影片: \n \n \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'Exam', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 各學員利用 Webots R2025a 套件中的 Shape 物件, 隨堂建立指定的機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam2 (10%): 利用 CAD 零組件建立模擬場景\xa0 \n 各學員利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam3 (20%): Webots 機電模擬場景的協同設計 \n 各分組利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. 過程中各學員必須採同步協同模式, 維護從 Github Classroom 取得的分組協同倉儲以及網站. \n 協同分組方式: \n \n 分配學員負責利用 Solvespace 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 NX2312 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 Webots 建立機電系統模擬場景, 並利用 Python 程式進行控制, 過程中必須將建構過程拍成帶有說明字幕的影片上傳至分組網頁. \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'Exam1', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam1 - 學員學號 \n', 'tags': '', 'url': 'Exam1.html'}, {'title': 'Exam2', 'text': 'Exam2 (10%): 利用 CAD 零組件建立模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam2 - 學員學號 \n', 'tags': '', 'url': 'Exam2.html'}, {'title': 'Exam3', 'text': 'Exam3 (20%): Webots 機電模擬場景的協同設計 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam3 - 學員學號 \n', 'tags': '', 'url': 'Exam3.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};