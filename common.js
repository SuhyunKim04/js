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