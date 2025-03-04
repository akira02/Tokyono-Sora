function generateReplacement(urls) {
  return `/* 以上傳圖片覆蓋掉噗浪原本的背景圖 */
._lch_ {
  background-image: url(${urls.timeline}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
  backdrop-filter: none !important;
}
/* 若想保留噗浪原本的背景圖請刪除上面這段 */

/* 模糊背景改為固定圖片 */
.block_cnt .cboxAnchor:not(.response) .plurk_cnt,
#form_holder,
._lch_~.pop-window .pop-window-content,
._lch_~.pop-window .pop-window-view iframe  {
  background-image: url(${urls.plurk}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
  backdrop-filter: none !important;
}`;
}

export function updateCss(css, urls) {
  const generateCSS = generateReplacement(urls);
  return generateCSS;
}
