const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  
  {
    text1:`ဒါ (ပြောသူ၏အနီး၌ရှိသာအရာ)`,
  },
  {
    text1:`အဲဒါ (နာသူ၏အနီး၌ရှိသောအရာ)`,
  },
  {
    text1:`ဟိုဟာ (ပြောသူ၊နာသူတို့မှကွာလှမ်းသာ
      နေရာ၌ရှိသောအရာ)`,
  },
  {
    text1:`ဒီ~`,
  },
  {
    text1:`အဲဒီ~`,
  },
  {
    text1:`ဟို~`,
  },
  {
    text1:`စာအုပ်`,
  },
  {
    text1:`အဘိဓာန်`,
  },
  {
    text1:`မဂ္ဂဇင်း`,
  },
  {
    text1:`သတင်းစာ`,
  },
  {
    text1:`ဗလာစာအုပ်၊မှတ်စုစာအုပ်`,
  },
  {
    text1:`အိတ်ဆောင်မှတ်စု`,
  },
  {
    text1:`လိပ်စာကတ်`,
  },
  {
    text1:`(ခရက်ဒစ်)ကတ်`,
  },
  {
    text1:`ခဲတံ`,
  },
  {
    text1:`​ဘောပင်`,
  },
  {
    text1:`ခဲဆံဘောပင်`,
  },
  {
    text1:`သော့(သော့ချောင်း၊သော့အိမ်)`,
  },
  {
    text1:`နာရီ`,
  },
  {
    text1:`ထီး`,
  },
  {
    text1:`အိတ်၊ လွယ်အိတ်`,
  },
  {
    text1:`စီဒီ`,
  },
  {
    text1:`ရုပ်မြင်သံကြား၊တီဗီ`,
  },
  {
    text1:`ရေဒီယို`,
  },
  {
    text1:`ကင်မရာ`,
  },
  {
    text1:`ကွန်ပျူတာ`,
  },
  {
    text1:`ကား၊ (မော်တော်)ယာဉ်`,
  },
  {
    text1:`စာကြည့်ခုံ၊စာရေးခုံ`,
  },
  {
    text1:`ထိုင်ခုံ`,
  },
  {
    text1:`ချော့ကလက်`,
  },
  {
    text1:`ကော်ဖီ`,
  },
  {
    text1:`အပြန်လက်ဆောင်၊ အမှတ်တရလက်ဆောင်`,
  },
  {
    text1:`အင်္ဂလိပ်စာ`,
  },
  {
    text1:`ဂျပန်စာ`,
  },
  {
    text1:`~စာ၊~ဘာသာ`,
  },
  {
    text1:`ဘာ၊ဘယ်ဟာ`,
  },
  {
    text1:`အဲဒီလို`,
  },
  {
    text1:`အဲ...၊ဟို... (အားနာသော၊ချီတုံချတုံဖြစ်သော
      စိတ်ဖြင့်တစ်ဖက်လူအားလှမ်း၍ခေါ်သောစကား)`,
  },
  {
    text1:`ဟင် (မထင်မှတ်ထားသောအရာကိုကြားလိုက်
      ရသောအခါမျိုးတွင်အသုံးပြုသည်။)`,
  },
  {
    text1:`ယူပါ။လက်ခံပါ။ (ပစ္စည်းတစ်စုံတစ်ခုကိုလက်ခံ
      ယူစေလိုသောအခါမျိုးတွင်အသုံးပြုသည်။)`,
  },
  {
    text1:`ကျေးဇူးတင်ပါတယ်။`,
  },
  {
    text1:`ဟုတ်လား။`,
  },
  {
    text1:`မဟုတ်ဘူး။`,
  },
  {
    text1:`အယ် (ရုတ်တရက်သတိပြုမိသောအခါမျိုးတွင်
      အသုံးပြုသည်။)။`,
  },
  {
    text1:`အခုချိန်ကစပြီးအကူအညီရယူပါရစေ။ (အခုချိန်က
      စ၍ပတ်သက်ဆက်ဆံရမည့်လူနှင့်ပထမဆုံး
      အကြိမ်တွေ့သောအခါတွင်ပြောသောနှုတ်ဆက်
      စကား)`,
  },
  {
    text1:`ကျွန်တော်/ကျွန်မဘက်ကလည်းရင်းရင်းနှီးနှီးရှိချင်
    ပါတယ်။
    ([どうぞ]よろしくおねがいします]。
    ကိုပြန်၍တုံ့ပြန်ခြင်း)`,
  },
];



















button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
