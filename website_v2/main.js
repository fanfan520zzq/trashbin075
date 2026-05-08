const i18nData = {
    zh: {
        brand: "SmartBin System",
        nav_home: "首页",
        nav_project: "技术白皮书",
        nav_about: "团队介绍",
        hero_title: "AI+边缘计算 赋能环保",
        hero_sub: "探索基于 FPGA 与 MCU 架构的次世代智能垃圾分类终端",
        hero_action: "探索更多",
        feat1: "极速响应",
        feat1_desc: "得益于FPGA硬件加速，图像处理延迟降至毫秒级。",
        feat2: "智能控制",
        feat2_desc: "高性能MCU精准协调传感器与机械结构。",
        feat3: "状态监控",
        feat3_desc: "容量实时监测预警，大幅提升后续清运效率。",
        footer: "© 2026 SmartBin Project Team.",
        proj_arch_title: "系统架构解析",
        proj_arch_content: "项目采用异构计算平台。主要控制器MCU负责低层外设（红外、超声波、电机舵机）的调度和状态机循环；同时，视觉数据由高速率摄像头采集后，直接送入FPGA阵列进行图像预处理及特征提取。两者通过SPI/UART总线进行高速通信。",
        proj_flow_title: "核心工作流",
        flow_1: "1. 行人靠近触发超声波预警，MCU激活舵机开盖，系统从休眠状态唤醒。",
        flow_2: "2. 垃圾入桶期间，FPGA控制模组完成高帧率图像捕获，实时分析垃圾轮廓特征。",
        flow_3: "3. MCU结合多传感器数据与视觉识别结果综合判断，指令机械挡板执行分类动作。",
        team_title: "研发团队",
        team_role_1: "系统集成开发组",
        team_desc_1: "专注于设备底层的软硬件协同。主导STM32及FPGA平台的通讯协议制定、模块级代码维护以及Web可视化界面的搭建。致力于用现代技术手段解决实际的环保难题。",
        team_contact: "联系邮箱: dev_null@smartbin.virtual"
    },
    en: {
        brand: "SmartBin System",
        nav_home: "Home",
        nav_project: "Tech Whitepaper",
        nav_about: "Team",
        hero_title: "AI+Edge Computing for Env",
        hero_sub: "Next-gen smart sorted trash bin based on FPGA & MCU architecture.",
        hero_action: "Explore More",
        feat1: "Fast Response",
        feat1_desc: "Hardware accelerated by FPGA reduces image processing latency.",
        feat2: "Smart Control",
        feat2_desc: "High-performance MCU coordinates sensors and mechanical structures perfectly.",
        feat3: "Status Monitor",
        feat3_desc: "Real-time capacity tracking improves subsequent clean-up efficiency.",
        footer: "© 2026 SmartBin Project Team.",
        proj_arch_title: "Architecture Breakdown",
        proj_arch_content: "A heterogeneous computing platform is utilized. The main MCU handles low-level peripherals (infrared, ultrasonic, and servos) and state machine cycles. Vision data from a high-speed camera is directly fed to the FPGA grid for early image prep and feature extraction.",
        proj_flow_title: "Core Workflow",
        flow_1: "1. Approach triggers ultrasonic alert; MCU activates servo lid and wakes the system.",
        flow_2: "2. During disposal, FPGA module captures high-fps imagery to trace waste contours.",
        flow_3: "3. MCU combines sensor and vision data to command mechanical baffles for final sorting.",
        team_title: "R&D Team",
        team_role_1: "System Integration Group",
        team_desc_1: "Focused on underlying hardware-software synergy. Handled STM32 & FPGA protocols, module maintenance, and UI implementation. Dedicated to solving environmental issues via modern tech.",
        team_contact: "Email: dev_null@smartbin.virtual"
    }
};

let currentLang = localStorage.getItem('siteLang') || 'zh';

function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang][key]) {
            el.textContent = i18nData[currentLang][key];
        }
    });
    
    const btn = document.getElementById('lang-btn');
    if (btn) {
        btn.textContent = currentLang === 'zh' ? 'EN' : 'ZH';
    }
}

function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('siteLang', currentLang);
    updateUI();
}

window.addEventListener('DOMContentLoaded', () => {
    updateUI();
    initThemeSwitcher();
});

function initThemeSwitcher() {
    const container = document.createElement('div');
    container.innerHTML = `
    <div style="position: fixed; top: 100px; right: 20px; z-index: 9999; display: flex; flex-direction: column; align-items: flex-end;">
        <button id="ts-toggle" style="background: #58a6ff; color: white; border: none; border-radius: 50%; width: 45px; height: 45px; cursor: pointer; font-size: 20px; box-shadow: 0 0 15px rgba(88, 166, 255, 0.4); transition: 0.3s;" title="切换版本">🎨</button>
        <div id="ts-menu" style="display: none; background: #161b22; border: 1px solid #30363d; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); margin-top: 10px; padding: 10px; flex-direction: column; gap: 8px;">
            <p style="margin: 0; padding: 0 5px 8px; font-size: 0.85rem; color: #8b949e; border-bottom: 1px solid #30363d;">切换为其他风格</p>
            <button onclick="switchTheme()" style="background: #e8f5e9; color: #2e7d32; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; width: 100%; text-align: left; font-weight: bold; font-size: 0.9rem;">🌿 经典环保风 (Default)</button>
        </div>
    </div>`;
    document.body.appendChild(container);
    
    document.getElementById('ts-toggle').addEventListener('click', () => {
        const menu = document.getElementById('ts-menu');
        menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
        document.getElementById('ts-toggle').style.transform = menu.style.display === 'flex' ? 'rotate(90deg)' : 'rotate(0deg)';
    });
}

function switchTheme() {
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    window.location.href = '../website/' + currentPage;
}