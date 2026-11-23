---
title: 直播平台
tagline: 么么直播的系统分层、关键链路与架构演进
summary: 么么直播的弹幕要及时送达，送礼要先更新观众余额和主播收益。我负责核心模块研发，主导高可用架构设计，并引入 RabbitMQ，让榜单和活动在送礼完成后异步更新。
order: 1
period: 么么直播 · 2014.06 — 2024.03
role: 么么直播技术负责人
domain: 直播 / 实时互动 / 礼物交易
status: 真实项目 · 指标口径持续补证
theme: live
facts:
  - value: 约 80 人
    label: 么么直播项目协作规模
    note: 项目团队包含跨职能协作成员及我的直属团队。不同阶段的人员构成仍待核实。
  - value: 30 人
    label: 我的直属团队
    note: 属于上述项目团队，与星艾工程效能案例采用同一组织口径。
roadmap:
  headline: [进入直播间，, 发一条弹幕，, 送出一份礼物。]
  figureCaption: 么么直播 · 成熟期架构分层示意
  layers:
    - title: 流量接入
      english: EDGE ROUTING
      summary: 打开同一个直播间，页面资源、业务请求和长连接各走自己的入口。直播音视频流由第三方提供。
      path: 静态资源走 CDN，业务 API 走 Nginx，WebSocket 走 HAProxy。
      components:
        - label: CDN
          detail: 向客户端分发页面、脚本和图片。
        - label: Nginx + Keepalived
          detail: Nginx 将业务请求轮询分发给 Java 服务实例，Keepalived 支撑入口主备切换。
        - label: HAProxy
          detail: 按 IP Hash 将 WebSocket 连接分配给 Node.js 服务。
    - title: 业务服务
      english: CORE SERVICES
      summary: 进房需要尽快读出房间信息，送礼则要先完成校验和余额更新。Java 服务按用户、房间和支付等业务拆分。
      path: 进房请求由房间服务读取房间信息。送礼请求进入支付相关服务，处理观众余额和主播收益。
      components:
        - label: 房间服务
          detail: 读取 Redis 中的房间数据，以 JSON 返回给客户端。
        - label: 支付服务
          detail: 同步校验礼物、扣减观众余额、增加主播收入。
    - title: 房间广播
      english: ROOM BROADCAST
      summary: 一位观众发出的弹幕，需要送到同一房间的其他观众。平台用房间频道限定消息的分发范围。
      path: 客户端经 WebSocket 接入 Node.js，消息通过 Redis Pub/Sub 的房间频道广播。
      components:
        - label: Node.js
          detail: 承接客户端长连接，负责房间内实时消息的收发。
        - label: Redis Pub/Sub
          detail: 按房间频道发布和订阅弹幕、礼物展示等消息。
    - title: 数据与事件
      english: DATA & EVENTS
      summary: 房间和礼物配置会被反复读取。榜单与活动进度可以在送礼完成后更新，分别由缓存和消息队列承担这些工作。
      path: 热点数据从缓存读取。送礼后的后台事件由 RabbitMQ 分发给排行榜和活动模块。
      components:
        - label: Redis / Caffeine
          detail: 平台用共享缓存与进程内缓存承接房间、礼物配置和用户信息等热点读。
        - label: MongoDB / MySQL
          detail: 成熟期的数据存储包括 MongoDB 副本集和 MySQL 主从。
        - label: RabbitMQ
          detail: 缓冲送礼后的业务事件，由后台消费者更新排行榜和活动。
  flows:
    - label: 进入房间
      title: 画面和房间信息从哪里来？
      summary: 我主导高可用架构设计，将 HTTP 业务入口与长连接入口分开。观众打开房间时，客户端分别获取页面资源、房间数据和音视频流。
      steps:
        - label: 加载页面
          detail: 页面和静态文件经 CDN 分发。
        - label: 查询房间
          detail: Nginx 将请求分配到 Java 实例，服务读取房间缓存并返回 JSON。
        - label: 播放直播
          detail: 客户端从第三方音视频服务获取直播流。
    - label: 发送弹幕
      title: 一条弹幕怎样到达同房观众？
      summary: 聊天消息要及时出现在当前房间。每个房间有自己的广播频道，连接分布在不同服务实例上的观众也能收到同一条弹幕。
      steps:
        - label: 建立连接
          detail: 客户端通过 WebSocket 接入，HAProxy 按 IP Hash 分配连接。
        - label: 发布消息
          detail: Node.js 收到弹幕后，向对应的 Redis 房间频道发布消息。
        - label: 房内分发
          detail: 订阅该频道的服务将弹幕推送给房间内的其他客户端。
    - label: 赠送礼物
      title: 哪些动作要等，哪些可以稍后做？
      summary: 观众余额和主播收入要同步更新。我引入 RabbitMQ 分发后续的业务事件，让排行榜与活动模块各自消费。
      steps:
        - label: 同步处理
          detail: 支付相关服务校验礼物、扣减观众余额并增加主播收入。
        - label: 房内展示
          detail: 后续异步记录礼物，通过 Redis 房间广播展示送礼消息。
        - label: 后台更新
          detail: RabbitMQ 将后续事件交给排行榜与活动模块处理。
  eras:
    - label: 初期上线
      firstYear: 2014
      lastYear: 2014
      title: 先让房间业务和直播播放各自运行
      detail: 上线初期采用 Java API、MongoDB 和 Redis。平台承接房间等业务请求，第三方服务提供音视频流。
    - label: 用户增长期
      firstYear: 2015
      lastYear: 2016
      title: 给数据存储增加副本
      detail: 随着用户增长，团队引入 MongoDB 副本集，并为 Redis 配置主从。各组件的具体节点数和切换耗时仍缺少可公开的记录。
    - label: 平台成熟期
      firstYear: 2017
      lastYear: 2023
      title: 从服务部署到调用链，都有工具可查
      detail: 团队用 Kubernetes 部署服务，Nacos 管理服务与配置，Caffeine 承接本地热点读。我用 SkyWalking 追踪调用链并定位瓶颈。这里按阶段列出实际使用的组件，具体引入年份仍待核实。
---
## 我的交付职责

除核心模块开发和架构设计外，我还负责项目计划、资源分配和质量，与业务部门一起把版本需求落实到里程碑。团队如何组织迭代、自动化测试和发布，见[星艾工程效能](/work/engineering-system/)。

另一段[匿名直播平台经历](/work/anonymous-live/)记录了我在不同团队承担前后端和运维、与测试同事按周交付的实践。

## 指标口径

系统分层和三条请求路径依据成熟期架构记录整理。历史并发量、首屏耗时和可用性还缺少可核对的统计窗口或测量方式，送礼时多项余额更新的事务边界也待核实。
