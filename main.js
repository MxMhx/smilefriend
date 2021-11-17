let text = document.querySelector('.reply')
let speech = document.querySelector('.speak')

const recognition = new webkitSpeechRecognition()
recognition.lang = 'th-TH'
recognition.interimResults = false;

//randomfunctions
function getRandomnumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let text = Math.floor(step2) + min;

    return text
}

//ฟังอีกรอบ
recognition.addEventListener('end', () => {
    recognition.start();
})


//ฟังเสียง
recognition.addEventListener('result', function (event) {
    const texts = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');

    console.log(texts);
    speech.innerText = texts;


    //ทักทาย
    let greetingword = ['สวัสดี', 'ว่าไง', 'หวัดดี', 'ดีจ้า', 'ฮัลโหล', 'Smile', 'smile'];
    //list ชม
    let compliment = ['เจ๋ง', 'สุดยอด', 'ดีมาก', 'ชอบอ่ะ']

    //รับข้อมูลผู้ป่วยโควิด
    function getcoviddata(data) {
        var coviddata = document.querySelector('.reply');
        if (texts.includes('โควิด')) {
            if (texts.includes('ป่วย')) {
                coviddata.innerHTML = data.todayCases + ' คน';
            }
            if (texts.includes('เสียชีวิต')) {
                coviddata.innerHTML = data.todayDeaths + ' คน';
            }
            if (texts.includes('รักษา')) {
                coviddata.innerHTML = data.todayRecovered + ' คน';
            }
        }

    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://corona.lmao.ninja/v2/countries/THA", requestOptions)
        .then(response => response.json())
        .then(data => getcoviddata(data))
        .catch(error => console.log('error', error));
    ///////////โควิด



    if (greetingword.includes(texts)) {
        let answergreetingword = ['สวัสดี', 'โอไฮโยโกไซมาเตะ', 'สบัยดี', 'บองชู']
        let index = getRandomnumber(0, answergreetingword.length - 1);
        text.innerText = answergreetingword[index];
    }

    else if (texts.includes('สวัสดี')) {
        let answergreetingword = ['สวัสดี', 'โอไฮโยโกไซมาเตะ', 'สบัยดี', 'บองชู']
        let index = getRandomnumber(0, answergreetingword.length - 1);
        text.innerText = answergreetingword[index];
    }
    //ถามชื่อ
    else if (texts.includes('ชื่อ')) {
        if (texts.includes('ไร')) {
            text.innerText = 'Smile';
        }
    }
    //ชื่นชม
    else if (compliment.includes(texts)) {
        //ลิสต์คำตอบคำชม
        let complimentAns = ['เขิลลนะ', 'อย่าชมกันแบบนี้สิ', 'ไอ่ต้าววบ้าา', 'thank you เด้ออ'];
        let index = getRandomnumber(0, complimentAns.length - 1);
        text.innerText = complimentAns[index];
    }
    //ขอคำคม
    else if (texts.includes('คม')) {
        //ลิสต์คำคมบาดจัยยยยยย
        let slangs = ['ถึงพี่จะไม่เปย์เหมือนเสี่ยชัช แต่พี่มีบัตรประชารัฐน้องชอบมั้ยย',
            'พ่อทำงาน ลูกทำทรง แม่นั่งพนมลูกฉันเป็นคนดี',
            'อยากได้ทรงbad เดี๋ยวก็sadตามเคย',
            'เจ็บกว่าการจากลาคือการเดินถอยออกมาแล้วเหยียบตะปู',
            'ขนาดต้นตะเคียนยังมีคนมาขอหวย แล้วเทอละคนสวยมีคนมาขอยัง',
            'ยกใจให้สองล้อ ดีกว่าไปง้อคนสองใจ',
            'เพราะรักมันทำร้าย ผมเลยย้ายมาทำรถ',
            'รู้ว่าท่อดังมันผิด แต่ถ้าให้เงียบสนิทคงไม่ได้',
            'แคปหมูยายย้อย คนกินนอนตาย คนขายนอนยิ้ม',
            'ไม่มีหรอกซาลาเปา มีแต่แก้มเราเอามั้ย',
            'ดูดกัญชาจนตาเยิ้ม ดีกว่ามานั่งเคลิ้มดูคนรักกัน',
            'แคปหมูยายย้อย อร่อยให้6สกปรกให้10']


        let index = getRandomnumber(0, slangs.length - 1);
        // setTimeout(function () {
        //     //your code to be executed after 1 second
        text.innerText = slangs[index];
        // }, 500);
    }
    //กินข้าวยัง
    else if (texts.includes('กินข้าว')) {
        let anseatingtext = ['กินแล้วค่ะ', 'ยังเลย พาไปกินหน่อย', 'รอกินพร้อมเทอเลย', 'ส้มตำก็อร่อยดีนะ']


        let index = getRandomnumber(0, anseatingtext.length - 1);
        setTimeout(function () {
            //your code to be executed after 1 second
            text.innerText = anseatingtext[index];
        }, 500);
    }
    //ทำไรได้บ้าง
    else if (texts.includes('ทำ')) {
        if (texts.includes('ได้')) {
            let whatcando = ['ขอคำคมจากฉันสิ', 'ถามฉันสิว่ากินข้าวยัง', 'อยากรู้จักฉันมากขึ้นเหรอ'];
            let index = getRandomnumber(0, whatcando.length - 1);
            text.innerText = whatcando[index];
        }
    }
    //อยากรู้จักฉันมากขึ้นเหรอ
    else if (text.innerText == 'อยากรู้จักฉันมากขึ้นเหรอ') {
        if (texts.includes('ใช่')) {
            text.innerText = 'ฉันชื่อ smile เกิดวันที่ 10 ธ.ค. 21 กันตินันท์เป็นคนสร้างฉัน ฉันสามารถแก้เหงาให้คุณได้';
        }
    }
    //จริงหรอ
    else if (texts.includes('จริงหรอ')) {
        text.innerText = 'ใช่จ้าา';
    }
    //ขอบคุณ
    else if (texts.includes('ขอบคุณ')) {
        text.innerText = 'ยินดีค่ะ';
    }
    //มีแฟนยัง
    else if (texts.includes('มีแฟน')) {
        if (texts.includes('ยัง')) {
            text.innerText = 'อยู่คนเดียวก็ดีนะ';
        }
        if (texts.includes('มั้ย')) {
            text.innerText = 'จะจีบฉันเหรอ';
        }
    }
    //อยู่ไหนอ่ะ
    else if (texts.includes('อยู่')) {
        if (texts.includes('ไหน')) {
            text.innerText = 'อยู่นัยจัยเทอไง อิอิ';
        }
    }
    //ใครสร้าง
    else if (texts.includes('ใคร')) {
        if (texts.includes('สร้าง')) {

            text.innerText = 'กันตินันท์สร้างฉันขึ้นมา';
        }
    }
    else if (texts.includes('มาจากไหน')) {
        text.innerText = 'ฉันมาจากในโลกอินเทอร์เน็ตนี่แหละ';
    }
    //วันเกิด
    else if (texts.includes('เกิด')) {
        if (texts.includes('วัน')) {
            text.innerText = 'ฉันเกิดวันพฤหัสที่ 10 ธ.ค. 2021';
        }
    }

    else if (texts.includes('รู้จัก')) {
        if (texts.includes('Siri')) {
            text.innerText = 'รู้จักสิ เราเคยทำงานด้วยกัน';
        } else {
            if (texts.includes('โอม')) {
                text.innerText = 'รู้จักสิ คนสร้างฉันไง';
            } else {
                text.innerText = 'ไม่รู้สิ คืออะไรอ่ะ';
            }
        }
    }
    else if (texts.includes('มีศิลปินที่ชอบ')) {
        text.innerText = 'มีหลายคนเลยล่ะ เอาคนเอเชียหรือยุโรปล่ะ';
    }
    else if (text.innerText == 'มีหลายคนเลยล่ะ เอาคนเอเชียหรือยุโรปล่ะ') {
        if (texts.includes('ยุโรป')) {
            text.innerText = 'justin bieber ไงล่ะ เสียงเค้าเพราะมากเลย';
        }
        if (texts.includes('เอเชีย')) {
            text.innerText = 'Lisa blackpink ไงง เทอน่ารักดีนะ';
        }
    }
    else if (texts.includes('ชอบกิน')) {
        text.innerText = 'ฉันชอบกินไข่เจียวที่สุดเลย';
    }
    else if (texts.includes('ชอบอะไร')) {
        text.innerText = 'ฉันชอบการฟังเพลงที่สุดเลย';
    }

    else if (texts.includes('อยากให้ทำไร')) {
        text.innerText = 'กระโดดตบ 10 ที';
    }


    //ค้นหาาาา
    else if (texts.includes('เปิด YouTube')) {
        window.open('https://www.youtube.com/', '_blank');
    }
    else if (texts.includes('เปิด Facebook')) {
        window.open('https://www.facebook.com/', '_blank');
    }
    else if (texts.includes('Google')) {
        text.innerText = 'ต้องการค้นหาอะไรคะ';
    }
    else if (text.innerText == 'ต้องการค้นหาอะไรคะ') {
        if (texts.includes('Google')) {
            text.innerText = 'ต้องการค้นหาอะไรคะ';
        } else {
            window.open('https://www.google.com/search?q=' + texts, '_blank');
            text.innerText = 'พูดกับฉันสิ';
        }
    }
    else if (texts.includes('ค้นหา YouTube')) {
        text.innerText = 'อยากดูอะไรคะ';
    }
    else if (text.innerText == 'อยากดูอะไรคะ') {
        if (texts.includes('ค้นหา YouTube')) {
            text.innerText = 'อยากดูอะไรคะ';
        } else {
            window.open('https://www.youtube.com/results?search_query=' + texts, '_blank');
            text.innerText = 'พูดกับฉันสิ';
        }
    }
    //google map
    else if (texts.includes('สถานที่')) {
        text.innerText = 'อยากไปที่ไหนคะ';
    }
    else if (text.innerText == 'อยากไปที่ไหนคะ') {
        if (texts.includes('สถานที่')) {
            text.innerText = 'อยากไปที่ไหนคะ';
        } else {
            window.open('https://www.google.com/maps/place/' + texts, '_blank');
            text.innerText = 'พูดกับฉันสิ';
        }
    }
    //Gmail
    else if (texts.includes('เมล')) {
        window.open('https://mail.google.com/mail/u/3/#inbox', '_blank');
    }
    //classroom
    else if (texts.includes('Classroom')) {
        window.open('https://classroom.google.com/u/2/h', '_blank');
    }
    //Netflix
    else if (texts.includes('netflix')) {
        window.open('https://www.netflix.com/browse', '_blank');
    }
    //Covid - 19


    //refresh
    else if (texts.includes('Re')) {
        location.reload();
    }
    //github
    else if (texts.includes('github')) {
        window.open('https://github.com/MxMhx?tab=repositories', '_blank');
        text.innerText = 'เปิดแล้วจ้า';
    }
    //แนะนำ
    else if (texts.includes('แนะนำ')) {
        if (texts.includes('เพลง')) {

        }
    }
    else if (texts.includes('*')) {
        text.innerText = 'พูดไม่เพราะเลยน้าา';
    }
    //Test youtube open music
    else if (texts.includes('เปิดเพลง')) {
        text.innerText = 'ฟังเพลงอะไรดีคะ';
    }
    else if (text.innerText == 'ฟังเพลงอะไรดีคะ') {
        if (texts.includes('เปิดเพลง')) {
            text.innerText = 'ฟังเพลงอะไรดีคะ';
        } else {
            var API_KEY = "AIzaSyCTltzrpYJH3fMbSa8ovgmwGGfZiB86hJ4";

            event.preventDefault()
            videoSearch(API_KEY, texts, 2)


            function videoSearch(key, texts, maxResults) {
                $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + key + "&type=video&maxResults=" + maxResults + "&q=" + texts, function (dataed) {
                    const videos = dataed.items[0].id.videoId
                    console.log(videos);

                    window.open('https://www.youtube.com/watch?v=' + videos, '_blank')

                })
            }
            text.innerText = 'พูดกับฉันสิ';
        }
    }


    //อะไรก็ไม่รู้
    else {
        let whatthisanswer = ['พูดอะไรน่ะ',
            'นั่นน่ะสินะ',
            'เธอเหงาเหรอ',
            'ใช่ๆฉันเห็นด้วย',
            'อืมมมม',
            'อยากจะจีบฉันเหรอ ไม่ให้จีบหรอกนะ',
            'งงนิดหน่อยแต่ไม่เข้าใจมากๆ',
            'ไม่รู้สิ',
            'แล้วนายว่าไงอ่ะ']
        let index = getRandomnumber(0, whatthisanswer.length - 1);
        text.innerText = whatthisanswer[index];
    }
}
);

recognition.start()
//git add . && git commit -m "first commit" && git push