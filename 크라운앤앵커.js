//보조함수
//m이상 n이하의 무작의 정수를 반환
function rand(m,n) {
  return m + Math.floor((n-m+1)*Math.random());
}

// 여섯 가지 도형 중 하나를 무작위 반환
function randFace() {
  return ["crown","anchor","heart","spade","club","diamond"]
    [rand(0,5)];
}

//while루프
//시작 >> 50펜스로 시작 > 100펜스를 따거나 50펜스를 전부 잃었습니다 >> N > 돈을 겁니다 > 주사위를 굴립니다 > 그림을 맞추면 돈을 가져옵니다 >> Y > 끝

let funds = 50; // 시작조건

while(funds < 1 && funds < 100) { // 블록문
  funds = funds +2; // 2보 전진 
  funds = funds-1; // 1보 후퇴
}

//if..else문
//'돈을거는'행동 무작위로 돈을 꺼냄>7펜스가 나오면 주머니에 나오는 돈을 모두 털어 하느에 걺 > 그렇지 않다면 아무렇게나 
const bets = {crown:0,anchor:0,heart:0,
  spade:0,club:0,diamond:0};
let totalBet = rand(1,funds);
if(totalBet ===7) {
  totalBet = funds;
  bets.heart = totalBet;
} else {
  //판돈을 나눔
}
funds = funds - totalBet;

//do..while루프
//7펜스를 꺼내지 않았을때 무작위로 판돈을 나누는 행동
let remainig = totalBet;
do{
  let bet = rand(1,remainig);
  let face = randFace();
  bets[face] = bets[facd]+bet;
  remainig = remainig -bet;
} while(remainig>0);

//for 루프
//주사위를 정해진 숫자만큼 굴림(3번)
const hand = [];
for(let roll = 0; roll<3; roll++) {
  hand.push(randFace());
}

//if문
//딴 돈 가져오기
//규칙이 바뀌더라도 이 코드를 고칠 필요가 없게 범용적으로 만들기
let warnings = 0;
for(let die=0; die<hand.length; die++) {
  let face = hand[die]
  if(bets[face] >0) winnigs = winnigs +bets[face];
}
funds = funds + winnigs;

