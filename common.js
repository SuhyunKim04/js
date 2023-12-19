// 변수
// 문자열은 항상 "" 로 감싸주기 
// let 은 한번 선언후 다른값으로 변경 가능
// const 절대 바뀌지 않는 상수, 수정X
// 자바스크립트에서 변수를 선언할때는 변하지 않는 값은 const,
// 변할 수 있는 값은 let으로 선언해라

// 1. 변수는 문자와 숫자, $와 _만 사용
// 2. 첫글자 숫자가 될 수 없습니다
// 3. 예약어는 사용할 수 없습니다.
// 4. 가급적 상수는 대문자로 알려줘야한다
// 5. 변수명은 읽기 쉽고 이해할 수 있게 선언


//자료형
const name = "Mike";
const age = 30;

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy';

const message3 = `My name is ${name}`
console.log(message3)


const message4 = `나는 ${30+1} 살 입니다`;
console.log(message4)

//숫자형
const aged = 30;
const PI = 3.14;

//사칙연산 가능
console.log(1 + 2); //더하기
console.log(10 - 3); //빼기
console.log(3 * 2); //곱하기
console.log(6 / 3); //나누기
console.log(6 % 4);//나머지

//Boolean
const a = true;
const b = false;

const names = "Mike";
const num = 30;

console.log(names == 'Mike');
console.log(num > 40);

//null 과 undefined

let su;
console.log(su)
let user = null;

// typeof 연산자
const da = "Mike";
console.log(typeof 3);
console.log(typeof da);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null); //객체형
console.log(typeof undefind);

const n =" wooyoo";
 
const s = "나는";
const g = " 입니다.";
console.log(s + n + g)

const e = 4;
console.log(s+ e + "살" +g)

 
// alert 알려줌
//prompt 입력 받음
//confirm 확인받음

// const t = prompt('이름을 입력하세요.');
// alert("환영합니다, " + t + "님");

// const t = prompt('이름을 입력하세요.');
// alert (`안녕하세요, ${t}님. 환영합니다`)

//prompt는 디폴트값도 줄수 있음
// const t = prompt("예약일을 입력하세요", "2023-08-");
//이렇게하면 연도는 디폴트값이된다.

//confirm
// const isAdult = confirm("당신은 성인입니까?");
// console.log(isAdult)

//단점
//1.스크립트 일시 정지
//2.스타일링 X


// type conversion(형변환)

// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) / 2;
// console.log(result);
//문자형으로 변형해서 90 + 80 = "9080"이 된다 prompt는 문자형으로 나옴

//String
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
)

//Number
console.log(Number("1234"))
//console.log(Number(true),Number(false)) == 1 0 의 값이 나온다.
console.log(Number(''))


//Boolean
//false(숫자 0 , 빈 문자열 "", null, undefined, NaN)
console.log(
    Boolean(1),
    Boolean(123),
    Boolean("javascript")
)

console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)

console.log(Boolean(Number(' ')))


//String() => 문자형으로 변환
//Number() => 숫자형으로 변환 Number("문자") = NaN
//Boolean() => 불린형으로 변환 0, null, undefined, NaN = false

//Number(null) = 0
//Number(undefined) = NaN

//Number(0) = false
//Nunber('0') = true

//Number('') = false
//Number(' ') = true


//연산자(Operators)
//나머지를 쓰는곳
//홀수: X % 2 =1
//짝수: Y % 2 =0

//만약 5보다 작은수를 얻고 싶으면 아무리 큰수라도 5로 나눈 나머지를 구하면 0 ~4 의 값을 구할수 있다
//거듭제곱 const num = 2**3 = 8;

let v = 10;
// v = v + 5;

v %= 5;
console.log(v)

//증가연산자, 감소연산자

let q = 10;
let results = ++q
console.log(results)

//비교연산자
//< > <= >= == !=
// console.log(10 > 5);
// console.log(10 == 5);
// console.log(10 != 5);


//동등연산자
const o = 1;
const i = "1";

console.log(o == i)

//일치연산자
console.log((o === i))

//조건문
//if 문
//19살이면 수능 잘치세요 라는 문구를 보여주세요

const gg = 19;

if(gg > 19){
    console.log('환영합니다');
}else if(gg === 19){
    console.log('수능잘치세요')
}
else{
    console.log('안녕히가세요')
}

//논리연산자
// ||(or)
// &&(and)
// !(not)

// \\(or)
//여러개중 하나라도 true 면 true
//즉, 모든값이 false 일때만 false를 반환

// &&(and)
// 모든값이 true 이면 true
// 즉, 하나라도 false 이면 false를 반환

// !(not)
// true 이면 false
// false 이면 true

//OR은 첫번째 true 를 발견하는 즉시 평가를 멈춤
//and는 첫번째 false 를 발견하는 즉시 평가를 멈춤

const pass = 'Mike';
const uuu = 30;
if(pass === 'Mike' && uuu > 19){
    console.log('통과')
}else {
    console.log('돌아가')
}

//NOT 
// 나이를 입력받아 성인 아니면 돌아가라고

// const qq = prompt('나이가...?')
// const isa = qq > 19;

// if(!isa) {
//     console.log('돌아가')
// }


//우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = 'F';
const nn= 'Jane';
const iskkk = true;
//******************************************
if(gender === 'M' && nn === "Jane" || iskkk){
// if(gender === 'M' && (nn === "Mike" || iskkk)){
    console.log('통과')
}else {
    console.log('돌아가')
} 
//******************************************* 물어보기
//and 가 or 보다 우선순위가 높음

//for 문
for (let i=0; i <= 10; i++){
    console.log(i)
}

//while 문
let ppp = 0;
while(ppp<10){
    console.log(g);
    ppp++
}

//do.. while 문
let y = 0;
do{
    y++;
} while (y<10)
console.log(y)

//break, continue

//break
// while(true){
//     let answer = confirm('계속 할까요?');
//     if(!answer){
//         break;
//     }
// }
//무한 반복문은 특정 조건이 되었을때 break 해주는게 중요하다

//continue
//짝수만
for (let ee = 0; ee < 10; ee++){
    if(ee%2){
        continue;
    } 
    console.log(ee)
}
//명확한 횟수가 정해져 있으면 for문을 그게 아니라면 while을 사용하는게 괜찮다



//switch
//케이스가 다양할 경우 보다 간결하게 쓸 수 있다

// switch(평가){     
//     case A: 
//     A 일때 코드
//     case B: 
//     B 일때 코드
// }

// if(평가 == A){
//     A일때 코드
// }else if(평가 == B){
//     B일때 코드
// }
//두개가 같은거임

//바나나 : 200원
//사과: 100원
//키위 : 300원
//멜론: 500원
//수박 : 500원
//사고 싶은 과일을 물어보고 가격 알려주기

// let fruit = prompt('무슨 과일을 사고 싶나요?');
// switch(fruit){
//     case '사과' :
//     console.log('100원 입니다');
//     break;
//     case '바나나' :
//     console.log('200원 입니다');
//     break;
//     case '키위' :
//     console.log('300원 입니다');
//     break;
//     case '멜론' :
//     case '수박' :
//     console.log('500원 입니다');
//     break;
//     default:
//         console.log('그런 과일 없습니다');
// }

//힘수(function)
    //함수   //함수명  //매개변수(없술 수도 있고, 한개일 수도 있고, 두개 이상일수도 있다) 여려개이면 쉼표를 찍어줘야 한다.
// function sayHello(name){
//     console.log(`Hello,${name}`)
// }

//매개 변수없는 function
function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요')
}

// showError();
let msg =  'Hello'; // 전역 변수(glovbal varable)
console.log('함수 호출 전')
console.log(msg);
function sayHello(qqq){
    
    if(qqq){
        msg += `, ${qqq}`;
    }
console.log('함수 내부')
//지역 변수
    console.log(msg);
}

sayHello();
sayHello('Mike');
console.log('함수 호출 후')
console.log(msg);
//이 메세지는 함수 밖에서는 사용할 수 없음
//지역변수임


//만약 함수 외부에서도 하용하고 싶으면 let qqq = 'Hello' 를 위에처럼 밖에 써줘야함

//전역 변수와 지역 변수
let tuy = 'welcome';
console.log(tuy)
function sayHello(iii){
let tuy = 'Hello'
    console.log(msg + ' ' + iii);
}

sayHello('Mike');
console.log(tuy);
//지역변수와 전역변수를  let으로 동일한 이름으로 해줘도 서로 간섭 안받음

let qw = 'Mike';

function ttt(qw){
    console.log(qw)
}

ttt(); //undefined
ttt('Jane'); //Jane
//지역 변수를 쓰는 습관을 들여야함

//or 연산자 활용해서 function 만들기
function ss(xx){
    let newName = xx || 'friend';
    let nn = `Hello, ${newName}`
    console.log(nn)
}

ss();
ss('Jane');
                //default 값
function vv (Name = 'friend'){
    let bbb = `Hello ${Name}`
    console.log (bbb)
}

vv();
vv('Jane')
//defualt 값을 정해주면 이름이 없을때만 할당된다

//return 으로 값 반환
// function showError(){
//     alert('에러가 발생했습니다.');
//     return;
//     alert('이 코드는 절대 실행되지 않습니다');
// }

// const result = showError();
// console.log(result);
//return 문이 없는 함수도 항상 undefined를 반환한다
//return문은 함수를 종료할때도 사용한다

//함수 (function)
//한번에 한 작없에 집중
//읽기 쉽고 어떤 동작인지 알 수 있게 네이밍

//showError 에러를 보여줌
//getName 이름을 얻어옴
//createUserData 유저데이터 생성
//checkLogin 로그인 여부 체크


// function sayHello(){
//     console.log('Hello');
// }
//함수 선언문

// let sayHello = function(){
//     console.log('Hello');
// }
//변수를 선언해 함수 할당함
//함수 표현식


//함수 선언문: 어디서든 호출 가능
//sayHello();
// function sayHello(){
//     console.log('Hello');
// }
// 함수를 호출을 함수를 쓰기전에 호출이 가능함


//함수 표현식: 코드에 도달하면 생성
// let sayHello = function(){
//     console.log('Hello')
// }
// sayHello();
//순서대로 읽으면서 내려오기 때문에 함수가 선언되기 전에는 못읽음


//화살표 함수(arrow function)
// let showerror = () => {
//     console.log('error')
// }

// const hi = (cc) => {
//     const ei = `Hello, ${cc}`;
//     console.log(ei)
// }



//객체(object)
// const superman = {
//     name: 'clark',
//     age:33,
// }

//접근
//superman.name    'clark;
//superman['age]   33

//추가
//superman.gender = 'nale'
// superman['hairColor'] = 'black'

//삭제
//delete superman.hairColor;

//Object - 단축 프로퍼티
// const name = 'clack'     const superman={
// const age = 33;             name, (같다) name:name
//                             age,  (같다) age:age   
//                             gender:'male'
//                         }

//만약 존재하지 않는 프로퍼티에 접근하면 umdefined가 뜸
//supernam.birthDay;

//'birthDay' in superman;
//false

//'age'in superman
//true

//for in 반복문
// for (let key in superman){
//     console.log(key)
//     console.log(superman[key])
// }

const superman = {
    nn :'clark',
    ag: 30,
}

delete superman.ag;
console.log(superman)

function makeObject(gf, hg){
    return{
        name: gf,
        age: hg,
        hobby: 'football'
    }
}

const Mike = makeObject('Mile', 30);
console.log(Mike)

console.log('age' in Mike);
console.log('birthday' in Mike);

//갹체 in
function adult(user){
    if (!('age' in user) || //use에 age가 없거나
    user.age< 20){          //20살 미만이거나
        return false;
    }
    return true;
}

const Tom = {
    name: 'Tom',
    age: 30
}

const Bii = {
    name: 'Jane'
}

console.log(adult(Bii))

//객체 for in 
const Su = {
    name: 'Su',
    age: 30
};

for(x in Su){
 console.log(Su[x])
}

//객체 method this

//화살표 함수는 일반 함수와는 달리 자신만의 thi를 가지지 않음
// 화살표 함수 내부에서 this 를 사용하면, 그 this는 외부에서 값을 가져옴 

let boy = {
    name: "Mike",
    showName: function(){
        console.log(this.name)
    }
}

let man = boy;
boy = null;

man.showName();

let boys = {
    name: "Mike",
    sayThis: function(){
        console.log(this)
    }
}
boys.sayThis();
//여기에서 this는 객체임

//객체는 화살표 함수로 작성하지 않는게 좋다



//배열 (Array)
//배열은 순서가 있는 리스트

//배열의 특징
//배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
// let arr = [
//     '민수',
//     3,
//     false,
//     {
//         name: 'Mike',
//         age:30,
//     },
//     function(){
//         console.log('TEST')
//     }
// ]

// length: 배열의 길이

//push(): 배열 끝에 추가
// let days = ['월', '화', '수'];
// days.push('목')
// consoele.log(days) ['월,''화','수','목']


//pop(): 배열 끝 요소 제거
// let days=['월','화','수'];
// days.pop()
// console.log(days) ['월','화']

//shift, unshift : 배열 앞에 제거/추가
//추가
// days.unshift('일');
// console.log(days) ['일','월','화','수'];

// //제거
// days.shift();
// console.log(days) ['월','화','수']
//여러 요소 한번에 추가 가능

//반복문 : for
// let days = ['월','화','수'];
// for(let index = 0; index < days.length; index++){
//     console.log(days[index])
// }


//반복문: for...of
// let days=['월','화','수']
// for(let day of days){
//     console.log(day)
// }
//for 문보다는 간단하지만 index를 얻지는 못함

let days = ['mon','tue','wed'];
days.push('thu')
days.unshift('sun')

for(let x of days){
    console.log(x)
}

