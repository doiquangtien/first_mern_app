const object = {
  firtName: "quang",
  lastName: "tien",
  fullName(a, b) {
    console.log(`this is ${a} ${b}`);
  },
  fullName2: function (a, b) {
    console.log(`this is ${a} ${b}`);
  },
};
object.fullName(1, 2);

object.fullName2(1, 2);
