// Beautiful full-colour "goal" artwork for every drawing.
// Each entry: { bg, svg } — svg is the inner content of a <svg viewBox="0 0 300 300">.
// Gradient/filter IDs are namespaced per subject so multiple goals can render on one page.
// Authored + verified via headless-render contact sheets.

const soft = (hex) => `radial-gradient(circle at 50% 40%, #fff, ${hex})`;

export const goals = {
  // ===== TIER 1 — First Steps =====
  balloon: { bg: soft('#eef4ff'), svg: `<defs><radialGradient id="ba_b" cx="38%" cy="30%" r="75%"><stop offset="0%" stop-color="#FF8FA3"/><stop offset="60%" stop-color="#F0576F"/><stop offset="100%" stop-color="#D13350"/></radialGradient></defs>
    <ellipse cx="150" cy="284" rx="20" ry="5" fill="#3a2233" opacity="0.12"/>
    <path d="M150,196 C140,214 162,226 150,244 C140,258 158,270 150,282" fill="none" stroke="#9aa3b8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M150,42 C106,42 86,84 86,118 C86,160 118,190 150,198 C182,190 214,160 214,118 C214,84 194,42 150,42 Z" fill="url(#ba_b)" stroke="#C22A46" stroke-width="4"/>
    <path d="M142,196 L158,196 L150,210 Z" fill="#E24862" stroke="#C22A46" stroke-width="3" stroke-linejoin="round"/>
    <ellipse cx="122" cy="92" rx="15" ry="24" fill="#fff" opacity="0.45" transform="rotate(-20 122 92)"/>` },

  apple: { bg: soft('#f3fbef'), svg: `<defs><radialGradient id="ap_b" cx="38%" cy="32%" r="80%"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="60%" stop-color="#E23B45"/><stop offset="100%" stop-color="#B71F2E"/></radialGradient><linearGradient id="ap_l" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8FD46A"/><stop offset="100%" stop-color="#4E9E3A"/></linearGradient></defs>
    <ellipse cx="150" cy="272" rx="60" ry="11" fill="#4a2a1a" opacity="0.12"/>
    <path d="M150,88 C140,74 120,70 106,78 C82,66 54,84 52,118 C50,150 66,196 96,224 C116,242 136,244 150,236 C164,244 184,242 204,224 C234,196 250,150 248,118 C246,84 218,66 194,78 C180,70 160,74 150,88 Z" fill="url(#ap_b)" stroke="#9E1B29" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M150,88 C148,66 150,50 158,40" fill="none" stroke="#7A4A28" stroke-width="7" stroke-linecap="round"/>
    <path d="M158,44 C176,26 206,26 216,40 C206,64 176,66 158,52 Z" fill="url(#ap_l)" stroke="#3E7E2E" stroke-width="3" stroke-linejoin="round"/>
    <path d="M170,48 C186,42 200,44 210,50" fill="none" stroke="#3E7E2E" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M96,120 C88,146 92,176 108,200" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" opacity="0.4"/>` },

  star: { bg: soft('#fff6e0'), svg: `<defs><linearGradient id="st_b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFE27A"/><stop offset="60%" stop-color="#FFC53D"/><stop offset="100%" stop-color="#F2A213"/></linearGradient></defs>
    <ellipse cx="150" cy="268" rx="58" ry="10" fill="#5a4410" opacity="0.12"/>
    <path d="M150,40 L182,116 L264,124 L202,178 L220,258 L150,214 L80,258 L98,178 L36,124 L118,116 Z" fill="url(#st_b)" stroke="#E0900C" stroke-width="5" stroke-linejoin="round"/>
    <path d="M150,70 L170,120 L134,120 Z" fill="#fff" opacity="0.35"/>
    <circle cx="128" cy="150" r="7" fill="#4a3510"/><circle cx="172" cy="150" r="7" fill="#4a3510"/>
    <circle cx="125" cy="147" r="2.6" fill="#fff"/><circle cx="169" cy="147" r="2.6" fill="#fff"/>
    <path d="M136,168 Q150,182 164,168" fill="none" stroke="#4a3510" stroke-width="4" stroke-linecap="round"/>
    <circle cx="118" cy="162" r="8" fill="#FF9EB0" opacity="0.55"/><circle cx="182" cy="162" r="8" fill="#FF9EB0" opacity="0.55"/>
    <g fill="#FFD447"><path d="M250,60 l4,-9 4,9 9,4 -9,4 -4,9 -4,-9 -9,-4 z"/><path d="M44,74 l3,-7 3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 z"/></g>` },

  sun: { bg: soft('#fff2d6'), svg: `<defs><radialGradient id="su_b" cx="42%" cy="38%" r="70%"><stop offset="0%" stop-color="#FFF0A6"/><stop offset="55%" stop-color="#FFD23D"/><stop offset="100%" stop-color="#FBA711"/></radialGradient></defs>
    <g fill="#FFC01F"><path d="M150,18 l12,34 -24,0 z"/><path d="M150,282 l12,-34 -24,0 z"/><path d="M18,150 l34,12 0,-24 z"/><path d="M282,150 l-34,12 0,-24 z"/><path d="M57,57 l30,14 -16,16 z"/><path d="M243,57 l-30,14 16,16 z"/><path d="M57,243 l30,-14 -16,-16 z"/><path d="M243,243 l-30,-14 16,-16 z"/></g>
    <circle cx="150" cy="150" r="78" fill="url(#su_b)" stroke="#E88E0C" stroke-width="4"/>
    <circle cx="126" cy="142" r="9" fill="#7a5210"/><circle cx="174" cy="142" r="9" fill="#7a5210"/>
    <circle cx="122" cy="138" r="3" fill="#fff"/><circle cx="170" cy="138" r="3" fill="#fff"/>
    <path d="M124,172 Q150,196 176,172" fill="none" stroke="#7a5210" stroke-width="5" stroke-linecap="round"/>
    <circle cx="108" cy="164" r="10" fill="#FF9B54" opacity="0.5"/><circle cx="192" cy="164" r="10" fill="#FF9B54" opacity="0.5"/>` },

  flower: { bg: soft('#fbeefb'), svg: `<defs><radialGradient id="fl_p" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#FFC1E3"/><stop offset="100%" stop-color="#F06CB0"/></radialGradient><radialGradient id="fl_c" cx="42%" cy="38%" r="70%"><stop offset="0%" stop-color="#FFE38A"/><stop offset="100%" stop-color="#F2A81E"/></radialGradient></defs>
    <path d="M150,140 C146,190 150,240 150,286" fill="none" stroke="#3E8E3A" stroke-width="7" stroke-linecap="round"/>
    <path d="M148,208 C120,196 98,204 92,222 C116,236 140,230 150,214 Z" fill="#69B84A" stroke="#3E8E3A" stroke-width="3" stroke-linejoin="round"/>
    <path d="M152,240 C180,228 202,236 208,254 C184,268 160,262 150,246 Z" fill="#69B84A" stroke="#3E8E3A" stroke-width="3" stroke-linejoin="round"/>
    <g stroke="#D94E9A" stroke-width="4"><ellipse cx="150" cy="78" rx="26" ry="34" fill="url(#fl_p)"/><ellipse cx="211" cy="108" rx="26" ry="34" fill="url(#fl_p)" transform="rotate(72 211 108)"/><ellipse cx="188" cy="176" rx="26" ry="34" fill="url(#fl_p)" transform="rotate(144 188 176)"/><ellipse cx="112" cy="176" rx="26" ry="34" fill="url(#fl_p)" transform="rotate(216 112 176)"/><ellipse cx="89" cy="108" rx="26" ry="34" fill="url(#fl_p)" transform="rotate(288 89 108)"/></g>
    <circle cx="150" cy="130" r="30" fill="url(#fl_c)" stroke="#D08A16" stroke-width="4"/>
    <g fill="#C97A10" opacity="0.6"><circle cx="140" cy="122" r="3"/><circle cx="158" cy="124" r="3"/><circle cx="150" cy="138" r="3"/><circle cx="138" cy="138" r="3"/><circle cx="162" cy="136" r="3"/></g>` },

  fish: { bg: soft('#e6f7ff'), svg: `<defs><linearGradient id="fi_b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFC24D"/><stop offset="100%" stop-color="#F58A20"/></linearGradient><linearGradient id="fi_t" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FF9E42"/><stop offset="100%" stop-color="#E8701A"/></linearGradient></defs>
    <path d="M214,150 L272,108 L260,150 L272,192 Z" fill="url(#fi_t)" stroke="#CF5F14" stroke-width="4" stroke-linejoin="round"/>
    <path d="M120,96 Q150,58 172,92 Q160,104 138,104 Z" fill="#F7A83A" stroke="#CF5F14" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M118,204 Q146,240 170,208 Q158,196 138,196 Z" fill="#F7A83A" stroke="#CF5F14" stroke-width="3.5" stroke-linejoin="round"/>
    <ellipse cx="132" cy="150" rx="86" ry="56" fill="url(#fi_b)" stroke="#CF5F14" stroke-width="4.5"/>
    <g fill="none" stroke="#E87A1C" stroke-width="5" opacity="0.55" stroke-linecap="round"><path d="M120,102 Q114,150 120,198"/><path d="M162,108 Q156,150 162,192"/><path d="M198,122 Q193,150 198,178"/></g>
    <path d="M120,150 Q108,166 118,182" fill="none" stroke="#CF5F14" stroke-width="4" stroke-linecap="round"/>
    <circle cx="86" cy="138" r="16" fill="#fff" stroke="#CF5F14" stroke-width="3"/>
    <circle cx="84" cy="140" r="8" fill="#333"/><circle cx="80" cy="136" r="3" fill="#fff"/>
    <path d="M66,166 Q78,176 92,170" fill="none" stroke="#CF5F14" stroke-width="3.5" stroke-linecap="round"/>` },

  ladybug: { bg: soft('#eefbef'), svg: `<defs><radialGradient id="lb_b" cx="40%" cy="26%" r="80%"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="60%" stop-color="#E5323C"/><stop offset="100%" stop-color="#B81E28"/></radialGradient></defs>
    <ellipse cx="150" cy="256" rx="72" ry="12" fill="#2a3a1a" opacity="0.12"/>
    <g stroke="#2b2b33" stroke-width="4" stroke-linecap="round"><path d="M120,70 Q108,44 92,36"/><path d="M180,70 Q192,44 208,36"/></g>
    <circle cx="92" cy="34" r="6" fill="#2b2b33"/><circle cx="208" cy="34" r="6" fill="#2b2b33"/>
    <path d="M60,150 A90 82 0 0 1 240,150 Q240,236 150,240 Q60,236 60,150 Z" fill="url(#lb_b)" stroke="#8E1721" stroke-width="4.5"/>
    <path d="M150,64 L150,240" stroke="#8E1721" stroke-width="4"/>
    <path d="M60,150 A90 68 0 0 1 240,150 Q225,120 150,118 Q75,120 60,150 Z" fill="#2b2b33"/>
    <circle cx="120" cy="134" r="8" fill="#fff"/><circle cx="180" cy="134" r="8" fill="#fff"/>
    <circle cx="122" cy="135" r="4" fill="#2b2b33"/><circle cx="178" cy="135" r="4" fill="#2b2b33"/>
    <path d="M132,150 Q150,162 168,150" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
    <g fill="#2b2b33"><circle cx="108" cy="180" r="12"/><circle cx="192" cy="180" r="12"/><circle cx="120" cy="214" r="10"/><circle cx="180" cy="214" r="10"/><circle cx="150" cy="200" r="11"/></g>` },

  heart: { bg: soft('#ffeef2'), svg: `<defs><radialGradient id="ht_b" cx="38%" cy="28%" r="80%"><stop offset="0%" stop-color="#FF8FA8"/><stop offset="55%" stop-color="#FF4D73"/><stop offset="100%" stop-color="#D6224C"/></radialGradient></defs>
    <ellipse cx="150" cy="272" rx="56" ry="10" fill="#5a1a2a" opacity="0.12"/>
    <path d="M150,252 C120,224 60,186 60,128 C60,92 86,70 116,70 C138,70 150,86 150,86 C150,86 162,70 184,70 C214,70 240,92 240,128 C240,186 180,224 150,252 Z" fill="url(#ht_b)" stroke="#B81E44" stroke-width="5" stroke-linejoin="round"/>
    <path d="M96,104 C86,116 82,134 86,152" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity="0.5"/>
    <circle cx="118" cy="98" r="8" fill="#fff" opacity="0.5"/>` },

  // ===== TIER 2 — Getting There =====
  cat: { bg: soft('#fff1e8'), svg: `<defs><radialGradient id="cat_b" cx="42%" cy="30%" r="80%"><stop offset="0%" stop-color="#FBCB8E"/><stop offset="100%" stop-color="#EE9F4E"/></radialGradient><linearGradient id="cat_t" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F3AC5E"/><stop offset="100%" stop-color="#E28E3B"/></linearGradient></defs>
    <ellipse cx="150" cy="272" rx="74" ry="12" fill="#6b4a28" opacity="0.12"/>
    <path d="M204,214 C252,214 254,150 226,132 C214,124 202,132 208,146 C220,140 226,158 216,172 C204,188 186,190 178,196 Z" fill="url(#cat_t)" stroke="#CE7C2E" stroke-width="5" stroke-linejoin="round"/>
    <path d="M96,214 C96,158 118,150 150,150 C182,150 204,158 204,214 C204,252 180,266 150,266 C120,266 96,252 96,214 Z" fill="url(#cat_b)" stroke="#CE7C2E" stroke-width="5" stroke-linejoin="round"/>
    <path d="M124,196 C124,176 136,170 150,170 C164,170 176,176 176,196 C176,236 164,258 150,258 C136,258 124,236 124,196 Z" fill="#FFF4E3"/>
    <ellipse cx="126" cy="260" rx="17" ry="12" fill="url(#cat_b)" stroke="#CE7C2E" stroke-width="4"/>
    <ellipse cx="174" cy="260" rx="17" ry="12" fill="url(#cat_b)" stroke="#CE7C2E" stroke-width="4"/>
    <path d="M112,74 L104,30 L146,62 Z" fill="url(#cat_b)" stroke="#CE7C2E" stroke-width="5" stroke-linejoin="round"/>
    <path d="M188,74 L196,30 L154,62 Z" fill="url(#cat_b)" stroke="#CE7C2E" stroke-width="5" stroke-linejoin="round"/>
    <path d="M116,66 L112,44 L134,60 Z" fill="#F7B8C6"/><path d="M184,66 L188,44 L166,60 Z" fill="#F7B8C6"/>
    <circle cx="150" cy="106" r="50" fill="url(#cat_b)" stroke="#CE7C2E" stroke-width="5"/>
    <path d="M120,66 q-2,12 6,18" fill="none" stroke="#DE8A3A" stroke-width="5" stroke-linecap="round"/>
    <path d="M180,66 q2,12 -6,18" fill="none" stroke="#DE8A3A" stroke-width="5" stroke-linecap="round"/>
    <circle cx="120" cy="118" r="11" fill="#F9AEC0" opacity="0.75"/><circle cx="180" cy="118" r="11" fill="#F9AEC0" opacity="0.75"/>
    <ellipse cx="131" cy="102" rx="9" ry="11" fill="#4a3b2a"/><ellipse cx="169" cy="102" rx="9" ry="11" fill="#4a3b2a"/>
    <circle cx="128" cy="98" r="3.4" fill="#fff"/><circle cx="166" cy="98" r="3.4" fill="#fff"/>
    <path d="M144,116 L156,116 L150,123 Z" fill="#E8778E"/>
    <path d="M150,123 Q143,131 137,127" fill="none" stroke="#B5632B" stroke-width="3" stroke-linecap="round"/>
    <path d="M150,123 Q157,131 163,127" fill="none" stroke="#B5632B" stroke-width="3" stroke-linecap="round"/>
    <g stroke="#C9843E" stroke-width="2.5" stroke-linecap="round"><path d="M112,110 L86,106"/><path d="M112,118 L86,120"/><path d="M188,110 L214,106"/><path d="M188,118 L214,120"/></g>` },

  dog: { bg: 'radial-gradient(circle at 50% 38%, #fff, #f4efe6)', svg: `<defs><radialGradient id="dg_b" cx="42%" cy="30%" r="80%"><stop offset="0%" stop-color="#E8C79A"/><stop offset="100%" stop-color="#C99A5F"/></radialGradient></defs>
    <ellipse cx="150" cy="272" rx="72" ry="12" fill="#4a3420" opacity="0.12"/>
    <path d="M104,206 C104,160 124,150 150,150 C176,150 196,160 196,206 C196,246 176,262 150,262 C124,262 104,246 104,206 Z" fill="url(#dg_b)" stroke="#A87B41" stroke-width="5"/>
    <path d="M126,198 C126,180 138,172 150,172 C162,172 174,180 174,198 C174,236 162,256 150,256 C138,256 126,236 126,198 Z" fill="#FBF1DD"/>
    <ellipse cx="124" cy="258" rx="17" ry="12" fill="url(#dg_b)" stroke="#A87B41" stroke-width="4"/>
    <ellipse cx="176" cy="258" rx="17" ry="12" fill="url(#dg_b)" stroke="#A87B41" stroke-width="4"/>
    <path d="M104,92 C74,86 60,120 66,158 C70,182 92,186 104,168 Z" fill="#A87B41" stroke="#8A6231" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M196,92 C226,86 240,120 234,158 C230,182 208,186 196,168 Z" fill="#A87B41" stroke="#8A6231" stroke-width="4.5" stroke-linejoin="round"/>
    <circle cx="150" cy="112" r="52" fill="url(#dg_b)" stroke="#A87B41" stroke-width="5"/>
    <path d="M150,74 C122,72 104,92 104,118 C104,132 112,140 122,140 C112,120 120,96 150,96 Z" fill="#B98A4E" opacity="0.55"/>
    <circle cx="130" cy="106" r="9" fill="#4a3320"/><circle cx="170" cy="106" r="9" fill="#4a3320"/>
    <circle cx="127" cy="102" r="3.2" fill="#fff"/><circle cx="167" cy="102" r="3.2" fill="#fff"/>
    <circle cx="115" cy="124" r="10" fill="#F6A6B4" opacity="0.6"/><circle cx="185" cy="124" r="10" fill="#F6A6B4" opacity="0.6"/>
    <ellipse cx="150" cy="128" rx="13" ry="10" fill="#3a2a1e"/>
    <path d="M150,138 L150,150" fill="none" stroke="#8A6231" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M150,150 Q136,160 130,150" fill="none" stroke="#8A6231" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M150,150 Q158,166 166,152 Q168,148 164,146 Z" fill="#EF7D8E"/>` },

  bunny: { bg: soft('#f4f0fb'), svg: `<defs><radialGradient id="bn_b" cx="42%" cy="30%" r="80%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#DDD8EC"/></radialGradient></defs>
    <ellipse cx="150" cy="272" rx="64" ry="11" fill="#3a2a4a" opacity="0.10"/>
    <path d="M126,60 C118,20 112,8 122,6 C134,4 138,30 140,74 Z" fill="url(#bn_b)" stroke="#B8B1CE" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M174,60 C182,20 188,8 178,6 C166,4 162,30 160,74 Z" fill="url(#bn_b)" stroke="#B8B1CE" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M128,58 C122,26 120,16 124,14" fill="none" stroke="#F4B8C8" stroke-width="6" stroke-linecap="round"/>
    <path d="M172,58 C178,26 180,16 176,14" fill="none" stroke="#F4B8C8" stroke-width="6" stroke-linecap="round"/>
    <path d="M108,210 C108,168 128,158 150,158 C172,158 192,168 192,210 C192,248 172,262 150,262 C128,262 108,248 108,210 Z" fill="url(#bn_b)" stroke="#B8B1CE" stroke-width="5"/>
    <ellipse cx="124" cy="258" rx="18" ry="11" fill="url(#bn_b)" stroke="#B8B1CE" stroke-width="4"/>
    <ellipse cx="176" cy="258" rx="18" ry="11" fill="url(#bn_b)" stroke="#B8B1CE" stroke-width="4"/>
    <circle cx="150" cy="118" r="50" fill="url(#bn_b)" stroke="#B8B1CE" stroke-width="5"/>
    <circle cx="131" cy="114" r="8" fill="#4a3a52"/><circle cx="169" cy="114" r="8" fill="#4a3a52"/>
    <circle cx="128" cy="110" r="3" fill="#fff"/><circle cx="166" cy="110" r="3" fill="#fff"/>
    <circle cx="116" cy="130" r="10" fill="#F9AEC8" opacity="0.6"/><circle cx="184" cy="130" r="10" fill="#F9AEC8" opacity="0.6"/>
    <path d="M144,130 L156,130 L150,137 Z" fill="#EF7D9E"/>
    <path d="M150,137 L150,146 M150,146 Q142,150 140,144 M150,146 Q158,150 160,144" fill="none" stroke="#B090A0" stroke-width="2.6" stroke-linecap="round"/>
    <g stroke="#C9C2DA" stroke-width="2.2" stroke-linecap="round"><path d="M112,124 L86,120"/><path d="M112,132 L86,134"/><path d="M188,124 L214,120"/><path d="M188,132 L214,134"/></g>` },

  house: { bg: soft('#eaf6ff'), svg: `<defs><linearGradient id="ho_w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFE9B8"/><stop offset="100%" stop-color="#F6CE7C"/></linearGradient><linearGradient id="ho_r" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F0708A"/><stop offset="100%" stop-color="#D2415F"/></linearGradient></defs>
    <ellipse cx="150" cy="272" rx="110" ry="12" fill="#2a4a2a" opacity="0.10"/>
    <rect x="188" y="86" width="24" height="52" rx="3" fill="#C24A63" stroke="#9E2E46" stroke-width="3.5"/>
    <g fill="#dfeaf0" opacity="0.85"><circle cx="200" cy="78" r="7"/><circle cx="208" cy="66" r="9"/><circle cx="196" cy="60" r="7"/></g>
    <rect x="72" y="150" width="156" height="112" rx="6" fill="url(#ho_w)" stroke="#D9A24E" stroke-width="4.5"/>
    <path d="M54,156 L150,74 L246,156 Z" fill="url(#ho_r)" stroke="#9E2E46" stroke-width="5" stroke-linejoin="round"/>
    <rect x="128" y="204" width="44" height="58" rx="4" fill="#9B5E36" stroke="#6E3E1F" stroke-width="4"/>
    <circle cx="162" cy="234" r="4" fill="#FFD86B"/>
    <g stroke="#8A6231" stroke-width="3.5"><rect x="90" y="172" width="36" height="36" rx="3" fill="#AEE0F5"/><line x1="108" y1="172" x2="108" y2="208"/><line x1="90" y1="190" x2="126" y2="190"/></g>
    <g stroke="#8A6231" stroke-width="3.5"><rect x="174" y="172" width="36" height="36" rx="3" fill="#AEE0F5"/><line x1="192" y1="172" x2="192" y2="208"/><line x1="174" y1="190" x2="210" y2="190"/></g>
    <path d="M92,200 A18 18 0 0 1 122,182" fill="none" stroke="#fff" stroke-width="3" opacity="0.6"/>` },

  tree: { bg: soft('#eef8ea'), svg: `<defs><radialGradient id="tr_c" cx="42%" cy="30%" r="80%"><stop offset="0%" stop-color="#8FD46A"/><stop offset="100%" stop-color="#3E8E3A"/></radialGradient><linearGradient id="tr_t" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#A9743E"/><stop offset="100%" stop-color="#7A4E24"/></linearGradient></defs>
    <ellipse cx="150" cy="278" rx="86" ry="12" fill="#2a4a2a" opacity="0.12"/>
    <path d="M132,278 L128,188 C128,178 172,178 172,188 L168,278 Z" fill="url(#tr_t)" stroke="#63401E" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M150,220 C150,200 132,192 120,196" fill="none" stroke="#63401E" stroke-width="4" stroke-linecap="round"/>
    <path d="M150,206 C150,188 170,182 182,188" fill="none" stroke="#63401E" stroke-width="4" stroke-linecap="round"/>
    <circle cx="102" cy="150" r="46" fill="url(#tr_c)" stroke="#2E7230" stroke-width="4.5"/>
    <circle cx="198" cy="150" r="46" fill="url(#tr_c)" stroke="#2E7230" stroke-width="4.5"/>
    <circle cx="150" cy="106" r="56" fill="url(#tr_c)" stroke="#2E7230" stroke-width="4.5"/>
    <circle cx="150" cy="150" r="50" fill="url(#tr_c)"/>
    <g fill="#7ECB5A" opacity="0.6"><circle cx="128" cy="92" r="14"/><circle cx="170" cy="100" r="12"/><circle cx="108" cy="150" r="13"/><circle cx="196" cy="150" r="12"/></g>
    <g fill="#F0577A"><circle cx="118" cy="130" r="6"/><circle cx="180" cy="122" r="6"/><circle cx="150" cy="160" r="6"/></g>` },

  rainbow: { bg: soft('#eef4ff'), svg: `<g fill="none" stroke-linecap="round">
      <path d="M40,240 A110 110 0 0 1 260,240" stroke="#F0577A" stroke-width="15"/>
      <path d="M55,240 A95 95 0 0 1 245,240" stroke="#F7A03A" stroke-width="15"/>
      <path d="M70,240 A80 80 0 0 1 230,240" stroke="#FFD23D" stroke-width="15"/>
      <path d="M85,240 A65 65 0 0 1 215,240" stroke="#5FC46A" stroke-width="15"/>
      <path d="M100,240 A50 50 0 0 1 200,240" stroke="#4FA3F0" stroke-width="15"/>
      <path d="M115,240 A35 35 0 0 1 185,240" stroke="#9B7BFF" stroke-width="15"/></g>
    <g fill="#fff" stroke="#D6E2F0" stroke-width="3"><ellipse cx="62" cy="250" rx="34" ry="22"/><circle cx="44" cy="244" r="18"/><circle cx="80" cy="244" r="20"/></g>
    <g fill="#fff" stroke="#D6E2F0" stroke-width="3"><ellipse cx="238" cy="250" rx="34" ry="22"/><circle cx="220" cy="244" r="20"/><circle cx="256" cy="244" r="18"/></g>
    <g fill="#FFD23D"><path d="M150,40 l4,-10 4,10 10,4 -10,4 -4,10 -4,-10 -10,-4 z"/></g>` },

  cupcake: { bg: soft('#fdeef6'), svg: `<defs><linearGradient id="cu_w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F5B45C"/><stop offset="100%" stop-color="#DE8E34"/></linearGradient><radialGradient id="cu_f" cx="42%" cy="30%" r="75%"><stop offset="0%" stop-color="#FFD1E8"/><stop offset="100%" stop-color="#F175B0"/></radialGradient></defs>
    <ellipse cx="150" cy="278" rx="66" ry="10" fill="#5a2a4a" opacity="0.10"/>
    <path d="M96,182 L108,268 L192,268 L204,182 Z" fill="url(#cu_w)" stroke="#B9701E" stroke-width="4.5" stroke-linejoin="round"/>
    <g stroke="#C98A3E" stroke-width="3" opacity="0.7"><line x1="128" y1="188" x2="132" y2="266"/><line x1="150" y1="188" x2="150" y2="266"/><line x1="172" y1="188" x2="168" y2="266"/></g>
    <path d="M92,186 C88,150 108,150 118,158 C122,132 150,132 156,152 C164,128 192,134 190,160 C210,152 216,178 208,186 Z" fill="url(#cu_f)" stroke="#D6488E" stroke-width="4.5" stroke-linejoin="round"/>
    <circle cx="150" cy="112" r="15" fill="#E5323C" stroke="#B81E28" stroke-width="3.5"/>
    <path d="M150,98 C154,84 164,78 174,80" fill="none" stroke="#5FA33A" stroke-width="4" stroke-linecap="round"/>
    <g stroke-width="4" stroke-linecap="round"><path d="M118,166 l8,-6" stroke="#5FC46A"/><path d="M140,158 l6,7" stroke="#4FA3F0"/><path d="M168,160 l8,-5" stroke="#FFD23D"/><path d="M186,172 l6,6" stroke="#9B7BFF"/><path d="M128,176 l7,5" stroke="#FF8A3D"/></g>` },

  icecream: { bg: soft('#fff5ea'), svg: `<defs><radialGradient id="ic_s1" cx="40%" cy="30%" r="80%"><stop offset="0%" stop-color="#FFD1E0"/><stop offset="100%" stop-color="#F587AC"/></radialGradient><radialGradient id="ic_s2" cx="40%" cy="30%" r="80%"><stop offset="0%" stop-color="#D6F5E0"/><stop offset="100%" stop-color="#7FD6A6"/></radialGradient><linearGradient id="ic_c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F0C878"/><stop offset="100%" stop-color="#C89646"/></linearGradient></defs>
    <path d="M114,168 L150,286 L186,168 Z" fill="url(#ic_c)" stroke="#A9742E" stroke-width="4.5" stroke-linejoin="round"/>
    <g stroke="#A9742E" stroke-width="2.5" opacity="0.7"><line x1="122" y1="182" x2="150" y2="238"/><line x1="178" y1="182" x2="150" y2="238"/><line x1="128" y1="200" x2="172" y2="200"/><line x1="136" y1="224" x2="164" y2="224"/></g>
    <path d="M112,176 C96,176 100,158 116,158 C112,144 132,138 140,150 C150,140 172,146 168,160 C186,156 190,176 176,178 Z" fill="url(#ic_s1)" stroke="#D9629A" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="150" cy="120" r="40" fill="url(#ic_s2)" stroke="#4FAE7D" stroke-width="4.5"/>
    <circle cx="150" cy="82" r="12" fill="#E5323C" stroke="#B81E28" stroke-width="3"/>
    <path d="M150,70 C152,58 160,54 168,56" fill="none" stroke="#5FA33A" stroke-width="3.5" stroke-linecap="round"/>
    <g fill="#fff" opacity="0.6"><circle cx="132" cy="104" r="5"/><circle cx="164" cy="98" r="4"/><circle cx="158" cy="130" r="4"/></g>` },

  sailboat: { bg: soft('#e6f6ff'), svg: `<defs><linearGradient id="sb_s1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#DCE6F0"/></linearGradient><linearGradient id="sb_s2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFE0E6"/><stop offset="100%" stop-color="#F7B7C4"/></linearGradient><linearGradient id="sb_w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5FB8F0"/><stop offset="100%" stop-color="#2E86C8"/></linearGradient></defs>
    <circle cx="234" cy="66" r="22" fill="#FFD23D"/>
    <path d="M150,68 L150,196" stroke="#8A5E34" stroke-width="5" stroke-linecap="round"/>
    <path d="M156,74 L226,190 L156,190 Z" fill="url(#sb_s2)" stroke="#E58AA0" stroke-width="4" stroke-linejoin="round"/>
    <path d="M144,90 L82,190 L144,190 Z" fill="url(#sb_s1)" stroke="#B7C4D6" stroke-width="4" stroke-linejoin="round"/>
    <path d="M150,66 L182,76 L150,86 Z" fill="#F0577A" stroke="#D2415F" stroke-width="3" stroke-linejoin="round"/>
    <path d="M64,196 L86,240 L214,240 L236,196 Z" fill="#D2593A" stroke="#A53E24" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M64,196 L236,196" stroke="#F2E2D0" stroke-width="6"/>
    <g fill="none" stroke="url(#sb_w)" stroke-width="6" stroke-linecap="round"><path d="M30,254 Q54,244 78,254 Q102,264 126,254"/><path d="M150,254 Q174,244 198,254 Q222,264 246,254"/><path d="M60,272 Q84,262 108,272 Q132,282 156,272 Q180,262 204,272"/></g>` },

  // ===== TIER 3 — Nice Work =====
  butterfly: { bg: soft('#f1f7ff'), svg: `<defs><linearGradient id="bf_u" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8E7BFF"/><stop offset="100%" stop-color="#5A9BFF"/></linearGradient><linearGradient id="bf_l" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF8FC8"/><stop offset="100%" stop-color="#F45CA0"/></linearGradient></defs>
    <path d="M148,150 C110,96 74,84 62,110 C50,138 78,168 120,164 C136,162 146,158 148,150 Z" fill="url(#bf_u)" stroke="#5645C4" stroke-width="4" stroke-linejoin="round"/>
    <path d="M152,150 C190,96 226,84 238,110 C250,138 222,168 180,164 C164,162 154,158 152,150 Z" fill="url(#bf_u)" stroke="#5645C4" stroke-width="4" stroke-linejoin="round"/>
    <path d="M148,152 C122,178 100,196 96,222 C92,246 122,246 140,222 C148,210 150,190 148,152 Z" fill="url(#bf_l)" stroke="#D63E86" stroke-width="4" stroke-linejoin="round"/>
    <path d="M152,152 C178,178 200,196 204,222 C208,246 178,246 160,222 C152,210 150,190 152,152 Z" fill="url(#bf_l)" stroke="#D63E86" stroke-width="4" stroke-linejoin="round"/>
    <g fill="#fff" opacity="0.85"><circle cx="98" cy="122" r="11"/><circle cx="202" cy="122" r="11"/><circle cx="120" cy="220" r="8"/><circle cx="180" cy="220" r="8"/></g>
    <g fill="#FFE38A"><circle cx="98" cy="122" r="5"/><circle cx="202" cy="122" r="5"/></g>
    <rect x="144" y="128" width="12" height="80" rx="6" fill="#4a3a2a"/>
    <circle cx="150" cy="124" r="9" fill="#4a3a2a"/>
    <path d="M146,116 C138,96 128,86 118,82" fill="none" stroke="#4a3a2a" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M154,116 C162,96 172,86 182,82" fill="none" stroke="#4a3a2a" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="116" cy="80" r="5" fill="#4a3a2a"/><circle cx="184" cy="80" r="5" fill="#4a3a2a"/>
    <circle cx="146" cy="121" r="2.4" fill="#fff"/>` },

  fox: { bg: soft('#fff2e8'), svg: `<defs><radialGradient id="fox_h" cx="45%" cy="32%" r="80%"><stop offset="0%" stop-color="#FF9A52"/><stop offset="100%" stop-color="#EE6E2C"/></radialGradient><linearGradient id="fox_t" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F47E38"/><stop offset="70%" stop-color="#EA6A28"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs>
    <ellipse cx="150" cy="270" rx="70" ry="11" fill="#5a3a1f" opacity="0.12"/>
    <path d="M198,206 C260,196 262,120 224,120 C246,150 214,178 176,182 Z" fill="url(#fox_t)" stroke="#D45E22" stroke-width="5" stroke-linejoin="round"/>
    <path d="M232,132 C250,150 232,172 208,176" fill="#FFF4E8"/>
    <path d="M104,206 C104,164 124,156 150,156 C176,156 196,164 196,206 C196,244 176,258 150,258 C124,258 104,244 104,206 Z" fill="url(#fox_h)" stroke="#D45E22" stroke-width="5"/>
    <path d="M126,196 C126,178 138,172 150,172 C162,172 174,178 174,196 C174,232 162,252 150,252 C138,252 126,232 126,196 Z" fill="#FFF4E8"/>
    <rect x="124" y="238" width="16" height="24" rx="7" fill="#3a2a20"/>
    <rect x="160" y="238" width="16" height="24" rx="7" fill="#3a2a20"/>
    <path d="M108,84 L96,28 L150,66 Z" fill="url(#fox_h)" stroke="#D45E22" stroke-width="5" stroke-linejoin="round"/>
    <path d="M192,84 L204,28 L150,66 Z" fill="url(#fox_h)" stroke="#D45E22" stroke-width="5" stroke-linejoin="round"/>
    <path d="M114,74 L108,44 L138,64 Z" fill="#3a2a20"/><path d="M186,74 L192,44 L162,64 Z" fill="#3a2a20"/>
    <path d="M100,104 C100,74 122,58 150,58 C178,58 200,74 200,104 C200,128 186,142 168,150 L150,176 L132,150 C114,142 100,128 100,104 Z" fill="url(#fox_h)" stroke="#D45E22" stroke-width="5" stroke-linejoin="round"/>
    <path d="M150,176 L124,140 C136,152 164,152 176,140 Z" fill="#FFF4E8"/>
    <path d="M124,120 Q150,150 176,120 L176,132 Q150,150 124,132 Z" fill="#FFF4E8"/>
    <circle cx="120" cy="118" r="9" fill="#FBA9B6" opacity="0.7"/><circle cx="180" cy="118" r="9" fill="#FBA9B6" opacity="0.7"/>
    <circle cx="131" cy="106" r="8" fill="#33261c"/><circle cx="169" cy="106" r="8" fill="#33261c"/>
    <circle cx="128" cy="103" r="2.8" fill="#fff"/><circle cx="166" cy="103" r="2.8" fill="#fff"/>
    <path d="M143,150 L157,150 L150,159 Z" fill="#33261c"/>` },

  penguin: { bg: soft('#e8f4ff'), svg: `<defs><radialGradient id="pn_b" cx="42%" cy="26%" r="80%"><stop offset="0%" stop-color="#4a5568"/><stop offset="100%" stop-color="#28303f"/></radialGradient></defs>
    <ellipse cx="150" cy="276" rx="66" ry="11" fill="#1a2a3a" opacity="0.14"/>
    <path d="M92,168 C92,96 116,58 150,58 C184,58 208,96 208,168 C208,232 182,268 150,268 C118,268 92,232 92,168 Z" fill="url(#pn_b)" stroke="#1c2431" stroke-width="4.5"/>
    <path d="M120,158 C120,110 134,84 150,84 C166,84 180,110 180,158 C180,210 168,246 150,246 C132,246 120,210 120,158 Z" fill="#F7FAFF"/>
    <path d="M96,150 C74,158 66,188 74,214 C88,206 96,180 100,160 Z" fill="#39424f" stroke="#1c2431" stroke-width="4" stroke-linejoin="round"/>
    <path d="M204,150 C226,158 234,188 226,214 C212,206 204,180 200,160 Z" fill="#39424f" stroke="#1c2431" stroke-width="4" stroke-linejoin="round"/>
    <path d="M126,266 C120,278 132,282 144,278 L146,262 Z" fill="#F5A623" stroke="#D2860F" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M174,266 C180,278 168,282 156,278 L154,262 Z" fill="#F5A623" stroke="#D2860F" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="132" cy="130" r="9" fill="#2b2b33"/><circle cx="168" cy="130" r="9" fill="#2b2b33"/>
    <circle cx="129" cy="126" r="3.2" fill="#fff"/><circle cx="165" cy="126" r="3.2" fill="#fff"/>
    <circle cx="120" cy="146" r="9" fill="#F9AEC8" opacity="0.7"/><circle cx="180" cy="146" r="9" fill="#F9AEC8" opacity="0.7"/>
    <path d="M138,142 L162,142 L150,158 Z" fill="#F5A623" stroke="#D2860F" stroke-width="3" stroke-linejoin="round"/>` },

  owl: { bg: soft('#f5efe4'), svg: `<defs><radialGradient id="ow_b" cx="42%" cy="28%" r="80%"><stop offset="0%" stop-color="#B98A5A"/><stop offset="100%" stop-color="#8A5E34"/></radialGradient></defs>
    <ellipse cx="150" cy="272" rx="64" ry="11" fill="#3a2a1a" opacity="0.12"/>
    <path d="M96,84 L118,120 L84,116 Z" fill="url(#ow_b)" stroke="#6E4A28" stroke-width="4" stroke-linejoin="round"/>
    <path d="M204,84 L182,120 L216,116 Z" fill="url(#ow_b)" stroke="#6E4A28" stroke-width="4" stroke-linejoin="round"/>
    <path d="M84,150 C84,92 112,68 150,68 C188,68 216,92 216,150 C216,214 186,258 150,258 C114,258 84,214 84,150 Z" fill="url(#ow_b)" stroke="#6E4A28" stroke-width="5"/>
    <path d="M150,150 C150,120 138,108 118,112 C98,116 92,150 108,182 C120,206 138,214 150,210 Z" fill="#E9CFA6" opacity="0.75"/>
    <path d="M150,150 C150,120 162,108 182,112 C202,116 208,150 192,182 C180,206 162,214 150,210 Z" fill="#E9CFA6" opacity="0.55"/>
    <circle cx="120" cy="132" r="30" fill="#F7EFDD" stroke="#6E4A28" stroke-width="4"/>
    <circle cx="180" cy="132" r="30" fill="#F7EFDD" stroke="#6E4A28" stroke-width="4"/>
    <circle cx="120" cy="134" r="15" fill="#3a2a1e"/><circle cx="180" cy="134" r="15" fill="#3a2a1e"/>
    <circle cx="115" cy="129" r="5" fill="#fff"/><circle cx="175" cy="129" r="5" fill="#fff"/>
    <path d="M138,150 L162,150 L150,168 Z" fill="#F5A623" stroke="#D2860F" stroke-width="3" stroke-linejoin="round"/>
    <path d="M126,254 L120,268 M134,256 L132,270 M142,256 L142,270" stroke="#F5A623" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M158,256 L158,270 M166,256 L168,270 M174,254 L180,268" stroke="#F5A623" stroke-width="5" stroke-linecap="round" fill="none"/>` },

  rocket: { bg: soft('#eef2ff'), svg: `<defs><linearGradient id="rk_b" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#E8ECF4"/><stop offset="45%" stop-color="#FBFCFF"/><stop offset="100%" stop-color="#C3CBDC"/></linearGradient><linearGradient id="rk_n" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#F0596A"/><stop offset="50%" stop-color="#FF7C8A"/><stop offset="100%" stop-color="#D8394C"/></linearGradient><radialGradient id="rk_f" cx="50%" cy="10%" r="90%"><stop offset="0%" stop-color="#FFF3B0"/><stop offset="45%" stop-color="#FFC04D"/><stop offset="100%" stop-color="#FF6A3D"/></radialGradient><radialGradient id="rk_win" cx="35%" cy="30%" r="80%"><stop offset="0%" stop-color="#BFefff"/><stop offset="60%" stop-color="#5BB8E8"/><stop offset="100%" stop-color="#2E77B8"/></radialGradient></defs>
    <g fill="#FFD98A"><path d="M58,60 L61,52 L64,60 L72,63 L64,66 L61,74 L58,66 L50,63 Z"/><path d="M242,86 L245,79 L248,86 L255,89 L248,92 L245,99 L242,92 L235,89 Z"/><circle cx="70" cy="150" r="3"/><circle cx="232" cy="168" r="3"/><circle cx="52" cy="210" r="2.5"/><circle cx="250" cy="140" r="2.5"/></g>
    <path d="M126,228 Q150,320 174,228 Q168,250 150,258 Q132,250 126,228 Z" fill="url(#rk_f)"/>
    <path d="M138,230 Q150,290 162,230 Q156,246 150,250 Q144,246 138,230 Z" fill="#FFE08A"/>
    <path d="M124,196 L82,252 L124,236 Z" fill="#E45C6B" stroke="#C23a49" stroke-width="4" stroke-linejoin="round"/>
    <path d="M176,196 L218,252 L176,236 Z" fill="#E45C6B" stroke="#C23a49" stroke-width="4" stroke-linejoin="round"/>
    <path d="M124,120 Q124,60 150,26 Q176,60 176,120 L176,224 Q150,236 124,224 Z" fill="url(#rk_b)" stroke="#9AA5BC" stroke-width="4" stroke-linejoin="round"/>
    <path d="M124,120 Q124,60 150,26 Q176,60 176,120 Z" fill="url(#rk_n)" stroke="#C23a49" stroke-width="4" stroke-linejoin="round"/>
    <path d="M124,214 Q150,226 176,214" fill="none" stroke="#B9C2D6" stroke-width="4"/>
    <circle cx="150" cy="150" r="24" fill="#DfEAF7" stroke="#9AA5BC" stroke-width="4"/>
    <circle cx="150" cy="150" r="17" fill="url(#rk_win)"/>
    <path d="M141,143 A11 11 0 0 1 158,142" fill="none" stroke="#EAF6FF" stroke-width="4" stroke-linecap="round" opacity="0.8"/>` },

  // ===== TIER 4 — Impressive =====
  castle: { bg: soft('#eef0fb'), svg: `<defs><linearGradient id="ca_s" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E4DEF2"/><stop offset="100%" stop-color="#B4ABD0"/></linearGradient><linearGradient id="ca_r" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7C8CF5"/><stop offset="100%" stop-color="#4A5BD6"/></linearGradient></defs>
    <ellipse cx="150" cy="278" rx="112" ry="12" fill="#2a2a4a" opacity="0.10"/>
    <rect x="96" y="176" width="108" height="94" fill="url(#ca_s)" stroke="#8E85B2" stroke-width="4"/>
    <rect x="52" y="128" width="52" height="142" fill="url(#ca_s)" stroke="#8E85B2" stroke-width="4"/>
    <rect x="196" y="128" width="52" height="142" fill="url(#ca_s)" stroke="#8E85B2" stroke-width="4"/>
    <rect x="118" y="96" width="64" height="174" fill="url(#ca_s)" stroke="#8E85B2" stroke-width="4"/>
    <path d="M46,130 L78,74 L110,130 Z" fill="url(#ca_r)" stroke="#3A49B0" stroke-width="4" stroke-linejoin="round"/>
    <path d="M190,130 L222,74 L254,130 Z" fill="url(#ca_r)" stroke="#3A49B0" stroke-width="4" stroke-linejoin="round"/>
    <path d="M110,98 L150,32 L190,98 Z" fill="url(#ca_r)" stroke="#3A49B0" stroke-width="4" stroke-linejoin="round"/>
    <g fill="#B4ABD0" stroke="#8E85B2" stroke-width="3"><rect x="96" y="164" width="14" height="14"/><rect x="120" y="164" width="14" height="14"/><rect x="166" y="164" width="14" height="14"/><rect x="190" y="164" width="14" height="14"/></g>
    <path d="M132,270 L132,224 A18 18 0 0 1 168,224 L168,270 Z" fill="#8A5E34" stroke="#5E3E1E" stroke-width="4" stroke-linejoin="round"/>
    <line x1="150" y1="208" x2="150" y2="270" stroke="#5E3E1E" stroke-width="3"/>
    <g fill="#FFD23D" stroke="#D9A319" stroke-width="2.5"><path d="M64,160 h24 v22 a12 12 0 0 1 -24 0 Z"/><path d="M208,160 h24 v22 a12 12 0 0 1 -24 0 Z"/></g>
    <g stroke="#F0577A" stroke-width="3"><line x1="78" y1="74" x2="78" y2="52"/><line x1="222" y1="74" x2="222" y2="52"/><line x1="150" y1="32" x2="150" y2="12"/></g>
    <g fill="#F0577A"><path d="M78,52 L98,58 L78,64 Z"/><path d="M222,52 L242,58 L222,64 Z"/><path d="M150,12 L172,19 L150,26 Z"/></g>` },

  unicorn: { bg: soft('#fbeefb'), svg: `<defs><radialGradient id="un_b" cx="42%" cy="30%" r="80%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#EDE6FA"/></radialGradient><linearGradient id="un_h" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#FFE59A"/><stop offset="100%" stop-color="#F5B833"/></linearGradient></defs>
    <ellipse cx="150" cy="276" rx="66" ry="11" fill="#4a2a5a" opacity="0.10"/>
    <path d="M196,206 C240,206 246,150 220,138 C232,160 210,182 178,184 Z" fill="#C9A6F0"/>
    <path d="M200,204 C236,200 240,156 220,146" fill="none" stroke="#F0577A" stroke-width="7" stroke-linecap="round"/>
    <path d="M204,206 C236,204 238,164 222,156" fill="none" stroke="#FFC53D" stroke-width="7" stroke-linecap="round"/>
    <path d="M208,206 C234,206 236,172 224,166" fill="none" stroke="#5FC46A" stroke-width="7" stroke-linecap="round"/>
    <path d="M108,208 C108,166 128,156 150,156 C172,156 192,166 192,208 C192,246 172,260 150,260 C128,260 108,246 108,208 Z" fill="url(#un_b)" stroke="#C4B8E4" stroke-width="5"/>
    <g fill="url(#un_b)" stroke="#C4B8E4" stroke-width="4"><ellipse cx="126" cy="258" rx="14" ry="10"/><ellipse cx="174" cy="258" rx="14" ry="10"/></g>
    <path d="M116,80 L104,44 L142,66 Z" fill="url(#un_b)" stroke="#C4B8E4" stroke-width="4.5" stroke-linejoin="round"/>
    <circle cx="150" cy="108" r="50" fill="url(#un_b)" stroke="#C4B8E4" stroke-width="5"/>
    <path d="M150,60 L138,10 L166,58 Z" fill="url(#un_h)" stroke="#DF9B1E" stroke-width="3.5" stroke-linejoin="round"/>
    <g stroke="#DF9B1E" stroke-width="2.5"><line x1="145" y1="46" x2="158" y2="44"/><line x1="148" y1="34" x2="159" y2="33"/><line x1="151" y1="22" x2="160" y2="22"/></g>
    <path d="M160,66 C186,60 196,86 182,104 C176,84 170,74 156,74 Z" fill="#F0577A"/>
    <path d="M164,74 C186,72 192,96 180,112" fill="none" stroke="#FFC53D" stroke-width="6" stroke-linecap="round"/>
    <path d="M166,84 C184,84 188,106 178,120" fill="none" stroke="#5FC46A" stroke-width="6" stroke-linecap="round"/>
    <path d="M120,102 Q126,92 134,102" fill="none" stroke="#5a4a6a" stroke-width="4" stroke-linecap="round"/>
    <path d="M158,104 A7 8 0 0 1 158,120" fill="#5a4a6a"/>
    <circle cx="160" cy="108" r="2.4" fill="#fff"/>
    <circle cx="122" cy="124" r="10" fill="#F9AEC8" opacity="0.7"/><circle cx="176" cy="126" r="10" fill="#F9AEC8" opacity="0.7"/>
    <g fill="#FFD447"><path d="M60,90 l3,-8 3,8 8,3 -8,3 -3,8 -3,-8 -8,-3 z"/><path d="M238,190 l3,-8 3,8 8,3 -8,3 -3,8 -3,-8 -8,-3 z"/><circle cx="72" cy="200" r="3"/></g>` },

  dragon: { bg: soft('#eefaf0'), svg: `<defs><radialGradient id="dr_b" cx="42%" cy="28%" r="80%"><stop offset="0%" stop-color="#8FE06A"/><stop offset="100%" stop-color="#43A64A"/></radialGradient><linearGradient id="dr_w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B79BF0"/><stop offset="100%" stop-color="#8A63D6"/></linearGradient></defs>
    <ellipse cx="150" cy="276" rx="70" ry="11" fill="#1a3a1a" opacity="0.12"/>
    <path d="M196,214 C250,220 258,168 232,150 C242,176 214,190 184,182 Z" fill="url(#dr_b)" stroke="#2E8236" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M244,158 l14,-10 -2,16 14,4 -14,8 2,14 -14,-10 Z" fill="#F5C94A" stroke="#D9A319" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M112,150 C70,120 44,128 46,158 C48,186 84,192 116,180 Z" fill="url(#dr_w)" stroke="#6C46B8" stroke-width="4" stroke-linejoin="round"/>
    <path d="M108,156 C82,142 66,148 66,164" fill="none" stroke="#6C46B8" stroke-width="3"/>
    <path d="M104,206 C104,158 126,148 150,148 C174,148 196,158 196,206 C196,246 174,262 150,262 C126,262 104,246 104,206 Z" fill="url(#dr_b)" stroke="#2E8236" stroke-width="5"/>
    <path d="M126,200 C126,176 138,168 150,168 C162,168 174,176 174,200 C174,232 162,252 150,252 C138,252 126,232 126,200 Z" fill="#F3E7B8"/>
    <g stroke="#D9C87E" stroke-width="2.5"><line x1="134" y1="192" x2="166" y2="192"/><line x1="134" y1="212" x2="166" y2="212"/><line x1="138" y1="232" x2="162" y2="232"/></g>
    <g fill="url(#dr_b)" stroke="#2E8236" stroke-width="4"><ellipse cx="126" cy="258" rx="15" ry="10"/><ellipse cx="174" cy="258" rx="15" ry="10"/></g>
    <path d="M118,86 L108,58 L132,78 Z" fill="#F5C94A" stroke="#D9A319" stroke-width="3" stroke-linejoin="round"/>
    <path d="M182,86 L192,58 L168,78 Z" fill="#F5C94A" stroke="#D9A319" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="150" cy="110" r="50" fill="url(#dr_b)" stroke="#2E8236" stroke-width="5"/>
    <path d="M150,150 C126,150 116,132 118,120 C140,128 160,128 182,120 C184,132 174,150 150,150 Z" fill="#F3E7B8"/>
    <circle cx="130" cy="104" r="10" fill="#fff" stroke="#2E8236" stroke-width="2.5"/><circle cx="170" cy="104" r="10" fill="#fff" stroke="#2E8236" stroke-width="2.5"/>
    <circle cx="131" cy="106" r="5" fill="#2b2b33"/><circle cx="171" cy="106" r="5" fill="#2b2b33"/>
    <circle cx="128" cy="102" r="2" fill="#fff"/><circle cx="168" cy="102" r="2" fill="#fff"/>
    <circle cx="139" cy="128" r="2.6" fill="#2b6a2e"/><circle cx="161" cy="128" r="2.6" fill="#2b6a2e"/>
    <circle cx="118" cy="124" r="9" fill="#F9AEC8" opacity="0.6"/><circle cx="182" cy="124" r="9" fill="#F9AEC8" opacity="0.6"/>` },

  robot: { bg: soft('#e9f3fb'), svg: `<defs><linearGradient id="ro_b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EAF0F6"/><stop offset="100%" stop-color="#B9C6D6"/></linearGradient><linearGradient id="ro_h" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F3F7FB"/><stop offset="100%" stop-color="#C6D2E0"/></linearGradient></defs>
    <ellipse cx="150" cy="278" rx="72" ry="11" fill="#1a2a3a" opacity="0.12"/>
    <line x1="150" y1="58" x2="150" y2="34" stroke="#8FA0B4" stroke-width="4"/>
    <circle cx="150" cy="28" r="8" fill="#F0577A" stroke="#D2415F" stroke-width="2.5"/>
    <rect x="94" y="60" width="112" height="86" rx="20" fill="url(#ro_h)" stroke="#8FA0B4" stroke-width="4.5"/>
    <rect x="108" y="76" width="84" height="54" rx="12" fill="#2A3648" stroke="#1c2431" stroke-width="3"/>
    <circle cx="132" cy="100" r="10" fill="#5FE0D0"/><circle cx="168" cy="100" r="10" fill="#5FE0D0"/>
    <circle cx="129" cy="97" r="3" fill="#fff"/><circle cx="165" cy="97" r="3" fill="#fff"/>
    <path d="M134,116 Q150,126 166,116" fill="none" stroke="#5FE0D0" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="102" y="152" width="96" height="86" rx="16" fill="url(#ro_b)" stroke="#8FA0B4" stroke-width="4.5"/>
    <circle cx="128" cy="178" r="7" fill="#F5A623"/><circle cx="150" cy="178" r="7" fill="#5FC46A"/><circle cx="172" cy="178" r="7" fill="#F0577A"/>
    <rect x="120" y="198" width="60" height="26" rx="7" fill="#2A3648"/>
    <g stroke="#5FE0D0" stroke-width="3" stroke-linecap="round" fill="none"><path d="M130,211 l8,0 4,-8 4,14 4,-6 8,0"/></g>
    <g fill="url(#ro_b)" stroke="#8FA0B4" stroke-width="4"><rect x="70" y="160" width="20" height="48" rx="10"/><rect x="210" y="160" width="20" height="48" rx="10"/></g>
    <circle cx="80" cy="216" r="11" fill="#5FE0D0" stroke="#3AB0A2" stroke-width="3"/><circle cx="220" cy="216" r="11" fill="#5FE0D0" stroke="#3AB0A2" stroke-width="3"/>
    <g fill="url(#ro_b)" stroke="#8FA0B4" stroke-width="4"><rect x="116" y="238" width="24" height="28" rx="8"/><rect x="160" y="238" width="24" height="28" rx="8"/></g>` },

  koala: { bg: soft('#eef7f2'), svg: `<defs><radialGradient id="ko_b" cx="42%" cy="28%" r="80%"><stop offset="0%" stop-color="#C3CBD4"/><stop offset="100%" stop-color="#8E97A4"/></radialGradient></defs>
    <ellipse cx="150" cy="276" rx="66" ry="11" fill="#2a3a3a" opacity="0.10"/>
    <path d="M92,120 C58,110 46,74 66,58 C90,40 118,64 116,96 Z" fill="url(#ko_b)" stroke="#6E7684" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M208,120 C242,110 254,74 234,58 C210,40 182,64 184,96 Z" fill="url(#ko_b)" stroke="#6E7684" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M96,108 C74,100 66,78 80,68 C96,58 112,74 110,94 Z" fill="#F3C6D2"/>
    <path d="M204,108 C226,100 234,78 220,68 C204,58 188,74 190,94 Z" fill="#F3C6D2"/>
    <path d="M108,214 C108,168 128,156 150,156 C172,156 192,168 192,214 C192,250 172,264 150,264 C128,264 108,250 108,214 Z" fill="url(#ko_b)" stroke="#6E7684" stroke-width="5"/>
    <path d="M128,206 C128,184 138,176 150,176 C162,176 172,184 172,206 C172,238 162,254 150,254 C138,254 128,238 128,206 Z" fill="#E4E9EE"/>
    <circle cx="150" cy="128" r="54" fill="url(#ko_b)" stroke="#6E7684" stroke-width="5"/>
    <circle cx="126" cy="122" r="10" fill="#2b2b33"/><circle cx="174" cy="122" r="10" fill="#2b2b33"/>
    <circle cx="123" cy="118" r="3.4" fill="#fff"/><circle cx="171" cy="118" r="3.4" fill="#fff"/>
    <circle cx="112" cy="140" r="10" fill="#F3A6C0" opacity="0.6"/><circle cx="188" cy="140" r="10" fill="#F3A6C0" opacity="0.6"/>
    <path d="M132,140 C132,128 168,128 168,140 C168,160 150,170 150,170 C150,170 132,160 132,140 Z" fill="#3a3a44" stroke="#2b2b33" stroke-width="2"/>
    <path d="M100,214 C90,196 96,178 112,178" fill="none" stroke="#6E7684" stroke-width="10" stroke-linecap="round"/>
    <path d="M200,214 C210,196 204,178 188,178" fill="none" stroke="#6E7684" stroke-width="10" stroke-linecap="round"/>` },

  // ===== TIER 5 — Master =====
  undersea: { bg: '#0a2a44', svg: `<defs><linearGradient id="us_w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5FC6E8"/><stop offset="60%" stop-color="#2E8FC8"/><stop offset="100%" stop-color="#1C5E96"/></linearGradient><linearGradient id="us_sand" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F5DCA0"/><stop offset="100%" stop-color="#E0B96C"/></linearGradient><radialGradient id="us_f1" cx="40%" cy="30%" r="80%"><stop offset="0%" stop-color="#FFC24D"/><stop offset="100%" stop-color="#F57A1E"/></radialGradient><radialGradient id="us_f2" cx="40%" cy="30%" r="80%"><stop offset="0%" stop-color="#FF9EC7"/><stop offset="100%" stop-color="#F0577A"/></radialGradient></defs>
    <rect x="0" y="0" width="300" height="300" fill="url(#us_w)"/>
    <g opacity="0.25" fill="#EAF7FF"><path d="M60,0 L120,0 L70,300 L40,300 Z"/><path d="M200,0 L240,0 L210,300 L180,300 Z"/></g>
    <path d="M0,244 C50,224 90,254 150,240 C210,226 250,252 300,238 L300,300 L0,300 Z" fill="url(#us_sand)"/>
    <g fill="none" stroke="#3AA65A" stroke-width="9" stroke-linecap="round"><path d="M56,250 C44,220 68,206 56,176 C48,152 66,140 58,120"/><path d="M78,252 C90,224 70,208 84,182 C92,166 78,152 88,136"/></g>
    <g fill="none" stroke="#2E8A48" stroke-width="8" stroke-linecap="round"><path d="M250,252 C262,226 240,210 254,184 C262,168 248,154 258,138"/></g>
    <path d="M200,254 C176,254 172,222 200,214 C186,236 214,246 226,232 C234,254 220,254 200,254 Z" fill="#F58AAE" stroke="#D9628E" stroke-width="3"/>
    <path d="M124,206 L172,206 L188,222 L172,238 L124,238 L110,222 Z" fill="url(#us_f1)" stroke="#D9600F" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M172,222 L196,206 L190,222 L196,238 Z" fill="#F79A3A" stroke="#D9600F" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="132" cy="220" r="5" fill="#fff"/><circle cx="132" cy="220" r="2.5" fill="#333"/>
    <g fill="none" stroke="#C24A0E" stroke-width="3" opacity="0.6"><path d="M150,208 L150,236"/><path d="M164,209 L164,235"/></g>
    <path d="M186,120 L214,120 L224,132 L214,144 L186,144 L176,132 Z" fill="url(#us_f2)" stroke="#D2415F" stroke-width="3" stroke-linejoin="round"/>
    <path d="M214,132 L232,120 L228,132 L232,144 Z" fill="#F586A6" stroke="#D2415F" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="192" cy="130" r="4" fill="#fff"/><circle cx="192" cy="130" r="2" fill="#333"/>
    <path d="M96,150 L88,138 L104,132 L108,116 L118,130 L134,128 L124,142 L130,158 L114,152 Z" fill="#FFD23D" stroke="#E0A31C" stroke-width="3" stroke-linejoin="round"/>
    <g fill="#EAF7FF" opacity="0.8"><circle cx="230" cy="70" r="7"/><circle cx="248" cy="52" r="5"/><circle cx="150" cy="60" r="6"/><circle cx="90" cy="88" r="5"/><circle cx="60" cy="60" r="4"/></g>` },

  cottage: { bg: '#101826', svg: `<defs><linearGradient id="co_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#BFE6FF"/><stop offset="100%" stop-color="#E8F6FF"/></linearGradient><linearGradient id="co_g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8FD46A"/><stop offset="100%" stop-color="#5AAE44"/></linearGradient><linearGradient id="co_wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FBE7C4"/><stop offset="100%" stop-color="#EFC98A"/></linearGradient><linearGradient id="co_roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C4694A"/><stop offset="100%" stop-color="#9E4A30"/></linearGradient><linearGradient id="co_tree" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5FBF54"/><stop offset="100%" stop-color="#2E8A3E"/></linearGradient></defs>
    <rect x="0" y="0" width="300" height="300" fill="url(#co_sky)"/>
    <circle cx="246" cy="56" r="24" fill="#FFD23D"/>
    <g fill="#fff" opacity="0.9"><ellipse cx="72" cy="60" rx="30" ry="17"/><circle cx="54" cy="60" r="15"/><circle cx="90" cy="60" r="17"/></g>
    <path d="M0,196 C60,178 120,190 180,182 C240,175 280,190 300,184 L300,300 L0,300 Z" fill="url(#co_g)"/>
    <g><rect x="44" y="150" width="16" height="60" fill="#7A4E28"/><path d="M52,96 L86,150 L18,150 Z" fill="url(#co_tree)"/><path d="M52,120 L82,166 L22,166 Z" fill="url(#co_tree)"/><path d="M52,142 L88,192 L16,192 Z" fill="url(#co_tree)"/></g>
    <g><rect x="242" y="160" width="14" height="52" fill="#7A4E28"/><path d="M249,116 L278,164 L220,164 Z" fill="url(#co_tree)"/><path d="M249,140 L282,192 L216,192 Z" fill="url(#co_tree)"/></g>
    <rect x="196" y="118" width="18" height="40" rx="2" fill="#9E4A30" stroke="#7A3520" stroke-width="2.5"/>
    <g fill="#dfeaf0" opacity="0.85"><circle cx="205" cy="108" r="6"/><circle cx="212" cy="98" r="7"/><circle cx="202" cy="92" r="5"/></g>
    <rect x="108" y="170" width="104" height="76" fill="url(#co_wall)" stroke="#D9A24E" stroke-width="4"/>
    <path d="M96,174 L160,120 L224,174 Z" fill="url(#co_roof)" stroke="#7A3520" stroke-width="4" stroke-linejoin="round"/>
    <rect x="146" y="200" width="30" height="46" rx="2" fill="#9B5E36" stroke="#6E3E1F" stroke-width="3.5"/>
    <circle cx="169" cy="224" r="3" fill="#FFD86B"/>
    <g stroke="#8A6231" stroke-width="3"><rect x="118" y="188" width="26" height="26" rx="2" fill="#AEE0F5"/><line x1="131" y1="188" x2="131" y2="214"/><line x1="118" y1="201" x2="144" y2="201"/></g>
    <g stroke="#8A6231" stroke-width="3"><rect x="180" y="188" width="26" height="26" rx="2" fill="#AEE0F5"/><line x1="193" y1="188" x2="193" y2="214"/><line x1="180" y1="201" x2="206" y2="201"/></g>
    <path d="M150,246 C140,262 120,268 108,272 M172,246 C184,260 200,266 214,270" fill="none" stroke="#CDA96A" stroke-width="7" stroke-linecap="round" opacity="0.8"/>
    <g fill="#F0577A"><circle cx="96" cy="240" r="5"/><circle cx="104" cy="234" r="5"/><circle cx="88" cy="234" r="5"/></g>
    <g fill="#FFD23D"><circle cx="228" cy="246" r="5"/><circle cx="236" cy="240" r="5"/><circle cx="220" cy="240" r="5"/></g>` },
};
