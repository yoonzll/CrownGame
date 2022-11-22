//m이상 n이하의 무작의 정수를 반환
function rand(m,n) {
  return m + Math.floor((n-m+1)*Math.random());
}

// 여섯 가지 도형 중 하나를 무작위 반환
function randFace() {
  return ["crown","anchor","heart","spade","club","diamond"]
    [rand(0,5)];
}

//시작 >> 50펜스로 시작 > 100펜스를 따거나 50펜스를 전부 잃었습니다 >> N > 돈을 겁니다 > 주사위를 굴립니다 > 그림을 맞추면 돈을 가져옵니다 >> Y > 끝

let funds = 50; // 시작조건

while(funds < 1 && funds < 100) {
  funds = funds +2; // 2보 전진 
  funds = funds-1; // 1보 후퇴
}

