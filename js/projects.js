/* ==========================================================================
   项目数据 —— 新增项目时：
   1. 往 PROJECTS 数组追加一条对象；
   2. 排版节奏（左右交替、图文比例）由 CSS 自动处理，无需改样式。
   字段：no 序号 / cat 类别 / title 名称 / desc 简介
        tech 技术栈 / date 完成时间 / img 图片 / block 局部色块颜色
   ========================================================================== */

window.PROJECTS = [
  {
    no: "01",
    cat: "课程项目",
    title: "校园课程实验网站",
    desc: "为专业实验课搭建的班级共享站点，包含实验指导、作业提交与互评功能。负责整体信息架构、响应式布局与前端交互实现。",
    tech: "HTML · CSS · JavaScript · Fetch API",
    date: "2026.06",
    img: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=clean%20university%20campus%20website%20design%20shown%20on%20laptop%20screen%2C%20minimal%20editorial%20layout%2C%20warm%20daylight%2C%20desk%20with%20notebook%2C%20photography&image_size=landscape_4_3",
    block: "#d43f2a"
  },
  {
    no: "02",
    cat: "数据可视化",
    title: "城市空气质量看板",
    desc: "抓取公开环境监测数据，用原生 Canvas 绘制折线与热力图，支持按日期区间筛选。毕业设计方向的探索性作品。",
    tech: "JavaScript · Canvas · Python · Pandas",
    date: "2026.03",
    img: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20data%20visualization%20dashboard%20with%20line%20charts%20and%20heatmap%20on%20dark%20screen%2C%20city%20skyline%20reflection%2C%20moody%20blue%20orange%20lighting%2C%20photography&image_size=landscape_4_3",
    block: "#2f4858"
  },
  {
    no: "03",
    cat: "品牌 / 活动页",
    title: "社团音乐节活动站",
    desc: "为校园音乐节设计的宣传站点：海报式首屏、阵容介绍与日程表。以杂志封面思路处理大字排版与色块撞色。",
    tech: "HTML · CSS Grid · JavaScript",
    date: "2025.11",
    img: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=college%20music%20festival%20poster%20wall%2C%20bold%20typography%20graphic%20design%2C%20stage%20lights%20bokeh%20background%2C%20editorial%20photography&image_size=landscape_4_3",
    block: "#c98a2d"
  },
  {
    no: "04",
    cat: "工具 / 效率",
    title: "Markdown 笔记助手",
    desc: "浏览器端本地笔记工具：分栏编辑、实时预览、标签检索，数据存于 IndexedDB，无需账号即可使用。",
    tech: "JavaScript · IndexedDB · Marked 解析",
    date: "2025.07",
    img: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimal%20writing%20app%20interface%20on%20tablet%20screen%2C%20split%20markdown%20editor%2C%20coffee%20and%20paper%20notebook%20beside%2C%20soft%20morning%20light%2C%20photography&image_size=landscape_4_3",
    block: "#3d6b4f"
  },
  {
    no: "05",
    cat: "交互原型",
    title: "旧照片修复小程序原型",
    desc: "面向家里长辈的相册修复原型：大字号界面、三步流程引导，配合图像增强接口完成老照片翻新。负责交互流程与界面原型。",
    tech: "UI 原型 · Figma · 接口联调",
    date: "2025.04",
    img: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20family%20photographs%20spread%20on%20wooden%20table%2C%20one%20photo%20being%20restored%20bright%2C%20warm%20nostalgic%20light%2C%20still%20life%20photography&image_size=landscape_4_3",
    block: "#7a5ea6"
  }
];
