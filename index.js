const puppeteer = require('puppeteer');
const download = require('image-downloader');
(async () => {
    // Mở trình duyệt mời và tới trang kenh14.vn
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 720 });
    const url = 'https://choytexanh.com/product-category/thuoc/chong-dong-mau/';
    await page.goto(url, { waitUntil: 'networkidle2' });
    // Lấy dữ liệu và lưu vào 
    const titleList = await page.evaluate(() => {
        let titleElements = document.querySelectorAll('.image-fade_in_back>a>img');
        // chuyen List -> Array
        titleElements = [...titleElements];
        let titleList = titleElements.map(i => i.getAttribute('src'));
        return titleList;
    });
    console.log(titleList);
    // Tai ve thu muc hien tai
    /* await Promise.all(imgLinks.map(imgUrl=>download.image({
         url:imgUrl,
         dest: __dirname
     })));*/
    await browser.close();
})();