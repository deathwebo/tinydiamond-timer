<template>
  <div id="container">
    <div id="thisIsFine">
      <div id="mirrorFrame"></div>
      <div id="mirrorGlass"></div>
      <div id="floor"></div>
      <div id="tableLeg"></div>
      <div id="tableBottom"></div>
      <div id="tableTop"></div>
      <div id="handle"></div>
      <div id="handleInner"></div>
      <div id="cup"></div>
      <div id="coffee"></div>
      <div id="doorway"></div>
      <div id="chairLegBackLeft"></div>
      <div id="chairLegBackRight"></div>
      <div id="chairLegFrontLeft"></div>
      <div id="chairLegFrontRight"></div>
      <div id="chairBackBottom"></div>
      <div id="chairBackTop"></div>
      <div id="chairSeat"></div>
      <div id="backDogLegTop"></div>
      <div id="backDogFoot"></div>
      <div id="backDogLegBottom"></div>
      <div id="dog"></div>
      <div id="rightEye"></div>
      <div id="rightPupil"></div>
      <div id="dogSnout"></div>
      <div id="dogNose"></div>
      <div id="leftEye"></div>
      <div id="leftPupil"></div>
      <div id="dogEar"></div>
      <div id="hatBrim"></div>
      <div id="hatBand"></div>
      <div id="hatTop"></div>
      <div id="armLeft"></div>
      <div id="armRight"></div>
      <div id="frontDogLegTop"></div>
      <div id="frontDogFoot"></div>
      <div id="frontDogLegBottom"></div>
      <div id="leftFireTwoOrange"></div>
      <div id="fireFourOrange"></div>
      <div id="fireFiveOrange"></div>
      <div id="fireSixOrange"></div>
      <div id="leftFireRightRightOrange"></div>
      <div id="rightFireTwoOrange"></div>
      <div id="fireSevenOrange"></div>
      <div id="leftFireOrange"></div>
      <div id="rightFireOrange"></div>
      <div id="leftFireMain"></div>
      <div id="leftFireRight"></div>
      <div id="leftFireRightRight"></div>
      <div id="leftFireTwo"></div>
      <div id="leftFire"></div>
      <div id="rightFire"></div>
      <div id="rightFireTwo"></div>
      <div id="fireFour"></div>
      <div id="fireFive"></div>
      <div id="fireSix"></div>
      <div id="fireSeven"></div>
      <div id="smokeOneBottom"></div>
      <div id="smokeThreeBottom"></div>
      <div id="smokeFourBottom"></div>
      <div id="smokeFourBottom"></div>
      <div id="smokeEightBottom"></div>
      <div id="smokeSevenBottom"></div>
      <div id="smokeFiveBottom"></div>
      <div id="smokeSixBottom"></div>
      <div id="smokeTenBottom"></div>
      <div id="smokeNineBottom"></div>
      <div id="smokeThirteenBottom"></div>
      <div id="smokeTwelveBottom"></div>
      <div id="smokeElevenBottom"></div>
      <div id="smokeTwoBottom"></div>
      <div id="smokeOne"></div>
      <div id="smokeThree"></div>
      <div id="smokeTwo"></div>
      <div id="smokeFour"></div>
      <div id="smokeFour"></div>
      <div id="smokeEight"></div>
      <div id="smokeSeven"></div>
      <div id="smokeFive"></div>
      <div id="smokeSix"></div>
      <div id="smokeTen"></div>
      <div id="smokeNine"></div>
      <div id="smokeThirteen"></div>
      <div id="smokeTwelve"></div>
      <div id="smokeEleven"></div>
      <div id="fireRightOneOrange"></div>
      <div id="fireRightTwoOrange"></div>
      <div id="fireRightThreeOrange"></div>
      <div id="fireRightFourOrange"></div>
      <div id="fireRightFiveOrange"></div>
      <div id="fireRightSixOrange"></div>
      <div id="fireRightSevenOrange"></div>
      <div id="fireRightMain"></div>
      <div id="fireRightMainTwo"></div>
      <div id="fireRightMainThree"></div>
      <div id="fireRightOne"></div>
      <div id="fireRightTwo"></div>
      <div id="fireRightThree"></div>
      <div id="fireRightFour"></div>
      <div id="fireRightFive"></div>
      <div id="fireRightSix"></div>
      <div id="fireRightSeven"></div>
      <div id="bubbleArrowThree"></div>
      <div id="bubbleArrowTwo"></div>
      <div id="bubbleArrowOne"></div>
      <div id="speechBubble"><p>This is fine</p></div>
    </div>
    <div id="gap"></div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  font-family: "Indie Flower", cursive;
}
#container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(5vh, auto);
  margin: 0 auto;
}

#thisIsFine {
  position: relative;
  grid-column: 7/7;
  grid-row: 2/3;
  background-color: #9be8d5;
  width: 500px;
  height: 300px;
  border: 2px solid black;
}
#mirrorFrame {
  position: absolute;
  width: 60px;
  height: 85px;
  right: 90px;
  top: 50px;
  background-color: #526359;
  border-bottom: 2px solid black;
  border-left: 1px solid black;
}
#mirrorGlass {
  position: absolute;
  width: 40px;
  height: 65px;
  right: 100px;
  top: 60px;
  background-color: #768fbd;
  border: 1px solid grey;
}
#floor {
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  background-color: #c79e7a;
  border-top: 1px solid black;
}
#backTableFire {
  position: absolute;
  width: 150px;
  height: 100px;
  bottom: 70px;
  right: 0;
  border-radius: 20% 0 0 0;
  background-color: #ffe74e;
}
#tableLeg {
  position: absolute;
  width: 8px;
  height: 50px;
  bottom: 50px;
  right: 170px;
  border-radius: 20%;
  background-color: #b28e6d;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
#tableTop {
  position: absolute;
  width: 190px;
  height: 40px;
  bottom: 80px;
  right: 0;
  border-radius: 50%;
  background-color: #c79e7a;
  border-bottom: 1px solid #b28e6d;
  border-top: 1px solid black;
}
#tableBottom {
  position: absolute;
  width: 190px;
  height: 40px;
  bottom: 75px;
  right: 0;
  border-radius: 45% 50% 50% 50%;
  background-color: #b28e6d;
  border-bottom: 1px solid #b28e6d;
}
#cup {
  position: absolute;
  width: 15px;
  height: 20px;
  bottom: 100px;
  right: 155px;
  border-radius: 20%;
  background-color: #fce49b;
  border: 1px solid black;
}
#coffee {
  position: absolute;
  width: 12px;
  height: 3px;
  bottom: 115px;
  right: 157px;
  border-radius: 20% 20% 50% 50%;
  background-color: black;
  border: 1px solid black;
}
#handle {
  position: absolute;
  width: 4px;
  height: 11px;
  bottom: 103px;
  right: 151px;
  border-radius: 20% 50% 50% 20%;
  background-color: #fce49b;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
#handleInner {
  position: absolute;
  width: 4px;
  height: 7px;
  bottom: 105px;
  right: 153px;
  border-radius: 20% 50% 50% 20%;
  background-color: #c79e7a;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
#chairLegFrontLeft {
  position: absolute;
  width: 6px;
  height: 40px;
  bottom: 50px;
  right: 273px;
  border-radius: 20%;
  background-color: #b28e6d;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
#chairLegBackLeft {
  position: absolute;
  width: 6px;
  height: 35px;
  bottom: 52px;
  right: 256px;
  border-radius: 20%;
  background-color: #66513f;
}
#chairLegFrontRight {
  position: absolute;
  width: 6px;
  height: 40px;
  bottom: 48px;
  right: 244px;
  border-radius: 20%;
  background-color: #b28e6d;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
#chairLegBackRight {
  position: absolute;
  width: 6px;
  height: 35px;
  bottom: 52px;
  right: 235px;
  border-radius: 20%;
  background-color: #66513f;
}
#chairBackTop {
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 85px;
  right: 250px;
  border-radius: 30%;
  background-color: #b28e6d;
  border-left: 1px solid #9c7c5f;
}
#chairBackBottom {
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 85px;
  right: 255px;
  border-radius: 30%;
  background-color: #b28e6d;
  border-left: 1px solid black;
}
#chairSeat {
  position: absolute;
  width: 50px;
  height: 10px;
  bottom: 80px;
  right: 232px;
  border-radius: 40% 40% 30% 30%;
  background-color: #b28e6d;
  border: 1px solid #9c7c5f;
}
#doorway {
  position: absolute;
  width: 80px;
  height: 140px;
  bottom: 70px;
  left: 150px;
  background-color: #5c8a7e;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 5px solid black;
}
#dog {
  position: absolute;
  width: 50px;
  height: 75px;
  bottom: 85px;
  right: 232px;
  border-radius: 40%;
  background-color: #ffbc4e;
  border: 1px solid black;
}
#dogSnout {
  position: absolute;
  width: 30px;
  height: 15px;
  bottom: 125px;
  right: 212px;
  border-radius: 45%;
  background-color: #ffbc4e;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
#dogNose {
  position: absolute;
  width: 17px;
  height: 11px;
  bottom: 132px;
  right: 210px;
  border-radius: 45%;
  background-color: black;
}
#leftEye {
  position: absolute;
  width: 14px;
  height: 18px;
  bottom: 131px;
  right: 254px;
  border-radius: 45%;
  background-color: white;
  border: 1px solid black;
}
#leftPupil {
  position: absolute;
  width: 9px;
  height: 13px;
  bottom: 134px;
  right: 257px;
  border-radius: 45%;
  background-color: black;
}
#rightEye {
  position: absolute;
  width: 15px;
  height: 19px;
  bottom: 135px;
  right: 233px;
  border-radius: 45%;
  background-color: white;
  border: 1px solid black;
}
#rightPupil {
  position: absolute;
  width: 10px;
  height: 14px;
  bottom: 138px;
  right: 234px;
  border-radius: 45%;
  background-color: black;
}
#dogEar {
  position: absolute;
  bottom: 117px;
  right: 275px;
  width: 15px;
  height: 30px;
  border-radius: 0 90% 30% 90%;
  transform: rotate(35deg);
  background-color: black;
}
#hatBrim {
  position: absolute;
  bottom: 152px;
  right: 255px;
  width: 30px;
  height: 13px;
  border-radius: 50%;
  background-color: #b28e6d;
  transform: rotate(-25deg);
  border: 1px solid black;
}
#hatBand {
  position: absolute;
  bottom: 158px;
  right: 264px;
  width: 18px;
  height: 15px;
  border-radius: 50% 50% 30% 30%;
  background-color: black;
  transform: rotate(-25deg);
  border: 1px solid black;
}
#hatTop {
  position: absolute;
  bottom: 164px;
  right: 266px;
  width: 18px;
  height: 12px;
  border-radius: 50% 50% 20% 20%;
  background-color: #b28e6d;
  transform: rotate(-25deg);
  border: 1px solid black;
}
#armLeft {
  position: absolute;
  width: 20px;
  height: 31px;
  bottom: 86px;
  right: 248px;
  border-radius: 50%;
  background-color: #ffbc4e;
  border-left: 1px solid black;
  transform: rotate(-45deg);
}
#armRight {
  position: absolute;
  width: 20px;
  height: 27px;
  bottom: 90px;
  right: 243px;
  border-radius: 50%;
  background-color: #ffbc4e;
  border-left: 1px solid black;
  transform: rotate(-45deg);
}
#frontDogLegTop {
  position: absolute;
  width: 20px;
  height: 5px;
  bottom: 85px;
  right: 242px;
  border-radius: 10% 40% 40% 20%;
  background-color: #ffbc4e;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(-5deg);
}
#frontDogLegBottom {
  position: absolute;
  width: 5px;
  height: 11px;
  bottom: 77px;
  right: 242px;
  border-radius: 10% 10% 10% 10%;
  background-color: #ffbc4e;
  border-right: 1px solid black;
  border-left: 1px solid black;
}
#frontDogFoot {
  position: absolute;
  width: 12px;
  height: 6px;
  bottom: 72px;
  right: 235px;
  border-radius: 40%;
  background-color: #ffbc4e;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(-15deg);
}
#backDogLegTop {
  position: absolute;
  width: 20px;
  height: 5px;
  bottom: 85px;
  right: 232px;
  border-radius: 10% 40% 40% 20%;
  background-color: #ffbc4e;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(-5deg);
}
#backDogLegBottom {
  position: absolute;
  width: 4px;
  height: 11px;
  bottom: 77px;
  right: 232px;
  border-radius: 10% 10% 10% 10%;
  background-color: #ffbc4e;
  border-right: 1px solid black;
  border-left: 1px solid black;
}
#backDogFoot {
  position: absolute;
  width: 12px;
  height: 6px;
  bottom: 72px;
  right: 225px;
  border-radius: 40%;
  background-color: #ffbc4e;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(-15deg);
}
#leftFireMain {
  position: absolute;
  width: 100px;
  height: 150px;
  bottom: 0px;
  border-radius: 0 20% 0 0;
  background-color: #ffe74e;
}
#leftFireRight {
  position: absolute;
  width: 90px;
  height: 90px;
  bottom: 0px;
  left: 50px;
  border-radius: 0 20% 0 0;
  background-color: #ffe74e;
}
#leftFireRightRight {
  position: absolute;
  width: 100px;
  height: 20px;
  bottom: 0px;
  left: 78px;
  border-radius: 0 40% 0 0;
  background-color: #ffe74e;
}
#leftFireRightRightOrange {
  position: absolute;
  width: 100px;
  height: 30px;
  bottom: 0px;
  left: 81px;
  border-radius: 0 50% 0 0;
  background-color: #ffbc4e;
}
#leftFire {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 145px;
  transform: rotate(110deg);
  left: -24px;
  animation: 2s leftFire infinite;
}
#leftFireOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 155px;
  transform: rotate(110deg);
  left: -24px;
  animation: 1.5s leftFireOrange infinite;
}
#rightFire {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 110px;
  left: 30px;
  transform: scaleY(-1) rotate(-65deg);
  animation: 2s rightFire infinite;
}
#rightFireOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 120px;
  left: 30px;
  transform: scaleY(-1) rotate(-65deg);
  animation: 1.5s rightFireOrange infinite;
}
#leftFireTwo {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 125px;
  transform: rotate(110deg);
  left: -5px;
  animation: 2s leftFireTwo infinite;
}
#leftFireTwoOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 135px;
  transform: rotate(110deg);
  left: -5px;
  animation: 1.5s leftFireTwoOrange infinite;
}
#rightFireTwo {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 125px;
  left: 13px;
  transform: scaleY(-1) rotate(-45deg);
  animation: 2s rightFireTwo infinite;
}
#rightFireTwoOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 135px;
  left: 13px;
  transform: scaleY(-1) rotate(-45deg);
  animation: 1.5s rightFireTwoOrange infinite;
}
#fireFour {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 70px;
  left: 65px;
  transform: scaleY(-1) rotate(-65deg);
  animation: 2s fireFour infinite;
}
#fireFourOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 80px;
  left: 65px;
  transform: scaleY(-1) rotate(-65deg);
  animation: 1.5s fireFourOrange infinite;
}
#fireFive {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 30px solid #ffe74e;
  bottom: 40px;
  left: 85px;
  transform: rotate(115deg);
  animation: 2s fireFive infinite;
}
#fireFiveOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 30px solid #ffbc4e;
  bottom: 50px;
  left: 87px;
  transform: rotate(115deg);
  animation: 1.5s fireFiveOrange infinite;
}
#fireSix {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 10px;
  left: 105px;
  transform: scaleY(-1) rotate(-60deg);
  animation: 2s fireSix infinite;
}
#fireSixOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 20px;
  left: 107px;
  transform: scaleY(-1) rotate(-60deg);
  animation: 1.5s fireSixOrange infinite;
}
#fireSeven {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 30px solid #ffe74e;
  bottom: 20px;
  left: 140px;
  transform: scaleY(-1) rotate(-75deg);
  animation: 2s fireSeven infinite;
}
#fireSevenOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-radius: 0 0 30% 0;
  border-bottom: 30px solid #ffbc4e;
  bottom: 28px;
  left: 142px;
  transform: scaleY(-1) rotate(-75deg);
  animation: 1.5s fireSevenOrange infinite;
}
#smokeOne {
  position: absolute;
  width: 50px;
  height: 30px;
  background-color: #524e59;
  border-radius: 0 0 50% 0;
  border-bottom: 2px solid black;
}
#smokeTwo {
  position: absolute;
  width: 60px;
  height: 30px;
  left: 40px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeTwo infinite;
}
#smokeThree {
  position: absolute;
  width: 90px;
  height: 30px;
  left: 90px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeThree infinite;
}
#smokeFour {
  position: absolute;
  width: 40px;
  height: 20px;
  left: 170px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeFour infinite;
}
#smokeFive {
  position: absolute;
  width: 60px;
  height: 30px;
  left: 200px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeFive infinite;
}
#smokeSix {
  position: absolute;
  width: 60px;
  height: 17px;
  left: 230px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeSix infinite;
}
#smokeSeven {
  position: absolute;
  width: 90px;
  height: 30px;
  left: 250px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeSeven infinite;
}
#smokeEight {
  position: absolute;
  width: 70px;
  height: 30px;
  left: 300px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeEight infinite;
}
#smokeNine {
  position: absolute;
  width: 70px;
  height: 20px;
  left: 330px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeNine infinite;
}
#smokeTen {
  position: absolute;
  width: 60px;
  height: 25px;
  left: 370px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeTen infinite;
}
#smokeEleven {
  position: absolute;
  width: 60px;
  height: 30px;
  left: 400px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeEleven infinite;
}
#smokeTwelve {
  position: absolute;
  width: 60px;
  height: 30px;
  left: 440px;
  background-color: #524e59;
  border-radius: 0 0 0 50%;
  border-bottom: 2px solid black;
}
#smokeThirteen {
  position: absolute;
  width: 60px;
  height: 30px;
  left: 440px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeThirteen infinite;
}
#smokeOneBottom {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 0;
  border-bottom: 2px solid black;
}
#smokeTwoBottom {
  position: absolute;
  width: 60px;
  height: 50px;
  right: 40px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeTwoBottom infinite;
}
#smokeThreeBottom {
  position: absolute;
  width: 90px;
  height: 50px;
  right: 90px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeThreeBottom infinite;
}
#smokeFourBottom {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 170px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeFourBottom infinite;
}
#smokeFiveBottom {
  position: absolute;
  width: 60px;
  height: 50px;
  right: 200px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeFiveBottom infinite;
}
#smokeSixBottom {
  position: absolute;
  width: 60px;
  height: 37px;
  right: 230px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeSixBottom infinite;
}
#smokeSevenBottom {
  position: absolute;
  width: 90px;
  height: 50px;
  right: 250px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeSevenBottom infinite;
}
#smokeEightBottom {
  position: absolute;
  width: 70px;
  height: 50px;
  right: 300px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeEightBottom infinite;
}
#smokeNineBottom {
  position: absolute;
  width: 70px;
  height: 40px;
  right: 330px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeNineBottom infinite;
}
#smokeTenBottom {
  position: absolute;
  width: 60px;
  height: 45px;
  right: 370px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeTenBottom infinite;
}
#smokeElevenBottom {
  position: absolute;
  width: 60px;
  height: 50px;
  right: 400px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeElevenBottom infinite;
}
#smokeTwelveBottom {
  position: absolute;
  width: 60px;
  height: 50px;
  right: 0px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 0 50%;
  border-bottom: 2px solid black;
}
#smokeThirteenBottom {
  position: absolute;
  width: 60px;
  height: 50px;
  right: 440px;
  top: 10px;
  background-color: #524e59;
  border-radius: 0 0 50% 50%;
  border-bottom: 2px solid black;
  animation: 5s smokeThirteenBottom infinite;
}
#fireRightMain {
  position: absolute;
  width: 200px;
  height: 40px;
  bottom: 0px;
  right: 0;
  border-radius: 50% 0 0 0;
  background-color: #ffe74e;
}
#fireRightMainTwo {
  position: absolute;
  width: 120px;
  height: 75px;
  bottom: 0px;
  right: 0;
  border-radius: 20% 0 0 0;
  background-color: #ffe74e;
}
#fireRightMainThree {
  position: absolute;
  width: 70px;
  height: 115px;
  bottom: 0px;
  right: 0;
  border-radius: 50% 0 0 0;
  background-color: #ffe74e;
}
#fireRightOne {
  position: absolute;
  bottom: 25px;
  right: 165px;
  width: 20px;
  height: 30px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  background-color: #ffe74e;
  animation: 2s fireRightOne infinite;
}
#fireRightOneOrange {
  position: absolute;
  bottom: 30px;
  right: 165px;
  width: 20px;
  height: 30px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  background-color: #ffbc4e;
  animation: 1.5s fireRightOneOrange infinite;
}
#fireRightTwo {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 30px solid #ffe74e;
  bottom: 33px;
  right: 75px;
  transform: rotate(115deg);
  animation: 2s fireRightTwo infinite;
}
#fireRightTwoOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 30px solid #ffbc4e;
  bottom: 40px;
  right: 74px;
  transform: rotate(115deg);
  animation: 1.5s fireRightTwoOrange infinite;
}
#fireRightThree {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 8px;
  right: 105px;
  transform: scaleY(-1) rotate(-65deg);
  animation: 2s fireRightThree infinite;
}
#fireRightThreeOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 18px;
  right: 105px;
  transform: scaleY(-1) rotate(-65deg);
  animation: 1.5s fireRightThreeOrange infinite;
}
#fireRightFour {
  position: absolute;
  bottom: 55px;
  right: 75px;
  width: 40px;
  height: 40px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  background-color: #ffe74e;
  animation: 2s fireRightFour infinite;
}
#fireRightFourOrange {
  position: absolute;
  bottom: 60px;
  right: 75px;
  width: 40px;
  height: 40px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  background-color: #ffbc4e;
  animation: 1.5s fireRightFourOrange infinite;
}
#fireRightFive {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffe74e;
  bottom: 55px;
  right: 13px;
  transform: scaleY(-1) scaleX(-1) rotate(-45deg);
  animation: 2s fireRightFive infinite;
}
#fireRightFiveOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 40px solid #ffbc4e;
  bottom: 65px;
  right: 10px;
  transform: scaleY(-1) scaleX(-1) rotate(-45deg);
  animation: 1.5s fireRightFiveOrange infinite;
}
#fireRightSix {
  position: absolute;
  bottom: 75px;
  right: 4px;
  width: 40px;
  height: 55px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  background-color: #ffe74e;
  animation: 2s fireRightSix infinite;
}
#fireRightSixOrange {
  position: absolute;
  bottom: 80px;
  right: 4px;
  width: 40px;
  height: 55px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  background-color: #ffbc4e;
  animation: 1.5s fireRightSixOrange infinite;
}
#fireRightSeven {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-radius: 0 0 50% 0;
  border-bottom: 30px solid #ffe74e;
  bottom: 2px;
  right: 165px;
  transform: scaleY(-1) scaleX(-1) rotate(-75deg);
  animation: 2s fireRightSeven infinite;
}
#fireRightSevenOrange {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 25px solid transparent;
  border-radius: 0 0 30% 0;
  border-bottom: 30px solid #ffbc4e;
  bottom: 7px;
  right: 159px;
  transform: scaleY(-1) scaleX(-1) rotate(-80deg);
  animation: 1.5s fireRightSevenOrange infinite;
}
#speechBubble {
  position: absolute;
  width: 100px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  top: 70px;
  right: 160px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  text-align: center;
  animation: 6s speech infinite;
  opacity: 0;
}
p {
  padding-top: 12px;
}
#bubbleArrowOne {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  top: 120px;
  right: 205px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  animation: 6s speech infinite;
  opacity: 0;
}
#bubbleArrowTwo {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  top: 133px;
  right: 211px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  animation: 6s speech infinite;
  opacity: 0;
}
#bubbleArrowThree {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: white;
  top: 140px;
  right: 221px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  animation: 6s speech infinite;
  opacity: 0;
}
#gap {
  grid-row: 3/4;
}

@keyframes speech {
  65% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes smokeTwo {
  50% {
    left: 0px;
  }
}
@keyframes smokeThree {
  50% {
    left: 50px;
  }
}
@keyframes smokeFour {
  50% {
    left: 130px;
  }
}
@keyframes smokeFive {
  50% {
    left: 160px;
  }
}
@keyframes smokeSix {
  50% {
    left: 190px;
  }
}
@keyframes smokeSeven {
  50% {
    left: 210px;
  }
}
@keyframes smokeEight {
  50% {
    left: 260px;
  }
}
@keyframes smokeNine {
  50% {
    left: 290px;
  }
}
@keyframes smokeTen {
  50% {
    left: 330px;
  }
}
@keyframes smokeEleven {
  50% {
    left: 360px;
  }
}
@keyframes smokeThirteen {
  50% {
    left: 400px;
  }
}
@keyframes smokeTwoBottom {
  50% {
    right: 0px;
  }
}
@keyframes smokeThreeBottom {
  50% {
    right: 50px;
  }
}
@keyframes smokeFourBottom {
  50% {
    right: 130px;
  }
}
@keyframes smokeFiveBottom {
  50% {
    right: 160px;
  }
}
@keyframes smokeSixBottom {
  50% {
    right: 190px;
  }
}
@keyframes smokeSevenBottom {
  50% {
    right: 210px;
  }
}
@keyframes smokeEightBottom {
  50% {
    right: 260px;
  }
}
@keyframes smokeNineBottom {
  50% {
    right: 290px;
  }
}
@keyframes smokeTenBottom {
  50% {
    right: 330px;
  }
}
@keyframes smokeElevenBottom {
  50% {
    right: 360px;
  }
}
@keyframes smokeThirteenBottom {
  50% {
    right: 400px;
  }
}

@keyframes fireRightOne {
  50% {
    bottom: 22px;
  }
}
@keyframes fireRightOneOrange {
  50% {
    bottom: 27px;
  }
}
@keyframes fireRightTwo {
  50% {
    bottom: 36px;
  }
}
@keyframes fireRightTwoOrange {
  50% {
    bottom: 43px;
  }
}
@keyframes fireRightThree {
  50% {
    bottom: 11px;
  }
}
@keyframes fireRightThreeOrange {
  50% {
    bottom: 21px;
  }
}
@keyframes fireRightFour {
  50% {
    bottom: 52px;
  }
}
@keyframes fireRightFourOrange {
  50% {
    bottom: 57px;
  }
}
@keyframes fireRightFive {
  50% {
    bottom: 52px;
  }
}
@keyframes fireRightFiveOrange {
  50% {
    bottom: 68px;
  }
}
@keyframes fireRightSix {
  50% {
    bottom: 78px;
  }
}
@keyframes fireRightSixOrange {
  50% {
    bottom: 77px;
  }
}
@keyframes fireRightSeven {
  50% {
    bottom: 5px;
  }
}
@keyframes fireRightSevenOrange {
  50% {
    bottom: 10px;
  }
}

@keyframes leftFire {
  50% {
    bottom: 142px;
  }
}
@keyframes leftFireOrange {
  50% {
    bottom: 152px;
  }
}
@keyframes leftFireTwo {
  50% {
    bottom: 132px;
  }
}
@keyframes leftFireTwoOrange {
  50% {
    bottom: 142px;
  }
}
@keyframes rightFireTwo {
  50% {
    bottom: 132px;
  }
}
@keyframes rightFireTwoOrange {
  50% {
    bottom: 142px;
  }
}
@keyframes rightFire {
  50% {
    bottom: 107px;
  }
}
@keyframes rightFireOrange {
  50% {
    bottom: 117px;
  }
}
@keyframes fireFour {
  50% {
    bottom: 77px;
  }
}
@keyframes fireFourOrange {
  50% {
    bottom: 77px;
  }
}
@keyframes fireFive {
  50% {
    bottom: 37px;
  }
}
@keyframes fireFiveOrange {
  50% {
    bottom: 47px;
  }
}
@keyframes fireSix {
  50% {
    bottom: 7px;
  }
}
@keyframes fireSixOrange {
  50% {
    bottom: 17px;
  }
}
@keyframes fireSeven {
  50% {
    bottom: 17px;
  }
}
@keyframes fireSevenOrange {
  50% {
    bottom: 25px;
  }
}
</style>
