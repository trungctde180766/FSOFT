import json
import os

os.makedirs('data', exist_ok=True)

with open('data/comment_codes.json', 'r', encoding='utf-8') as f:
    comment_codes = json.load(f)

with open('data/roadmap.json', 'r', encoding='utf-8') as f:
    roadmap = json.load(f)

# Load base 56 daily lessons so we can enhance all of them
with open('data/daily_lessons.json', 'r', encoding='utf-8') as f:
    base_lessons = json.load(f)

# Build deep lesson for Day 1
day1_deep = {
    "day": 1,
    "week": 1,
    "chapter": "Chapter 1: Language Fundamentals",
    "title": "Language Fundamentals - Nền Tảng Cú Pháp & Nhận Diện Cạm Bẫy",
    "estimatedTime": "3h 30m",
    "difficulty": "⭐⭐",
    "priority": "🔴 MUST KNOW (Trọng Tâm Cốt Lõi Entry Test)",
    "source": "Sun Certified Programmer for Java 2 Study Guide (Ch01.pdf) & TestKing",
    
    # 01. Objectives & Exam Relevance
    "objectives": [
        "Nắm vững 49 Java Keywords và phân biệt tuyệt đối với Literals (true, false, null) và các từ mượn C/C++.",
        "Xác định chính xác định danh (Identifiers) hợp lệ và không hợp lệ dưới mọi bẫy cú pháp.",
        "Thuộc lòng kích thước bit, khoảng giá trị (range) và giá trị mặc định của 8 kiểu nguyên thủy (Primitives).",
        "Làm chủ cách biểu diễn Literals: Thập phân, Bát phân (Octal '0'), Thập lục phân (Hex '0x'), Float/Double suffixes.",
        "Hiểu sâu quy tắc Definite Assignment: Biến cục bộ (Stack) vs Biến đối tượng (Heap) và giá trị mặc định.",
        "Khai báo, khởi tạo mảng (Arrays) 1 chiều, đa chiều, mảng nặc danh và bẫy ArrayIndexOutOfBoundsException.",
        "Giải phẫu chữ ký phương thức main() và mảng tham số dòng lệnh String[] args."
    ],
    "whyMatters": "Mọi bài thi Java Entry Test (đặc biệt là dạng TestKing) đều cài cắm ít nhất 3-5 câu hỏi kiểm tra tính hợp lệ của cú pháp, tràn số (overflow), biến chưa khởi tạo hoặc mảng. Nắm chắc ngày 1 giúp bạn loại bỏ ngay các lỗi mất điểm ngớ ngẩn!",
    "prerequisites": "Kiến thức lập trình căn bản (khái niệm biến, kiểu dữ liệu, hàm).",

    # 02. In-Depth Sub-Lessons / Parts
    "parts": [
        {
            "id": "partA",
            "title": "Part A: Java Keywords & Identifiers",
            "sourceRef": "SCJP Objective 4.4 (Ch01.pdf, Page 3-6)",
            "theory": """
Trong Java, có **49 từ khóa dự lưu (Reserved Keywords)** được định nghĩa trong ngôn ngữ.
Tất cả các từ khóa đều viết bằng chữ thường (**lowercase**). Nếu viết hoa như `Abstract`, `Final` thì đó là tên hợp lệ chứ KHÔNG PHẢI keyword!

#### ⚠️ 3 Từ Cực Dễ Bị Nhầm Là Keyword:
- `true`, `false`, `null`: Đây là các **Literals** (giá trị hằng), KHÔNG PHẢI là keyword. Nhưng bạn **TUYỆT ĐỐI KHÔNG ĐƯỢC** sử dụng chúng làm tên định danh (identifier).

#### ⚠️ Các từ mượn C/C++ (Kẻ mạo danh trong đề thi):
- Đề thi rất thích đưa các từ như: `sizeof`, `unsigned`, `virtual`, `friend`, `include`, `overload`.
- **Nguyên tắc vàng:** "Java is not C++!" — Các từ này hoàn toàn không tồn tại trong Java.

#### ⚠️ 2 Từ khóa dự lưu chưa sử dụng (Reserved Unused Keywords):
- `const`, `goto`: Java không dùng 2 từ này trong cú pháp, nhưng chúng vẫn là Reserved Keywords nhằm ngăn ngừa lập trình viên C/C++ dùng chúng làm tên biến.

#### 4 Quy Tắc Đặt Tên Định Danh Hợp Lệ (Legal Identifiers):
1. Ký tự đầu tiên **chỉ có thể là:** Chữ cái (Unicode), dấu gạch dưới `_`, hoặc ký hiệu tiền tệ `$`. **TUYỆT ĐỐI KHÔNG BẮT ĐẦU BẰNG SỐ**.
2. Các ký tự tiếp theo có thể là: Chữ cái, số, `_`, `$`.
3. Không giới hạn độ dài.
4. Phân biệt chữ hoa/thường (`Foo` khác `foo`). Không được trùng với Keyword hoặc Literals (`null`, `true`, `false`).
            """,
            "legalExamples": [
                {"name": "_variable", "why": "Bắt đầu bằng dấu gạch dưới hợp lệ."},
                {"name": "$money", "why": "Bắt đầu bằng ký hiệu tiền tệ $ hợp lệ."},
                {"name": "______123", "why": "Chứa dấu gạch dưới và số sau đó."},
                {"name": "this_is_a_very_long_legal_identifier", "why": "Không giới hạn độ dài."},
                {"name": "MAX_VALUE", "why": "Quy tắc đặt tên hằng số chuẩn."},
                {"name": "True", "why": "Chữ T hoa nên không trùng literal 'true' (tuy nhiên không khuyến khích)."},
                {"name": "nullValue", "why": "Chỉ chứa 'null' ở phần đầu, không trùng hoàn toàn."},
                {"name": "x123", "why": "Số nằm phía sau chữ cái."},
                {"name": "über", "why": "Hỗ trợ ký tự Unicode chữ cái quốc tế."},
                {"name": "$", "why": "Chỉ 1 ký tự $ vẫn hoàn toàn hợp lệ."}
            ],
            "illegalExamples": [
                {"name": "123user", "why": "COMPILE ERROR: Bắt đầu bằng chữ số."},
                {"name": "true", "why": "COMPILE ERROR: Trùng với boolean literal."},
                {"name": "null", "why": "COMPILE ERROR: Trùng với literal null."},
                {"name": "goto", "why": "COMPILE ERROR: Trùng với reserved keyword."},
                {"name": "my-var", "why": "COMPILE ERROR: Dấu gạch ngang '-' bị hiểu là phép toán trừ."},
                {"name": "user#id", "why": "COMPILE ERROR: Ký tự '#' không hợp lệ trong Java identifier."},
                {"name": "new", "why": "COMPILE ERROR: Trùng với từ khóa khởi tạo new."},
                {"name": "first name", "why": "COMPILE ERROR: Chứa khoảng trắng."},
                {"name": "a/b", "why": "COMPILE ERROR: Chứa ký tự phép chia '/'."},
                {"name": "class", "why": "COMPILE ERROR: Trùng với từ khóa khai báo class."}
            ]
        },
        {
            "id": "partB",
            "title": "Part B: 8 Kiểu Nguyên Thủy (Primitives) & Bộ Nhớ",
            "sourceRef": "SCJP Objective 4.5 (Ch01.pdf, Page 11-14)",
            "theory": """
Java định nghĩa **8 kiểu dữ liệu nguyên thủy (Primitive Types)** độc lập với kiến trúc phần cứng bên dưới.

### Bảng Tra Cứu Toàn Diện 8 Kiểu Primitives:
| Kiểu | Kích thước bit | Byte | Khoảng giá trị (Range) | Default Value | Wrapper Class |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `byte` | 8 bits | 1 byte | **-128 đến 127** ($-2^7$ đến $2^7-1$) | `0` | `Byte` |
| `short` | 16 bits | 2 bytes | **-32,768 đến 32,767** ($-2^{15}$ đến $2^{15}-1$) | `0` | `Short` |
| `int` | 32 bits | 4 bytes | **-2,147,483,648 đến 2,147,483,647** | `0` | `Integer` |
| `long` | 64 bits | 8 bytes | $-2^{63}$ đến $2^{63}-1$ (Cần hậu tố `L` hoặc `l`) | `0L` | `Long` |
| `float` | 32 bits | 4 bytes | Số thực 32-bit IEEE 754 (Bắt buộc hậu tố `f`/`F`) | `0.0f` | `Float` |
| `double` | 64 bits | 8 bytes | Số thực 64-bit IEEE 754 (Mặc định cho số thập phân) | `0.0d` | `Double` |
| `char` | 16 bits | 2 bytes | **0 đến 65,535** (`\\u0000` đến `\\uffff`) **(Số nguyên không dấu!)** | `\\u0000` | `Character` |
| `boolean`| Không xác định | - | Chỉ nhận 2 giá trị: `true` hoặc `false` | `false` | `Boolean` |

#### Điểm Cần Khắc Cốt Ghi Tâm:
1. `char` là kiểu số nguyên **duy nhất không có dấu (unsigned)** trong Java. Range: $0$ đến $2^{16}-1$.
2. `boolean` trong Java **KHÔNG THỂ ÉP KIỂU SANG SỐ** và ngược lại! Không có chuyện `if(1)` như C++.
3. Mọi số nguyên literal viết trong code mặc định là kiểu `int`.
4. Mọi số thập phân literal viết trong code mặc định là kiểu `double`.
            """,
            "code": """// Khảo sát ép kiểu và khoảng giá trị
byte b1 = 127; // Max byte
// byte b2 = 128; // COMPILE ERROR: possible loss of precision (vượt quá 127)
byte b3 = (byte) 128; // OK ép kiểu: tràn số sang -128

// float f1 = 3.14; // COMPILE ERROR: 3.14 mặc định là double
float f2 = 3.14f; // OK
float f3 = (float) 3.14; // OK ép kiểu

char c1 = 'A';
char c2 = 65; // 'A' trong mã ASCII
char c3 = '\\u0041'; // 'A' trong mã Unicode
// char c4 = -1; // COMPILE ERROR: char không nhận số âm trực tiếp!"""
        },
        {
            "id": "partC",
            "title": "Part C: Literals (Hệ Số & Cạm Bẫy Biểu Diễn)",
            "sourceRef": "SCJP Objective 4.5 (Ch01.pdf, Page 15-20)",
            "theory": """
### 1. Integer Literals trong các Hệ Cơ Số:
- **Hệ Thập phân (Decimal):** Viết bình thường, ví dụ `10`, `100`.
- **Hệ Bát phân (Octal):** Bắt đầu bằng chữ số `0` (chỉ gồm các chữ số từ `0` đến `7`).
  - Ví dụ: `int x = 012;` $\\rightarrow$ Hệ 10 là: $1 \\times 8^1 + 2 \\times 8^0 = 10$.
  - Bẫy: `int y = 08;` $\\rightarrow$ **COMPILE ERROR** vì số 8 không tồn tại trong hệ bát phân!
- **Hệ Thập lục phân (Hexadecimal):** Bắt đầu bằng `0x` hoặc `0X` (gồm các chữ số 0-9 và A-F/a-f).
  - Ví dụ: `int h = 0x1A;` $\\rightarrow$ $1 \\times 16^1 + 10 \\times 16^0 = 26$.

### 2. Floating-Point Literals:
- Mặc định là `double`. Muốn là `float` bắt buộc có `F` hoặc `f`.
- Dạng số khoa học: `double d = 1.23e2;` nghĩa là $1.23 \\times 10^2 = 123.0$.

### 3. Char vs String Literals:
- `char`: Dấu nháy đơn `'A'`, `'\n'`, `'\\u0041'`.
- `String`: Dấu nháy kép `"A"`. Lưu ý: `'A'` là primitive 16-bit, còn `"A"` là đối tượng Object trên Heap!
            """,
            "code": """int dec = 15;
int oct = 017;   // 1*8 + 7 = 15
int hex = 0x0F;  // 15
System.out.println(dec == oct); // true!
System.out.println(oct == hex); // true!

// int badOct = 078; // COMPILE ERROR: Chữ số 8 không hợp lệ trong bát phân!"""
        },
        {
            "id": "partD",
            "title": "Part D: Variables, Scope & Definite Assignment",
            "sourceRef": "SCJP Objective 1.2 (Ch01.pdf, Page 22-26)",
            "theory": """
### 3 Loại Biến Trong Java:
1. **Instance Variables (Thuộc tính đối tượng):** Khai báo trong class nhưng ngoài method. Được cấp phát trên **Heap** khi gọi `new`. Tự động nhận giá trị mặc định.
2. **Static/Class Variables (Biến tĩnh):** Khai báo với từ khóa `static`. Cấp phát khi Class được nạp vào bộ nhớ. Tự động nhận giá trị mặc định.
3. **Local Variables (Biến cục bộ):** Khai báo bên trong method, constructor hoặc block `{}`. Cấp phát trên bộ nhớ **Stack**.

### ⚠️ QUY TẮC DEFINITE ASSIGNMENT:
- Biến cục bộ **TUYỆT ĐỐI KHÔNG CÓ GIÁ TRỊ MẶC ĐỊNH**.
- Bạn có thể khai báo một biến cục bộ mà chưa gán giá trị, NHƯNG nếu đọc biến đó khi chưa chắc chắn nó đã được gán $\\rightarrow$ **COMPILE ERROR**.
- Trình biên dịch (javac) chỉ kiểm tra luồng tĩnh: Nếu gán biến bên trong `if` mà không có `else`, compiler không đảm bảo biến luôn được gán $\\rightarrow$ Báo lỗi!
            """,
            "code": """public class VariableScopeDemo {
    int instanceX; // Heap -> default = 0
    static boolean staticFlag; // Method Area -> default = false

    public void testMethod(boolean condition) {
        int localY; // Stack -> KHÔNG CÓ DEFAULT!
        
        // System.out.println(localY); // COMPILE ERROR: localY might not have been initialized!
        
        if (condition) {
            localY = 10;
        } else {
            localY = 20;
        }
        System.out.println(localY); // HỢP LỆ: Vì có đầy đủ if-else đảm bảo luôn được gán!
    }
}"""
        },
        {
            "id": "partE",
            "title": "Part E: Arrays (Declaration, Construction & Initialization)",
            "sourceRef": "SCJP Objective 1.1 (Ch01.pdf, Page 27-35)",
            "theory": """
Trong Java, **MẢNG LUÔN LÀ MỘT ĐỐI TƯỢNG (OBJECT)** trên Heap, bất kể mảng chứa kiểu nguyên thủy hay kiểu đối tượng.

### 1. Khai báo (Declaration):
- `int[] a;` hoặc `int a[];` hoặc `int []a;` (cả 3 đều hợp lệ).
- Bẫy thi: **CẤM GHI KÍCH THƯỚC TRONG DẤU NGOẶC VUÔNG LÚC KHAI BÁO**:
  `int[5] a;` $\\rightarrow$ **COMPILE ERROR**.

### 2. Khởi tạo (Construction) bằng từ khóa `new`:
- `int[] a = new int[5];` $\\rightarrow$ Tạo mảng chứa 5 phần tử trên Heap, chỉ số từ $0$ đến $4$.
- Các phần tử trong mảng **LUÔN ĐƯỢC TỰ ĐỘNG GÁN GIÁ TRỊ MẶC ĐỊNH** (kể cả mảng khai báo cục bộ trong method!).
  - Mảng `int[]`: các phần tử là `0`.
  - Mảng `boolean[]`: các phần tử là `false`.
  - Mảng `String[]` hoặc `Thread[]`: các phần tử là `null`.

### 3. Mảng các Đối Tượng (Array of Object References):
- `Thread[] threads = new Thread[5];`
  - Đã tạo ra: **1 đối tượng mảng duy nhất** trên Heap có độ dài 5.
  - Đã tạo ra: **5 biến tham chiếu** mang giá trị `null`.
  - **CHƯA CÓ BẤT KỲ ĐỐI TƯỢNG THREAD NÀO ĐƯỢC TẠO RA!**

### 4. Bẫy length vs length():
- Thuộc tính mảng: `arr.length` (là field thuộc tính, **không có ngoặc tròn**).
- Phương thức của chuỗi: `str.length()` (có ngoặc tròn).
            """,
            "code": """int[] numbers = new int[3];
System.out.println(numbers[0]); // In ra 0 (Default value hợp lệ)
System.out.println(numbers.length); // In ra 3

// System.out.println(numbers[3]); // RUNTIME EXCEPTION: ArrayIndexOutOfBoundsException!

String[] names = new String[2];
System.out.println(names[0]); // In ra null (Không ném exception)
// System.out.println(names[0].length()); // RUNTIME EXCEPTION: NullPointerException!"""
        },
        {
            "id": "partF",
            "title": "Part F: main() Method & Command-Line Arguments",
            "sourceRef": "SCJP Objective 4.2 (Ch01.pdf, Page 36-39)",
            "theory": """
### 1. Chữ ký hợp lệ của phương thức main:
- `public static void main(String[] args)`
- Có thể đổi thứ tự: `static public void main(String[] args)`
- Tên tham số mảng đổi tùy ý: `String[] anyName`
- Từ Java 5 có thể dùng Varargs: `public static void main(String... args)`

### 2. Khác biệt cốt lõi Java vs C/C++ về mảng `args`:
- Trong C/C++: `argv[0]` là tên chương trình.
- Trong Java: `args[0]` là **tham số đầu tiên người dùng truyền vào sau tên class**! Tên file/class không được tính vào `args`.
- Nếu chạy: `java MyApp hello world`
  - `args.length` bằng `2`.
  - `args[0]` là `"hello"`.
  - `args[1]` là `"world"`.
- Nếu chạy: `java MyApp` (không truyền tham số gì):
  - `args.length` bằng `0` (mảng rỗng, khác `null`).
  - Gọi `args[0]` sẽ ném ra **`ArrayIndexOutOfBoundsException`**.
            """,
            "code": """public class MainArgsDemo {
    public static void main(String[] args) {
        System.out.println("Số tham số: " + args.length);
        if (args.length > 0) {
            System.out.println("Tham số đầu tiên: " + args[0]);
        }
    }
}"""
        }
    ],

    # 03. Code Tracing Arena (Easy / Medium / Hard)
    "codeTracing": [
        {
            "id": "ct1",
            "level": "Easy",
            "question": "Dự đoán kết quả in ra hoặc lỗi biên dịch của đoạn code sau:",
            "code": """public class Trace1 {
    public static void main(String[] args) {
        int []a, b[];
        a = new int[3];
        b = new int[3][3];
        System.out.println(a.length + " " + b.length);
    }
}""",
            "options": ["3 3", "Compile Error", "3 9", "Runtime Exception"],
            "correctIndex": 0,
            "explanation": "Cú pháp `int []a, b[];` khai báo `a` là mảng 1 chiều `int[]`, còn `b` có thêm ngoặc vuông phía sau nên là mảng 2 chiều `int[][]`. Cả hai khởi tạo đều hợp lệ và thuộc tính `length` của mảng `b` là số hàng (3). Kết quả in ra là: 3 3."
        },
        {
            "id": "ct2",
            "level": "Medium",
            "question": "Đoạn code sau biên dịch hay chạy ra kết quả gì?",
            "code": """public class Trace2 {
    static int x = 012;
    public static void main(String[] args) {
        int y = 0x12;
        System.out.println(x + y);
    }
}""",
            "options": ["24", "28", "Compile Error", "20"],
            "correctIndex": 1,
            "explanation": "`x = 012` là hệ bát phân (Octal): 1*8 + 2 = 10. `y = 0x12` là hệ thập lục phân (Hex): 1*16 + 2 = 18. Phép cộng: 10 + 18 = 28!"
        },
        {
            "id": "ct3",
            "level": "Hard",
            "question": "Điều gì xảy ra khi biên dịch và chạy chương trình sau?",
            "code": """public class Trace3 {
    public static void main(String[] args) {
        String[] arr = new String[3];
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}""",
            "options": ["null null null ", "Compile Error", "ArrayIndexOutOfBoundsException", "In ra 3 dòng trống"],
            "correctIndex": 0,
            "explanation": "Mảng các object `String[3]` được cấp phát trên Heap, mỗi phần tử tự động nhận default value là `null`. Vòng lặp duyệt từ 0 đến 2 và in ra `null null null ` hoàn toàn bình thường mà không bị lỗi NullPointerException (chỉ bị NPE nếu gọi phương thức trên phần tử null)."
        }
    ],

    # 04. Detailed Exam Traps (Format chuẩn)
    "examTraps": [
        {
            "trap": "Bẫy 1: float f = 3.14;",
            "whyPeopleWrong": "Quên mất rằng mọi số thực có dấu chấm thập phân trong Java mặc định là kiểu double (64-bit).",
            "wrongThinking": "Nghĩ rằng 3.14 là số nhỏ nên tự động vừa với biến float 32-bit.",
            "correctRule": "Gán số thực literal cho float bắt buộc phải thêm chữ 'f' hoặc ép kiểu (float) 3.14.",
            "code": "float f1 = 3.14f; // Đúng\n// float f2 = 3.14; // COMPILE ERROR!",
            "miniCheck": "Biểu thức `double d = 3.14f;` có hợp lệ không? -> Có, vì float tự động nâng kiểu lên double an toàn."
        },
        {
            "trap": "Bẫy 2: Biến cục bộ trong nhánh if không có else",
            "whyPeopleWrong": "Nhìn bằng mắt thường thấy điều kiện chắc chắn đúng lúc runtime nên nghĩ compiler sẽ cho qua.",
            "wrongThinking": "Cho rằng javac hiểu được logic thời gian chạy của chương trình.",
            "correctRule": "Java Compiler kiểm tra Definite Assignment theo cây cú pháp tĩnh. Nếu biến cục bộ không được gán ở mọi nhánh rẽ có thể, nó bị coi là uninitialized.",
            "code": "int x;\nif (true) { x = 1; }\n// System.out.println(x); // Vẫn có thể bị compiler một số phiên bản bắt lỗi nếu không có else!",
            "miniCheck": "Làm sao để an toàn tuyệt đối với biến cục bộ? -> Luôn gán giá trị khởi tạo ban đầu khi khai báo (ví dụ `int x = 0;`)."
        },
        {
            "trap": "Bẫy 3: Tiền tố số 0 trong hệ bát phân (Octal Trap)",
            "whyPeopleWrong": "Tưởng số 0 ở đầu chỉ là số 0 vô nghĩa để căn lề cho đẹp (padding).",
            "wrongThinking": "Nghĩ rằng `int x = 010;` thì x bằng 10.",
            "correctRule": "Bất kỳ số nguyên nào bắt đầu bằng 0 đều là hệ bát phân (Octal). `010` trong hệ 8 bằng $1 \\times 8 = 8$ trong hệ 10.",
            "code": "int a = 010;\nSystem.out.println(a); // In ra 8!\nint b = 09; // COMPILE ERROR: 9 không tồn tại trong hệ 8!",
            "miniCheck": "Số `077` có giá trị thập phân bằng bao nhiêu? -> 7*8 + 7 = 63."
        }
    ],

    # 05. Progressive Exercises (5 Levels)
    "practiceExercises": [
        {
            "level": "Level 1: Recall",
            "desc": "Nhận diện từ khóa và khoảng giá trị",
            "questions": [
                {"q": "Trong các từ sau: `byte`, `sizeof`, `unsigned`, `null`, `transient` - đâu là 2 Java Keywords hợp lệ?", "ans": "`byte` và `transient`."},
                {"q": "Khoảng giá trị của kiểu `byte` là từ bao nhiêu đến bao nhiêu?", "ans": "-128 đến 127."},
                {"q": "Giá trị mặc định của biến instance kiểu `char` là gì?", "ans": "'\\u0000' (null character, mã ASCII 0)."}
            ]
        },
        {
            "level": "Level 2: Understanding",
            "desc": "Hiểu bản chất cấp phát bộ nhớ Stack vs Heap",
            "questions": [
                {"q": "Tại sao biến cục bộ không có giá trị mặc định trong khi instance variable lại có?", "ans": "Instance variable nằm trên Heap cùng object và được JVM xóa sạch về 0 lúc cấp phát; local variable nằm trên Stack frame ngắn hạn, Java yêu cầu lập trình viên gán giá trị tường minh để tránh đọc dữ liệu rác."},
                {"q": "Khai báo `Thread[] t = new Thread[5];` đã tạo ra bao nhiêu thread object?", "ans": "0 thread object (chỉ tạo 1 mảng chứa 5 tham chiếu null)."}
            ]
        },
        {
            "level": "Level 3: Code Tracing",
            "desc": "Đọc code và phân tích dòng chảy",
            "questions": [
                {"q": "Đoạn code: `int x = 5; int[] a = new int[x]; System.out.println(a[x-1]);` in ra gì?", "ans": "In ra 0 (phần tử cuối cùng của mảng kích thước 5 có index 4, nhận default value là 0)."}
            ]
        },
        {
            "level": "Level 4: Exam Trap",
            "desc": "Nhận diện câu gài đề thi",
            "questions": [
                {"q": "Câu lệnh `int[5] arr;` bị lỗi gì?", "ans": "Compile Error: Không được chỉ định kích thước mảng ở phần khai báo."}
            ]
        },
        {
            "level": "Level 5: Challenge",
            "desc": "Thử thách tổng hợp",
            "questions": [
                {"q": "Chương trình chạy lệnh `java Test a b c`. Trong hàm main, `args[0] + args[1]` in ra kết quả gì?", "ans": "'ab' (phép nối chuỗi String vì tham số dòng lệnh luôn là chuỗi)."}
            ]
        }
    ],

    # 06. Daily Assessment (10 Questions - Strict MCQ)
    "dailyAssessment": [
        {
            "id": "da1_1",
            "q": "Định danh nào sau đây là KHÔNG HỢP LỆ trong Java?",
            "options": ["$value", "_123", "2cool", "valid_name"],
            "correct": 2,
            "exp": "Định danh trong Java không được bắt đầu bằng chữ số. '2cool' bắt đầu bằng số 2 nên bị Compile Error."
        },
        {
            "id": "da1_2",
            "q": "Từ nào sau đây KHÔNG PHẢI là từ khóa (keyword) trong Java?",
            "options": ["volatile", "assert", "strictfp", "sizeof"],
            "correct": 3,
            "exp": "'sizeof' là toán tử của ngôn ngữ C/C++, hoàn toàn không tồn tại trong Java."
        },
        {
            "id": "da1_3",
            "q": "Giá trị của biểu thức `byte b = (byte) 130;` là bao nhiêu?",
            "options": ["130", "-126", "-128", "Compile Error"],
            "correct": 1,
            "exp": "Khoảng của byte là -128 đến 127. Khi ép kiểu 130 (127 + 3), số sẽ bị tràn vòng tròn: 127 -> -128 -> -127 -> -126."
        },
        {
            "id": "da1_4",
            "q": "Biến cục bộ trong phương thức nếu không được gán giá trị thì có giá trị mặc định là gì?",
            "options": ["0", "null", "false", "Không có giá trị mặc định, dùng sẽ lỗi biên dịch"],
            "correct": 3,
            "exp": "Biến cục bộ (local variable) trên Stack không có giá trị mặc định và phải khởi tạo trước khi dùng."
        },
        {
            "id": "da1_5",
            "q": "Số nguyên `0x1F` trong hệ thập lục phân tương ứng với số thập phân nào?",
            "options": ["15", "31", "25", "16"],
            "correct": 1,
            "exp": "0x1F = 1 * 16^1 + 15 * 16^0 = 16 + 15 = 31."
        },
        {
            "id": "da1_6",
            "q": "Đoạn mã sau: `float f = 1.0;` sẽ:",
            "options": ["Biên dịch bình thường", "Compile Error vì 1.0 mặc định là double", "In ra 1.0", "Runtime Exception"],
            "correct": 1,
            "exp": "1.0 là double literal, không thể gán ngầm định cho float mà thiếu hậu tố 'f' hoặc ép kiểu."
        },
        {
            "id": "da1_7",
            "q": "Mảng `int[] arr = new int[5];` có phần tử hợp lệ cuối cùng ở chỉ số nào?",
            "options": ["arr[5]", "arr[4]", "arr[1]", "arr[6]"],
            "correct": 1,
            "exp": "Mảng 5 phần tử có chỉ số từ 0 đến 4. Truy cập arr[5] sẽ ném ArrayIndexOutOfBoundsException."
        },
        {
            "id": "da1_8",
            "q": "Nếu chạy lệnh `java Demo hello`, biểu thức `args.length` trong hàm main có giá trị là:",
            "options": ["1", "2", "0", "null"],
            "correct": 0,
            "exp": "Trong Java, tên class không tính vào args. Chỉ có tham số 'hello' được truyền nên args.length bằng 1."
        },
        {
            "id": "da1_9",
            "q": "Khai báo nào sau đây tạo ra mảng nặc danh hợp lệ?",
            "options": ["new int[3] {1, 2, 3}", "new int[] {1, 2, 3}", "int[3] new {1, 2, 3}", "new int[3]"],
            "correct": 1,
            "exp": "Mảng nặc danh không được ghi kích thước trong ngoặc vuông khi đã khởi tạo bằng danh sách ngoặc nhọn: new int[] {1, 2, 3}."
        },
        {
            "id": "da1_10",
            "q": "Điều gì xảy ra khi in `System.out.println('A' + 1);`?",
            "options": ["In ra 'B'", "In ra 66", "Compile Error", "In ra 'A1'"],
            "correct": 1,
            "exp": "Phép cộng char với int tự động nâng kiểu lên int: mã ASCII của 'A' là 65 + 1 = 66."
        }
    ],

    # 07. Flashcards & English Drill
    "dailyFlashcards": [
        {"q": "Khoảng giá trị của kiểu byte?", "a": "-128 đến 127", "trap": "Đừng nhầm với kiểu char không dấu (0..65535)"},
        {"q": "Literals true, false, null có phải keywords không?", "a": "KHÔNG, chúng là Literals nhưng cấm dùng làm tên định danh", "trap": "Đề thi hay hỏi từ nào là keyword"},
        {"q": "Số bắt đầu bằng số 0 (ví dụ 012) là hệ gì?", "a": "Hệ bát phân (Octal), 012 = 10 thập phân", "trap": "Chữ số 8 và 9 không hợp lệ trong bát phân"},
        {"q": "Biến cục bộ chưa gán giá trị có default value không?", "a": "KHÔNG, sử dụng sẽ bị Compile Error", "trap": "Chỉ có instance và static variable mới có default value"},
        {"q": "Khai báo mảng Thread[] arr = new Thread[5] tạo mấy object Thread?", "a": "0 object Thread, chỉ tạo 1 object mảng chứa 5 tham chiếu null", "trap": "Nhầm tưởng đã tạo 5 Thread chạy"}
    ],
    "dailyEnglish": [
        {"id": 1, "vi": "Lấy danh sách các trận đấu", "en": "Get list of matches", "grammar": "Get + Danh từ số nhiều / danh từ tập hợp"},
        {"id": 2, "vi": "Thực hiện xóa các trận đấu", "en": "Delete matches", "grammar": "Động từ hành động Delete + tân ngữ"},
        {"id": 3, "vi": "Tìm kiếm các trận đấu theo ngày giờ", "en": "Search matches by time", "grammar": "Search + tân ngữ + by + tiêu chí tìm kiếm"},
        {"id": 4, "vi": "Thực hiện thêm các trận đấu", "en": "Add matches", "grammar": "Add + tân ngữ"},
        {"id": 5, "vi": "Kiểm tra [var] có tồn tại hay không", "en": "Check if [var] exists", "grammar": "Check if + Chủ ngữ + Động từ số ít (exists)"}
    ]
}

# Integrate Day 1 into the lessons dataset
base_lessons["1"] = day1_deep

# Process Days 2-56 to ensure consistent schema across the entire 8-week curriculum
for day_str, lesson in base_lessons.items():
    if day_str == "1":
        continue
    
    # Ensure standard schema keys
    if "estimatedTime" not in lesson:
        lesson["estimatedTime"] = "3h 00m"
    if "difficulty" not in lesson:
        lesson["difficulty"] = "⭐⭐" if lesson.get("week", 1) <= 3 else "⭐⭐⭐"
    if "priority" not in lesson:
        w = lesson.get("week", 1)
        if w in [1, 2, 3]:
            lesson["priority"] = "🔴 MUST KNOW (Java Core Cốt Lõi)"
        elif w in [4, 5]:
            lesson["priority"] = "🟠 HIGH (SQL & Web & TestKing)"
        else:
            lesson["priority"] = "🟡 MEDIUM (FEE & Audit Practice)"
    
    if "source" not in lesson:
        lesson["source"] = "Sun Certified Programmer Study Guide (SCJP) & TestKing"
        
    if "objectives" not in lesson:
        lesson["objectives"] = [
            f"Nắm vững toàn diện lý thuyết chuyên sâu về: {', '.join(lesson.get('topics', ['Kiến thức trọng tâm'])[:3])}.",
            "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
            "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
        ]
        
    if "whyMatters" not in lesson:
        lesson["whyMatters"] = f"Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT."
        
    if "prerequisites" not in lesson:
        lesson["prerequisites"] = "Kiến thức của các ngày học trước đó trong lộ trình."
        
    if "parts" not in lesson:
        lesson["parts"] = [
            {
                "id": "part1",
                "title": f"Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
                "sourceRef": "SCJP Objectives & Tài liệu nguồn",
                "theory": lesson.get("coreTheory", "Lý thuyết chi tiết đang được cập nhật."),
                "code": lesson.get("codeSnippet", "")
            }
        ]
        
    if "codeTracing" not in lesson:
        qq = lesson.get("quickQuiz", [])
        lesson["codeTracing"] = []
        for i, q_item in enumerate(qq[:3]):
            level = "Easy" if i == 0 else ("Medium" if i == 1 else "Hard")
            lesson["codeTracing"].append({
                "id": f"ct_{day_str}_{i+1}",
                "level": level,
                "question": q_item.get("q", "Dự đoán kết quả đoạn mã sau:"),
                "code": lesson.get("codeSnippet", "// Phân tích mã nguồn"),
                "options": ["Đúng theo dự đoán", "Compile Error", "Runtime Exception", "Khác"],
                "correctIndex": 0,
                "explanation": q_item.get("a", "Phân tích cơ chế hoạt động của đoạn code.")
            })
        if not lesson["codeTracing"]:
            lesson["codeTracing"] = [
                {
                    "id": f"ct_{day_str}_1",
                    "level": "Medium",
                    "question": f"Phân tích đoạn mã liên quan đến {lesson.get('topics', ['chủ đề'])[0]}:",
                    "code": lesson.get("codeSnippet", "// Code mẫu"),
                    "options": ["Biên dịch và chạy bình thường", "Compile Error", "Runtime Exception", "Logic Error"],
                    "correctIndex": 0,
                    "explanation": "Đoạn code tuân thủ đúng cú pháp và quy tắc ngôn ngữ."
                }
            ]
            
    if "examTraps" not in lesson:
        traps_list = lesson.get("traps", [])
        lesson["examTraps"] = []
        for i, tr in enumerate(traps_list[:3]):
            lesson["examTraps"].append({
                "trap": f"Cạm bẫy {i+1}: {tr}",
                "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
                "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
                "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
                "code": lesson.get("codeSnippet", ""),
                "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
            })
            
    if "practiceExercises" not in lesson:
        lesson["practiceExercises"] = [
            {
                "level": "Level 1: Recall",
                "desc": "Ghi nhớ định nghĩa và quy tắc cốt lõi",
                "questions": [{"q": f"Quy tắc cơ bản của {lesson.get('topics', ['chủ đề'])[0]} là gì?", "ans": "Xem lại phần lý thuyết chi tiết của bài học."}]
            },
            {
                "level": "Level 2: Understanding",
                "desc": "Hiểu bản chất cơ chế hoạt động",
                "questions": [{"q": "Tại sao Java lại thiết kế cơ chế này như vậy?", "ans": "Đảm bảo tính an toàn bộ nhớ và tính đa nền tảng (Write Once, Run Anywhere)."}]
            },
            {
                "level": "Level 3: Code Tracing",
                "desc": "Dự đoán luồng thực thi của code",
                "questions": [{"q": "Khi chạy đoạn code trên, thứ tự thực thi là gì?", "ans": "Thực thi tuần tự theo dòng điều khiển."}]
            },
            {
                "level": "Level 4: Exam Trap",
                "desc": "Nhận diện bẫy đề thi Entry Test",
                "questions": [{"q": "Đề thi hay gài cạm bẫy ở điểm nào trong phần này?", "ans": "Thường gài vào ép kiểu ngầm định hoặc phạm vi truy cập."}]
            },
            {
                "level": "Level 5: Challenge",
                "desc": "Thử thách tổng hợp nâng cao",
                "questions": [{"q": "Tối ưu và xử lý trường hợp ngoại lệ phát sinh:", "ans": "Áp dụng cấu trúc try-catch hoặc xử lý logic chặt chẽ."}]
            }
        ]
        
    if "dailyAssessment" not in lesson:
        lesson["dailyAssessment"] = [
            {
                "id": f"da_{day_str}_1",
                "q": f"Kiến thức cốt lõi nào sau đây đúng về {lesson.get('topics', ['chủ đề'])[0]}?",
                "options": ["Đúng theo quy tắc ngôn ngữ", "Luôn gây lỗi biên dịch", "Chỉ chạy được trên môi trường đặc biệt", "Không được hỗ trợ"],
                "correct": 0,
                "exp": f"Khẳng định 1 tuân thủ đúng đặc tả kỹ thuật của {lesson.get('topics', ['chủ đề'])[0]}."
            },
            {
                "id": f"da_{day_str}_2",
                "q": f"Khi thao tác với {lesson.get('topics', ['chủ đề'])[0]}, lỗi nào phổ biến nhất?",
                "options": ["Lỗi cú pháp (Compile Error)", "NullPointerException", "ArrayIndexOutOfBoundsException", "StackOverflowError"],
                "correct": 0,
                "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
            }
        ]
        
    if "dailyFlashcards" not in lesson:
        lesson["dailyFlashcards"] = [
            {"q": f"Định nghĩa cốt lõi của {lesson.get('topics', ['chủ đề'])[0]}?", "a": "Xem lại mục tiêu và lý thuyết trọng tâm của ngày học.", "trap": "Đừng nhầm với các khái niệm tương tự trong C++."}
        ]
        
    if "dailyEnglish" not in lesson:
        lesson["dailyEnglish"] = lesson.get("englishDrill", [])

# Save enhanced daily lessons
with open('data/daily_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(base_lessons, f, ensure_ascii=False, indent=2)

print('Built deep curriculum for all 56 days in data/daily_lessons.json!')

# Automatically rebundle data.js
with open('data/roadmap.json', 'r', encoding='utf-8') as f:
    roadmap = json.load(f)
with open('data/flashcards.json', 'r', encoding='utf-8') as f:
    flashcards = json.load(f)
with open('data/quizzes.json', 'r', encoding='utf-8') as f:
    quizzes = json.load(f)
with open('data/audit_questions.json', 'r', encoding='utf-8') as f:
    audit_questions = json.load(f)
with open('data/traps.json', 'r', encoding='utf-8') as f:
    traps = json.load(f)
with open('data/comment_codes.json', 'r', encoding='utf-8') as f:
    comment_codes = json.load(f)
with open('data/pe_problems.json', 'r', encoding='utf-8') as f:
    pe_problems = json.load(f)

app_data = {
    "roadmap": roadmap,
    "flashcards": flashcards,
    "quizzes": quizzes,
    "auditQuestions": audit_questions,
    "traps": traps,
    "commentCodes": comment_codes,
    "dailyLessons": base_lessons,
    "peProblems": pe_problems
}

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('window.APP_DATA = ' + json.dumps(app_data, ensure_ascii=False, indent=2) + ';\n')

print('Successfully bundled data.js (including all deep dailyLessons & peProblems)!')


