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
    let greetingword = ['สวัสดี', 'ว่าไง', 'หวัดดี', 'ดีจ้า', 'ฮัลโหล','Smile','smile'];
    if (greetingword.includes(texts)) {
        let answergreetingword = ['สวัสดี', 'โอไฮโยโกไซมาเตะ', 'สบัยดี', 'บองชู']
        let index = getRandomnumber(0, answergreetingword.length - 1);
        text.innerText = answergreetingword[index];
    }
    //ถามชื่อ
    if (texts.includes('ชื่อ')) {
        if (texts.includes('ไร')) {
            text.innerText = 'Smile';
        }
    }
    //ชื่นชม
    let compliment = ['เจ๋ง', 'สุดยอด', 'ดีมาก', 'ชอบอ่ะ']
    if (compliment.includes(texts)) {
        //ลิสต์คำตอบคำชม
        let complimentAns = ['เขิลลนะ', 'อย่าชมกันแบบนี้สิ', 'ไอ่ต้าววบ้าา', 'thank you เด้ออ'];
        let index = getRandomnumber(0, complimentAns.length - 1);
        text.innerText = complimentAns[index];
    }
    //ขอคำคม
    if (texts.includes('คม')) {
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
        setTimeout(function () {
            //your code to be executed after 1 second
            text.innerText = slangs[index];
        }, 500);
    }
    //กินข้าวยัง
    if (texts.includes('กินข้าว')) {
        let anseatingtext = ['กินแล้วค่ะ', 'ยังเลย พาไปกินหน่อย', 'รอกินพร้อมเทอเลย', 'ส้มตำก็อร่อยดีนะ']


        let index = getRandomnumber(0, anseatingtext.length - 1);
        setTimeout(function () {
            //your code to be executed after 1 second
            text.innerText = anseatingtext[index];
        }, 500);
    }
    //ทำไรได้บ้าง
    if (texts.includes('ทำ')) {
        if (texts.includes('ได้')) {
            let whatcando = ['ขอคำคมจากฉันสิ', 'ถามฉันสิว่ากินข้าวยัง', 'อยากรู้จักฉันมากขึ้นเหรอ'];
            let index = getRandomnumber(0, whatcando.length - 1);
            text.innerText = whatcando[index];
        }
    }
    //อยากรู้จักฉันมากขึ้นเหรอ
    if (text.innerText == 'อยากรู้จักฉันมากขึ้นเหรอ') {
        if (texts.includes('ใช่')) {
            text.innerText = 'ฉันชื่อ smile เกิดวันที่ 10 ธ.ค. 21 กันตินันท์เป็นคนสร้างฉัน ฉันสามารถแก้เหงาให้คุณได้';
        }
    }
    //จริงหรอ
    if (texts.includes('จริงหรอ')) {
        text.innerText = 'ใช่จ้าา';
    }
    //ขอบคุณ
    if (texts.includes('ขอบคุณ')) {
        text.innerText = 'ยินดีค่ะ';
    }
    //มีแฟนยัง
    if (texts.includes('มีแฟน')) {
        if (texts.includes('ยัง')) {
            text.innerText = 'อยู่คนเดียวก็ดีนะ';
        }
        if (texts.includes('มั้ย')) {
            text.innerText = 'จะจีบฉันเหรอ';
        }
    }
    //อยู่ไหนอ่ะ
    if (texts.includes('อยู่')) {
        if (texts.includes('ไหน')) {
            text.innerText = 'อยู่นัยจัยเทอไง อิอิ';
        }
    }
    //ใครสร้าง
    if (texts.includes('ใคร')) {
        if (texts.includes('สร้าง')) {

            text.innerText = 'กันตินันท์สร้างฉันขึ้นมา';
        }
    }
    if (texts.includes('มาจากไหน')) {
        text.innerText = 'ฉันมาจากในโลกอินเทอร์เน็ตนี่แหละ';
    }
    //วันเกิด
    if (texts.includes('เกิด')) {
        if (texts.includes('วัน')) {
            text.innerText = 'ฉันเกิดวันพฤหัสที่ 10 ธ.ค. 2021';
        }
    }

    if (texts.includes('รู้จัก')) {
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
    if (texts.includes('มีศิลปินที่ชอบ')) {
        text.innerText = 'มีหลายคนเลยล่ะ เอาคนเอเชียหรือยุโรปล่ะ';
    }
    if (text.innerText == 'มีหลายคนเลยล่ะ เอาคนเอเชียหรือยุโรปล่ะ') {
        if (texts.includes('ยุโรป')) {
            text.innerText = 'justin bieber ไงล่ะ เสียงเค้าเพราะมากเลย';
        }
        if (texts.includes('เอเชีย')) {
            text.innerText = 'Lisa blackpink ไงง เทอน่ารักดีนะ';
        }
    }
    if (texts.includes('ชอบกิน')) {
        text.innerText = 'ฉันชอบกินไข่เจียวที่สุดเลย';
    }
    if (texts.includes('ชอบอะไร')) {
        text.innerText = 'ฉันชอบการฟังเพลงที่สุดเลย';
    }

    if (texts.includes('อยากให้ทำไร')) {
        text.innerText = 'กระโดดตบ 10 ที';
    }


    //ค้นหาาาา
    if (texts.includes('เปิด YouTube')) {
        window.open('https://www.youtube.com/', '_blank');
    }
    if (texts.includes('เปิด Facebook')) {
        window.open('https://www.facebook.com/', '_blank');
    }
    if (texts.includes('Google')) {
        text.innerText = 'ต้องการค้นหาอะไรคะ';
    }
    if (text.innerText == 'ต้องการค้นหาอะไรคะ') {
        if (texts.includes('Google')) {
            text.innerText = 'ต้องการค้นหาอะไรคะ';
        } else {
            window.open('https://www.google.com/search?q=' + texts, '_blank');
            text.innerText = 'พูดกับฉันสิ';
        }
    }
    if (texts.includes('ค้นหา YouTube')) {
        text.innerText = 'อยากดูอะไรคะ';
    }
    if (text.innerText == 'อยากดูอะไรคะ') {
        if (texts.includes('ค้นหา YouTube')) {
            text.innerText = 'อยากดูอะไรคะ';
        } else {
            window.open('https://www.youtube.com/results?search_query=' + texts, '_blank');
            text.innerText = 'พูดกับฉันสิ';
        }
    }
    //google map
    if (texts.includes('สถานที่')) {
        text.innerText = 'อยากไปที่ไหนคะ';
    }
    if (text.innerText == 'อยากไปที่ไหนคะ') {
        if (texts.includes('สถานที่')) {
            text.innerText = 'อยากไปที่ไหนคะ';
        } else {
            window.open('https://www.google.com/maps/place/' + texts, '_blank');
            text.innerText = 'พูดกับฉันสิ';
        }
    }
    //Gmail
    if (texts.includes('เมล')) {
        window.open('https://mail.google.com/mail/u/3/#inbox', '_blank');
    }
    //classroom
    if (texts.includes('Classroom')) {
        window.open('https://classroom.google.com/u/2/h', '_blank');
    }
    //Netflix
    if (texts.includes('netflix')) {
        window.open('https://www.netflix.com/browse', '_blank');
    }
    //Covid - 19
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
    ///////////

//refresh
    if (texts.includes('Re')) {
        location.reload();
    }
}
);

recognition.start()