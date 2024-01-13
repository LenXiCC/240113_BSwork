const toggleMenuBtn = document.querySelector("#toggle_barside_btn");
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click',(evt)=>{
  evt.preventDefault();
  body.classList.toggle('sidebar_toggled');
});

//piechart
const canvas = document.getElementById('PieCvs') ;//定義cvs這個為canvas
const pieCtx = canvas.getContext('2d'); //取得這塊畫布及2d繪圖方法(3d寫webgl)
const config = {
  type: 'pie', //圖表類型
  data:{//設定圖表資料
    labels: [//圓餅圖的每一塊，分別叫做什麼名字
      '大麥克全餐',
      '肥宅快樂水',
      '太爽啦義大利麵',
      '薯條加大吃不完',
      '兒童餐椅不給坐',
    ],
    datasets: [{
      label: '數量',//這些資料都是在講什麼，也就是data 300 500 100是什麼
      data: [300, 50, 100, 90,153],//每一塊的資料分別是什麼(照順序)
      backgroundColor: [//設定每一塊的顏色，可以用rgba來寫
        'rgb(255, 99, 132)',
        'rgb(255, 136, 51)',
        'rgb(255, 205, 86)',
        'rgb(124, 200, 111)',
        'rgb(117, 194, 187)',
        ],
    }]
    ,hoverOffset: 4,
  },
  options: {// 自訂屬性設定
    responsive: true,
  }
}
const pieChart = new Chart(pieCtx, config);

//barchart
const barcanvas = document.getElementById('BarCvs') ;//定義cvs這個為canvas
const barCtx = barcanvas.getContext('2d'); //取得這塊畫布及2d繪圖方法(3d寫webgl)
const barConfig = {
  type: 'bar', //圖表類型
  data:{//設定圖表資料
    labels: [//圓餅圖的每一塊，分別叫做什麼名字
      '大麥克全餐',
      '肥宅快樂水',
      '太爽啦義大利麵',
      '薯條加大吃不完',
      '兒童餐椅不給坐',
    ],
    datasets: [{
      label: '數量',//這些資料都是在講什麼，也就是data 300 500 100是什麼
      data: [313, 50, 100, 90,153],//每一塊的資料分別是什麼(照順序)
      backgroundColor: [//設定每一塊的顏色，可以用rgba來寫
        'rgb(255, 99, 132)',
        'rgb(255, 136, 51)',
        'rgb(255, 205, 86)',
        'rgb(124, 200, 111)',
        'rgb(117, 194, 187)',
        ],
    }]
    ,hoverOffset: 4,
  },
  options: {// 自訂屬性設定
    scales:{
      y:{
        max:350,
      }
    }
  }
}
const BarChart = new Chart(barCtx, barConfig);