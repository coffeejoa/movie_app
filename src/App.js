import React from 'react';


//방법1->Potato.js를 밖에다가 두는 방법
//import Potato from './Potato';


//방법2. 바로 function으로 삽입하는 방법
function Food({name,picture,rating}){
  //fav = props;
 
  //여러개의 컴포넌트 값이  다른 props.fav에 전달
  return (

    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src ={picture} alt ={name}/>
    </div>
  )
}

const foodILike =[
  {id :1,
    name:'kimchi',
    image:'https://yunseofood.com/data/goods/1/2022/05/40476_temp_16514161634099view.jpg',
    rating :5,
  },
  {id :2,
    name : 'ramen',
    image:'https://img.hankyung.com/photo/201902/AA.18901823.1.jpg',
    rating :4,
  },
  {id:3,
   name: 'samgiopsal',
   image: 'https://image.auction.co.kr/itemimage/2b/d5/67/2bd5675cb3.jpg',
   rating :3.8,
  },
  {id:4,
    name:'Bibimbap',
   image: 'https://d12zq4w4guyljn.cloudfront.net/300_300_20230730070746291_photo_YLHma8kK84vO.jpg',
   rating :4.5, 
  },
];

//{foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>)
function renderFood(dish) {
  
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

export default App;