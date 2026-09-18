import json
import os

# Full 50 questions across 5 core domains:
# 1. Java Core (1-12)
# 2. Java 8+ Modern (13-20)
# 3. Database & SQL (21-30)
# 4. JavaWeb (31-40)
# 5. Spring Framework (41-50)

with open('data/audit_questions.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

# Let's inspect current questions count
print(f"Existing count: {len(existing)}")
