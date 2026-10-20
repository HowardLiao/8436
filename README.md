# 大江生醫 (8436.TW) 企業資訊策略與 Howard 企業資訊架構
**TCI Biomedical (8436.TW) Enterprise Information Strategy & Howard Enterprise Architecture**

* 計劃執行負責人：**Howard Liao Ph.D. (廖倫豪 博士)**
* 核心框架：**Howard 企業架構體系 (Howard Enterprise Architecture Framework)**
* 遵循規範：**金管會生成式 AI 核心指引**、**證券交易所上市上櫃公司資通安全管控指引**、**公開發行公司內控準則第 9 條之 1**、**GMP / FDA 21 CFR Part 11 ALCOA+**
* 資安與智財治理：**全量檔案均轉換為官方高解析 PDF，具備 Howard Liao Ph.D. 全頁浮水印，僅供線上即時審閱，嚴禁外流下載。**

---

## 核心架構矩陣 (Core Architecture Components)
1. **應用與任務編排中樞：HowardAGent** (企業級 Agentic RAG 95% 準確率、財務傳票 OCR、客服 Copilot、MCP Hub)
2. **多模型調度與網關：HowardRoute** (單一 OpenAI 標準端點、調度 250+ 款模型、0% Markup、Smart Routing 省 20~40% Token 成本、毫秒級 Failover)
3. **工業預測與調機大腦：HowardPro** (AutoML 發酵/萃取參數推薦、生化指標虛擬量測、Domain Twin 數位員工、Air-Gapped 產線隔離)
4. **API 平台與資安大腦：Apache APISIX ＋ Keycloak ＋ Noname Security** (影子 API 自動清點、AI 阻斷 BOLA 越權攻擊、測試左移)
5. **雙環 Data Bus 數據總線：Apache Kafka (IT 骨幹) ＋ EMQX (OT MQTT) ＋ Debezium (SAP CDC)**
6. **生醫數據治理與主數據：DataHub (元數據與血緣) ＋ SAP MDG ＋ ALCOA+ 合規**

---

## 官方線上審閱中心 (Live Online Preview - No Downloads)
* **GitHub Pages 線上入口**: [https://howardliao.github.io/8436/](https://howardliao.github.io/8436/)
* **官方文檔清單 (均內嵌 Howard Liao Ph.D. 浮水印，僅供線上預覽)**:
  - `TCI_8436_Howard_企業資訊架構_HowardLiao.pdf` (8 頁全量 Howard 企業架構規格手冊)
  - `TCI_8436_右至左架構演進_HowardLiao.pdf` (3 頁五站式 RTL 使用者流向規範)
  - `TCI_8436_四大立竿見影場景與合規手冊_HowardLiao.pdf` (4 頁首波驗收指南與上市櫃合規手冊)

### Howard 企業架構 32 全架構視圖清冊 (32 Views Catalog)
* `TCI_8436_Howard_Architecture_32.drawio` (32 分頁原生 Draw.io 工程原始檔)
* `TCI_8436_Howard_企業架構_32全架構圖_HowardLiao.pdf` (34 頁全量官方規格審閱手冊，每頁烙印 Howard Liao Ph.D. 浮水印)
  - **Phase A 願景與概念 (00-03)**: ADM 總覽、Stakeholder Map、Value Chain、Solution Concept
  - **Phase B 業務架構 (04-11)**: 能力地圖、組織角色、業務足跡、服務資訊圖、功能分解、目標指標、業務案例、財務憑證流程
  - **Phase C 數據架構 (12-16)**: 概念數據、邏輯數據 Schema、數據分發流、數據分級安全、數據生命週期與 ALCOA+
  - **Phase C 應用架構 (17-21)**: 應用通訊、應用與使用者位置、應用案例、客服回覆流程、企業可管理性
  - **Phase D 技術架構 (22-27)**: 安全軟體工程、環境與廠區、平台分解、高可用與災難復原、網絡運算硬體、網絡分區工程
  - **Phase E-H 實施與治理 (28-31)**: 架構路線圖、專案情境、效益實現、架構合規與變更管理
