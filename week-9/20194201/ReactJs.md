# TUẦN 9: TÌM HIỂU VỀ REACTJS
## I. Giới Thiệu

### ReactJS là gì?

###### ReactJs là thư viện Javascript mã nguồn mở được phát triển bởi Facebook, ra mắt vào năm 2013, được sử dụng cho việc xây dựng các thành phần UI có khả năng tái sử dụng. Nó khuyến khích việc tạo ra các thành phần giao diện người dùng có thể tái sử dụng và khả năng hiển thị dữ liệu thay đổi theo thời gian. Bạn có thể xem bất kỳ 1 trang Web nào thì hầu hết chúng đều có những thành phần cơ bản như header, footer, sidebar, body. Việc chia trang web thành từng thành phần riêng rồi tái sử dụng có vẻ rất hợp lý.
### Những tính năng của ReactJS

###### ReactJS có các tính năng hết sức nổi bật bao gồm:
 * JSX
 * Components
 * Virtual DOM
 * Javascript Expressions
## II. Trọng tâm tìm hiểu

### 1. Props và State

###### Props và state là 2 kiểu dữ liệu trong React. State chỉ được thay đổi bên trong bản thân component. Props không bị kiểm soát bởi bản thân component.

#### 1.1. Props

###### Props là viết tắt của properties. Chúng là các giá trị đơn hoặc các đối tượng có chứa 1 tập hợp các giá trị được chuyển đến Component. Nó sử dụng quy ước đặt tên tương tự như các thuộc tính của thẻ HTML.

###### Props là cách để các component giao tiếp với nhau. Props được truyền từ component cha.

###### Props chỉ để đọc. Cho dù bạn khai báo component dưới dạng hàm hay class thì nó vẫn không bao giờ có thể sửa đổi props của chính nó.
```
   let text = 'React App';

   class Form extends React.Component {
       render () {
           return (
               <div>
                    <h3>
                       { this.props.text }
                    </h3>
                </div>
            );
        }
    }

   class App extends React.Component {
       render () {
           return (
               <div>
                   <h1>
                       Welcome to my app
                   </h1>
                   <Form text={ this.props.text } />
               </div>
           );
       }
   }

   ReactDOM.render(
       <App text={ text } />,
       document.getElementById('root')
   );

```
 * props được truyền vào trong App trong phương thức React.render()
 * App component truy xuất biến text thông qua lời gọi this.props.text
 * Form component hiển thị dữ liệu vào thẻ <h3>

#### 1.2. State

###### Khác với props là bất biến thì state có thể thay đổi. State được quản lý chỉ bởi duy nhất 1 component, nó cũng không thể truyền xuống cho component con.

```
class SearchBar extends React.Component {
    constructor(props) {
        super(p rops);
        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={ this.state.term }
                    onChange={(event) => this.onInputChange(event.target.value)} />
                <p>
                    { this.state.term }
                </p>
            </div>
        );
    }
    onInputChange(term) {
        this.setState({ term });
    }
}

ReactDOM.render(
    <SearchBar />,
    document.getElementById('root')
);

```

### 2. Vòng đời của một components(life cycle)

![](https://images.viblo.asia/1317854c-cf25-4e4e-bcc9-13de6a63e0e9.png)

###### Vòng đời của một component trải qua 4 giai đoạn: Initialization, Mounting, Update, và UnMounting

-**Initialization**: Đây là giai đoạn đầu tiên của vòng đời một component. Ở giai đoạn này component bắt đầu thiết lập các state và props của nó.

* **Mounting**: Trong giai đoạn này, component được hiển thị bên trong DOM. Giai đoạn này được thực hiện sau giai đoạn Initialization. Tại giai đoạn này, các component sẽ được render lần đầu tiên và chúng có những phương thức để xử lý trong giai đoạn này. Gồm các phương thức: 

 * **componentDidMount()**: Phương thức này được gọi sau khi component được thêm vào DOM.
 * **render()**: Phương thức này có ở mọi component, nó trả về HTML node.

-**Update**: Trong giai đoạn này, các DOM được người dùng tương tác và được cập nhật. Ví dụ người dùng click vào một button nào đó và làm state thay đổi dẫn đến component sẽ được re-render lại. Trong giai đoạn này có các phương thức chính như:

 * **shouldComponentUpdate()**: Phương thức này được gọi khi component được update.
 * **componentDidUpdate()**: Được gọi sau khi component đã được update

-**UnMounting**: Đây là giai đoạn cuối cùng của vòng đời một component, ở giai đoạn này component sẽ bị loại bỏ khỏi DOM. Trong giai đoạn này có phương thức:

 * **ComponentwillUnmount()**: Được gọi khi component bị loại bỏ khỏi DOM.

### 3. Cách xử lý sự kiện

###### Xử lý các sự kiện trong React rất giống với xử lý các sự kiện trên các phần tử DOM. Có một số khác biệt về cú pháp:
 * Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange
 ```
    <button onClick={changeName}>
       Change Name
    </button>
 ```
 * Với JSX, bạn truyền một hàm để bắt sự kiện, thay vì một chuỗi như HTML thông thường.
###### Một điểm khác biệt nữa là ta không thể sử dụng return false để chặn các hành động mặc định được (prevent default), trong React ta cần phải sử dụng preventDefault().

### 4. JSX (JSX = Javascript + XML)

###### JSX là 1 phần mở rộng cú pháp giống như XML cho EMCAScript. Nó được khuyến khích dùng trong React.

**Sử dụng JSX:**
* Cú pháp tương đối giống với HTML và có khả năng sử dụng biểu thức logic vào JSX
```
class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{ 1 + 1 }</h1>
         </div>
      );
   }
}
export default App;

```

* Định style sử dụng cú pháp camelCase và tự động thêm px sau giá trị là số của các phần tử.

```
class App extends React.Component {
   render() {
      let myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
            <h1 style = { myStyle }>Header</h1>
         </div>
      );
   }
}
export default App;
```
* Viết comment đặt trong cặp dấu { }
* Tên commponent bắt đầu bằng chữ hoa Uppercase, sử dụng className và htmlFor thay vì class và for.
* JSX đại diện cho các đối tượng: 2 ví dụ sau đây đều cho kết quả tương tự nhau

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```
const element = React.createElement(
  'h1',
  {
      className: 'greeting'
  },
  'Hello, world!'
);

```