import json

with open('data/daily_lessons.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

# ====================================================================
# DAY 8: Chapter 4 - Flow Control (if, switch, loops)
# ====================================================================
lessons["8"]["chapter"] = "Chapter 4: Flow Control"
lessons["8"]["estimatedTime"] = "3h 30m"
lessons["8"]["difficulty"] = "⭐⭐⭐"
lessons["8"]["priority"] = "🔴 MUST KNOW (Trọng Tâm SCJP & TestKing)"
lessons["8"]["source"] = "SCJP Chapter 4 (Ch04.pdf) & TestKing"
lessons["8"]["objectives"] = [
    "Nắm vững các kiểu dữ liệu hợp lệ trong switch: byte, short, char, int, enum, String.",
    "Quy tắc bất biến của nhãn case: Phải là hằng số hoặc biến final đã khởi tạo tại thời điểm biên dịch (Compile-time Constant).",
    "Hiện tượng rơi tự do (Fall-Through) khi thiếu lệnh break trong switch.",
    "Vòng lặp có nhãn (Labeled break / continue): Thoát hoặc nhảy bước ở vòng lặp ngoài lồng nhau."
]
lessons["8"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Toàn Diện Cấu Trúc switch & Cạm Bẫy Nhãn case",
        "sourceRef": "SCJP Objective 2.1 (Ch04.pdf, Page 4-18)",
        "theory": """
#### 1. Các kiểu dữ liệu ĐƯỢC PHÉP dùng trong switch:
- Trong Java 1.4/5/6: `byte`, `short`, `char`, `int` (và các Wrapper tương ứng), `enum`.
- Từ Java 7: Bổ sung thêm `String`.
- **CẤM DÙNG TRONG switch (Compile Error):** `long`, `float`, `double`, `boolean`!

#### 2. Quy tắc của nhãn case:
- Biểu thức trong `case` **BẮT BUỘC PHẢI LÀ COMPILE-TIME CONSTANT** (hằng số hoặc biến `final` đã có giá trị lúc compile). Biến thường không thể làm case!
- Giá trị trong case phải nằm trong khoảng biểu diễn của kiểu dữ liệu ở switch (ví dụ `byte b` thì `case 200:` bị Compile Error vì 200 vượt quá byte).
- Hai case không được phép trùng giá trị (Duplicate case label).

#### 3. Hiện tượng Fall-Through:
- Nếu khớp một `case` mà **KHÔNG CÓ LỆNH `break`**, luồng thực thi sẽ rơi tự do và chạy tiếp TẤT CẢ các lệnh của các case bên dưới (kể cả khối `default`) cho đến khi gặp `break` hoặc hết switch!
""",
        "code": """int x = 2;
final int ONE = 1;
int two = 2; // Biến thường, không có final!

switch (x) {
    case ONE: System.out.print("1 "); break;
    // case two: // COMPILE ERROR: constant expression required!
    case 2: System.out.print("2 "); // Không có break -> Fall-through!
    case 3: System.out.print("3 "); break;
    default: System.out.print("def ");
}
// In ra: 2 3"""
    },
    {
        "id": "partB",
        "title": "Part B: Labeled break và continue trong Vòng Lặp Lồng Nhau",
        "sourceRef": "SCJP Objective 2.2 (Ch04.pdf, Page 20-28)",
        "theory": """
Trong các vòng lặp lồng nhau (Nested Loops), lệnh `break` hoặc `continue` thông thường chỉ tác động lên **vòng lặp trong cùng gần nhất**.

Để can thiệp vào vòng lặp cha bên ngoài, Java cung cấp cơ chế **Nhãn (Label)**:
- `break outerLabel;`: Lập tức thoát khỏi hoàn toàn vòng lặp có gắn nhãn `outerLabel`.
- `continue outerLabel;`: Dừng lần lặp hiện tại của vòng lặp trong, nhảy thẳng về bước lặp tiếp theo của vòng lặp `outerLabel`.
""",
        "code": """outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outer; // Thoát hẳn cả 2 vòng lặp!
        }
        System.out.print(i + "" + j + " ");
    }
}
// In ra: 00 01 02 10"""
    }
]

lessons["8"]["codeTracing"] = [
    {
        "id": "ct_d8_1",
        "level": "Hard",
        "question": "Kết quả in ra của đoạn mã sau là gì?",
        "code": """public class SwitchTrap {
    public static void main(String[] args) {
        int k = 1;
        switch (k) {
            default: System.out.print("def ");
            case 2: System.out.print("2 "); break;
            case 3: System.out.print("3 ");
        }
    }
}""",
        "options": ["def 2 ", "def ", "3 ", "def 2 3 "],
        "correctIndex": 0,
        "explanation": "1. `k = 1` không khớp với `case 2` hay `case 3`, do đó chương trình nhảy vào khối `default:`.\n2. In ra: `def `.\n3. Do sau `default:` không có câu lệnh `break`, chương trình bị Fall-Through rơi xuống `case 2:` và in tiếp `2 `.\n4. Tại `case 2:` có lệnh `break;`, chương trình thoát khỏi switch. Kết quả: `def 2 `."
    }
]

lessons["8"]["examTraps"] = [
    {
        "trap": "Vị trí của khối default trong switch",
        "whyPeopleWrong": "Tưởng rằng default luôn luôn được thực thi ở cuối cùng.",
        "wrongThinking": "Nghĩ rằng default đặt ở đầu hay ở giữa sẽ chạy trước các case.",
        "correctRule": "Khối default CHỈ ĐƯỢC CHẠY khi không có bất kỳ case nào khớp. Tuy nhiên, nếu default không có lệnh break, luồng thực thi vẫn bị Fall-Through rơi tiếp xuống các case nằm phía dưới nó!",
        "code": "int x = 99;\nswitch(x) {\n    default: System.out.print(\"D \");\n    case 1: System.out.print(\"1 \");\n}\n// In ra: D 1 (Rơi tự do từ default xuống case 1!)",
        "miniCheck": "Kiểm tra xem default có break hay không, nếu không có break thì các lệnh bên dưới nó vẫn bị thực thi!"
    }
]

lessons["8"]["dailyAssessment"] = [
    {
        "id": "da_8_1",
        "q": "Kiểu dữ liệu nào sau đây KHÔNG THỂ sử dụng làm biểu thức điều kiện trong switch (Java 8)?",
        "options": ["long", "char", "String", "byte"],
        "correct": 0,
        "exp": "Trong Java, switch không hỗ trợ kiểu long, float, double, và boolean. Các kiểu được hỗ trợ là byte, short, char, int, enum, String."
    }
]

# ====================================================================
# DAY 9: Chapter 4 - Exceptions & Assertions
# ====================================================================
lessons["9"]["chapter"] = "Chapter 4: Exceptions & Assertions"
lessons["9"]["estimatedTime"] = "3h 30m"
lessons["9"]["difficulty"] = "⭐⭐⭐⭐"
lessons["9"]["priority"] = "🔴 MUST KNOW (Trọng Tâm Hàng Đầu Entry Test)"
lessons["9"]["source"] = "SCJP Chapter 4 (Ch04.pdf) & TestKing"
lessons["9"]["objectives"] = [
    "Vẽ chuẩn xác Cây phả hệ Ngoại lệ (Throwable -> Error & Exception -> RuntimeException).",
    "Phân biệt Checked Exception vs Unchecked Exception.",
    "Làm chủ thứ tự bắt lỗi: Phải bắt ngoại lệ con TRƯỚC ngoại lệ cha (Unreachable catch block error).",
    "Cạm bẫy khối finally: Return trong finally ghi đè mọi return trước đó; System.exit(0) là trường hợp duy nhất finally không chạy.",
    "Cú pháp và cờ bật Assertion: assert expression1 : expression2, java -ea."
]
lessons["9"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Cây Phả Hệ Ngoại Lệ & Quy Tắc Try-Catch",
        "sourceRef": "SCJP Objective 2.4 & 2.5 (Ch04.pdf, Page 30-55)",
        "theory": """
#### 1. Cây Phả Hệ Ngoại Lệ:
- **`Throwable`** (Gốc rễ cao nhất):
  - **`Error`**: Các lỗi nghiêm trọng thuộc về hạ tầng hệ thống/JVM (`OutOfMemoryError`, `StackOverflowError`). Chương trình KHÔNG NÊN cố gắng bắt (catch) lỗi này.
  - **`Exception`**:
    - **`RuntimeException` (Unchecked Exception)**: Lỗi do sai sót logic lập trình (`NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException`, `ClassCastException`). Không bắt buộc phải try-catch.
    - **Checked Exception**: Tất cả các Exception khác không thuộc nhánh Runtime (`IOException`, `SQLException`, `ClassNotFoundException`). Bắt buộc phải xử lý bằng `try-catch` hoặc khai báo `throws`.

#### 2. Quy tắc thứ tự các khối catch:
- Các khối `catch` phải được sắp xếp theo thứ tự **TỪ CON ĐẾN CHA** (từ cụ thể đến tổng quát).
- Nếu đặt `catch (Exception e)` lên trước `catch (IOException e)`, trình biên dịch sẽ báo lỗi: **\"Exception java.io.IOException has already been caught (Unreachable block)\"**.
""",
        "code": """try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Bắt đúng lỗi con cụ thể trước!");
} catch (Exception e) {
    System.out.println("Bắt lỗi cha tổng quát sau!");
}
// Nếu đảo ngược 2 khối catch trên -> COMPILE ERROR!"""
    },
    {
        "id": "partB",
        "title": "Part B: Bẫy Khối Finally & Cú Pháp Assertions",
        "sourceRef": "SCJP Objective 2.6 (Ch04.pdf, Page 56-78)",
        "theory": """
#### 1. Các Cạm Bẫy của khối finally:
- Khối `finally` **LUÔN LUÔN ĐƯỢC THỰC THI**, bất kể có exception xảy ra hay không, kể cả khi trong `try` hoặc `catch` có lệnh `return`!
- **Bẫy Ghi đè Return:** Nếu khối `try` return giá trị `A`, nhưng `finally` return giá trị `B`, thì giá trị cuối cùng trả về sẽ là `B`! Lệnh return của finally ghi đè và dập tắt mọi return hoặc exception đang ném ra trước đó.
- **Trường hợp duy nhất finally không chạy:** Khi có lệnh **`System.exit(0);`** (hoặc JVM bị crash/mất nguồn).

#### 2. Cơ chế Assertions trong Java:
- Cú pháp: `assert expression1;` hoặc `assert expression1 : expression2;` (trong đó expression1 phải trả về `boolean`, expression2 là thông điệp hiển thị khi sai).
- Mặc định khi chạy chương trình, **Assertions bị TẮT**. Muốn bật phải truyền cờ **`-ea` (enableassertions)** vào máy ảo: `java -ea MyClass`.
""",
        "code": """public class FinallyTrap {
    public static int test() {
        try {
            return 1;
        } finally {
            return 2; // Ghi đè toàn bộ! Hàm trả về 2!
        }
    }
    public static void main(String[] args) {
        System.out.println(test()); // In ra: 2
    }
}"""
    }
]

lessons["9"]["codeTracing"] = [
    {
        "id": "ct_d9_1",
        "level": "Hard",
        "question": "Chương trình sau in ra kết quả gì?",
        "code": """public class ExTrace {
    public static int calc() {
        int x = 10;
        try {
            x += 5;
            return x;
        } catch (Exception e) {
            x += 10;
            return x;
        } finally {
            x += 20;
            System.out.print(x + " ");
        }
    }
    public static void main(String[] args) {
        System.out.println(calc());
    }
}""",
        "options": ["35 15", "35 35", "15 35", "Compile Error"],
        "correctIndex": 0,
        "explanation": "1. Trong try: `x += 5` -> `x = 15`. Gặp lệnh `return x;`, Java sao chép giá trị 15 vào bộ nhớ đệm trả về.\n2. Trước khi return, Java bắt buộc phải chạy khối `finally`.\n3. Trong finally: `x += 20` -> `x = 35`. Lệnh `System.out.print(x + \" \")` in ra `35 `.\n4. Vì trong finally KHÔNG CÓ lệnh return mới, giá trị trả về đã được lưu đệm từ try (15) được xuất ra ở hàm main.\n-> Kết quả in ra: `35 15`."
    }
]

lessons["9"]["examTraps"] = [
    {
        "trap": "Finally thay đổi biến kiểu primitive trong try return",
        "whyPeopleWrong": "Thấy finally tăng x += 20 nên tưởng giá trị return của hàm cũng tăng theo.",
        "wrongThinking": "Tưởng rằng return x sẽ đọc giá trị x sau khi finally chạy xong.",
        "correctRule": "Khi try gặp return primitive, giá trị đó đã được copy lưu trữ vào ngăn xếp trả về. Các thay đổi đối với biến primitive trong finally không làm thay đổi giá trị trả về trừ khi chính finally có lệnh return riêng!",
        "code": "int x = 5;\ntry { return x; } finally { x = 10; } // Vẫn trả về 5!",
        "miniCheck": "Chỉ khi trong finally có chữ 'return' thì giá trị return mới bị ghi đè."
    }
]

lessons["9"]["dailyAssessment"] = [
    {
        "id": "da_9_1",
        "q": "Lớp nào sau đây là Checked Exception?",
        "options": ["java.io.IOException", "java.lang.NullPointerException", "java.lang.ArrayIndexOutOfBoundsException", "java.lang.ClassCastException"],
        "correct": 0,
        "exp": "IOException kế thừa trực tiếp từ Exception (không thuộc nhánh RuntimeException) nên là Checked Exception, bắt buộc phải có try-catch hoặc throws."
    }
]

# Save back to daily_lessons.json
with open('data/daily_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print("Enriched Day 8 and Day 9 with deep master curriculum!")
