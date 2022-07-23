import fetch from 'node-fetch';
import {writeFileSync} from 'fs';
const url = 'https://online.epocrates.com/drugs';
async function scrape() {
    try {
        const resp = await fetch("https://online.epocrates.com/drugs", {
            "headers": {
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "accept-language": "en-US,en;q=0.9",
              "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"macOS\"",
              "sec-fetch-dest": "document",
              "sec-fetch-mode": "navigate",
              "sec-fetch-site": "same-site",
              "sec-fetch-user": "?1",
              "upgrade-insecure-requests": "1",
              "cookie": "COPY AND PASTE COOKIE HERE",
              "Referer": "https://www.epocrates.com/",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          });
        console.log(resp)
        const text = await resp.text();
        writeFileSync('drugs.html', text, 'utf-8')
    } 
    catch(ex) {
        console.error(ex)
    }
}
scrape();
