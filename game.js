// 鱼类数据结构
const fishList = [
    // 普通鱼类
    { name: "小丑鱼", rarity: "普通", probability: 0.35, price: 10, desc: "色彩鲜艳的珊瑚礁居民" },
    { name: "鲭鱼", rarity: "普通", probability: 0.30, price: 15, desc: "常见的食用鱼类" },
    { name: "鲈鱼", rarity: "普通", probability: 0.25, price: 20, desc: "近海常见的掠食性鱼类" },
    { name: "沙丁鱼", rarity: "普通", probability: 0.35, price: 8, desc: "群居性小型鱼类" },
    { name: "鲤鱼", rarity: "普通", probability: 0.32, price: 12, desc: "淡水常见鱼类" },
    { name: "鲫鱼", rarity: "普通", probability: 0.30, price: 10, desc: "适应力强的淡水鱼" },
    { name: "秋刀鱼", rarity: "普通", probability: 0.28, price: 18, desc: "细长形的经济鱼类" },
    { name: "鲱鱼", rarity: "普通", probability: 0.30, price: 12, desc: "北大西洋常见鱼类" },
    { name: "罗非鱼", rarity: "普通", probability: 0.28, price: 15, desc: "快速生长的热带鱼类" },
    { name: "鳕鱼", rarity: "普通", probability: 0.25, price: 25, desc: "冷水域经济鱼类" },
    // 稀有鱼类
    { name: "石斑鱼", rarity: "稀有", probability: 0.15, price: 50, desc: "肉质鲜美的珍贵鱼种" },
    { name: "黄鳍金枪鱼", rarity: "稀有", probability: 0.10, price: 80, desc: "游速极快的远洋鱼类" },
    { name: "三文鱼", rarity: "稀有", probability: 0.13, price: 70, desc: "洄游性高价值鱼类" },
    { name: "鳗鱼", rarity: "稀有", probability: 0.14, price: 60, desc: "神秘的长条形鱼类" },
    { name: "比目鱼", rarity: "稀有", probability: 0.13, price: 55, desc: "扁平的特殊体型鱼类" },
    { name: "鲷鱼", rarity: "稀有", probability: 0.13, price: 65, desc: "高级日料常用鱼类" },
    { name: "鲑鱼", rarity: "稀有", probability: 0.14, price: 60, desc: "淡水繁殖的海水鱼" },
    { name: "鲟鱼", rarity: "稀有", probability: 0.12, price: 90, desc: "鱼子酱来源鱼类" },
    { name: "章鱼", rarity: "稀有", probability: 0.13, price: 75, desc: "聪明的头足类生物" },
    { name: "乌贼", rarity: "稀有", probability: 0.14, price: 50, desc: "喷墨逃生的软体动物" },
    // 史诗鱼类
    { name: "剑鱼", rarity: "史诗", probability: 0.05, price: 150, desc: "拥有长吻的大型掠食者" },
    { name: "旗鱼", rarity: "史诗", probability: 0.04, price: 180, desc: "游速最快的海洋鱼类" },
    { name: "马林鱼", rarity: "史诗", probability: 0.03, price: 200, desc: "大型远洋游戏鱼" },
    { name: "蓝鳍金枪鱼", rarity: "史诗", probability: 0.02, price: 300, desc: "最昂贵的食用鱼类" },
    { name: "皇带鱼", rarity: "史诗", probability: 0.03, price: 250, desc: "深海长带状神秘鱼类" },
    { name: "翻车鱼", rarity: "史诗", probability: 0.02, price: 220, desc: "体型巨大的奇特鱼类" },
    { name: "蝠鲼", rarity: "史诗", probability: 0.04, price: 180, desc: "海洋中的\"魔鬼鱼\"" },
    { name: "巨型石斑", rarity: "史诗", probability: 0.02, price: 280, desc: "可长到数百公斤" },
    { name: "六鳃鲨", rarity: "史诗", probability: 0.01, price: 320, desc: "古老的深海鲨鱼" },
    { name: "姥鲨", rarity: "史诗", probability: 0.01, price: 350, desc: "第二大鲨鱼物种" },
    // 传说鱼类
    { name: "鲸鲨", rarity: "传说", probability: 0.01, price: 500, desc: "温和的海洋巨人" },
    { name: "大白鲨", rarity: "传说", probability: 0.008, price: 600, desc: "顶级海洋掠食者" },
    { name: "巨型鱿鱼", rarity: "传说", probability: 0.005, price: 800, desc: "深海神秘生物" },
    { name: "腔棘鱼", rarity: "传说", probability: 0.003, price: 1000, desc: "活化石鱼类" },
    { name: "皇鲑", rarity: "传说", probability: 0.005, price: 750, desc: "最稀有的鲑鱼品种" },
    { name: "龙趸", rarity: "传说", probability: 0.004, price: 900, desc: "巨型珊瑚礁鱼类" },
    { name: "月亮鱼", rarity: "传说", probability: 0.003, price: 1200, desc: "圆形的深海鱼类" },
    { name: "幽灵鲨", rarity: "传说", probability: 0.002, price: 1500, desc: "深海奇特软骨鱼" },
    { name: "巨型鲶鱼", rarity: "传说", probability: 0.005, price: 700, desc: "淡水巨型鱼类" },
    { name: "珍珠鱼", rarity: "传说", probability: 0.001, price: 2000, desc: "传说能产珍珠的鱼" },
    // 神话鱼类
    { name: "人鱼", rarity: "神话", probability: 0.0005, price: 5000, desc: "半人半鱼的传说生物" },
    { name: "龙鱼", rarity: "神话", probability: 0.0003, price: 8000, desc: "能带来好运的神鱼" },
    { name: "海神鱼", rarity: "神话", probability: 0.0002, price: 10000, desc: "波塞冬的使者" },
    { name: "不老鱼", rarity: "神话", probability: 0.0001, price: 15000, desc: "传说食用可长生" },
    { name: "幸运锦鲤", rarity: "神话", probability: 0.0005, price: 3000, desc: "带来好运的彩色鲤鱼" }
];

// 饵料数据结构
const baitData = [
    { name: "大米饵料", count: 20, price: 5, effect: (fish) => (fish.rarity === "普通" || fish.rarity === "稀有") ? 1 : 0 },
    { name: "蚯蚓饵料", count: 15, price: 10, effect: (fish) => {
        if (fish.rarity === "稀有") return 1.25; // 提高稀有鱼概率至25% (假设基础概率是20%, 20%*1.25 = 25%) -> 更准确的应该是直接调整概率或权重
        if (fish.rarity === "史诗") return 1.10; // 提高史诗鱼概率至10%
        if (fish.rarity === "普通") return 1;
        return 0;
    }},
    { name: "特制假饵", count: 10, price: 20, effect: (fish) => {
        if (fish.rarity === "史诗") return 1.15; // 提高史诗鱼概率至15%
        if (fish.rarity === "传说") return 1.05; // 提高传说鱼概率至5%
        if (fish.rarity === "普通" || fish.rarity === "稀有") return 1;
        return 0;
    }},
    { name: "传说鱼类专用饵", count: 1, price: 100, effect: (fish) => { // 价格待定，商店未列出
        if (fish.rarity === "传说") return 0.80 / fish.probability; // 确保传说鱼总概率为80%
        if (fish.rarity === "神话") return 0.20 / fish.probability; // 确保神话鱼总概率为20%
        return 0; // 其他鱼钓不到
    }}
];


// 游戏状态变量
let gold = 100; // 初始金币
let meritPoints = 0; // 初始功德
let currentBaitIndex = 0; // 当前选中的鱼饵索引

// 背包数据结构
let bag = {
    capacity: 20,
    items: [
        // { fishName: "小丑鱼", count: 1, price: 10, desc: "色彩鲜艳的珊瑚礁居民" },
    ] // 存储钓到的鱼对象
};

// 游戏核心状态
let isFishing = false; // 是否正在钓鱼（已下杆）
let isFishBiting = false; // 是否有鱼咬钩
let biteTimeoutId = null; // 咬钩计时器ID
let escapeTimeoutId = null; // 鱼逃脱计时器ID
let currentFish = null; // 当前咬钩的鱼
let isMinigameActive = false; // 是否在进行小游戏

// DOM Elements
const goldDisplay = document.getElementById('gold-display');
const meritDisplay = document.getElementById('merit-display');
const bagCapacityDisplay = document.getElementById('bag-capacity-display');
const fishingButton = document.getElementById('fishing-button');
const fishingStatusText = document.getElementById('fishing-status-text');
const baitSelect = document.getElementById('bait-select');
const selectedBaitCountDisplay = document.getElementById('selected-bait-count');
const gameLog = document.getElementById('game-log');
const bagItemList = document.getElementById('bag-item-list');
const bagCurrentItemsDisplay = document.getElementById('bag-current-items');
const bagMaxCapacityDisplay = document.getElementById('bag-max-capacity');
const shopItemList = document.getElementById('shop-item-list');
const upgradeBagButton = document.getElementById('upgrade-bag-button');
const meritPointsDisplay = document.getElementById('merit-points-display');
const achievementsDisplay = document.getElementById('achievements-display');
const floatBobber = document.getElementById('float-bobber');
const fishingMinigame = document.getElementById('fishing-minigame');
const fishPosition = document.getElementById('fish-position');
const catchZone = document.getElementById('catch-zone');
const remainingTimeDisplay = document.getElementById('remaining-time');
const reelButton = document.getElementById('reel-button');

// --- 初始化函数 ---
function initializeGame() {
    updateGoldDisplay();
    updateMeritDisplay();
    updateBagDisplay();
    populateBaitSelector();
    updateSelectedBaitCount();
    populateShop();
    logMessage("游戏已加载，准备开始钓鱼吧！");

    fishingButton.addEventListener('click', handleFishingAction);
    baitSelect.addEventListener('change', handleBaitChange);
    upgradeBagButton.addEventListener('click', handleUpgradeBag);
    reelButton.addEventListener('click', handleReelButtonClick);
    
    // 初始化浮漂位置
    resetFloatBobber();
}

// 重置浮漂状态
function resetFloatBobber() {
    floatBobber.className = 'idle';
}

// --- UI 更新函数 ---
function updateGoldDisplay() {
    goldDisplay.textContent = gold;
}

function updateMeritDisplay() {
    meritDisplay.textContent = meritPoints;
    meritPointsDisplay.textContent = meritPoints; // Also update in merit section
}

function updateBagDisplay() {
    bagCapacityDisplay.textContent = `${bag.items.length}/${bag.capacity}`;
    bagCurrentItemsDisplay.textContent = bag.items.length;
    bagMaxCapacityDisplay.textContent = bag.capacity;

    bagItemList.innerHTML = ''; // 清空列表
    if (bag.items.length === 0) {
        bagItemList.innerHTML = '<li>背包是空的</li>';
    } else {
        const groupedItems = {};
        bag.items.forEach(item => {
            if (groupedItems[item.fishName]) {
                groupedItems[item.fishName].count++;
            } else {
                groupedItems[item.fishName] = { ...item, count: 1};
            }
        });

        for (const fishName in groupedItems) {
            const item = groupedItems[fishName];
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${item.fishName} (x${item.count}) - ${item.price}金币
                <div>
                    <button class="sell-fish-btn" data-fish-name="${item.fishName}">出售</button>
                    <button class="release-fish-btn" data-fish-name="${item.fishName}">放生</button>
                </div>
            `;
            listItem.querySelector('.sell-fish-btn').addEventListener('click', () => sellFish(item.fishName, item.price));
            listItem.querySelector('.release-fish-btn').addEventListener('click', () => releaseFish(item.fishName, item.rarity === "传说"));
            bagItemList.appendChild(listItem);
        }
    }
}


function populateBaitSelector() {
    baitData.forEach((bait, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = bait.name;
        baitSelect.appendChild(option);
    });
    currentBaitIndex = 0; // 默认选择第一个
    baitSelect.value = currentBaitIndex;
}

function updateSelectedBaitCount() {
    if (baitData[currentBaitIndex]) {
        selectedBaitCountDisplay.textContent = baitData[currentBaitIndex].count;
    }
}

function logMessage(message) {
    gameLog.textContent = message;
    console.log(message); // Also log to console for debugging
}

// --- 游戏逻辑函数 ---
function handleFishingAction() {
    if (!isFishing) { // 如果不在钓鱼状态，则开始钓鱼
        startFishing();
    } else if (isFishBiting) { // 如果在咬钩状态，则开始互动钓鱼小游戏
        startFishingMinigame();
    }
}

function handleBaitChange() {
    currentBaitIndex = parseInt(baitSelect.value);
    updateSelectedBaitCount();
    logMessage(`已选择鱼饵: ${baitData[currentBaitIndex].name}`);
}

function startFishing() {
    if (baitData[currentBaitIndex].count <= 0) {
        logMessage("选中的鱼饵用完了！请购买或选择其他鱼饵。");
        return;
    }

    isFishing = true;
    isFishBiting = false;
    currentFish = null;
    baitData[currentBaitIndex].count--;
    updateSelectedBaitCount();

    fishingButton.textContent = "等待中...";
    fishingButton.className = 'waiting'; // 更改按钮样式
    fishingStatusText.textContent = "鱼竿已抛下，等待鱼儿上钩...";
    logMessage("下杆成功，等待鱼儿上钩...");
    
    // 重置浮漂状态为轻微摇晃
    resetFloatBobber();

    const randomBiteTime = Math.random() * 4000 + 1000; // 1-5秒随机时间
    biteTimeoutId = setTimeout(() => {
        // 确定咬钩的鱼类
        determineBitingFish();
        
        if (currentFish) {
            isFishBiting = true;
            fishingButton.textContent = "提钩！";
            fishingButton.className = 'hooked';
            fishingStatusText.textContent = "有鱼上钩了！赶快提钩！";
            logMessage("鱼上钩了！请点击提钩按钮！");
            
            // 根据鱼的稀有度设置浮漂动画
            setFloatBobberAnimation(currentFish.rarity);

            // 5秒内不收杆则鱼逃脱
            escapeTimeoutId = setTimeout(() => {
                if (isFishBiting) { // 如果此时鱼还在咬钩状态（即玩家未提钩）
                    fishEscapes();
                }
            }, 5000);
        } else {
            // 没有鱼咬钩，重新开始
            resetFishingState();
            logMessage("这次没有鱼上钩，请再试一次。");
        }
    }, randomBiteTime);
}

// 根据鱼的稀有度设置浮漂动画
function setFloatBobberAnimation(rarity) {
    floatBobber.className = '';
    switch(rarity) {
        case "普通":
            floatBobber.classList.add('normal-bite');
            break;
        case "稀有":
            floatBobber.classList.add('rare-bite');
            break;
        case "史诗":
            floatBobber.classList.add('epic-bite');
            break;
        case "传说":
            floatBobber.classList.add('legendary-bite');
            break;
        case "神话":
            floatBobber.classList.add('mythic-bite');
            break;
        default:
            floatBobber.classList.add('normal-bite');
    }
}

// 确定咬钩的鱼类
function determineBitingFish() {
    const selectedBait = baitData[currentBaitIndex];
    
    // 筛选出当前鱼饵能钓到的鱼
    const availableFish = fishList.filter(fish => selectedBait.effect(fish) > 0);
    if (availableFish.length > 0) {
        // 特殊处理传说鱼饵
        if (selectedBait.name === "传说鱼类专用饵") {
            let sumProb = 0;
            const weightedFish = availableFish.map(fish => {
                const weight = selectedBait.effect(fish) * fish.probability; // effect 已经包含了概率调整
                sumProb += weight;
                return { fish, weight };
            });
            let random = Math.random() * sumProb;
            for(const item of weightedFish) {
                if(random < item.weight) {
                    currentFish = item.fish;
                    break;
                }
                random -= item.weight;
            }
        } else {
            // 其他鱼饵的通用逻辑
            let totalWeight = 0;
            const weightedFishList = availableFish.map(fish => {
                // 基础概率 * 鱼饵效果
                const weight = fish.probability * selectedBait.effect(fish);
                totalWeight += weight;
                return { fish, weight };
            });

            let random = Math.random() * totalWeight;
            for (const item of weightedFishList) {
                if (random < item.weight) {
                    currentFish = item.fish;
                    break;
                }
                random -= item.weight;
            }
        }
    }
}

// 开始钓鱼互动小游戏
function startFishingMinigame() {
    if (!currentFish) return;
    
    clearTimeout(escapeTimeoutId); // 清除逃脱计时器
    isMinigameActive = true;
    
    // 显示小游戏界面
    fishingMinigame.style.display = 'flex';
    
    // 设置鱼的初始位置
    fishPosition.style.left = '10%';
    
    // 设置鱼的挣扎难度（基于稀有度）
    let difficulty = 1;
    switch(currentFish.rarity) {
        case "普通": difficulty = 1; break;
        case "稀有": difficulty = 1.5; break;
        case "史诗": difficulty = 2; break;
        case "传说": difficulty = 2.5; break;
        case "神话": difficulty = 3; break;
    }
    
    // 开始鱼的挣扎动画
    startFishStruggle(difficulty);
    
    // 设置倒计时
    let timeRemaining = 10;
    remainingTimeDisplay.textContent = timeRemaining;
    
    const countdownInterval = setInterval(() => {
        timeRemaining--;
        remainingTimeDisplay.textContent = timeRemaining;
        
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            endMinigame(true); // 成功钓到鱼
        }
    }, 1000);
    
    // 保存计时器ID以便在需要时清除
    window.minigameCountdown = countdownInterval;
}

// 鱼的挣扎动画
function startFishStruggle(difficulty) {
    const minPosition = 5;
    const maxPosition = 95;
    let direction = Math.random() > 0.5 ? 1 : -1;
    let currentPosition = parseInt(fishPosition.style.left);
    
    const struggleInterval = setInterval(() => {
        if (!isMinigameActive) {
            clearInterval(struggleInterval);
            return;
        }
        
        // 随机改变方向
        if (Math.random() < 0.1) {
            direction *= -1;
        }
        
        // 根据难度和随机因素计算移动距离
        const moveDistance = (Math.random() * 5 + 2) * difficulty * direction;
        currentPosition += moveDistance;
        
        // 确保鱼在界限内
        if (currentPosition < minPosition) {
            currentPosition = minPosition;
            direction *= -1;
        } else if (currentPosition > maxPosition) {
            currentPosition = maxPosition;
            direction *= -1;
        }
        
        // 更新鱼的位置
        fishPosition.style.left = currentPosition + '%';
        
        // 检查是否在捕获区域内
        const fishRect = fishPosition.getBoundingClientRect();
        const zoneRect = catchZone.getBoundingClientRect();
        
        if (!(fishRect.right < zoneRect.left || 
              fishRect.left > zoneRect.right)) {
            // 鱼在捕获区域内，不做特殊处理，继续游动
        } else {
            // 鱼在捕获区域外，增加逃脱几率
            if (Math.random() < 0.01 * difficulty) {
                clearInterval(struggleInterval);
                endMinigame(false); // 鱼逃脱
            }
        }
    }, 100);
    
    // 保存计时器ID以便在需要时清除
    window.fishStruggleInterval = struggleInterval;
}

// 处理收线按钮点击
function handleReelButtonClick() {
    // 获取鱼的位置和捕获区域
    const fishRect = fishPosition.getBoundingClientRect();
    const zoneRect = catchZone.getBoundingClientRect();
    
    // 检查鱼是否在捕获区域内
    if (!(fishRect.right < zoneRect.left || fishRect.left > zoneRect.right)) {
        // 在区域内，增加捕获几率
        if (Math.random() < 0.7) { // 70%几率成功
            endMinigame(true);
        }
    } else {
        // 不在区域内，增加逃脱几率
        if (Math.random() < 0.7) { // 70%几率失败
            endMinigame(false);
        }
    }
}

// 结束小游戏
function endMinigame(success) {
    isMinigameActive = false;
    
    // 清除所有计时器
    clearInterval(window.fishStruggleInterval);
    clearInterval(window.minigameCountdown);
    
    // 隐藏小游戏界面
    fishingMinigame.style.display = 'none';
    
    if (success && currentFish) {
        logMessage(`恭喜！钓到了 ${currentFish.rarity} 的 ${currentFish.name}！`);
        fishingStatusText.textContent = `钓到了 ${currentFish.name}!`;
        addFishToBag(currentFish);
    } else {
        logMessage("哎呀，鱼跑掉了...");
        fishingStatusText.textContent = "鱼跑掉了...";
    }
    
    resetFishingState();
}

function fishEscapes() {
    logMessage("太慢了，鱼逃走了！");
    fishingStatusText.textContent = "鱼逃走了...";
    resetFishingState();
}

function resetFishingState() {
    isFishing = false;
    isFishBiting = false;
    currentFish = null;
    clearTimeout(biteTimeoutId);
    clearTimeout(escapeTimeoutId);
    fishingButton.textContent = "下杆";
    fishingButton.className = ''; // 恢复按钮默认样式
    resetFloatBobber(); // 重置浮漂状态
}

function addFishToBag(fish) {
    if (bag.items.length >= bag.capacity) {
        logMessage(`背包已满！${fish.name} 放不下啦。`);
        // 可以考虑给玩家选择丢弃或者怎么处理
        return;
    }
    // 存入背包的是鱼的实例，包含所有信息
    bag.items.push({ fishName: fish.name, price: fish.price, desc: fish.desc, rarity: fish.rarity });
    updateBagDisplay();
}

// --- 背包操作 ---
function sellFish(fishName, price) {
    const fishIndex = bag.items.findIndex(item => item.fishName === fishName);
    if (fishIndex > -1) {
        bag.items.splice(fishIndex, 1);
        gold += price;
        logMessage(`出售 ${fishName} 获得 ${price} 金币。`);
        updateGoldDisplay();
        updateBagDisplay();
    }
}

function releaseFish(fishName, isLegendary) {
    const fishIndex = bag.items.findIndex(item => item.fishName === fishName);
    if (fishIndex > -1) {
        bag.items.splice(fishIndex, 1);
        const meritGained = isLegendary ? 10 : 1;
        meritPoints += meritGained;
        logMessage(`放生 ${fishName}，获得 ${meritGained} 点功德。`);
        updateMeritDisplay();
        updateBagDisplay();
        checkAchievements();
    }
}

function handleUpgradeBag() {
    const upgradeCost = 80; // 从商店系统获取或硬编码
    if (gold >= upgradeCost) {
        gold -= upgradeCost;
        bag.capacity++;
        logMessage(`背包扩容成功！当前容量: ${bag.capacity}。花费 ${upgradeCost} 金币。`);
        updateGoldDisplay();
        updateBagDisplay();
    } else {
        logMessage(`金币不足！扩容背包需要 ${upgradeCost} 金币。`);
    }
}

// --- 商店系统 ---
const shopItems = [
    { type: "bait", name: "大米饵料", price: 5, baitIndex: 0 },
    { type: "bait", name: "蚯蚓饵料", price: 10, baitIndex: 1 },
    { type: "bait", name: "特制假饵", price: 20, baitIndex: 2 },
    // 传说鱼饵不在商店购买，或者价格极高
];

function populateShop() {
    shopItemList.innerHTML = '';
    shopItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - ${item.price}金币
            <button data-item-name="${item.name}">购买</button>
        `;
        listItem.querySelector('button').addEventListener('click', () => buyShopItem(item));
        shopItemList.appendChild(listItem);
    });
}

function buyShopItem(item) {
    if (gold >= item.price) {
        gold -= item.price;
        if (item.type === "bait") {
            baitData[item.baitIndex].count++;
            logMessage(`购买 ${item.name} 成功！`);
            updateSelectedBaitCount(); // 如果购买的是当前选中的鱼饵，则更新显示数量
        }
        updateGoldDisplay();
        // populateShop(); // 可选：如果需要更新商店状态（比如限购）
    } else {
        logMessage(`金币不足！购买 ${item.name} 需要 ${item.price} 金币。`);
    }
}

// --- 功德系统 ---
function checkAchievements() {
    // 示例：达到一定功德解锁称号
    if (meritPoints >= 50 && achievementsDisplay.textContent.indexOf("环保主义者") === -1) {
        achievementsDisplay.textContent = "环保主义者";
        logMessage("恭喜你获得【环保主义者】称号！");
    }
    // 后续可以添加更多成就和隐藏鱼类解锁逻辑
}


// --- 游戏启动 ---
document.addEventListener('DOMContentLoaded', initializeGame);