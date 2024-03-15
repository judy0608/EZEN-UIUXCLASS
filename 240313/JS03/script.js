const lat = 37.5025398;
const lng = 127.0248679;

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    level: 12, // 지도의 확대 레벨
  };
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

const clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});

const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=7f6gtIhDFDhD046dk2no4nmGMGyIYadmqc1nlF3zvaS3%2FS8b6z%2BmpDmxRWmknomXFud7HkEZLnrSWbNQMm3xrQ%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";

fetch(url)
  .then((result) => result.json())
  .then((json) => {
    const data = json.response.body.items.item;
    console.log(data);

    let markers = [];

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(map, marker);
      };
    };
    const makeOutListener = (infowindow) => {
      return () => {};
    };

    for (let i = 0; i < data.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });

      markers.push(marker);

      const infowindow = new kakao.maps.InfoWindow({
        content: data[i].facltNm,
      });

      kakao.maps.event.addListener(marker, "mouseover", makeOverListener);

      kakao.maps.event.addListener(marker, "mouseout", makeOutListener);
    }

    clusterer.addMarkers(markers);
  });

// 1. 공공 데이터 포털사이트
// 2. OpenAPI : 접근 제한 조건 X
// 3. 마이페이지 > 데이터 활용 > OpenAPI > 승인된 API 데이터 클릭
// 4. 상세기능 > 미리보리 클릭! > json 데이터 출력
// 5. 반드시 꼭 OpenAPI 주소를 가져올 때 맨 뒤에 쿼리값으로 &_type=json
// 6. JS : fetch() API => json : 객체 전환
// 7. 카카오 Map API
//   - 카카오 API 키를 발급밥고 입력
//   - 클러스터 기능 : &libraries=clusterer
// 카카오 맵 api 사이트 안에있는 기능 최대한 활용하기
// 1) Sample > 지도 생성하기 : 기본 위치 정보 세팅 : 현재 나의 위치 / 구글 맵스 위도&경도
// 2) Sample > 오버레이 > 마커생성하기 : 마커의 정보를 생성 > 빈배열 생성 > 반복문 활용 > 공공데이터를 빈배열에 저장
// 3) Sample > 오버레이 > 여러개의 마커 표시
// 4) Sample > 라이브러리 > 마커 클러스터러 사용ㅎㅏ기
