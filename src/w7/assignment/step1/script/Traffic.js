class Traffic {
  // 클래스를 정의
  constructor() {
    // 클래스의 생성자 함수
    this.vehicles = []; // vehicles를 클래스의 변수로 초기화
  }

  run() {
    // 동작을 업데이트하고 그리는 역할
    this.vehicles.forEach((eachVehicle) => {
      // 아래의 작업을 수행
      const separate = eachVehicle.separate(this.vehicles); // separate을 계산하고 separate 변수에 저장
      separate.mult(1); // separate에 1을 곱하여 조절
      eachVehicle.applyForce(separate); // applyForc에 separate 적용
      const align = eachVehicle.align(this.vehicles); // align을 계산하고 align 변수에 저장
      align.mult(0.5); // align에 1을 곱하여 조절
      eachVehicle.applyForce(align); // applyForc에 align 적용
      const cohesion = eachVehicle.cohesion(this.vehicles); // cohesion을 계산하고 cohesion 변수에 저장
      cohesion.mult(0.5); // cohesion에 1을 곱하여 조절
      eachVehicle.applyForce(cohesion); // applyForc에 cohesion 적용
      eachVehicle.update(); // 위치 및 속도를 업데이트
      eachVehicle.borderInfinite(); // 화면 경계를 넘어가면 다시 화면 안쪽으로 이동
      eachVehicle.display(); // 화면에 그리기
    });
  }

  addVehicle(x, y) {
    // const mass = floor(random(1, 3));
    const mass = 1; // 질량을 1로 설정
    this.vehicles.push(
      // vehicles 배열에 새로운 Vehicle 객체를 생성
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    ); // 위치, 질량, 최대속도, 최대힘, 최소거리 및 색상을 인수
  }
}
