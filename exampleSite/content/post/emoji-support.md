---
title: "支持 Emoji 表情"
description: "Hugo 和 NexT 中的 Emoji 的用法指南。"
keywords: "Hugo,NexT,Emoji"

date: 2022-06-04T19:46:45+08:00
lastmod: 2022-06-04T19:46:45+08:00

categories:
 - 示例文章
 - 语法

tags:
 - 表情
 - emoji

url: "post/emoji-support.html"
---

Emoji 可以通过多种方式在 Hugo 项目中启用。

[`emojify`](https://gohugo.io/functions/emojify/) 方法可以直接在模板中调用, 或者使用[行内 Shortcodes](https://gohugo.io/templates/shortcode-templates#inline-shortcodes).

要全局使用 emoji, 需要在你的[网站配置](https://gohugo.io/getting-started/configuration/)中设置 `enableEmoji` 为 `true`，
然后你就可以直接在文章中输入 emoji 的代码。

<!--more-->

它们以**冒号**开头和结尾，并且包含 emoji 的 **代码**：

```markdown
去露营啦! {:}tent: 很快就回来.

真开心! {:}joy:
```

呈现的输出效果如下:

去露营啦! :tent: 很快就回来。

真开心! :joy:

以下**符号清单**是 emoji 代码的非常有用的参考。

## 表情与情感

### 笑脸表情

| 图标 | 代码 | 图标 | 代码 |
| :-: | - | :-: | - |
| :grinning: | `grinning` | :smiley: | `smiley` |
| :smile: | `smile` | :grin: | `grin` |
| :laughing: | `laughing` <br /> `satisfied` | :sweat_smile: | `sweat_smile` |
| :rofl: | `rofl` | :joy: | `joy` |
| :slightly_smiling_face: | `slightly_smiling_face` | :upside_down_face: | `upside_down_face` |
| :wink: | `wink` | :blush: | `blush` |
| :innocent: | `innocent` | | |

### 爱意表情

| 图标 | 代码 | 图标 | 代码 |
| :-: | - | :-: | - |
| :heart_eyes: | `heart_eyes` | :kissing_heart: | `kissing_heart` |
| :kissing: | `kissing` | :relaxed: | `relaxed` |
| :kissing_closed_eyes: | `kissing_closed_eyes` | :kissing_smiling_eyes: | `kissing_smiling_eyes` |

### 吐舌头表情

| 图标 | 代码 | 图标 | 代码 |
| :-: | - | :-: | - |
| :yum: | `yum` | :stuck_out_tongue: | `stuck_out_tongue` |
| :stuck_out_tongue_winking_eye: | `stuck_out_tongue_winking_eye` | :stuck_out_tongue_closed_eyes: | `stuck_out_tongue_closed_eyes` |
| :money_mouth_face: | `money_mouth_face` | | |


### 国家和地区旗帜

| 图标 | 代码 | 图标 | 代码 |
| :-: | - | :-: | - |
| :andorra: | `andorra` | :united_arab_emirates: | `united_arab_emirates` |
| :afghanistan: | `afghanistan` | :antigua_barbuda: | `antigua_barbuda` |
| :anguilla: | `anguilla` | :albania: | `albania` |
| :armenia: | `armenia` | :angola: | `angola` |
| :antarctica: | `antarctica` | :argentina: | `argentina` |
| :american_samoa: | `american_samoa` | :austria: | `austria` |
| :australia: | `australia` | :aruba: | `aruba` |
| :aland_islands: | `aland_islands` | :azerbaijan: | `azerbaijan` |
| :bosnia_herzegovina: | `bosnia_herzegovina` | :barbados: | `barbados` |
| :bangladesh: | `bangladesh` | :belgium: | `belgium` |
| :burkina_faso: | `burkina_faso` | :bulgaria: | `bulgaria` |
| :bahrain: | `bahrain` | :burundi: | `burundi` |
| :benin: | `benin` | :st_barthelemy: | `st_barthelemy` |
| :bermuda: | `bermuda` | :brunei: | `brunei` |
| :bolivia: | `bolivia` | :caribbean_netherlands: | `caribbean_netherlands` |
| :brazil: | `brazil` | :bahamas: | `bahamas` |
| :bhutan: | `bhutan` | :botswana: | `botswana` |
| :belarus: | `belarus` | :belize: | `belize` |
| :canada: | `canada` | :cocos_islands: | `cocos_islands` |
| :congo_kinshasa: | `congo_kinshasa` | :central_african_republic: | `central_african_republic` |
| :congo_brazzaville: | `congo_brazzaville` | :switzerland: | `switzerland` |
| :cote_divoire: | `cote_divoire` | :cook_islands: | `cook_islands` |
| :chile: | `chile` | :cameroon: | `cameroon` |
| :cn: | `cn` | :colombia: | `colombia` |
| :costa_rica: | `costa_rica` | :cuba: | `cuba` |
| :cape_verde: | `cape_verde` | :curacao: | `curacao` |
| :christmas_island: | `christmas_island` | :cyprus: | `cyprus` |
| :czech_republic: | `czech_republic` | :de: | `de` |
| :djibouti: | `djibouti` | :denmark: | `denmark` |
| :dominica: | `dominica` | :dominican_republic: | `dominican_republic` |
| :algeria: | `algeria` | :ecuador: | `ecuador` |
| :estonia: | `estonia` | :egypt: | `egypt` |
| :western_sahara: | `western_sahara` | :eritrea: | `eritrea` |
| :es: | `es` | :ethiopia: | `ethiopia` |
| :eu: | `eu` <br /> `european_union` | :finland: | `finland` |
| :fiji: | `fiji` | :falkland_islands: | `falkland_islands` |
| :micronesia: | `micronesia` | :faroe_islands: | `faroe_islands` |
| :fr: | `fr` | :gabon: | `gabon` |
| :gb: | `gb` <br /> `uk` | :grenada: | `grenada` |
| :georgia: | `georgia` | :french_guiana: | `french_guiana` |
| :guernsey: | `guernsey` | :ghana: | `ghana` |
| :gibraltar: | `gibraltar` | :greenland: | `greenland` |
| :gambia: | `gambia` | :guinea: | `guinea` |
| :guadeloupe: | `guadeloupe` | :equatorial_guinea: | `equatorial_guinea` |
| :greece: | `greece` | :south_georgia_south_sandwich_islands: | `south_georgia_south_sandwich_islands` |
| :guatemala: | `guatemala` | :guam: | `guam` |
| :guinea_bissau: | `guinea_bissau` | :guyana: | `guyana` |
| :hong_kong: | `hong_kong` | :honduras: | `honduras` |
| :croatia: | `croatia` | :haiti: | `haiti` |
| :hungary: | `hungary` | :canary_islands: | `canary_islands` |
| :indonesia: | `indonesia` | :ireland: | `ireland` |
| :israel: | `israel` | :isle_of_man: | `isle_of_man` |
| :india: | `india` | :british_indian_ocean_territory: | `british_indian_ocean_territory` |
| :iraq: | `iraq` | :iran: | `iran` |
| :iceland: | `iceland` | :it: | `it` |
| :jersey: | `jersey` | :jamaica: | `jamaica` |
| :jordan: | `jordan` | :jp: | `jp` |
| :kenya: | `kenya` | :kyrgyzstan: | `kyrgyzstan` |
| :cambodia: | `cambodia` | :kiribati: | `kiribati` |
| :comoros: | `comoros` | :st_kitts_nevis: | `st_kitts_nevis` |
| :north_korea: | `north_korea` | :kr: | `kr` |
| :kuwait: | `kuwait` | :cayman_islands: | `cayman_islands` |
| :kazakhstan: | `kazakhstan` | :laos: | `laos` |
| :lebanon: | `lebanon` | :st_lucia: | `st_lucia` |
| :liechtenstein: | `liechtenstein` | :sri_lanka: | `sri_lanka` |
| :liberia: | `liberia` | :lesotho: | `lesotho` |
| :lithuania: | `lithuania` | :luxembourg: | `luxembourg` |
| :latvia: | `latvia` | :libya: | `libya` |
| :morocco: | `morocco` | :monaco: | `monaco` |
| :moldova: | `moldova` | :montenegro: | `montenegro` |
| :madagascar: | `madagascar` | :marshall_islands: | `marshall_islands` |
| :macedonia: | `macedonia` | :mali: | `mali` |
| :myanmar: | `myanmar` | :mongolia: | `mongolia` |
| :macau: | `macau` | :northern_mariana_islands: | `northern_mariana_islands` |
| :martinique: | `martinique` | :mauritania: | `mauritania` |
| :montserrat: | `montserrat` | :malta: | `malta` |
| :mauritius: | `mauritius` | :maldives: | `maldives` |
| :malawi: | `malawi` | :mexico: | `mexico` |
| :malaysia: | `malaysia` | :mozambique: | `mozambique` |
| :namibia: | `namibia` | :new_caledonia: | `new_caledonia` |
| :niger: | `niger` | :norfolk_island: | `norfolk_island` |
| :nigeria: | `nigeria` | :nicaragua: | `nicaragua` |
| :netherlands: | `netherlands` | :norway: | `norway` |
| :nepal: | `nepal` | :nauru: | `nauru` |
| :niue: | `niue` | :new_zealand: | `new_zealand` |
| :oman: | `oman` | :panama: | `panama` |
| :peru: | `peru` | :french_polynesia: | `french_polynesia` |
| :papua_new_guinea: | `papua_new_guinea` | :philippines: | `philippines` |
| :pakistan: | `pakistan` | :poland: | `poland` |
| :st_pierre_miquelon: | `st_pierre_miquelon` | :pitcairn_islands: | `pitcairn_islands` |
| :puerto_rico: | `puerto_rico` | :palestinian_territories: | `palestinian_territories` |
| :portugal: | `portugal` | :palau: | `palau` |
| :paraguay: | `paraguay` | :qatar: | `qatar` |
| :reunion: | `reunion` | :romania: | `romania` |
| :serbia: | `serbia` | :ru: | `ru` |
| :rwanda: | `rwanda` | :saudi_arabia: | `saudi_arabia` |
| :solomon_islands: | `solomon_islands` | :seychelles: | `seychelles` |
| :sudan: | `sudan` | :sweden: | `sweden` |
| :singapore: | `singapore` | :st_helena: | `st_helena` |
| :slovenia: | `slovenia` | :slovakia: | `slovakia` |
| :sierra_leone: | `sierra_leone` | :san_marino: | `san_marino` |
| :senegal: | `senegal` | :somalia: | `somalia` |
| :suriname: | `suriname` | :south_sudan: | `south_sudan` |
| :sao_tome_principe: | `sao_tome_principe` | :el_salvador: | `el_salvador` |
| :sint_maarten: | `sint_maarten` | :syria: | `syria` |
| :swaziland: | `swaziland` | :turks_caicos_islands: | `turks_caicos_islands` |
| :chad: | `chad` | :french_southern_territories: | `french_southern_territories` |
| :togo: | `togo` | :thailand: | `thailand` |
| :tajikistan: | `tajikistan` | :tokelau: | `tokelau` |
| :timor_leste: | `timor_leste` | :turkmenistan: | `turkmenistan` |
| :tunisia: | `tunisia` | :tonga: | `tonga` |
| :tr: | `tr` | :trinidad_tobago: | `trinidad_tobago` |
| :tuvalu: | `tuvalu` | :taiwan: | `taiwan` |
| :tanzania: | `tanzania` | :ukraine: | `ukraine` |
| :uganda: | `uganda` | :us: | `us` |
| :uruguay: | `uruguay` | :uzbekistan: | `uzbekistan` |
| :vatican_city: | `vatican_city` | :st_vincent_grenadines: | `st_vincent_grenadines` |
| :venezuela: | `venezuela` | :british_virgin_islands: | `british_virgin_islands` |
| :us_virgin_islands: | `us_virgin_islands` | :vietnam: | `vietnam` |
| :vanuatu: | `vanuatu` | :wallis_futuna: | `wallis_futuna` |
| :samoa: | `samoa` | :kosovo: | `kosovo` |
| :yemen: | `yemen` | :mayotte: | `mayotte` |
| :south_africa: | `south_africa` | :zambia: | `zambia` |
| :zimbabwe: | `zimbabwe` | | |