// 일반 객체
// 장점
// - key와 value값을 가지고있는 프로퍼티.
// - 데이터를 체계적으로 보관/관리/사용 할 수 있다.
// 단점
// - for … in => 객체 안에 있는 value값 만을 찾아와 직접적으로 반복문을 돌릴 수 있는 방법이 없다.
// - 객체 안에 구성되어 있는 아이템들은 배열처럼 index 값를 할당받지 못한다.
// 배열 객체
// 장점
// - 배열 안에 포함되어있는 아이템들이 고유의 index 값을 가지고 있으며, for 문을 활용한 반복문으로 업무의 효율성을 극대화시킬 수 있다.
// 단점
// - 객체처럼 key와 value 형태로 구성된 체계적인 데이터 관리가 안된다.

// 일반 객체와 배열 객체의 장점만 모아서 하나로 만들어주면 어떨까?
// Map 객체 탄생 : 2015, ES6
// - key와 value 값으로 구성된 아이템을 가질 수 있다.
// - 각 아이템 별 index 값을 할당 받을 수 있다.
// - for의 반복문을 활용해서 언제든지 값을 추출 해낼 수 있다.

// Map 객체 //

const bag = new Map();
bag.set("color", "red");
console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup);

myCup.set("type", "mini");
console.log(myCup);

myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup);

// 배열에서 사용하는 랭스 = 맵객체에서는 사이즈
console.log(myCup.size);

// 키에 매칭되어있는 값을 찾아오는 함수
console.log(myCup.get("color"));

// 객체 안에 아이템의 존재 여부를 참과 거짓으로 찾아온다
console.log(myCup.has("color"));
console.log(myCup.has("variable"));

// 객체 안에 원하는 키와 키값을 삭제할 때 사용하는 함수
myCup.delete("type");
console.log(myCup);

// 맵객체 안에 있는 모든 값을 없애는 ㅎ함수
// myCup.clear();

// 배열과 같이 내부 아이템을 한 개씩 찾아와서 반복 순회 할 수 있도록 해주는 객체 = 이터레이터 객체 MapIterator
// 이터레이터인 객체만 반복문을 사용할 수 있다.
console.log(myCup.keys());

for (let key of myCup.keys()) {
  console.log(key);
}

for (let value of myCup.values()) {
  console.log(value);
}

for (let value of myCup.entries()) {
  console.log(value);
}

// Map 객체의 치명적인 단점 : 데이터의 중복을 막을 수 없다.
// 동일한 데이터가 하나의 객체 안에 들어오면 안되는 상황이 있다면 ..?
// 일반객체의 장점 + 배열객체의 장점 + Map + 데이터 중복 X === Set() 의 탄생

// Set 객체 //

const numSet1 = new Set();
numSet1.add("one");
console.log(numSet1);

numSet1.add("one").add("twe");
console.log(numSet1);

const numSet2 = new Set([1, 2, 3]);
console.log(numSet2);

console.log(numSet2.has(2));

numSet2.delete(1);
console.log(numSet2);

numSet2.clear();
console.log(numSet2);
