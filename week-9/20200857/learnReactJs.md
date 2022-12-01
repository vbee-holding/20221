# TUẦN 9: BÁO CÁO TÌM HIỂU VỀ REACTJS 
## I> Giới thiệu về ReactJs
### 1. Khái niệm:
###### -> ReactJS là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook, ra mắt vào năm 2013 với mục đích để xây dựng giao diện người dùng.
### 2. Tính năng:
###### -> JSX – JSX là phần mở rộng cú pháp JavaScript. Không nhất thiết phải sử dụng JSX trong phát triển React, nhưng nó được khuyến khích.
###### -> Các thành phần – React là tất cả về các thành phần. Bạn cần nghĩ mọi thứ như một thành phần. Điều này sẽ giúp bạn duy trì mã khi làm việc trên các dự án quy mô lớn hơn.
###### -> Luồng dữ liệu một chiều và Flux – React triển khai luồng dữ liệu một chiều giúp bạn dễ dàng suy luận về ứng dụng của mình. Flux là một mẫu giúp giữ dữ liệu của bạn không theo hướng.
###### -> Giấy phép – React được cấp phép theo Facebook Inc. Tài liệu được cấp phép theo CC BY 4.0.
### 3. Ưu điểm:
###### -> Sử dụng DOM ảo là một đối tượng JavaScript. Điều này sẽ cải thiện hiệu suất ứng dụng, vì DOM ảo JavaScript nhanh hơn DOM thông thường.
###### -> Có thể được sử dụng trên máy khách và máy chủ cũng như với các khuôn khổ khác.
###### -> Các mẫu thành phần và dữ liệu cải thiện khả năng đọc, giúp duy trì các ứng dụng lớn hơn.
### 4. Ứng dụng:
###### -> Nó được sử dụng rộng rãi để xây dựng các trang web SPA (Single Page Application) và các ứng dụng trên nền tảng di động.
## II> Các khái niệm cơ bản về Main Concepts
## 1. Trọng tâm:
### - State và Props
###### `State:`
###### -> State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components. Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút, nhập một số văn bản, nhấn một số phím, ...
###### -> Bất cứ khi nào một lớp kế thừa lớp React.Component, Constructor của nó sẽ tự động gán thuộc tính state cho lớp với giá trị ban đầu được gán bằng null. Chúng ta có thể thay đổi nó bằng cách ghi đè Constructor. Trong nhiều trường hợp chúng ta cần cập nhật state. Để làm điều đó, chúng ta phải sử dụng phương thức setState.
###### -> Khi state đã được thay đổi, react sẽ render lại component với những thay đổi đó. Bất cứ khi nào state được cập nhật trong component, tất cả các component con của nó cũng sẽ render/show lại với những thay đổi mới nhất.
###### `Props:`
###### -> Props là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element. Mọi component được coi là một hàm javascript thuần khiết (Pure Function).
###### -> Props là không thể thay đổi được. Vì trong các hàm thuần khiết, chúng ta không thể thay đổi dữ liệu của các tham số. Vì vậy, cũng không thể thay đổi dữ liệu của prop trong ReactJS.
###### -> Chúng ta không cần sử dụng this cho các hàm component cơ bản để truy cập props nhưng chúng ta phải sử dụng this để truy cập props this.props.<prop_name>.
### - Vòng đời của 1 component
![](https://images.viblo.asia/0572a599-4aef-4c3e-80cf-5a05eae20a13.png)
###### `Mounting`
###### -> Constructor(props):
- Được gọi khi một thể hiện của component được tạo ra.
- Có thể dùng để khởi tạo state cho component.
- Cũng có thể dùng để "bind" các hàm của component.
- Nếu phải cài đặt hàm này thì phải khai báo 1 tham số props cho nó và phải gọi super(props) đầu tiên.
- Nếu không làm gì thì không phải cài đặt hàm này.
###### -> ComponentWillMount():
- Được gọi trước khi render().
- Dùng để đăng ký các sự kiện toàn cục.
- Dựa vào các props để tính toán và set lại state
###### -> Render:
- Hàm này bắt buộc phải có trong component().
- Trả về 1 đối tượng JSX (có thể lồng các đối tượng với nhau nhưng phải có 1 đối tượng gói tất cả các đối tượng lại) để hiển thị hoặc null / false nếu không muốn hiển thị gì.
- Không được gọi setState() trong hàm này (cũng như trong các hàm mà hàm này gọi đến), bởi khi gọi setState() thì hàm render sẽ được gọi => gây ra lặp vô hạn.
###### -> componentDidMount():
- Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
- Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
- Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.
###### `Updating`
###### -> componentWillReceiveProps(nextProps):
- Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
- Phải gọi setState() nếu muốn render lại.
###### -> shouldComponentUpdate(nextProps, nextState):
- Được gọi trước render.
- Trả về true / false. Nếu false thì sẽ không render lại. Mặc định là true.
###### -> componentWillUpdate(nextProps, nextState):
- Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true.
- Không gọi setState() trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra lặp vô hạn.
- Hàm render sẽ được gọi ngay sau hàm này.
###### -> componentDidUpdate(prevProps, prevState):
- Được gọi ngay sau render() từ lần render thứ 2 trở đi.
- Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.
###### `Unmounting`
###### -> componentWillUnmount():
- Được gọi khi 1 component được loại bỏ khỏi DOM.
- Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa, ...
### - Cách xử lý các sự kiện
###### `Xử lý các sự kiện trong React:`
###### -> Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange.
###### -> Với JSX, bạn truyền một hàm để bắt sự kiện, thay vì một chuỗi như HTML thông thường.
###### -> Chúng ta sử dụng các event listener để lắng nghe các lời gọi hàm sẽ thực thi khi có một sự kiện xảy ra.
### - JSX
###### -> JSX là viết tắt của JavaScript XML.
###### -> JSX cho phép chúng ta viết HTML trong React.
###### -> JSX giúp viết và thêm HTML vào React dễ dàng hơn.
###### -> Không bắt buộc phải sử dụng JSX, nhưng JSX giúp viết các ứng dụng React dễ dàng hơn.
###### `VD`:
```reactjs
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    
    const myElement = <h1>I Love JSX!</h1>;
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
```
###### `Biểu thức trong JSX`
###### -> Với JSX, chúng ta có thể viết các biểu thức bên trong dấu ngoặc nhọn { }.
###### -> Biểu thức có thể là một biến hoặc thuộc tính React hoặc bất kỳ biểu thức JavaScript hợp lệ nào khác. JSX sẽ thực thi biểu thức và trả về kết quả:
```reactjs
    const myElement = <h1>React is {1 + 1} times better with JSX</h1>;
```
###### `Chèn một khối HTML lớn`
###### -> Để viết HTML trên nhiều dòng, hãy đặt HTML bên trong dấu ngoặc đơn:
```reactjs
    const myElement = (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    );
```
###### `Yếu tố cấp cao nhất`
###### -> Mã HTML phải được bọc trong MỘT phần tử cấp cao nhất.
###### -> Vì vậy, nếu  muốn viết hai đoạn văn, bạn phải đặt chúng bên trong một phần tử cha, giống như một phần tử div.
```reactjs
const myElement = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
);
```
###### `Câu lệnh if và nhúng biểu thức vào trong JSX`
###### -> để nhúng một biểu thức JavaScript bên trong JSX, JavaScript phải được bao bọc bởi dấu ngoặc nhọn {}.
###### -> React hỗ trợ các câu lệnh if, nhưng không hỗ trợ bên trong JSX. Để có thể sử dụng các câu lệnh có điều kiện trong JSX, bạn nên đặt các câu if lệnh bên ngoài JSX hoặc thay vào đó, bạn có thể sử dụng một biểu thức bậc ba.
```reactjs
    const x = 5;

    const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```
###### `Babel:` biên dịch JSX thành các lời gọi:  React.createElement()
###### -> Code JS theo chuẩn JSX:
```reactjs
const element = (
  <h1 className="greeting"> Hello world! </h1>
);
```
###### -> Babel biên dịch thành:
```reactjs
    const element = React.createElement('h1', {className: 'greeting'}, 'Hello world!'
);
```
