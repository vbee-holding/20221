## Họ và tên: Nguyễn Nhật Minh - 20183592

## Tìm hiểu về ReactJS

ReactJs là thư viện Javascript được sử dụng cho việc xây dựng các thành phần UI có khả năng tái sử dụng. Nó khuyến khích việc tạo ra các thành phần giao diện người dùng có thể tái sử dụng và khả năng hiển thị dữ liệu thay đổi theo thời gian. 
Những tính năng nổi bật của ReactJS: 
- JSX: viết tắt của JavaScript extension, nó là React extension , giúp cho việc thay đổi cây DOM dễ dàng hơn bằng HTML-style code đơn giản. Nó là một trong những tính năng tốt và dễ sử dụng.

- Components: Một trang web được xây dựng bằng ReactJS là một sự kết hợp nhiều component lại với nhau chứ không phải chung một Template như bình thường. Các component cũng như các hàm JavaScript bình thường, giúp tạo ra các code dễ dàng bằng cách tách các logic ra thành các đoạn code độc lập có thể tái sử dụng. Chúng ta có thể sử dụng component dưới dạng function hoặc class, ngoài ra các component còn có state và props.
- Virtual DOM: ReactJS tạo một thứ gọi là Virtual DOM (DOM ảo). Đúng như tên gọi, nó là một copy của DOM thật trên trang web đó. ReactJS dùng những DOM ảo đó để tìm đúng những DOM thật cần được cập nhật khi có bất kỳ sự kiện nào làm các thành phần bên trong nó thay đổi.
- Javascript Expressions: Biểu thức JS có thể sử dụng trong file .jsx hoặc .js bằng cách sử dụng cặp dấu ngoặc nhọn “{}”.

## 1. JSX = Javascript + XML

JSX là một phần mở rộng của JavaScript, nó là một template script mà bạn có thể sử dụng HTML và JavaScript cùng nhau.

Ưu điểm mà JSX mang lại:
 - Nhanh hơn nhờ việc thực hiện tối ưu hóa trong khi biên dịch mã thành Javascript.
 - An toàn và hầu hết các lỗi có thể bị bắt trong quá trình biên dịch.
 - Giúp người dùng viết template dễ dàng và nhanh hơn.

## 2. Component
Các component cho phép tách giao diện người dùng thành các thành phần độc lập, có thể tái sử dụng.
Vòng đời của 1 component: 
  ### Initialization

  Tương tự hàm khởi tạo (constructor) được gọi đến khi một thể hiện của component được tạo ra.
  ### Mounting

Là các hàm gắn kết, kết nối các component với nhau.

- componentWillMount(): Được gọi đến trước khi hiển thị component ra ngoài trình duyệt. Quá trình này diễn ra hết sức nhanh chóng, vì vậy không nên làm quá nhiều điều tại đây và hàm này được thực hiện một lần duy nhất (từ phiên bản 16.3 thì hàm này không được khuyến khích dùng và sẽ bị loại bỏ ở bản 17).

- Render(): Được gọi khi hiển thị component ra ngoài trình duyệt.
Sẽ return về nội dung đã viết, có thể là một component hoặc null hoặc là false (trong trường hợp không muốn render gì cả).

- componentDidMount(): Được gọi sau khi đã hiển thị component ra ngoài trình duyệt, và hàm này được thực hiện một lần duy nhất.
Hàm này được gọi để thông báo component đã tồn tại trên DOM, từ đó các thao tác trên DOM có thể thực hiện bình thường với component này.

### Updation

Là các vấn đề khi update component về props, về state.
- componentWillReceiveProps(nextProps): Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
Phải gọi setState() nếu muốn render lại.

- shouldComponentUpdate(nextProps, nextState): Được thực hiện ngay sau khi state và props thay đổi.
sẽ trả về kết quả true or false. Phương thức này sẽ xác định 1 component có được update hay không. Mặc định giá trị này là true. Nếu bạn không muốn component render lại sau khi update state hay props thì return giá trị thành false.

- componentWillUpdate(nextProps, nextState): Được gọi khi update state của component trước khi nó render lại.
 Không thể gọi this.setState trong componentWillUpdate
Hàm render sẽ được gọi ngay sau hàm này.

- componentDidUpdate(prevProps, prevState): Được gọi khi một component instance update, componentDidUpdate sẽ được gọi sau khi render HTML được loading xong.

###  Unmounting

- componentWillUnmount(): Được gọi trước khi một component bị remove khỏi một DOM.

## 3. Props
Props (properties) là data được truyền vào từ component cha và có thể truy cập ở các component con. Nó hoạt động như một object global hoặc như các biến có thể sử dụng bên trong component.

## 4. States
State là một object javascript tương tự như props, nó chứa dữ liệu được sử dụng để react render. Dữ liệu của state là một private object và được sử dụng bên trong các component.

## 5. Handle events
Việc bắt sự kiện của những element React gần giống với những element DOM. Có một số khác biệt về cú pháp như:

Những sự kiện của React được đặt tên theo dạng camelCase, thay vì lowercase.
Với JSX, có thể sử dụng function để bắt sự kiện thay vì phải truyền vào một chuỗi.

+ Cách 1: sử dụng hàm bind để truyền tham số


    import React, { Component } from 'react';
    import './App.css';
    import Product from './components/Product';
    
    class App extends Component {
    
        constructor(props) {
            super(props);
            this.onClickMe = this.onClickMe.bind(this, 'Ahihi')
        }
    
        onClick(text) {
            alert(text);
        }
        render() {
            return (
                <div>
                     <button type="button" className="btn btn-default" onClick={ this.onClickMe }>
                        Click Me !
                     </button>
                </div>
            );
        }
    }

+ Cách 2: Sử dụng arrow function trong Es6


    import React, { Component } from 'react';
    import './App.css';
    import Product from './components/Product';
    
    class App extends Component {
        onClick(text) {
            alert(text);
        }
        render() {
            return (
                <div>
                    <button type="button" className="btn btn-default" onClick={ () =>  this.onClickMe('Ahihi') }>
                    Click Me !
                    </button>
                </div>
            );
        }
    }