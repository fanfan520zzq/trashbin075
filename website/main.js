const translations = {
    user1: {
        zh: {
            page_title_home: "智能垃圾桶 - 首页",
            page_title_project: "项目详情",
            page_title_about: "关于我",
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
            page_title_home: "Smart Trash Can - Home",
            page_title_project: "Project Details",
            page_title_about: "About Me",
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
    },
    user2: {
        zh: {
            page_title_home: "智慧垃圾桶系统 - 主页",
            page_title_project: "系统技术白皮书",
            page_title_about: "研发者信息",
            logo: "智慧垃圾桶系统",
            nav_home: "主页",
            nav_project: "技术方案",
            nav_about: "关于开发者",
            hero_title: "拥抱未来科技，重塑城市清洁",
            hero_desc: "融合微控制器与可编程逻辑器件的下一代废弃物自动分拣终端，用硬核技术为地球减负。",
            hero_btn: "探索技术",
            feature1_title: "无感交互",
            feature1_desc: "热释电红外配合超声阵列，感知即开盖，全程零接触。让每一次丢弃都干净利落。",
            feature2_title: "AI 分类引擎",
            feature2_desc: "FPGA 硬件流水线并行推理，图像特征提取在毫秒间完成，垃圾类别一目了然。",
            feature3_title: "云端物联",
            feature3_desc: "实时监测桶位饱和度，数据同步上传管理平台。清运调度从此有据可依。",
            footer_text: "© 2026 智慧垃圾桶研发团队. 保留所有权利.",
            bg_title: "立项背景与生态价值",
            bg_p1: "城镇人口密度持续攀升，固废处置面临严峻挑战。粗放式填埋与焚烧不仅侵占土地资源，更带来不可逆的环境损害。推行精细化分类是破解“垃圾围城”困局的关键钥匙，但居民端的认知门槛与执行成本始终是落地的最大阻力。",
            bg_p2: "本课题立足嵌入式系统前沿，融合 ARM Cortex-M 实时控制与 FPGA 硬件加速两大技术路线，构建一套从感知、识别到分拣的全自动闭环。它追求的不仅是功能层面的智能化，更是对“科技向善”理念的技术回应——让环保融入日常，而非增添负担。",
            proj_title: "系统技术白皮书",
            proj_arch: "总体架构设计",
            proj_arch_desc: "系统采用异构计算架构：上层以 STM32F4 作为中央调度核心，运行 FreeRTOS 实时操作系统，统管人机交互、电机伺服与网络通信；底层 FPGA 作为视觉协处理单元，承担图像卷积、边缘提取等计算密集型任务。两者间通过高速 SPI 总线与 UART 双通道实现全双工数据流，兼顾吞吐量与实时性。",
            proj_work: "运行流程",
            proj_work_1: "1. 超声波及红外双模传感器持续扫描投放口区域，一旦捕获人体信号，MCU 立即驱动舵机翻盖。",
            proj_work_2: "2. 物品投入后，OV7670 图像模组采集多帧画面，经由 FPGA 内置流水线完成灰度化、二值化及轮廓提取。",
            proj_work_3: "3. 提取到的特征向量回传 MCU，经分类决策算法匹配后，控制步进电机偏转导流板，将废弃物导入对应收集仓。",
            proj_work_4: "4. 称重传感器与温湿度探头周期性采样，一旦触发满载阈值，蜂鸣器与 LED 矩阵同步告警，并通过 Wi-Fi 模块推送工单至管理端。",
            proj_hardware_title: "核心硬件参数",
            proj_hardware_p1: "器件选型以低功耗、高可靠为首要准则，兼顾 BOM 成本可控：",
            proj_hardware_1: "主控单元： STM32F411CEU6（ARM Cortex-M4 @ 100MHz），搭载优化版 FreeRTOS，中断响应延迟 < 5μs。",
            proj_hardware_2: "视觉加速器： Intel MAX10 系列 FPGA，内嵌 12 路并行 MAC 单元，单帧处理时间 ≤ 8ms。",
            proj_hardware_3: "传感与执行组件： HC-SR04 超声测距模组、SG90 金属齿轮舵机、OV7670 CMOS 图像传感器、HX711 24位 ADC 称重前端。",
            about_title: "研发者信息",
            about_avatar: "头像",
            about_name: "项目负责人：杨易帆",
            about_id: "学籍编号：24019100166",
            about_role: "职责范围：前端交互设计与 Web 开发、技术文档编撰、发明专利申报。致力于将复杂的嵌入式系统以直观、现代的方式呈现，降低技术的理解门槛。",
            about_email: "✉️ 邮箱：24019100166@stu.xidian.edu.cn",
            about_future_title: "技术演进路线",
            about_future_p1: "当前原型机验证了异构计算在嵌入式垃圾分类场景的可行性。下一阶段，我们将从三个维度推进迭代：",
            about_future_1: "算力升级：部署集成 NPU 的 SoC，在本地端侧运行轻量化分类网络（MobileNet-V3），将可识别类别扩展至 100+。",
            about_future_2: "能源自治：集成薄膜光伏面板与 TI BQ25570 能量采集芯片，实现日光下的全自主运行。",
            about_future_3: "多模态交互：接入本地部署的轻量大语言模型，在 OLED 屏幕上与使用者进行垃圾分类知识的情景式问答。"
        },
        en: {
            page_title_home: "Smart Waste System - Main",
            page_title_project: "System Whitepaper",
            page_title_about: "Developer Info",
            logo: "Smart Waste System",
            nav_home: "Main",
            nav_project: "Tech Specs",
            nav_about: "Developer",
            hero_title: "Embrace Future Tech, Redefine Urban Cleanliness",
            hero_desc: "A next-gen autonomous waste sorting terminal powered by MCU and FPGA co-processing. Hard technology for a lighter planet.",
            hero_btn: "Explore Tech",
            feature1_title: "Touchless Interaction",
            feature1_desc: "Pyroelectric IR paired with ultrasonic array detects presence and opens the lid instantly. A seamless, zero-contact experience.",
            feature2_title: "AI Sorting Engine",
            feature2_desc: "FPGA hardware pipeline performs parallel inference, extracting image features in milliseconds for instant classification.",
            feature3_title: "Cloud Telemetry",
            feature3_desc: "Real-time bin capacity monitoring with data synced to the management platform. Data-driven dispatch for sanitation crews.",
            footer_text: "© 2026 Smart Waste System R&D Team. All rights reserved.",
            bg_title: "Background & Ecological Impact",
            bg_p1: "As urban density continues to surge, solid waste disposal faces mounting challenges. Crude landfilling and incineration not only consume land but cause irreversible ecological damage. Precision sorting is the key to breaking the 'waste siege', yet the cognitive friction and effort cost for residents remain the biggest obstacle to adoption.",
            bg_p2: "This project sits at the intersection of embedded systems and edge AI, combining ARM Cortex-M real-time control with FPGA hardware acceleration to build a fully autonomous closed loop from sensing to sorting. It is more than a smart gadget — it is a technological response to the principle of 'tech for good', embedding sustainability into daily routine rather than adding to it.",
            proj_title: "System Whitepaper",
            proj_arch: "Architecture Overview",
            proj_arch_desc: "The system employs a heterogeneous computing architecture: an STM32F4 serves as the central scheduling core running FreeRTOS, managing HMI, servo control, and network communication; a low-power FPGA acts as the vision co-processor, handling convolution, edge extraction, and other compute-intensive workloads. A high-speed SPI bus coupled with dual UART channels enables full-duplex data flow, balancing throughput and real-time responsiveness.",
            proj_work: "Operational Flow",
            proj_work_1: "1. Dual-mode ultrasonic and IR sensors continuously scan the deposit zone. Upon human detection, the MCU triggers the servo to flip the lid.",
            proj_work_2: "2. Once an item is deposited, the OV7670 imager captures multiple frames. The FPGA pipeline performs grayscale conversion, binarization, and contour extraction.",
            proj_work_3: "3. Extracted feature vectors are sent back to the MCU, where a classification decision algorithm matches the item and actuates a stepper motor to divert it into the appropriate bin.",
            proj_work_4: "4. Weight and temperature/humidity sensors sample periodically. When the full-capacity threshold is reached, a buzzer and LED matrix alert locally while a Wi-Fi module pushes a work order to the management dashboard.",
            proj_hardware_title: "Core Hardware Parameters",
            proj_hardware_p1: "Component selection prioritizes low power and high reliability while maintaining BOM cost control:",
            proj_hardware_1: "Main Controller: STM32F411CEU6 (ARM Cortex-M4 @ 100MHz) with optimized FreeRTOS; interrupt latency < 5μs.",
            proj_hardware_2: "Vision Accelerator: Intel MAX10 FPGA with 12 parallel MAC units; single-frame processing ≤ 8ms.",
            proj_hardware_3: "Sensor & Actuator Suite: HC-SR04 ultrasonic rangefinder, SG90 metal-gear servo, OV7670 CMOS imager, HX711 24-bit ADC weighing front-end.",
            about_title: "Developer Info",
            about_avatar: "Avatar",
            about_name: "Project Lead: Yifan Yang",
            about_id: "Student ID: 24019100166",
            about_role: "Responsibilities: Frontend design & web development, technical documentation, patent filing. Focused on presenting complex embedded systems through an intuitive, modern interface.",
            about_email: "✉️ Email: 24019100166@stu.xidian.edu.cn",
            about_future_title: "Technology Roadmap",
            about_future_p1: "The current prototype validates the feasibility of heterogeneous computing for embedded waste sorting. The next iteration will advance along three dimensions:",
            about_future_1: "Compute Upgrade: Deploy an NPU-integrated SoC running a lightweight classification network (MobileNet-V3) locally on the edge, expanding recognizable categories to 100+.",
            about_future_2: "Energy Autonomy: Integrate thin-film photovoltaic panels with a TI BQ25570 energy harvesting IC for fully self-sustained daylight operation.",
            about_future_3: "Multimodal Interaction: Embed a locally deployed lightweight LLM to engage users in contextual Q&A about waste sorting via an OLED touch panel."
        }
    }
};

let currentLang = 'zh';
let currentUser = 'user1';

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentUser] && translations[currentUser][currentLang] && translations[currentUser][currentLang][key]) {
            element.textContent = translations[currentUser][currentLang][key];
        }
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'zh' ? 'English' : '中文';
    }
}

function setLanguage(lang) {
    currentLang = lang;
    applyTranslations();
    localStorage.setItem('preferredLang', lang);
}

function toggleLanguage() {
    setLanguage(currentLang === 'zh' ? 'en' : 'zh');
}

function setUser(user) {
    currentUser = user;
    document.body.classList.toggle('theme-cyberpunk', user === 'user2');
    applyTranslations();
    localStorage.setItem('preferredUser', user);
}

function toggleUserSelection(event) {
    setUser(event.target.value);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('preferredUser') || 'user1';
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    currentUser = savedUser;
    currentLang = savedLang;

    document.body.classList.toggle('theme-cyberpunk', currentUser === 'user2');

    const select = document.querySelector('.user-toggle-select');
    if (select) {
        select.value = currentUser;
    }

    applyTranslations();

    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'zh' ? 'English' : '中文';
    }

    const animatedElements = document.querySelectorAll('.animate-up');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});