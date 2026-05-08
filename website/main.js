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
        feature1_desc: "人体红外感应，自动开盖，无接触更卫生。搭载超声波雷达，靠近即刻响应。",
        feature2_title: "自动分类",
        feature2_desc: "图像识别与传感器结合，实现垃圾精准分类。FPGA 硬件边缘计算加速，秒级识别。",
        feature3_title: "满载报警",
        feature3_desc: "监测垃圾桶容量，满载自动提醒清理。支持接云端，让物业调度和环卫人员更省心。",
        footer_text: "© 2026 智能垃圾桶项目组. 保留所有权利.",
        
        bg_title: "项目背景与环保意义",
        bg_p1: "随着城市化进程的加快，生活垃圾产量激增，传统的垃圾处理方式不仅效率低下，且容易造成二次污染。垃圾分类是实现资源回收利用、保护生态环境的重要途径。然而，在实际推行过程中，居民常常面临“不知如何分类”、“觉得分类麻烦”的困境。",
        bg_p2: "本项目旨在通过前沿的微控制器系统（MCU）与现场可编程逻辑门阵列（FPGA）技术，打造一款无需人工干预、全自动识别与分类的“智能垃圾桶”。它不仅能大幅降低分类门槛，提高资源回收率，还顺应了国家“绿水青山就是金山银山”的生态文明建设号召。用科技赋能环保，让每一次分类都成为对地球的温柔呵护。",

        proj_title: "智能垃圾桶技术详解",
        proj_arch: "系统架构",
        proj_arch_desc: "本项目主要由 STM32 微控制器（MCU）与底层 FPGA 构成协同处理架构组合控制。FPGA 负责高速数据采集与图像初步处理，MCU 负责系统逻辑控制、云端通信与电机驱动。两者通过 SPI / UART 接口实现高速无缝的数据交换，使得整个系统既具备强劲的外设驱动能力，又拥有出色的边缘计算算力。",
        proj_work: "工作原理",
        proj_work_1: "1. 超声波与红外传感器检测到人体靠近，MCU 控制舵机打开垃圾桶盖。",
        proj_work_2: "2. 投入垃圾后，摄像头采集图像并传递给 FPGA 进行边缘检测与预处理。",
        proj_work_3: "3. 识别结果由主控判断，驱动内部挡板将垃圾分入对应类别的桶中。",
        proj_work_4: "4. 温湿度与称重传感器实时运作，在桶内满载时发出声音及灯光报警，并上报云端数据库。",
        
        proj_hardware_title: "硬件规格与技术指标",
        proj_hardware_p1: "我们的硬件选型严格平衡了功耗、性能和成本。核心模块包括：",
        proj_hardware_1: "微控制器核心： STM32F411CEU6，基于 ARM Cortex-M4 内核，专研的 FreeRTOS 确保了传感器轮询与响应的极低延迟。",
        proj_hardware_2: "视觉协处理器： 采用低功耗 FPGA，运用硬件并行处理特性，运行图像算法，缓解了 MCU 的算力压力。",
        proj_hardware_3: "执行及传感矩阵： SG90大扭矩舵机、HC-SR04超声波模块、OV7670高清摄像头、HX711压力称重模块。",

        about_title: "关于开发者",
        about_avatar: "头像",
        about_name: "开发者：杨易帆",
        about_id: "学号：24019100166",
        about_role: "项目中负责：网站开发、文书工作、专利撰写。统筹了整体项目的宣传与文档沉淀，将复杂的硬件系统通过易懂的 Web 界面呈现给大众。",
        about_email: "✉️ 邮箱：24019100166@stu.xidian.edu.cn",
        
        about_future_title: "展望与未来发展",
        about_future_p1: "智能垃圾桶只是我们迈向智慧城市以及物联网(IoT)边缘计算终端的一小步。在下一代版本的规划中，我们计划引入：",
        about_future_1: "更强劲的 NPU 硬件加速器，支持本地运行微型深度学习模型，实现百余种垃圾精准分类。",
        about_future_2: "太阳能顶盖供电系统，追求极致低功耗，自给自足。",
        about_future_3: "结合大语言模型(LLM)的智能交互屏，能与投入垃圾的居民进行分类科普对话。"
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
        feature1_desc: "Infrared sensing, auto-opening, contact-free and hygienic. Equipped with ultrasonic radar for instant response.",
        feature2_title: "Auto Sorting",
        feature2_desc: "Combined image recognition and sensors for precise garbage sorting. FPGA edge computing acceleration for millisecond-level recognition.",
        feature3_title: "Full Alert",
        feature3_desc: "Monitors capacity and automatically alerts when full. Supports cloud connectivity for easier management by environmental sanitation personnel.",
        footer_text: "© 2026 Smart Trash Can Project Team. All rights reserved.",

        bg_title: "Project Background & Environmental Significance",
        bg_p1: "With the acceleration of urbanization, domestic waste production has surged. Traditional waste disposal methods are not only inefficient but also prone to secondary pollution. Waste sorting is an essential way to achieve resource recycling and protect the eco-environment. However, in practice, residents often face the dilemma of 'not knowing how to sort' and 'finding it troublesome'.",
        bg_p2: "This project aims to create a 'Smart Trash Can' with automatic recognition and sorting without manual intervention, utilizing cutting-edge MCU and FPGA technologies. It significantly lowers the sorting barrier, improves the recycling rate, and responds to the national call for ecological civilization. Using tech to empower environmental protection, making every sorting an act of care for the earth.",

        proj_title: "Smart Trash Can Technology",
        proj_arch: "System Architecture",
        proj_arch_desc: "This project uses a collaborative processing architecture of an STM32 Microcontroller (MCU) and an FPGA. The FPGA handles high-speed data acquisition and initial image processing, while the MCU manages system logic, cloud communication, and motor drives. They achieve high-speed seamless data exchange via SPI / UART interfaces, giving the system both strong peripheral driving capability and excellent edge computing power.",
        proj_work: "Working Principle",
        proj_work_1: "1. Ultrasonic and infrared sensors detect human approach; MCU controls servo to open the lid.",
        proj_work_2: "2. After disposing trash, the camera captures an image and sends it to the FPGA for edge detection and preprocessing.",
        proj_work_3: "3. The main controller evaluates the results and drives internal baffles to sort trash into the correct bin.",
        proj_work_4: "4. Temp, humidity, and weight sensors operate in real-time, issuing audio and light alarms when full, and reporting to the cloud DB.",

        proj_hardware_title: "Hardware Specifications",
        proj_hardware_p1: "Our hardware selection strictly balances power, performance, and cost. Core modules include:",
        proj_hardware_1: "Microcontroller Core: STM32F411CEU6, based on ARM Cortex-M4, with a custom FreeRTOS ensuring extremely low latency in sensor polling and response.",
        proj_hardware_2: "Vision Co-processor: Low-power FPGA utilizing hardware parallel processing for image algorithms, relieving MCU calculation pressure.",
        proj_hardware_3: "Execution & Sensor Matrix: SG90 high-torque servo, HC-SR04 ultrasonic, OV7670 HD camera, HX711 pressure weighing module.",

        about_title: "About the Developer",
        about_avatar: "Avatar",
        about_name: "Developer: Yifan Yang",
        about_id: "Student ID: 24019100166",
        about_role: "Role: Website development, documentation, and patent drafting. Coordinated overall project publicity and documentation, presenting a complex hardware system to the public via an easy-to-understand Web interface.",
        about_email: "✉️ Email: 24019100166@stu.xidian.edu.cn",

        about_future_title: "Vision & Future Development",
        about_future_p1: "The smart trash can is just a small step towards smart cities and IoT edge computing terminals. In our next generation roadmap, we plan to introduce:",
        about_future_1: "A stronger NPU hardware accelerator, supporting local micro deep-learning models for over a hundred precise trash classifications.",
        about_future_2: "Solar-powered roof system, pursuing extreme low power consumption for self-sufficiency.",
        about_future_3: "A smart interactive screen integrated with Large Language Models (LLM) to conduct science-popularization conversations with residents."
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
    // 触发页面进入时的动画效果
    const animatedElements = document.querySelectorAll('.animate-up');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});