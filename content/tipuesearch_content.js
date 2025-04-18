var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 學員作業網站:  https://mdecd2025.github.io/hw-zhe41223118/ \n 學員作業倉儲:\xa0 https://github.com/mdecd2025/hw-zhe41223118 \n \n 課程代號: cd2025 \n Teams 線上教學： \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Integrate', 'text': '除了每周上課內容任務外，小組作業個人製作部分，依序整理至此目錄下。 \n', 'tags': '', 'url': 'Integrate.html'}, {'title': 'w1', 'text': '任務： \n 分組團隊  (Teams)  建立後，參考 說明 後，將各班各學員與各團隊的倉儲與網站連結，分別放入標題為 list  (使用第一階標題)  的網頁中。 \n \n 甲乙班學員網站及倉儲整理 \n from browser import html, document\n\n# 讀取甲班資料\nurl = "https://mde.tw/list/2a.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\nbrython_div1 = document["brython_div1"]\ncount = 0\n\n# 插入甲班標題\nbrython_div1 <= html.H3("甲班")\n\n# 顯示甲班的學生資料\nfor i in all_stud:\n    count += 1\n    stud = i.split("\\t")\n    stud_num = stud[0]\n    github = stud[1]\n    brython_div1 <= str(count) + ". " + html.A(str(stud_num), href="https://mdecd2025.github.io/hw-" + str(github))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/hw-" + str(github))\n    brython_div1 <= html.BR()\n\n# 讀取乙班資料\nurl = "https://mde.tw/list/2b.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\ncount = 0\n\n# 插入乙班標題\nbrython_div1 <= html.H3("乙班")\n\n# 顯示乙班的學生資料\nfor i in all_stud:\n    count += 1\n    stud = i.split("\\t")\n    stud_num = stud[0]\n    github = stud[1]\n    brython_div1 <= str(count) + ". " + html.A(str(stud_num), href="https://mdecd2025.github.io/hw-" + str(github))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/hw-" + str(github))\n    brython_div1 <= html.BR()\n \n \n 甲乙兩班團隊網站及倉儲整理 \n from browser import document, html\n\n# 顯示甲班標題\nbrython_div1 = document["brython_div1"]\nbrython_div1 <= html.H3("甲班")  # 這行會顯示 "甲班" 標題\n\nnum = 11\nfor i in range(num):\n    brython_div1 <= str(i+1) + ". " + html.A("2a-ag" + str(i+1), href="https://mdecd2025.github.io/2a-" + "ag" + str(i+1))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/2a-" + "ag" + str(i+1))\n    brython_div1 <= html.BR()\n\n# 顯示乙班標題\nbrython_div1 <= html.H3("乙班")  # 這行會顯示 "乙班" 標題\n\nfor i in range(num):\n    brython_div1 <= str(i+1) + ". " + html.A("2b-g" + str(i+1), href="https://mdecd2025.github.io/2b-" + "g" + str(i+1))\n    brython_div1 <= " / " + html.A("repo", href="https://github.com/mdecd2025/2b-" + "g" + str(i+1))\n    brython_div1 <= html.BR()\n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w3', 'text': '列出各班目前尚未納入分組的學員名單。 \n # 甲班學員資料處理\nurl = "https://mde.tw/list/2a.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\na_all_members = [\'41223154\', \'41271125\', \'41271158\', \'41271146\', \'41271131\', \'CYG41223103\', \'41223102\', \'41023128\', \'41023137\', \'41223137\', \'41223157\', \'41223156\', \'otakuyoyo\', \'41223141\', \'41223113\', \'kim41223114\', \'joeisme1208\', \'41223116\', \'41223144\', \'41223140\', \'41223143\', \'41223138\', \'41223134\', \'41223136\', \'zhe41223118\', \'Spirit0224\', \'yuhao-08\', \'41223158\', \'Ren911308\', \'41223150\', \'Manto8\', \'CYA41223106\', \'yan21ed\', \'Lin41223107\', \'41223133\', \'hong41223129\', \'41223110\', \'41223147\', \'Linjiahong41223125\', \'CHN41223132\', \'Yu-Fang-Hong\', \'41023111\', \'yckaooooo\', \'kolas911205\', \'41023105\', \'40932134\', \'41223104\', \'yan41223101\', \'41223105\', \'41223153\', \'41223120\', \'41223152\', \'G8People\', \'WSE41223112\', \'41223146\', \'41223119\']\n\n# 顯示甲班標題\nprint("甲班:")\nfor i in all_stud:\n    drop_n = i.rstrip("\\n")\n    stud = drop_n.split("\\t")\n    stud_num = stud[0]\n    stud_github = stud[1]\n    if stud_github not in a_all_members:\n        print(stud_num)\n\n# 乙班學員資料處理\nurl = "https://mde.tw/list/2b.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\nb_all_members = [\'41223251\', \'41223211\', \'41223245\', \'41223243\', \'jjjay41223212\', \'leeshaowei0716\', \'41223234\', \'41223209\', \'41223205\', \'41223201\', \'41223202\', \'41223208-hw\', \'41223216\', \'41223217\', \'41223248\', \'emma0312\', \'41223242\', \'41223203\', \'41223144\', \'41223235\', \'RAY41223215\', \'hyy41223228\', \'41223227\', \'41223206\', \'41223226-0\', \'Cloud41223237\', \'Yujenchuang\', \'41223225\', \'ljg41223220\', \'supowen\', \'jacky93111\', \'41223246\', \'Liu41223244\', \'41223236\', \'41223219\', \'41271237\', \'41223249\', \'41223229\', \'41223224\', \'41223222\', \'41223231\', \'linryan23\', \'41023114\', \'41223230\', \'timluo123\', \'CYC41223247\', \'41223218\', \'ych0227\', \'41023215\', \'41023216\', \'41023213\', \'41071203\', \'41071204\', \'41071202\', \'c-ching\', \'YUN4\', \'tseYU000\', \'snowfall-killer\', \'junpig10\']\n\n# 顯示乙班標題\nprint("\\n乙班:")\nfor i in all_stud:\n    drop_n = i.rstrip("\\n")\n    stud = drop_n.split("\\t")\n    stud_num = stud[0]\n    stud_github = stud[1]\n    if stud_github not in b_all_members:\n        print(stud_num)\n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '已知目前學員的作業倉儲無法在 IPv6 位址設定時正確運作，必須下載\xa0 cmsimde_w4.7z ， 解開壓縮檔案後，替換倉儲中的 cmsimde 目錄 \n \n \n 開始建立 Webots 模擬場景： \n 平面四連桿的尺寸設計: 固定桿長度為 1m, 主動旋轉桿長度為 0.4m, 第二旋轉桿長度為 0.6m, 第三旋轉桿長度為 0.9m. \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': 'cadlab 網路設定：\xa0 IPV6設定範例下載 \n (註：以管理者身分執行的兩個檔案前需如果不是自己的電腦，需將系統重新登入後再依序執行兩個檔案) \n \n Webots 開啟、新建工作資料夾到 利用 box  物件 建立 link ，利用  HingeJoint 建立旋轉軸 ，並且 利用 Python  controller 程式 控制 link 的旋轉 ： \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '如何啟動webots：在本學期可攜程式的start.bat中，已經有在可攜上啟動的程式，只需確認 Webots_2025a_web.7z \xa0是否壓縮放入可攜套件 ( portable_wcm2025.7z ) 的 data 目錄中，如是使用舊版的可攜套件，也可在.bat啟動編碼中自行設定加入： \n REM for Webots\nset PYTHON_PATH=%Disk%:\\Python313\n \nREM for webots\nset  path_webots=%Disk%:\\Webots_2025a\\msys64\\mingw64\\bin;%Disk%:\\Webots_2025a\\msys64\\usr\\bin\n \npath=%Disk%:;%path_python%;%path_git%;%path_copsim%;%path_msys2%;%path_miketex%;%path_flutter%;%path_node%;%path_tcc%;%path_postgresql%;%path_range%;%path_lua%;%path_core%;%path_putty%;%path_vscode%;%RUST_PATH%;%path_erlang%;%path_nodejs%;%path_haskell%;%path_scite%;%path_xsltproc%;%path_gnuplot%;%path_openssl%;%path_poppler%;%path_webots%;%path_blender%;%path%;\n \n 即可。 \n (常見問題：解壓縮檔案內檔案還有一層，如未依照自己設定路徑放置，webots會無法開啟 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  有些人還在使用舊版可攜程式，.bat沒有webots啟動設定 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  在開啟webots時系統會有跳出警告防火牆，其中一定要選擇允許，否則防火牆會擋) \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '本週因連假而未上課，將當週上課班級上課內容整理至此。 \n 建立 fourbar box 過程中的要點： \n \n 各 Solid - Shape - geometry 在建立 open chain 機構時，可以在尚未設定 physics 之前單軸運轉，但 Webots 牽涉需要模擬 closed chain 機構時，各 Solid - Shape -geometry 則必須設定 boundingObject 與 physics 才能透過 solidReference 進行 dynamics 聯立運算，亦即 Webots 在模擬封閉機構時，只能處理 Dynamics 模擬。\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (原因是其模擬運算是從\xa0 ODE \xa0動力程式庫修改而來，並沒有附加 closed chain 的 kinematics 運算) \n 當個別 link 採 box 建立時，為了要符合其 kinematics 運動約束條件，各桿件的起始條件必須滿足 fourbar linkage 的約束條件，因此只有 link1 旋轉 90 度，可以在 x 與 y 軸同動的情況下無需透 pose 進行局部座標轉換, 但 link2 與 link3 在納入 Shape 之前必須立 pose 節點置入額外的座標轉換。 \n 各 link 的 boundingObject 欄位，可以透過其 link Shape 採 USE 的方式重用。 \n 最後 joint4 的旋轉中心則透過 solidReference 與 link3 的端點座標重合，才能完成 closed chain 的動力約束條件模擬。 \n \n \n \n (最後bsll部分也已約束完成如下圖，或 下載檔案 查看) \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '複習webots \xa0 SolidReference \xa0 節點的用法說明，用在 Joint 節點的 endPoint 欄位中，用來指向一個現有的 Solid 或靜態環境  <static environment> 。通過這種方式，可以閉合機械迴圈。 \n 當指向一個 Solid 時，唯一的限制是 Solid 和 Joint 必須是某個共同上層 Solid 的下層。 \n 意思即是指 SolidReference 是一個引用類型，允許在 Joint 節點的 endPoint 欄位中指定某個目標。 \n 它可以指向兩種類型的對象： \n \n 現有的 Solid：這是一個具體的實體，但這個 Solid 和 Joint 必須是某個共同上層 Solid 的下層。 \n 靜態環境 <static environment>：這通常指的是不動的參考框架（例如地面或固定基座） \n \n 第一作法： \n 若將 fourbar linkage 的 joint4 設置在 base link 的最右端，然後將 joint4 的 endPoint 欄位，設為 SolidReference 指向 link3，即可符合 Soild (link3) 與 Joint (joint4) 都是某個共同上層 Solid (base) 的下層。 \n 第二作法： \n 可以將 fourbar linkage 的 joint4 設置在 link3 的末端，然後將 joint4 的 endPoint 欄位指向  <static environment> ，讓 link3 的末端固定在 ground (其作用與固定在 base 節點相同)。 \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '本週為統整先前所完成的各週的進度、作業網頁內容以及心得和錄製其中自評影片。 \n 詳細至 這個目錄 \n \n webots配合計數器(七段顯示器)，webots版本問題，最後投籃機重點交代。', 'tags': '', 'url': 'w9.html'}, {'title': 'tasks', 'text': 'task1 與 task2 任務為建立可在 近端維護個人作業與協同作業 的前置準備工作： \n 1. \xa0 task1 (自行製作可攜程式系統) \n 2.  task2 ( SSH 協定執行作業倉儲的推送) \n \n task3 與 task4 為  HW2  的內容： \n 1.  task3 ( Solvespace  建立 平面四連桿 系統零組件) \n 2.  task4 ( Onshape  建立平面 四連桿 系統零組件) \n \n task5 與 task6 為  HW3  的 主要 內容 \n 1.  task5 (Webots Tutorial 1 ~3) \n 2.  task6 (Webots Tutorial 4 ~6) \n', 'tags': '', 'url': 'tasks.html'}, {'title': 'task1', 'text': '下方 python版本更新影片缺少內容補充 ： \n 1. \xa0 以 python get-pip.py 安裝 pip 工具, 完成後，之後以 pip list 確認 pip.exe 已經配置完成 \n 2. \xa0以 pip install flask flask_cors bs4 lxml pelican markdown 安裝 cmsimde 網際內容管理系統啟動所需的 Python模組 \n 補做上以上兩件後，便可使用 可攜系統中的Python 3.13.2套件 來維護個人作業倉儲與分組倉儲 \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '(注意要點：如是設定IPV6-putty時proxy設定需將None調為HTTP) \n 此影片因使用 regedit 指令後後續內容缺失，以下為補充: \n 1. 利用 命令列 regedit  指令進入後，在 HKEY_CURRENT_USER 內 SOFTWARE 裡 SimonTatham位置，滑鼠右鍵將此登錄設定檔案【 匯出 】存入可攜程式  start_ipv6.bat 所在目錄 。 (名稱隨意) \n 2.  將指定的倉儲帳號下的分支克隆後即可完成 \n \xa0 \xa0 例：git clone --recurse-submodules git@(.ppk名稱):(倉儲帳號)/(倉儲分支名稱).git\xa0 \n \xa0 \xa0操作依據有參考整理重點的- 這個網站 \n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'task3', 'text': '使用 Solvespace 建立平面四連桿系統零組件 \n 題目 \n 完成檔： 41223118_fourbar_slvs.7z \n 影片： \n \n \n', 'tags': '', 'url': 'task3.html'}, {'title': 'task4', 'text': '2a分組網站與倉儲連結 \n 2b分組網站與倉儲連結 \n 因為上列程式已經給出兩班當時已經參與分組的學員 Github 帳號，因此只需要從\xa0 https://mde.tw/list/2a.txt \xa0讀取學員的學號與 Github 帳號，並且在 for 迴圈中，逐一用學員的 Github 帳號相對於各班已經參與分組的學員 Github 帳號，並且列出特定學員的 Github 帳號不在前述已經參與分組的學員帳號數列中，即可列出截至當時尚未那組的學員學號。 \n # 甲班學員資料處理\nurl = "https://mde.tw/list/2a.txt"\ndata = open(url).readlines()\nall_stud = data[1:]\na_all_members = [\'41223154\', \'41271125\', \'41271158\', \'41271146\', \'41271131\', \'CYG41223103\', \'41223102\', \'41023128\', \'41023137\', \'41223137\', \'41223157\', \'41223156\', \'otakuyoyo\', \'41223141\', \'41223113\', \'kim41223114\', \'joeisme1208\', \'41223116\', \'41223144\', \'41223140\', \'41223143\', \'41223138\', \'41223134\', \'41223136\', \'zhe41223118\', \'Spirit0224\', \'yuhao-08\', \'41223158\', \'Ren911308\', \'41223150\', \'Manto8\', \'CYA41223106\', \'yan21ed\', \'Lin41223107\', \'41223133\', \'hong41223129\', \'41223110\', \'41223147\', \'Linjiahong41223125\', \'CHN41223132\', \'Yu-Fang-Hong\', \'41023111\', \'yckaooooo\', \'kolas911205\', \'41023105\', \'40932134\', \'41223104\', \'yan41223101\', \'41223105\', \'41223153\', \'41223120\', \'41223152\', \'G8People\', \'WSE41223112\', \'41223146\', \'41223119\']\n \n# 顯示甲班標題\nprint("甲班:")\nfor i in all_stud:\n    drop_n = i.rstrip("\\n")\n    stud = drop_n.split("\\t")\n    stud_num = stud[0]\n    stud_github = stud[1]\n    if stud_github not in a_all_members:\n        print(stud_num) \n 2a未加入團隊學員', 'tags': '', 'url': 'task4.html'}, {'title': 'task5', 'text': '1. 請用繁體中文詳細說明下列 資料 ：( 41223136 ) \n Q1：什麼是Webots? \n Webots是一款專業的移動機器人模擬軟件，提供了3D虛擬環境，支持物理屬性設計，並且可創建不同類型的機器人(輪式、腿式、飛行)，並添加傳感器和執行器。支持單獨編程機器人以實現特定行為，提供大量模型和示例。模擬成功後，可以將程序轉移至真實的機器人，支持擴展新接口。 \n Q2：我可以用Webots做什麼? \n 應用領域：適用在移動機器人原型設計、運動研究、多代理系統、適應行為研究。 \n 行業範圍：涵蓋學術、汽車、航空、吸塵器、玩具等行業。 \n 教育用途：支持機器人學和編程教學（C/C++/Java/Python） \n 競賽：可用於機器人比賽。 \n Q3：要使用Webots，我需要知道什麼? \n \n 程式語言知識 ：需具備 C、C++、Java、Python或MATLAB 的基本知識來撰寫機器人控制器。若不熟悉語言可使用 簡單圖形化程式語言BotStudio編程 (適用於e-puck和Hemisson機器人) \n 3D模型創建：需了解 3D電腦圖形 和 VRML97 描述語言。 \n \n Q4：什麼是世界? \n \n 世界定義：描述3D涵蓋機器人及其環境的所有屬性(如位置、方向、幾何、外觀、物理屬性等) \n 層次結構：物件以層次方式組織，可包含其他物件(輪子、感測器、關節等) \n 功能與限制：(.wbt)不含控制器程示碼，只指定每個機器人所需的控制器名稱。 \n 儲存位置：檔案以".wbt"格式儲存，位於Webots專案的"worlds"子目錄 \n \n Q5：什麼是控制器? \n \n 控制器定義：控制器是用來控制world檔案中機器人的電腦程式 \n 運行機制：模擬開始時，Webots為每個機器人啟動獨立的控制進程，多個機器人可共用同一程式碼，但每個機器人有獨立進程。 \n 儲存位置：控制器檔案儲存在專案的"controllers"子目錄 \n \n 這是Webots中控制器的 核心概念 ， 強調其獨立性與語言支援的多樣性 。 \n Q6：什麼是監督控制器? \n \n 監督控制器定義：當機器人的 supervisor欄位設為TURE ，控制器成為監督控制器。能執行人類操作員的任務，而非真實機器人能完成的動作。 \n 特權操作：與一般控制器不同，監督控制器擁有特權功能，包括模擬控制，如隨機移動機器人、錄製模擬影片等。 \n \n 2. 請整理 網頁 中重要的英文單字與用法，並且針對其中所使用的英文文法逐句說明 ： ( 41223122 ) \n \n \n Mobile robot simulation （移動機器人模擬） \n 差異 ：英文中的「simulation」指的是在虛擬環境中模擬機器人行為，而中文「模擬」同樣表示模仿，但在某些語境下，可能沒有英文「simulation」那麼強烈的虛擬環境暗示。 \n \n Rapid prototyping （快速原型設計） \n 差異 ：英文「prototyping」具體指「製作原型」這個過程，而中文「原型設計」更偏向結果導向，較少強調「製作過程」的含義。 \n \n Physics properties （物理屬性） \n 差異 ：英文「properties」除了「屬性」，也可以指物理環境中的具體特徵和參數，而中文的「屬性」更多強調事物的性質，而不一定包含具體數值。 \n \n Locomotion schemes （移動方式） \n 差異 ：英文「locomotion」特指機器人或動物的移動方式，包括步行、飛行等具體方式；而中文「移動」泛指動作，涵蓋範圍更廣泛。英文「schemes」強調設計、計劃的結構，但中文「方式」沒有強烈的規劃意味。 \n \n Controller program （控制程式） \n 差異 ：英文「controller」強調設備或程式的控制功能，而中文「控制」可能更多指行為，而非具體裝置。 \n \n Robot models （機器人模型） \n 差異 ：英文「model」不僅指模型，還可以包含系統設計的概念，而中文「模型」更偏向於外形或結構，缺乏英文中「概念模型」的深層意義。 \n \n Swarm intelligence （群體智能） \n 差異 ：英文「swarm」特指動物或機器人的群體行動，並且有合作與集體行為的含義，而中文「群體」也可指單純的個體聚集，未必強調合作。 \n \n Genetic algorithm （遺傳算法） \n 差異 ：英文「genetic」在此術語中引用遺傳學理論，而中文「遺傳」通常與生物學相關，在技術環境下可能需要具體說明該算法如何模仿生物遺傳過程。 \n \n Neural networks （神經網絡） \n 差異 ：英文中的「neural」源於生物神經系統，並引申至機器學習模型，而中文「神經」更多指生物概念，除非在明確的技術背景下才會引申至計算領域。 \n \n Artificial intelligence (AI) （人工智能） \n 差異 ：英文「artificial intelligence」是技術術語，指模擬人類智能的系統，中文「人工智能」直接翻譯，但中文的「人工」有時強調「人為」製造，可能略有不同的語感。 \n \n \n Supervisor controller （監督者控制程式） 差異 ：英文「supervisor」在此指具有高級管理功能的控制器，而中文「監督者」更多強調「人」的角色，控制程式翻譯時可能會弱化其技術層面的管理權限含義。 \n \n \n Multi-agent research （多智能體研究） 差異 ：英文「agent」具備自主行為或決策功能，中文「智能體」強調的是智能或行動個體，但「體」的翻譯可能較模糊，沒有完全涵蓋英文中「agent」的主動性和自決性。 \n \n \n Simulation control （模擬控制） 差異 ：英文「simulation」強調在虛擬或模擬環境中的控制，而中文「模擬控制」雖然意義相同，但「模擬」一詞在某些語境下會與「模仿」混淆。 \n \n \n 3D virtual worlds （3D 虛擬世界） 差異 ：英文「virtual worlds」通常指的是由電腦生成的虛擬環境，而中文「虛擬世界」在非技術環境中也可能指非現實的想像世界，因此技術語境中需要強調其數位屬性。 \n \n 3. 請摘要出下列內容：(放入英文文章內容) ：( 41223134 ) \n \n What is Webots? Webots is a professional mobile robot simulation software that provides a rapid prototyping environment. It allows users to create 3D virtual worlds with physics properties (e.g., mass, joints, friction) and add passive or active objects like mobile robots. Users can equip robots with sensors and actuators and program them for desired behaviors. It offers numerous robot models, examples, and interfaces to transfer simulations to real robots like e-puck or Nao. \n \n \n What can I do with Webots? Webots is ideal for research and education in mobile robotics, supporting projects like robot prototyping (e.g., academic, automotive, toy industries), locomotion research (legged, humanoid robots), multi-agent studies (swarm intelligence, collaborative robots), and adaptive behavior research (genetic algorithms, AI). It’s also used for teaching robotics and robot competitions. \n \n \n What do I need to know to use Webots? Basic knowledge of C, C++, Java, Python, or MATLAB is required to program controllers, though beginners can use the graphical BotStudio language for certain robots (e.g., e-puck). To create custom models or environments, familiarity with 3D graphics and VRML97 is needed for designing or importing 3D objects. \n \n \n How do I get User Support? Cyberbotics offers paid support via Premier Service plans and custom development. Community-based support is available through Robotics StackExchange (webots tag), GitHub Discussions (development questions), GitHub Issues (bug reports), and Discord (quick discussions), though responses aren’t guaranteed. \n \n \n Webots Simulation A Webots simulation consists of a world file (.wbt) defining robots and their environment, controller programs (in C/C++/Java/Python/MATLAB), and an optional physics plugin (in C/C++) to adjust physics behavior. World files may rely on external PROTO files and textures. \n \n \n What is a World? A "world" in Webots is a 3D description of robots and their environment, detailing properties like position, geometry, appearance, and physics. Organized hierarchically (like VRML97), world files (.wbt) specify controller names but don’t include the controller code itself. \n \n \n What is a Controller? A controller is a program that directs a robot in a world file, written in C, C++, Java, Python, or MATLAB. Webots launches each controller as a separate process per robot at simulation start. Some languages require compilation (e.g., C/C++), others interpretation (e.g., Python), with files stored in the "controllers" subdirectory. \n \n \n What is a Supervisor Controller? A supervisor controller, tied to a robot with its "supervisor" field set to TRUE, can perform privileged actions (e.g., simulation control, moving robots, recording videos) typically reserved for human operators. Written in any supported language, it has greater capabilities than standard controllers. \n \n 4. 請列出上述文章中的重要的英文單字與解釋，以及出現在文句中的用法 ：( 41223131 ) \n \n 5. 請詳細說明如何採手動方式在 Webots 建立下列場景 ：( 41223158 ) \n 步驟 1：創建新世界 \n \n \n 啟動 Webots ： \n \n 打開 Webots 軟體，並進入主介面。 \n \n \n \n 創建新世界 ： \n \n 在 Webots 的主畫面中，選擇 \xa0 File \xa0 > \xa0 New World ，這會創建一個名為 \xa0 untitled.wbt \xa0 的新世界。 \n 新創建的世界會有一個預設的地面，並且已經設定了一些基本參數。 \n \n \n \n 步驟 2：設置桌面結構 \n \n \n 新增桌子（Solid） ： \n \n 在 \xa0 Scene Tree \xa0 中，右鍵點選 \xa0 WorldInfo \xa0 節點，選擇 \xa0 Add \xa0 > \xa0 Solid ，會在場景中新增一個 \xa0 Solid \xa0 節點。這個 \xa0 Solid \xa0 節點將代表你的桌子。 \n \n \n \n 新增桌面的形狀（Shape） ： \n \n 在 \xa0 Solid \xa0 節點下，右鍵點選 \xa0 Solid \xa0 節點，選擇 \xa0 Add \xa0 > \xa0 Shape \xa0 > \xa0 Box 。這將創建一個長方體來代表桌面。 \n \n \n \n 設定桌子尺寸 ： \n \n 點選 \xa0 Box \xa0 節點，然後在右側的屬性面板中設定 \xa0 size \xa0 參數來調整桌子的大小。假設我們的桌子尺寸是 2 米長，1 米寬，0.1 米高，設定如下： \n \n \n \n \n \n \n \n 1 \n \n \n \n size 2 0.1 1 \n \n \n \n \n \n \n \n \n \n 設置桌子的顏色 ： \n \n 點選 \xa0 Solid \xa0 節點，右鍵選擇 \xa0 Appearance ，然後設定材質的顏色。你可以選擇木色或其他顏色來模擬桌子表面。 \n \n \n \n 步驟 3：創建籃球框 \n \n \n 新增籃框（Solid） ： \n \n 在 \xa0 Scene Tree \xa0 中，右鍵點選 \xa0 WorldInfo \xa0 節點，選擇 \xa0 Add \xa0 > \xa0 Solid ，再右鍵選擇新創建的 \xa0 Solid \xa0 節點，選擇 \xa0 Add \xa0 > \xa0 Shape \xa0 > \xa0 Cylinder 。這將創建一個圓柱形的籃框。 \n \n \n \n 設置籃框的大小與位置 ： \n \n 點選 \xa0 Cylinder \xa0 節點，並在右側屬性面板中設定 \xa0 radius \xa0 和 \xa0 height 。例如： \n \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n radius 0.2 \n height 0.05 \n \n \n \n \n \n \n \n \n 設定 \xa0 translation \xa0 來調整籃框的位置。假設我們要把籃框放置在桌面上方，並放置在桌子的遠端。設定如下： \n \n \n \n \n \n \n \n 1 \n \n \n \n translation 0 0.6 -0.5 \n \n \n \n \n \n \n \n 這樣，籃框就會位於桌子的上方，距離桌面的高度為 0.6 米。 \n \n \n 步驟 4：創建籃球 \n \n \n 新增籃球（Solid） ： \n \n 在 \xa0 Scene Tree \xa0 中，右鍵點選 \xa0 WorldInfo \xa0 節點，選擇 \xa0 Add \xa0 > \xa0 Solid ，然後右鍵選擇新創建的 \xa0 Solid \xa0 節點，選擇 \xa0 Add \xa0 > \xa0 Shape \xa0 > \xa0 Sphere 。這將創建一個球形的籃球。 \n \n \n \n 設定籃球大小與顏色 ： \n \n 點選 \xa0 Sphere \xa0 節點，在右側屬性面板中設定 \xa0 radius ，例如將 \xa0 radius \xa0 設定為 0.1 米，代表籃球的直徑為 20 公分。 \n \n \n \n \n \n \n \n 1 \n \n \n \n radius 0.1 \n \n \n \n \n \n \n \n \n 設定顏色，為了讓籃球看起來像真實的籃球，可以選擇橙色。這樣籃球就會顯示為橙色。 \n \n \n \n 設定籃球的位置 ： \n \n 設定 \xa0 translation ，將籃球放置於桌面上方，距離桌面大約 0.2 米。 \n \n \n \n \n \n \n \n 1 \n \n \n \n translation 0 0.2 -0.5 \n \n \n \n \n \n \n \n \n \n 步驟 5：設置物理屬性 \n \n \n 設定桌子與籃框的物理屬性 ： \n \n \n 桌子和籃框不需要太多的彈性，但需要摩擦力，這樣物體才能有真實的接觸效果。 \n \n \n 在 \xa0 Solid \xa0 節點中添加物理屬性設定： \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n \n \n \n Physics {  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 density 1.0  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 friction 0.9  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 bounce 0.0 # 桌子和籃框不會反彈  \n } \n \n \n \n \n \n \n \n \n \n \n 設定籃球的物理屬性 ： \n \n 籃球需要較高的彈性，以便它能夠反彈。可以設置以下屬性： \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n \n \n \n Physics { \n \xa0\xa0\xa0\xa0 density 0.5 \n \xa0\xa0\xa0\xa0 friction 0.3 \n \xa0\xa0\xa0\xa0 bounce 0.7\xa0 # 籃球有較高的反彈 \n } \n \n \n \n \n \n \n \n \n \n 步驟 6：創建控制器 \n \n \n 創建 Python 控制器程式 ： \n \n \n 在 Webots 中，你需要使用控制器來控制物體的行為，例如投籃等。創建一個新的 Python 控制器，並將其命名為 \xa0 basketball_controller.py 。 \n \n \n \n \n 編寫控制器邏輯 ： \n \n 控制器的主要目的是監控籃球的運動，並在籃球進入籃框時進行計分。下面是一個簡單的範例程式，會檢查籃球是否進入籃框範圍。 \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n \n \n \n 範例程式碼： \n \xa0 \n from controller import Robot \n \xa0 \n # 創建 robot 物件來控制 Webots 模擬 \n robot = Robot() \n timestep = int(robot.getBasicTimeStep()) \n \xa0 \n # 獲取籃球的物體 \n ball = robot.getFromDef("BASKETBALL") \n ball_position = ball.getPosition() \n \xa0 \n # 模擬循環 \n while robot.step(timestep) != -1: \n \xa0\xa0\xa0\xa0 # 更新籃球的位置 \n \xa0\xa0\xa0\xa0 ball_position = ball.getPosition() \n \xa0 \n \xa0\xa0\xa0\xa0 # 如果籃球進入籃框範圍，則顯示得分訊息 \n \xa0\xa0\xa0\xa0 if ball_position[0] > 0.5 and ball_position[0] <  1.5   and ball_position[1] > 0.5: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print("得分！") \n \n \n \n \n \n \n \n \n \n \n \n \n 連接控制器與世界 ： \n \n 在 Webots 中，點選 \xa0 WorldInfo \xa0 節點，在屬性面板中找到 \xa0 controller \xa0 屬性，並將其設置為剛創建的控制器程式名稱 \xa0 basketball_controller.py 。 \n \n \n \n 步驟 7：測試與調整 \n \n \n 啟動模擬 ： \n \n 點選 Webots 上方的 \xa0 Play \xa0 按鈕來啟動模擬。 \n 你應該可以看到籃球在桌子上彈跳，並且控制器會檢測籃球是否進入籃框並顯示得分。 \n \n \n \n 調整參數 ： \n \n 如果籃球的反彈效果或運動不符合預期，可以調整物理屬性（例如彈性、摩擦力、質量）來改善模擬效果。 \n \n \n \n 步驟 8：保存與分享 \n \n \n 保存世界檔案 ： \n \n 在 Webots 中，選擇 \xa0 File \xa0 > \xa0 Save \xa0 來保存你的 \xa0 .wbt \xa0 檔案。 \n \n \n \n 分享模擬 ： \n \n 你可以將 \xa0 .wbt \xa0 檔案和控制器程式（例如 \xa0 basketball_controller.py ）一起分享，讓其他人可以使用這個模擬。 \n \n \n \n 6. 希望可以手把手一步步說明該如何利用 圖形介面 menu  建立這個場景，過程中有那些要點必須特別注意 ？( 41223118 ) \n \n 步驟 1 ： 啟動 Webots 並創建新世界： \n \n \n 開啟 Webots 後，點擊菜單欄的「File」>「New World」 (Ctrl+N)-( 創建一個空白的仿真世界，檔案副檔名為  .wbt) \n \n 要點 ：儲存時選擇一個容易找到的路徑，避免後續找不到檔案。 \n \n 步驊 2 ：添加桌面（地面） \n \n \n \n \xa0 \xa0 \xa01.在場景樹（Scene Tree，左側）中，右鍵點擊頂層節點（預設為  WorldInfo ），選擇「Add Node」 \n \xa0 \xa0 \xa02.在節點選擇視窗中，展開「PROTO nodes (Webots Projects)」>「objects」>「floors」 \n \n \xa0 \xa0 \xa03.選擇  RectangleArena ，點擊「Add」 \n \xa0 \xa0 \xa04.在場景樹中點擊  RectangleArena ，右側屬性面板調整： \n \n \xa0 \xa0 \xa0 \xa0 \xa0(a.)size ：設為  1 0.5 （長 1m，寬 0.5m，模擬桌面大小） \n \n \xa0 \xa0 \xa0 \xa0 \xa0(b.)translation ：設為  0 0 0 （放在原點） \n \n \xa0 \xa0 \xa0 \xa0 \xa0(c.)appearance ：點擊後選擇  PBRAppearance ，設置  baseColor  為木頭色（如  0.6 0.3 0.1 ） \n \n 要點 ：確保地面有  Physics  節點（預設已有），以啟用物理互動 \n \n 步驟 3 ：添加籃框 \n \n \xa0 \xa0 \xa01.在場景樹中右鍵，選擇「Add Node」 \n \n \xa0 \xa0 \xa02.選擇  Base nodes  >  Solid ，命名為  BasketHoop \n \n \xa0 \xa0 \xa03.為  BasketHoop  添加子節點： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)右鍵  BasketHoop ，選擇「Add Node」>  Shape \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.)右鍵  Shape ，選擇「Add Node」>  Geometry  >  Cylinder \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (c.)調整  Cylinder  屬性： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (I) radius ：設為  0.1 （籃框半徑 10cm） \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(II) height ：設為  0.02 （籃框厚度 2cm） \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (III) subdivision ：設為  32 （圓滑度） \n \n \n \n \n \xa0 \xa0 \xa04.在  Shape  下添加  Appearance ，設為紅色（ baseColor  設為  1 0 0 ） \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)translation ：設為  0.4 0 0.3 （桌面邊緣後方，高度 30cm） \n \n \xa0 \xa0 \xa05.添加物理屬性： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)右鍵  BasketHoop ，選擇「Add Node」>  Physics （確保固定不動） \n \n 要點 ：籃框應為靜態物體，避免被球撞動 \n \n 步驟 4 ：添加籃網（簡化版） \n \n \n \xa0 \xa0 \xa01.在  BasketHoop  下右鍵，選擇「Add Node」>  Shape \n \n \xa0 \xa0 \xa02.添加  Geometry  >  Cone ，模擬籃網： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.) bottomRadius ：設為  0.1 （與籃框相同） \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.) height ：設為  0.15 （網長 15cm） \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (c.) side ：設為  TRUE ， bottom  設為  FALSE （空心錐形） \n \xa0 \xa0 \xa03.調整位置： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)translation ：設為  0 0 -0.075 （錐形從籃框向下延伸） \n \n \xa0 \xa0 \xa04.設置外觀： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)添加  Appearance ， baseColor  設為白色（ 1 1 1 ）， transparency  設為  0.5 （半透明網狀感） \n \n 要點 ：這裡簡化為錐形，實際網狀結構需更複雜的建模，若有需求可後續調整 \n \n \n 步驟 5 ：添加籃球 \n \xa0 \xa0 \xa01.在場景樹頂層右鍵，選擇「Add Node」>  Solid ，命名為  Basketball \n \xa0 \xa0 \xa02. 添加子節點： \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)Shape  >  Geometry  >  Sphere ： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (I)radius ：設為  0.03 （直徑約 6cm，小型籃球） \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.)Appearance ：設為橙色（ baseColor  設為  1 0.5 0 ） \n \n 要點 ：確保球有物理屬性，且位置不與桌面重疊，否則可能卡住 \n \n \n 步驟 6 ：添加投籃機制（簡化為槓桿）\n \xa0 \xa0 \xa01.在場景樹頂層右鍵，選擇「Add Node」>  Solid ，命名為  Launcher \n \xa0 \xa0 \xa02.添加子節點： \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)Shape  >  Geometry  >  Box ： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (I)size ：設為  0.2 0.05 0.01 （長 20cm，寬 5cm，厚 1cm） \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.)Appearance ：設為灰色（ baseColor  設為  0.5 0.5 0.5 ） \n \n\xa0 \xa0 \xa03.添加物理屬性： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.) Physics  >  mass  設為  0.2 \n \xa0 \xa0 \xa04.添加鉸鏈關節（模擬槓桿旋轉）： \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)在場景樹頂層右鍵，選擇「Add Node」>  HingeJoint \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.)在  HingeJoint  的  device  中添加  RotationalMotor ，命名為  LauncherMotor \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (c.)設置  jointParameters \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (I) anchor ：設為  -0.4 0 0 （鉸鏈固定在桌面前端） \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(II) axis ：設為  0 1 0 （沿 Y 軸旋轉） \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (d.)將  Launcher  拖入  HingeJoint  的  endPoint  欄位 \n \n \n \n \xa0 \xa0 \xa05.調整  Launcher  位置：\n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)translation ：設為  -0.3 0 0.005 （與桌面接觸） \n \n \n \n \n \n \n \n 要點 ：確保槓桿與球初始位置對齊，後續需編寫控制器讓其旋轉 \n \n \n 步驟 7 ：設置光源與背景 \n \n \xa0 \xa0 \xa01.添加光源： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)場景樹右鍵，選擇「Add Node」>  PointLight \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.)location ：設為  0 0 1 （桌面上方 1m） \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (c.)intensity ：設為  1 \n \n \n \n \n \xa0 \xa0 \xa02.添加背景： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.) 場景樹右鍵，選擇「Add Node」>  Background \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.) skyColor ：設為  0.5 0.5 1 （淺藍色天空） \n \n 要點 ：光源位置影響陰影效果，確保場景明亮可見 \n \n \n \n \n 步驟 8 ：保存與測試 \n \n \xa0 \xa0 \xa01.點擊「File」>「Save World」 \n \xa0 \xa0 \xa02.按工具欄「Play」按鈕運行仿真 \n \xa0 \xa0 \xa03.觀察： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (a.)球是否會因重力落在槓桿上 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (b.)籃框是否穩定 \n \n 要點 ：若球卡住或場景異常，檢查物體的  translation  是否重疊 \n \n \n 特別注意的要點 \n \n \n 物理屬性 ：\n \n 每個動態物體（如球、槓桿）必須有  Physics  節點，否則不會受重力影響。 \n 靜態物體（如籃框）也需  Physics ，但質量設為 0 或不設值。 \n \n \n 位置精確性 ：\n \n 避免物體初始位置重疊，否則可能導致仿真崩潰或物體彈飛。 \n 使用屬性面板輸入精確數值，而非僅靠 3D 視圖拖曳。 \n \n \n 關節與控制器 ：\n \n 投籃槓桿需要控制器（Controller）驅動  RotationalMotor ，這部分需額外編寫程式碼（例如用 Python 或 C）。 \n 測試時可手動調整槓桿角度（ position ），模擬投籃動作。 \n \n \n 比例與單位 ：\n \n Webots 使用公尺作為單位，確保所有尺寸（如籃球半徑、桌面大小）符合現實比例。 \n \n \n 性能優化 ：\n \n 避免添加過多複雜節點（如高細分網格），以免仿真變慢。 \n \n \n \n 後續建議 \n \n \n 控制器編寫 ：為  LauncherMotor  添加一個簡單控制器，讓槓桿按鍵觸發旋轉，模擬投籃。 \n 計分系統 ：添加  TouchSensor  到籃框，檢測球是否進籃。 \n \n', 'tags': '', 'url': 'task5.html'}, {'title': 'webots', 'text': '一套 開源3D機器人模擬器 ，支援實時物理模擬與多種程式語言（Python、C/C++、Java），可快速開發與測試機器人演算法。 \n \n ⚙️ 技術資訊 \n 結合了圖形用戶介面（基於 Qt 庫）、物理引擎（基於 Open Dynamics Engine 的分支）和 3D 渲染引擎（OpenGL 3.3）。它運行於 Windows、Linux 和 macOS。模擬可以導出為電影、互動 HTML 場景、動畫，甚至在線流式傳輸。機器人可以使用 C、C++、Python、Java、MATLAB 或 ROS 編程，使用簡單的 API 覆蓋所有基本的機器人需求。 \n \n \n 物理引擎 ：使用 ODE 模擬剛體、摩擦與碰撞 \n \n \n 感測器支援 ：攝影機、雷達、IMU、GPS \n \n \n 跨平台 ：Windows / Linux / macOS \n \n \n 語言支援 ：Python、C/C++、Java、MATLAB \n \n \n 整合性 ：相容 ROS / ROS2，便於真實機器人部署 \n \n \n \n 🌟 優勢與創新 \n \n \n 高擬真環境，感測資料接近實機 \n \n 高質量的免費開源技術，用於模擬機器人系統。 \n \n 提供真實機器人模型（如 TurtleBot、NAO） \n \n 利用 Webots 用戶社區的貢獻，包括機器人、傳感器、執行器、物體、環境、基準測試、控制程序等模型。 \n \n 支援 AI 與強化學習訓練 \n \n \n 可動態控制模擬流程（Supervisor API） \n \n \n 免費且開源，擴充性強 \n \n \n \n 📚 初學者資源 \n \n \n 官方網站： https://cyberbotics.com \n \n \n GitHub 原始碼與範例： https://github.com/cyberbotics/webots \n \n \n 教學文檔： Webots Documentation \n \n \n YouTube 教學頻道： Cyberbotics Channel \n \n \n', 'tags': '', 'url': 'webots.html'}, {'title': 'blender', 'text': 'Manual 、 \n 基本操作： \n 🖱️ 介面與控制 \n \n \n 旋轉視角 ：中鍵滑鼠拖曳 \n \n \n 平移視角 ：Shift + 中鍵拖曳 \n \n \n 縮放視角 ：滾輪滑動 \n \n \n \n 🔧 模型操作 \n \n \n 選取物件 ：左鍵點擊 \n \n \n 移動 ： G （Grab） \n \n \n 旋轉 ： R （Rotate） \n \n \n 縮放 ： S （Scale） \n \n \n 確認操作 ：左鍵點一下或 Enter \n \n \n 取消操作 ：右鍵點一下或 Esc \n \n \n \n 🧱 模式切換 \n \n \n Object Mode ：物件層級操作（預設） \n \n \n Edit Mode ：細部編輯（按  Tab  切換） \n \n \n \n 📏 快捷鍵小技巧 \n \n \n X ：刪除物件 \n \n \n Shift + A ：新增物件（Add） \n \n \n Ctrl + Z  /  Shift + Ctrl + Z ：復原 / 重做 \n \n \n NumPad 1/3/7 ：前視 / 側視 / 上視（搭配 Ctrl 反向） \n \n', 'tags': '', 'url': 'blender.html'}, {'title': 'task6', 'text': '利用 Solvespace 繪製的 7 段顯示器零組件檔案：\xa0 score_counter.7z \n 利用  r、b、y、g 按鍵改變 7 段顯示器 中的  f  零件示範場景：\xa0 7_segment_display.7z \n 執行結果如下： \n Webots Tutorial (HW3) \n 1. 啟動 Webots 串流模式： \n \xa0 \xa0使用以下指令開啟 Webots 並啟用串流伺服器： \n \n \n \n \n \n \n 1 \n \n \n \n webotsw  - - stream \n \n \n \n \n \n \n \n 2.\xa0 \xa0 預設埠號： \xa0 1234 \xa0 \xa0 \xa0使用瀏覽器連線至： \n \n \n \n 本地端： http://localhost:1234 \n \n \n 遠端機器： http://stream_server_ip:1234 \n \n \n 3.\xa0 建議瀏覽器： \xa0 \xa0 Windows 環境下使用 Edge ，相容性較佳（支援 WebGL2） \n 4.\xa0 顯示投籃成績（Scoreboard / 計時器） \n \xa0a. 近端檢視： \n \n \n 利用 Webots \xa0 display \xa0 元件展示數字。 \n \n \n 限制： \xa0 僅在本機 Webots 視窗中可見，無法透過串流顯示。 \n \n \n \xa0b. 串流顯示（7 段顯示器實作）： \n \n \n 建模工具： \xa0 使用 Solvespace 繪製的 7 段顯示器模型（檔案： score_counter.7z ）。 \n \n \n 匯入模型： \n \n \n 在 Webots 中插入一個 \xa0 Solid \xa0 → \xa0 Shape \xa0 → \xa0 Mesh 。 \n \n \n url \xa0 指向各段（a ~ g）的 \xa0 .obj \xa0 檔案。 \n \n \n \n \n 變色顯示數字： \n \n \n 使用 \xa0 controller 程式 \xa0 來變更 Mesh 段的顏色（開：紅色／亮；關：灰色／暗）。 \n \n \n 每個數字由不同段（a-g）組成，模擬數字顯示效果。 \n \n \n \n \n 使用 Supervisor 模式： \n \n \n 可程式化操控每個 Mesh 的外觀（顏色控制、數字變換、倒數計時等）。 \n \n \n \n', 'tags': '', 'url': 'task6.html'}, {'title': 'Homework', 'text': '作業 (30%) \n HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n part1: \n 請各學員在 USB 隨身碟或個人電腦上完成 cd2025 課程所需的可攜系統配置: \n 下載  portable_wcm2025.7z  (330MB, 解開壓縮後 1.4GB) \n Webots_2025a.7z  (1.5 GB, 解開後約為 2.9GB, 可單獨運作) \n Webots_2025a_web.7z  (171 MB, 解開壓縮後約為 1GB, 必須連網運作) \n Blender4.2.7z \n part2: \n 請各學員完成可攜程式系統配置後, 利用 Webots R2025a 中寬度與高度都為 0.1m 的 box 物件建立一個簡單的平面四連桿機構模擬場景. \n base (基座) 長度 1m, link1 長度 0.4m, link2 長度 0.6m, link3 長度 0.9m, 各轉軸均為 HingeJoint, joint1 旋轉速度設定為 1radian/sec. \n part3: \n 模擬場景啟動後, 按下 s 鍵機構開始作動, 按下 p 鍵後機構暫停. \n 參考資料: \n cd2025_hw1_demo.7z \n HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 各學員請利用 CAD 系統依據 HW1 的連桿尺寸與運動方式, 配置適當大小的旋轉軸以及基座後, 利用 Webots R2025a 完成一個簡單的平面四連桿機構模擬場景. \n 參考資料: \n fourbar_slvs.7z \n HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 請各分組利用CAD 系統建立一個能在電腦桌 (1600W X 700D X 740H mm) 上運作的投籃機構 ( 參考影片 )後, 導入 Webots R2025a 套件, 建立一個能由使用者透過鍵盤按鍵操作, 且具備計分板的籃球遊戲機模擬系統. \n 參考資料: \n 參考資料: \n fourbar_ball_throwing_linkage.slvs \n sixbar_ball_throwing_linkage.slvs \n \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': 'HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW1 - 學員學號 \n 題目要求尺寸： 利用 box 幾何外形節點建立平面四連桿機構的模擬場景，要求地面 固定桿長度 1m ， 寬高各為 0.1m ， 第一桿長度 0.4m ， 第二桿長度 0.6m ， 第三桿長度 0.9m 。 \n 41223118-fourbar_box-w8.7z \n 這個版本還存在問題，三個webost檔案中link4腳還不能與base銜接。 \n \n 理解問題所在後，修正版本及影片： \n 41223118-fourbar_box-w9.7z \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW2 - 學員學號 \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW3 - 學員學號 \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Midterm', 'text': '本課程所繳交的期中成績為學員自評之學習期望成績. \n 期中考週的自評期望成績繳交流程: \n \n 整理先前所完成的各週的進度、作業網頁內容以及心得 \n 拍攝期中自評影片, 上傳至 Youtube 後, 以" 國立虎尾科技大學 - 機械設計工程系 - cd2025 期中自評- 學員學號 "為影片標題後嵌入本頁面中 \n 回填期中自評表單 \n 上傳學員期中成績 \n \n 各週進度：從 這個 目錄開始每週課程內容整理。 \n 各週網頁內容： \n 第一週至第三週為使用可攜環境和配合python程式來分類課程分組名單 \n 第四週至第五週為如何設定個人的IPV6網址及IPV6網路以.bat快速設定 (雖在這段時間也有接觸webots但只是些許理解還未實際操作) \n 第六週至現在第九週為webots連桿及模擬為主 (還有部分solvespace及Blender應用內容) \n 期中心得： \n 本學期課程內容可以說是重中之重，在前幾週還好，可攜、python應用，在前幾次的課程上也有了一些基礎，所以在處理上問題不多，可能重是重在後面教到的webots，這個軟體對於一些學長來說也是沒碰過的更何況我們，在摸索上真的到現在感覺連他的皮毛都還沒摸到，雖然有官網教學及問GTP輔助學習，但我覺得在學習上還是要以圖案或影片來輔助教學，真的單靠文字去理解，就我覺得來說學會的速度會很慢，不巧網上也沒有課程所教學的內容影片，又剛好本班因連假少上兩次課程，缺失的機會就只能靠各自回去自行摸索了。 \n 期中自評影片： \n (自評分數為：70，分析內容已打至影片資訊欄，webots為課程之重要核心，認為到現在還未將其熟練及製作出要求的完整結果，所以覺得如果其餘內容都做得完整，但就到期中而言，只能做到這樣很不滿意，所以認為如果能拿高分，在期中自評上只能得70。) \n \n \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'Exam', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 各學員利用 Webots R2025a 套件中的 Shape 物件, 隨堂建立指定的機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam2 (10%): 利用 CAD 零組件建立模擬場景\xa0 \n 各學員利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam3 (20%): Webots 機電模擬場景的協同設計 \n 各分組利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. 過程中各學員必須採同步協同模式, 維護從 Github Classroom 取得的分組協同倉儲以及網站. \n 協同分組方式: \n \n 分配學員負責利用 Solvespace 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 NX2312 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 Webots 建立機電系統模擬場景, 並利用 Python 程式進行控制, 過程中必須將建構過程拍成帶有說明字幕的影片上傳至分組網頁. \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'Exam1', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam1 - 學員學號 \n', 'tags': '', 'url': 'Exam1.html'}, {'title': 'Exam2', 'text': 'Exam2 (10%): 利用 CAD 零組件建立模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam2 - 學員學號 \n', 'tags': '', 'url': 'Exam2.html'}, {'title': 'Exam3', 'text': 'Exam3 (20%): Webots 機電模擬場景的協同設計 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam3 - 學員學號 \n', 'tags': '', 'url': 'Exam3.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};