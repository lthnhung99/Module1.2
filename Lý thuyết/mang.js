//1. Tạo mảng: có 2 cách:
cách 1: Sử dụng dấu ngoặc vuông []
ví dụ:
let languages = ['javascript', 'PHP' , 'Ruby']
cách 2: sử dụng từ khóa new
ví dụ:
let languages = new Aray ('javascript', 'PHP' , 'Ruby')
 Nên sử dụng cách 1. vì ngắn gọn và dễ hiểu
 Cách 2 thực thi chậm hơn 
 //2. Kiểm tra data type:
 let languages = ['javascript', 'PHP' , 'Ruby']
 console.log(Array.isArray(languages)) 
 console.log(Array.isArray(newArray(1,2)))
 //3. Truy xuất mảng:
 - Độ dài của mảng: length
 let languages = ['javascript', 'PHP' , 'Ruby']
 console.log(languages.length) 
 - Lấy phần tử theo index:
 let languages = ['javascript', 'PHP' , 'Ruby']
 console.log(languages[0])



 *length : độ dàng mảng 
a.length()
*push() : thêm phần tử vào cuối mảng
    a.push('Cars')
*pop() : xoá phần tử cuối của mảng 
    a.pop()
*shift() : xóa phần tử đầu  trong mảng và trả về phần đã xóa
*unshift() : thêm phần tử  đầu mảng 
*join() : Chuyển tất cả các phần tử trong mảng thành chuỗi và nối lại với nhau 
*splice:xóa, cắt, chèn các phần tử mới vào mảng 
*concat:nối được các array 
*slice:cắt 1 vài element của mảng
//4.map:
cú pháp:
array.map(function(item){
    // item chính là phần tử đang lặp
    return item; // giá trị trả về sẽ thay thế cho giá trị ban đầu của phần tử
});
.map() method được dùng khi bạn muốn thao tác trên 1 mảng và muốn trả về 1 mảng
 các giá trị thay đổi dựa trên giá trị của mảng đầu vào.
ví dụ:
    const lengthArr = [1, 4, 3, 6];
    let areaArr = [];
    for(let i=0; i < lengthArr.length; i++) 
        {
        areaArr.push(lengthArr[i] * lengthArr[i]);
        }
    console.log(areaArr);//[1, 16, 9, 36]
ví dụ:
    const lengthArr = [1, 4, 3, 6];
    let areaArr = lengthArr.map(length => length * length);
    console.log(areaArr);//[1, 16, 9, 36]
map() nhận input vào là 1 callback function để transform mỗi phần tử trong mảng 
thành 1 giá trị mới.
ví dụ:
let courses = [
{
    id:1,
    name:'javascript',
    coin:0
},
{
    id:2,
    name:'HTML, CSS',
    coin:1
},
{
    id:3,
    name:'ruby',
    coin:1
},
];
//var newCourse = course.map();không truyền vô map sẽ bị lỗi 
//var newCourse = course.map(function()); 
function courseHandler(course,index,originArray) {
    return { // return lại cái gì gì nhận lại cái đó
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray:originArray,
    };
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);

//5.cú pháp của forEach:Dùng forEach cho phép thao tác lần lượt với từng phần tử
arr.forEach(function callback(currentValue, index, array) {
    // your iterator
}[, thisArg]);
Giải thích

+ callback: là hàm để thực hiện với mỗi phần tử của mảng, bao gồm 3 tham số:

+ currentValue: phần tử hiện tại đang được xử lý của array.

+ index: chỉ số của phần tử hiện tại đang được xử lý của array.

+ array: mảng hiện tại đang gọi hàm forEach.

thisArg: giá trị được sử dụng như là this, là tham chiếu tới đối tượng khi thực hiện hàm callback (Nếu thisArg không được nói tới thì mặc định là undefined)
//6.find:
cú pháp:
array.find(function(currentValue, index, arr),thisValue)
+ currentValue - giá trị của phần tử hiện tại.
+ index - chỉ số của phần tử hiện tại.
+ arr - mảng mà phần tử hiện tại thuộc về.
+ thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị "this:. Nếu không được truyền vào thì giá trị "this" là "undefined".
findIndex cũng được sử dụng để tìm kiếm phần tử thỏa mãn điều kiện trong mảng. 
thay vì trả về phần tử đó, findIndex sẽ trả về vị trí của phần tử 
  đầu tiên thỏa mãn trong mảng. Nếu không có phần tử nào thỏa mãn, findIndex sẽ 
  trả về giá trị là -1.
ví dụ:
        const example = [1, 2, 3, 4, 5] 
        example.findIndex((item) => item > 3)
        //Output: 3