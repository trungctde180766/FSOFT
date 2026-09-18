import json
import os

os.makedirs('data', exist_ok=True)

with open('data/comment_codes.json', 'r', encoding='utf-8') as f:
    comment_codes = json.load(f)

with open('data/roadmap.json', 'r', encoding='utf-8') as f:
    roadmap = json.load(f)

# Comprehensive Lesson Content Generator for all 56 Days
lessons = {}

# Pre-defined templates for core chapters and domains
def get_lesson_content(day_num, day_title, week_num, topics, tasks):
    # Determine domain by week and day
    english_start = ((day_num - 1) * 3) % len(comment_codes)
    day_english = [comment_codes[(english_start + i) % len(comment_codes)] for i in range(5)]

    # Detailed specialized content for each day
    content = {
        "day": day_num,
        "week": week_num,
        "title": day_title,
        "topics": topics,
        "tasks": tasks,
        "englishDrill": day_english
    }

    # Week 1: Days 1-7
    if day_num == 1:
        content["summary"] = "Nền tảng cú pháp Java: 49 Keywords, Identifiers, 8 Primitive types, Ranges và Literals."
        content["coreTheory"] = """
### 1. 49 Java Reserved Keywords & Identifiers
- Tất cả các từ khóa Java đều viết thường (lowercase).
- Các từ `true`, `false`, `null` là **Literals**, KHÔNG PHẢI keyword nhưng tuyệt đối không được dùng đặt tên biến!
- Các từ mượn C/C++ **KHÔNG CÓ** trong Java: `sizeof`, `unsigned`, `virtual`, `friend`, `overload`.
- **Quy tắc Identifier hợp lệ:** Bắt đầu bằng chữ cái, `_` hoặc `$`. Tuyệt đối không bắt đầu bằng số.

### 2. 8 Kiểu Nguyên Thủy (Primitive Types) & Ranges
- `byte`: 8-bit, khoảng giá trị từ **-128 đến 127** ($-2^7$ đến $2^7 - 1$).
- `short`: 16-bit, khoảng từ **-32,768 đến 32,767**.
- `int`: 32-bit (khoảng $\pm 2.14$ tỷ).
- `long`: 64-bit, cần hậu tố `L` hoặc `l` (ví dụ `100L`).
- `float`: 32-bit, bắt buộc hậu tố `F` hoặc `f` (ví dụ `3.14f`).
- `double`: 64-bit, kiểu số thực mặc định (ví dụ `3.14`).
- `char`: 16-bit **không dấu (unsigned)**, từ 0 đến 65,535 (`\\u0000` đến `\\uffff`).
- `boolean`: Chỉ có 2 giá trị `true` hoặc `false` (không phải 0 hoặc 1).
"""
        content["codeSnippet"] = """// Kiểm tra cú pháp hợp lệ
int _value = 10;
int $money = 500;
// int 1a = 5; // COMPILE ERROR: Bắt đầu bằng số!

float f1 = 3.14f; // OK
// float f2 = 3.14; // COMPILE ERROR: Mặc định là double, cần ép kiểu!

byte b1 = 127; // Max byte
// byte b2 = 128; // COMPILE ERROR: Tràn số byte!
byte b3 = (byte) 128; // OK: ép kiểu -> b3 = -128"""
        content["traps"] = [
            "float f = 3.14; bị Compile Error vì số thập phân mặc định là double.",
            "Số nguyên có số 0 ở đầu (ví dụ 012) là hệ bát phân (Octal), 012 = 10 trong hệ thập phân.",
            "char là kiểu số nguyên không dấu (0 đến 65535), không được gán số âm trực tiếp không ép kiểu."
        ]
        content["quickQuiz"] = [
            {"q": "Số nguyên `017` trong Java có giá trị thập phân là bao nhiêu?", "a": "15 (vì 1 * 8^1 + 7 * 8^0 = 15)"},
            {"q": "Khai báo `int[] a, b[];` thì biến `b` có kiểu dữ liệu là gì?", "a": "Mảng 2 chiều int[][]"}
        ]

    elif day_num == 2:
        content["summary"] = "Primitive vs Reference, Quy tắc khởi tạo biến (Default Values) và Ép kiểu (Casting)."
        content["coreTheory"] = """
### 1. Primitive vs Reference Types
- **Primitive:** Lưu trực tiếp giá trị nhị phân trong ô nhớ (Stack hoặc Heap tùy vị trí khai báo).
- **Reference:** Lưu địa chỉ tham chiếu trỏ đến đối tượng nằm trên vùng nhớ Heap. Mặc định là `null`.

### 2. Quy tắc Khởi tạo Biến & Default Values
- **Instance Variables (Biến đối tượng):** Tự động nhận giá trị mặc định khi `new` đối tượng (`0`, `0.0`, `false`, `null`).
- **Static Variables (Biến tĩnh):** Tự động nhận giá trị mặc định khi nạp class.
- **Local Variables (Biến cục bộ trong method):** **KHÔNG CÓ GIÁ TRỊ MẶC ĐỊNH!** Bắt buộc phải khởi tạo trước khi đọc, nếu không sẽ bị **Compile Error**.
- **Array Elements:** Toàn bộ phần tử trong mảng LUÔN LUÔN nhận giá trị mặc định, kể cả mảng được khai báo trong method!
"""
        content["codeSnippet"] = """public class ScopeDemo {
    int instVar; // Default = 0
    public void run() {
        int localVar; // KHÔNG có default!
        // System.out.println(localVar); // COMPILE ERROR!
        localVar = 5;
        System.out.println(localVar); // OK: 5
        
        int[] arr = new int[3];
        System.out.println(arr[0]); // In ra 0 (Hợp lệ!)
    }
}"""
        content["traps"] = [
            "Local variable uninitialized là bẫy câu hỏi số 1 trong SCJP.",
            "Compiler Java kiểm tra Definite Assignment tĩnh: if không có else thì biến trong if coi như chưa chắc được gán."
        ]
        content["quickQuiz"] = [
            {"q": "Phần tử mảng `boolean[] arr = new boolean[2];` có giá trị mặc định là gì?", "a": "false"},
            {"q": "Biến tham chiếu String chưa gán trong class có giá trị gì?", "a": "null"}
        ]

    elif day_num == 3:
        content["summary"] = "Declarations & Access Modifiers: public, protected, default (package-private), private."
        content["coreTheory"] = """
### 1. Ma trận 4 mức Access Modifiers
- `public`: Truy cập từ bất kỳ đâu trong toàn bộ ứng dụng.
- `protected`: Truy cập trong cùng class, cùng package, và **Class con (Subclass) ở khác package thông qua kế thừa**.
- `default (package-private)`: Chỉ truy cập được trong các class cùng package.
- `private`: Chỉ truy cập được bên trong chính class khai báo.

### 2. Bẫy kế thừa Protected ở khác package
- Class con ở package khác chỉ có thể truy cập thuộc tính `protected` thông qua biến tham chiếu của chính nó hoặc `super`.
- Nếu dùng tham chiếu của class cha (`Parent p = new Parent(); p.protectedVar`) sẽ bị **Compile Error**!
"""
        content["codeSnippet"] = """// File Parent.java (package p1)
package p1;
public class Parent {
    protected int x = 10;
}

// File Child.java (package p2)
package p2;
import p1.Parent;
public class Child extends Parent {
    void test() {
        System.out.println(this.x); // OK: truy cập qua kế thừa
        Parent p = new Parent();
        // System.out.println(p.x); // COMPILE ERROR: x is protected!
    }
}"""
        content["traps"] = [
            "Class con ở khác package gọi parentRef.protectedVar là lỗi biên dịch.",
            "Class cấp cao nhất (Top-level class) chỉ có thể là public hoặc default, không thể là private hay protected."
        ]
        content["quickQuiz"] = [
            {"q": "Top-level class có thể khai báo là `protected` không?", "a": "Không, chỉ có thể là public hoặc default."},
            {"q": "Modifier nào cho phép truy cập chỉ trong cùng package?", "a": "default (package-private)"}
        ]

    elif day_num == 4:
        content["summary"] = "Non-access Modifiers (static, final, abstract) và Quy tắc Interface."
        content["coreTheory"] = """
### 1. Non-access Modifiers
- `final`: Biến final không thể thay đổi giá trị; Method final không thể bị override; Class final không thể bị kế thừa (extends).
- `abstract`: Class abstract không thể tạo đối tượng trực tiếp; Method abstract không có thân hàm `{}`.
- Không thể kết hợp `final` với `abstract` (vì chúng mâu thuẫn hoàn toàn về mục đích kế thừa).

### 2. Quy tắc Interface
- Mọi biến trong Interface đều ngầm định là **`public static final`** (hằng số).
- Mọi phương thức trong Interface (Java 7 trở về trước) ngầm định là **`public abstract`**.
- Class implement interface override method bắt buộc phải ghi rõ `public` (vì không được thu hẹp quyền truy cập).
"""
        content["codeSnippet"] = """interface Flyable {
    int SPEED = 100; // Ngầm định: public static final int SPEED = 100;
    void fly();      // Ngầm định: public abstract void fly();
}

class Bird implements Flyable {
    // void fly() {} // COMPILE ERROR: Cannot reduce visibility, was public!
    public void fly() {
        System.out.println("Flying at " + SPEED);
    }
}"""
        content["traps"] = [
            "Quên từ khóa `public` khi implement phương thức của Interface.",
            "Khai báo `final abstract class` là lỗi biên dịch vì mâu thuẫn."
        ]
        content["quickQuiz"] = [
            {"q": "Biến trong interface có thể là `private` không?", "a": "Không, luôn là public static final."},
            {"q": "Tại sao không thể khai báo `final abstract` cho 1 method?", "a": "abstract bắt buộc phải override, còn final cấm override -> Mâu thuẫn!"}
        ]

    elif day_num == 5:
        content["summary"] = "Operators & Assignments: Precedence, Prefix/Postfix, Bitwise vs Short-Circuit."
        content["coreTheory"] = """
### 1. Toán tử Tăng/Giảm Prefix vs Postfix
- `++x`: Tăng x trước, sau đó trả về giá trị mới.
- `x++`: Trả về giá trị hiện tại của x trước, sau đó mới tăng x trong ô nhớ.
- Bẫy: `x = x++;` $\\rightarrow$ x không hề thay đổi giá trị vì phép gán ghi đè giá trị cũ!

### 2. Short-Circuit (&&, ||) vs Bitwise (&, |)
- `&&` và `||`: Nếu vế trái đã quyết định được kết quả (`false` với `&&`, `true` với `||`), JVM sẽ **bỏ qua không chạy vế phải**!
- `&` và `|`: Luôn luôn thực thi cả hai vế.
- Dịch bit: `>>` dịch phải giữ dấu, `>>>` dịch phải không dấu (luôn chèn bit 0 bên trái).
"""
        content["codeSnippet"] = """int a = 5;
boolean res = (a++ > 5) && (++a > 5);
// a++ > 5 là 5 > 5 (false). Sau đó a = 6.
// Do vế trái false, vế phải (++a > 5) KHÔNG ĐƯỢC CHẠY!
System.out.println(a); // In ra 6!

int x = 1;
x = x++;
System.out.println(x); // In ra 1!"""
        content["traps"] = [
            "Vế phải của toán tử short-circuit && hoặc || chứa phép tăng ++x thường không được chạy.",
            "Phép cộng byte: `byte c = a + b;` bị lỗi vì tự động nâng kiểu lên int."
        ]
        content["quickQuiz"] = [
            {"q": "Kết quả của `int x = 2; int y = x++ + ++x;` là bao nhiêu?", "a": "x = 4, y = 6 (2 + 4 = 6)"},
            {"q": "Toán tử `>>>` dịch bit gì sang bên trái?", "a": "Luôn luôn chèn bit 0 (unsigned shift)"}
        ]

    elif day_num == 6:
        content["summary"] = "Luyện đề tổng hợp Chapter 1-3: Phản xạ phát hiện lỗi biên dịch và tính toán biểu thức."
        content["coreTheory"] = """
### Chiến thuật làm đề TestKing Ch1-Ch3:
1. Đọc code từ trên xuống, kiểm tra chữ ký class, package, import.
2. Soát kỹ các Access Modifier: class con có thu hẹp quyền không? biến interface có bị gán lại không?
3. Tìm các biến cục bộ (local variable) xem có dòng nào dùng khi chưa khởi tạo không.
4. Lần vết từng bước (code tracing) với các toán tử `++`, `--`, `&&`, `||`.
5. Chú ý các kiểu dữ liệu ép kiểu ngầm định (numeric promotion).
"""
        content["codeSnippet"] = """public class Ch1to3Review {
    public static void main(String[] args) {
        byte b = 10;
        b += 5; // OK (tự ép kiểu)
        // b = b + 5; // COMPILE ERROR!
        System.out.println("b = " + b);
    }
}"""
        content["traps"] = [
            "Toán tử gán kết hợp (+=) tự động ép kiểu, còn phép toán thông thường (+) thì không.",
            "Indent/format code thụt thò cố tình đánh lừa mắt nhìn."
        ]
        content["quickQuiz"] = [
            {"q": "40 câu TestKing Ch1-3 mục tiêu đạt bao nhiêu điểm?", "a": "Tối thiểu 32/40 (80%) để qua bài."}
        ]

    elif day_num == 7:
        content["summary"] = "REVIEW DAY TUẦN 1: Thiết lập Top 20 lỗi sai và lấp toàn bộ lỗ hổng kiến thức Ch1-3."
        content["coreTheory"] = """
### Top 5 lỗi kinh điển Tuần 1 cần khắc cốt ghi tâm:
1. **Local variable không có default value:** Sử dụng khi chưa gán $\\rightarrow$ Compile Error.
2. **Numeric Promotion:** Phép toán `byte + byte` sinh ra kiểu `int`.
3. **Octal Literal:** Số có tiền tố `0` là hệ bát phân (ví dụ `08` là sai cú pháp).
4. **Interface variables:** Mặc định là `public static final`.
5. **Short-circuit evaluation:** Vế phải của `&&` không chạy khi vế trái `false`.
"""
        content["codeSnippet"] = """// Ôn tập lại 5 bẫy lớn nhất tuần 1
int x;
// System.out.println(x); // 1. Lỗi!
byte a = 1, b = 2;
// byte c = a + b; // 2. Lỗi!
byte c = (byte)(a + b); // Đúng"""
        content["traps"] = ["Không bao giờ học thuộc đáp án TestKing A/B/C/D, phải giải thích được tại sao sai."]
        content["quickQuiz"] = [
            {"q": "Đã điền đầy đủ bảng Access Modifiers Matrix vào Sổ Lỗi chưa?", "a": "Bắt buộc phải thuộc lòng 4 mức public, protected, default, private."}
        ]

    # Week 2: Days 8-14
    elif day_num == 8:
        content["summary"] = "Chapter 4: Flow Control (if, switch, for, while, do-while, break, continue)."
        content["coreTheory"] = """
### 1. if / else & Bẫy 'Dangling Else'
- Trong Java, `else` luôn luôn thuộc về `if` gần nhất phía trước nó nếu không có dấu ngoặc nhọn `{}`.

### 2. switch statement & Fall-through
- Kiểu dữ liệu hợp lệ: `byte`, `short`, `char`, `int`, `enum`, `String` (từ Java 7). **CẤM: `long`, `float`, `double`, `boolean`**.
- Nếu case không có `break`, JVM sẽ tiếp tục thực thi các case tiếp theo bất kể điều kiện (Fall-through).

### 3. Loops (for, while, do-while)
- `do-while` luôn thực thi thân vòng lặp ít nhất 1 lần trước khi kiểm tra điều kiện.
- `break` và `continue` có thể dùng kèm nhãn (Labeled break/continue) để thoát khỏi vòng lặp lồng nhau.
"""
        content["codeSnippet"] = """int num = 2;
switch (num) {
    case 1: System.out.print("1 ");
    case 2: System.out.print("2 ");
    case 3: System.out.print("3 ");
    default: System.out.print("D ");
}
// In ra: 2 3 D (Fall-through vì thiếu break!)"""
        content["traps"] = [
            "switch trên biến kiểu long hoặc float bị Compile Error.",
            "Vòng lặp `for(;;)` là vòng lặp vô tận hợp lệ."
        ]
        content["quickQuiz"] = [
            {"q": "switch có thể nhận kiểu double không?", "a": "Không, Compile Error ngay lập tức!"}
        ]

    elif day_num == 9:
        content["summary"] = "Chapter 4: Exceptions & Assertions (try, catch, finally, throw, throws, catch order)."
        content["coreTheory"] = """
### 1. Phân cấp Ngoại lệ (Exception Hierarchy)
- `Throwable` là lớp cha cao nhất, gồm 2 nhánh: `Error` (lỗi nghiêm trọng JVM, không nên bắt) và `Exception`.
- **Checked Exception:** Kế thừa từ `Exception` (trừ RuntimeException), bắt buộc phải xử lý bằng `try-catch` hoặc khai báo `throws` (ví dụ `IOException`, `SQLException`).
- **Unchecked Exception:** Kế thừa từ `RuntimeException` (ví dụ `NullPointerException`, `ArrayIndexOutOfBoundsException`), không bắt buộc khai báo.

### 2. Thứ tự Catch & Khối finally
- Catch class con trước, class cha sau. Nếu bắt class cha trước con $\\rightarrow$ Compile Error (Unreachable catch block).
- Khối `finally` **LUÔN LUÔN ĐƯỢC CHẠY** (ngay cả khi try/catch có lệnh `return`).
- Lệnh `return` trong `finally` sẽ ghi đè mọi return hoặc exception phía trước.
"""
        content["codeSnippet"] = """public static int testFinally() {
    try {
        return 10;
    } finally {
        return 20; // Ghi đè! Phương thức sẽ trả về 20!
    }
}"""
        content["traps"] = [
            "Khối finally chỉ không chạy khi gọi `System.exit(0)` hoặc JVM crash.",
            "Bắt `catch(Exception e)` trước `catch(IOException e)` bị lỗi biên dịch."
        ]
        content["quickQuiz"] = [
            {"q": "RuntimeException có bắt buộc phải dùng throws không?", "a": "Không, vì nó là Unchecked Exception."}
        ]

    elif day_num == 10:
        content["summary"] = "Chapter 5: OOP - Encapsulation, IS-A vs HAS-A, Constructors & super()/this()."
        content["coreTheory"] = """
### 1. Đóng gói (Encapsulation) & Mối quan hệ
- **Encapsulation:** Biến thuộc tính để `private`, cung cấp getter/setter `public`.
- **IS-A (Kế thừa):** Class con kế thừa class cha (`Car extends Vehicle`).
- **HAS-A (Chứa đựng):** Class chứa đối tượng khác (`Car has an Engine`).

### 2. Quy tắc Constructor
- Constructor có tên trùng với class và **KHÔNG CÓ KIỂU TRẢ VỀ** (kể cả `void` - nếu có `void` nó biến thành method bình thường!).
- Lời gọi `super()` hoặc `this()` **BẮT BUỘC phải nằm ở dòng lệnh đầu tiên** của constructor.
- Nếu bạn không viết constructor nào, compiler tự tạo default constructor không tham số. Nếu bạn đã tự viết bất kỳ constructor nào, compiler sẽ KHÔNG tự tạo default constructor nữa.
"""
        content["codeSnippet"] = """class Parent {
    Parent(String name) {} // Có constructor có tham số
}

class Child extends Parent {
    // Child() {} // COMPILE ERROR: Parent() không tồn tại!
    Child() {
        super("Default"); // Phải gọi tường minh dòng đầu tiên!
    }
}"""
        content["traps"] = [
            "Phương thức `public void MyClass() {}` là method thông thường, KHÔNG PHẢI constructor.",
            "Không thể gọi đồng thời cả `this()` và `super()` trong cùng 1 constructor."
        ]
        content["quickQuiz"] = [
            {"q": "Nếu class cha không có constructor không tham số, class con phải làm gì?", "a": "Bắt buộc phải gọi super(args) tường minh ở dòng đầu."}
        ]

    elif day_num == 11:
        content["summary"] = "Chapter 5: OOP - Polymorphism, Overloading vs Overriding."
        content["coreTheory"] = """
### 1. Overloading (Nạp chồng phương thức)
- Cùng class, cùng tên, **danh sách tham số BẮT BUỘC PHẢI KHÁC NHAU** (số lượng, kiểu dữ liệu, thứ tự).
- Kiểu trả về và access modifier có thể giống hoặc khác. Phân giải tại thời điểm biên dịch (Compile-time).

### 2. Overriding (Ghi đè phương thức)
- Quan hệ kế thừa cha-con, cùng tên, **cùng danh sách tham số**.
- **4 Quy tắc vàng:**
  1. Access modifier không được hẹp hơn cha (cha protected -> con protected hoặc public).
  2. Kiểu trả về phải giống hệt hoặc là kiểu con (Covariant Return Type).
  3. Không được ném Checked Exception mới hoặc rộng hơn cha.
  4. Phân giải tại thời điểm thực thi (Runtime Polymorphism).
"""
        content["codeSnippet"] = """class Animal {
    protected Number getAge() throws IOException { return 5; }
}
class Dog extends Animal {
    // Hợp lệ: public rộng hơn protected, Integer là con của Number
    public Integer getAge() { return 3; }
}"""
        content["traps"] = [
            "Thuộc tính (fields) và static methods KHÔNG có tính đa hình, chỉ bị che khuất (hiding).",
            "Con ném exception rộng hơn cha bị lỗi biên dịch."
        ]
        content["quickQuiz"] = [
            {"q": "Phương thức cha là public thì phương thức con override có thể để protected không?", "a": "Không, vì protected hẹp hơn public."}
        ]

    elif day_num == 12:
        content["summary"] = "Chapter 5: OOP Nâng Cao - Static Method Hiding, Upcasting & Downcasting."
        content["coreTheory"] = """
### 1. Static Method Hiding
- Phương thức `static` không thể bị override, chỉ bị ẩn (Hidden).
- Lời gọi static method thông qua biến tham chiếu phụ thuộc vào **Reference Type lúc compile** chứ không phải đối tượng runtime!

### 2. Ép kiểu Đối tượng (Casting)
- **Upcasting (Ép kiểu lên):** Luôn an toàn, tự động ngầm định (`Animal a = new Dog();`).
- **Downcasting (Ép kiểu xuống):** Phải ép kiểu tường minh (`Dog d = (Dog) a;`). Nếu object thực tế không phải kiểu con, sẽ ném **`ClassCastException`** lúc chạy.
"""
        content["codeSnippet"] = """Animal a = new Animal();
// Dog d = (Dog) a; // Biên dịch được nhưng ném ClassCastException lúc runtime!

Animal a2 = new Dog();
if (a2 instanceof Dog) {
    Dog d2 = (Dog) a2; // An toàn tuyệt đối!
}"""
        content["traps"] = [
            "instanceof trả về false nếu đối tượng kiểm tra là null.",
            "Gọi static method qua object null không bị NullPointerException vì compiler chuyển thành gọi qua Class."
        ]
        content["quickQuiz"] = [
            {"q": "Biểu thức `null instanceof Object` trả về gì?", "a": "false"}
        ]

    elif day_num == 13:
        content["summary"] = "Tổng ôn Chapter 1-5: Rà soát nền tảng vững chắc trước khi sang String & Collections."
        content["coreTheory"] = """
### Danh mục kiểm tra kiến thức Ch1-5:
- [x] Ch1: 49 keywords, primitive bit ranges, literal rules, default values.
- [x] Ch2: 4 access modifiers, abstract/final class, interface constants.
- [x] Ch3: ++/-- prefix postfix, short-circuit &&/||, numeric promotion.
- [x] Ch4: switch types, fall-through, try-catch-finally execution order.
- [x] Ch5: Encapsulation, Overloading vs Overriding 4 quy tắc, constructors super()/this().
"""
        content["codeSnippet"] = """// Đề luyện 50 câu TestKing tổng hợp"""
        content["traps"] = ["Ghi chú lại ít nhất 10 câu sai vào Error Book."]
        content["quickQuiz"] = [{"q": "Mục tiêu điểm số TestKing Ch1-5 là bao nhiêu?", "a": "Trên 85% đúng."}]

    elif day_num == 14:
        content["summary"] = "MINI MOCK TEST #1 (20 câu Java Core Ch1-5). Đánh giá mốc 2 tuần đầu."
        content["coreTheory"] = """
### Thang điểm đánh giá Mock #1:
- **< 12 / 20 câu:** Cần ôn lại ngay Ch1-5, đặc biệt là Access control và Overriding.
- **12 - 15 / 20 câu:** Nền tảng ổn, cần cẩn thận hơn với các bẫy nhỏ.
- **16 - 17 / 20 câu:** Khá, tư duy đọc code tốt.
- **18+ / 20 câu:** Xuất sắc, sẵn sàng sang tuần 3!
"""
        content["codeSnippet"] = """// Mở Tab Quiz trên Web App để thi thử Mock Exam 20 câu"""
        content["traps"] = ["Không được dùng Google hay AI khi làm bài thi thử."]
        content["quickQuiz"] = [{"q": "Làm bài thi thử trong bao nhiêu phút?", "a": "Bấm giờ đúng 30 phút."}]

    # Week 3: Days 15-21 (Ch6-Ch9)
    elif day_num == 15:
        content["summary"] = "Chapter 6: String, String Constant Pool, Immutability & StringBuffer/StringBuilder."
        content["coreTheory"] = """
### 1. Tính Bất Biến (Immutability) & String Constant Pool
- Đối tượng `String` là **bất biến (immutable)**. Mọi thao tác nối chuỗi, substring đều tạo ra một đối tượng String mới.
- Chuỗi literal `String s = "abc";` được lưu trong **String Constant Pool** và tái sử dụng.
- `String s = new String("abc");` tạo một đối tượng mới tinh trên **Heap** (không dùng chung địa chỉ pool).
- `==` so sánh địa chỉ tham chiếu vùng nhớ, `.equals()` so sánh nội dung ký tự.

### 2. StringBuilder vs StringBuffer
- Cả hai đều là chuỗi **có thể biến đổi (mutable)**.
- `StringBuffer`: Các method có từ khóa `synchronized` $\\rightarrow$ **Thread-safe**, nhưng tốc độ chậm hơn.
- `StringBuilder`: Không đồng bộ $\\rightarrow$ **Non-thread-safe**, tốc độ xử lý nhanh hơn, khuyến khích dùng trong môi trường đơn luồng.
"""
        content["codeSnippet"] = """String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");

System.out.println(s1 == s2);      // true (cùng pool)
System.out.println(s1 == s3);      // false (khác địa chỉ heap)
System.out.println(s1.equals(s3)); // true (cùng nội dung)"""
        content["traps"] = [
            "Gọi `s.concat(\"def\")` mà không gán lại `s = s.concat(...)` thì s ban đầu giữ nguyên.",
            "Nối hằng chuỗi `\"Ja\" + \"va\"` được compiler tối ưu lúc compile trỏ vào pool."
        ]
        content["quickQuiz"] = [
            {"q": "`String s = new String(\"hello\");` tạo mấy object?", "a": "1 hoặc 2 object (1 trên heap, 1 trong pool nếu pool chưa có)."}
        ]

    elif day_num == 16:
        content["summary"] = "Chapter 6: Wrapper Classes, Autoboxing/Unboxing & Integer Cache (-128..127)."
        content["coreTheory"] = """
### 1. Wrapper Classes & Autoboxing
- Mỗi kiểu nguyên thủy có một Wrapper tương ứng: `Integer`, `Double`, `Boolean`, `Character`...
- **Autoboxing:** Tự động chuyển primitive sang Wrapper (`Integer x = 10;`).
- **Unboxing:** Tự động chuyển Wrapper sang primitive (`int y = x;`).

### 2. Bẫy Integer Cache (-128 đến 127)
- Java lưu sẵn bộ đệm các đối tượng Integer từ **-128 đến 127**.
- Khi autoboxing trong khoảng này, Java dùng lại cùng 1 object trong cache $\\rightarrow$ so sánh `==` ra `true`.
- Ngoài khoảng này (ví dụ 128 trở lên), Java tạo object mới trên Heap $\\rightarrow$ so sánh `==` ra `false`!
"""
        content["codeSnippet"] = """Integer a = 127, b = 127;
System.out.println(a == b); // true (nằm trong cache)

Integer c = 128, d = 128;
System.out.println(c == d); // false (ngoài cache, tạo 2 object khác nhau!)
System.out.println(c.equals(d)); // true (luôn so sánh bằng equals)"""
        content["traps"] = [
            "So sánh `==` giữa các Wrapper ngoài khoảng -128..127 trả về false.",
            "Unboxing đối tượng Wrapper mang giá trị null sẽ ném `NullPointerException`."
        ]
        content["quickQuiz"] = [
            {"q": "Tại sao luôn nên dùng `.equals()` khi so sánh Integer?", "a": "Để tránh bẫy Integer Cache khi giá trị vượt quá 127."}
        ]

    elif day_num == 17:
        content["summary"] = "Chapter 7: Collections Framework (Phần 1) - List, Set Hierarchy & Ma trận so sánh."
        content["coreTheory"] = """
### 1. Phân cấp Collection Interface
- `Collection` (interface gốc) $\\rightarrow$ `List`, `Set`, `Queue`.
- **List:** Cho phép trùng lặp (Duplicate: YES). Có thứ tự theo chỉ mục chèn (Ordered: YES).
  - `ArrayList`: Mảng động, truy xuất $O(1)$, chèn/xóa ở giữa chậm $O(N)$.
  - `LinkedList`: Danh sách liên kết kép, chèn/xóa đầu/cuối nhanh, truy xuất ngẫu nhiên $O(N)$.
  - `Vector`: Cổ điển, Thread-safe (synchronized), hiệu năng chậm.
- **Set:** KHÔNG cho phép trùng lặp (Duplicate: NO).
  - `HashSet`: Dựa trên HashMap, không bảo đảm thứ tự, $O(1)$.
  - `LinkedHashSet`: Duy trì thứ tự chèn phần tử.
  - `TreeSet`: Tự động sắp xếp (Sorted: YES). Phần tử bắt buộc phải implement `Comparable` (nếu không sẽ ném ClassCastException lúc runtime).
"""
        content["codeSnippet"] = """List<String> list = new ArrayList<>();
list.add("A"); list.add("A"); // Hợp lệ (cho phép trùng)

Set<String> set = new HashSet<>();
set.add("A"); set.add("A"); // set.size() vẫn bằng 1 (loại trùng)"""
        content["traps"] = [
            "TreeSet thêm object không implement Comparable bị ClassCastException lúc chạy.",
            "Map KHÔNG KẾ THỪA từ Collection interface."
        ]
        content["quickQuiz"] = [
            {"q": "Set nào vừa loại bỏ trùng lặp vừa bảo toàn thứ tự chèn?", "a": "LinkedHashSet"}
        ]

    elif day_num == 18:
        content["summary"] = "Chapter 7: Collections (Phần 2) - Map & Hợp đồng equals() / hashCode() & Garbage Collection."
        content["coreTheory"] = """
### 1. Map Interface (Key-Value)
- `HashMap`: Cho phép 1 key `null` và nhiều value `null`. Non-thread-safe.
- `Hashtable`: Cổ điển, synchronized, **KHÔNG CHO PHÉP bất kỳ key hoặc value null nào** (ném NullPointerException).
- `TreeMap`: Key được sắp xếp có thứ tự, key không được null.

### 2. Hợp đồng equals() và hashCode()
- Nếu `o1.equals(o2) == true` $\\rightarrow$ Bắt buộc `o1.hashCode() == o2.hashCode()`.
- Nếu override `equals()`, **BẮT BUỘC phải override `hashCode()`**.
- Nếu quên override hashCode: HashMap không thể tìm thấy phần tử khi gọi `get(key)` vì mã hash bị lệch bucket!

### 3. Garbage Collection (GC)
- Đối tượng đủ điều kiện bị dọn rác khi không còn bất kỳ biến tham chiếu trực tiếp/gián tiếp nào trỏ tới nó (Unreachable).
- `System.gc()` chỉ là lời gợi ý cho JVM, không đảm bảo GC sẽ chạy ngay.
"""
        content["codeSnippet"] = """Map<String, Integer> map = new HashMap<>();
map.put(null, 100); // Hợp lệ trong HashMap!

Map<String, Integer> table = new Hashtable<>();
// table.put(null, 100); // RUNTIME ERROR: NullPointerException!"""
        content["traps"] = [
            "Hashtable không cho phép null key lẫn null value.",
            "Quên hashCode() làm mất dữ liệu trong HashMap/HashSet."
        ]
        content["quickQuiz"] = [
            {"q": "Hai object có hashCode bằng nhau thì equals có chắc bằng nhau không?", "a": "Không (đây là hiện tượng đụng độ hash - Collision)."}
        ]

    elif day_num == 19:
        content["summary"] = "Chapter 8: Inner Classes - Member Inner, Method-Local, Anonymous & Static Nested."
        content["coreTheory"] = """
### 4 Loại Inner Class trong Java:
1. **Regular Member Inner Class:** Nằm trong class ngoài, truy cập được mọi private của class ngoài. Khởi tạo: `new Outer().new Inner()`.
2. **Method-Local Inner Class:** Nằm trong phương thức. Chỉ truy cập được biến local nếu biến đó là `final` (hoặc effectively final).
3. **Anonymous Inner Class:** Lớp nặc danh không tên, dùng để override nhanh method của class/interface (thường gặp trong Event Listener).
4. **Static Nested Class:** Lớp lồng có từ khóa `static`, không giữ tham chiếu đến instance của outer class. Khởi tạo: `new Outer.StaticNested()`.
"""
        content["codeSnippet"] = """class Outer {
    private int x = 10;
    class Inner {
        void show() { System.out.println(x); } // Truy cập private x
    }
}

Outer.Inner in = new Outer().new Inner();
in.show(); // In ra 10"""
        content["traps"] = [
            "Method-local inner class truy cập biến local bị thay đổi giá trị sẽ bị Compile Error.",
            "Regular inner class không thể khai báo biến static trừ khi là static final hằng số."
        ]
        content["quickQuiz"] = [
            {"q": "Cú pháp tạo Member Inner Class từ bên ngoài là gì?", "a": "new Outer().new Inner()"}
        ]

    elif day_num == 20:
        content["summary"] = "Chapter 9: Threads & Concurrency - Thread vs Runnable, Lifecycle, Synchronized & Locks."
        content["coreTheory"] = """
### 1. Khởi tạo Thread: start() vs run()
- `t.start()`: Cấp phát Stack mới, tạo luồng thực thi độc lập của hệ điều hành, rồi gọi `run()` bất đồng bộ.
- `t.run()`: Chỉ là lời gọi phương thức thông thường, chạy đồng bộ tuần tự trên chính thread hiện tại (main), KHÔNG tạo luồng mới!

### 2. Đồng bộ hóa (Synchronization) & Lock/Monitor
- Từ khóa `synchronized` dùng để khóa tài nguyên chia sẻ, ngăn ngừa Data Race / Race Condition.
- `wait()`, `notify()`, `notifyAll()` thuộc class `Object`, **bắt buộc phải gọi trong khối synchronized** đang giữ khóa của chính object đó.
- `Thread.sleep()` tạm dừng nhưng **GIỮ NGUYÊN KHÓA**.
- `object.wait()` tạm dừng và **GIẢI PHÓNG KHÓA**.
"""
        content["codeSnippet"] = """Thread t = new Thread(() -> {
    System.out.println(Thread.currentThread().getName());
});
t.run();   // In ra: main (chạy tuần tự)
t.start(); // In ra: Thread-0 (chạy bất đồng bộ trên luồng mới)"""
        content["traps"] = [
            "Gọi wait() ngoài khối synchronized ném IllegalMonitorStateException.",
            "Sleep giữ khóa, Wait nhả khóa."
        ]
        content["quickQuiz"] = [
            {"q": "Phương thức wait() thuộc class nào?", "a": "java.lang.Object"}
        ]

    elif day_num == 21:
        content["summary"] = "JAVA CORE MOCK EXAM #1 (Tổng hợp toàn diện 9 chương Java Core Ch1-Ch9)."
        content["coreTheory"] = """
### Rà soát 9 chương Java Core:
1. Ch1: Cú pháp, Kiểu nguyên thủy, Ranges, Mảng.
2. Ch2: Modifiers, Class/Interface declarations.
3. Ch3: Operators, Precedence, Bitwise, Casting.
4. Ch4: Flow control, Switch, Exception hierarchy.
5. Ch5: OOP, Encapsulation, Overloading/Overriding, Constructors.
6. Ch6: String Pool, Wrappers, Integer Cache.
7. Ch7: Collections (List/Set/Map), equals/hashCode contract.
8. Ch8: Inner classes.
9. Ch9: Threads, Synchronization, wait/notify.
"""
        content["codeSnippet"] = """// Thi thử 30 câu Java Core trên Web App"""
        content["traps"] = ["Ghi chú tỷ lệ đúng của từng chương để phát hiện chương nào còn yếu."]
        content["quickQuiz"] = [{"q": "Chương nào bạn làm sai nhiều nhất?", "a": "Mở tab Flashcards lọc chương đó để cày lại."}]

    # Week 4: Days 22-28 (SQL + JSP/Servlet)
    elif day_num == 22:
        content["summary"] = "SQL Căn Bản: SELECT, WHERE, Operators, DDL vs DML (DELETE vs TRUNCATE)."
        content["coreTheory"] = """
### 1. DDL (Data Definition) vs DML (Data Manipulation)
- **DELETE (DML):** Xóa từng dòng dữ liệu, có thể kèm điều kiện `WHERE`. Ghi log từng dòng, có thể `ROLLBACK`.
- **TRUNCATE (DDL):** Xóa toàn bộ bảng bằng cách giải phóng data pages, reset Identity về 1. Cực nhanh, không dùng được `WHERE`.
- **DROP (DDL):** Xóa hoàn toàn bảng và định nghĩa cấu trúc bảng khỏi database.

### 2. Các toán tử lọc điều kiện trong WHERE
- `LIKE '%abc%'` (ký tự đại diện `%` là chuỗi bất kỳ, `_` là 1 ký tự).
- `BETWEEN a AND b` (bao gồm cả giá trị a và b).
- `IN (val1, val2, ...)`
- `IS NULL` / `IS NOT NULL` (không dùng `= NULL`).
"""
        content["codeSnippet"] = """-- Xóa có điều kiện
DELETE FROM Employees WHERE salary < 500;

-- Xóa sạch dữ liệu bảng cực nhanh
TRUNCATE TABLE TempLogs;"""
        content["traps"] = [
            "Không bao giờ dùng `= NULL` trong SQL, bắt buộc dùng `IS NULL`.",
            "TRUNCATE không thể chạy nếu bảng đang bị Foreign Key tham chiếu."
        ]
        content["quickQuiz"] = [
            {"q": "DELETE khác TRUNCATE ở điểm nào?", "a": "DELETE xóa từng dòng có WHERE và rollback được; TRUNCATE xóa sạch cực nhanh không có WHERE."}
        ]

    elif day_num == 23:
        content["summary"] = "SQL Nâng Cao: Hàm Tổng Hợp (COUNT, SUM, AVG) & GROUP BY / HAVING."
        content["coreTheory"] = """
### 1. Hàm tổng hợp (Aggregate Functions) & NULL
- `COUNT(*)`: Đếm tất cả các dòng, bất kể cột nào mang giá trị `NULL`.
- `COUNT(column)`: Chỉ đếm các dòng mà cột đó có giá trị khác `NULL`.
- `SUM`, `AVG`, `MIN`, `MAX`: Bỏ qua các giá trị `NULL`.

### 2. WHERE vs HAVING (Khác biệt cốt lõi)
- `WHERE`: Lọc dữ liệu từng dòng đơn lẻ **TRƯỚC KHI** gom nhóm. Không thể dùng hàm tổng hợp trong WHERE!
- `HAVING`: Lọc các nhóm dữ liệu **SAU KHI** đã gom nhóm bởi `GROUP BY`. Chuyên dùng với hàm tổng hợp.
- **Thứ tự thực thi câu lệnh SQL:**
  `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY`
"""
        content["codeSnippet"] = """SELECT department_id, COUNT(*), AVG(salary)
FROM Employees
WHERE status = 'ACTIVE'      -- Lọc trước khi gom nhóm
GROUP BY department_id
HAVING COUNT(*) >= 5         -- Lọc nhóm sau khi gom nhóm
ORDER BY AVG(salary) DESC;"""
        content["traps"] = [
            "Viết hàm tổng hợp trong WHERE (ví dụ WHERE COUNT(*) > 5) là lỗi cú pháp SQL kinh điển.",
            "Các cột trong SELECT không phải hàm tổng hợp thì bắt buộc phải có mặt trong GROUP BY."
        ]
        content["quickQuiz"] = [
            {"q": "Mệnh đề nào lọc trước khi gom nhóm?", "a": "WHERE"}
        ]

    elif day_num == 24:
        content["summary"] = "SQL JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN, Subqueries & Phỏng vấn Audit."
        content["coreTheory"] = """
### 1. Phân biệt các loại JOIN
- **INNER JOIN:** Chỉ trả về các bản ghi khớp điều kiện ở cả hai bảng.
- **LEFT JOIN (LEFT OUTER JOIN):** Trả về toàn bộ bảng bên trái. Bảng bên phải không khớp sẽ mang giá trị `NULL`.
- **RIGHT JOIN:** Trả về toàn bộ bảng bên phải.
- **FULL OUTER JOIN:** Kết hợp cả LEFT và RIGHT.

### 2. Subquery (Truy vấn con)
- Single-row subquery: Dùng toán tử so sánh thông thường (`=, >, <`).
- Multi-row subquery: Dùng toán tử `IN, ANY, ALL, EXISTS`.
"""
        content["codeSnippet"] = """-- Tìm khách hàng CHƯA TỪNG mua hàng:
SELECT c.id, c.name
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customer_id
WHERE o.id IS NULL;"""
        content["traps"] = [
            "Tìm bản ghi chưa liên kết bắt buộc dùng LEFT JOIN kèm điều kiện WHERE right_table.id IS NULL.",
            "UNION loại bỏ trùng lặp, UNION ALL giữ nguyên bản ghi trùng (nhanh hơn)."
        ]
        content["quickQuiz"] = [
            {"q": "Khi bảng bên phải không có dữ liệu khớp trong LEFT JOIN, cột của nó nhận giá trị gì?", "a": "NULL"}
        ]

    elif day_num == 25:
        content["summary"] = "JavaWeb: Servlet Architecture, Vòng đời (Lifecycle) init/service/destroy."
        content["coreTheory"] = """
### 1. Kiến trúc Servlet & Web Container (Tomcat)
- Trình duyệt gửi HTTP Request $\\rightarrow$ Tomcat tạo thread mới $\\rightarrow$ Gọi Servlet $\\rightarrow$ Trả về HTTP Response.

### 2. Vòng đời Servlet (Servlet Lifecycle)
1. `init(ServletConfig config)`: Được gọi **DUY NHẤT 1 LẦN** khi Servlet được nạp vào bộ nhớ.
2. `service(HttpServletRequest req, HttpServletResponse resp)`: Được gọi **MỖI KHI CÓ REQUEST ĐẾN**. Điều phối sang `doGet()`, `doPost()`...
3. `destroy()`: Được gọi **DUY NHẤT 1 LẦN** khi server shutdown hoặc servlet bị undeploy.
- **Lưu ý:** Container chỉ tạo duy nhất **1 instance (Singleton-like)** cho mỗi Servlet class, các request được xử lý trên các Thread khác nhau!
"""
        content["codeSnippet"] = """@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    public void init() { /* Chạy 1 lần duy nhất */ }
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.getWriter().println("Hello World");
    }
    public void destroy() { /* Chạy 1 lần duy nhất */ }
}"""
        content["traps"] = [
            "Biến instance trong Servlet không an toàn đa luồng (Non-thread-safe) vì nhiều thread dùng chung 1 servlet instance.",
            "doGet xử lý request GET, doPost xử lý request POST."
        ]
        content["quickQuiz"] = [
            {"q": "Phương thức init() chạy mấy lần?", "a": "Duy nhất 1 lần."}
        ]

    elif day_num == 26:
        content["summary"] = "JavaWeb: 4 Scopes (Phạm vi lưu trữ), Session Tracking (HttpSession vs Cookies)."
        content["coreTheory"] = """
### 1. 4 Phạm Vi Lưu Trữ (Scopes) trong JavaWeb
1. **Page Scope:** Chỉ tồn tại trong chính trang JSP hiện tại.
2. **Request Scope (`HttpServletRequest`):** Tồn tại trong 1 lượt request-response (giữ nguyên khi dùng Forward).
3. **Session Scope (`HttpSession`):** Tồn tại theo phiên làm việc của từng người dùng cụ thể.
4. **Application Scope (`ServletContext`):** Tồn tại trong toàn bộ ứng dụng, mọi người dùng đều dùng chung.

### 2. Session Tracking: Cookies vs HttpSession
- **Cookie:** Lưu ở phía Trình duyệt (Client), dung lượng nhỏ (<4KB), kém bảo mật hơn.
- **Session:** Lưu ở phía Server, an toàn hơn. Server gửi cookie `JSESSIONID` về client để nhận diện phiên.
"""
        content["codeSnippet"] = """// Lưu dữ liệu vào session
HttpSession session = request.getSession();
session.setAttribute("currentUser", user);

// Đọc dữ liệu từ session
User user = (User) session.getAttribute("currentUser");"""
        content["traps"] = [
            "Cookie lưu ở Client, Session lưu ở Server.",
            "Tắt cookie trên trình duyệt thì session phải dựa vào URL Rewriting để truyền JSESSIONID."
        ]
        content["quickQuiz"] = [
            {"q": "Scope nào dùng chung cho tất cả người dùng trong toàn bộ ứng dụng?", "a": "Application Scope (ServletContext)"}
        ]

    elif day_num == 27:
        content["summary"] = "JavaWeb: Forward vs Redirect, JSP, JSTL, EL & Servlet Filter."
        content["coreTheory"] = """
### 1. Forward vs Redirect (Câu hỏi Audit số 1)
- **Forward (`RequestDispatcher.forward`):**
  - Xảy ra ở phía **Server**.
  - URL trên trình duyệt **KHÔNG ĐỔI**.
  - Chỉ có 1 lượt request-response.
  - Đối tượng `request` được **giữ nguyên** (request attributes không bị mất).
- **Redirect (`response.sendRedirect`):**
  - Server gửi mã HTTP 302 yêu cầu **Trình duyệt tạo request MỚI**.
  - URL trên thanh địa chỉ **BỊ THAY ĐỔI**.
  - Mất 2 lượt request-response.
  - Dữ liệu `request` cũ bị hủy bỏ hoàn toàn.

### 2. Servlet Filter
- Chặn và lọc request trước khi tới Servlet (kiểm tra đăng nhập, mã hóa UTF-8).
- Bắt buộc phải gọi `chain.doFilter(req, resp)` để request tiếp tục đi tới đích!
"""
        content["codeSnippet"] = """// Forward (Server-side)
request.getRequestDispatcher("home.jsp").forward(request, response);

// Redirect (Client-side)
response.sendRedirect("login.jsp");"""
        content["traps"] = [
            "Quên chain.doFilter trong Filter sẽ làm request bị nghẽn lại vĩnh viễn.",
            "Dùng sendRedirect sẽ làm mất toàn bộ request.setAttribute đã gắn."
        ]
        content["quickQuiz"] = [
            {"q": "Phương thức nào giữ nguyên dữ liệu request.setAttribute?", "a": "RequestDispatcher.forward()"}
        ]

    elif day_num == 28:
        content["summary"] = "FULL MOCK ENTRY TEST #1 (Format chuẩn 25 câu: Java Core + SQL + JavaWeb)."
        content["coreTheory"] = """
### Cấu trúc đề thi Entry Test:
- 15 câu Java Core (Ch1-Ch9).
- 5 câu SQL (JOIN, GROUP BY, HAVING, DDL/DML).
- 5 câu JavaWeb (Servlet lifecycle, scopes, forward vs redirect).
- Thời gian làm bài: 40 phút nghiêm ngặt.
"""
        content["codeSnippet"] = """// Bắt đầu thi trên tab Quiz (Mock Exam Mode)"""
        content["traps"] = ["Phân bổ thời gian: tối đa 90 giây cho mỗi câu hỏi."]
        content["quickQuiz"] = [{"q": "Mục tiêu đạt được hôm nay:", "a": "Tối thiểu 18/25 câu đúng."}]

    # Week 5: Days 29-35 (TestKing Marathon)
    elif 29 <= day_num <= 35:
        part_num = day_num - 28
        content["summary"] = f"TestKing Marathon Đợt {part_num}: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp."
        content["coreTheory"] = f"""
### Quy trình cày TestKing chuẩn phản xạ:
1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.
2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?
3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?
4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.
5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.
"""
        content["codeSnippet"] = """// TestKing Code Tracing Practice"""
        content["traps"] = ["Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."]
        content["quickQuiz"] = [{"q": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?", "a": "40 - 50 câu không nhìn đáp án."}]

    # Week 6: Days 36-42 (FEE + Spring + Modern Java)
    elif day_num == 36:
        content["summary"] = "Frontend Essentials: HTML5 Semantic & CSS Box Model, Display, Positioning."
        content["coreTheory"] = """
### 1. CSS Box Model (Mô hình hộp)
- Gồm 4 lớp từ trong ra ngoài: **Content $\\rightarrow$ Padding $\\rightarrow$ Border $\\rightarrow$ Margin**.
- `box-sizing: border-box`: Tính chiều rộng `width` bao gồm cả padding và border, giúp giao diện không bị vỡ.

### 2. display: none vs visibility: hidden (Bẫy Audit)
- `display: none`: Ẩn hoàn toàn, **KHÔNG CHIẾM KHOẢNG TRỐNG** trên trang web.
- `visibility: hidden`: Ẩn phần tử nhưng **VẪN CHIẾM NGUYÊN VỊ TRÍ KÍCH THƯỚC** (để lại khoảng trắng).

### 3. CSS Positioning
- `static` (mặc định), `relative` (tương đối theo vị trí gốc), `absolute` (tuyệt đối theo cha có position khác static), `fixed` (cố định theo màn hình).
"""
        content["codeSnippet"] = """* {
    box-sizing: border-box; /* Chuẩn thiết kế hiện đại */
}
.hidden-box { display: none; }        /* Biến mất, không tốn chỗ */
.invisible-box { visibility: hidden; } /* Vô hình nhưng vẫn giữ chỗ */"""
        content["traps"] = [
            "display: none không tốn chỗ, visibility: hidden vẫn chiếm chỗ.",
            "position: absolute nếu không có cha định vị sẽ lấy toàn bộ trang web (body) làm gốc."
        ]
        content["quickQuiz"] = [
            {"q": "Kể tên 4 thành phần Box Model từ trong ra ngoài:", "a": "Content -> Padding -> Border -> Margin"}
        ]

    elif day_num == 37:
        content["summary"] = "Frontend Essentials: JavaScript Core - var vs let/const, DOM, Event Bubbling, AJAX."
        content["coreTheory"] = """
### 1. var vs let vs const (ES6)
- `var`: Function scope, có Hoisting và khởi tạo `undefined`, cho phép khai báo lại.
- `let`: Block scope `{}`, không cho phép tái khai báo, nằm trong TDZ (Temporal Dead Zone).
- `const`: Block scope, bắt buộc gán giá trị ban đầu, không cho phép gán lại tham chiếu.

### 2. DOM & Event Bubbling
- DOM (Document Object Model): Cây đối tượng đại diện cho trang HTML.
- Event Bubbling: Sự kiện kích hoạt ở thẻ con sẽ nổi bọt lan truyền dần lên các thẻ cha bao ngoài.

### 3. AJAX (Asynchronous JavaScript and XML)
- Cho phép gửi request ngầm lên server và cập nhật một phần trang web mà không cần tải lại toàn bộ trang.
"""
        content["codeSnippet"] = """if (true) {
    var a = 1;
    let b = 2;
}
console.log(a); // 1 (lọt ra ngoài)
// console.log(b); // ReferenceError: b is not defined (bị chặn trong block)"""
        content["traps"] = [
            "Khai báo `const obj = {}` vẫn có thể thay đổi thuộc tính `obj.name = 'test'`.",
            "var bị hoisting có thể gây lỗi logic biến nhận undefined."
        ]
        content["quickQuiz"] = [
            {"q": "let khác var ở điểm căn bản nào?", "a": "let có block scope {}, var có function scope."}
        ]

    elif day_num == 38:
        content["summary"] = "Frontend Essentials: jQuery Selector & Bootstrap 12-Column Grid System."
        content["coreTheory"] = """
### 1. jQuery Core
- Cú pháp: `$(selector).action()`
- Các phương thức phổ biến: `$('#id').val()`, `$('.class').text()`, `$('.btn').click()`, `$.ajax()`.

### 2. Bootstrap Grid System
- Hệ thống lưới gồm **12 cột**.
- Cấu trúc chuẩn: `.container` $\\rightarrow$ `.row` $\\rightarrow$ `.col-*`.
- Breakpoints: `col-` (mobile), `col-sm-` (tablet), `col-md-` (desktop nhỏ), `col-lg-` (desktop lớn).
- Tổng số cột trên một hàng phải bằng 12 (ví dụ `.col-md-8` kết hợp `.col-md-4`).
"""
        content["codeSnippet"] = """<div class="container">
    <div class="row">
        <div class="col-md-8">Cột chiếm 8/12 phần</div>
        <div class="col-md-4">Cột chiếm 4/12 phần</div>
    </div>
</div>"""
        content["traps"] = [
            "Các class .col bắt buộc phải là con trực tiếp của .row.",
            "Không bao giờ viết code logic phức tạp trong jQuery, chỉ dùng cho DOM và AJAX đơn giản."
        ]
        content["quickQuiz"] = [
            {"q": "Một hàng .row trong Bootstrap chia làm bao nhiêu cột?", "a": "12 cột."}
        ]

    elif day_num == 39:
        content["summary"] = "Spring Framework Core: Inversion of Control (IoC), Dependency Injection (DI) & Bean Scopes."
        content["coreTheory"] = """
### 1. IoC (Inversion of Control) & DI (Dependency Injection)
- **IoC (Đảo ngược điều khiển):** Thay vì code tự `new` đối tượng, quyền tạo và quản lý vòng đời đối tượng được giao cho Spring Container.
- **DI (Tiêm phụ thuộc):** Spring Container tự động tiêm đối tượng phụ thuộc vào class thông qua:
  1. Constructor Injection (Được khuyến nghị nhất).
  2. Setter Injection.
  3. Field Injection (`@Autowired` trên biến).

### 2. Spring Stereotypes
- `@Component`: Đánh dấu class là Spring Bean nói chung.
- `@Service`: Đánh dấu lớp Business Logic.
- `@Repository`: Đánh dấu lớp DAO truy xuất dữ liệu, tự chuyển đổi exception SQL.
- `@Controller` / `@RestController`: Đánh dấu Web Controller.

### 3. Bean Scopes
- `singleton` (Mặc định): Duy nhất 1 instance trong toàn bộ Container.
- `prototype`: Mỗi lần gọi `getBean()` hoặc inject sẽ tạo một instance mới.
"""
        content["codeSnippet"] = """@Service
public class UserService {
    private final UserDAO userDAO;
    
    @Autowired // Constructor Injection
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }
}"""
        content["traps"] = [
            "Constructor Injection an toàn hơn Field Injection vì hỗ trợ immutability (final) và dễ viết Unit Test.",
            "Bean singleton có trạng thái thay đổi dễ gặp lỗi race-condition đa luồng."
        ]
        content["quickQuiz"] = [
            {"q": "Scope mặc định của một Spring Bean là gì?", "a": "singleton"}
        ]

    elif day_num == 40:
        content["summary"] = "Spring MVC Flow & Spring Boot Basics (Annotations: @RestController, @PathVariable, @RequestBody)."
        content["coreTheory"] = """
### 1. Luồng xử lý Spring MVC (Spring MVC Architecture)
1. Browser gửi request $\\rightarrow$ `DispatcherServlet` (Front Controller) tiếp nhận.
2. `DispatcherServlet` hỏi `HandlerMapping` để tìm Controller tương ứng.
3. Controller thực thi logic nghiệp vụ và trả về `ModelAndView` hoặc dữ liệu JSON.
4. `ViewResolver` phân giải view template (JSP/Thymeleaf) $\\rightarrow$ Trả HTML về trình duyệt.

### 2. Các Annotations phổ biến trong REST API
- `@RestController` = `@Controller` + `@ResponseBody` (trả về dữ liệu JSON trực tiếp).
- `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`.
- `@PathVariable`: Lấy tham số trên đường dẫn URL (ví dụ `/users/{id}`).
- `@RequestParam`: Lấy query parameter (ví dụ `?page=1&size=10`).
- `@RequestBody`: Tự động chuyển đổi chuỗi JSON gửi lên thành Java Object (DTO).
"""
        content["codeSnippet"] = """@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return userService.findById(id);
    }
}"""
        content["traps"] = [
            "Dùng @Controller thông thường nếu muốn trả về JSON phải gắn thêm @ResponseBody.",
            "@RequestBody chỉ dùng cho phương thức POST/PUT có mang Body dữ liệu."
        ]
        content["quickQuiz"] = [
            {"q": "DispatcherServlet đóng vai trò gì trong Spring MVC?", "a": "Front Controller tiếp nhận mọi request đầu vào."}
        ]

    elif day_num == 41:
        content["summary"] = "Bổ sung Java 8-17 Features: Lambda, Functional Interface, Stream API, Optional, var, Records."
        content["coreTheory"] = """
### 1. Java 8 Cốt Lõi
- **Lambda Expression:** Cú pháp ngắn gọn `(params) -> expression`.
- **Functional Interface:** Interface chỉ có DUY NHẤT 1 abstract method (`@FunctionalInterface`), ví dụ: `Predicate`, `Consumer`, `Function`, `Supplier`.
- **Stream API:** Xử lý tập hợp dạng luồng dữ liệu: `filter()`, `map()`, `sorted()`, `collect()`, `reduce()`.
- **Optional:** Bao bọc giá trị để hạn chế lỗi `NullPointerException`.
- **Interface Default Method:** Cho phép viết thân hàm `default` trong interface từ Java 8.

### 2. Java 11 & Java 17
- `var`: Khai báo biến cục bộ suy luận kiểu tự động (Java 10+).
- `record`: Class bất biến lưu dữ liệu ngắn gọn, tự sinh getter/equals/hashCode/toString (Java 16+).
"""
        content["codeSnippet"] = """List<String> names = List.of("An", "Binh", "Cuong");
List<String> filtered = names.stream()
    .filter(name -> name.startsWith("A"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());

record Student(int id, String name) {} // Record Java 17"""
        content["traps"] = [
            "Stream sau khi đã gọi Terminal Operation (như collect, count) thì không thể tái sử dụng lại.",
            "var chỉ dùng được cho biến cục bộ (local variable), không dùng cho thuộc tính class hay tham số method."
        ]
        content["quickQuiz"] = [
            {"q": "Functional Interface có bao nhiêu abstract method?", "a": "Chính xác 1 abstract method."}
        ]

    elif day_num == 42:
        content["summary"] = "AUDIT 1-1 SIMULATION SESSION #1: Mô phỏng phỏng vấn vấn đáp 10 câu hỏi then chốt."
        content["coreTheory"] = """
### Chiến thuật trả lời phỏng vấn Audit 1-1 (60-90 giây/câu):
1. **Khái niệm (Definition):** Trả lời trực diện vào câu hỏi bằng 1 câu định nghĩa ngắn gọn, chính xác.
2. **So sánh / Cơ chế (How it works):** Nêu rõ bản chất bên dưới bộ nhớ (Stack, Heap, Hash Table, Container).
3. **Ví dụ Code (Code Example):** Nói rõ một ví dụ cụ thể minh họa.
4. **Cạm bẫy / Lưu ý (Trap / Gotcha):** Nhắc tới các trường hợp lỗi thường gặp (NullPointer, ClassCast, Thread-safety) để gây ấn tượng mạnh với Mentor!
"""
        content["codeSnippet"] = """// Mở Tab "Audit 1-1 Simulator" trên Web App, bật Micro và tự ghi âm câu trả lời!"""
        content["traps"] = ["Nói lan man, không đúng trọng tâm, quên dùng thuật ngữ tiếng Anh chuẩn."]
        content["quickQuiz"] = [{"q": "Đã bấm ghi âm và nghe lại giọng nói của mình chưa?", "a": "Bắt buộc phải nghe lại để sửa ngắc ngứ!"}]

    # Week 7: Days 43-49 (Speed Run & Hard Traps)
    elif 43 <= day_num <= 46:
        content["summary"] = f"TestKing Vòng 2 - Đợt {day_num - 42}: Tốc độ cao < 45s/câu, độ chính xác mục tiêu > 90%."
        content["coreTheory"] = """
### Mục tiêu Tuần 7:
- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.
- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.
- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.
"""
        content["codeSnippet"] = """// Luyện tốc độ cao 50 câu/ngày"""
        content["traps"] = ["Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output."]
        content["quickQuiz"] = [{"q": "Mục tiêu thời gian mỗi câu:", "a": "Dưới 45-60 giây."}]

    elif day_num == 47:
        content["summary"] = "DIỆT CỎ CÂU SAI: Lọc và làm lại toàn bộ các câu hỏi đã từng làm sai từ vòng 1."
        content["coreTheory"] = """
### Nguyên tắc Diệt Cỏ:
- Những câu sai $\\ge 2$ lần là điểm yếu chí tử của bạn trong phòng thi.
- Phải tự viết lại code của câu sai vào IDE, chạy thử và ghi lý do mình bị lừa vào Sổ Lỗi (Error Book).
- Cam kết không bao giờ lặp lại lỗi đó lần thứ 3.
"""
        content["codeSnippet"] = """// Rà soát lại Error Book trên Web App"""
        content["traps"] = ["Chủ quan tưởng mình đã nhớ nhưng khi gặp lại biến thể khác vẫn bị lừa."]
        content["quickQuiz"] = [{"q": "Đã xóa được bao nhiêu câu khỏi danh sách câu sai?", "a": "Mục tiêu xóa sạch 100%."}]

    elif day_num == 48:
        content["summary"] = "FULL MOCK ENTRY TEST #2: Thi thử nghiêm ngặt chuẩn điểm số như thi thật."
        content["coreTheory"] = """
### Quy tắc thi thử #2:
- Bấm giờ đúng 45 phút cho 30 câu (Java + SQL + Web).
- Đặt điện thoại ở chế độ im lặng, không tra cứu tài liệu, không dùng AI.
- Đánh giá năng lực thật sự:
  - $\\ge 24 / 30$: Phong độ cực tốt.
  - $20 - 23 / 30$: Ổn định.
  - $< 20 / 30$: Tiếp tục củng cố các mảng bị hổng.
"""
        content["codeSnippet"] = """// Thi thử trên Web App Tab Quiz"""
        content["traps"] = ["Bình tĩnh đọc kỹ các câu có Exception và Flow control."]
        content["quickQuiz"] = [{"q": "Điểm số đạt được hôm nay:", "a": "Ghi nhận kết quả vào lịch sử thi."}]

    elif day_num == 49:
        content["summary"] = "AUDIT 1-1 SIMULATION SESSION #2: Vấn đáp các chủ đề nâng cao và hóc búa."
        content["coreTheory"] = """
### Các câu hỏi Audit hóc búa nhất:
1. Cơ chế băm (Hashing) và xử lý va chạm (Collision resolution) trong HashMap?
2. Tại sao String lại là Immutable trong Java? Lợi ích bảo mật và performance?
3. Tại sao Interface default method có thể gây ra lỗi Diamond Problem?
4. Khác biệt giữa Spring Singleton Bean và Singleton Pattern của GoF?
"""
        content["codeSnippet"] = """// Luyện nói to và ghi âm trên Tab Audit"""
        content["traps"] = ["Tránh trả lời kiểu học vẹt một câu cụt ngủn, luôn phân tích nguyên nhân tại sao."]
        content["quickQuiz"] = [{"q": "Thời gian trả lời mỗi câu lý tưởng là:", "a": "60 đến 90 giây."}]

    # Week 8: Days 50-56 (Final Sprint)
    elif day_num == 50:
        content["summary"] = "Tuần 8 Final Review: Rà soát Java Core Ch1, Ch2, Ch3 (Cú pháp, Access modifiers, Operators)."
        content["coreTheory"] = "Ôn nhanh lại ma trận Access Modifiers, bẫy primitive casting và short-circuit operators. Làm nhanh 20 câu trắc nghiệm phản xạ."
        content["codeSnippet"] = "// Rà soát Ch1-Ch3"
        content["traps"] = ["Local variable default value trap, byte overflow trap."]
        content["quickQuiz"] = [{"q": "Kiểm tra lại:", "a": "Xem lại toàn bộ flashcard Ch1-Ch3."}]

    elif day_num == 51:
        content["summary"] = "Tuần 8 Final Review: Rà soát Java Core Ch4, Ch5 (Flow Control, Exceptions, OOP Rules)."
        content["coreTheory"] = "Ôn lại 4 quy tắc Method Overriding, thứ tự thực thi try-catch-finally, static method hiding và constructor chaining."
        content["codeSnippet"] = "// Rà soát Ch4-Ch5"
        content["traps"] = ["return trong finally nuốt exception."]
        content["quickQuiz"] = [{"q": "Kiểm tra lại:", "a": "Xem lại toàn bộ flashcard Ch4-Ch5."}]

    elif day_num == 52:
        content["summary"] = "Tuần 8 Final Review: Rà soát Java Core Ch6, Ch7 (String Pool, Wrappers, Collections, Map)."
        content["coreTheory"] = "Ôn lại String Pool, Integer Cache -128..127, ma trận Collections (Duplicate, Ordered, Sorted, Thread-safe), hợp đồng equals/hashCode."
        content["codeSnippet"] = "// Rà soát Ch6-Ch7"
        content["traps"] = ["TreeSet cần Comparable, Hashtable cấm null."]
        content["quickQuiz"] = [{"q": "Kiểm tra lại:", "a": "Xem lại toàn bộ flashcard Ch6-Ch7."}]

    elif day_num == 53:
        content["summary"] = "Tuần 8 Final Review: Rà soát Java Core Ch8, Ch9 (Inner Classes, Threads, Locks)."
        content["coreTheory"] = "Ôn lại Method-local inner class effectively final, Thread.sleep vs Object.wait, synchronized monitor locks."
        content["codeSnippet"] = "// Rà soát Ch8-Ch9"
        content["traps"] = ["wait() phải gọi trong synchronized."]
        content["quickQuiz"] = [{"q": "Kiểm tra lại:", "a": "Xem lại toàn bộ flashcard Ch8-Ch9."}]

    elif day_num == 54:
        content["summary"] = "Tuần 8 Final Review: Rà soát SQL Queries & JavaWeb (JSP/Servlet)."
        content["coreTheory"] = "Ôn lại INNER vs LEFT JOIN, WHERE vs HAVING, DELETE vs TRUNCATE, Vòng đời Servlet, 4 Scopes, Forward vs Redirect."
        content["codeSnippet"] = "// Rà soát SQL & Web"
        content["traps"] = ["WHERE o.id IS NULL trong LEFT JOIN, Forward không đổi URL."]
        content["quickQuiz"] = [{"q": "Kiểm tra lại:", "a": "Làm 15 câu SQL + 15 câu Web."}]

    elif day_num == 55:
        content["summary"] = "Tuần 8 Final Review: Rà soát FEE, Spring Framework & 79 câu Comment Code Anh - Việt."
        content["coreTheory"] = "Ôn lại CSS Box Model, display:none vs visibility:hidden, Spring IoC/DI, @RestController, chạy qua toàn bộ 79 câu Comment Code."
        content["codeSnippet"] = "// Rà soát FEE, Spring & English"
        content["traps"] = ["box-sizing: border-box, @Autowired constructor injection."]
        content["quickQuiz"] = [{"q": "Kiểm tra lại:", "a": "Duyệt qua danh sách 79 câu Comment Code."}]

    elif day_num == 56:
        content["summary"] = "GRAND FINALE: Bài thi thử tổng hợp cuối cùng & Tự tin chiến thắng!"
        content["coreTheory"] = """
### Lời khuyên trước ngày thi:
1. Bạn đã đi qua đủ 8 tuần với toàn bộ lộ trình và làm chủ hàng trăm bẫy lý thuyết.
2. Hôm nay không học thêm bất kỳ kiến thức mới nào. Chỉ làm 1 đề Full Mock cuối cùng để tạo cảm giác quen tay.
3. Đọc lại Sổ Lỗi (Error Book) một lượt.
4. Ăn uống đầy đủ, ngủ sớm trước 22h, giữ tinh thần thoải mái, tự tin bước vào phòng thi và đạt điểm số xuất sắc!
"""
        content["codeSnippet"] = """// Chúc bạn thi tốt và đạt kết quả cao nhất!"""
        content["traps"] = ["Giữ vững tâm lý bình tĩnh, không vội vàng nộp bài trước khi soát lại."]
        content["quickQuiz"] = [{"q": "Bạn đã sẵn sàng chưa?", "a": "SẴN SÀNG 100%!"}]

    return content

# Generate all 56 days
all_lessons = {}
day_counter = 1
for w in roadmap:
    w_num = w['week']
    for d in w['days']:
        d_num = d['day']
        d_title = d['title']
        d_topics = d['topics']
        d_tasks = d['tasks']
        all_lessons[str(d_num)] = get_lesson_content(d_num, d_title, w_num, d_topics, d_tasks)

with open('data/daily_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(all_lessons, f, ensure_ascii=False, indent=2)

print(f'Generated all {len(all_lessons)} daily lessons into data/daily_lessons.json successfully!')
