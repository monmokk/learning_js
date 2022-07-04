const obj = {
    x: 1,
    foo() {
        return this.x;},
    bar: function () {
        return this.x;
    },
}

new obj.foo(); //obj.foo is not a constructor. es6 메서드로, 인스턴스를 생성할 수 없는 non-constructor
new obj.bar();
