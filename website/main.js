const translations = {
    zh: {
        logo: "智能垃圾桶项目",
        nav_home: "首页",
        nav_project: "项目详情",
        nav_about: "关于我",
        hero_title: "开启智慧环保新生活",
        hero_desc: "基于 MCU 与 FPGA 的智能垃圾桶设计，让分类更简单，让环境更美好。",
        hero_btn: "了解更多",
        feature1_title: "智能感应",
        feature1_desc: "人体红外感应，自动开盖，无接触更卫生。",
        feature2_title: "自动分类",
        feature2_desc: "图像识别与传感器结合，实现垃圾精准分类。",
        feature3_title: "满载报警",
        feature3_desc: "监测垃圾桶容量，满载自动提醒清理。",
        footer_text: "© 2026 智能垃圾桶项目组. 保留所有权利.",
        
        proj_title: "智能垃圾桶技术详解",
        proj_video_placeholder: "[视频展示区域 - 演示智能垃圾桶自动开盖及分类过程]",
        proj_arch: "系统架构",
        proj_arch_desc: "本项目主要由 STM32 微控制器（MCU）与底层 FPGA 构成协同处理架构组合控制。FPGA 负责高速数据采集与图像初步处理，MCU 负责系统逻辑控制、云端通信与电机驱动。",
        proj_img_placeholder: "[架构图图片展示区域]",
        proj_work: "工作原理",
        proj_work_1: "1. 超声波与红外传感器检测到人体靠近，MCU 控制舵机打开垃圾桶盖。",
        proj_work_2: "2. 投入垃圾后，摄像头采集图像并传递给 FPGA 进行边缘检测与预处理。",
        proj_work_3: "3. 识别结果由主控判断，驱动内部挡板将垃圾分入对应类别的桶中。",

        about_title: "关于开发者",
        about_avatar: "头像",
        about_name: "开发者：杨易帆 (虚拟信息)",
        about_id: "学号：24019100166",
        about_role: "项目中负责：FPGA逻辑设计、MCU控制程序开发及前后端系统集成。",
        about_email: "邮箱：developer@virtual-email.com (虚拟)"
    },
    en: {
        logo: "Smart Trash Can",
        nav_home: "Home",
        nav_project: "Project Details",
        nav_about: "About Me",
        hero_title: "Start a Smart & Eco-friendly Life",
        hero_desc: "Smart trash can design based on MCU & FPGA. Making sorting easier and environment better.",
        hero_btn: "Learn More",
        feature1_title: "Smart Sensing",
        feature1_desc: "Infrared sensing, auto-opening, contact-free and hygienic.",
        feature2_title: "Auto Sorting",
        feature2_desc: "Combined image recognition and sensors for precise garbage sorting.",
        feature3_title: "Full Alert",
        feature3_desc: "Monitors capacity and automatically alerts when full.",
        footer_text: "© 2026 Smart Trash Can Project Team. All rights reserved.",

        proj_title: "Smart Trash Can Technology",
        proj_video_placeholder: "[Video Placeholder - Demo of auto-opening and sorting]",
        proj_arch: "System Architecture",
        proj_arch_desc: "This project uses a collaborative processing architecture of an STM32 Microcontroller (MCU) and an FPGA. The FPGA handles high-speed data acquisition and initial image processing, while the MCU manages system logic, cloud communication, and motor drives.",
        proj_img_placeholder: "[Architecture Diagram Placeholder]",
        proj_work: "Working Principle",
        proj_work_1: "1. Ultrasonic and infrared sensors detect human approach; MCU controls servo to open the lid.",
        proj_work_2: "2. After disposing trash, the camera captures an image and sends it to the FPGA for edge detection.",
        proj_work_3: "3. The main controller evaluates the results and drives internal baffles to sort trash into the correct bin.",

        about_title: "About the Developer",
        about_avatar: "Avatar",
        about_name: "Developer: Yifan Yang (Virtual)",
        about_id: "Student ID: 24019100166",
        about_role: "Role: FPGA logic design, MCU control program development, and full-stack integration.",
        about_email: "Email: developer@virtual-email.com (Virtual)"
    }
};

let currentLang = 'zh';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = lang === 'zh' ? 'English' : '中文';
    }
    
    // 保存语言偏好
    localStorage.setItem('preferredLang', lang);
}

function toggleLanguage() {
    setLanguage(currentLang === 'zh' ? 'en' : 'zh');
}

// 页面加载时初始化语言
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    setLanguage(savedLang);
    initThemeSwitcher();
});

function initThemeSwitcher() {
    const container = document.createElement('div');
    container.innerHTML = `
    <div style="position: fixed; top: 100px; right: 20px; z-index: 9999; display: flex; flex-direction: column; align-items: flex-end;">
        <button id="ts-toggle" style="background: #2e7d32; color: white; border: none; border-radius: 50%; width: 45px; height: 45px; cursor: pointer; font-size: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: 0.3s;" title="切换版本">🎨</button>
        <div id="ts-menu" style="display: none; background: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); margin-top: 10px; padding: 10px; flex-direction: column; gap: 8px;">
            <p style="margin: 0; padding: 0 5px 8px; font-size: 0.85rem; color: #666; border-bottom: 1px solid #eee;">切换为其他风格</p>
            <button onclick="switchTheme()" style="background: #161b22; color: #58a6ff; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; width: 100%; text-align: left; font-weight: bold; font-size: 0.9rem;">💻 赛博科技风 (Beta)</button>
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
    window.location.href = '../website_v2/' + currentPage;
}