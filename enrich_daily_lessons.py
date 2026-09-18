import json
import os

with open('data/daily_lessons.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

print(f"Loaded {len(lessons)} lessons.")

# ====================================================================
# DEEP LESSON DEFINITIONS FOR CORE SCJP CHAPTERS
# ====================================================================

# DAY 2: Chapter 1 Part 2
lessons["2"]["chapter"] = "Chapter 1: Language Fundamentals (Phần 2)"
lessons["2"]["estimatedTime"] = "3h 30m"
lessons["2"]["difficulty"] = "⭐⭐⭐"
lessons["2"]["priority"] = "🔴 MUST KNOW (Trọng Tâm SCJP)"
lessons["2"]["source"] = "SCJP Chapter 1 (Ch01.pdf) & TestKing"
lessons["2"]["objectives"] = [
    "Phân biệt bản chất bộ nhớ giữa Primitive Types và Reference Types (Stack vs Heap).",
    "Hiểu sâu cơ chế Pass-by-Value trong Java khi truyền tham số là Đối tượng.",
    "Làm chủ quy tắc Type Promotion: Mọi phép toán số học nhị phân trên byte/short/char đều tự động nâng kiểu lên int.",
    "Nắm chắc quy tắc Ép kiểu: Implicit Widening (nới rộng tự động) vs Explicit Narrowing (thu hẹp bắt buộc ép kiểu).",
    "Quy tắc khởi tạo biến: Instance vs Static (tự nhận default) vs Local Variables (Definite Assignment)."
]
lessons["2"]["whyMatters"] = "Đề thi TestKing có rất nhiều câu lừa thí sinh ở phép toán 'byte b = 1; b = b + 1;' (Compile Error) và việc gán tham chiếu trong method. Nắm chắc ngày 2 giúp bạn không bao giờ mất điểm ở các câu bẫy cơ bản này!"
lessons["2"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Primitive vs Reference & Bộ Nhớ Stack/Heap",
        "sourceRef": "SCJP Objective 1.2 (Ch01.pdf, Page 8-14)",
        "theory": """
Trong Java, các kiểu dữ liệu được chia làm 2 thế giới tách biệt hoàn toàn:

#### 1. Kiểu Nguyên Thủy (Primitive Types - 8 kiểu):
- Lưu trữ **trực tiếp giá trị nhị phân** trong ô nhớ.
- Khi được khai báo là biến cục bộ (local variable), chúng nằm trực tiếp trên **Stack**.
- Khi gán `int a = b;`, Java copy toàn bộ giá trị nhị phân của `b` sang `a`. Thay đổi `a` không bao giờ ảnh hưởng tới `b`.

#### 2. Kiểu Tham Chiếu (Reference Types - Object, String, Array...):
- Bản thân biến tham chiếu chỉ lưu trữ **ĐỊA CHỈ Ô NHỚ (Memory Address)** trỏ tới đối tượng thực sự nằm trên vùng nhớ **Heap**.
- Giá trị mặc định của biến tham chiếu khi là instance variable luôn là **`null`** (nghĩa là con trỏ chưa trỏ vào bất kỳ đối tượng nào trên Heap).
- Khi gán `Dog d1 = d2;`, Java chỉ copy **địa chỉ con trỏ**, cả 2 biến cùng trỏ vào 1 đối tượng duy nhất trên Heap.

#### ⚠️ Java là 100% Pass-by-Value:
- Khi truyền một đối tượng vào hàm, Java copy **giá trị của con trỏ tham chiếu**.
- Nếu bạn gọi `dog.setName("Max")`, đối tượng thật trên Heap bị thay đổi.
- Nhưng nếu bạn viết `dog = new Dog("Lucy")`, bạn chỉ đang đổi hướng con trỏ bản sao cục bộ, con trỏ gốc bên ngoài hàm **HOÀN TOÀN KHÔNG ĐỔI**!
""",
        "code": """public class PassByValueDemo {
    public static void modify(int x, StringBuilder sb) {
        x = 100; // Chỉ đổi bản sao x trên Stack
        sb.append(" World"); // Thao tác trực tiếp trên Heap
        sb = new StringBuilder("Goodbye"); // sb trỏ đi chỗ khác, không ảnh hưởng bên ngoài
    }
    public static void main(String[] args) {
        int a = 10;
        StringBuilder str = new StringBuilder("Hello");
        modify(a, str);
        System.out.println(a); // In ra 10 (Không đổi!)
        System.out.println(str); // In ra "Hello World"
    }
}"""
    },
    {
        "id": "partB",
        "title": "Part B: Type Promotion & Casting (Ép Kiểu)",
        "sourceRef": "SCJP Objective 3.1 & 4.5 (Ch01.pdf, Page 16-21)",
        "theory": """
#### 1. Quy tắc Nâng Kiểu Số Học (Numeric Type Promotion):
Trong bất kỳ biểu thức số học nào (`+`, `-`, `*`, `/`, `%`):
1. Nếu có một toán hạng là `double`, toàn bộ biểu thức được nâng lên `double`.
2. Nếu không, nếu có toán hạng là `float`, toàn bộ nâng lên `float`.
3. Nếu không, nếu có toán hạng là `long`, toàn bộ nâng lên `long`.
4. **NGUYÊN TẮC VÀNG BẪY THI:** Nếu tất cả các toán hạng chỉ là `byte`, `short`, hoặc `char`, thì Java **TỰ ĐỘNG NÂNG TẤT CẢ LÊN `int`** trước khi thực hiện phép tính!

#### 2. Ví dụ Cạm Bẫy Kinh Điển:
- `byte b1 = 10; byte b2 = 20;`
- `byte b3 = b1 + b2;` $\\rightarrow$ **COMPILE ERROR: possible loss of precision**! (Vì `b1 + b2` cho ra kết quả kiểu `int`, gán ngược lại cho `byte` bị compiler chặn).
- Muốn đúng phải ép kiểu: `byte b3 = (byte)(b1 + b2);`
- **Toán tử gộp (Compound Assignment) tự động ép kiểu:**
  - `b1 += b2;` $\\rightarrow$ **HỢP LỆ!** Vì `b1 += b2` tương đương với `b1 = (byte)(b1 + b2)`.
  - `b1++;` $\\rightarrow$ **HỢP LỆ!** Tương đương `b1 = (byte)(b1 + 1)`.

#### 3. Widening vs Narrowing Casting:
- **Widening (Nới rộng):** Từ kiểu nhỏ sang kiểu lớn hơn (`byte -> short -> int -> long -> float -> double`). Hoàn toàn tự động (Implicit), không sợ mất dữ liệu.
- **Narrowing (Thu hẹp):** Từ kiểu lớn về kiểu nhỏ. Bắt buộc phải viết ép kiểu tường minh `(type)`. Nếu giá trị vượt quá khoảng giới hạn, sẽ xảy ra hiện tượng **tràn số (Overflow / Truncation)**.
""",
        "code": """byte a = 127;
a++; // a = (byte)(127 + 1) -> tràn số thành -128!
System.out.println("a sau khi ++: " + a);

int big = 130;
byte small = (byte) big; // 130 - 256 = -126
System.out.println("small sau khi ép kiểu: " + small);

// float f = 1.5; // COMPILE ERROR: 1.5 mặc định là double!
float f1 = 1.5f; // Hợp lệ
float f2 = (float) 1.5; // Hợp lệ"""
    }
]

lessons["2"]["codeTracing"] = [
    {
        "id": "ct_d2_1",
        "level": "Medium",
        "question": "Kết quả in ra màn hình của đoạn code sau là gì?",
        "code": """public class TestDay2 {
    static void test(int[] arr) {
        arr[0] = 99;
        arr = new int[]{1, 2, 3};
        arr[0] = 88;
    }
    public static void main(String[] args) {
        int[] myArr = {10, 20};
        test(myArr);
        System.out.println(myArr[0] + " " + myArr[1]);
    }
}""",
        "options": ["99 20", "88 20", "10 20", "Compile Error"],
        "correctIndex": 0,
        "explanation": "1. `myArr` trỏ tới mảng {10, 20} trên Heap. Khi gọi `test(myArr)`, con trỏ bản sao `arr` cũng trỏ tới mảng này.\n2. `arr[0] = 99;` thay đổi phần tử đầu tiên của mảng thật trên Heap thành 99.\n3. `arr = new int[]{1, 2, 3};` chỉ làm biến cục bộ `arr` trỏ sang mảng mới, biến `myArr` ở hàm main hoàn toàn không bị ảnh hưởng.\n4. Do đó `myArr[0]` là 99 và `myArr[1]` là 20."
    },
    {
        "id": "ct_d2_2",
        "level": "Hard",
        "question": "Đoạn code sau in ra kết quả gì?",
        "code": """public class PromotionTrap {
    public static void main(String[] args) {
        byte b = 10;
        b += 5;
        // b = b + 5; // Dòng này nếu mở ra sẽ Compile Error
        System.out.print(b + " ");
        b = (byte)(b * 20);
        System.out.print(b);
    }
}""",
        "options": ["15 -56", "15 300", "15 44", "Compile Error"],
        "correctIndex": 2,
        "explanation": "1. `b += 5` tự động ép kiểu thành `(byte)(10 + 5) = 15`.\n2. `b * 20 = 15 * 20 = 300`. Nhưng kiểu byte chỉ lưu từ -128 đến 127. 300 biểu diễn nhị phân 32-bit là `0x0000012C`. Lấy 8 bit cuối `0x2C` = 44 trong hệ thập phân! Kết quả in ra: `15 44`."
    }
]

lessons["2"]["examTraps"] = [
    {
        "trap": "Cạm bẫy toán tử gộp (b += 1) vs phép cộng tường minh (b = b + 1)",
        "whyPeopleWrong": "Nhiều người nghĩ b += 1 và b = b + 1 giống hệt nhau.",
        "wrongThinking": "Tưởng rằng cả hai đều giữ nguyên kiểu byte hoặc cả hai đều bị lỗi compile.",
        "correctRule": "Toán tử gộp (+=, -=, *=, /=, ++, --) luôn tự động chèn ép kiểu ngầm định của kiểu dữ liệu vế trái: E1 op= E2 tương đương E1 = (T)(E1 op E2).",
        "code": "byte b = 5;\nb += 5; // Hợp lệ, tự ép kiểu thành byte\n// b = b + 5; // COMPILE ERROR: b + 5 sinh ra int, không gán được cho byte!",
        "miniCheck": "Bất cứ khi nào thấy phép cộng byte/short/char bằng dấu +, hãy kiểm tra xem có ép kiểu tường minh (byte) hay không!"
    },
    {
        "trap": "Local Variable Uninitialized trong mảng",
        "whyPeopleWrong": "Nhầm lẫn giữa biến tham chiếu mảng và các phần tử bên trong mảng.",
        "wrongThinking": "Tưởng rằng mảng khai báo trong method thì phần tử cũng không có giá trị mặc định.",
        "correctRule": "Bản thân biến tham chiếu int[] arr nếu khai báo cục bộ thì không có default value. Nhưng một khi đã new int[5], tất cả 5 phần tử bên trong LUÔN ĐƯỢC GÁN DEFAULT VALUE (0, false, null) bất kể mảng nằm ở đâu!",
        "code": "public void test() {\n    int[] arr; // Chưa new -> không đọc được arr!\n    // System.out.println(arr); // COMPILE ERROR\n    arr = new int[3];\n    System.out.println(arr[0]); // IN RA 0 (Hợp lệ hoàn toàn!)\n}",
        "miniCheck": "Các phần tử mảng luôn nằm trên Heap và luôn có Default Value."
    }
]

lessons["2"]["dailyAssessment"] = [
    {
        "id": "da_2_1",
        "q": "Cho đoạn mã sau:\n```java\nbyte a = 40, b = 50;\nbyte c = (byte)(a + b);\nint d = a + b;\n```\nPhát biểu nào sau đây là ĐÚNG?",
        "options": [
            "Cả 3 dòng lệnh đều biên dịch và thực thi hợp lệ mà không có lỗi",
            "Dòng `byte c = (byte)(a + b);` gây lỗi biên dịch",
            "Dòng `int d = a + b;` gây lỗi biên dịch vì a và b là kiểu byte",
            "Cả 2 dòng khai báo c và d đều bị lỗi Compile Error"
        ],
        "correct": 0,
        "exp": "Phép toán `a + b` tự động nâng kiểu lên `int`. Dòng 2 có ép kiểu `(byte)` nên hợp lệ. Dòng 3 gán kết quả `int` cho biến `int d` hoàn toàn hợp lệ."
    },
    {
        "id": "da_2_2",
        "q": "Xét hàm sau:\n```java\npublic static void update(String str) {\n    str.concat(\" World\");\n    str += \"!\";\n}\npublic static void main(String[] args) {\n    String s = \"Hello\";\n    update(s);\n    System.out.println(s);\n}\n```\nKết quả in ra màn hình là gì?",
        "options": [
            "Hello",
            "Hello World!",
            "Hello!",
            "Compile Error"
        ],
        "correct": 0,
        "exp": "String là Immutable và Java là Pass-by-Value. Cả phương thức `str.concat()` và toán tử `str +=` đều tạo ra các đối tượng mới và chỉ gán cho con trỏ bản sao `str` trong method. Biến `s` ở hàm main hoàn toàn giữ nguyên giá trị 'Hello'."
    }
]

# ====================================================================
# DAY 3: Chapter 2 Part 1 - Declarations & Access Control
# ====================================================================
lessons["3"]["chapter"] = "Chapter 2: Declarations & Access Control (Phần 1)"
lessons["3"]["estimatedTime"] = "3h 30m"
lessons["3"]["difficulty"] = "⭐⭐⭐"
lessons["3"]["priority"] = "🔴 MUST KNOW (Trọng Tâm SCJP & TestKing)"
lessons["3"]["source"] = "SCJP Chapter 2 (Ch02.pdf) & TestKing"
lessons["3"]["objectives"] = [
    "Nắm vững 4 mức độ truy cập (Access Modifiers): public, protected, default (package-private), private.",
    "Làm chủ cạm bẫy Protected Access: Khi truy cập từ subclass ở package khác, chỉ được truy cập qua biến tham chiếu của subclass đó.",
    "Quy tắc khai báo Class trong file mã nguồn .java: Tối đa 1 public class, tên file phải trùng tên public class.",
    "Quy tắc Package và Import statements: Thứ tự file (package -> import -> class), import static vs regular import."
]
lessons["3"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Ma Trận 4 Access Modifiers & Bẫy Protected",
        "sourceRef": "SCJP Objective 1.2 (Ch02.pdf, Page 4-15)",
        "theory": """
### Bảng Ma Trận Quyền Truy Cập (Access Modifiers Matrix):
| Modifier | Trong cùng Class | Cùng Package | Subclass ở Package khác | Bất kỳ đâu (World) |
| :--- | :---: | :---: | :---: | :---: |
| `public` | ✅ | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | **✅ (Có điều kiện bẫy!)** | ❌ |
| `default` (package-private) | ✅ | ✅ | ❌ | ❌ |
| `private` | ✅ | ❌ | ❌ | ❌ |

#### ⚠️ CẠM BẪY SỐ 1 CỦA SCJP: PROTECTED TRUY CẬP XUYÊN PACKAGE:
- Khi một Class con (`Child`) ở package `pkgB` kế thừa từ Class cha (`Parent`) ở package `pkgA`, `Child` được thừa hưởng các thuộc tính/phương thức `protected`.
- **ĐIỀU KIỆN QUYẾT ĐỊNH:** Bên trong class `Child`, bạn CHỈ ĐƯỢC PHÉP TRUY CẬP thuộc tính `protected` đó thông qua **biến tham chiếu của chính nó (`this` hoặc `Child c = new Child()`)**, hoặc con của nó!
- Nếu bạn tạo biến tham chiếu của class Cha: `Parent p = new Parent();` rồi gọi `p.protectedMember` $\\rightarrow$ **COMPILE ERROR NGAY LẬP TỨC!** (Vì nhìn từ bên ngoài package, đối tượng Parent không được coi là subclass).
""",
        "code": """// Package pkgA
package pkgA;
public class Parent {
    protected int x = 10;
}

// Package pkgB
package pkgB;
import pkgA.Parent;
public class Child extends Parent {
    public void test() {
        System.out.println(this.x); // HỢP LỆ: Truy cập qua kế thừa
        Child c = new Child();
        System.out.println(c.x); // HỢP LỆ: Truy cập qua tham chiếu Child
        
        Parent p = new Parent();
        // System.out.println(p.x); // COMPILE ERROR: x has protected access in Parent!
    }
}"""
    },
    {
        "id": "partB",
        "title": "Part B: Cấu Trúc File Mã Nguồn .java & Import Rules",
        "sourceRef": "SCJP Objective 4.1 (Ch02.pdf, Page 16-25)",
        "theory": """
#### 1. Quy tắc cấu trúc file .java:
Thứ tự các thành phần trong 1 file Java BẮT BUỘC theo thứ tự:
1. `package statement` (tối đa 1 dòng, nếu có phải nằm ở dòng code đầu tiên).
2. `import statements` (nằm giữa package và class declaration).
3. `class / interface declarations`.

#### 2. Quy tắc Public Class:
- Trong một file `.java`, **chỉ được phép có TỐI ĐA 1 public class**.
- Nếu file có chứa một public class, thì **tên của file bắt buộc phải trùng khớp 100% với tên public class đó** (kể cả chữ hoa/thường). Ví dụ class `public class MyClass` phải nằm trong file `MyClass.java`.
- Một file có thể chứa **nhiều class không public (default class)**, và khi đó tên file có thể đặt tùy ý không cần trùng tên class nào!

#### 3. Cạm bẫy Import:
- `import java.util.*;` chỉ import các class trực tiếp trong package `java.util`, **KHÔNG IMPORT các class trong package con** như `java.util.regex.*`!
- Hai package chứa class cùng tên: `java.util.Date` và `java.sql.Date`. Nếu import cả 2 với `*`, khi viết `Date d;` compiler sẽ báo lỗi **Ambiguous Class Reference**. Bắt buộc phải khai báo tường minh tên package đầy đủ khi tạo biến.
""",
        "code": """// File: MultiClassDemo.java (Tên file hợp lệ)
class A {}
class B {}
class C {}
// File này không có public class nào -> Hợp lệ và biên dịch ra A.class, B.class, C.class!

// import static: Cho phép gọi trực tiếp phương thức tĩnh mà không cần tên class
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

public class StaticImportDemo {
    public static void main(String[] args) {
        System.out.println(sqrt(16)); // Thay vì Math.sqrt(16)
        System.out.println(PI); // Thay vì Math.PI
    }
}"""
    }
]

lessons["3"]["codeTracing"] = [
    {
        "id": "ct_d3_1",
        "level": "Hard",
        "question": "Xét 2 file ở 2 package khác nhau sau đây. Điều gì xảy ra khi biên dịch Sub.java?",
        "code": """// File: p1/Base.java
package p1;
public class Base {
    protected void show() { System.out.println("Base"); }
}

// File: p2/Sub.java
package p2;
import p1.Base;
public class Sub extends Base {
    public static void main(String[] args) {
        Base b = new Sub();
        // b.show(); // Dòng 1
        Sub s = new Sub();
        s.show(); // Dòng 2
    }
}""",
        "options": [
            "Biên dịch thành công và in ra 'Base'",
            "Nếu mở Dòng 1 (b.show()) sẽ bị Compile Error",
            "Dòng 2 bị Compile Error vì phương thức show() là protected",
            "Cả Dòng 1 và Dòng 2 đều không thể truy cập show()"
        ],
        "correctIndex": 1,
        "explanation": "Phương thức show() có phạm vi protected trong package p1. Class Sub ở package p2 kế thừa Base. Tại Dòng 2, biến tham chiếu `s` là kiểu `Sub` nên được phép gọi `show()`. Nhưng ở Dòng 1, biến `b` là kiểu `Base`, đứng trong package p2 gọi phương thức protected qua tham chiếu của Base sẽ bị chặn bởi compiler: 'show() has protected access in Base'."
    }
]

lessons["3"]["examTraps"] = [
    {
        "trap": "Bẫy import package con (Sub-packages không tự động import)",
        "whyPeopleWrong": "Tưởng rằng import java.awt.* sẽ tự động dùng được các class trong java.awt.event.*.",
        "wrongThinking": "Nghĩ rằng dấu hoa thị * import toàn bộ cây thư mục.",
        "correctRule": "Dấu * chỉ đại diện cho tất cả các class nằm TRỰC TIẾP trong package đó, hoàn toàn không bao gồm các class thuộc package con.",
        "code": "import java.awt.*;\n// Button b; // OK (nằm trong java.awt)\n// ActionEvent e; // COMPILE ERROR: Không tìm thấy class ActionEvent (nó nằm trong java.awt.event.*)!",
        "miniCheck": "Luôn nhớ package trong Java không có quan hệ kế thừa phân cấp, java.util và java.util.concurrent là 2 package độc lập hoàn toàn."
    }
]

lessons["3"]["dailyAssessment"] = [
    {
        "id": "da_3_1",
        "q": "Một file Java có tên `Test.java` chứa các dòng sau:\n```java\npackage mypack;\nimport java.io.*;\nclass A {}\nclass B {}\n```\nFile này có biên dịch hợp lệ không?",
        "options": [
            "Hợp lệ hoàn toàn và sinh ra A.class và B.class",
            "Lỗi biên dịch vì tên file Test.java không trùng với class A hay class B",
            "Lỗi biên dịch vì file bắt buộc phải có ít nhất 1 public class",
            "Lỗi biên dịch vì có nhiều hơn 1 class trong cùng 1 file"
        ],
        "correct": 0,
        "exp": "Một file Java không bắt buộc phải có public class. Khi không có public class nào, tên file có thể đặt tùy ý và file có thể chứa bao nhiêu class default tùy thích."
    }
]

# Save back to daily_lessons.json
with open('data/daily_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print("Enriched Day 2 and Day 3 with deep master curriculum!")
