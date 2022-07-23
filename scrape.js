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
              "cookie": "ebi=bE5ysEl1of55ic; JSESSIONID=F68A704BD70970C89CCA1F2E23FE5045; eula=accepted; hu.state=-1_0_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_0_-1; optimizelyEndUserId=oeu1654395686829r0.7113525612931901; amplitudeSessionId=1654395687203; WebLifeCycle=Launched; __utma=237852126.1927640248.1649300855.1653187052.1654395688.4; __utmc=237852126; __utmz=237852126.1654395688.4.3.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmt=1; __utmb=237852126.1.10.1654395688; s_cc=true; amplitude_id_3726354470c2395ec5e4f0c447b86f36epocrates.com=eyJkZXZpY2VJZCI6ImQ1YzBmZDU4LTU3OWQtNGZiNy1iN2MyLWJkMDYwMWRmYzAzZlIiLCJ1c2VySWQiOiItMSIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTY1NDM5NTY4NzQ0OCwibGFzdEV2ZW50VGltZSI6MTY1NDM5NTY4Nzg5MSwiZXZlbnRJZCI6MCwiaWRlbnRpZnlJZCI6MTYsInNlcXVlbmNlTnVtYmVyIjoxNn0=; AWSALB=ZYT5ozEjju50X9uVDk8mx4xEEK2JzZ824fFQqUKb3fwKUN/FhFEu4z73UqlxIAsh15TZy4v9EFKMS6FiIhpkUoaLYkggoggQtQsF3iyYuUuh9CLNJNjBJV0hq3Dz; AWSALBCORS=ZYT5ozEjju50X9uVDk8mx4xEEK2JzZ824fFQqUKb3fwKUN/FhFEu4z73UqlxIAsh15TZy4v9EFKMS6FiIhpkUoaLYkggoggQtQsF3iyYuUuh9CLNJNjBJV0hq3Dz; s_sq=epoceolfrontporchcom%2Cepoceolbasic%2Cepoceolbasicqa%2Cepoceolqa%3D%2526pid%253Dhttps%25253A//online.epocrates.com/drugs%2526oid%253Dfunctionun%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; amplitudeSessionId=1654395699391; sessionTimer=sessionTimer; stayLoggedIn=true; accessToken=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicmVmcmVzaCB0b2tlbiIsInVzZXJJZCI6MTA3Mjg5MDksImlhdCI6MTY1NDM5NTgxNiwiZXhwIjoxNjU0NDEzODE2fQ.CISasxlMMctFNQYRlOb0xJKirb95yKliDg7e1cghB7nYz5XGXGW9x2uHKQz9KsSg4cWLeSOx3Uo2J6Wmq7es_0wPYcseWw6DobcYCbJIgm_rDoYA4ZDu1VPIsrwNRJcJOSUGFz-aUHIreenwhTT6wOASm5F3WP46orm3srO6WZZ9rM8NAaNf-sHXX8k06BYpwfRV4BtZszLwl6JVpHYJGqnOlJBpQqWEK5hG6KJRPmoTnrOEE6xkZAUDoH6Mnavd1PKwdsK12vP_X4g-R_80IAQO8UEV7GT7Fs2VdRnQvFgpoRZK5i1A1y4I5zz_obg7M54Zz6TTAIqJxQddmoVKpQ; refreshToken=df04d3a5f5c4bae9e053da54870a3659; currentUserId=10728909; ajs_user_id=10728909; ajs_anonymous_id=76cce620-1d63-4eca-a669-f61053c2059b",
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