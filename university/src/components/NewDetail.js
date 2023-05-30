import React,{useEffect} from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import Banner from "../images/edx course.jpg";
import Banner2 from "../images/news2.jpg";
import Banner3 from "../images/news3.jpg";
import Logo from "../images/Logo.png";


const NewDetail = () => {
  const handleClick = () => {
        
    window.open ('https://www.facebook.com/profile.php?id=100087453985817&mibextid=ZbWKwL','_blank');}
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const { id } = useParams();
  const newsItems = [
    {
      id: 1,
      title: "ကွန်ပျူတာတက္ကသိုလ် (မအူပင်)ရှိ CDM ဆရာ၊ ဆရာမများနှင့် CDM ကျောင်းသား၊ ကျောင်းသူများသို့ အသိပေးအကြောင်းကြားခြင်း ",
      src: Banner,
      
      content: `အမျိုးသားညီညွတ်ရေးအစိုးရ၊ ပညာရေးဝန်ကြီးဌာနအနေနှင့် EdX ပညာရေး အဖွဲအစည်းတို့ ပူးပေါင်းသည့် EdX MOOC တွင် လေ့လာနိုင်မည့် သင်တန်းများအား google form registration ခေါ်ယူခဲ့ရာ CDM ကျောင်းသူ၊ ကျောင်းသားများနှင့် CDM ဆရာ၊ ဆရာမများ အများအပြား လျှောက်ထားခဲ့ကြပြီး  EdX Admission Team ကလည်း ပထမဆုံးအသုတ်အနေဖြင့် EdX MOOC တွင် သင်တန်းသားများအား enrolment ပြုလုပ်ထားပြီ ဖြစ်ကြောင်းကြေငြာချက်ထုတ်ပြန်ခဲ့ပါသည်။ 
      သို့ဖြစ်ပါ၍ ပထမအသုတ်တွင် အကြောင်းအမျိုးမျိုးကြောင့်  တက်ရောက်ခွင့် မလျှောက်ရသေးသူများအားလည်း ထပ်မံခေါ်ယူသွားမည် ဖြစ်ပါသဖြင့် ကွန်ပျူတာတက္ကသိုလ် (မအူပင်) အနေဖြင့် မိမိတို့တက္ကသိုလ်မှ သင်တန်းတက်ရောက်လိုသော  CDM ဆရာ၊ ဆရာမများနှင့် CDM ကျောင်းသား၊ ကျောင်းသူများသည်   သင်တန်းလျှောက်ထားရန် Google form registration နှင့် CDM ဖြစ်ကြောင်း အထောက်အထားများ အတွက် မိမိတို့၏ တက္ကသိုလ်ကောင်စီသို့ဆက်သွယ်မေးမြန်းတောင်းခံနိုင်ပါကြောင်း ယာယီတက္ကသိုလ်ကောင်စီမှ အသိပေး အကြောင်းကြားအပ်ပါသည်။`,
    },
    {
      id: 2,
      title: "CDM ကျောင်းသား၊ ကျောင်းသူများအား ကျေးဇူးတင်လွှာ",
      src:Banner2,
      
      content: `၂၀၂၁ ခုနှစ်၊ ဖေဖော်ဝါရီလ (၁)ရက်နေ့မှ စ၍ စစ်အာဏာရှင်၏ မတရားအာဏာသိမ်းယူမှုသည် (၂)နှစ်ကျော် ကာလအတွင်းသို့ ရောက်ရှိခဲ့ပြီးဖြစ်သည်။ထိုသို့ အချိန်ကာလတစ်ခုအထိ ကြာမြင့်ခဲ့ပြီ ဖြစ်သော်လည်း ကွန်ပျူတာတက္ကသိုလ်(မအူပင်)တွင် ယနေ့အချိန်ထိ အမှန်တရားဘက်မှ စိတ်အားထက်သန်စွာ ရပ်တည်နေဆဲဖြစ်သော CDM ကျောင်းသား၊ကျောင်းသူများ များစွာ ကျန်ရှိနေကြောင်း ကြားသိရပါသည်။

      စစ်ကျွန်ပညာရေးစနစ်အောက်တွင် ပညာဆက်လက်မသင်ကြားဘဲ မတရားမှုကိုဆန့်ကျင်၍ အကြမ်းမဖက်အာဏာဖီဆန်ရေးလှုပ်ရှားမှုတွင် ပါဝင်နေဆဲဖြစ်သော ကွန်ပျူတာတက္ကသိုလ်(မအူပင်)မှ CDM ကျောင်းသား၊ကျောင်းသူများအား ယာယီတက္ကသိုလ်ကောင်စီမှ ကျေးဇူးအထူးပင်တင်ရှိပါကြောင်းလေးစားစွာမှတ်တမ်းတင်ဂုဏ်ပြုအပ်ပါသည်။
      `,
    },
    {
      id: 3,
      title: "မြန်မာနှစ်ဆန်း (၁)ရက်နေ့၊ နှစ်သစ်ဆုတောင်း",
      src:Banner3,
      
      content: `
      ယခုအချိန်အခါသည် မြန်မာလူမျိုးတို့၏ နှစ်ဟောင်းမှသည် နှစ်သစ်သို့ကူးပြောင်းသည့် မြန်မာ့ရိုးရာနှစ်သစ်ကူး အခါသမယဖြစ်ပါသည်။ အစဥ်အလာအရ နှစ်သစ်သို့ပျော်ရွှင်စွာ ကူးပြောင်းရမည် ဖြစ်သော်လည်း မြန်မာပြည်သူ၊ ပြည်သားများအနေဖြင့် ၂၀၂၁ခုနှစ်၊ ဖေဖော်ဝါရီလ (၁)ရက်နေ့မှစ၍ စစ်တပ်၏မတရား အာဏာသိမ်းမှုပြီးနောက် စစ်အာဏာရှင်စနစ်ဆိုး၏ လူမဆန်သော ရက်စက်မှုများကို နေ့စဥ်နှင့်အမျှ ရင်ဆိုင်ကြုံတွေ့ နေကြရပါသည်။ လတ်တလောအချိန် ကာလတွင်လည်း ထိုကဲ့သို့ အဖြစ်အပျက်များကို ကြုံတွေ့ခဲ့ကြရသည့် မြန်မာပြည်သူပြည်သားများ အနေဖြင့် မိရိုးဖလာ ယဥ်ကျေးမှုတစ်ခုဖြစ်သည့် မြန်မာ့ရိုးရာနှစ်သစ်ကူးသည် ပျော်ရွှင်သောအဓိပ္ပာယ်ကို ဖော်ကျူးသည့် နှစ်သစ်ကူးအချိန်သမယတစ်ခု မဖြစ်နိုင်ပါ။ 
      ကွန်ပျူတာတက္ကသိုလ် (မအူပင်)၊ ယာယီတက္ကသိုလ်ကောင်စီအနေဖြင့် မတရားမှုကိုဆန့်ကျင်ပြီး အမှန်တရားဘက်မှ ရပ်တည်ခဲ့ကြသည့်  မြန်မာနိုင်ငံသူ၊ နိုင်ငံသားအားလုံး၊ တိုင်းရင်းသား၊ ညီအစ်ကို မောင်နှမများအားလုံး၊ တစ်နိုင်ငံလုံးရှိ ပြည်သူ့ကာကွယ်ရေးတပ်ဖွဲ့ဝင်များအားလုံး၊ အကြမ်းမဖက် အာဏာဖီဆန်ရေး လှုပ်ရှားမှု တွင်ပါဝင်ခဲ့ကြသော  နယ်ပယ် အသီးသီးမှ CDM ဝန်ထမ်းများအားလုံး၊ ကွန်ပျူတာတက္ကသိုလ် ကျောင်းအသီးသီးမှ CDM ဆရာ၊ ဆရာမများ၊ CDM ကျောင်းသား၊ ကျောင်းသူများအားလုံးနှင့်အတူ တသားတည်းရပ်တည်ပြီး ပျော်စရာမဟုတ်သော၊ တော်လှန်သင်္ကြန် တွင် စစ်အာဏာရှင်စနစ် အမြန်ဆုံးချုပ်ငြိမ်းပါစေ၊ တော်လှန်‌ရေးအမြန်ပြီးမြောက်အောင်မြင်ပြီး စိုးရိမ်ကြောင့်ကြကင်းကြပါစေ၊ နှစ်သစ်ကိုကူးပြောင်းသည့် နှစ်သစ်ကူးအချိန်သမယမှစ၍ မြန်မာပြည်သူ၊ ပြည်သားအပေါင်း စိတ်နှလုံးချမ်းမြေ့ပါစေကြောင်း အကြမ်းဖက်စစ်ကောင်စီ၏ လုပ်ရပ်များကို ယနေ့တိုင် ဆန့်ကျင်တော်လှန်နေဆဲဖြစ်သည့် ဖက်ဒရယ်ဒီမိုကရေစီလိုလားသော ပြည်သူတစ်ရပ်လုံးနှင့်အတူ  မြန်မာနှစ်သစ်အတွက် ဆုတောင်းမေတ္တာပို့သအပ်ပါသည်။
      
      
                                                                                         
      
      `,
    },
  ];

  const navigate = useNavigate();
  const selectedNewsItem = newsItems.find((item) => item.id === parseInt(id));

  const otherNewsItems = newsItems.filter((item) => item.id !== parseInt(id));

  const handleNewsItemClick = (id) => {
    navigate(`/newdetail/${id}`);
  };

  return (
    <>
      <div className="w-full h-full p-10  ">
      <button
            onClick={() => navigate("/")}
            className="mb-5 px-5 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
          >
            Back
          </button>
        <div className="w-full h-full lg:flex xl:flex max-lg:flex-col justify-between"> 
          <div className="w-full h-full mr-3">
          <h1 className="font-bold text-center mb-3 text-xl">
            {selectedNewsItem.title}
          </h1>
          <img className="w-[500px] h-[600px] mx-auto mb-3" src={selectedNewsItem.src} alt={selectedNewsItem.title} />
          <p className="text-justify leading-8 mb-5">{selectedNewsItem.content}</p>
          </div>
            <div className="w-[400px] h-[450px] max-lg:w-full max-lg:h-auto rounded-lg shadow-lg ">
          <h2 className="px-2 py-5 bg-[#f3f4f6] font-bold text-left mb-5 text-2xl text-[#00a6a6] border-b-2 border-solid border-[#00a6a6]">
            Other News
          </h2>
          <ul>
            {otherNewsItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer text-[#00a6a6] px-2 py-4 border-b border-slate-500"
                onClick={() => handleNewsItemClick(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          </div>
          </div>
        
      </div>
      <section id="Footer" className="w-full ">
            <div className=" bg-[#f3f4f6] max-lg:flex-col max-lg:items-center max-lg:px-5 max-sm:px-3 flex justify-around mb-[10px] ">
            <div className="flex flex-col items-center ">
                <div className="flex justify-center"> 
                <img className="w-[100px] h-[100px] mt-10 max-lg:hidden" src={Logo} />
                <div className=" max-lg:w-full xl:w-[340px] lg:w-[340px]  h-auto text-center pl-[10px]">
                    <h1 className="my-3 text-[#00a6a6] font-bold text-2xl max-sm:text-xl">UNIVERSITY OF COMPUTER STUDIES, MAUBIN</h1>
                    <p className="max-sm:text-sm">Address: Between Ward 1 and 2, on Sein Mya Kan Thar Street, Maubin, Ayeyarwaddy Region, Myanmar.</p>
                    {/* Footer Email */}
                    <div className="mt-[10px] flex justify-center max-sm:flex-col max-sm:items-center" >
                    <svg className="w-[25px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <p className="ml-[10px] leading-5 font-medium">interimcouncil.ucsmub@protonmail.com</p>
                    </div>
                    {/* Footer Phone */}
                    {/* <div className="mt-[10px] flex justify-center max-sm:flex-col max-sm:items-center" >
                    <svg className="w-[24px] h-[20px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    <p className="ml-[10px] leading-5 font-medium">+14352881331</p>
                    </div> */}
                    
                </div>

                </div>
            </div>
            {/* CATEGORY */}
            <div className="flex flex-col items-center" >
                <h1 className="text-2xl max-sm:text-xl my-3 font-bold text-[#00a6a6]">CATEGORY</h1>
                <Link  className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" to="/" >HOME</Link>
                <Link  className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" to="/" >ABOUT</Link>
                <Link  className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" to="/" >IUC</Link>
                <Link  className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" to="/" >COURSE</Link>
                <Link  className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" to="/" >NEWS&EVENTS</Link>
            </div>
            {/* SOCIAL LINKS */}
            <div className="flex flex-col items-center"> 
                <h1 className=" text-2xl max-sm:text-xl my-3 font-bold text-[#00a6a6]">SOCIAL LINK</h1>
                <button onClick={handleClick} className="w-[80px] h-[40px]">
               <svg className="w-[40px] h-[30px] mx-auto relative  "fill="blue"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </button>
                {/* <div className="flex justify-between items-center">
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </div> */}
            </div>
            </div>            

           
          {/* Sub Footer */}
          <div className="w-full mx-auto  bg-[#00a6a6] p-[12px]">
                <p className="text-center font-medium text-lg text-white font-pop">Copyright 2023 © UCSMUB</p>
            </div>  
        </section>
    </>
  );
};

export default NewDetail;
