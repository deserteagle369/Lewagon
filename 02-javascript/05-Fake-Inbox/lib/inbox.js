const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  var rand = Math.random();
  console.log(rand);
  if ( rand < 0.2) {
    return  true;
  } else {
    return false;
  }
};

const message = () => {
  // TODO: return a random message as an object with two keys, subject and sender

  var Message = new Array();

  function sender(){
  var familyNames = new Array(
  "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
  "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
  "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
  "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
  "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
  "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
  "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
  "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
  "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
  "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
  );
  var givenNames = new Array(
  "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
  "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
  "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
  "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
  "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
  "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
  "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
  "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
  "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
  "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
  );
  var i = Math.floor(Math.random()*(familyNames.length));
  var familyName = familyNames[i];
  var j = Math.floor(Math.random()*(givenNames.length));
  var givenName = givenNames[i];
  var sender = familyName + givenName;
  return sender;
  };

  function subject(){
  var subjects=['人最大的改变就是去做自己害怕的事情。','再牛逼的梦想也抵不过傻逼似的坚持。','别说自己尽力了，那只是自欺欺人的假话。','决定你的人生高度的，不是你的才能，而是你的人生态度！','别说不行，你都还没做怎么会知道？该坚强就别懦弱下去。','你要记住你不是为别人而活，你是为自己而活。','青春只有一次，别让自己过得不精彩。','生活是个吃软怕硬的东西。你弱他就强，你强他就弱。','不要去预见烦恼或担心可能永远不会发生的事情，置身于明媚的阳光之中吧！','我想要自由飞翔，这一刻，我对自己说，我不在胆怯。'
  ];
  var randomNumber = Math.floor(Math.random()*(subjects.length));
  subject = subjects[randomNumber];
  return subject;
  };
  Message.sender = sender();
  Message.subject = subject();
  return Message;
};

const newMessage = async () => {
  let data =  await fetch("https://fml.shanghaiwogeng.com/api/v1/stories")
  return await data.json()   // This will return a **Promise** object
};


const appendMessageToDom = (msgs) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  console.log(msgs.length);
  for (i=0; i < msgs.length; i++){
    console.log(msgs[i].name);
    console.log(msgs[i].text);
    rows= document.querySelectorAll("#inbox > .unread").length+1;
    document.getElementById("count").innerHTML='('+rows+')';

    var d1 = document.getElementById("inbox");
    d1.insertAdjacentHTML('afterbegin',`<div class="row message unread"><div class="col-3">${msgs[i].name}</div><div class="col-9">${msgs[i].text}</div></div>`);
    document.title = rows+' new messages';
  };

}

const refresh = async () => {

  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.

  // window.setInterval('refresh()', 1000000);
  // function refresh() {
  //       window .location.reload();
  //   };
  if (hasNewMessage){
    const msgs = await newMessage();
    console.log(msgs);
    appendMessageToDom(msgs);
  };
};




// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 2000); // Every 1 second, the `refresh` function is called.
});

