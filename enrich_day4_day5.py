import json

with open('data/daily_lessons.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

# ====================================================================
# DAY 4: Chapter 2 Part 2 - Non-Access Modifiers & Interface Rules
# ====================================================================
lessons["4"]["chapter"] = "Chapter 2: Declarations & Access Control (Phần 2)"
lessons["4"]["estimatedTime"] = "3h 30m"
lessons["4"]["difficulty"] = "⭐⭐⭐"
lessons["4"]["priority"] = "🔴 MUST KNOW (Trọng Tâm SCJP & TestKing)"
lessons["4"]["source"] = "SCJP Chapter 2 (Ch02.pdf) & TestKing"
lessons["4"]["objectives"] = [
    "Làm chủ 7 Non-access Modifiers: static, final, abstract, strictfp, native, transient, volatile.",
    "Nắm vững các cặp Modifier tương khắc nhau (Illegal Combinations): final abstract, private abstract, static abstract.",
    "Quy tắc bất biến của Interface: Mọi field ngầm định là 'public static final', mọi method ngầm định là 'public abstract'.",
    "Khác biệt giữa biến static (Class variable - nạp 1 lần duy nhất) và biến instance."
]
lessons["4"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Các Non-Access Modifiers & Quy Tắc Tương Khắc",
        "sourceRef": "SCJP Objective 1.1 & 1.2 (Ch02.pdf, Page 26-38)",
        "theory": """
#### 1. Các Non-Access Modifiers phổ biến:
- **`final`**:
  - Biến final: Hằng số, chỉ được gán giá trị 1 lần duy nhất.
  - Phương thức final: Không cho phép lớp con Override.
  - Lớp final: Không cho phép bất kỳ ai kế thừa (ví dụ class `String`, `Math`, các wrapper class).
- **`abstract`**:
  - Lớp abstract: Không thể khởi tạo trực tiếp bằng từ khóa `new`.
  - Phương thức abstract: Chỉ có phần khai báo, KHÔNG CÓ THÂN HÀM (kết thúc bằng dấu chấm phẩy `;`). Bắt buộc lớp con đầu tiên là concrete class phải Override.
- **`static`**:
  - Thuộc tính/phương thức thuộc về **toàn bộ Class** chứ không thuộc về từng instance riêng lẻ. Được cấp phát bộ nhớ ngay khi Class được nạp.
- **`transient`**: Đánh dấu thuộc tính **KHÔNG ĐƯỢC serialize** (ghi ra file hoặc truyền qua mạng). Khi deserialize, nó nhận giá trị default.
- **`volatile`**: Báo cho JVM biết biến này có thể bị sửa đổi bởi nhiều luồng đồng thời, buộc các luồng phải đọc/ghi trực tiếp từ RAM chính (Main Memory) thay vì dùng CPU Cache.

#### 2. ⚠️ Các Cặp Modifier TƯƠNG KHẮC BẮT BUỘC NHỚ (Compile Error):
1. **`final abstract`**: Hoàn toàn mâu thuẫn! `final` cấm sửa/cấm kế thừa, trong khi `abstract` bắt buộc phải có con kế thừa để hoàn thiện.
2. **`private abstract`**: `abstract` bắt con phải thấy để override, nhưng `private` lại giấu tiệt không cho con thấy!
3. **`static abstract`**: Phương thức static không thể override (chỉ có thể hiding), trong khi abstract đòi hỏi dynamic dispatch ở runtime.
""",
        "code": """abstract class Shape {
    final int BORDER_WIDTH = 2; // Hợp lệ: Hằng số
    abstract void draw(); // Hợp lệ: Phương thức trừu tượng
    
    // final abstract void test(); // COMPILE ERROR: illegal combination of modifiers: abstract and final!
    // private abstract void hide(); // COMPILE ERROR: illegal combination of modifiers: abstract and private!
    // static abstract void run(); // COMPILE ERROR: illegal combination of modifiers: abstract and static!
}"""
    },
    {
        "id": "partB",
        "title": "Part B: Quy Tắc Toàn Diện Về Interface Trong Java",
        "sourceRef": "SCJP Objective 1.3 (Ch02.pdf, Page 40-52)",
        "theory": """
### 1. Thuộc tính (Constants) trong Interface:
- Mọi biến khai báo trong interface **LUÔN LUÔN LÀ `public static final`** ngầm định, bất kể bạn có gõ các từ này ra hay không!
- Do là `final`, bạn **BẮT BUỘC PHẢI KHỞI TẠO GIÁ TRỊ NGAY LẬP TỨC** khi khai báo.
- Khai báo biến `private`, `protected`, hoặc không gán giá trị $\\rightarrow$ **COMPILE ERROR NGAY LẬP TỨC**.

### 2. Phương thức trong Interface (Java 7 trở về trước):
- Mọi phương thức trong interface **LUÔN LUÔN LÀ `public abstract`** ngầm định.
- Không được phép có thân hàm `{}` (trừ `default` và `static` từ Java 8).
- Không được phép khai báo `protected`, `private`, `final`, `static` (trước Java 8).

### 3. Cạm bẫy kế thừa Interface:
- Khi một Class `implements` Interface, phương thức override ở class con **BẮT BUỘC PHẢI KHAI BÁO TỪ KHÓA `public`**!
- Lý do: Method trong interface ngầm định là `public`. Nếu class con viết `void doWork() {}` (không ghi modifier tức là `default`), compiler sẽ báo lỗi: **\"Cannot reduce the visibility of the inherited method from Interface\"** (vi phạm quy tắc quyền truy cập con không được hẹp hơn cha).
""",
        "code": """interface Movable {
    int SPEED = 100; // Ngầm định: public static final int SPEED = 100;
    void move();     // Ngầm định: public abstract void move();
}

class Car implements Movable {
    // void move() {} // COMPILE ERROR: Phải là public!
    public void move() {
        System.out.println("Moving at " + SPEED);
    }
}"""
    }
]

lessons["4"]["codeTracing"] = [
    {
        "id": "ct_d4_1",
        "level": "Medium",
        "question": "Xét interface và class sau, điều gì xảy ra khi biên dịch?",
        "code": """interface Bounceable {
    int count = 10;
    void bounce();
}
public class Ball implements Bounceable {
    public void bounce() {
        // count = 20; // Dòng 1
        System.out.println(count); // Dòng 2
    }
    public static void main(String[] args) {
        new Ball().bounce();
    }
}""",
        "options": [
            "In ra 10 nếu Dòng 1 bị comment, nếu mở Dòng 1 sẽ bị Compile Error vì count là final",
            "Biên dịch lỗi tại khai báo int count = 10 vì thiếu từ khóa public",
            "In ra 20",
            "Lỗi biên dịch tại class Ball vì chưa override đầy đủ phương thức"
        ],
        "correctIndex": 0,
        "explanation": "Trong interface, biến `count` ngầm định là `public static final`. Vì là `final`, nó là hằng số không thể gán lại giá trị mới (Dòng 1 bị lỗi: cannot assign a value to final variable count). Dòng 2 đọc giá trị hằng số 10 hoàn toàn hợp lệ."
    }
]

lessons["4"]["examTraps"] = [
    {
        "trap": "Quên ghi từ khóa 'public' khi override phương thức từ Interface",
        "whyPeopleWrong": "Thấy interface viết 'void run();' nên ở class con cũng viết 'void run() {}'.",
        "wrongThinking": "Tưởng rằng phương thức trong interface không ghi gì là quyền default (package-private).",
        "correctRule": "Mọi phương thức trong interface ngầm định là 'public abstract'. Ở class con bắt buộc phải ghi tường minh từ khóa 'public', nếu không sẽ bị lỗi hạ thấp quyền truy cập (cannot reduce visibility)!",
        "code": "interface Doable { void doIt(); }\nclass Imp implements Doable {\n    // void doIt() {} // COMPILE ERROR: Cannot reduce visibility!\n    public void doIt() {} // OK CHUẨN XÁC\n}",
        "miniCheck": "Bất kỳ class nào implements interface, hãy soi ngay xem các phương thức override có chữ 'public' hay chưa!"
    }
]

lessons["4"]["dailyAssessment"] = [
    {
        "id": "da_4_1",
        "q": "Tổ hợp modifier nào sau đây là HỢP LỆ trong Java?",
        "options": [
            "public final class MyClass {}",
            "final abstract class MyClass {}",
            "private abstract void doWork();",
            "static abstract void calculate();"
        ],
        "correct": 0,
        "exp": "'public final' là tổ hợp hoàn toàn hợp lệ (class công khai và không cho kế thừa như java.lang.String). Các tổ hợp còn lại đều xung đột trực tiếp với abstract."
    }
]

# ====================================================================
# DAY 5: Chapter 3 - Operators & Assignments
# ====================================================================
lessons["5"]["chapter"] = "Chapter 3: Operators & Assignments"
lessons["5"]["estimatedTime"] = "3h 30m"
lessons["5"]["difficulty"] = "⭐⭐⭐"
lessons["5"]["priority"] = "🔴 MUST KNOW (Trọng Tâm TestKing)"
lessons["5"]["source"] = "SCJP Chapter 3 (Ch03.pdf) & TestKing"
lessons["5"]["objectives"] = [
    "Làm chủ toán tử tiền tố (++x, --x) vs hậu tố (x++, x--) trong biểu thức phức hợp.",
    "Phân biệt toán tử đoản mạch Short-Circuit (&&, ||) vs toán tử luận lý Bitwise (&, |).",
    "Hiểu sâu toán tử dịch bit: >> (Signed Right Shift giữ bit dấu) vs >>> (Unsigned Right Shift luôn chèn 0).",
    "Nắm chắc toán tử ba ngôi (Ternary Operator ? :) và toán tử instanceof."
]
lessons["5"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Tiền Tố, Hậu Tố & Short-Circuit Operators",
        "sourceRef": "SCJP Objective 3.1 & 3.2 (Ch03.pdf, Page 4-22)",
        "theory": """
#### 1. Toán tử Tăng/Giảm (++ và --):
- **Prefix (`++x`)**: Tăng giá trị của `x` lên 1 TRƯỚC, sau đó mới lấy giá trị mới đưa vào tính toán biểu thức.
- **Postfix (`x++`)**: Lấy giá trị HIỆN TẠI của `x` để đưa vào tính toán biểu thức trước, tính xong toàn bộ mới tăng `x` lên 1.

#### 2. Short-Circuit (&&, ||) vs Bitwise (&, |):
- **Toán tử Đoản mạch (`&&`)**: Nếu vế trái là `false`, Java **LẬP TỨC DỪNG LẠI** và kết luận biểu thức là `false`. Toàn bộ vế bên phải **HOÀN TOÀN KHÔNG ĐƯỢC THỰC THI**!
- **Toán tử Đoản mạch (`||`)**: Nếu vế trái là `true`, Java **LẬP TỨC DỪNG LẠI** và kết luận biểu thức là `true`. Vế bên phải không được chạy!
- **Toán tử Non-short-circuit / Bitwise (`&`, `|`)**: Dù vế trái có là gì, Java **BẮT BUỘC PHẢI CHẠY CẢ 2 VẾ** trái và phải!

#### 3. Toán tử Dịch Bit:
- `x << 2`: Dịch trái 2 bit (tương đương nhân với $2^2 = 4$).
- `x >> 1`: Dịch phải có dấu 1 bit (tương đương chia cho 2). Giữ nguyên bit dấu ngoài cùng bên trái (nếu âm thì chèn 1, dương thì chèn 0).
- `x >>> 1`: Dịch phải **KHÔNG DẤU (Unsigned)**. Luôn luôn chèn bit `0` vào bên trái, biến số âm thành số dương cực lớn!
""",
        "code": """int a = 5;
int b = 10;
boolean res = (a++ > 5) && (++b > 10);
// Giải phẫu:
// 1. a++ > 5: Lấy a=5 so sánh 5 > 5 -> FALSE. Sau đó a tăng lên 6.
// 2. Vì vế trái FALSE và dùng && -> BỎ QUA VẾ PHẢI! b giữ nguyên 10!
System.out.println("a=" + a + ", b=" + b + ", res=" + res);
// In ra: a=6, b=10, res=false

// Toán tử instanceof:
String s = null;
System.out.println(s instanceof String); // In ra FALSE! null không bao giờ là instance của bất kỳ class nào!"""
    }
]

lessons["5"]["codeTracing"] = [
    {
        "id": "ct_d5_1",
        "level": "Hard",
        "question": "Kết quả in ra của đoạn mã sau là gì?",
        "code": """public class OpTrace {
    public static void main(String[] args) {
        int x = 2;
        int y = 5;
        if ((x++ == 2) || (y++ == 5)) {
            x += y;
        }
        System.out.println(x + " " + y);
    }
}""",
        "options": ["8 5", "8 6", "7 5", "7 6"],
        "correctIndex": 0,
        "explanation": "1. `x++ == 2`: Lấy x=2 so sánh 2 == 2 -> TRUE. Sau đó x tăng lên 3.\n2. Do toán tử là `||` và vế trái đã TRUE, Java lập tức bỏ qua vế phải `(y++ == 5)` -> `y` giữ nguyên giá trị 5!\n3. Vào trong if: `x += y` -> `x = 3 + 5 = 8`.\n4. Kết quả in ra: `8 5`."
    }
]

lessons["5"]["examTraps"] = [
    {
        "trap": "Toán tử instanceof với đối tượng null",
        "whyPeopleWrong": "Tưởng rằng biến khai báo kiểu String có giá trị null thì null instanceof String sẽ là true.",
        "wrongThinking": "Nghĩ rằng kiểu dữ liệu của biến quyết định kết quả instanceof.",
        "correctRule": "Toán tử instanceof kiểm tra kiểu của ĐỐI TƯỢNG THỰC TẾ TRÊN HEAP. Giá trị null không trỏ tới bất kỳ đối tượng nào, do đó 'null instanceof Anything' LUÔN TRẢ VỀ FALSE mà không ném ngoại lệ NullPointerException!",
        "code": "String s = null;\nSystem.out.println(s instanceof String); // In ra: false\nSystem.out.println(s instanceof Object); // In ra: false",
        "miniCheck": "Bất cứ khi nào vế trái của instanceof là null, kết quả chắc chắn là false!"
    }
]

lessons["5"]["dailyAssessment"] = [
    {
        "id": "da_5_1",
        "q": "Xét biểu thức: `int result = 10 + 5 * 2;` và `boolean b = true || false && false;` Giá trị của result và b là:",
        "options": [
            "result = 20, b = true",
            "result = 30, b = false",
            "result = 20, b = false",
            "result = 30, b = true"
        ],
        "correct": 0,
        "exp": "Nhân chia có độ ưu tiên cao hơn cộng trừ (5 * 2 = 10 -> 10 + 10 = 20). Toán tử && có độ ưu tiên cao hơn ||, tuy nhiên vì vế trái của || là true nên đoản mạch trả về true ngay lập tức."
    }
]

# Save back to daily_lessons.json
with open('data/daily_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print("Enriched Day 4 and Day 5 with deep master curriculum!")
