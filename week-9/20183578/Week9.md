# TUẦN 9: TÌM HIỂU VỀ REACTJS
## I> Giới thiệu về ReactJs
###### - ReactJS là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook, ra mắt vào năm 2013 với mục đích để xây dựng giao diện người dùng.

## II> Các khái niệm cơ bản :

### - State và Props
###### `Props:`
###### -Viết tắt của properties,là 1 khái niệm trong ReactJS.
###### - Là 1 đối tượng,lưu trữ các giá trị của các attribute(thuộc tính) của 1 thẻ (Tag).
###### - Là cách để các component nhận được giá trị của thuộc tính truyền vào từ bên ngoài, và là cách các component giao tiếp với nhau.
#### Ví dụ:
```reactjs
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
}
```
##### name trong {props.name} là property, Welcome là component 
##### Mỗi property của Component sẽ tương ứng với 1 attribute của  thẻ, giá trị của attribute sẽ được truyền vào property của Component.
###### - Dùng props để truyền gửi dữ lliệu đến các component
###### - Mọi component được gọi là hàm javascript thuần khiết(pure function)
###### - props  tương ứng với tham số pure function javascript
###### - Không thể thay đổi dữ liệu của props
###### - Có thể thay đổi props bằng cách sử dụng setProps hay replaceProps nhưng không được React khuyến khích ( Props are Read-Only) - React tuân theo 1 rule đó là pure function: không làm thay đổi giá trị đầu vào và luôn trả về 1 kiểu định dạng. 
###### `State:`
###### Để 1 component hoạt động độc lập và tự update chính nó ta sẽ sử dụng State.
###### -State lưu trữ thông tin về component,nhưng là lưu trữ dữ liệu động của 1 component
###### -State là dữ liệu động , nó cho phép một component theo dõi thông tin thay đổi giữa các kết xuất (render) và làm cho nó có thể tương tác.
###### -State chỉ có thể được sử dụng ở trong một component sinh ra nó.
###### -Nếu dự đoán được một component cần quản lý state, thì nó nên được tạo ở trong một class component chứ không phải là một function component.

![image](https://user-images.githubusercontent.com/72637694/205034756-cd96bff2-0494-4019-a850-74270ec514ec.png)


### - Vòng đời của 1 component
[![](https://images.viblo.asia/0572a599-4aef-4c3e-80cf-5a05eae20a13.png)](https://longnv.name.vn/wp-content/uploads/2021/07/image-6.png)
###### `Mounting: Mounting là giai đoạn kết xuất JSX vào DOM, các hàm sau trong component sẽ tự chạy theo thứ tự (nếu có) : constructor(), render(), componentDidMount()`
###### - Constructor(props):
- Là hàm được chạy trước tiên khi khởi tạo component. 
- Đây là nơi dùng để gán các giá trị ban đầu cho state. 
- Hàm constructor() có props là tham số. 
- Trong constructor, phải dùng lệnh  super(props) để chạy constructor của React.
###### - Render:
- Trong component luôn được gọi khi mouting, trong hàm này cho hiển thị JSX vào DOM.
###### - componentDidMount() 
- Trong component – nếu có – cũng sẽ được chạy tự động 1 lần trong lifecycle, sau khi component được render xong

###### `Updating: Là giai đoạn component đang hoạt động & props/ state của nó bị thay đổi.  Khi đổi props/state, 3 hàm sau sẽ tuần tự chạy  nếu có khai báo trong component:  shouldComponentUpdate() , render() , componentDidUpdate()`
###### - shouldComponentUpdate():
- Là hàm chạy trước tiên khi có thay đổi props/state, code ở đây để cân nhắc xem có nên chạy 2 hàm phía sau hay không. Hàm này mặc định trả về true,  có thể trả về false nếu không muốn chạy 2 hàm phía sau (render và componentDidUpdate)
###### - render():
- hàm này đã được chạy khi mount, nhưng khi có thay đổi props/state, nó sẽ tự chạy lại , nhờ đó, các thay đổi sẽ tự động có kết quả trên trang web.
###### - componentDidUpdate():
- là hàm chạy  tự động sau cùng, sau hàm render khi có đổi props/state. 

###### `Unmounting: Là lúc mà component được xoá khỏi DOM, kết thúc lifecycle của component, lúc này hàm componentWillUnmount() sẽ tự động chạy nếu có định nghĩa trong component.`
###### - componentWillUnmount():
- Được gọi khi 1 component được loại bỏ khỏi DOM.
- Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa, ...
### - Cách xử lý các sự kiện
###### `Xử lý các sự kiện trong React:`
###### - Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange.
###### - Với JSX, bạn truyền một hàm để bắt sự kiện, thay vì một chuỗi như HTML thông thường.
###### - Chúng ta sử dụng các event listener để lắng nghe các lời gọi hàm sẽ thực thi khi có một sự kiện xảy ra.

### - JSX
###### - JSX là viết tắt của JavaScript XML, một cú pháp mở rộng cho phép lập trình viên viết HTML trong React một cách dễ dàng.
###### -React sử dụng JSX để tạo khuôn mẫu thay vì JavaScript thông thường. 
###### -Không bắt buộc phải sử dụng JSX nhưng phần mở rộng này sẽ giúp viết ứng dụng dễ dàng hơn. 

### Sử dụng JSX trong ReactJs
###### JSX cho phép lập trình viên viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức nào createElement()  và/hoặc appendChild(). 

##### VD:
###### Có JSX:
```reactjs
    const myelement = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement, document.getElementById('root'));
```
###### Không có JSX
```reactjs
    const myelement = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement, document.getElementById('root'));
```
###### `Biểu thức trong JSX`
###### - Với JSX, chúng ta có thể viết các biểu thức bên trong dấu ngoặc nhọn { }.
###### - Biểu thức có thể là một biến hoặc thuộc tính React hoặc bất kỳ biểu thức JavaScript hợp lệ nào khác. JSX sẽ thực thi biểu thức và trả về kết quả:
```reactjs
    const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```
###### `Chèn một khối HTML lớn`
###### - Để viết HTML trên nhiều dòng, đặt HTML bên trong dấu ngoặc đơn:
```reactjs
    const myElement = (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    );
```
###### `Thuộc tính JSX trong ReactJs`
###### -Ta có thể sử dụng các thuộc tính tùy chỉnh của riêng mình ngoài các thuộc tính HTML thông thường. Khi muốn thêm thuộc tính tùy chỉnh của JSX trong ReactJS, ta cần sử dụng tiền tố data-. Trong ví dụ sau, data-myattribute đã được thêm làm thuộc tính của phần tử p.
```reactjs
    import React from 'react';

class App extends React.Component {

   render() {

      return (

         <div>

            <h1>Header</h1>

            <h2>Content</h2>

            <p data-myattribute = "somevalue">This is the content!!!</p>

         </div>

      );

   }

}

export default App;
```

###### `Tạo kiểu JSX trong ReactJs`
###### -React khuyên các lập trình viên nên sử dụng các kiểu nội tuyến (inline styles). Khi muốn thiết lập các kiểu nội tuyến, bạn cần phải sử dụng cú pháp camelcase. React sẽ tự động thêm px sau giá trị số trên các phần tử cụ thể. Ví dụ sau đây sẽ cho  thấy cách để thêm nội tuyến myStyle vào phần tử h1.
```reactjs
    import React from 'react';

class App extends React.Component {

   render() {

      var myStyle = {

         fontSize: 100,

         color: '#FF0000'

      }

      return (

         <div>

            <h1 style = {myStyle}>Header</h1>

         </div>

      );

   }

}

export default App;
```

###### `Quy ước đặt tên JSX trong ReactJS`
###### -Các thẻ HTML luôn sử dụng tên thẻ viết thường, trong khi các thành phần React bắt đầu bằng chữ hoa. Lưu ý: Nên sử dụng className và htmlFor làm tên thuộc tính XML thay vì class và for.

